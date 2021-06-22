import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScriptService } from 'src/app/services/script.service';
import { NgForm } from '@angular/forms';
import { Script } from 'src/app/models/script';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-script',
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.css']
})
export class ScriptComponent implements OnDestroy, OnInit {

  constructor(public scriptService: ScriptService) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  accion: string = 'Añadir';

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 10,
      language: { url: `assets/datatable/i18n/${localStorage.getItem('lang')}.json`},
      columnDefs: [ {
        targets: [1],
        orderable: false
      } ]
    };
    this.getScripts();
  }

  getScripts() {
    this.scriptService.getScripts().subscribe(
      res => {
        this.scriptService.scripts = res;
        this.dtTrigger.next();
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

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
