import { CharacterRepository } from "@character/domain/repositories/character.repository";
import { CharacterByIdUsecase } from "@character/domain/use-cases/character.use-case"

const getCharacterByIdUsecaseFactory = 
(characterRepo: CharacterRepository) => new CharacterByIdUsecase(characterRepo);

export const characterByIdUsecaseProvider = {
    provide: CharacterByIdUsecase,
    useFactory: getCharacterByIdUsecaseFactory,
    deps: [CharacterRepository]
}
