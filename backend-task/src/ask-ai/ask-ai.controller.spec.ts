import { Test, TestingModule } from '@nestjs/testing';
import { AskAiController } from './ask-ai.controller';

describe('AskAiController', () => {
  let controller: AskAiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AskAiController],
    }).compile();

    controller = module.get<AskAiController>(AskAiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
