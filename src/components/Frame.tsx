import { Picker } from "./Picker";

export const Frame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen text-white bg-black">
      <div className="text-primary japanese">
        <div className="absolute top-0 left-1 font-bold">
          サイバーパンクの精神
        </div>
        <div className="absolute top-0 right-1">
          <Picker />
        </div>
      </div>
      <div className="text-primary japanese">
        <div className="absolute top-0 bottom-0 right-1 m-auto h-32 font-bold tl">
          ≣のアク子的な力
        </div>
      </div>
      {children}
      <div className="text-primary japanese">
        <div className="absolute bottom-0 left-1 font-bold">
          サイバースペース
        </div>
        <div className="absolute right-0 bottom-0 left-0 m-auto font-bold w-fit">
          未知なる世界への招待
        </div>
        <div className="absolute bottom-0 right-1 font-bold">
          テクノロジーの進化
        </div>
      </div>
    </div>
  );
};
