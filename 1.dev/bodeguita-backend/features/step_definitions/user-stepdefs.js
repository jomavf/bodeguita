const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const request = require('supertest');
const { expect } = require('chai')
import app from '../../src/app'
// import mock from 'mockito'

var userObj = {}

        Given('despues de ingresar a la web del sistema desde el navegador', function () {
          assert.equal(true,true)
        });

        When('escribo en campo Usuario el valor de {string}', function (string) {
          // Write code here that turns the phrase above into concrete actions
          // this.userobj.code = "jalmacen"           
          userObj.code = string   
          expect(true).to.eql(true)
        });

        When('escribo en campo Contraseña el valor de {string}', function (string) {
          userObj.password = string
          expect(true).to.eql(true)
        });

        When('luego hago click en el boton de Entrar',{timeout:5000}, async function () {
          let response = await request(app(6000)).post('/user/login').send(userObj)
          assert.equal(response.body.data.isAuth,true)
        });

        Then('el sistema me direcciona a la pantalla de Bienvenida', function () {
          expect(true).to.eql(true)
        });