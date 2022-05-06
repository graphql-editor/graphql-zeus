import React, { useState } from 'https://cdn.skypack.dev/react';

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const Layout: React.FC<{
  routes: Record<string, Route[]>;
  activeRoute?: string;
  prefix?: string;
}> = ({ children, routes, activeRoute, prefix = '' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="h-full flex flex-col">
      <div className="w-full sm:flex hidden px-10 border-b border-purple-200 items-center">
        <a className="block py-4 text-xl logo font-black" href={`${prefix}/`}>
          GraphQL Zeus
        </a>
        <span className="text-gray-400 block ml-2 text-md mt-1">Autocomplete client for GraphQL</span>
        <span className="ml-auto mr-2 text-gray-500">5.0.x</span>
        <a href="https://github.com/graphql-editor/graphql-zeus" className="text-purple-500" title="Github repository">
          <GithubIcon />
        </a>
      </div>
      <div className="flex w-full flex-1 overflow-hidden">
        <div
          className="absolute sm:hidden block cursor-pointer top-6 right-6"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="h-2 w-10 bg-purple-500 mb-2 rounded"></div>
          <div className="h-2 w-10 bg-purple-500 mb-2 rounded"></div>
          <div className="h-2 w-10 bg-purple-500 mb-2 rounded"></div>
        </div>
        {mobileMenuOpen && (
          <div className="py-10 px-20 bg-gray-100 h-full w-80 sm:hidden block absolute top-0 left-0">
            <a className="block py-4 text-lg text-purple-900 font-black" href={`${prefix}/`}>
              GraphQL Zeus
            </a>
            {Object.entries(routes).map(([k, v]) => {
              return (
                <div>
                  <div className="block py-3 text-md font-medium">{k}</div>
                  <div>
                    {v.map((r) => (
                      <a
                        className={`block py-3 text-md font-medium${
                          activeRoute === r.link ? ' text-purple-600' : 'text-gray-600'
                        }`}
                        href={`${prefix}/page/${r.link}.html`}
                      >
                        {r.title}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="py-6 px-10 w-80 sm:block hidden  border-r border-purple-200">
          {Object.entries(routes).map(([k, v]) => {
            return (
              <div>
                <div className="block text-md font-medium pb-2">{k}</div>
                <div className="pl-2 pb-4">
                  {v.map((r) => (
                    <a
                      className={`transition-all block pb-2 text-md font-medium${
                        activeRoute === r.link ? ' text-purple-600' : ' text-gray-600 hover:text-purple-600'
                      }`}
                      href={`${prefix}/page/${r.link}.html`}
                    >
                      {r.title}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="container mx-auto px-20 py-6 pb-20 h-full overflow-auto">{children}</div>
      </div>
    </div>
  );
};

type Route = {
  link: string;
  title: string;
};
