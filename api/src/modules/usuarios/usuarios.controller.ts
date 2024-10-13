import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosDTO } from './usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async create(@Body() data: UsuariosDTO) {
    return this.usuariosService.create(data);
  }

  @Get()
  async findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usuariosService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: UsuariosDTO) {
    return this.usuariosService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.usuariosService.delete(Number(id));
  }
}
