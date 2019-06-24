class UserDao {
    async create(user){
        let data = Object.assign(user,{id:1}) 
        return data 
    }
    async findAll(){
      let data = JSON.parse(`[
        {
            "id": "1",
            "codigo": "usuario",
            "clave": "clave"
        }
      ]`)
      return data
    }
    async findOne(id){
      let data = null
      if(id === 1){
        data = {
          id: 1,
          codigo: "usuario",
          clave: "clave"
        }
      }else if(id===2){
        data = {
          id: 2,
          codigo: "usuario2",
          clave: "clave"
        }
      }
      return data
    }
    async update(obj,id){
      // return Object.assign(obj,{id:id})
      return [1]
    }
    async destroy(id){
      return 1
    }
}

export default new UserDao()