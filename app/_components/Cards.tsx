import Link from "next/link";
import React, { ReactElement } from "react";

interface DashboardCardProps {
  icon: ReactElement;
  title: string;
  desc: string;
  actionText: string;
  action: string;
}

function Cards({ icon, title, desc, actionText, action }: DashboardCardProps) {
  return (
    <div className="group relative bg-white dark:bg-black  p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-500 transition-transform transform  flex flex-col justify-between h-72">
      <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
        {icon}
      </div>
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-white text-sm mb-4 leading-relaxed line-clamp-3">
        {desc}
      </p>
      <Link
        href={action}
        className="btn bg-blue-600 text-white font-medium rounded-lg text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-center p-2"
      >
        {actionText}
      </Link>
    </div>
  );
}

export default Cards;
