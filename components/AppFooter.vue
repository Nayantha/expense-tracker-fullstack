<template>
    <UDivider icon="i-simple-icons-github" />
    <UCard>
        <template #footer>
            <div class="content">
                <UCard>
                    <a href="/about">About</a>
                    <br>
                    <a href="/">Home</a>
                </UCard>
                <div class="socials">
                    <a href="https://github.com/Nayantha"><UIcon class="w-5 h-5 text-primary-500" name="i-mdi-linkedin"/></a>
                    <a href="https://www.linkedin.com/in/nayantha-yasiru"><UIcon class="w-5 h-5 text-primary-500" name="i-mdi-github"/></a>
                </div>
            </div>
            <div class="copyright-text">
                &copy; 2024 Nayantha Koralegama
            </div>
        </template>
    </UCard>
</template>
<style scoped>
    .content {
        display: flex;
        justify-content: space-around;
    }
    .socials {
        width: 150px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .copyright-text {
        display: flex;
        justify-content: center;
    }
</style>
<script lang="ts" setup>
</script>