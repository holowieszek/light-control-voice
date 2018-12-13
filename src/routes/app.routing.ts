import appController from '../contollers/app.controller';

export class appRouting {
    private appController: appController = new appController();
    
    routes(app): void {
        app.route('/light').post(this.appController.GPIO);
    }
}