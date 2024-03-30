import MessageSendArea from "./ui/llmMessage/messageSendArea";
import ToDoList from "./ui/toDOList/toDoList";

export default function Home() {
  return (
    <main className="min-h-screen">
      <title>TODO </title>
      <div className="mx-auto w-full px-6 xs:px-7 sm:px-10 max-w-screen-lg flex min-h-screen flex-col">
        {/* toDoList */}
        <ToDoList />
        {/* テキストの送信 */}
      </div>
      <MessageSendArea />
    </main>
  );
}
