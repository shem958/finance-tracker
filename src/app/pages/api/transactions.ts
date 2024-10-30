// Create an API route for transactions

import {prisma} from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
      if(req.method === 'GET') {
        const transactions = await prisma.transaction.findMany();
        return res.json(transactions);
      } else if (req.method === 'POST') {
        const {amount, category, type, userId} = req.body;
        const transaction = await prisma.transaction.create({
          data: {
            amount,
            category,
            type,
            userId,
            },
            });
            res.json(transaction);
          }else {
            res.status(405).end();
          }
}