import Head from "next/head";
import React, { FC } from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ title = "Kanban App", children }) => {
  return (
    <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800">
      <Head>
        <title>{title}</title>
      </Head>

      <main className="main -ml-48 flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0">
        <div className="flex h-full items-center justify-center bg-white text-center text-5xl font-bold shadow-md">
          {children}
        </div>
      </main>
    </div>
  );
};
