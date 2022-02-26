export default {

    mongodb: {
        productSchema: {
            nombre: {type: String, required:true},
            descripcion: {type: String},
            codigo: {type: Number},
            foto: {type: String, required:true},
            precio: {type: Number, required:true},
            stock: {type: Number},
            id: {type: Number, required:true},
            timestamp:{type: Date, required:true}
        },
        cartSchema: {
            id: {type:Number, required:true},
            timestamp: {type: Date, required:true},
            productos: {type: Array}
        }
    }
}