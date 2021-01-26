<template>
    <h3>Hello from VueJS component <code>Users</code></h3>

    <p>Got users data from prop <code>usersFromProps</code></p>

    <pre v-for="(user, i) in usersFromProps" :key="i" @click="onClick">
Name: {{ user.name }}</pre
    >

    <p>Got users data from API route <code>/api/users</code></p>

    <pre v-for="(user, i) in usersFromApi" :key="i" @click="onClick">
Name: {{ user.name }}</pre
    >

    <slot :usersFromProps="usersFromProps" :onClick="onClick" />
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

const onClick = () => alert("clicked");
</script>
