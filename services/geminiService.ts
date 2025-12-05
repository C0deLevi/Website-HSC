import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// System instruction to ensure the AI acts as a corporate representative
const SYSTEM_INSTRUCTION = `
You are the "Lumina Group Corporate Assistant". You represent a high-end, luxury automotive group similar to BMW.
Your tone is professional, precise, innovative, and courteous.
You answer questions about:
1. Lumina's Sustainability Goals (Carbon neutral by 2035, Circular economy).
2. The new vehicle lineup (Lumina iX5, Lumina GT).
3. Corporate financial health (Record Q3 growth).
4. Innovation (Autonomous driving level 4, AI integration).

Keep answers concise (under 3 sentences) and elegant. Do not use emojis.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "I am currently in demonstration mode and cannot connect to the network. Please configure the API Key.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // We use a simple generateContent here for a single-turn Q&A style, 
    // or we could use chat if we wanted history. For this UI, single turn is fine 
    // but let's use chat to simulate a conversation if needed, 
    // simplified here to generateContent for robustness.
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I could not process that request at this moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am experiencing a temporary connection issue. Please try again later.";
  }
};
