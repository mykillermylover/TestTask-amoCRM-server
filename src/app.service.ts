import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import {
  ApiResponse,
  EmbeddedContacts,
  EmbeddedLeads,
  EmbeddedUsers,
} from './responses/api.response';
import { LeadsResponse } from './responses/leads.response';
import { ConfigService } from '@nestjs/config';
import { StatusesResponse } from './responses/statuses.response';

@Injectable()
export class AppService {
  private readonly longToken;
  private readonly url;
  constructor(
    private http: HttpService,
    private configService: ConfigService,
  ) {
    // "Долгоиграющий токен"
    this.longToken = this.configService.get('LONG_TOKEN');
    this.url = this.configService.get('API_URL');

    this.http.axiosRef.defaults.headers.common['Authorization'] =
      `Bearer ${this.longToken}`;
  }
  async getLeads(query: string) {
    if (query?.length < 3) query = '';
    const { data } = await lastValueFrom(
      this.http.get<ApiResponse<EmbeddedLeads>>(`${this.url}/api/v4/leads`, {
        params: {
          query,
          with: 'contacts,loss_reason',
        },
      }),
    );
    return data._embedded.leads;
  }

  async addContactInfo(leads: LeadsResponse[]) {
    for (const lead of leads) {
      const leadCreatorInfo = await this.getUserById(lead.created_by);
      lead.created_by_name = leadCreatorInfo.name;

      for (const contact of lead._embedded.contacts) {
        const contactInfo = await this.getContactById(contact.id);
        Object.assign(contact, contactInfo);
      }
    }
  }

  async addStatusInfo(leads: LeadsResponse[]) {
    for (const lead of leads) {
      const statusInfo = await this.getStatusByPipelineAndStatusId(
        lead.pipeline_id,
        lead.status_id,
      );
      lead.status_name = statusInfo.name;
      lead.status_color = statusInfo.color;
    }
  }

  async getStatusByPipelineAndStatusId(pipelineId: number, statusId: number) {
    const { data } = await lastValueFrom(
      this.http.get<StatusesResponse>(
        `${this.url}/api/v4/leads/pipelines/${pipelineId}/statuses/${statusId}`,
      ),
    );
    return data;
  }

  async getContactById(id: number) {
    const { data } = await lastValueFrom(
      this.http.get<ApiResponse<EmbeddedContacts>>(
        `${this.url}/api/v4/contacts`,
        {
          params: {
            id,
          },
        },
      ),
    );
    return data._embedded?.contacts[0];
  }

  async getUserById(id: number) {
    const { data } = await lastValueFrom(
      this.http.get<ApiResponse<EmbeddedUsers>>(`${this.url}/api/v4/users`, {
        params: {
          id,
        },
      }),
    );
    return data._embedded?.users[0];
  }
}
