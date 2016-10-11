import {inject, bindable, containerless} from 'aurelia-framework';
var moment = require('moment/min/moment-with-locales');
//import 'materialize';
@inject(Element)
@containerless
export class MaterializeDatePicker {
  @bindable name = 'test';
  @bindable date = moment();
  element = null;
  datepicker = null;
  constructor(element) {
    this.element = element;
  }
  attached() {
    (<any>$).extend((<any>$).fn.pickadate.defaults, {
      monthsFull: [ 'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember' ],
      monthsShort: [ 'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez' ],
      weekdaysFull: [ 'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag' ],
      weekdaysShort: [ 'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa' ],
      today: 'Heute',
      clear: 'X',
      close: 'Schließen',
      firstDay: 1,
      format: 'dddd, dd. mmmm yyyy',
      formatSubmit: 'dd.mm.yyyy'
    });
    (<any>$(this.datepicker)).pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      onSet: function(sets) {
        this.date = moment(sets.select).format();
      }.bind(this)
    });
  }
}

export class SimpleDateValueConverter {
  toView(value) {
    return moment(value).format('DD.MM.YYYY');
  }
}
