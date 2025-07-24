# AI Proxy

This is a simple proxy for AI services.

## Sponsorship

This project is sponsored by [ChatWise](https://chatwise.app), the fastest AI chatbot that works for any LLM.

## Usage

Replace your API domain with the domain of the proxy deployed on your server. For example:

- Gemini:
  - from `https://generativelanguage.googleapis.com/v1beta` 
  - to`https://your-proxy/generativelanguage/v1beta`
- OpenAI:
  - from `https://api.openai.com/v1`
  - to `https://your-proxy/openai/v1`
- Anthropic:
  - from `https://api.anthropic.com/v1`
  - to `https://your-proxy/anthropic/v1`
- Groq:
  - from `https://api.groq.com/openai/v1`
  - to `https://your-proxy/groq/openai/v1`
- Perplexity:
  - from `https://api.perplexity.ai`
  - to `https://your-proxy/pplx`
- Mistral:
  - from `https://api.mistral.ai`
  - to `https://your-proxy/mistral`
- OpenRouter:
  - from `https://openrouter.ai/api`
  - to `https://your-proxy/openrouter`
- xAI:
  - from `https://api.xai.ai`
  - to `https://your-proxy/xai`
- Cerebras:
  - from `https://api.cerebras.ai`
  - to `https://your-proxy/cerebras`
 
## Hosted by ChatWise

Use the hosted API, for example OpenAI `https://ai-proxy.chatwise.app/openai/v1`

## Deployment

Deploy this as a Docker container, check out [Dockerfile](./Dockerfile).

## License

MIT.
