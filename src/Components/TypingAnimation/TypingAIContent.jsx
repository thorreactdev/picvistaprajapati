import React, { useState, useEffect } from "react";

const TypingAIContent = () => {
  const [text, setText] = useState("");
  const messages = ["Show next-level creativity with AI-generated images"];
  console.log(text);

  useEffect(() => {
    let index = 0;
    let intervalid;

    const typeText = () => {
      if (index < messages.length) {
        const message = messages[index];
        setText((prevText) => prevText + message.charAt(0).toUpperCase());
        messages[index] = message.slice(1);
        if (message.length === 0) {
          index++;
        }
      } else {
        clearInterval(intervalid);
      }
    };

    intervalid = setInterval(typeText, 100);
    return () => {
      clearInterval(intervalid);
    };
  }, []);
  return (
    <>
      <div className="typing-animation">
        <span className="uppercase text-4xl text-center text-white font-bold">
          {text}
        </span>
        {/* <span className="cursor"></span> */}
      </div>
    </>
  );
};

export default TypingAIContent;
