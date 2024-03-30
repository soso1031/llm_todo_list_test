"use client"; // This is a client component 👈🏽
import { notoSansJP } from "@/app/ui/fonts";
import { useState } from "react";
import { Task } from "./library/definitions";
import MessageSendArea from "./ui/llmMessage/messageSendArea";
import clsx from "clsx";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  //新しいタスクを作成
  function addTask(taskName: String) {
    const newTask = {
      name: taskName,
      isDone: false,
      id: String(Math.random()),
    };
    setTasks([...tasks, newTask]);
  }

  //指定のタスクを削除
  function deleteTask(deleteIndex: number) {
    const newTasks = [...tasks];
    newTasks.splice(deleteIndex, 1);
    setTasks(newTasks);
  }

  //タスクの名前を変更
  function changeTaskName(changeIndex: number, newName: String) {
    setTasks(
      tasks.map((task, index) =>
        index === changeIndex
          ? { name: newName, isDone: task.isDone, id: task.id }
          : task
      )
    );
  }

  //タスクの終了かどうかの変更
  function changeTaskStatus(changeIndex: number, changeStatus: boolean) {
    setTasks(
      tasks.map((task, index) =>
        index === changeIndex
          ? { name: task.name, isDone: !changeStatus, id: task.id }
          : task
      )
    );
  }

  return (
    <main className="min-h-screen">
      <title>TODO </title>
      <div className="mx-auto w-full px-6 xs:px-7 sm:px-10 max-w-screen-lg flex min-h-screen flex-col">
        {/* header */}
        <header className="mt-12">
          <div className="flex min-w-0 flex-1 items-center gap-4">
            <h1 className={`text-xl font-medium ${notoSansJP.variable}`}>
              タスク一覧
            </h1>
            <div className="ml-auto flex shrink-0 items-center gap-3.5 sm:gap-4">
              <button
                araial-aria-label="タスクを追加"
                className="flex aspect-square w-9 items-center justify-center rounded-full sm:w-11 border border-main-200 hover:border-main-300 hover:bg-gray-50"
                onClick={() => addTask("")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#000000"
                  fill="none"
                  className="w-5"
                >
                  <path
                    d="M12 4V20"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 12H20"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
        {/* 作成したタスクの表示箇所 */}
        <ul className="mt-8">
          {tasks.map((task, index) => (
            <li key={String(task.id)}>
              <div className="flex gap-4 justify-between">
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    className="w-5"
                    checked={task.isDone}
                    onChange={() => changeTaskStatus(index, task.isDone)}
                  ></input>
                  <div className="relative">
                    <input
                      className="peer block py-[10px] text-base text-transparent caret-black outline-2 placeholder:text-gray-400 focus:outline-none"
                      placeholder={"新しいタスク"}
                      onChange={(e) => changeTaskName(index, e.target.value)}
                    />
                    <p
                      className={clsx("text-base absolute top-2.5 z-50 ", {
                        "text-gray-300": task.isDone,
                      })}
                    >
                      {task.name}
                    </p>
                  </div>
                </div>
                <button
                  araial-aria-label="タスクを削除"
                  className="flex aspect-square w-9 items-center justify-center rounded-full sm:w-11  hover:bg-red-50"
                  onClick={() => deleteTask(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    color={"#fe4848"}
                    fill={"none"}
                    className="w-5"
                  >
                    <path
                      d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9.5 16.5L9.5 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.5 16.5L14.5 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
        {/* テキストの送信 */}
      </div>
      <MessageSendArea />
    </main>
  );
}
