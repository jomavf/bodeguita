Feature: Login
  Como jefe de almacén deseo poder contar con credenciales Usuario y Contraseña para ingresar al sistema

  Scenario: Ingresar Sistema
    Given   despues de ingresar a la web del sistema desde el navegador
    When    escribo en campo Usuario el valor de "usuario1x"
    And     escribo en campo Contraseña el valor de "clave1x"
    And     luego hago click en el boton de Entrar
    Then    el sistema me direcciona a la pantalla de Bienvenida