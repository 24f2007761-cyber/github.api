import { getProfile } from "https://aipipe.org/aipipe.js";

const { token, email } = getProfile();
if (!token) window.location = `https://aipipe.org/login?redirect=${window.location.href}`;

const response = await fetch("https://aipipe.org/openrouter/v1/chat/completions", {
  method: "POST",
  headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    "model": "openai/gpt-4.1-nano",
    "messages": [{ "role": "user", "content": "What is 2 + 2?" }]
  })
}).then(r => r.json());
