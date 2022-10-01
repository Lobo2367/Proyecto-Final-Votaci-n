import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VotanteModule } from './votante/votante.module';

@Module({
  imports: [VotanteModule, MongooseModule.forRoot('mongodb+srv://Lobo2367:santiagodecuba@voting.bwshn1j.mongodb.net/Voting?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
