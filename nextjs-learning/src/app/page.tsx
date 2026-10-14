"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Arman");
  const showName = () => {
    alert(`Name: ${name}`);
  };
  return (
    <div>
      <button
        onClick={showName}
        style={{
          backgroundColor: "lightseagreen",
          color: "black",
          fontSize: 20,
          width: 100,
          height: 100,
          
        }}
      >
        Click
      </button>
    </div>
  );
}
