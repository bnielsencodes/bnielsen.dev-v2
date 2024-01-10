import { useEffect, useState } from "react";

export default function Term({
  term,
}: {
  term: {
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
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <li id={term.target} className="pt-16 -mb-7">
      <p className="text-2xl font-bold">{term.name}</p>
      <p className="pt-3 pb-2">{term.definition}</p>
    </li>
  );
}
