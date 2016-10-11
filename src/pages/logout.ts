/**
 * Created by joscha.metze on 13.07.2016.
 */
import {AuthService} from 'aurelia-auth';
import {inject} from 'aurelia-framework';


@inject(AuthService )

export class Logout{
  authService:AuthService;
  constructor(authService){
    this.authService = authService;
  };

  activate(){
    this.authService.logout("#/login")
      .then(response=>{
        console.log("ok logged out on  logout.js");
      })
      .catch(err=>{
        console.log("error logged out  logout.js");

      });
  }
}
