<template>
    <div>
        <h1>Transactions for All Accounts</h1>
        <ul>
            <li v-for="transaction in transactions" :key="transaction.id">
                {{ transaction.type }} - {{ transaction.amount }} - {{ transaction.note }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { Transaction } from "~/models/Transaction";

const transactions = ref<Transaction[]>([]);

onMounted(async () => {
    transactions.value = await $fetch(`/api/transactions`, { method: "GET" });
});
</script>


<style scoped>

</style>