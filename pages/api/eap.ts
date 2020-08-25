import { NowRequest, NowResponse } from "@vercel/node";
import { Client } from "@hubspot/api-client";

const handler = async (req: NowRequest, res: NowResponse) => {
  fetch(
    "https://hooks.slack.com/services/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",
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ text: `New contact! ${req.body.email}` }),
    }
  );

  const hubspotClient = new Client({
    apiKey: process.env.HUBSPOT_API_KEY,
  });

  await hubspotClient.crm.contacts.basicApi.create({
    properties: {
      email: req.body.email,
    },
  });

  res.json({ success: true });
};

export default handler;
