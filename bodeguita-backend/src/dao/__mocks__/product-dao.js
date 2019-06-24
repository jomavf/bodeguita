class ProductDao {
    async create(product){
        let data = Object.assign(product,{id:4}) 
        return data 
    }

    async findAll(){
      let data = JSON.parse(`[
        {
            "id": "1",
            "categoryId": 1,
            "name": "Chocolate",
            "quantity": "80",
            "price": "70",
            "discount": true,
            "nationality": "Extranjero",
            "type": "Golosinas"
        }
    ]`)
      return data
    }

    async findOne(id){
      let data = null
      if(id === 4){
        data = {
          id: 4,
          categoryId: 1,
          name: "Chocolate",
          quantity: "80",
          nationality:'Extranjero',
          price: "70",
          type:'Golosinas',
          discount: null
        }
      }else if(id === 5){
        data = {
          id: 5,
          name: 'Lapiceros',
          quantity: 65,
          price: 12.99,
          categoryId: 5,
          discount: 0.8,
          nationality: 'Peruana',
          type:'Utiles escolares'
      }
      }
      return data
    }

    async update(obj,id){
      return [1]
    }

    async destroy(id){
      return 1
    }
}

export default new ProductDao()