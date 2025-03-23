import Link from "@/src/components/ui/Link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col gap-4">
        <Link href="/suspense">Suspense</Link>
        <Link href="/serverAction">サーバーアクション</Link>
        <Link href="/optimistic">楽観的更新</Link>
        <Link href="/use">use</Link>
      </div>
    </div>
  );
}
