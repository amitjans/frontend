import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { VoiceService } from 'src/app/services/voice.service';
import { NgForm } from '@angular/forms';
import { Voice } from 'src/app/models/voice';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnDestroy, OnInit {

  constructor(public voiceService: VoiceService, public modal: NgbModal) { }

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
    this.getVoices();
  }

  getVoices() {
    this.voiceService.getVoices().subscribe(
      res => {
        this.voiceService.voices = res;
        this.dtTrigger.next();
      },
      err => console.log(err)
    );
  }

  addVoice(form: NgForm) {
    if (form.value._id) {
      this.voiceService.updateVoice(form.value).subscribe(
        res => {
          this.modal.dismissAll();
          this.getVoices();
        },
        err => console.error(err)
      )
    } else {
      this.voiceService.createVoice(form.value).subscribe(
        res => {
          this.modal.dismissAll();
          this.getVoices();
        },
        err => console.error(err)
      )
    }
  }

  editVoice(obj: Voice, contenido: any) {
    this.voiceService.selectedVoice = obj;
    this.modal.open(contenido);
  }

  deleteVoice(id: string) {
    this.voiceService.deleteVoice(id).subscribe(
      (res) => { this.getVoices(); },
      (err) => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
