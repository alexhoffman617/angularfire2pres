import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { MdButton, MdInput, MdList, MdListItem, MdIcon } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
    af;
    user;
    inputText: '';
    ngOnInit() {
      this.scrollMessagesToBottom();
    }

    ngAfterViewChecked() {
      this.scrollMessagesToBottom();
    }

    scrollMessagesToBottom() {
      var messagesDiv = document.getElementById('messages');
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
    messages: FirebaseListObservable<any[]>;
    login() {
      this.af.auth.login({

      });
    }

    logout() {
      this.af.auth.logout();
    }

    submitMessage(text){
      var username = this.user ? this.user.auth.displayName: 'Anonymous';
      var photo = this.user ? this.user.auth.photoURL: 'http://cdn.onlinewebfonts.com/svg/img_210318.svg';
         this.messages.push({
           time: firebase.database.ServerValue.TIMESTAMP,
           name: username,
           text: text,
           photo: photo
         });
         this.inputText = '';
    };
    formatDate(date) {
      var actualDate = new Date(date);
      return actualDate.toTimeString().substr(0,5);
    }
    constructor(af: AngularFire) {
        this.af = af;
         this.messages = af.database.list('/messages', { 
           query: {
             orderByChild: 'time'
           }
         });

      this.af.auth.subscribe(user => {
        if(user) {
          // user logged in
          this.user = user;
        }
        else {
          // user not logged in
          this.user = null;
        }
    });
  }
}
