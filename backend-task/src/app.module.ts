import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AskAiController } from './ask-ai/ask-ai.controller';

@Module({
  imports: [],
  controllers: [AppController, AskAiController],
  providers: [AppService],
})
export class AppModule {}
