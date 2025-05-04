import { Controller, Post, Body } from '@nestjs/common';

@Controller()
export class AskAiController {
  @Post('askAi')
  async handleMessage(@Body() body: { message: string }) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Received: ${body.message}`);

    return {
      reply: `✨ Great choice! Here's a creative idea for "${body.message}"`,
      receivedAt: timestamp
    };
  }
}
