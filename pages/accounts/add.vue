<template>
    <div>
        <UForm :schema="schema" :state="state" class="space-y-4" @submit.prevent="createAccount">
            <UFormGroup label="Account Number" required>
                <UInput v-model="accountNumber" icon="i-heroicons-envelope" placeholder="Account Number"/>
            </UFormGroup>
<!--            :error="!bankName && 'You must enter an bank name'"-->
            <UFormGroup v-slot="{ error }"
                        description="We'll only use this for spam."
                        help="We will never share your email with anyone else."
                        hint="Optional"
                        label="Bank Name" required size="xl">
                <UInput v-model="state.bankName" :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : ''" icon="i-heroicons-envelope" placeholder="Bank Name"/>
            </UFormGroup>
            <USelect v-model="accountType" :options="accountTypeOptions" placeholder="Select account type"/>
            <input v-model="interestRate" placeholder="Interest Rate" type="number" />
            <button type="submit">Create Account</button>
        </UForm>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { AccountType } from "~/models/AccountType";

import { z } from 'zod';

const schema = z.object({
    backName: z.string().min(10, 'Must be at least 10 characters')
})

const state = reactive({
    backName: undefined
})

const accountTypeOptions = Object.values(AccountType);
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