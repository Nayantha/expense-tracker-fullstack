import {prisma} from '~/server/prisma';

export default defineEventHandler(async (event: any) => {
    const body = await readBody(event);

    return prisma.account.create({
        data: {
            no: body.no,
            bankName: body.bankName,
            accountType: body.accountType,
            interrestRate: body.interrestRate,
        },
    });
});
