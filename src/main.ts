import {Aurelia} from 'aurelia-framework';
import {bootstrap} from 'aurelia-bootstrapper-webpack';
//import 'materialize-css';
import '../styles/styles.css';
//import 'materialize-css/dist/js/materialize.js';


import '../node_modules/font-awesome/css/font-awesome.css';
//declare function require(x: string): any;    // Typescript
//var ad = require('aurelia-dialog');

import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export async function configure(aurelia: Aurelia) {
  //ad.configure(aurelia);

  aurelia.use
    .standardConfiguration()
    .globalResources('converter/date-format')
    .globalResources('converter/sort')
    .globalResources('converter/status')
    .plugin("aurelia-dialog", (dialogConfig: any) => {
      dialogConfig.useDefaults();
      dialogConfig.lock = true;
      dialogConfig.startingZIndex = 5;
    })
    .plugin('aurelia-materialize-bridge', bridge => bridge.useAll() )
    .plugin('aurelia-auth', (baseConfig)=>{
      baseConfig.configure({
        loginUrl: 'auth'
      });
    })
    .plugin('aurelia-api', config => {
      config
        .registerEndpoint('highriseUpdate', 'http://localhost:63735/api/')
        .setDefaultEndpoint('highriseUpdate');
    })
    .plugin('aurelia-table')
    .developmentLogging();
  await aurelia.start();
  aurelia.setRoot('app');
}
