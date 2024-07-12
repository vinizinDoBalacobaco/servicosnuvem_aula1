// jsgemini.js

import { GoogleGenerativeAI } from "@google/generative-ai";

// Coloque aqui a sua chave de API
const API_KEY = "AIzaSyA2IguhcKunUYQToJRvahkhLqrIU2X1Kig";

// Crie uma instância do GoogleGenerativeAI com a sua chave de API
const genAI = new GoogleGenerativeAI(API_KEY);

// Obtenha referências para os elementos do DOM
const meuInput = document.getElementById('meuInput');
const resposta = document.getElementById('resposta');

// Obtém o modelo generativo (Gemini 1.5)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function run() {
    // Obtenha o valor do input
    const userInput = meuInput.value;

    // Inicie uma conversa (chat) com o modelo
    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: userInput }],
            },
            {
                role: "model",
                parts: [{ text: "Great to meet you. What would you like to know?" }],
            },
        ],
        generationConfig: {
            maxOutputTokens: 100,
        },
    });

    // Envie a mensagem e aguarde a resposta
    const result = chat.sendMessage(userInput);
    const response = result.response;
    const text = response.text();

    // Exiba a resposta na textarea de resposta
    resposta.textContent = text;
}
run();