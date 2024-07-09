import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { CharacterRepository } from "@character/domain/repositories/character.repository";
import { characterByIdUsecaseProvider } from "@character/infraestructure/character.factory";
import { CharacterImplementationRepository } from "@character/infraestructure/repositories/character.repository";


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    characterByIdUsecaseProvider,
    {
      provide: CharacterRepository,
      useClass: CharacterImplementationRepository
    }
  ],
})
export class CharacterModule {}
