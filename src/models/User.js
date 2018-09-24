const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, options) {
    const SALT_FACTOR = 10

    if(!user.changed('password')){
        return;
    }

    return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
            user.setDataValue('password', hash)
            console.log('###########################################################')
        })
}

module.exports = (sequelize, DataTypes) =>{
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: 'Username ini sudah diapakai!'
            },
            validate : {
                notEmpty : {args: true, msg:'username harus diisi'}
            }
        },
        employeeID: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: 'Telah ada akun untuk ID Karyawan ini!'
            },
            validate : {
                notEmpty : {args: true, msg:'ID Karyawan harus diisi'}
            }
        },
        password: {
            type : DataTypes.STRING,
            validate : {
                notEmpty : {args: true, msg:'password harus diisi'}
            }
        },
        approved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        access_level: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword
            // beforeValidate: hashPassword
        }
    })

    User.prototype.comparePassword = function (password) {
        return bcrypt.compareAsync(password, this.password)
    }

    return User
}

