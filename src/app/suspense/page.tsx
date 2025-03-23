import { Suspense } from "react";

const DataComponent = async () => {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("データが読み込まれました！");
    }, 2000);
  });

  return <div>{data}</div>;
};

const Loading = () => {
  return <div>読み込み中...</div>;
};

export default function SuspensePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Suspense デモ</h1>
      <Suspense fallback={<Loading />}>
        <DataComponent />
      </Suspense>
    </div>
  );
}
