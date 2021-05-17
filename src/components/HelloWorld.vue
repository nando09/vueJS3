<template>
  <h1>Testando Hello!</h1>
  <router-link to="/">Go to Home</router-link>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
