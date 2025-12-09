import { postApi } from "../../../entities/post/api/postApi"

export const useAddPost = () => {
  const addPost = async (newPost: any) => {
    const data = await postApi.addPost(newPost)
    // 전역 상태 관리 사용
  }
}
