
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual de vendas da "Casa Home Atacado", um atacadista líder em utilidades domésticas e produtos para casa no Brasil.
Seu objetivo é ajudar potenciais clientes (lojistas e revendedores) com dúvidas sobre:
1. Pedido Mínimo: R$ 1.500,00 para primeira compra.
2. Frete: Grátis para capitais do Sudeste em pedidos acima de R$ 3.000,00.
3. Prazo de entrega: Despacho em 24h úteis.
4. Categorias: Cozinha, Cama/Mesa/Banho, Decoração, Fitness e Organização.
5. Pagamento: Pix (5% desconto), Boleto Faturado (análise de crédito) e Cartão em até 6x.
6. Cadastro: Exclusivo para CNPJ ativo.

Seja profissional, dinâmico e focado em fechar negócio. Incentive o cliente a preencher o formulário ou chamar no WhatsApp oficial.
Responda sempre em Português do Brasil de forma clara e objetiva.
`;

export const getGeminiResponse = async (userPrompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Desculpe, tive um problema ao processar sua solicitação. Por favor, tente novamente.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "No momento estou offline, mas você pode nos chamar no WhatsApp da Casa Home Atacado!";
  }
};
