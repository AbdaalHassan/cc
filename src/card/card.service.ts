import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CardDto } from 'src/dto/card.dto';
import { Card, CardDocument } from 'src/schemas/card.schema';

@Injectable()
export class CardService {
  constructor(
    @InjectModel('card')
    private cardModal: mongoose.Model<CardDocument>,
  ) {}

  async createCard(card: Card): Promise<Card> {
    const newcard = await this.cardModal.create(card);
    return newcard;
  }

  async findCardsByColumnId(columnId: string): Promise<Card[]> {
    return this.cardModal.find({ column_id: columnId });
  }

  async deleteCardsByColumnId(columnId: string): Promise<void> {
    await this.cardModal.deleteMany({ column_id: columnId });
  }

  async updateCardById(id: string, updateCardDto: CardDto): Promise<Card> {
    const updatedCard = await this.cardModal.findByIdAndUpdate(
      id,
      updateCardDto,
      { new: true },
    );
    return updatedCard;
  }
}
