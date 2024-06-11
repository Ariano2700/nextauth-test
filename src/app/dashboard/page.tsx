"use client";
import { signOut } from "next-auth/react";
import { Post, usePosts } from "../store";
import { useEffect, useState } from "react";
import { shallow } from "zustand/shallow";
import Posts from "@/components/Posts";
function DashboardPage() {
  const [postsFecth, setPostsFecth] = useState<Post[]>([]);

  const { increment, getPost, decrease } = usePosts();
  const { counter, posts } = usePosts(
    (state) => ({
      counter: state.counter,
      posts: state.posts,
    }),
    shallow
  );
  const { title } = usePosts();
  // const { posts } = usePosts();
  // const { counter } = usePosts();
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPost();
      setPostsFecth(posts);
    };
    fetchPosts();
  }, [getPost]);
  return (
    <section className="flex justify-center items-center min-h-screen gap-8 flex-col">
      <h1 className=" text-white text-5xl">Dashboard</h1>
      <h2 className=" text-white text-3xl">{title}</h2>
      <button
        onClick={() => signOut()}
        className="p-3 text-white rounded-md bg-red-600 hover:bg-red-900 transition-all duration-300"
      >
        LogOut
      </button>
      <h2 className="text-3xl text-white">{counter}</h2>
      <button
        className="p-2 bg-blue-500 rounded-md text-white hover:bg-blue-800 transition-all duration-300"
        onClick={() => increment(2)}
      >
        Incrementar
      </button>
      <button
        className="p-2 bg-violet-700 rounded-md text-white hover:bg-violet-900 transition-all duration-300"
        onClick={() => decrease(2)}
      >
        Incrementar
      </button>
      <hr />
      <div className="flex flex-wrap gap-8 items-center justify-center w-2/4 mb-5">
        {postsFecth.map((post, i) => (
          <Posts key={i} body={post.body} id={post.id} title={post.title}/>
        ))}
      </div>
    </section>
  );
}
export default DashboardPage;
