/**
 * Created by joscha.metze on 15.09.2016.
 */


export class StatusValueConverter {
  toView(value, color) {
    if(value==="rot")
    {
      if(color)
        return "red-text";
      return "error";
    }
    if(value==="gelb")
    {
      if(color)
        return "yellow-text";
      return "warning";
    }
    else{
      if(color)
        return "green-text";
      return "done";
    }

  }
}
