import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent {
  @Input() isAuthorized: boolean = false;
  @Input() showNote: boolean = false;
  closeNote() {
    this.showNote = false;
  }
}