import * as prettier from "prettier";

export default async function (eleventyConfig) {
    eleventyConfig.setInputDirectory("./");
    eleventyConfig.setOutputDirectory("./docs/");
    eleventyConfig.setIncludesDirectory("./include");
    eleventyConfig.setLayoutsDirectory("./layout");
    eleventyConfig.setWatchThrottleWaitTime(250);
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
    eleventyConfig.addTransform("prettier", function (content) {
        if ((this.page.outputPath || "").endsWith(".html")) {
            let prettified = prettier.format(content, {
                bracketSameLine: true,
                printWidth: 512,
                parser: "html",
                useTabs: true
            });
            return prettified;
        }
        return content;
    });
};
