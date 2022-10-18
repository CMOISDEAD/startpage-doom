import axios from "axios";
import { useEffect, useState } from "react";

interface Quote {
  q: string;
  a: string;
}

export const Footer = () => {
  const [quote, setQuote] = useState<Quote>({
    q: "Unix is very simple, is just need a genius to understand its simplicity",
    a: "Dennis M Ritchie",
  });

  useEffect(() => {
    axios
      .create({
        baseURL: "https://zenquotes.io/api/",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .get("quotes")
      .then((res) => {
        console.log(res);
        setQuote(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="text-center text-sky-500">
      <p>{quote.q}</p>
      <p>{quote.a}</p>
    </div>
  );
};
