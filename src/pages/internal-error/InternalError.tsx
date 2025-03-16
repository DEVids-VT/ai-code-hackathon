export default function InternalError() {
  return (
    <section className="flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p className="text-gray-700 text-[180px] font-thin md:text-[100px]">
        500
      </p>
      <p className="text-gray-800 font-medium text-xl mb-5">Oops!</p>
      <p className="text-gray-600 text-lg font-light text-center mb-5">
        Try refreshing the page or feel free to contact us at
        <span className="font-medium"> skillnet@gmail.com</span>, if the problem
        persists.
      </p>
    </section>
  );
}
