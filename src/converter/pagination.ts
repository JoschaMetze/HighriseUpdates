/**
 * Created by joscha.metze on 13.09.2016.
 */
export class PaginationValueConverter {
  toView(array, config) {
    return array
      .slice(config.start,config.start+config.count);
  }
}
