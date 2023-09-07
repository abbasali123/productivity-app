import axios from "axios";
import { useState, useEffect } from "react";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const randomQuoteNumber = Math.floor(Math.random() * 100);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        const { statusCode, statusMessage, ...data } = await response.json();
        if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
        setQuote(data[randomQuoteNumber].text);
        setAuthor(data[randomQuoteNumber].author);
      } catch (error) {
        console.log("Error while getting quotes: ", error);
        setQuote({ text: "Opps... Something went wrong" });
      } finally {
        console.log(quote);
      }
    })();
  }, []);

  return (
    <div className="quote">
      <h3>"{quote}"</h3>
      <p>-{author}</p>
    </div>
  );
}

export { Quote };
