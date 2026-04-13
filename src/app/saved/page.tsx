"use client";

import BottomNav from "@/components/layout/BottomNav";

export default function SavedPage() {
  return (
    <div className="h-full flex flex-col pb-16">
      <div className="flex items-center px-4 py-3 bg-white border-b">
        <h1 className="text-xl font-bold">保存済みスポット</h1>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center text-gray-400">
          <div className="text-5xl mb-4">♥</div>
          <p>いいねしたスポットがここに表示されます</p>
          <p className="text-sm mt-2">発見タブでスワイプしてみましょう</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
