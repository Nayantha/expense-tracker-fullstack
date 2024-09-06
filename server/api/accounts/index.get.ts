import {prisma} from '~/server/prisma';


// @ts-ignore
export default defineEventHandler(async (event) => {
    return prisma.account.findMany({
        include: {
            transactions: true,
        },
    });
});
