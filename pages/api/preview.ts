import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  if (req.query.cancel) {
    res.clearPreviewData();
    res.end("Preview mode disabled");
  } else {
    res.setPreviewData({});
    res.end("Preview mode enabled");
  }
};

export default handler;
