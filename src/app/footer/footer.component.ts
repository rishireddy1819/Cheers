import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  userModel = new User('');
  

  constructor() { }

  ngOnInit(): void {
  }

}
