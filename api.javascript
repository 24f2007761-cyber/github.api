const url = "https://github.com/24f2007761-cyber/github.api";
const AI_PIPE_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IjI0ZjIwMDc3NjFAZHMuc3R1ZHkuaWl0bS5hYy5pbiJ9.wx-gD2lMqQmICsBF8sy_BXuXJs-5bhC2Zu_cRnVIkig"; // Replace with your GitHub token

async function getRepoCreationDate() {
  const headers = {
    'Accept': 'application/vnd.github+json',
    'Authorization': `Bearer ${AI_PIPE_TOKEN}`
  };

  const res = await fetch(url, { headers });

  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(`GitHub API error ${res.status}: ${text}`);
  }

  const payload = await res.json();
  return payload.created_at;
}

getRepoCreationDate()
  .then(console.log)
  .catch(console.error);
