export default function handler(req, res) {
  if (req.method === 'GET') {
    res.json({
      name: "base64Encode",
      description: "Encode anything to base64",
      input: {
        type: "string",
        description: "Input the data you'd like to encode to base64",
        example: "Hello, world"
      },
      output: {
        type: "string",
        description: "Base64 encoded string",
        example: "SGVsbG8sIHdvcmxk"
      }
    });
  } else if (req.method === 'POST') {
    const { input } = req.body;
    if (!input || typeof input !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid input' });
    }
    const output = Buffer.from(input).toString('base64');
    res.json({ output });
  } else {
    res.status(405).end();
  }
}
