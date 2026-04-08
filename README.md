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
- If `OPENAI_API_KEY` is not set, the chatbot still works in rule-based mode against the public site knowledge, so launch is not blocked by model access.
- You can override the default model with `OPENAI_MODEL`.
- In local development without email delivery configured, lead captures are appended to `content/leads/chatbot-leads.ndjson`.
- In production, lead captures must be delivered through Resend by setting `RESEND_API_KEY` and `CHATBOT_LEAD_FROM_EMAIL`. `CHATBOT_LEAD_TO_EMAIL` is optional and defaults to `contact@dataverseindonesia.com`.

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
RESEND_API_KEY=re_your_resend_api_key
CHATBOT_LEAD_FROM_EMAIL="GDI Chatbot <leads@yourdomain.com>"
CHATBOT_LEAD_TO_EMAIL=contact@dataverseindonesia.com
```

For public deployment, configure the same lead-delivery variables in Vercel. Production builds now fail lead submission if the Resend handoff is not configured, rather than silently writing to the ephemeral deployment filesystem.

## Launch Verification

Before a production deployment, verify:

1. `OPENAI_API_KEY` is set if you want model-backed replies. If it is absent or temporarily failing, the widget should still answer from local site knowledge.
2. `RESEND_API_KEY` and `CHATBOT_LEAD_FROM_EMAIL` are set in the deployment environment so lead capture does not fail in production.
3. `CHATBOT_LEAD_TO_EMAIL` is set if the inbox should differ from `contact@dataverseindonesia.com`.
4. `npm run lint` and `npm run build` both pass on the release candidate.

Manual smoke test after deploy:

1. Ask a general company question such as `What does GDI build?` and confirm the widget replies successfully.
2. Disable `OPENAI_API_KEY` in a preview or local environment and confirm the same question still gets a local knowledge reply.
3. Submit a complete project brief and confirm the success message includes a lead ID.
4. Verify the lead reaches the configured Resend inbox, or in local development verify that it is appended to `content/leads/chatbot-leads.ndjson`.
