export default function Term({
  term,
}: {
  term: {
    id: number;
    name: string;
    target: string;
    definition: string;
    seeAlso?: [
      {
        id: number;
        name: string;
        link: string;
      }
    ];
  };
}) {
  return (
    <li id={term.target} className="pt-16">
      <p className="text-3xl font-bold">{term.name}</p>
      <p className="pt-3">{term.definition}</p>

      {term.seeAlso && (
        <ul className="flex flex-wrap pt-6">
          <li className="min-w-[73.15px] pr-[6px] text-neutral-300 dark:text-neutral-500 text-base leading-[22px]">
            See Also:
          </li>
          {term.seeAlso.map((term) => {
            return (
              <li
                className="pr-2 text-neutral-300 dark:text-neutral-400 text-base leading-[22px] transition-opacity text-opacity-80 hover:opacity-80"
                key={term.id}
              >
                <a href={term.link}>{term.name}</a>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
