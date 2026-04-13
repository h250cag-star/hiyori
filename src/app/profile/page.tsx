"use client";

import BottomNav from "@/components/layout/BottomNav";

export default function ProfilePage() {
  return (
    <div className="h-full flex flex-col pb-16">
      <div className="flex items-center px-4 py-3 bg-white border-b">
        <h1 className="text-xl font-bold">設定</h1>
      </div>

      <div className="flex-1 p-4 space-y-4">
        {/* 家族情報 */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">家族情報</h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-500">お住まいのエリア</label>
              <p className="font-medium">千葉県市川市（行徳駅）</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">お子さま</label>
              <p className="font-medium">2歳、6歳</p>
            </div>
            <div>
              <label className="text-sm text-gray-500">移動手段</label>
              <p className="font-medium">車あり（片道1時間半まで）</p>
            </div>
          </div>
        </div>

        {/* 好み */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">好みの傾向</h2>
          <p className="text-sm text-gray-500">
            スワイプ履歴から自動的に学習されます
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">
              公園が好き
            </span>
            <span className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full">
              体験型スポット
            </span>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
