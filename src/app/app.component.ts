import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterRepository } from '@character/domain/repositories/character.repository';
import { CharacterModule } from '@operational/character/character.module';
import { CharacterEntity } from '@character/infraestructure/entities/character.entity'
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CharacterModule,
    JsonPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public character!: CharacterEntity;
  
  constructor(
    private readonly characterRepository: CharacterRepository
  ){
    this.characterRepository.getCharacterById({id: 1}).subscribe(
      (character) => this.character = character
    )

  }

}
