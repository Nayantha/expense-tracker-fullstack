<template>
{{data}}
</template>
<script lang="ts" setup>
useHead({
    title: "Home Page"
})
const { data } = await useFetch("/api/account")
</script>