import appController from '../contollers/app.controller';

export class appRouting {
    private appController: appController = new appController();
    
    routes(app): void {
        app.route('/light').post(this.appController.callGPIO);
        app.route('/create').post(this.appController.createAction);
    }
}