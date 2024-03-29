import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ColumnDocument } from 'src/schemas/column.schema';
import { Column } from 'src/schemas/column.schema';
import { CardService } from 'src/card/card.service';

@Injectable()
export class ColumnService {
  constructor(
    @InjectModel('column')
    private columnModel: mongoose.Model<ColumnDocument>,
    private readonly cardService: CardService,
  ) {}

  // Create a column
  async createColumn(column: Column): Promise<Column> {
    const newcolumn = await this.columnModel.create(column);
    return newcolumn;
  }

  // get all columns
  async getAllColumns(): Promise<Column[]> {
    const columns = await this.columnModel.find();
    return columns;
  }

  async deleteById(id: string): Promise<any> {
    await this.cardService.deleteCardsByColumnId(id);
    await this.columnModel.findByIdAndDelete(id);
    return {
      message: `Column with ID ${id} and its related cards are deleted.`,
    };
  }
}
