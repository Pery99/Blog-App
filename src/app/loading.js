const Loading = () => {
  return <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0, 0, 0, 0.5)]">
    <span className="loading loading-bars loading-xs"></span>
    <span className="loading loading-bars loading-sm"></span>
    <span className="loading loading-bars loading-md"></span>
    <span className="loading loading-bars loading-lg"></span>
  </div>
};
export default Loading;
