export class SortValueConverter {
  toView(array, config) {
    var factor = (config.direction || 'ascending') === 'ascending' ? 1 : -1;
    var sortedArray = array
      .slice(0)
      .sort((a, b) => {
        if (config.secondPropertyName) {
        //  if(typeof(a[config.propertyName][config.secondPropertyName])==="number")
          if (a[config.propertyName][config.secondPropertyName] < b[config.propertyName][config.secondPropertyName]) //sort string ascending
            return -1*factor;
          if (a[config.propertyName][config.secondPropertyName] > b[config.propertyName][config.secondPropertyName])
            return 1*factor;
          return 0; //default return value (no sorting)
        } else {
         // if(typeof(a[config.propertyName][config.secondPropertyName])==="number")
          if (a[config.propertyName]< b[config.propertyName]) //sort string ascending
            return -1*factor;
          if (a[config.propertyName] > b[config.propertyName])
            return 1*factor;
          return 0; //default return value (no sorting)
        }
      });
    return sortedArray;
  }
}
