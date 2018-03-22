import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.scss']
})
export class StartupsComponent implements OnInit {

  quote: string;
  author: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
}
getQuote(){
  this.http.get('https://talaikis.com/api/quotes/random/ ').subscribe(
    (result) => {
      this.quote = result['quote'];
      this.author = result['author'];
  }
);
}

}
