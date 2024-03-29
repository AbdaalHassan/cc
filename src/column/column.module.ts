import { Module } from '@nestjs/common';
import { ColumnController } from './column.controller';
import { ColumnService } from './column.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ColumnSchema } from 'src/schemas/column.schema';
import { CardModule } from 'src/card/card.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'column', schema: ColumnSchema }]),
    CardModule
  ],
  controllers: [ColumnController],
  providers: [ColumnService],
})
export class ColumnModule {}
