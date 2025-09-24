import { NextResponse } from 'next/server';
import { translateText } from '../../lib/translate';

export async function POST(req) {
  try {
    const { text, targetLanguage } = await req.json();

    if (!text || !targetLanguage) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const translatedText = await translateText(text, targetLanguage);
    return NextResponse.json({ translatedText });
  } catch (error) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}