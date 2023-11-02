import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  console.log(req, res);
  const { name = "World" } = req.query;
  return res.json({
    message: `Hello ${name}!`,
  });
}
