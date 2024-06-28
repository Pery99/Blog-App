import Image from "next/image";

const Page = () => {
  return (
    <div class="hero bg-base-200 py-4">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="min-w-lg sm:max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">
            Discover the World, One Story at a Time
          </h1>
          <p class="py-6">
            Welcome to PeryBlog, your ultimate destination for travel tales,
            hidden gems, and the adventures that await beyond the horizon. Join
            us as we explore the globe, share captivating stories, and inspire
            your next journey. Let's turn every trip into a cherished memory.
            Happy wandering!
          </p>
          <div className="flex gap-2 items-center">
            <button class="btn btn-primary">Learn more</button>
            <button class="btn btn-primary">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
