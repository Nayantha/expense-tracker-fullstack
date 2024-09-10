import type { Account } from "Account";

export type Transaction = {
    id: number;
    accountId: number;
    amount: string;
    type: string;
    createdAt: Date;
    note: string;
    account?: Account;
};