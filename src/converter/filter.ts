export class FilterValueConverter {
  toView(array, config) {
    var filteredArray = array
      .filter((item) => {
          return (item[config.propertyName] !== config.propertyValue);
      });
    return filteredArray;
  }
}
