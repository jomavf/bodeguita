import request from 'supertest'
import app from '../app.js'


describe('Probando CRUD de usuarios', () => {
	test('Deberia responder al metodo GET', async () => {
		let response = await request(app).get('/user')
		expect(response.statusCode).toBe(200);
    })
    
    test('Deberia crear un usuario en especifico -> POST', async () => {
		let data = {
			"code": 202015486,
			"password": "iziCurso"
		}
		let response = await request(app).post('/user').send(data)
		expect(response.statusCode).toBe(201);
	})

	test('Deberia obtener un objeto del listado de usuarios -> GET', async () => {
		let response = await request(app).get('/user/1')
		expect(response.statusCode).toBe(200);
	})

	test('Deberia actualizar un objeto del listado de usuarios -> PATCH', async () => {
		let reqMock = {
			body: {
				"code": 201315486
			}
		}
		let response = await request(app).patch('/user/1').send(reqMock)
		expect(response.statusCode).toBe(200);
	})

	// test('Deberia eliminar un objeto del listado de productos -> DELETE', async () => {
	// 	let response = await request(app).del('/user/3')
	// 	console.log(response.error)
	// 	expect(response.statusCode).toBe(200);
	// })
})