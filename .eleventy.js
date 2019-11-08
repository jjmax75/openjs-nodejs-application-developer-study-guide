module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addLayoutAlias("default", "default.njk");
  return {
    passthroughFileCopy: true
  };
};
