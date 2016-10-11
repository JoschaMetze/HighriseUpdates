import { noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';
import * as nprogress from 'nprogress';


@noView()
@inject(EventAggregator)
export class LoadingIndicator {
  constructor(eventAggregator) {
    eventAggregator.subscribe('indicator:processing', this.start);
    eventAggregator.subscribe('indicator:complete', this.done);
  }

  start() {
    nprogress.start();
    nprogress.inc();
  }

  done() {
    nprogress.done();
  }
}
