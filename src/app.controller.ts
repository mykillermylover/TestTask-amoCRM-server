import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/leads')
  async getLeads(@Query('query') query: string) {
    const leads = await this.appService.getLeads(query);
    await this.appService.addContactInfo(leads);
    await this.appService.addStatusInfo(leads);
    return leads;
  }
}
