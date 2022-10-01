import { Test, TestingModule } from '@nestjs/testing';
import { VotanteController } from './votante.controller';
import { VotanteService } from './votante.service';

describe('VotanteController', () => {
  let controller: VotanteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VotanteController],
      providers: [VotanteService],
    }).compile();

    controller = module.get<VotanteController>(VotanteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
