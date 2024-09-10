import type { Transaction } from "Transaction";
import type { AccountType } from "AccountType";

export type Account = {
    id: number;
    no: string;
    bankName: string;
    accountType: AccountType;
    interestRate: number;
    amount: string;
    createdAt: Date;
    updatedAt: Date;
    transactions?: Transaction[];
};