import { Component } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: [
  ]
})
export class DynamicComponent {

  newGame: string = '';

  person: Person = {
    name: 'Luis',
    favorites: [
      {id: 1, name: 'League Of Legends'},
      {id: 2, name: 'Cyberpunk 2077'}
    ]
  }

  addGame() {
    const newFav: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    };

    this.person.favorites.push({...newFav});
    this.newGame = '';
  }

  delete(index: number) {
    this.person.favorites.splice(index, 1);
  }

  save() {
    console.log('Post formulario');
  }
}
