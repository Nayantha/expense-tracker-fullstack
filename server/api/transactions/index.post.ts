import {prisma} from '~/server/prisma';

export default defineEventHandler(async (event: any) => {
    const body = await readBody(event);

    return prisma.transaction.create({
        data: {
            accountId: body.accountId,
            amount: body.amount,
            type: body.type,
            note: body.note,
        },
    });
});
