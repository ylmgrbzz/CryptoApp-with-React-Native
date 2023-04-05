import React, { useEffect } from "react";
import { View, Text } from "react-native";

const fetchData = () => {
  return fetch(
    "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": "b45eff95-a8f6-426d-84b1-76662c5d54f1",
      },
    }
  );
};

const App = () => {
  const [data, setData] = useState([0]);

  useEffect(() => {
    fetchData()
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return null;
};

export default App;
