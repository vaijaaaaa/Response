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
        casual: `
        Make this sound like a real person talking — relaxed, easygoing, and natural. 
        No stiff structure, no formal vibe, just everyday language with smooth flow. 
        Keep it light, confident, and effortless to read. 

        ${text}
        `,

        professional: `
        Give this a natural, polished tone that feels confident and human. 
        Keep it clear and composed, like something written by an experienced professional. 
        No robotic phrasing — just smooth and thoughtful writing. 

        ${text}
        `,

        friendly: `
        Make this feel warm, kind, and approachable — like a person who genuinely cares. 
        Keep it conversational and light with a gentle, human rhythm. 
        Avoid stiff or overly perfect sentences, just easy flow. 

        ${text}
        `
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