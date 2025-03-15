import React from "react";
import DashNav from "@/app/_components/DashNav";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashNav />
      {children}
    </>
  );
}
