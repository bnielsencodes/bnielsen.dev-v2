import { post as webRelatedTerms } from "@/app/_data/blog/posts/categories/web-development/posts/web-related-terms";

const posts = [webRelatedTerms];

export const popularContent = [];

for (const key in posts) {
  const obj = {
    ...posts[key],
    id: Number(key),
  };

  popularContent.push(obj);
}
