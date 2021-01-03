import vue from "@vitejs/plugin-vue";

/**
 * @type {import('vite').UserConfig}
 */
export default {
    root: process.cwd() + "/resources/js",
    plugins: [vue()],
    build: {
        manifest: true,
        outDir: "../../public/dist",
    },
};
