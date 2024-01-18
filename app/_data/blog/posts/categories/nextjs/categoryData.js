// import posts to add to posts variable
// import { post as webRelatedTerms } from "./posts/web-development/posts/web-related-terms";

// all posts from career category
// add new posts to start of array
const posts = [];

// all posts with ascending id order
export const categoryData = [];

// set id of each post in ascending order
for (const key in posts) {
  const obj = {
    ...posts[key],
    id: Number(key),
  };

  categoryData.push(obj);
}
