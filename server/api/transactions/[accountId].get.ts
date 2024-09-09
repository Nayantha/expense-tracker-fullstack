import { prisma } from '~/server/prisma';

export default defineEventHandler(async (event: any) => {
    const accountId: Number = Number(getRouterParam(event, 'accountId'));
    try {
        return await prisma.transaction.findMany({
            where: {
                accountId: accountId
            },
        });
    } catch (error: any) {
        console.error({ error: "Error fetching transactions" });
        console.error(error.message);
        return [];
    }
});
