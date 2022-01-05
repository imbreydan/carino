import DefaultPageLayout from "../components/layout";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error, mutate } = useSWR("/api/random", fetcher);

  return (
    <>
      <DefaultPageLayout
        title="Home"
        children={
          <div className="text-white text-2xl flex flex-col items-center justify-center min-h-[calc(100vh_-_6rem)] max-h-[calc(100vh_-_6rem)] overflow-hidden">
            {data ? (
              data.length == 0 ? (
                <code>✕ No images found</code>
              ) : (
                <img
                  className="bg-gradient-to-br from-cyan-500 to-blue-500 p-[3px]"
                  alt=""
                  src={data.src}
                />
              )
            ) : (
              <code>{error ? "An error occured" : "Loading..."}</code>
            )}
          </div>
        }
        button={
          <button
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br 
            from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:ring-cyan-800"
            onClick={() => mutate()}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Refresh Image
            </span>
          </button>
        }
      />
    </>
  );
}
