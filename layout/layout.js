export default function Layout({ children }) {
  console.log("in layout");
  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-900 to-purple-200">
      <div className="m-auto bg-slate-50 rounded-md w-full h-full md:w-4/5 lg:w-3/5 md:h-4/5 grid md:grid-cols-2">
        <div className="rounded-md w-full h-full md:overflow-hidden hidden md:block bg-cover bg-center p-0">
          <img
            alt="login_image"
            src={"/bubbles.jpeg"}
            className="object-cover h-full w-auto rounded-md"
          />
        </div>
        <div className="right flex flex-col justify-evenly">
          <div className="text-center">{children}</div>
        </div>
      </div>
    </div>
  );
}
