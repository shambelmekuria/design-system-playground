"use client";
import React from "react";

export default function TextPage() {
  const txt =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus est delectus officia omnis qui architecto blanditiis. Tenetur et iusto eum fuga harum molestiae sed unde, adipisci animi obcaecati, id ad.";
  const txt2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
  return (
    <div>
      <h1 className="font-bold text-lg md:text-xl text-slate-800">
        Lorem ipsum dolor sit.
      </h1>
      <DisplayText text={txt} />
    </div>
  );
}

const DisplayText = ({ text }: { text: string }) => {
  const [isExpand, setIsExpand] = React.useState<boolean>(false);
  const display_txt = isExpand ? text.slice(0,80) : text;
  return (
    <>
      <p className="text-neutral-80 dark:text-neutral-50">
        {display_txt}
        {isExpand ? "...":""}
      </p>
      {text.length > 100 && (
        <button
          className="cursor-pointer text-blue-700 hover:text-blue-600  transition-colors ease-in duration-300 "
          onClick={() => setIsExpand(!isExpand)}
        >
          {isExpand ? "Read More" : "Read Less..."}
        </button>
      )}
    </>
  );
};
