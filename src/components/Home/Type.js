import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Linux system administrator",
          "Dreamy DevOps Engineer",
          "Atlassian administrator",
          "Computer system Engineer",
          "Newbie Web developer",
          "Certified Professional Cloud DevOps Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
