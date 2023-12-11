interface Props {
  list: Page;
}

export const List = ({ list }: Props) => {
  const { title, links } = list;

  return (
    <div className="flex flex-col gap-2 font-bold text-center text-white">
      <p className="mb-2 text-3xl font-bold text-yellow-500 uppercase">
        {title}
      </p>
      {links
        .sort((a: any, b: any) => b.name.length - a.name.length)
        .map((page: any, i: number) => {
          return (
            <a
              href={page.link}
              className="capitalize transition duration-300 ease-in-out delay-75 hover:text-yellow-500 hover:underline decoration-wavy"
              key={i}
              target="_blank"
            >
              {page.name}
            </a>
          );
        })}
    </div>
  );
};
