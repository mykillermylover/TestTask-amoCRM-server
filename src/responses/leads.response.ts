import { ApiResponseLink } from './api.response';
import { ContactResponse } from './contact.response';

export type LeadsResponse = {
  //	ID сделки
  id: number;
  //	Название сделки
  name: string;
  //	Бюджет сделки
  price: number;
  //	ID пользователя, ответственного за сделку
  responsible_user_id: number;
  //	ID группы, в которой состоит ответственны пользователь за сделку
  group_id: number;
  //	ID статуса, в который добавляется сделка, по-умолчанию – первый этап главной воронки
  status_id: number;
  //	ID воронки, в которую добавляется сделка
  pipeline_id: number;
  status_name: string;
  status_color: string;
  //	ID причины отказа
  loss_reason_id: number;
  //	Требуется GET параметр with. ID источника сделки
  source_id: number;
  //	ID пользователя, создающий сделку
  created_by: number;
  // Имя пользователя, создающего сделку
  created_by_name: string;
  //	ID пользователя, изменяющий сделку
  updated_by: number;
  //	Дата закрытия сделки, передается в Unix Timestamp
  closed_at: number;
  //	Дата создания сделки, передается в Unix Timestamp
  created_at: number;
  //	Дата изменения сделки, передается в Unix Timestamp
  updated_at: number;
  //	Дата ближайшей задачи к выполнению, передается в Unix Timestamp
  closest_task_at: number;
  //	Удалена ли сделка
  is_deleted: boolean;
  // Массив, содержащий информацию по значениям дополнительных полей, заданных для данной сделки
  custom_fields_values?: [];
  // Скоринг сделки
  score?: number;
  //	ID аккаунта, в котором находится сделка
  account_id: number;
  //	Тип поля "стоимость труда" показывает сколько времени было затрачено на работу со сделкой. Время исчисления в секундах
  labor_cost: number;
  //	Требуется GET параметр with. Изменен ли в последний раз бюджет сделки роботом
  is_price_modified_by_robot: boolean;
  // Данные вложенных сущностей
  _embedded: Embedded;
};

export type Embedded = {
  loss_reason: object;
  tags: object[];
  contacts: EmbeddedContact[];
  companies: object[];
  catalog_elements: object[];
};

export type EmbeddedContact = {
  id: number;
  is_main: boolean;
  _links: {
    self: ApiResponseLink;
  };
} & ContactResponse;
