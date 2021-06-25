import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ListenService } from 'src/app/services/listen.service';
import { NgForm } from '@angular/forms';
import { Listen } from 'src/app/models/listen';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnDestroy, OnInit {

  constructor(public listenService: ListenService, public modal: NgbModal) { }

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
    this.getListens();
  }

  getListens() {
    this.listenService.getListens().subscribe(
      res => {
        this.listenService.listens = res;
        this.dtTrigger.next();
      },
      err => console.log(err)
    );
  }

  addListen(form: NgForm) {
    if (form.value._id) {
      this.listenService.updateListen(form.value).subscribe(
        res => {
          this.modal.dismissAll();
          this.getListens();
        },
        err => console.error(err)
      )
    } else {
      this.listenService.createListen(form.value).subscribe(
        res => {
          this.modal.dismissAll();
          this.getListens();
        },
        err => console.error(err)
      )
    }
  }

  editListen(obj: Listen, contenido: any) {
    this.listenService.selectedListen = obj;
    this.modal.open(contenido);
  }

  deleteListen(id: string) {
    this.listenService.deleteListen(id).subscribe(
      (res) => { this.getListens(); },
      (err) => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
