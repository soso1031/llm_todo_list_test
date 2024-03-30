"use client";
import { useState } from "react";
import clsx from "clsx";

export default function MessageSendArea() {
  const [message, setMessage] = useState<String>("");

  function chageMessage(newMessage: String) {
    setMessage(newMessage);
  }

  return (
    <div className="flex justify-center">
      <div className="border border-gray-150 rounded-3xl sm:p-4 fixed bottom-12 bg-white w-full max-w-screen-lg">
        <div className="flex gap-3">
          <input
            className="peer block w-full rounded-md  py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500 focus:outline-none"
            placeholder="LLMに指示を出す"
            onChange={(e) => {
              chageMessage(e.target.value);
            }}
          />
          <button
            disabled={message.length === 0}
            className={clsx(
              "aspect-square flex items-center justify-center rounded-lg sm:w-10 ",
              {
                "bg-gray-200": message.length === 0,
                "bg-green-400": message.length !== 0,
                "hover:bg-green-500": message.length !== 0,
              }
            )}
            onClick={() => console.log(message)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              width={25}
              height={25}
              color={"#ffffff"}
              fill={"none"}
              className="w-5"
            >
              <path
                d="M21.5973 2.54257C21.1299 2.03918 20.397 1.85063 19.6968 1.78314C18.9611 1.71223 18.08 1.75939 17.1313 1.88382C15.2288 2.13337 12.9302 2.71102 10.7222 3.42176C8.51281 4.13295 6.35914 4.98865 4.74626 5.80847C3.94355 6.21648 3.24734 6.62932 2.74121 7.02586C2.48919 7.22331 2.25922 7.436 2.08623 7.66237C1.92123 7.87829 1.74764 8.18549 1.75002 8.55582C1.75629 9.5279 2.41829 10.2149 3.12327 10.676C3.84284 11.1467 4.77998 11.5014 5.71161 11.7792C6.65324 12.06 7.64346 12.2776 8.49473 12.454C8.55052 12.4655 8.66203 12.4886 8.79867 12.5168C9.31323 12.6231 9.57051 12.6763 9.81237 12.6039C10.0542 12.5315 10.2402 12.3456 10.612 11.9737L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289C16.0976 8.68342 16.0976 9.31659 15.7071 9.70711L12.2745 13.1397C11.8954 13.5188 11.7059 13.7083 11.6342 13.9543C11.5624 14.2003 11.6203 14.4614 11.736 14.9837C12.1844 17.0084 12.5738 18.6815 12.9623 19.8071C13.1892 20.4645 13.4445 21.0336 13.7678 21.4533C14.1052 21.8913 14.5642 22.2222 15.1683 22.2489C15.5444 22.2655 15.8571 22.0938 16.0715 21.9344C16.2975 21.7666 16.51 21.5414 16.7071 21.2953C17.1031 20.8005 17.5192 20.1159 17.9332 19.3247C18.7652 17.7347 19.6462 15.6028 20.3917 13.4096C21.1368 11.2173 21.7577 8.9306 22.0568 7.0301C22.206 6.0823 22.2798 5.20207 22.2388 4.46477C22.1999 3.76556 22.0509 3.03106 21.5973 2.54257Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
