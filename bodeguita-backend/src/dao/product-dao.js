import { Product } from '../db/postgres/index'

class ProductDao {
    async create(product){
        let data = await Product.create(product)
        return data
    }
    async findAll(){
        let data = await Product.findAll({order: [['id','ASC']] })
        return data
    }
    async findOne(id){
      let data = await Product.findOne({where:{id}})
      return data
    }
    async update(obj,id){
      let result = await Product.update(obj,{where:{id}})
      return result
    }
    async destroy(id){
      let data = await Product.destroy({where: {id}})
      return data
    }
}

export default new ProductDao()