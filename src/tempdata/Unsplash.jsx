import { useState } from "react";
import { useEffect } from "react";

function Unsplash() {
  const [dataAll, setDataAll] = useState();
  useEffect(function () {
    async function dataFetch() {
      try {
        const res = await fetch(
          "https://api.unsplash.com/photos/random?client_id=KxO3g1SwqPO4U8uoMJlXzZYYCJHqqBlbQ6nDfTgLxHE",
        );
        const data = await res.json();
        console.log(data);
        setDataAll(data);
      } catch (error) {
        throw new Error("There is problems in data fetching");
      }
    }
    dataFetch();
  }, []);
  return dataAll;
}

export default Unsplash;
