import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @HostBinding('class.flex-center') hasClass = true;

  constructor() { }

  ngOnInit(): void {
  }

}
