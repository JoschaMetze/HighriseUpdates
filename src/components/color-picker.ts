/**
 * Created by joscha.metze on 15.08.2016.
 */
import {inject, bindable, containerless} from 'aurelia-framework';
import 'spectrum-colorpicker';
import 'spectrum-colorpicker/spectrum.css';
@inject(Element)
@containerless
export class ColorPicker {
  @bindable name = 'colorPicker';
  @bindable color = null;
  element = null;
  colorPicker = null;
  constructor(element) {
    this.element = element;
  }
  attached() {
    (<any>$(this.colorPicker)).spectrum( {
      color : this.color,
      change: function(color) {
        this.color = color.toHexString(); // #ff0000
      }.bind(this)
    });
  }
}
