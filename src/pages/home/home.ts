import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Device } from '@ionic-native/device'; // To get mobile Information -- need to as a provider
import { MomentModule } from 'angular2-moment';

interface deviceInterface {
    id?: string,
    model?: string,
    cordova?: string,
    platform?: string,
    version?: string,
    manufacturer?: string,
    serial?: string,
    isVirtual?: boolean,
};

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public deviceInfo: deviceInterface = {};
    splash = true;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController, private device: Device) {
        // device.time
    }

    ionViewDidLoad() {
        setTimeout(() => this.splash = false, 4000);
    }


    Openfirst() {
        let title = 'Use this lightsaber? Title';
        let message = 'What about you?';
        let option1 = 'option1';
        let option2 = 'option2';

        this.firstShowConfirm(title, message, option1, option2);
    }

    OpenSecond() {
        //time

        var today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var day = today.getDay();
        if (day == 6 || day == 7) {
            this.showMeaasge('I am in the room');
        }
        else {
            if (day == 2 || day == 4 || day == 5) {
                console.error('call days');

                if (hours > 20) {
                    this.showMeaasge('I am on the way');
                }
                else {
                    this.showMeaasge('I am in the office, today we have call , i will reach approx 9 PM');
                }
            }
            else {
                if (hours > 18) {
                    this.showMeaasge('I am on the way');
                }
                else {
                    this.showMeaasge('I am in the office, i will reach approx 8 PM');
                }

            }
        }

        //this.getInfo();
        let title = 'Use this lightsaber? Title';
        let message = 'What about you?';
        let option1 = 'option1';
        let option2 = 'option2';

        //  this.firstShowConfirm(title, message, option1, option2);
    }


    OpenThird() {
        var today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var day = today.getDay();
        if (day == 6 || day == 7) {
            this.showMeaasge('I am in the room');
        }
        else {
            if (day == 2 || day == 4 || day == 5) {

                if (hours > 20) {
                    this.showMeaasge('Bike Riding');
                }
                else {
                    this.showMeaasge('Kuch kuch Kaam');
                }
            }
            else {
                if (hours > 18) {
                    this.showMeaasge('Bike Riding');
                }
                else {
                    this.showMeaasge('Kuch kuch Kaam');
                }

            }
        }
    }


    firstShowConfirm(title, message, option1, option2) {
        let confirm = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: option1,
                    handler: () => {
                        this.showMeaasge('Fine, thanks. :) ');
                    }
                },
                {
                    text: option2,
                    handler: () => {
                        this.showMeaasge('Give me call asap. Waiting ....');
                    }
                }
            ]
        });
        confirm.present();
    }



    showMeaasge(msg) {
        let alert = this.alertCtrl.create({
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    }

    getInfo() {
        this.deviceInfo.id = this.device.uuid;
        this.deviceInfo.model = this.device.model;
        this.deviceInfo.cordova = this.device.cordova;
        this.deviceInfo.platform = this.device.platform;
        this.deviceInfo.version = this.device.version;
        this.deviceInfo.manufacturer = this.device.manufacturer;
        this.deviceInfo.serial = this.device.serial;
        this.deviceInfo.isVirtual = this.device.isVirtual;
    }

}
