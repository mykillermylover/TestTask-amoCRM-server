export type UserResponse = {
  //	ID пользователя
  id: number;
  //	Полное имя пользователя
  name: string;
  //	E-mail пользователя
  email: string;
  //	Язык пользователя. Один из вариантов: ru, en, es
  lang: string;
  //  Права пользователя
  rights: object;
};
