export class MapValueConverter {
  toView(array, propertyName) {
    return array
      .slice(0)
      .map((a) => {
        return (a[propertyName]);
      });
  }
}
