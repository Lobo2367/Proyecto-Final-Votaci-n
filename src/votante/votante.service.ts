import { Injectable, NotFoundException } from '@nestjs/common';
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

async getAllVotantes() {
  const products = await this.VotanteModel.find().exec();
  return products.map(vota => ({
    id: vota.id,
    nombre: vota.nombre,
    apellido: vota.apellido,
    cedula: vota.cedula,
  }));
}

async getSingleProduct(_id: number) {
  const votante = await this.findVotante(_id);
  return {
    id: votante._id,
    nombre: votante.nombre,
    apellido: votante.apellido,
    cedula: votante.cedula,
  };
}

  update(id: number, updateVotanteDto: UpdateVotanteDto) {
    return `This action updates a #${id} votante`;
  }

  remove(id: number) {
    return `This action removes a #${id} votante`;
  }





  private async findVotante(id: number): Promise<Votante> {
    let votante;
    try {
      votante = await this.VotanteModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!votante) {
      throw new NotFoundException('Could not find product.');
    }
    return votante;
  }
}
