<template>
    <h2>Hello from VueJS</h2>
    <p>Got data from API route <code>/api/data</code></p>
    <p v-for="row in data">Name: {{ row.name }}</p>
</template>

<script setup>
// Using the experimental syntaxes:
// https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
// https://github.com/vuejs/rfcs/blob/ref-sugar/active-rfcs/0000-ref-sugar.md

ref: data = [];

fetch("./api/data")
    .then((res) => res.json())
    .then((res) => (data = res));
</script>
