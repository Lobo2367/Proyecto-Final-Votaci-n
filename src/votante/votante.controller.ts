import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VotanteService } from './votante.service';
import { CreateVotanteDto } from './dto/create-votante.dto';
import { UpdateVotanteDto } from './dto/update-votante.dto';

@Controller('votante')
export class VotanteController {
  constructor(private readonly votanteService: VotanteService) {}

  @Post()
  async addProduct(
    @Body('nombre') nombre: string,
    @Body('apellido') apellido: string,
    @Body('cedula') cedula: number,
  ) {
    const generatedId = await this.votanteService.createVotante(
      nombre,
      apellido,
      cedula,
    );
    return { id: generatedId };
  }

  @Get()
  findAll() {
    return this.votanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.votanteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVotanteDto: UpdateVotanteDto) {
    return this.votanteService.update(+id, updateVotanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.votanteService.remove(+id);
  }
}
