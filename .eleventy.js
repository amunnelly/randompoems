module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");

    eleventyConfig.addFilter("getRandom", function (items) {
        let indexer = Math.floor(Math.random() * items.length);
        let selected = items[indexer];
        delete indexer; // the random numbers were being cached; this should stop that.
        return selected;
    });

    return {
        dir: {
            input: "src",
            output: "docs"
        }
    };
};