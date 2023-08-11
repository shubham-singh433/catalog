import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private Data!: string;

  setData(data: any) {
    this.Data = data.value;
  }

  getData() {
    return this.Data;
  }
}
