import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user : User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  isHiddenAge : boolean = false;

  hiddenAge(){
    this.isHiddenAge = !this.isHiddenAge;

  }

}

class User{
    name: string ="";
    firstName: string ="";
    age: number = 0;
    quote: string ="";
    photo: string ="";

    constructor(name: string, firstName: string,age : number,quote: string, photo : string ){
      this.name = name;
      this.firstName =firstName;
      this.age = age;
      this.quote = quote;
      this.photo = photo;

    }
}
