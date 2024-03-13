
import { Module } from "@nestjs/common";
import { DatabaseModules } from "../database/database.module";
import { GeneroController } from "./genero.controller";
import { generoProviders } from "./genero.providers";
import { GeneroService } from "./genero.service";

@Module({
    imports: [DatabaseModules],
    controllers: [GeneroController],
    providers: [
        ...generoProviders,
        GeneroService,
    ],
})

export class GeneroModule {}