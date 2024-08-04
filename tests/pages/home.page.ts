import { expect, Page } from '@playwright/test';

export default class HomePage {
  private currentValue: string | undefined; // Variable de clase para almacenar el valor actual

  constructor(private page: Page) {}

  async selectDIM() {
    await this.page.getByRole('link', { name: 'PIM' }).click();
  }

  async addingNewUser() {
    await this.page.locator('//button[normalize-space()="Add"]').click();
    await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');

    await this.page.getByPlaceholder('First Name').fill('Francis');
    await this.page.getByPlaceholder('Middle Name').fill('Silva');
    await this.page.getByPlaceholder('Last Name').fill('Medrano');

    await this.page.getByRole('button', { name: 'Save' }).click();

    // Obtener el valor actual del campo de entrada
    const inputField = this.page.locator('form').getByRole('textbox').nth(4);
    this.currentValue = await inputField.inputValue(); // Almacenar el valor en la variable de clase
    console.log('El valor del input es:', this.currentValue);
  }

  async validandoMensajeConfirmacion() {
    const toastTitle = this.page.locator('.oxd-text--toast-title');
    await expect(toastTitle).toBeVisible();

    // Verificar que el toast contiene el texto "Success"
    await expect(toastTitle).toHaveText(/Success/);
  }

  async validandoListaEmpleados() {
    if (!this.currentValue) {
      throw new Error('currentValue no está definido. Asegúrate de ejecutar addingNewUser() primero.');
    }

    await this.page.getByRole('link', { name: 'PIM' }).click();
    await this.page.getByRole('textbox').nth(2).fill(this.currentValue);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }
}
