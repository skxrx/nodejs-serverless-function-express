import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log(req);
  if (req.headers["stripe-signature"]) {
    const event = req.body; // Входящее событие от Stripe
    const userId = event.data.object.customer; // Идентификатор пользователя из вебхука

    console.log(event, userId);

    // Выполните необходимые манипуляции с пользователем, используя userId

    return res.status(200).json({ received: true });
  } else {
    return res.status(400).json({ error: "Invalid request" });
  }
}
