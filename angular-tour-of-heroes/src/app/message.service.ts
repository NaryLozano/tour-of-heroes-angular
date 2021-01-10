import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//the following are the service that exposes
//its cache messages and two methods
//one to add() message to the cache
//another to clear() the cache.
export class MessageService {

  messages: string[] = [];

  add(message: string) { 
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
