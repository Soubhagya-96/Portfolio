import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    
  ) { }

  ngOnInit() {



  }

  whatsapp_text() {
    window.open("https://wa.me/919090031330?text=","_blank");
  }

  mail() {
    window.open("mailto:soubhagyasahoo065@gmail.com","_blank");
  }

}
