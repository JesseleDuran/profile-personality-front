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
Route.on('/automatico/start').render('automatico.start')

Route.on('/start').render('manual.test')
Route.on('/testFinalizado').render('manual.testFinalizado')

Route.on('/resultado/ayudador').render('manual.resultados.ayudador')
Route.on('/resultado/protector').render('manual.resultados.desafiador')
Route.on('/resultado/entusiasta').render('manual.resultados.entusiasta')
Route.on('/resultado/artista').render('manual.resultados.individualista')
Route.on('/resultado/pensador').render('manual.resultados.investigador')
Route.on('/resultado/leal').render('manual.resultados.leal')
Route.on('/resultado/pacifico').render('manual.resultados.pacificador')
Route.on('/resultado/reformador').render('manual.resultados.reformador')
Route.on('/resultado/triunfador').render('manual.resultados.triunfador')

Route.on('/resultado/simulador').render('automatico.estadisticas')
