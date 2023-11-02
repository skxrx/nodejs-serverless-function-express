import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log(req);
  if (req.headers["stripe-signature"]) {
    const event = req.body;
    if (event.type === "checkout.session.completed")
      // Init
      console.log("INIT");

    const userId = event.data.object.client_reference_id; // Идентификатор пользователя из вебхука
    console.log(userId);

    // Ставим челу кастомер айди и даём кредитики*k

    return res.status(200).json({ received: true });
  } else {
    return res.status(400).json({ error: "Invalid request" });
  }
}
