import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { HtmService } from './htm.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrapper';
  data: string;
  tags = [];
  @ViewChild('newEl',{static: true}) newEl: ElementRef;
  constructor(private http: HttpClient, private htmlService: HtmService) {

    this.htmlService.htmlData.subscribe((response: string) => {

      // this.data = response.substring(20);
      this.newEl.nativeElement.innerHTML = response;

      var div = document.createElement('div');
      div.innerHTML = response;
      var all = div.getElementsByTagName("*");
      for (var i = 0, max = all.length; i < max; i++) {       
        var tagname = all[i].tagName;
        if (this.tags.indexOf(tagname) == -1) {
         this.tags.push(tagname);
        }
      }   
    });
  }
  onSubmit(value: string){
    console.log(value );
    const data = {
      url: value
    }
    this.htmlService.sendUrl(data);
  }
   highlight(text) {
     console.log('item to be searched! ', text);
    var inputText = this.newEl.nativeElement;
    var innerHTML = this.newEl.nativeElement.innerHTML;
    var index = innerHTML.indexOf(text.toLowerCase());
    if (index >= 0) { 
      this.newEl.nativeElement.innerHTML = this.newEl.nativeElement.innerHTML.substring(-1,index) + "<span class='highlight'>" + this.newEl.nativeElement.innerHTML.substring(index,index+text.length) + "</span>" + this.newEl.nativeElement.innerHTML.substring(index + text.length);
    }
  }
}