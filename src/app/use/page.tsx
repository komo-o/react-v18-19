import { Suspense, use } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async (): Promise<Todo> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
};

const DisplayData = ({ promise }: { promise: Promise<Todo> }) => {
  const data = use(promise);
  return (
    <ul>
      <li>{data.userId}</li>
      <li>{data.id}</li>
      <li>{data.title}</li>
      <li>{data.completed ? "完了" : "未完了"}</li>
    </ul>
  );
};

export default function UsePage() {
  return (
    <div>
      <h1>Use</h1>
      <Suspense fallback={<div>読み込み中...</div>}>
        <DisplayData promise={fetchData()} />
      </Suspense>
    </div>
  );
}
