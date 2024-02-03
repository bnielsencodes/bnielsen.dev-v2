import imgFutur from "@/public/assets/images/resources/youtube/the-futur.jpg";
import imgTheo from "@/public/assets/images/resources/youtube/theo3gg.jpg";
import imgFireship from "@/public/assets/images/resources/youtube/fireship.jpg";
import imgTraversy from "@/public/assets/images/resources/youtube/traversy.jpg";

// eslint-disable-next-line
export const resources = {
  youtube: [
    {
      id: 1,
      title: "The Futur",
      link: "https://www.youtube.com/@thefutur",
      img: imgFutur,
      tags: [
        { id: 1, name: "career" },
        { id: 2, name: "branding" },
      ],
    },
    {
      id: 2,
      title: "Theo - t3.gg",
      link: "https://www.youtube.com/@t3dotgg",
      img: imgTheo,
      tags: [
        { id: 1, name: "career" },
        { id: 2, name: "web development" },
        { id: 3, name: "programming" },
      ],
    },
    {
      id: 3,
      title: "Fireship",
      link: "https://www.youtube.com/@fireship",
      img: imgFireship,
      tags: [
        { id: 1, name: "career" },
        { id: 2, name: "web development" },
        { id: 3, name: "programming" },
      ],
    },
    {
      id: 4,
      title: "Traversy Media",
      link: "https://www.youtube.com/@TraversyMedia",
      img: imgTraversy,
      tags: [
        { id: 1, name: "web development" },
        { id: 2, name: "programming" },
        { id: 2, name: "tutorials" },
      ],
    },
  ],
};
