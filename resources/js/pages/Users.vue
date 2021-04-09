<script setup>
import { usePage } from "@inertiajs/inertia-vue3";
const { props } = usePage();
</script>

<template>
    <div class="space-y-4">
        <h1 class="text-6xl">Users</h1>
        <p>
            This is Vue page component
            <code class="text-purple-400">/resources/js/pages/User.vue</code>
            and it is using default
            <a
                class="underline"
                href="https://inertiajs.com/pages#persistent-layouts"
                >persistent</a
            >
            layout
            <code class="text-purple-400">/resources/js/layouts/Main.vue</code>
        </p>
        <p>
            The users data is passed to the page as
            <code class="text-purple-400">props.users</code> via Inertia and
            rendered as
            <code class="text-purple-400">
                /resources/js/components/User.vue</code
            >
        </p>
        <div class="grid grid-cols-3 gap-4">
            <user v-for="(user, i) in props.users" :key="i" :user="user" />
        </div>
    </div>
</template>
