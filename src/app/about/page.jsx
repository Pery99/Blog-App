import Image from "next/image";

const AboutPage = () => {
  return (
    <div class="hero bg-base-200 py-6">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="min-w-lg sm:max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-3xl font-bold">About PeryBlog</h1>
          <p class="py-6">
            Born from a love of exploration, our team of diverse globetrotters
            shares unique perspectives and real-life experiences to bring the
            world closer to you. From hidden gems to must-see destinations, we
            cover it all.
          </p>
          <p class="text-base">
            Join our community of wanderers by subscribing to our newsletter and
            following us on social media. Let's explore the world together, one
            story at a time.
          </p>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
