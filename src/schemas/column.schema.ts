import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Column {
  @Prop()
  title: string;
}

export type ColumnDocument = Column & Document;

export const ColumnSchema = SchemaFactory.createForClass(Column);
