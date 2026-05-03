import React from "react";
import Child from "./child";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
export const metadata: Metadata = {
  title: "Motion",
};

export default function Page() {
  return (
    <div>
      <Child />
    </div>
  );
}
