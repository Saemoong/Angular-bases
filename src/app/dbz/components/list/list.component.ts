import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter<string>();


  @Input()
  public characterList: Character[] = [
    // {
    //   name: 'Trunks',
    //   power: 10
    // }
  ]

  onDeleteCharacter(id: string): void {
    // TODO Emitir el id del personaje
    console.log(`Id emitido: ${id}`);
    this.onDelete.emit(id);

  }

}
