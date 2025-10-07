const res = await fetch(url, { headers: { 'Accept': 'application/vnd.github+json', 'Authorization': `Bearer ${AI_PIPE_TOKEN}` } });
if (!res.ok) throw new Error(`GitHub API error ${res.status}`);
const payload = await res.json();
return payload.created_at;
