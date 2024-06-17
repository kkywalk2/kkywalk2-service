import { Injectable } from '@nestjs/common';
import OpenAI from "openai";

@Injectable()
export class OpenAIService {

    openai = new OpenAI();

    async getChatCompletions() {
        const completion = await this.openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }],
            model: "gpt-3.5-turbo",
        });
    }
}
