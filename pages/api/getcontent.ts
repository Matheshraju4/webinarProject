import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const host = req.headers.host;
  res.status(200).json({ host });
}
