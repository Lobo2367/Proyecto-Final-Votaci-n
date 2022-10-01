import { Module } from '@nestjs/common';
import { VotanteService } from './votante.service';
import { VotanteController } from './votante.controller';

@Module({
  controllers: [VotanteController],
  providers: [VotanteService]
})
export class VotanteModule {}
