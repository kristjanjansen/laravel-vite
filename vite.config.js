import vue from "@vitejs/plugin-vue";

/**
 * @type {import('vite').UserConfig}
 */
export default {
    alias: {
        vue: "vue/dist/vue.esm-bundler.js",
    },
    optimizeDeps: { include: ["vue/dist/vue.esm-bundler.js"] },
    root: process.cwd() + "/resources/js",
    plugins: [vue()],
    build: {
        manifest: true,
        outDir: "../../public/dist",
    },
};
