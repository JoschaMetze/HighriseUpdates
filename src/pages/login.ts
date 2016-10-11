/**
 * Created by joscha.metze on 13.07.2016.
 */

import {AuthService} from 'aurelia-auth';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
@inject(AuthService,Router )

export class Login{
  auth: AuthService;
  router:Router;
  constructor(auth,router){
    this.auth = auth;
    this.router = router;
  };

  heading = 'Login';

  email='';
  password='';
  login(){

  var self = this;
    return this.auth.login(this.email, this.password)
      .then(response=>{
        //redirect to lastgang route

      })
      .catch(err=>{
        err.json().then(function(e){
          console.log("login failure : " + e.message);
        });

      });
  };
  }
