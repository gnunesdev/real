"use server";

import { db } from "~/config/prisma";
import { FormSchema } from ".";

export const createTransaction = async (transaction: FormSchema) => {
  return await db.transactions.create({
    data: {
      description: transaction.description,
      category: {
        connect: { id: Number(transaction.category) },
      },
      type: transaction.type,
      value: transaction.value,
    },
  });
};
