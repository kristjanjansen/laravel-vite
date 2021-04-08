import "vite/dynamic-import-polyfill";

import { createApp, h, defineAsyncComponent } from "vue";
import { App, plugin } from "@inertiajs/inertia-vue3";

import "../css/app.css";

const components = import.meta.glob("./components/**/*.vue");

const el = document.getElementById("app");

const app = createApp({
    render: () =>
        h(App, {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: async (name) => {
                const page = (await import(`./pages/${name}.vue`)).default;
                page.layout = (
                    await import(`./layouts/${page.layoutName || "Main"}.vue`)
                ).default;
                return page;
            },
        }),
});

Object.entries(components).forEach(([path, component]) => {
    const name = path.split("/").slice(-1)[0].replace(".vue", "");
    app.component(name, defineAsyncComponent(component));
});

app.use(plugin);
app.mount(el);
