import '@babel/polyfill';
import UserDao from '../dao/user-dao'

class UserService {
  all(req, res) {
    return UserDao.findAll().then((data)=>{
      res.status(200).json({data})
      return data
    })
  }
  login(req, res) {
    let user = req.body
    UserDao.findAll().then(data=>{
      data.forEach(e => {
        if (e.code === user.code && e.password === user.password){
          res.status(200).json({data:{
            isAuth:true,
            token: 'abc123'
          }})
        } else {
          res.status(200).json({data:{
            isAuth:false,
            token: null
          }})
        }
      });
      
    })
  }
  findById(req, res) {
    const id = req.params.id;
    return UserDao.findOne(id).then((data)=>{
      res.status(200).json({data})
      return data
    }).catch(err=> {throw Error("Data not found")})
  }
  create(req, res) {
    return UserDao.create(req.body).then(data=>{
      res.status(201).json({ data })
      return data 
    })
  }
  update(req, res) {
    const id = req.params.id;
    return UserDao.update(req.body,id)
    .then(result =>{
      if (result[0] === 0){
        throw Error("Error during updating") 
      }
      return UserDao.findOne(id)
    })
    .then(data => {
      res.status(200).json({data})
      return data
    })
    .catch(err =>{throw Error("Error found during process: ",err)})
  }
  deleteById(req, res) {
    const id = req.params.id;
    return UserDao.destroy(id).then(result =>{
      if (result === 0) {
        throw Error("Data not found" );
      }
      res.status(200).json({ data:null });
      return result
    })
  }
}

export default new UserService();
