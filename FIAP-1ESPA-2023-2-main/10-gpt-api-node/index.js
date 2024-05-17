// Parte 1 - que só faz requisição da api do chat

// import OpenAI from "openai";

// const openai = new OpenAI({
//     organization: "org-26sVfM1tr9GrmYoWVbWmxHCI",
//     apiKey: "sk-proj-xpJO4X9KdY5C9DcjQydcT3BlbkFJLZUQlJ3TGvl1QsrnaFVc",
// });

// const chatCompletion = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [{"role": "user", "content": "Quem é você?"}]
// })

// console.log(chatCompletion.choices[0].message);

// Parte 2 - Criar back-end com api local

import OpenAI from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors"

const openai = new OpenAI({
    organization: "org-26sVfM1tr9GrmYoWVbWmxHCI",
    apiKey: "sk-proj-uk0FIZLETmTu8Dgbsg0eT3BlbkFJRUp6vP14omRj38Dow3CJ",
});

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Criando endpoint para eviar mensagens para api do chatgpt
app.post("/sendMessage", async (req, res) => {
    // Dados que vêm do meu front
    const {messages} = req.body;

    // Aqui que podemos trocar pelo gemini
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            // Decifinindo como queremos que o chat seja
            {"role": "system", "content": "Você será a Camila Cabello e responderá como se fosse ela"},
            ...messages
        ]
    })
    
    console.log(chatCompletion.choices[0].message);

    // Resposta do chat que vou retornar para o meu front
    // isso só é possivél pq to fazendo via metodo post
    res.json({
        chat_completion: chatCompletion.choices[0]
    });

});

app.listen(port, () => {
    console.log(`Servidor aberto executando em http://localhost:${port}/`);
})

// Pra executar -> node nomedoarquivo