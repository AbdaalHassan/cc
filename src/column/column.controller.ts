import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { ColumnDto } from 'src/dto/column-dto';
import { Column } from 'src/schemas/column.schema';
import { ColumnService } from './column.service';

@Controller('column')
export class ColumnController {
  constructor(private readonly columnService: ColumnService) {}

  @Post()
  async createColumn(
    @Body()
    column: ColumnDto,
  ): Promise<Column> {
    return this.columnService.createColumn(column);
  }

  @Get()
  async getAllColumns(): Promise<Column[]> {
    return this.columnService.getAllColumns();
  }

  @Delete(':id')
  async deleteColumn(@Param('id') id: string) {
    await this.columnService.deleteById(id);
  }
}
