import { Injectable } from '@nestjs/common';
import { CreateVotanteDto } from './dto/create-votante.dto';
import { UpdateVotanteDto } from './dto/update-votante.dto';

@Injectable()
export class VotanteService {
  create(createVotanteDto: CreateVotanteDto) {
    return 'This action adds a new votante';
  }

  findAll() {
    return `This action returns all votante`;
  }

  findOne(id: number) {
    return `This action returns a #${id} votante`;
  }

  update(id: number, updateVotanteDto: UpdateVotanteDto) {
    return `This action updates a #${id} votante`;
  }

  remove(id: number) {
    return `This action removes a #${id} votante`;
  }
}
