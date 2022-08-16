import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import {URLS, CREDENCIALES, ERROR_MESSAGES} from '../data/constantes'

fixture("Caso de prueba de la funcion Login")
    .page`${URLS.URL}`

//Avoid test --> test.skip()

test('Un usuario debe poder iniciar sesion correctamente', async t => {

   // await t.maximizeWindow()
    await loginPage.enviarInfo(CREDENCIALES.VALID_CREDENTIALS.USER,CREDENCIALES.VALID_CREDENTIALS.PASSWORD)
    await t.expect(homePage.titulo.exists).ok()

})

//Username & password incorrect
test('Validar que el username y password sean correctas', async t => {
    await loginPage.enviarInfo(CREDENCIALES.INVALID_CREDENTIALS.INVALID_USER,CREDENCIALES.INVALID_CREDENTIALS.INVALID_PASSWORD)
    await t.expect(loginPage.errorMesssage.innerText).contains(ERROR_MESSAGES.ERROR_MESSAGE1)

})

//Username null
test('Validar campo de username como requerido', async t => {
    await loginPage.enviarInfo(null,CREDENCIALES.VALID_CREDENTIALS.PASSWORD)
    await t.expect(loginPage.errorMesssage.innerText).contains(ERROR_MESSAGES.ERROR_MESSAGE2)

})

//Password null
test('Validar campo de password como requerido', async t => {
    await loginPage.enviarInfo(CREDENCIALES.VALID_CREDENTIALS.USER, null)
    await t.expect(loginPage.errorMesssage.innerText).contains(ERROR_MESSAGES.ERROR_MESSAGE3)

})

//Username & password null
test('Validar ambos campos de username & password sean requeridos', async t => {
    await loginPage.enviarInfo(null,null)
    await t.expect(loginPage.errorMesssage.innerText).contains(ERROR_MESSAGES.ERROR_MESSAGE2)

})