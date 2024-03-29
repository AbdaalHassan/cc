import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from 'src/schemas/card.schema';
import { CardDto } from 'src/dto/card.dto';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  async createCard(
    @Body()
    card: CardDto,
  ): Promise<Card> {
    return this.cardService.createCard(card);
  }

  @Get('column/:columnId')
  async getCardsByColumnId(
    @Param('columnId') columnId: string,
  ): Promise<Card[]> {
    return this.cardService.findCardsByColumnId(columnId);
  }

  @Put(':id')
  async updateCardById(
    @Param('id') id: string,
    @Body() updateCardDto: CardDto,
  ): Promise<Card> {
    return this.cardService.updateCardById(id, updateCardDto);
  }
}
