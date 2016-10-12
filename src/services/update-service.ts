// polyfill fetch client conditionally
const fetch = !self.fetch ? require('isomorphic-fetch') : Promise.resolve(self.fetch);
import {EntityManager} from 'aurelia-orm';
import {Config} from 'aurelia-api';
import {
  HttpClient,
  json
} from 'aurelia-fetch-client';
import {
  inject
} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';

var moment = require('moment/min/moment-with-locales');


@inject(HttpClient, AuthService, EntityManager,Config)
export class UpdateService {
  httpClient = null;
  urlPrefix = '';
  isConfigured = false;
  auth: AuthService;
  entityManager: EntityManager;
  highriseRepository = null;
  apiConfig : Config = null;
  constructor(httpclient, authService, entityManager,apiConfig) {
    this.httpClient = httpclient;
    this.auth = authService;
    this.entityManager = entityManager;
    this.apiConfig = apiConfig;
  }

  loadConfig() {
    var self = this;
    if (!this.isConfigured) {
      return this.httpClient.fetch('configuration/settings.json').then(response =>response.json()).then(jsonResponse=> {
        self.apiConfig.registerEndpoint('highriseUpdate', jsonResponse.apiPath);
        self.apiConfig.setDefaultEndpoint('highriseUpdate');
        self.highriseRepository = self.entityManager.getRepository('latestupdates');

        /*self.httpClient.configure((httpConfig)=> {
          httpConfig
            .withBaseUrl(jsonResponse.apiPath)
            .withDefaults({
              //credentials: 'same-origin',
              headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'Fetch'
              }
            })
          //we call ourselves the interceptor which comes with aurelia-auth
          //obviously when this custom Http Client is used for services
          //which don't need a bearer token, you should not inject the token interceptor
          //.withInterceptor(self.auth.tokenInterceptor)
        });*/
        self.isConfigured = true;
        return '';
      });
    }
    else
      return new Promise<string>(function (resolve) {
        resolve('')
      });
  }
  getUpdateRepository()
  {
    return this.loadConfig().then(prefix=>this.highriseRepository);
  }
  readUpdates() {
    return this.loadConfig().then(prefix=> this.highriseRepository.find());
    /*return this.loadConfig().then((prefix)=> {
      return this.httpClient.fetch(prefix + '/latestupdates/', {
        method: 'GET'
      }).then(response => {
        console.log(response);
        return response.json();
      })
    });*/
  }

}
