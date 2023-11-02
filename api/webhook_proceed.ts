import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log(req);
  if (req.headers["stripe-signature"]) {
    const event = req.body;
    if (event.type === "invoice.paid")
      // Init
      console.log("PROCEED");

    // Ищем кастомера и делаем кредитики = кредитики - кредитики + кредитики*k

    return res.status(200).json({ received: true });
  } else {
    return res.status(400).json({ error: "Invalid request" });
  }
}
