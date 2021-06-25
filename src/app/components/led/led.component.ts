import { Component, OnInit, OnDestroy } from '@angular/core';
import { LedService } from 'src/app/services/led.service';
import { NgForm } from '@angular/forms';
import { Led } from 'src/app/models/led';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent implements OnInit {

  constructor(public ledService: LedService) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  accion: string = 'Añadir';

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 10,
      language: { url: `assets/datatable/i18n/${localStorage.getItem('lang')}.json` },
      columnDefs: [{
        targets: [2],
        orderable: false
      }],
      retrieve: true
    };
    this.getLeds();
  }

  getLeds() {
    this.ledService.getLeds().subscribe(
      res => {
        this.ledService.leds = res;
        this.dtTrigger.next();
      },
      err => console.log(err)
    );
  }

  execute(led: Led) {
    console.log(JSON.stringify(led));
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
