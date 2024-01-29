const posts = [
  { id: 1, title: "제목1", content: "2024-01-01" },
  { id: 2, title: "제목2", content: "2024-01-02" },
  { id: 3, title: "제목3", content: "2024-01-03" },
  { id: 4, title: "제목4", content: "2024-01-04" },
  { id: 5, title: "제목5", content: "2024-01-05" },
];

export function getPosts() {
  return posts;
}

export function getPostById(id) {
  console.log("id >>>>", id);
  const numberId = parseInt(id);
  // eslint-disable-next-line prettier/prettier
  return posts.find((item) => item.id === numberId);
}
