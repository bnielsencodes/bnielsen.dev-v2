import { categoriesData } from "./categories/categoriesData";
import { categoryData as webDevelopmentPostsData } from "@/app/_data/blog/posts/categories/web-development/categoryData";

// eslint-disable-next-line
export const postsData = {
  categories: [
    {
      id: 1,
      title: "Career",
      link: "/blog/posts/career",
      posts: [
      ],
    },
    {
      id: 2,
      title: "CSS",
      link: "/blog/posts/css",
      posts: [
      ],
    },
    {
      id: 3,
      title: "JavaScript",
      link: "/blog/posts/javascript",
      posts: [
      ],
    },
    {
      id: 4,
      title: "Next.js",
      link: "/blog/posts/nextjs",
      posts: [
      ],
    },
    {
      id: 5,
      title: "React",
      link: "/blog/posts/react",
      posts: [
      ],
    },
    {
      id: 6,
      title: "Tailwind",
      link: "/blog/posts/tailwind",
      posts: [
      ],
    },
    {
      id: 7,
      title: "Web Development",
      link: "/blog/posts/web-development",
      posts: [
        ...webDevelopmentPostsData,
      ],
    },
  ],
};
