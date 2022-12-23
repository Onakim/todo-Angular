import { Component } from '@angular/core';
import { LoadService } from './load.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss'],
})
export class LoadComponent {
  constructor(public loader: LoadService) { }
}
