import { prisma } from '~/server/prisma';

export default defineEventHandler(async (event: any) => {
    try {
        return await prisma.transaction.findMany();
    } catch (error : any) {
        console.error({ error: "Error fetching transactions" });
        console.error(error.message);
        return [];
    }
});
