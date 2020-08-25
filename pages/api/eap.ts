import { NowRequest, NowResponse } from "@vercel/node";
import { Client } from "@hubspot/api-client";
import { WebClient } from "@slack/web-api";

const handler = async (req: NowRequest, res: NowResponse) => {
  const hubspotClient = new Client({
    apiKey: process.env.HUBSPOT_API_KEY,
  });

  const slackClient = new WebClient(process.env.SLACK_TOKEN);

  await hubspotClient.crm.contacts.basicApi.create({
    properties: {
      email: req.body.email,
    },
  });

  await slackClient.chat.postMessage({
    channel: "C019C13LGKE", // #sales
    text: `New contact! ${req.body.email}`,
    as_user: false,
  });

  res.json({ success: true });
};

export default handler;
