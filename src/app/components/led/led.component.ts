import { Component, OnInit } from '@angular/core';
import { Led } from 'src/app/models/led';
import { LedService } from 'src/app/services/led.service';
import { DatatableService } from "../../services/datatable.service";

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent implements OnInit {

  constructor(public ledService: LedService, public dataTable: DatatableService) { }

  table: any = { limit: '10', page: 0, maxpage: 0, from: 1, to: 10, q: '', total: 0, sublist: [] };
  accion: string = 'Añadir';

  ngOnInit(): void {
    this.getLeds();
  }

  getLeds() {
    this.ledService.getLeds().subscribe(
      res => {
        this.ledService.leds = res;
        this.table = this.dataTable.dataTable(this.ledService.leds, this.table, { property: '', order: '' }, "nombre");
      },
      err => console.log(err)
    );
  }

  changePages(page: number) {
    this.table.page = page;
    this.table = this.dataTable.dataTable(this.ledService.leds, this.table, { property: '', order: '' }, "nombre");
  }

  execute(led: Led) {
    console.log(JSON.stringify(led));
  }

}
