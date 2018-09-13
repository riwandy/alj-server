const passport = require('passport')
const EmployeeController = require('./controllers/EmployeeController');
const TimesheetController = require('./controllers/TimesheetController');
const ProjectController = require('./controllers/ProjectController');
const UserController = require('./controllers/UserController');
const ClientController = require('./controllers/ClientController');
const VehicleController = require('./controllers/VehicleController');
const VendorController = require('./controllers/VendorController');
const AssetController = require('./controllers/AssetController');

module.exports = (app) => {
    // //Employee Routes
    // app.get('/employee/get',passport.authenticate('jwt', {session:false}),EmployeeController.getEmployees)
    // app.post('/employee/get',EmployeeController.getEmployee)
    // app.post('/employee/add',EmployeeController.addEmployee)
    // app.post('/employee/update',EmployeeController.updateEmployee)

    // //User Routes
    // app.get('/user/get',UserController.getUsers)
    // app.post('/user/get',UserController.getUser)
    // app.post('/user/add',UserController.addUser)
    // app.post('/user/update',UserController.editUser)
    // app.post('/user/delete',UserController.deleteUser)
    // app.post('/user/login',UserController.login)

    // //Timesheet Routes
    // app.post('/timesheet/add',TimesheetController.addTimesheet)
    // app.post('/timesheet/edit',TimesheetController.editTimesheet)
    // app.get('/timesheet/get',TimesheetController.getTimesheets)
    // app.post('/timesheet/get',TimesheetController.getTimesheet)
    // app.post('/timesheet/update',TimesheetController.updateTimesheet)
    // app.post('/timesheet/delete',TimesheetController.deleteTimesheet)
    // app.post('/timesheet/get/employee',TimesheetController.getTimesheetByEmployee)
    // app.post('/timesheet/get/project',TimesheetController.getTimesheetByProject)

    // //Project Routes
    // app.get('/project/get', ProjectController.getProjects)
    // app.post('/project/add', ProjectController.addProject)

        //Employee Routes
        app.get('/employee/get',passport.authenticate('jwt', {session:false}),EmployeeController.getEmployees)
        app.post('/employee/get',passport.authenticate('jwt', {session:false}),EmployeeController.getEmployee)
        app.post('/employee/add',passport.authenticate('jwt', {session:false}),EmployeeController.addEmployee)
        app.post('/employee/update',passport.authenticate('jwt', {session:false}),EmployeeController.updateEmployee)
    
        //User Routes
        app.get('/user/get',passport.authenticate('jwt', {session:false}),UserController.getUsers)
        app.post('/user/get',passport.authenticate('jwt', {session:false}),UserController.getUser)
        app.post('/user/add',UserController.addUser)
        app.post('/user/update',passport.authenticate('jwt', {session:false}),UserController.editUser)
        app.post('/user/delete',passport.authenticate('jwt', {session:false}),UserController.deleteUser)
        app.post('/user/login',UserController.login)
    
        //Timesheet Routes
        app.post('/timesheet/add',passport.authenticate('jwt', {session:false}),TimesheetController.addTimesheet)
        app.post('/timesheet/edit',passport.authenticate('jwt', {session:false}),TimesheetController.editTimesheet)
        app.get('/timesheet/get',passport.authenticate('jwt', {session:false}),TimesheetController.getTimesheets)
        app.post('/timesheet/get',passport.authenticate('jwt', {session:false}),TimesheetController.getTimesheet)
        app.post('/timesheet/update',passport.authenticate('jwt', {session:false}),TimesheetController.updateTimesheet)
        app.post('/timesheet/delete',passport.authenticate('jwt', {session:false}),TimesheetController.deleteTimesheet)
        app.post('/timesheet/get/employee',passport.authenticate('jwt', {session:false}),TimesheetController.getTimesheetByEmployee)
        app.post('/timesheet/get/project',passport.authenticate('jwt', {session:false}),TimesheetController.getTimesheetByProject)
    
        //Project Routes
        app.get('/project/get',passport.authenticate('jwt', {session:false}),ProjectController.getProjects)
        app.post('/project/get',passport.authenticate('jwt', {session:false}),ProjectController.getProject)
        app.post('/project/delete',passport.authenticate('jwt', {session:false}),ProjectController.deleteProject)
        app.post('/project/add',passport.authenticate('jwt', {session:false}),ProjectController.addProject)
        app.post('/project/edit',passport.authenticate('jwt', {session:false}),ProjectController.editProject)
        
        //Vehicle Routes
        app.get('/vehicle/get',passport.authenticate('jwt', {session:false}),VehicleController.getVehicles)
        app.post('/vehicle/get',passport.authenticate('jwt', {session:false}),VehicleController.getVehicle)
        app.post('/vehicle/delete',passport.authenticate('jwt', {session:false}),VehicleController.deleteVehicle)
        app.post('/vehicle/add',passport.authenticate('jwt', {session:false}),VehicleController.addVehicle)
        app.post('/vehicle/edit',passport.authenticate('jwt', {session:false}),VehicleController.editVehicle)
        
        //Vendor Routes
        app.get('/vendor/get',passport.authenticate('jwt', {session:false}),VendorController.getVendors)
        app.post('/vendor/get',passport.authenticate('jwt', {session:false}),VendorController.getVendor)
        app.post('/vendor/delete',passport.authenticate('jwt', {session:false}),VendorController.deleteVendor)
        app.post('/vendor/add',passport.authenticate('jwt', {session:false}),VendorController.addVendor)
        app.post('/vendor/edit',passport.authenticate('jwt', {session:false}),VendorController.editVendor)
        
        //Asset Routes
        app.get('/asset/get',passport.authenticate('jwt', {session:false}),AssetController.getAssets)
        app.post('/asset/get',passport.authenticate('jwt', {session:false}),AssetController.getAsset)
        app.post('/asset/delete',passport.authenticate('jwt', {session:false}),AssetController.deleteAsset)
        app.post('/asset/add',passport.authenticate('jwt', {session:false}),AssetController.addAsset)
        app.post('/asset/edit',passport.authenticate('jwt', {session:false}),AssetController.editAsset)
      
        //Client Routes
        app.get('/client/get',passport.authenticate('jwt', {session:false}),ClientController.getClients)
        app.post('/client/get',passport.authenticate('jwt', {session:false}),ClientController.getClient)
        app.post('/client/delete',passport.authenticate('jwt', {session:false}),ClientController.deleteClient)
        app.post('/client/add',passport.authenticate('jwt', {session:false}),ClientController.addClient)
        app.post('/client/edit',passport.authenticate('jwt', {session:false}),ClientController.editClient)
}