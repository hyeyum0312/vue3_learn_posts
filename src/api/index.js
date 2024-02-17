import axios from "axios";

// create: 사용자 정의 파라미터를 포함해서 새로운 axios instance를 생성해주는 함수
function create(baseURL, options) {
  Object.assign({ baseURL }, options);
  const instance = axios.create(Object.assign({ baseURL }, options));
  return instance;
}

export const posts = create(`${import.meta.env.VITE_APP_API_URL}/posts`);
