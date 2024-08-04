# Proyecto de Automatización con Playwright y Cucumber

Este proyecto utiliza Playwright y Cucumber para automatizar pruebas de la aplicación OrangeHRM. Las pruebas están escritas en lenguaje Gherkin, que permite definir escenarios de prueba de manera legible para cualquier persona, incluidos los no programadores.

## Casos de Prueba

### Funcionalidad 1: Login

#### Background: Me encuentro en el login y coloco mis credenciales
  - Given Estoy en la página de inicio de sesión
  - Then Ingreso mis datos de sesión

### Funcionalidad 2: Crear un nuevo empleado

#### Scenario: Crear un nuevo empleado
  - Given Navego a la sección de administración de usuarios
  - When Agrego un nuevo usuario ingresando sus datos
  - Then Valido que el mensaje de confirmación del usuario creado

### Funcionalidad 3: Consultar un nuevo empleado

#### Scenario: Consultar un nuevo empleado
  - Given Navego a la sección de administración de usuarios
  - When Consulto el usuario creado en la lista de empleados

## Técnica de Diseño de Caso de Prueba Utilizada

Para la identificación y redacción de los casos de prueba se utilizó la técnica de **Happy Path**. Esta técnica se enfoca en probar el camino de éxito esperado en las funcionalidades clave del sistema, asegurando que los flujos principales funcionan correctamente bajo condiciones normales.

### Happy Path
- **Login:** Se verifica que el usuario pueda iniciar sesión correctamente con credenciales válidas.
- **Crear Empleado:** Se verifica que un empleado pueda ser creado correctamente ingresando datos válidos en todos los campos del formulario.
- **Consultar Empleado:** Se verifica que el empleado recién creado puede ser encontrado en la lista de empleados.

## Patron de diseño para la estructura del proyecto:
- Patron de diseño POM (Page Object Model)

## Lenguaje Gherkin

Feature: Gestión de Usuarios: Creación y Consulta de Empleado previamente logeado

Background: Me encuentro en el login y coloco mis credenciales

  Given Estoy en la página de inicio de sesión
  
  Then Ingreso mis datos de sesión
  
  Scenario: Crear y consultar un nuevo empleado
  
    Given Navego a la sección de administración de usuarios
    
    When Agrego un nuevo usuario ingresando sus datos
    
    Then Valido que el mensaje de confirmación del usuario creado
    
    And Consulto el usuario creado en la lista de empleados

# Pasos para la Instalación y Ejecución del Proyecto
### Prerrequisitos
Tener instalados los siguientes componentes:

- Node.js 

- npm 

### Instala las dependencias del proyecto:
- npm install

### Para ejecutar las pruebas, utiliza el siguiente comando:
- npx cucumber-js


    
