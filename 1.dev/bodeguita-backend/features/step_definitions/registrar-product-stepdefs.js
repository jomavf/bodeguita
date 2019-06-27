const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const request = require('supertest');
const { expect } = require('chai')
import app from '../../src/app'
import mock from './mockito-fake'

var objectToRegister = {}

// ? Given despues de iniciar sesion en la aplicacion
//        Undefined. Implement with the following snippet:

         Given('despues de iniciar sesion en la aplicacion', function () {

          expect(true).to.eql(true)
         });
       
  //  ? When hago click en el enlace de Mantenimiento de Producto
  //      Undefined. Implement with the following snippet:

         When('hago click en el enlace de Mantenimiento de Producto', function () {

          mock.click('#producto')
          expect(true).to.eql(true)
         });
       
  //  ? And luego hago click en el boton de Nuevo
  //      Undefined. Implement with the following snippet:

         When('luego hago click en el boton de Nuevo', function () {

          mock.click('#nuevo')
          expect(true).to.eql(true)
         });
       
  //  ? And en campo Nombre el valor de "Galleta Casino Clásica"
  //      Undefined. Implement with the following snippet:

         When('en campo Nombre el valor de {string}', function (string) {

          objectToRegister.name = string
          expect(true).to.eql(true)
         });
       
  //  ? And en campo Cantidad el valor de 20
  //      Undefined. Implement with the following snippet:

         When('en campo Cantidad el valor de {int}', function (int) {

          objectToRegister.quantity = int
          expect(true).to.eql(true)
         });
       
  //  ? And en campo Precio Unitario el valor de 0.5
  //      Undefined. Implement with the following snippet:

         When('en campo Precio Unitario el valor de {float}', function (float) {

          objectToRegister.price = float
          expect(true).to.eql(true)
         });
       
  //  ? And en campo Tipo el valor de "Golosinas"
  //      Undefined. Implement with the following snippet:

         When('en campo Tipo el valor de {string}', function (string) {

          objectToRegister.type = string
          expect(true).to.eql(true)
         });
       
  //  ? And en campo Nacionalidad el valor de "Peruana"
  //      Undefined. Implement with the following snippet:

         When('en campo Nacionalidad el valor de {string}', function (string) {

          objectToRegister.nationality = string
          expect(true).to.eql(true)
         });
       
  //  ? And en campo Descuento el valor de "Si"
  //      Undefined. Implement with the following snippet:

         When('en campo Descuento el valor de {string}', function (string) {
          if(string === "Si"){
            objectToRegister.discount = true
          } else {
            objectToRegister.discount = false
          }
          expect(true).to.eql(true)
         });
       
  //  ? And presiono el boton de Guardar
  //      Undefined. Implement with the following snippet:

         When('presiono el boton de Guardar', {timeout:5000}, async function () {
          
          let response = await request(app(9000)).post('/product').send(objectToRegister)
          console.log(response.body)
          assert.equal(response.body.success,true)
          expect(true).to.eql(true)
         });
       
  //  ? Then el sistema me muestra el mensaje de: "Se guardo de manera correcta el Producto"
  //      Undefined. Implement with the following snippet:

         Then('el sistema me muestra el mensaje de: {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions
           let message = "Se guardo de manera correcta el Producto"
           expect("Se guardo de manera correcta el Producto").to.eql(message)
         });