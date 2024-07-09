import { Injectable } from '@angular/core';
import { UseCase } from '@common/use-case';
import { CharacterModel } from '../models/character.model';
import { CharacterRepository } from '../repositories/character.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterByIdUsecase implements UseCase<{id: number}, CharacterModel> {

    constructor(
        private readonly characterRepository: CharacterRepository
    ) {}

    execute(params: { id: number; }): Observable<CharacterModel> {
        return this.characterRepository.getCharacterById(params);
    }

}

