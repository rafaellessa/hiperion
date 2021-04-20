import User from '#/entity/User'

test('it should ok ', () => {
  const user = new User()

  user.name = 'Lessa'

  expect(user.name).toEqual('Lessa')
})
