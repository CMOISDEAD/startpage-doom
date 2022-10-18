import { dev, media, school } from "./pages";
import { Logo } from "./logo";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="h-screen bg-black flex flex-col content-center items-center justify-center gap-4">
      <div className="text-sky-500 font-bold hover:animate-pulse">
        <Logo />
      </div>
      <div className="flex flex-row justify-between gap-28 mb-10">
        <div className="text-center text-white font-bold flex flex-col ">
          {dev
            .sort((a, b) => b.name.length - a.name.length)
            .map((page, i) => {
              return (
                <a
                  href={page.link}
                  className="uppercase hover:text-sky-500 transition delay-75 duration-300 ease-in-out"
                  key={i}
                  target="_blank"
                >
                  {page.name}
                </a>
              );
            })}
        </div>
        <div className="text-center text-white font-bold flex flex-col">
          {media
            .sort((a, b) => b.name.length - a.name.length)
            .map((page, i) => {
              return (
                <a
                  href={page.link}
                  className="uppercase hover:text-sky-500 transition delay-75 duration-300 ease-in-out"
                  key={i}
                  target="_blank"
                >
                  {page.name}
                </a>
              );
            })}
        </div>
        <div className="text-center text-white font-bold flex flex-col">
          {school
            .sort((a, b) => b.name.length - a.name.length)
            .map((page, i) => {
              return (
                <a
                  href={page.link}
                  className="uppercase hover:text-sky-500 transition delay-75 duration-300 ease-in-out"
                  key={i}
                  target="_blank"
                >
                  {page.name}
                </a>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
