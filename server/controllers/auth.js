const bcrypt = require('bcryptjs')

const users = []

module.exports = {
  login: (req, res) => {

    const { username, password } = req.body


    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        let existingPassword = bcrypt.compareSync(password, users[i].passwordHash)
        if (existingPassword) {
          let userToReturn = { ...users[i] }
          delete userToReturn.passwordHash
          res.status(200).send(userToReturn)
        }
      }
    }
    res.status(400).send("User not found.")
  },

  register: (req, res) => {

    const { username, email, firstName, lastName, password } = req.body
    let salt = bcrypt.genSaltSync(5)
    let passwordHash = bcrypt.hashSync(password, salt)

    let user = {
      username,
      email,
      firstName,
      lastName,
      passwordHash
    }
    users.push(user)
    let personalDataToReturn = { ...user }
    delete personalDataToReturn.passwordHash
    res.status(200).send(personalDataToReturn)
  }
}

