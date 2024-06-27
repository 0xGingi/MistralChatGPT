# MistralChatGPT

Introducing MistralChatGPT, a fork of [BetterChatGPT](https://github.com/ztjhz/BetterChatGPT) to make it easy to use Mistral.AI models.

This is a fork of MistralChatGPT that includes newer models!

* Includes newer models (22b and Codestral) 
* Includes my attempt at using the free Codestral API (Autoswaps API Key when using free model)

**Free Codestral API Endpoint does not work yet - Kept getting CORS Error**

## Docker
```docker pull 0xgingi/mistralchatgpt:latest```

```docker run -p 3030:3030 -d --restart=always 0xgingi/mistralchatgpt```

## Getting Started

To get started with MistralChatGPT, simply follow these steps:

1. Clone the repository by running `git clone https://github.com/0xGingi/MistralChatGPT.git`
2. Install the dependencies by running `yarn` or `npm install`
3. Run the app by running `yarn dev` or `npm run dev`
4. Enter your Mistral AI API key into the `API` menu
5. Start chatting!

## Obtaining an API Key

You can obtain an API key by creating an account on the [Mistral AI website](https://mistral.ai/). Once you have created an account and have been granted access to their API, you can generate an API key from their [console](https://console.mistral.ai/api-keys/)

## Features

- Utilizes Mistral AI for its conversational capabilities
- Use any of the Mistral AI Models!
- Simple and easy-to-use interface
- Track your costs
- Runs on Vite for fast development

## Original Authors

This project was forked from BetterChatGPT, which is an amazing project created by [@ztjhz](https://github.com/ztjhz). You can find the original repository [here](https://github.com/ztjhz/BetterChatGPT), be sure to star it!
