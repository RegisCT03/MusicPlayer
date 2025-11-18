import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './search-page.html',
  styleUrls: ['./search-page.css']
})
export class SearchPageComponent implements OnInit {
  query: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.query = params['query'];
    });
  }
}