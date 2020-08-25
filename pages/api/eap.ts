import { NowRequest, NowResponse } from "@vercel/node";
import { Client } from "@hubspot/api-client";

const hubspotClient = new Client({
  apiKey: process.env.HUBSPOT_API_KEY,
});

const handler = async (req: NowRequest, res: NowResponse) => {
  await hubspotClient.crm.contacts.basicApi.create({
    properties: {
      email: req.body.email,
    },
  });

  res.json({ success: true });
};

export default handler;
