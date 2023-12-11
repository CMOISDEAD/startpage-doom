import links from "./pages";
import { List } from "./components/List";
import { Frame } from "./components/Frame";

function App() {
  return (
    <Frame>
      <div className="flex gap-4 justify-center content-center items-center h-full">
        <div className="grid grid-cols-1 grid-flow-row gap-7 lg:grid-cols-3">
          {links.map((link: Page, i: number) => (
            <List list={link} key={i} />
          ))}
        </div>
      </div>
    </Frame>
  );
}

export default App;
