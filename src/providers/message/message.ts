import { Injectable } from '@angular/core';

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {

  public Messages : Array<string> = new Array<string>();
  public MessageDraft : string = null;

  constructor() {
    console.log('Hello MessageProvider Provider');
  }

  public AddMessage()
  {
    if(this.MessageDraft != null){
      this.Messages.push(this.MessageDraft);
      this.MessageDraft = null;
    }
  }

}
