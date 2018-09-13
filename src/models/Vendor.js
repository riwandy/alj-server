module.exports = (sequelize, DataTypes) =>{
    const Vendor = sequelize.define('Vendor', {
        vendorID: {
            type: DataTypes.STRING,
            validate : {
                notEmpty : {args: true, msg:'VendorID belum dimasukkan'}
            }
        },
        name: {
            type: DataTypes.STRING,
            validate : {
                notEmpty : {args: true, msg:'Nama vendor belum dimasukkan'}
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
            type: DataTypes.STRING,
            defaultValue: '',
            validate : {
                notEmpty : {args: true, msg:'Kategori usaha vendor belum dipilih'}
            }
        },
        contact_person: {
            type: DataTypes.JSONB
        },
        email: {
            type: DataTypes.STRING,
        }
    })

    return Vendor
}

