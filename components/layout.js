import Head from "next/head";

export default function DefaultPageLayout({ title, children, button }) {
  return (
    <>
      <Head>
        <title>Carino</title>
      </Head>
      <main className="min-h-screen bg-gray-900">
        <div className="flex flex-col text-white text-2xl font-semibold text-center">
          <nav className="px-4 flex justify-between h-16 border-b-2 border-gray-700">
            <ul className="flex items-center">
              <li>
                <a
                  className="text-[#06b6d4] hover:brightness-125"
                  href="https://github.com/imbreydan/carino"
                  target="_blank"
                >
                  Carino {title ? `| ${title}` : ""}
                </a>
              </li>
            </ul>
            <ul className="flex items-center">
              <li>{button}</li>
            </ul>
          </nav>
        </div>
        {children}
        <footer className="px-4 flex justify-center border-t-2 border-gray-700">
          <code>
            © {new Date().getFullYear()} Breydan R. All rights reserved.
          </code>
        </footer>
      </main>
    </>
  );
}
