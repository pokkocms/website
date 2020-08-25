import { NowRequest, NowResponse } from "@vercel/node";
import { Client } from "@hubspot/api-client";

const handler = async (req: NowRequest, res: NowResponse) => {
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
