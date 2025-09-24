const API_KEY = 'AIzaSyD4jNB6ASFDNl6RBQl_DQGJCnGPwdtJ4M4'; // Replace this with your actual API key

export async function translateText(text, targetLanguage) {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      q: text,
      target: targetLanguage,
      format: 'text',
    }),
  });

  if (!response.ok) {
    throw new Error('Translation API failed');
  }

  const data = await response.json();
  return data.data.translations[0].translatedText;
}