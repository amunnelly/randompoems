const socialImages = require("@11tyrocks/eleventy-plugin-social-images");

module.exports = function (eleventyConfig) {

    function sortByPubDate(values) {
        let vals = values;
        return vals.sort((a, b) => {a.data.published - b.data.published});
    }

    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css/");

    eleventyConfig.addPassthroughCopy("./src/fav");

    eleventyConfig.addFilter("sortByPubDate", sortByPubDate);

    eleventyConfig.addFilter("getRandom", function (items) {
        let indexer = Math.floor(Math.random() * items.length);
        let selected = items[indexer];
        delete indexer; // the random numbers were being cached; this should stop that.
        return selected;
    });

    eleventyConfig.addPlugin(socialImages);


    return {
        dir: {
            input: "src",
            output: "docs"
        }
    };
};