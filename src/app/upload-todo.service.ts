import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UploadTodoService {

  constructor(private http: Http) {

   }

   makeUpload(data){
     var dataString = JSON.stringify(data);
     console.log("data to be posted: " + dataString);
     return this.http.post('',dataString).map(res => res.json());
   }

}
