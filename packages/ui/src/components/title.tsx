import React from "react";

export const Title = (props: { title: string; lg: boolean }) => {
  const { title, lg } = props;
  return <h2 className={lg ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}>{title}</h2>;
};
