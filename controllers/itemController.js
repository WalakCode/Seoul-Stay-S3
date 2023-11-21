const item = require('../models/ItemModel')

class ItemController{

    constructor(){
        
    }

    static async showItem(date){
        try{
            const result = await item.getItems(date)

            if(result.success){
                return result
            }
            else{
                console.log('no hubo resultados')
            }
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = ItemController