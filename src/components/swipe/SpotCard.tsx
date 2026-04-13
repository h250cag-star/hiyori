"use client";

import { Spot } from "@/types";
import { motion } from "framer-motion";

interface SpotCardProps {
  spot: Spot;
  distanceText?: string;
}

export default function SpotCard({ spot, distanceText }: SpotCardProps) {
  const categoryLabels: Record<string, string> = {
    park: "公園",
    zoo: "動物園",
    aquarium: "水族館",
    museum: "博物館",
    amusement: "遊園地",
    farm: "牧場・農園",
    nature: "自然",
    indoor: "室内施設",
    shopping: "ショッピング",
    cafe: "カフェ",
    other: "その他",
  };

  return (
    <motion.div
      className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {/* 写真エリア */}
      <div className="relative h-[55%] bg-gray-200">
        {spot.image_url ? (
          <img
            src={spot.image_url}
            alt={spot.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
            📷 写真準備中
          </div>
        )}
        {/* カテゴリバッジ */}
        <span className="absolute top-3 left-3 bg-white/90 text-sm font-medium px-3 py-1 rounded-full">
          {categoryLabels[spot.category] || spot.category}
        </span>
        {/* 屋内バッジ */}
        {spot.is_indoor && (
          <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            ☔ 雨でもOK
          </span>
        )}
      </div>

      {/* 情報エリア */}
      <div className="flex-1 p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold leading-tight">{spot.name}</h2>

        {/* 距離・料金 */}
        <div className="flex items-center gap-3 text-sm text-gray-600">
          {distanceText && (
            <span className="flex items-center gap-1">🚗 {distanceText}</span>
          )}
          {spot.cost_adult > 0 && (
            <span className="flex items-center gap-1">
              💰 大人{spot.cost_adult.toLocaleString()}円
            </span>
          )}
          {spot.cost_adult === 0 && (
            <span className="flex items-center gap-1 text-green-600 font-medium">
              🆓 無料
            </span>
          )}
        </div>

        {/* 対象年齢 */}
        <div className="text-xs text-gray-500">
          対象年齢: {spot.age_min}〜{spot.age_max}歳
          {spot.parking_available && " ・ 🅿 駐車場あり"}
        </div>

        {/* 口コミ要約 */}
        {spot.review_summary && (
          <div className="mt-auto bg-orange-50 rounded-lg p-3 text-sm text-gray-700">
            <span className="text-orange-500 font-medium">💬 同世代の声: </span>
            {spot.review_summary}
          </div>
        )}

        {/* レーティング */}
        {spot.rating && (
          <div className="flex items-center gap-1 text-sm">
            <span className="text-yellow-500">★</span>
            <span className="font-medium">{spot.rating.toFixed(1)}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
