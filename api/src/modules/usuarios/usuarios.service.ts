import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UsuariosDTO } from './usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService) { }
  async create(data: UsuariosDTO) {
    const userExists = await this.prisma.usuarios.findFirst({
      where: {
        username: data.username
      }
    })
    if (userExists) {
      throw new Error('User already exists')
    }
    const user = await this.prisma.usuarios.create({
      data,
    })
    return user;
  }

  findAll() {
    return this.prisma.usuarios.findMany();
  }

  findOne(id: number) {
    return this.prisma.usuarios.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, data: UsuariosDTO) {
    const userExists = await this.prisma.usuarios.findUnique({
      where: {
        id
      }
    })

    if (!userExists) {
      throw new Error ('User does not exists!')
    }

    return await this.prisma.usuarios.update({
      data,
      where: {
        id
      }
    })
  }

  async delete(id: number) {
    const userExists = await this.prisma.usuarios.findUnique({
      where: {
        id
      }
    })

    if (!userExists) {
      throw new Error ('User does not exists!')
    }
    return await this.prisma.usuarios.delete({
      where: {
        id
      }
    })
  }
}