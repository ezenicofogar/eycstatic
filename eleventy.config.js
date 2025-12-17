export default async function(eleventyConfig) {
    eleventyConfig.setInputDirectory("./");
    eleventyConfig.setOutputDirectory("./docs/");
    eleventyConfig.setIncludesDirectory("./include");
    eleventyConfig.setLayoutsDirectory("./layout");
    eleventyConfig.setWatchThrottleWaitTime(250);
    eleventyConfig.addPassthroughCopy("static");
    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
};
