import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { CharacterModel } from '@character/domain/models/character.model';
import { CharacterRepository } from '@character/domain/repositories/character.repository';

import { CharacterByIdRepositoryMapper } from '@character/infraestructure/mappers/character-by-id.mapper';
import { CharacterEntity } from '@character/infraestructure/entities/character.entity';

@Injectable({
  providedIn: 'root'
})
export class CharacterImplementationRepository implements CharacterRepository {

    API_URL: string = 'https://rickandmortyapi.com/api/character';

    CharacterByIdRepository = new CharacterByIdRepositoryMapper();

    constructor(
        private readonly http: HttpClient
    ) { }

    getCharacterById(params: { id: number; }): Observable<CharacterModel> {
        return this.http
                .get<CharacterEntity>(`${this.API_URL}/${params.id}`)
                .pipe(
                    map(this.CharacterByIdRepository.mapFrom)
                );
    }
}
