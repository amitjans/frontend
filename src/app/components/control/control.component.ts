import { Component, OnInit } from '@angular/core';
import { InteractionService } from "../../services/interaction.service";

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(public interactionService: InteractionService) { }

  ngOnInit(): void {
    this.getInteractions()
  }

  getInteractions() {
    this.interactionService.getInteractions().subscribe(
      res => { this.interactionService.interactions = res; },
      err => console.log(err)
    );
  }

}
