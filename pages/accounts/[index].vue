<template>
    <div>
        <h1>Accounts</h1>
        <ul>
            <li v-for="account in accounts" :key="account.id">
                {{ account.bankName }} - {{ account.no }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';

const accounts = ref([]);

onMounted(async () => {
    accounts.value = await $fetch('/api/accounts');
});
</script>

<style scoped>

</style>