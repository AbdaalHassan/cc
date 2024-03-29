import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CardModule } from './card/card.module';
import { ColumnModule } from './column/column.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cc'),
    CardModule,
    ColumnModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
