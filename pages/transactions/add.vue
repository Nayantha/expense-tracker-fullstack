<template>
    <div>
        <form @submit.prevent="createTransaction">
            <input v-model="accountId" placeholder="Account ID" />
            <input v-model="amount" placeholder="Amount" type="number" />
            <input v-model="type" placeholder="Type" />
            <input v-model="note" placeholder="Note" />
            <button type="submit">Create Transaction</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { AccountType } from "~/models/AccountType";


const accountId = ref<string>("");
const amount = ref<Number>(0.0);
const type = ref<AccountType>(AccountType.Savings);
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