import { LeadsResponse } from './leads.response';
import { ContactResponse } from './contact.response';
import { UserResponse } from './user.response';
import { StatusesResponse } from './statuses.response';

export type ApiResponse<
  T = EmbeddedContacts | EmbeddedLeads | EmbeddedUsers | EmbeddedStatus,
> = {
  _page: number;
  _links: {
    self: ApiResponseLink;
    next: ApiResponseLink;
    first: ApiResponseLink;
    prev: ApiResponseLink;
  };
  _embedded: T;
};

export type EmbeddedLeads = {
  leads: LeadsResponse[];
};
export type EmbeddedContacts = {
  contacts: ContactResponse[];
};
export type EmbeddedUsers = {
  users: UserResponse[];
};
export type EmbeddedStatus = {
  statuses: StatusesResponse;
};
export type ApiResponseLink = {
  href: string;
};
