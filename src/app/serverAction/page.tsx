"use client";

import { useActionState } from "react";
import { action } from "./action";

export default function ServerActionPage() {
  const [count, formAction, isPending] = useActionState(action, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">サーバーアクション</h2>

        <form action={formAction} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">遅延時間(ms)</label>
            <input
              type="number"
              name="delay"
              className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="1000"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium disabled:bg-gray-400"
          >
            {isPending ? "送信中..." : "送信する"}
          </button>
        </form>
        <div className="mt-4 text-cente text-gray-700">送信回数: {count}</div>
      </div>
    </div>
  );
}
