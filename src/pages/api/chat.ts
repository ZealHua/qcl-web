// /pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { text } = req.body;

    // Process the text received from the request here, e.g. send it to an AI model and receive a response.

    // This is just an example response
    const exampleResponse = `You said: ${text}`;

    res.status(200).json({ message: exampleResponse });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
