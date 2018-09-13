module.exports = (sequelize, DataTypes) =>{
    const Project = sequelize.define('Project', {
        projectID: {
            type: DataTypes.STRING,
            unique: true,
            validate : {
                notEmpty : {args: true, msg:'ProjectID belum dimasukkan'}
            }
        },
        clientID: {
            type: DataTypes.STRING,
            validate : {
                notEmpty : {args: true, msg:'Klien belum dipilih'}
            }
        },
        supervisor: {
            type: DataTypes.STRING,
            validate : {
                notEmpty : {args: true, msg:'Supervisor belum dipilih'}
            }
        },
        contract: {
            type: DataTypes.STRING,
            validate : {
                notEmpty : {args: true, msg:'Nomor Kontrak belum dimasukkan'}
            }
        },
        category: {
            type: DataTypes.STRING,
            validate : {
                notEmpty : {args: true, msg:'Kategori pekerjaan belum dipilih'}
            }
        },
        location: {
            type: DataTypes.TEXT,
            validate : {
                notEmpty : {args: true, msg:'Lokasi proyek belum dimasukkan'}
            }
        },
        price: {
            type: DataTypes.BIGINT,
            validate : {
                notEmpty : {args: true, msg:'Nilai kontrak belum dimasukkan'}
            }
        },
        start_date: {
            type: DataTypes.DATEONLY
        },
        duration: {
            type: DataTypes.INTEGER,
            validate : {
                notEmpty : {args: true, msg:'Durasi proyek belum dimasukkan'}
            }
        },
        detail: {
            type: DataTypes.TEXT
        },
        status: {
            type: DataTypes.STRING
        }
    })

    return Project
}

