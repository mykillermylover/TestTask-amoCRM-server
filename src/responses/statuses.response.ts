export type StatusesResponse = {
  //	ID статуса
  id: number;
  //	Название статуса
  name: string;
  //	Сортировка статуса
  sort: number;
  //	Доступен ли статус для редактирования
  is_editable: boolean;
  //	ID воронки, в которой находится статус
  pipeline_id: number;
  //	Цвет статуса. Доступные цвета
  color: string;
  //	Тип статуса (1 – неразобранное, 0 – обычный статус)
  type: number;
  //	ID аккаунта, в котором находится воронка
  account_id: number;
  //	Требуется GET параметр with. Описания статуса
  descriptions: object[];
};
