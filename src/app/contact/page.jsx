const ContactPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="py-6">
            We’d love to hear from you! Whether you have a question, feedback,
            or simply want to say hello, feel free to reach out to us. Here’s
            how you can get in touch:
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name and Surname"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="Email"
                placeholder="Email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Phone Number (Optional)"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <textarea
                type="text"
                placeholder="Message"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
