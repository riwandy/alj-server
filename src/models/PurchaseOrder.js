module.exports = (sequelize, DataTypes) =>{
    const PurchaseOrder = sequelize.define('PurchaseOrder', {
        purchaseOrderID: {
            required: true,
            type: DataTypes.STRING
        },
        orderedItems: {
            required: true,
            type: DataTypes.ARRAY(DataTypes.JSONB)
        },
        vendorID: {
            required: true,
            type: DataTypes.STRING
        },
        orderDate: {
            required: true,
            type: DataTypes.DATEONLY
        },
        deliveryDate: {
            required: true,
            type: DataTypes.DATEONLY
        },
        detail: {
            type: DataTypes.TEXT
        }
    })

    return PurchaseOrder
}

