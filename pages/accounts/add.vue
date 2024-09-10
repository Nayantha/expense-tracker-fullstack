<template>
    <div>
        <form @submit.prevent="createAccount">
            <input v-model="no" placeholder="Account Number" />
            <input v-model="bankName" placeholder="Bank Name" />
            <input v-model="accountType" placeholder="Account Type" />
            <input v-model="interrestRate" placeholder="Interest Rate" type="number" />
            <button type="submit">Create Account</button>
        </form>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const no = ref('');
const bankName = ref('');
const accountType = ref('');
const interestRate = ref(0);

async function createAccount() {
    await $fetch('/api/accounts', {
        method: 'POST',
        body: {
            no: no.value,
            bankName: bankName.value,
            accountType: accountType.value,
            interestRate: interestRate.value,
        },
    });
}
</script>