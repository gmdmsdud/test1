import axios from "axios";
import { useState, useEffect } from "react";

export default function open() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    void fetchDog();
  }, []);
  return (
    <>
      <img src={dogUrl} />
    </>
  );
}
