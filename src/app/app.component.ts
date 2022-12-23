import {
  Component,
} from '@angular/core';
import { LoadService } from './components/load/load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  isLogout: boolean = false;
  isAuth = !!localStorage.getItem('token');
  theme = 'Dark';
  public loader!: LoadService;
  // loading: boolean = false;
  ngOnInit() {
    if (!localStorage.getItem('theme')) {
      this.theme = 'Dark';
      localStorage.setItem('theme', 'Dark');
    } else {
      this.theme = localStorage.getItem('theme') || 'Dark';
    }
  }
  ngAfterContentChecked() {
    if (localStorage.getItem('activeID')) {
      this.isAuth = true;
      this.isLogout = false;
      return;
    }

    if (this.isLogout) {
      this.isAuth = false;
    }
  }
}
