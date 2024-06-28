const SinglePostPage = () => {
  return (
    <div class="hero bg-base-200 py-4">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://images.pexels.com/photos/267559/pexels-photo-267559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="min-w-lg sm:max-w-lg rounded-lg shadow-2xl"
        />
        <div>
          <h1 class=" text-3xl lg:text-5xl font-bold">About JESUS</h1>
          <div className="flex items-center mt-6">
            <img
              className="w-[50px] h-[50px] rounded-full object-contain"
              src="https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <table className="table">
              <thead>
                <tr>
                  <th className="py-1">Author</th>
                  <th className="py-1">Published</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1">
                    <p className="font-bold">Hart Hagerty</p>
                  </td>
                  <td className="py-1">
                    <p>-11-04T09-30</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            dolorum culpa enim atque, vitae quia dolor expedita debitis neque
            veritatis aliquam officiis, laborum iste esse maiores ea? Doloribus
            adipisci ea officia iste explicabo laudantium quod nostrum ipsam
            facere quibusdam natus quo ipsa voluptatibus corporis, vero, nemo
            voluptas perferendis eveniet odit similique obcaecati rem eum. Sed
            earum magnam blanditiis, corporis quam dolore quos. Earum incidunt
            eum voluptate aspernatur, maxime consequatur facilis nostrum cumque
          </p>
        </div>
      </div>
    </div>
  );
};
export default SinglePostPage;
