 const {Given, When, Then, Before, After} = require('@cucumber/cucumber');
 const {Builder, By, Key, until} = require('selenium-webdriver');
 const assert = require('assert');

 let driver;

 Before(async function() {
     driver = await new Builder().forBrowser('chrome').build();
 });

 After(async function() {
     await driver.quit();
 });

 Given('que esteja na página de login', async function () {
  await driver.get("http://localhost:4000/");
});



When('realizo login com as seguintes credenciais',  async function(dataTable) {
    const data = dataTable.rowsHash();

    const usuario = data.usuario;
    const senha = data.senha;

    await driver.findElement(By.id('username')).sendKeys(usuario);
    await driver.findElement(By.id('senha')).sendKeys(senha);
    await driver.findElement(By.xpath('//button[text()="Entrar"]')).click();

});

Then('sou redirecionado para a página inicial', async function (){
    await driver.wait(until.elementLocated(By.xpath('//*[@id="toast-container"]/div')), 5000);
    const titulo = await driver.findElement(By.xpath('//*[@id="toast-container"]/div')).getText();
    Then('sou redirecionado para a página inicial', async function () {
  const textoObtido = await driver.findElement(By.className('titulo-pagina')).getText();
  
  assert.strictEqual(textoObtido, 'Realizar Transferência');
});
});