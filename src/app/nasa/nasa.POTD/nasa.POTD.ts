import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({    
  selector: 'nasa-root',
  templateUrl: './nasa.POTD.html',
  styleUrls: ['./nasa.POTD.css']
})

export class NasaPhotoOfTheDayComponent{
    title = "Nasa Photo of the Day";
    potd;

    constructor(private http: HttpClient){
      this.getPhotoOfTheDay();
    }

    getPhotoOfTheDay(){
      this.http.get('https://api.nasa.gov/planetary/apod?api_key=VMGA4zqGg4VNvQYpeDXKXUAQx8hnGdn2085qXLnx')
        .subscribe(response =>{
          console.log(response);
          this.potd = response;
        })
    }
}