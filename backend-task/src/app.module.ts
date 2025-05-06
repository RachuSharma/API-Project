import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AskAiController } from './ask-ai/ask-ai.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'frontend-task', 'dist', 'frontend-task'),
    }),
  ],
  controllers: [AppController, AskAiController],
  providers: [AppService],
})
export class AppModule {}
