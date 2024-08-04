import { Given, When, Then, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { expect, chromium, Browser, Page } from '@playwright/test';
import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';

let browser: Browser;
let page: Page;
let loginPage: LoginPage;
let homePage: HomePage;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false }); 
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
});

AfterAll(async () => {
  //await browser.close();
});

Given('Estoy en la pagina de inicio de sesion', async () => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  //await expect(page).toHaveTitle('OrangeHRM');
});

When('Ingreso mis datos de sesion', async () => {
  await loginPage.login('Admin', 'admin123');
});

Given('Navego a la seccion de administración de usuarios', async () => {
  await homePage.selectDIM()
});

When('Agrego un nuevo usuario ingresando sus datos', async () => {
  await homePage.addingNewUser()

})

Then('Valido que el mensaje de confirmacion del usuario creado', async () => {
  await homePage.validandoMensajeConfirmacion()

})

Then('Consulto el usuario creado en la lista de empleados', async () => {
  await homePage.validandoListaEmpleados()
})
