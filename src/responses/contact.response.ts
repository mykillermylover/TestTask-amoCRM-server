export type ContactResponse = {
  //	ID контакта
  id: number;
  //	Название контакта
  name: string;
  //	Имя контакта
  first_name: string;
  //	Фамилия контакта
  last_name: string;
  //	ID пользователя, ответственного за контакт
  responsible_user_id: number;
  //	ID группы, в которой состоит ответственны пользователь за контакт
  group_id: number;
  //	ID пользователя, создавший контакт
  created_by: number;
  //	ID пользователя, изменивший контакт
  updated_by: number;
  //	Дата создания контакта, передается в Unix Timestamp
  created_at: number;
  //	Дата изменения контакта, передается в Unix Timestamp
  updated_at: number;
  //	Удален ли элемент
  is_deleted: boolean;
  //	Дата ближайшей задачи к выполнению, передается в Unix Timestamp
  closest_task_at: number;
  // Массив, содержащий информацию по значениям дополнительных полей, заданных для данного контакта
  custom_fields_values?: object[];
  //	ID аккаунта, в котором находится контакт
  account_id: number;
};
