var memdb = require('memdb')
var dwidResetPassword = require('../index')

var db = memdb()
var reset = dwidResetPassword(db, {
  secret: 'not a secret' // passed to jsonwebtoken
})

reset.create({ accountKey: 'key for an account' }, function (err, token) {
  if (err) return console.log(err)

  reset.confirm({ accountKey: 'key for an account', token: token }, function (err) {
    if (err) return console.log('token not confirmed', err)
    console.log('token confirmed')
  })
})
