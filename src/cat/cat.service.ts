import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/services/prisma.service';
import { Prisma } from '@prisma/client';
// import { CatDto } from 'src/zod';
import { Cat } from 'src/class-validators/models/Cat.model';

@Injectable()
export class CatService {
  constructor(private prisma: PrismaService) {

  }
  create(createCatDto: Cat) {
    return this.prisma.cat.create({
      data: createCatDto
    })
  }

  findAll() {
    return this.prisma.cat.findMany();
  }

  findOne(id: number) {
    return this.prisma.cat.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: number, updateCatDto: Prisma.CatUpdateInput) {
    return this.prisma.cat.update({
      where: {
        id,
      },
      data: updateCatDto
    });
  }

  remove(id: number) {
    return this.prisma.cat.delete({
      where: {id}
    });
  }
}
