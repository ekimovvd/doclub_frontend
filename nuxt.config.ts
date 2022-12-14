export default defineNuxtConfig({
    css: ["@/assets/fonts/fonts.css", "@/assets/styles/styles.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData:
                        '@import "@/assets/styles/variables.scss"; @import "@/assets/styles/mixins.scss";',
                },
            },
        },
    },
});
