"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function fetchTweets() {
      const res = await fetch("/api/tweets");
      const data = await res.json();
      setTweets(data);
    }
    fetchTweets();
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Latest Tweets</h1>
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <p>
            <strong>{tweet.user}</strong>:{tweet.content}
          </p>
          <small>{tweet.timestamp}</small>
        </div>
      ))}
    </div>
  );
}
