import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GetvaluePage } from '../getvalue/getvalue';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage:Storage) {
    storage.ready().then(
      ()=>{
        //set data to local storage
        storage.set("username",'Kedsinee.J');
        storage.set("stdId",'6042040902');
      }
    );
    }
    gotoGetValue(){
      this.navCtrl.push(GetvaluePage);
    }

  }


