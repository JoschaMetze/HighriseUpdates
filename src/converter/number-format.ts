/**
 * Created by joscha.metze on 15.09.2016.
 */
import numeral from 'numeral';

export class NumberFormatValueConverter {
  toView(value, format) {
    return numeral(value).format(format);
  }
}
