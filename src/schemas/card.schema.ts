import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Card {
  @Prop()
  column_id: string;

  @Prop()
  title: string;

  @Prop()
  description: string;
}

export type CardDocument = Card & Document;

export const CardSchema = SchemaFactory.createForClass(Card);
