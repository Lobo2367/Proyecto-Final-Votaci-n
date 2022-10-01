import { Module } from '@nestjs/common';
import { VotanteService } from './votante.service';
import { VotanteController } from './votante.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VotanteSchema } from './entities/votante.entity';

@Module({
  imports : [
    MongooseModule.forFeature([{ name: 'Votante', schema: VotanteSchema}])
  ],
  controllers: [VotanteController],
  providers: [VotanteService]
})
export class VotanteModule {}

