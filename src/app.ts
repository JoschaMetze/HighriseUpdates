
import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

import {UpdateService} from './services/update-service';
import 'materialize-css/dist/css/materialize.min.css';
import {
  inject
} from 'aurelia-framework';
@inject(UpdateService)
export class App {
  router: Router;
  updateService:UpdateService;
  constructor(service){

    this.updateService = service;
  }
  activate(){
    //this.fetchConfig.configure();
    return this.updateService.loadConfig();
  }
  configureRouter(config : RouterConfiguration, router: Router) {
    //config.addPipelineStep('authorize', AuthorizeStep); // Add a route filter to the authorize extensibility point.
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'updates'], name: 'updates',      moduleId: 'pages/updates',      nav: true, title: 'Highrise updates' }
      //{ route: 'login',        moduleId: 'pages/login',       nav: false, title:'Login' },
      //{ route: 'logout',        moduleId: 'pages/logout',       nav: false, title:'Logout' },
    ]);

    this.router = router;
  }
  navigationComplete(navigationInstruction) {
    // Enable the materialize "waves" effect on the new page.

  }
}
