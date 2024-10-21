import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosDTO } from './usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async create(@Body() data: UsuariosDTO) {
    return this.usuariosService.create(data);
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() loginDto: UsuariosDTO) {
    const { username, password } = loginDto;

    // Chama o método validateUser para verificar as credenciais
    const user = await this.usuariosService.validateUser(username, password);

    if (!user) {
      throw new Error('Credenciais inválidas');
    }

    // Aqui você pode retornar um token JWT ou simplesmente uma mensagem de sucesso
    return {
      message: 'Login bem-sucedido!',
      user, // Você pode incluir o usuário no retorno ou outros dados
    };
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
