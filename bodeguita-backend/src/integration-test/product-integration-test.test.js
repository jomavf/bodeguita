import request from 'supertest'
import app from '../app.js'


describe('Probando CRUD de productos', () => {
	test('Deberia obtener un listado de productos -> GET', async () => {
		let response = await request(app).get('/product')
		expect(response.statusCode).toBe(200);
	})

	test('Deberia crear un producto en especifico -> POST', async () => {
		let data = {
			"categoryId": 1,
			"name": "Laptops",
			"quantity": 23,
			"price": 23.44,
			"discount": 0.9
		}
		let response = await request(app).post('/product').send(data)
		expect(response.statusCode).toBe(201);
	})

	test('Deberia obtener un objeto del listado de productos -> GET', async () => {
		let response = await request(app).get('/product/1')
		expect(response.statusCode).toBe(200);
	})

	test('Deberia actualizar un objeto del listado de productos -> PATCH', async () => {
		let reqMock = {
			body: {
				"discount": 0.2
			}
		}
		let response = await request(app).patch('/product/1').send(reqMock)
		expect(response.statusCode).toBe(200);
	})

	// test('Deberia eliminar un objeto del listado de productos -> DELETE', async () => {
	// 	let response = await request(app).del('/product/4')
	// 	console.log(response.error)
	// 	expect(response.statusCode).toBe(200);
	// })
})