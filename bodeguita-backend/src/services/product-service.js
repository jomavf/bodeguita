import '@babel/polyfill';
import ProductDao from '../dao/product-dao'

class ProductService {
  all(req, res) {
    return ProductDao.findAll().then((data)=>{
      res.status(200).json({data})
      return data
    })
  }
  findById(req, res) {
    const id = req.params.id;
    return ProductDao.findOne(id).then((data)=>{
      res.status(200).json({data})
      return data
    }).catch(err=> {throw Error("Data not found")})
  }
  create(req, res) {
    const product = req.body;
    return ProductDao.create(product).then(data=>{
      res.status(201).json({ data })
      return data 
    })
  }
  update(req, res) {
    const id = req.params.id;
    return ProductDao.update(req.body,id)
    .then(result =>{
      if (result[0] === 0){
        throw Error("Error during updating") 
      }
      return ProductDao.findOne(id)
    })
    .then(data => {
      res.status(200).json({data})
      return data
    })
    .catch(err =>{throw Error("Error found during process: ",err)})
  }
  deleteById(req, res) {
    const id = req.params.id;
    return ProductDao.destroy(id).then(result =>{
      if (result === 0) {
        throw Error("Data not found" );
      }
      res.status(200).json({ data:null });
      return result
    })
  }
}

export default new ProductService();
