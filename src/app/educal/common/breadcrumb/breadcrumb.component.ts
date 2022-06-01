import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input () title : string | undefined;
  @Input () subtitle : string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
