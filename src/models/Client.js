module.exports = (sequelize, DataTypes) =>{
    const Client = sequelize.define('Client', {
        clientID: {
            type: DataTypes.STRING,
            validate : {
                notEmpty : {args: true, msg:'ID Klien belum dimasukkan'}
            }
        },
        name: {
            type: DataTypes.STRING,
            validate : {
                notEmpty : {args: true, msg:'Nama klien belum dimasukkan'}
            }
        },
        address: {
            type: DataTypes.STRING,
            validate : {
                notEmpty : {args: true, msg:'Alamat vendor belum dimasukkan'}
            }
        },
        npwp: {
            type: DataTypes.STRING
        },
        business: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            validate : {
                notEmpty : {args: true, msg:'Kategori klien belum dimasukkan'}
            }
        },
        contact_person: {
            type: DataTypes.JSONB
        },
        email: {
            type: DataTypes.STRING
        }
    })

    return Client
}

