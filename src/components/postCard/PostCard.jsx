const PostCard = () => {
  return (
    <div className="card bg-base-100 mx-auto w-96 shadow-xl">
      <figure>
        <img
          src="https://images.pexels.com/photos/20321168/pexels-photo-20321168/free-photo-of-couple-checking-a-map.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Title
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-wrap">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam libero
          exercitationem et ducimus nobis quidem. Officia error quae animi
          quaerat?
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Read more</div>
          <div className="badge badge-outline">Share</div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
