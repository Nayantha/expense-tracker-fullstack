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

<script setup>
import {ref} from 'vue';

const accountNumber = ref('');
const bankName = ref('');
const accountType = ref('');
const interestRate = ref(0);

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