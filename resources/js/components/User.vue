<script setup>
import { defineProps } from "vue";
defineProps(["user"]);
</script>

<template>
    <h2 class="text-xl px-3 py-2 bg-purple-200 text-purple-900 shadow">
        {{ user.name }}
    </h2>
</template>
