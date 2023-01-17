<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'

onMounted(() => {
    useRouter().push('/login')
})
</script>

<template>
    <RouterView />
</template>

<style scoped></style>
