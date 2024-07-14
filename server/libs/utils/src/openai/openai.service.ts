import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class OpenAIService {
  openai = new OpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
  });

  async summarizeWebPage(
    linkUrl: string,
  ): Promise<{ sourceUrl: string; content: any }> {
    try {
      const response = await axios.get(linkUrl);
      const html = response.data;

      const $ = cheerio.load(html);
      const text = $('body').text().replace(/\s\s+/g, ' ').trim();

      // 텍스트 요약 요청
      const aiResponse = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant that summarizes web pages.',
          },
          { role: 'user', content: `해당 text를 요약해줘: ${text}` },
        ],
        max_tokens: 300,
        temperature: 0.7,
      });

      const summary = aiResponse.choices[0].message.content;

      return {
        content: summary,
        sourceUrl: linkUrl,
      };
    } catch (error) {
      console.error('Error:', error.message);
    }
  }

  async getChatCompletions(text: string): Promise<string> {
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that summarizes web pages.',
        },
        { role: 'user', content: `${text}` },
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
  }
}
