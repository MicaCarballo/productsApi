const Users = require('./users.model')
const RecoveryPasswords = require('./recoveryPasswords.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)
}

module.exports = initModels