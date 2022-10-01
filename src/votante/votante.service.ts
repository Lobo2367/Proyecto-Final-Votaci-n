import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateVotanteDto } from './dto/create-votante.dto';
import { UpdateVotanteDto } from './dto/update-votante.dto';
import { Model } from 'mongoose';
import { Votante } from './entities/votante.entity';

@Injectable()
export class VotanteService {

  constructor (@InjectModel('Votante') private readonly VotanteModel: Model<Votante>) {}

 async createVotante(nombrex: string, apellidox: string, cedulax: number) {
  const newProduct = new this.VotanteModel({
    nombre: nombrex,
    apellido: apellidox,
    cedula: cedulax,
  });
  const result = await newProduct.save();
  console.log(result)
  return result.id as string;
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
