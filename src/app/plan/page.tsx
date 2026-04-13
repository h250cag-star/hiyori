"use client";

import { useState } from "react";
import BottomNav from "@/components/layout/BottomNav";

export default function PlanPage() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // TODO: AI プラン生成API呼び出し
    setTimeout(() => setIsGenerating(false), 3000);
  };

  return (
    <div className="h-full flex flex-col pb-16">
      <div className="flex items-center px-4 py-3 bg-white border-b">
        <h1 className="text-xl font-bold">週末プラン</h1>
      </div>

      <div className="flex-1 p-4">
        {/* 日付選択 */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
          <label className="text-sm font-medium text-gray-600">
            いつの予定を立てる？
          </label>
          <div className="flex gap-2 mt-2">
            <button className="flex-1 py-3 bg-orange-500 text-white rounded-lg font-medium">
              今週末
            </button>
            <button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium">
              来週末
            </button>
            <button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium">
              日付を選ぶ
            </button>
          </div>
        </div>

        {/* プラン生成ボタン */}
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl text-lg hover:bg-orange-600 active:scale-95 transition-all disabled:bg-orange-300"
        >
          {isGenerating ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin">⏳</span>
              プランを作成中...
            </span>
          ) : (
            "3つのプランを作る"
          )}
        </button>

        {/* プラン表示エリア（TODO） */}
        <div className="mt-6 text-center text-gray-400">
          <p className="text-sm">
            保存済みスポットとAIおすすめから
            <br />
            あなたの家族にぴったりの3プランを作成します
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
