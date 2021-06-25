import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MovService } from 'src/app/services/mov.service';
import { NgForm } from '@angular/forms';
import { Mov } from 'src/app/models/mov';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-mov',
  templateUrl: './mov.component.html',
  styleUrls: ['./mov.component.css']
})
export class MovComponent implements OnDestroy, OnInit {

  constructor(public movService: MovService, public modal: NgbModal) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

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
    this.getMovs();
  }

  getMovs() {
    this.movService.getMovs().subscribe(
      res => {
        this.movService.movs = res;
        this.dtTrigger.next();
      },
      err => console.log(err)
    );
  }

  addMov(form: NgForm) {
    if (form.value._id) {
      this.movService.updateMov(form.value).subscribe(
        res => {
          this.modal.dismissAll();
          this.getMovs();
        },
        err => console.error(err)
      )
    } else {
      this.movService.createMov(form.value).subscribe(
        res => {
          this.modal.dismissAll();
          this.getMovs();
        },
        err => console.error(err)
      )
    }
  }

  editMov(obj: Mov, contenido: any) {
    this.movService.selectedMov = obj;
    this.modal.open(contenido);
  }

  deleteMov(id: string) {
    this.movService.deleteMov(id).subscribe(
      (res) => { this.getMovs(); },
      (err) => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
