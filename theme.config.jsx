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
    head: () => (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta name="description" content="Housify Documentation" />
            <meta name="og:title" content="Housify Documentation" />
            <meta name="og:description" content="Housify Documentation" />
            <meta name="apple-mobile-web-app-title" content="Housify" />
            <script
                lang="javascript"
                dangerouslySetInnerHTML={{
                    __html: `if (!window.localStorage.getItem("theme_default")) {
                window.localStorage.setItem("theme", "dark");
                window.localStorage.setItem("theme_default", "dark");
                document.documentElement.classList.add("dark");
                document.documentElement.classList.remove("light");
              }`,
                }}
            />
            ;
        </>
    ),
};
