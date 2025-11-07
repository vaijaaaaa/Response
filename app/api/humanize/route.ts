import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: NextRequest) {
    try {
        const { text, tone, apiKey } = await request.json();

        if (!text || typeof text !== 'string') {
            return NextResponse.json(
                { error: 'Text is required' },
                { status: 400 }
            );
        }

        if (text.length > 5000) {
            return NextResponse.json(
                { error: 'Text exceeds 5,000 character limit' },
                { status: 400 }
            );
        }

        if (!tone || !['casual', 'professional', 'friendly'].includes(tone)) {
            return NextResponse.json(
                { error: 'Invalid tone. Must be casual, professional, or friendly' },
                { status: 400 }
            )
        }

        const userApiKey = apiKey || process.env.GEMINI_API_KEY;
        if (!userApiKey) {
            return NextResponse.json(
                { error: 'API key not configured. Please add your API key in settings.' },
                { status: 400 }
            );
        }

        const genAI = new GoogleGenerativeAI(userApiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

        const tonePrompts = {
            casual: `Rewrite the following AI-generated text to sound natural, casual, and conversational. Remove any robotic patterns, make it relaxed and friendly like a real person talking. Don't be overly formal. Add casual language and natural flow:
        ${text}`,
            professional: `Rewrite the following AI-generated text to sound natural yet professional and polished. Remove robotic AI patterns while maintaining a formal, business-appropriate tone. Make it sound like it was written by an experienced professional:
        ${text}`,
            friendly: `Rewrite the following AI-generated text to sound warm, approachable, and friendly. Remove AI-like patterns and make it conversational yet polite. Add a human touch with natural warmth:
        ${text}`
        };

        const prompt = tonePrompts[tone as keyof typeof tonePrompts];
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const humanizedText = response.text();

        return NextResponse.json({
            success: true,
            humanizedText,
            originalLength: text.length,
            humanizedLength: humanizedText.length,
            tone
        });

    } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        console.error('Error in humanize API:', message);

        return NextResponse.json(
            {
                error: 'Failed to humanize text',
                details: message
            },
            { status: 500 }
        );
    }
}