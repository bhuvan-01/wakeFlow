export default function handler(req, res) {
  if (req.method === 'GET') {
    res.json({
      name: "extractEmailsBhuvan",
      description: "Extract all email addresses from a given string",
      input: {
        type: "string",
        description: "Text input that may contain one or more email addresses",
        example: "Contact us at support@example.com or hello@bhuvan.io"
      },
      output: {
        type: "array",
        description: "List of all email addresses found in the text",
        example: ["support@example.com", "hello@bhuvan.io"]
      }
    });
  } else if (req.method === 'POST') {
    const { input } = req.body;

    if (!input || typeof input !== 'string') {
      return res.status(400).json({ error: "Missing or invalid 'input'" });
    }

    // Basic email regex
    const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
    const matches = input.match(emailRegex) || [];

    res.json({ output: matches });
  } else {
    res.status(405).end();
  }
}
