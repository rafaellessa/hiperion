import { User } from '~/domain/entity/User'

test.only('it should ok', () => {
  const user = new User()
  user.name = 'Lessa'

  expect(user.name).toEqual('Lessa')
})
