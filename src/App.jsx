import { useState } from "react";

function App() {
  const [color, setColor] = useState("pink");

  return (
    <>
      <div
        className="w-full h-screen flex justify-center duration-500"
        style={{ backgroundColor: color }}
      >
        <div className="color-palette fixed bottom-5 p-3 bg-white rounded-full">
          <button
            onClick={() => setColor("red")}
            className="py-1 px-3 rounded-3xl text-white mx-1"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>

          <button
            onClick={() => setColor("green")}
            className="py-1 px-3 rounded-3xl text-white mx-1"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="py-1 px-3 rounded-3xl text-white mx-1"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>

          <button
            onClick={() => setColor("olive")}
            className="py-1 px-3 rounded-3xl text-white mx-1"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>

          <button
            onClick={() => setColor("gray")}
            className="py-1 px-3 rounded-3xl text-white mx-1"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
