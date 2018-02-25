type TUser = {
  id: number
  email: string,
  password: string,
  name: string
}

export class UserListService {

  users: TUser[] = [
    {
      id: 0,
      email: 'ivanov1@gmail.com',
      password: '123456',
      name: 'Пётр'
    },
    {
      id: 1,
      email: 'petrov95@mail.ru',
      password: 'qwerty',
      name: 'Иван'
    }
  ]
}
