import { Observable } from "rxjs";
import { CharacterModel } from "@character/domain/models/character.model";


export abstract class CharacterRepository {
    abstract getCharacterById(params: { id: number }): Observable<CharacterModel>;
}