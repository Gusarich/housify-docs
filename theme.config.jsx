export default {
    logo: <b>Housify Docs</b>,
    project: {
        link: 'https://github.com/Gusarich/housify-docs',
    },
    darkMode: true,
    nextThemes: {
        defaultTheme: 'dark',
    },
    sidebar: {
        autoCollapse: true,
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
    },
    footer: {
        text: 'Made with ❤️ by Gusarich',
    },
    docsRepositoryBase: 'https://github.com/Gusarich/housify-docs/edit/main/',
    useNextSeoProps() {
        return {
            titleTemplate: '%s – Housify',
        };
    },
};