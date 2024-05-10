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
    apiKey: "sk-proj-xpJO4X9KdY5C9DcjQydcT3BlbkFJLZUQlJ3TGvl1QsrnaFVc",
});

const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": "Quem é você?"}]
})

console.log(chatCompletion.choices[0].message);