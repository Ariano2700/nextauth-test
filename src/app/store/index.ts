import create from "zustand";
export interface Post {
  id: number;
  title: string;
  body: string;
}
interface counterState {
  title: string;
  counter: number;
  posts: Post[];
  getPost: () => Promise<Post[]>;
  increment: (value: number) => void;
  decrease: (value: number) => void;
}

export const usePosts = create<counterState>((set) => ({
  title: "Elsapato",
  counter: 10,
  posts: [],
  getPost: async () => {
    const posts = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    set((state) => ({
      ...state,
      posts: posts,
    }));
    return posts;
  },
  increment(value: number) {
    set((state) => ({
      ...state,
      counter: state.counter + value,
    }));
  },
  decrease(value: number) {
    set((state) => ({
      ...state,
      counter: state.counter - value,
    }));
  },
}));
