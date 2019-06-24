jest.mock('../dao/user-dao')
import UserService from '../services/user-service'

describe('Suite de pruebas para usuario',()=>{
    
    test('Crear un usuario -> funciona',async ()=>{
        let req = {
            body: {
                codigo: "123",
                clave:"123"
            }
        }
      let resMock = {status:(code) => {return {json: ()=>{} }} }
      let response = await UserService.create(req,resMock)
      expect(response).toEqual(expect.objectContaining({
        id: expect.any(Number),
        codigo: expect.any(String),
        clave: expect.any(String)
      }))
    })

    test('Listar usuario -> funciona',async ()=>{
      let resMock = {status:(code) => {return {json: ()=>{} }} }
      let response = await UserService.all(null,resMock)
      expect(response.length).toBeGreaterThanOrEqual(0)
    })

    test('Encontrar un usuario con el mismo Id que se solicito -> funciona',async ()=>{
      let req = {
        params: {
          id: 2
        }
      }
      let resMock = {status:(code) => {return {json: ()=>{} }} }
      let response = await UserService.findById(req,resMock)
      expect(response.id).toBe(2)
    })

})

