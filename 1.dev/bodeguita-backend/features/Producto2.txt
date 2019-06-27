Feature: Mantenimiento de Producto 
  Como jefe de almacen necesito realizar la gestión de Productos

  Scenario: Registrar Producto
    Given   despues de iniciar sesion en la aplicacion
    When 	hago click en el enlace de Mantenimiento de Producto
    And 	luego hago click en el boton de Nuevo
    And 	en campo Nombre el valor de "Galleta Casino Clásica" 
    And 	en campo Cantidad el valor de 20
    And 	en campo Precio Unitario el valor de 0.5
    And 	en campo Tipo el valor de "Golosinas"
    And 	en campo Nacionalidad el valor de "Peruana"
    And 	en campo Descuento el valor de "Si"
    And 	presiono el boton de Guardar
    Then 	el sistema me muestra el mensaje de: "Se guardo de manera correcta el Producto"
  