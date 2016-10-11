/**
 * Created by joscha.metze on 15.09.2016.
 */
var moment = require('moment/min/moment-with-locales');

export class DateFormatValueConverter {
  toView(value, format) {
    moment.locale('de');
    return moment(value).format(format);
  }
}
