import { post as webRelatedTerms } from "@/app/_data/blog/posts/categories/web-development/posts/web-related-terms";

// all posts from career category
// add new posts to start of array
const posts = [webRelatedTerms];

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
