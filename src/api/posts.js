import axios from "axios";
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
  const numberId = parseInt(id);
  return axios.get(`http://localhost:5000/posts/${numberId}`);
}

export function createPost(data) {
  return axios.get("http://localhost:5000/posts");
}

export function updatePost(id, data) {
  return axios.post(`http://localhost:5000/posts/${id}`, data);
}

export function deletePost(id) {
  return axios.delete(`http://localhost:5000/posts/${id}`);
}
