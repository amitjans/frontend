import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private translateService: TranslateService){
    this.translateService.setDefaultLang('es');
    this.translateService.use(localStorage.getItem('lang') || 'es');
  }

  changeLang(code: string) {
    localStorage.setItem('lang', code);
    window.location.reload();
  }
}
