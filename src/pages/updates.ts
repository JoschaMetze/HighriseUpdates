/**
 * Created by joscha.metze on 25.08.2016.
 */
import {
  UpdateService
} from '../services/update-service';
import {
  inject
} from 'aurelia-framework';
import * as _ from 'lodash';
import {
  DialogService
} from 'aurelia-dialog';
import {
  MdToastService
} from 'aurelia-materialize-bridge';
import 'object-assign';
import {
  EventAggregator
} from 'aurelia-event-aggregator';
@inject(UpdateService, DialogService, EventAggregator, MdToastService)
export class Updates {
  updateService: UpdateService = null;
  eventAggregator = null;
  mdToastService = null;
  updates = [];
  dialogService = null;
  updateRepository = null;
  constructor(updateService, dialogservice, eventAggregator, mdToastService) {
    this.updateService = updateService;
    this.dialogService = dialogservice;
    this.eventAggregator = eventAggregator;
    this.mdToastService = mdToastService;
  }
  filters = [
    {value: '', keys: ['name', 'haeufigkeit','firmenName','ansprechpartner','status']},
  ];
  attached(params) {
    this.eventAggregator.publish('indicator:processing', {});
    //this.updateService.getUpdateRepository().then(repo=>this.updateRepository = repo);
      this.updateService.readUpdates().then(parties=>
      {
        this.updates = parties;
        this.eventAggregator.publish('indicator:complete', {});
      }).catch(error => {
        this.eventAggregator.publish('indicator:complete', {});
        this.mdToastService.show('Fehler beim Zugriff auf Server: ' + error.message, 4000);
      });
  }
}
