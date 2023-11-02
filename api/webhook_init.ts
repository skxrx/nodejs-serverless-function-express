import type { VercelRequest, VercelResponse } from "@vercel/node";
const stripe = require("stripe")(
  "sk_test_51O3CkiFppZAhutos91DyGwtaEQbMfcakVF2d1IQYdNVJS9xB5UkGf2t9mZbWNPugJnCzf21bakmz92BZrjcDHk1T00HaWSV0bY"
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log(req);
  if (req.headers["stripe-signature"]) {
    const event = req.body;
    if (event.type === "checkout.session.completed") {
      // Init
      console.log("INIT");

      //ищем такого юзерайди в юзерах юзера с customer_id => НЕ НАХОДИМ
      //ставим чуваку с user.id === userId ставим customer_id

      const userId = event.data.object.client_reference_id; // Идентификатор пользователя из вебхука
      const customer = event.data.object.customer;

      const invoiceId = event.data.object.invoice;
      const invoice = await stripe.invoices.retrieve(invoiceId);
      const product = invoice.lines.data[0].plan.product;

      console.log(userId, customer, invoice, product);

      // Ставим челу кастомер айди и даём кредитики*k
    }

    return res.status(200).json({ received: true });
  } else {
    return res.status(400).json({ error: "Invalid request" });
  }
}
