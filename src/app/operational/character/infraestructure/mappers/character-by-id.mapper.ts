import { Mapper } from "@common/mapper";
import { CharacterModel } from "@character/domain/models/character.model";
import { CharacterEntity } from "@character/infraestructure/entities/character.entity";


export class CharacterByIdRepositoryMapper extends Mapper<CharacterEntity, CharacterModel> {
    mapFrom(param: CharacterEntity): CharacterModel {
        return {
            id: param.id,
            name: param.name,
            gender: param.gender,
            image: param.image,
            created: param.created,
            episode: param.episode,
            location: param.location,
            origin: param.origin,
            species: param.species,
            status: param.status,
            type: param.type,
            url: param.url
        }
    }
}