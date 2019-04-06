import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the GetvaluePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-getvalue',
  templateUrl: 'getvalue.html',
})
export class GetvaluePage {
  username:string;
  stdId:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {
    this.storage.ready().then(
      ()=>{
        this.storage.get('username').then(
          (val)=>{
            this.username=val;
          }
        );
        this.storage.get('stdId').then(
          (valId)=>{
            this.stdId=valId;
          }
        );
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetvaluePage');
  }

}
