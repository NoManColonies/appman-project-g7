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

Route.on('/').render('eiei')
Route.get('/login',"AuthController.login");
Route.get('/register',"AuthController.register");
Route.post("/login","AuthController.loginUser")
Route.on('/main').render('main')
Route.post('/register',"AuthController.registerUser");

Route.post("/api/register","AuthController.registerUer")


// Route.get("/login",(context) => {
//     const {view,request,response} = context
//     const name = "chubby"
//     const age = 2
//     const friends = ["C","H","U","B","B","Y"]
//     const adderss = {
//         postcode: "50340",
//         country: "Korea"
//     }

//     return view.render("login",{name,age,friends})
// })