import { User } from '../db/postgres/index'

class UserDao {
    async create(user){
        let data = await User.create(user)
        return data
    }
    async findAll(){
        let data = await User.findAll({order: [['id','ASC']] })
        return data
    }
    async findOne(id){
      let data = await User.findOne({where:{id}})
      return data
    }
    async update(obj,id){
      let result = await User.update(obj,{where:{id}})
      return result
    }
    async destroy(id){
      let data = await User.destroy({where:{id}})
      return data
    }
}

export default new UserDao()