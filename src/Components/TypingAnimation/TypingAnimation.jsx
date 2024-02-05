import { useEffect, useState } from "react";
function TypingAnimation(){
  const [text, setText] = useState("");
  const messages = ["WELCOME TO"];
  // console.log(text);

  useEffect(() => {
    let index = 0;
    let intervalid;

    const typeText = () => {
      if (index < messages.length) {
        const message = messages[index];
        setText((prevText) => prevText + message.charAt(0));
        messages[index] = message.slice(1);
        if (message.length === 0) {
          index++;
        }
      } else {
        clearInterval(intervalid);
      }
    };

    intervalid = setInterval(typeText, 180);
    return () => {
      clearInterval(intervalid);
    };
  }, []);

  return (
    <>
      <div className="typing-animation">
        <span className="text-indigo-50 text-6xl font-extrabold">{text}</span>
        <span className="cursor"></span>
      </div>

      {/* <h1 className="text-indigo-50 text-6xl font-extrabold">{text}</h1> */}
    </>
  );

}

export default TypingAnimation;