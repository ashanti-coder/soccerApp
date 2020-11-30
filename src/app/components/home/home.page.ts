import { HomeService } from './../../services/home.service';
import { AlertController, Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // counter = {} as Counter;

  count = 0;
   counte = 0;
   countYellowTeamB = 0;

   countYellowTeamA = 0;
 
   countRedTeamB = 0;
 
   countRedTeamA = 0;

   countOffTeamA = 0;

   countOffTeamB = 0;

  constructor(private router: Router, private service: HomeService, private alertCtrl: AlertController, private modalCtrl: ModalController) {
  this.count=this.service.count;
  this.counte = this.service.counte;
  this.countYellowTeamA = this.service.countYellowTeamA;
  this.countYellowTeamB = this.service.countYellowTeamB;
  this.countRedTeamA = this.service.countRedTeamA;
  this.countRedTeamB = this.service.countRedTeamB;
  this.countOffTeamA = this.service.countOffTeamA;
  this.countOffTeamB = this.service.countOffTeamB;
  // this.count = 0;
  // this.counte = 0;

  
  

  // this.countYellowTeamA = this.service.countYellowTeamA;
  // this.countYellowTeamB = this.service.countYellowTeamB;
  // this.countRedTeamA = this.service.countRedTeamA;
  // this.countRedTeamB = this.service.countRedTeamB;

 

  // this.countOffTeamA = 0;

  // this.countOffTeamB = 0
   }

   ngOnInit() {
  }

   goStats(){
    this.router.navigateByUrl('chats');
   }

    goCounter(){
      this.service.counter();
    //  console.log("hi");
    // this.count = this.count + 1;
    this.count=this.service.count;
   }
   goCounta(){
     this.service.counta();
    //  console.log("hi");
    // this.counte = this.counte + 1;
    this.counte = this.service.counte;
    }

    goCounterMinus(){
     this.service.counterMinus();
    // this.count = this.count - 1;
    this.count=this.service.count;
    }
    goCountaMini(){
      this.service.countaMini();
     // this.counte = this.counte - 1;
     this.counte = this.service.counte;
     }
     async goYellow(){

      // this.countYellowTeamA = this.countYellowTeamA + 1;
    
        this.service.yellowTeamA();
        this.countYellowTeamA = this.service.countYellowTeamA;
      // console.log("Orlando Pirates has " + this.countYellowTeamA + " Yellow Cards");
      
        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'Yellow Card Orlando Pirates',
          // subHeader: 'Subtitle',
          // message: 'This is an alert message.',
          buttons: ['OK']
        });
    
        await alert.present();
      }
    
    async goYellows(){
  
      this.service.yellowTeamB();
      this.countYellowTeamB = this.service.countYellowTeamB;
     // this.countYellowTeamB = this.countYellowTeamB + 1;
      // console.log("Sundowns " + this.countYellowTeamB + " Yellow Cards");
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Yellow Card Sundowns',
        // subHeader: 'Subtitle',
        // message: 'This is an alert message.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    async goRed(){
      //this.countRedTeamA = this.countRedTeamA + 1;
      this.service.redTeamA();
      this.countRedTeamA = this.service.countRedTeamA;
      console.log("Orlando Pirates has " + this.countRedTeamA + " Red Cards");
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Red Card Orlando Pirates',
        // subHeader: 'Subtitle',
        // message: 'This is an alert message.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    async goReds(){
      if(this.countYellowTeamA >= 2 || this.countYellowTeamB >= 2){
           console.log("Two yellow == Red");
      }else{
        this.service.redTeamB();
        this.countRedTeamB = this.service.countRedTeamB;
        //this.countRedTeamB = this.countRedTeamB + 1;
        console.log("Sundowns has " + this.countRedTeamB + " Red Cards");
      }
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Red Card Sundowns',
        // subHeader: 'Subtitle',
        // message: 'This is an alert message.',
        buttons: ['OK']
      });
  
      await alert.present();
     
    }

    async goOffTeamA(){
       this.service.offTeamA();
       this.countOffTeamA = this.service.countOffTeamA;
       const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Offside Orlando Pirates',
        // subHeader: 'Subtitle',
        // message: 'This is an alert message.',
        buttons: ['OK']
      });
  
      await alert.present();
    }

    async goOffTeamB(){
      this.service.offTeamB();
      this.countOffTeamB = this.service.countOffTeamB;
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Offside Sundowns',
        // subHeader: 'Subtitle',
        // message: 'This is an alert message.',
        buttons: ['OK']
      });
  
      await alert.present();
    }

    // async reset(){
    //   if(this.goCounta() == this.goCounter()){
    //     console.log("It is a draw")
    // }else if(this.count > this.counte){
    //   console.log("Team A won");
    // }else if(this.service.counter < this.service.counta){
    //   console.log("Team B won");
    // }else{
    //   this.service.resets();
    //   this.count=this.service.count;
    //   this.counte = this.service.counte;
    //   this.countYellowTeamA = this.service.countYellowTeamA;
    //   this.countYellowTeamB = this.service.countYellowTeamB;
    //   this.countRedTeamA = this.service.countRedTeamA;
    //   this.countRedTeamB = this.service.countRedTeamB;
    //   this.countOffTeamA = this.service.countOffTeamA;
    //   this.countOffTeamB = this.service.countOffTeamB;
      
    //   let alert = await this.alertController.create({
    //     header: 'it is a goal!',
    // message: 'it is a win or lose game',
    // buttons: ['OK']
    //   });
    // }
    // }

    async reset() {
      let alert = await this.alertCtrl.create({
        header: 'Are you sure you want to reset!',
        // message: 'You have won the game',
        buttons: ['OK']
      });
      alert.present().then(() => {
        this.modalCtrl.dismiss();
      });
    }
}
