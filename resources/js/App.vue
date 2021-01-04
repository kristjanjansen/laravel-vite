<template>
    <h2>Hello from VueJS</h2>
    <p>Got users data from API route <code>/api/users</code></p>
    <p v-for="user in usersFromApi">Name: {{ user.name }}</p>
</template>

<script setup>
// Using the experimental setup syntax:
// https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md

import { ref, defineProps } from "vue";

const props = defineProps(["usersFromProps"]);

const usersFromApi = ref([]);

fetch("./api/users")
    .then((res) => res.json())
    .then((res) => (usersFromApi.value = res));
</script>
