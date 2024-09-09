import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

// Helper function to generate random amounts for transactions
function randomAmount(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// Helper function to generate a random transaction type
function randomTransactionType() {
    return Math.random() > 0.5 ? 'deposit' : 'withdrawal';
}

// Helper function to generate random transaction notes
function randomNote(type) {
    return type === 'deposit' ? 'Deposit to account' : 'Withdrawal from account';
}

async function main() {
    // Create test double accounts
    const accounts = [
        {
            no: '12345678',
            bankName: 'Bank A',
            accountType: 'Savings',
            interestRate: 2,
            amount: 500,
        },
        {
            no: '87654321',
            bankName: 'Bank B',
            accountType: 'Checking',
            interestRate: 0,
            amount: 0,
        },
    ];

    // Insert accounts and generate 50 transactions per account
    for (let accountData of accounts) {
        const account = await prisma.account.create({
            data: {
                ...accountData,
                transactions: {
                    create: Array.from({ length: 50 }).map(() => {
                        const type = randomTransactionType();
                        const amount =
                            type === 'deposit' ? randomAmount(100, 5000) : -randomAmount(10, 1000);
                        return {
                            amount,
                            type,
                            note: randomNote(type),
                        };
                    }),
                },
            },
        });

        console.log(`Created account with ID: ${account.id} and 50 transactions.`);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
