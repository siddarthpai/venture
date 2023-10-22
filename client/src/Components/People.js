import React from "react";
import { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";

function People() {
  const [genderCount, setGenderCount] = useState([]);

  useEffect(() => {
    fetch("/api/genderCount")
      .then((response) => response.json())
      .then((data) => setGenderCount(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="App">
      <h1>Gender Count</h1>
      <ul>
        {genderCount.map((item) => (
          <li key={item._id}>
            {item._id}: {item.count}
          </li>
        ))}
      </ul>
      {/* <Bar
        data={{
          labels: genderCount.map((item) => item._id),
          datasets: [
            {
              label: "Gender Count",
              data: genderCount.map((item) => item.count),
              backgroundColor: ["rgba(75,192,192,0.2)", "rgba(255,159,64,0.2)"],
              borderColor: ["rgba(75,192,192,1)", "rgba(255,159,64,1)"],
              borderWidth: 1,
            },
          ],
        }}
      /> */}
    </div>
  );
}

export default People;
