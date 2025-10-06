import { getProfile } from "https://aipipe.org/aipipe.js";

const { token, email } = getProfile();
if (!token) window.location = `https://aipipe.org/login?redirect=${window.location.href}`;

const response = await fetch("https://aipipe.org/openrouter/v1/chat/completions", {
  method: "POST",
  headers: { Authorization: `Bearer ${eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IjI0ZjIwMDc3NjFAZHMuc3R1ZHkuaWl0bS5hYy5pbiJ9.wx-gD2lMqQmICsBF8sy_BXuXJs-5bhC2Zu_cRnVIkig}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    "model": "openai/gpt-4.1-nano",
    "messages": [{ "role": "user", "content": "What is 2 + 2?" }]
  })
}).then(r => r.json());
