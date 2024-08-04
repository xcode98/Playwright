Feature: 

Background: Me encuentro en el login y coloco mis credenciales
  Given Estoy en la pagina de inicio de sesion
  Then Ingreso mis datos de sesion
  
  Scenario: Crear y consultar un nuevo empleado
    Given Navego a la seccion de administración de usuarios
    When Agrego un nuevo usuario ingresando sus datos
    Then Valido que el mensaje de confirmacion del usuario creado
    And Consulto el usuario creado en la lista de empleados