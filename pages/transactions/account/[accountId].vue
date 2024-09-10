<template>
    <div>
        <h1>Transactions for Account ID: {{ route.params.accountId }}</h1>
        <ul>
            <li v-for="transaction in transactions" :key="transaction.id">
                {{ transaction.type }} - {{ transaction.amount }} - {{ transaction.note }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Transaction } from "~/models/Transaction";

const route = useRoute();
const transactions = ref<Transaction[]>([]);

onMounted(async () => {
    transactions.value = await $fetch(`/api/transactions/${route.params.accountId}`);
});
</script>


<style scoped>

</style>