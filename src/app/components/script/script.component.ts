import { Component, OnInit } from '@angular/core';
import { DatatableService } from "../../services/datatable.service";
import { ScriptService } from 'src/app/services/script.service';
import { NgForm } from '@angular/forms';
import { Script } from 'src/app/models/script';

@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.css']
})
export class ScriptComponent implements OnInit {

  constructor(public scriptService: ScriptService, public dataTable: DatatableService) { }

  table: any = { limit: 10, page: 0, maxpage: 0, from: 1, to: 10, q: '', total: 0, sublist: [] };
  accion: string = 'Añadir';

  ngOnInit(): void {
    this.getScripts();
  }

  getScripts() {
    this.scriptService.getScripts().subscribe(
      res => {
        this.scriptService.scripts = res;
        this.table = this.dataTable.dataTable(this.scriptService.scripts, this.table, { property: '', order: '' }, "nombre");
      },
      err => console.log(err)
    );
  }

  addScript(form: NgForm) {
    if (form.value._id) {
      this.scriptService.updateScript(form.value).subscribe(
        res => {
          (document.querySelector('.btn-close') as any).click();
          this.getScripts();
        },
        err => console.error(err)
      )
    } else {
      this.scriptService.createScript(form.value).subscribe(
        res => {
          (document.querySelector('.btn-close') as any).click();
          this.getScripts();
        },
        err => console.error(err)
      )  
    }
  }

  editScript(obj: Script) {
    this.scriptService.selectedScript = obj;
    (document.getElementById('formModal') as any).click();
  }

  deleteScript(id: string) {
    this.scriptService.deleteScript(id).subscribe(
      (res) => { this.getScripts(); },
      (err) => console.error(err)
    );
  }

  changePages(page: number) {
    this.table.page = page;
    this.tableUpdate();
  }

  tableUpdate() {
    console.log(this.table.limit);
    this.table = this.dataTable.dataTable(this.scriptService.scripts, this.table, { property: '', order: '' }, "nombre");
  }
}
