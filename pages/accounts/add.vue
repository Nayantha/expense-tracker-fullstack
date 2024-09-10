<template>
    <div>
        <form @submit.prevent="createAccount">
            <input v-model="accountNumber" placeholder="Account Number" />
            <input v-model="bankName" placeholder="Bank Name" />
            <input v-model="accountType" placeholder="Account Type" />
            <input v-model="interestRate" placeholder="Interest Rate" type="number" />
            <button type="submit">Create Account</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { AccountType } from "~/models/AccountType";

const accountNumber = ref<string>('');
const bankName = ref<string>('');
const accountType = ref<AccountType>(AccountType.Savings);
const interestRate = ref<number>(0);

async function createAccount() {
    await $fetch('/api/accounts', {
        method: 'POST',
        body: {
            no: accountNumber.value,
            bankName: bankName.value,
            accountType: accountType.value,
            interestRate: interestRate.value,
        },
    });
}
</script>