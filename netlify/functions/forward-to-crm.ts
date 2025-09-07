export const handler = async (event: any) => {
  try {
    const payload = JSON.parse(event.body || "{}");
    const data = payload?.payload?.data || {};

    const body = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      source: "Website Vernety Web / Netlify",
      submittedAt: new Date().toISOString(),
    };

    const ghl = process.env.GHL_WEBHOOK_URL;
    const fallback = process.env.FALLBACK_WEBHOOK_URL;

    const target = ghl || fallback;
    if (!target) {
      console.log("Sem webhook configurado. Dados recebidos:", body);
      return { statusCode: 200, body: "received-no-webhook" };
    }

    const res = await fetch(target, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`CRM error ${res.status}: ${text}`);
    }

    return { statusCode: 200, body: "ok" };
  } catch (e: any) {
    console.error(e);
    return { statusCode: 500, body: e.message || "error" };
  }
};
