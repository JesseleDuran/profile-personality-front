'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home')

Route.on('/manual/personalidad').render('manual.personalidad')
Route.on('/manual/start').render('manual.start')

Route.on('/start').render('manual.test')
Route.on('/testFinalizado').render('manual.testFinalizado')

Route.on('/resultado/ayudador').render('resultados.ayudador')
Route.on('/resultado/artista').render('resultados.artista')
Route.on('/resultado/triunfador').render('resultados.triunfador')
Route.on('/resultado/pensador').render('resultados.pensador')
Route.on('/resultado/leal').render('resultados.leal')
Route.on('/resultado/entusiasta').render('resultados.entusiasta')
Route.on('/resultado/protector').render('resultados.protector')
Route.on('/resultado/reformador').render('resultados.reformador')
Route.on('/resultado/pacifico').render('resultados.pacifico')
