<template>
    <div>
        <form @submit.prevent="createTransaction">
            <input v-model="accountId" placeholder="Account ID" />
            <input v-model="amount" placeholder="Amount" type="number" />
            <input v-model="type" placeholder="Type (deposit/withdrawal)" />
            <input v-model="note" placeholder="Note" />
            <button type="submit">Create Transaction</button>
        </form>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const accountId = ref('');
const amount = ref(0);
const type = ref('');
const note = ref('');

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