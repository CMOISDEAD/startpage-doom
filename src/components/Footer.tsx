import axios from "axios";
import { useEffect, useState } from "react";

interface Quote {
  content: string;
  author: string;
}

export const Footer = () => {
  const [quote, setQuote] = useState<Quote>({
    content:
      "Unix is very simple, is just need a genius to understand its simplicity",
    author: "Dennis M Ritchie",
  });

  useEffect(() => {
    axios
      .get("https://api.quotable.io/random?tags=technology|science")
      .then((res) => {
        setQuote(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="text-center text-sky-500 w-4/5">
      <p>{quote.content}</p>
      <p className="italic">~ {quote.author}</p>
    </div>
  );
};
