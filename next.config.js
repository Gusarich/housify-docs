import nextra from 'nextra';
import fs from 'fs';
import { getHighlighter, BUNDLED_LANGUAGES } from 'shiki';

const housify = JSON.parse(
    fs.readFileSync('./grammars/housify.tmLanguage.json'),
    'utf8',
);

const rehypePrettyCodeOptions = {
    getHighlighter: (options) =>
        getHighlighter({
            ...options,
            langs: [
                ...BUNDLED_LANGUAGES,
                {
                    id: 'Housify',
                    scopeName: 'source.hsf',
                    grammar: housify,
                    aliases: ['hsf', 'housify'],
                },
            ],
        }),
};

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    latex: true,
    defaultShowCopyCode: true,
    mdxOptions: {
        rehypePrettyCodeOptions,
    },
});

export default withNextra({
    output: 'export',
    images: {
        unoptimized: true,
    },
});
