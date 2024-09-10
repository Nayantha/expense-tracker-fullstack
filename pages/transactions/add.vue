<template>
    <div>
        <form @submit.prevent="createTransaction">
            <input v-model="accountId" placeholder="Account ID" />
            <input v-model="amount" placeholder="Amount" type="number" />
            <select v-model="transactionType">
                <option v-for="(transactionType, key) in transactionTypeOptions" :key="key" :value="transactionType">
                    {{ transactionType }}
                </option>
            </select>
            <input v-model="note" placeholder="Note" />
            <button type="submit">Create Transaction</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { TransactionType } from "~/models/TransactionType";


const transactionTypeOptions = Object.values(TransactionType);
const accountId = ref<string>("");
const amount = ref<Number>(0.0);
const transactionType = ref<TransactionType>(TransactionType.Deposit);
const note = ref<string>('');

async function createTransaction() {
    await $fetch('/api/transactions', {
        method: 'POST',
        body: {
            accountId: accountId.value,
            amount: amount.value,
            type: type.value,
            note: note.value,
        },
    });
}
</script>


<style scoped>

</style>