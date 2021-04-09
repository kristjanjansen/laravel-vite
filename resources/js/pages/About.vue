<script setup>
import { usePage } from "@inertiajs/inertia-vue3";
const { props } = usePage();
</script>

<script>
export default { layoutName: "Narrow" };
</script>

<template>
    <div class="space-y-4">
        <h1 class="text-6xl">About</h1>
        <p>
            This is Vue page component
            <code class="text-purple-400">/resources/js/pages/About.vue</code>
            and it is using alternate permanent layout
            <code class="text-purple-400">
                /resources/js/layouts/Narrow.vue
            </code>
        </p>
        <p>
            The users data is passed to the page as
            <code class="text-purple-400">props.about</code> via Inertia.
        </p>
        <br />
        <div class="text-xl" v-html="props.about" />
    </div>
</template>
