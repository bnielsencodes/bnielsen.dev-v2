import { post as webRelatedTerms } from "@/app/_data/blog/posts/categories/web-development/posts/web-related-terms";

// contains all posts in chronological order
// add new posts to start of array
const posts = [webRelatedTerms];

// all posts with chronological id order
export const latestPosts = [];

// set id of each post in chronological order
for (const key in posts) {
  const obj = {
    ...posts[key],
    id: Number(key),
  };

  latestPosts.push(obj);
}
