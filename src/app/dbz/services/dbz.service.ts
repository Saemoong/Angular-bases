import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 5000
    }
  ];

  addCharacter(character: Character): void {

    const newCharacter: Character = {
      ...character,
      id: uuid()
    }

    this.characters.unshift(newCharacter);
  }

  //console.log(`Indice recibido: ${index}`);
  // this.characters.splice(index,1);
  deleteCharacterById(id: string): void {
    console.log(`Id recibido: ${id}`);
    this.characters = this.characters.filter( character => character.id !== id);

  }

}
