import { Time } from '@angular/common';

export class User {
    id:number;
    email:string;
    first_name:string;
    last_name:string;
    password:string;
    role:string;
    registration_date:Time;

    constructor(){}
}
