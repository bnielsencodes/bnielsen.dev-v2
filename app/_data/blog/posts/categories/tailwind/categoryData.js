const posts = [];

export const categoryData = [];

for (const key in posts) {
  const obj = {
    ...posts[key],
    id: Number(key),
  };

  categoryData.push(obj);
}
