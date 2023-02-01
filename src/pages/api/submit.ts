// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from 'next';
import { Webhook, MessageBuilder } from 'discord-webhook-node';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!req.body) {
        return res.status(400).json({ error: 'Invalid body.' })
    }

    const { name, email, message } = req.body;
    const ip = req.headers["x-real-ip"] || req.socket.remoteAddress;
    const hook = new Webhook(process.env.WEBHOOK)

    const Embed = new MessageBuilder()
        .setTitle('New Contact Submission')
        .setDescription(`This was submitted by ||${ip}||.`)
        .addField('Name', "```" + name + "```")
        .addField('Email', "```" + email + "```")
        .addField('Message', "```" + message + "```")
        .setColor("#2f3136");

    hook.setUsername('Website')
    hook.send(Embed)

    return res.status(200).json({ message: 'OK' })
} catch (err: any) {
    console.log(err)
    return res.status(500).json({ error: err })
}
}
