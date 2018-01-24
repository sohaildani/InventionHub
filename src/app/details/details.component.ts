import { Component, OnInit } from '@angular/core';
import { InventionsService } from '../inventions.service';
import { Invention } from '../inventions.class'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id : string;
  invention : Invention;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: InventionsService
  )
  { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.invention = this.service.inventionDetails(+this.id);
  }
  initialize(){
  }

}
