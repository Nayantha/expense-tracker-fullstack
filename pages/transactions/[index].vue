<template>
    <div>
        <h1>Transactions for Account ID: {{ accountId }}</h1>
        <ul>
            <li v-for="transaction in transactions" :key="transaction.id">
                {{ transaction.type }} - {{ transaction.amount }} - {{ transaction.note }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';

const transactions = ref([]);

onMounted(async () => {
    transactions.value = await $fetch(`/api/transactions`, { method: "GET"});
});
</script>


<style scoped>

</style>