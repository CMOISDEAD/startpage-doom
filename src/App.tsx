import { Logo } from "./logo";

interface Page {
  name: string;
  link: string;
}

const pages: Page[] = [
  {
    name: "Reddit",
    link: "https://reddit.com/r/unixporn/",
  },
  {
    name: "Github",
    link: "https://github.com/",
  },
  {
    name: "Hacker News",
    link: "https://news.ycombinator.com/",
  },
  {
    name: "Youtube",
    link: "https://youtube.com/",
  },
  {
    name: "Cuevana",
    link: "https://cuevana3.me/",
  },
  {
    name: "Mail",
    link: "https://gmail.com/",
  },
  {
    name: "Discord",
    link: "https://discord.com/",
  },
];

function App() {
  return (
    <div className="h-screen bg-[#161616] flex flex-col content-center items-center justify-center">
      <div className="text-sky-500 font-bold">
        <Logo />
      </div>
      {/* <input */}
      {/*   className="rounded-sm w-96 bg-[#262626] p-1 text-zinc-200" */}
      {/*   type="text" */}
      {/*   placeholder="Search on google..." */}
      {/* /> */}
      <div className="sections text-center text-white font-bold mb-5">
        {pages.map((page, i) => {
          return (
            <div>
              <a
                href={page.link}
                className="uppercase hover:text-sky-500"
                key={i}
                target="_blank"
              >
                {page.name}
              </a>
            </div>
          );
        })}
      </div>
      <div className="footer text-center text-sky-500">
        <a href="https://github.com/CMOISDEAD">One ring to rule them all...</a>
      </div>
    </div>
  );
}

export default App;
