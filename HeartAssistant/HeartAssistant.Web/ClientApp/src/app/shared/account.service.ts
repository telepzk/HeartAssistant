import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  signIn(): void {
    console.log('Signed in!')
  }
}
