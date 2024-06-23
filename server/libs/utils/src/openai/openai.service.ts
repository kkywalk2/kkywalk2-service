import { Injectable } from '@nestjs/common';
import OpenAI from "openai";

@Injectable()
export class OpenAIService {

    openai = new OpenAI({
        apiKey: process.env.OPEN_AI_API_KEY,
    });

    async getChatCompletions(text: string): Promise<string> {
        const completion = await this.openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful assistant that summarizes web pages." },
                { role: "user", content: `${text}` }
            ],
            max_tokens: 300,
            temperature: 0.7,
        });

        return completion.choices[0].message.content;
    }
}
