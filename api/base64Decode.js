export default function handler(req, res) {
  if (req.method === 'GET') {
    res.json({
      name: "base64DecodeBhuvan",
      description: "Decode a base64 encoded string",
      input: {
        type: "string",
        description: "Base64 encoded string to decode",
        example: "SGVsbG8sIHdvcmxk"
      },
      output: {
        type: "string",
        description: "Decoded string",
        example: "Hello, world"
      }
    });
  } else if (req.method === 'POST') {
    const { input } = req.body;
    if (!input || typeof input !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid input' });
    }
    try {
      const output = Buffer.from(input, 'base64').toString('utf-8');
      res.json({ output });
    } catch (e) {
      res.status(400).json({ error: 'Invalid base64 input' });
    }
  } else {
    res.status(405).end();
  }
}
