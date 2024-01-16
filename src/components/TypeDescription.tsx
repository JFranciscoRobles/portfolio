"use client";
import { useEffect, useState } from "react";

export function TypeDescription() {
  const text =
    "Ingeniero de software entusiasta, siempre buscando aprender y construir nuevos proyectos.";
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i]);

  return (
    <h2 className="text-center font-display  font-bold tracking-[-0.02em] drop-shadow-sm   max-w-md w-full">
      {displayedText ? displayedText : "I"}
    </h2>
  );
}
