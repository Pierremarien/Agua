import React from "react";

export const Textblock = (props: { content: string; left: boolean }) => {
  return (
    <p className={props.left ? "flex justify-start md:max-w-[75%]" : "flex justify-end md:max-w-[75%]"}>
      {props.content}
    </p>
  );
};
