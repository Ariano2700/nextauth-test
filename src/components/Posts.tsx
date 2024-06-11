import { Post } from "@/app/store";

function Posts(props: Post) {
  const { body, id, title } = props;
  return (
    <div className="card h-72 relative border-2 border-blue-600 bg-gradient-to-b from-blue-600 from-[12%] via-[12%] via-white to-70% to-white shadow-lg rounded-xl w-72 flex justify-center items-center text-white">
      <span className="rounded-md bg-red-500 px-2 py-[.6em] absolute top-[2px] right-0 border border-white text-[.6em] mr-1 bg-gradient-to-b from-red-800 via-red-500 to-red-800 font-bold">
        ╳
      </span>
      <span className="rounded-md bg-red-500 px-2 py-[.6em] absolute top-[2px] right-7 border border-white text-[.6em] mr-2 bg-gradient-to-b from-blue-800 via-blue-500 to-blue-800">
        ▣
      </span>
      <span className="rounded-md bg-red-500 px-2 py-[.6em] absolute top-[2px] right-14 border border-white text-[.6em] mr-3 bg-gradient-to-b from-blue-800 via-blue-500 to-blue-800">
        —
      </span>
      <div className="p-2">
        <p className="text-black"><span className="font-bold">ID: </span>{id}</p>
        <p className="text-black"><span className="font-bold">Titulo: </span>{title}</p>
        <p className="text-black">{body}</p>
      </div>
    </div>
  );
}
export default Posts;
