import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatService } from './cat.service';
import { ApiParam, ApiBody } from '@nestjs/swagger';
import { CatDto } from '../zod';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  @ApiBody({ type: CatDto, description: "创建猫的参数" })
  create(@Body() createCatDto: CatDto) {
    const task = this.catService.create(createCatDto);
    task.then(() => {
      console.log('create done!');
    });
    return task;
  }

  @Get()
  findAll() {
    return this.catService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String, description: "查找的 cat id" })
  findOne(@Param('id') id: string) {
    return this.catService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: String, description: "更新的 cat id" })
  @ApiBody({ type: CatDto, description: "更新的猫的参数" })
  update(@Param('id') id: string, @Body() updateCatDto: Partial<CatDto>) {
    return this.catService.update(+id, updateCatDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String, description: "删除的 cat id" })
  remove(@Param('id') id: string) {
    return this.catService.remove(+id);
  }
}