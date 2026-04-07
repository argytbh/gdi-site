# GDI Website

## Development

```bash
npm run dev
```

The app uses Next.js 16 with the App Router.

Open `http://localhost:3000` in a browser once the dev server is running.

## Chatbot MVP

- The floating chatbot widget is mounted globally from `src/app/layout.tsx`.
- Chat requests go through `src/app/api/chat/route.ts`.
- If `OPENAI_API_KEY` is set, the route attempts an OpenAI-backed reply first and falls back to the local site-knowledge responder when needed.
- You can override the default model with `OPENAI_MODEL`.
- Lead captures are appended to `content/leads/chatbot-leads.ndjson`.

## Local Testing

1. Start the app with `npm run dev`.
2. Open `http://localhost:3000`.
3. Click the `Ask GDI` button in the bottom-right corner.
4. Try a few prompts such as `What does GDI build?` or `I want to discuss a project`.

To set the API key for the current PowerShell session:

```powershell
$env:OPENAI_API_KEY="your-key-here"
$env:OPENAI_MODEL="gpt-4.1-mini"
npm run dev
```

If you want the key stored in the project instead, create a `.env.local` file with:

```bash
OPENAI_API_KEY=your-key-here
OPENAI_MODEL=gpt-4.1-mini
```
