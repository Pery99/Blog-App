import PostCard from "@/components/postCard/postCard";

const BlogPage = () => {
  return (
    <div className="bg-base-200 ">
      <div className="w-[95%] mx-auto py-5 grid grid-cols-1 lg:grid-cols-3 gap-y-6">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};
export default BlogPage;
