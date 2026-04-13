"use client";

import { useState, useEffect } from "react";
import SwipeStack from "@/components/swipe/SwipeStack";
import BottomNav from "@/components/layout/BottomNav";
import { Spot } from "@/types";
import { supabase } from "@/lib/supabase";

// MVP: ダミーデータ（Supabase接続後に差し替え）
const DEMO_SPOTS: Spot[] = [
  {
    id: "1",
    name: "国営ひたち海浜公園",
    description: "ネモフィラの青い絨毯が広がる絶景公園",
    category: "park",
    lat: 36.3968,
    lng: 140.5947,
    address: "茨城県ひたちなか市馬渡字大沼605-4",
    image_url: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800",
    age_min: 0,
    age_max: 18,
    is_indoor: false,
    avg_stay_minutes: 180,
    cost_adult: 450,
    cost_child: 0,
    parking_available: true,
    rating: 4.5,
    review_summary: "4歳と2歳を連れて行きました。ネモフィラに子供たちも大興奮！遊園地エリアもあって1日楽しめます。",
  },
  {
    id: "2",
    name: "ふなばしアンデルセン公園",
    description: "子ども美術館でものづくり体験ができる人気公園",
    category: "park",
    lat: 35.7831,
    lng: 140.0012,
    address: "千葉県船橋市金堀町525",
    image_url: "https://images.unsplash.com/photo-1560114928-40F1A4587F6E?w=800",
    age_min: 0,
    age_max: 12,
    is_indoor: false,
    avg_stay_minutes: 240,
    cost_adult: 900,
    cost_child: 100,
    parking_available: true,
    rating: 4.6,
    review_summary: "子ども美術館の陶芸体験が最高。6歳の息子が夢中になりました。ポニー乗馬100円もお得！",
  },
  {
    id: "3",
    name: "むさしの村",
    description: "2歳から乗れるアトラクション16種類のファミリー遊園地",
    category: "amusement",
    lat: 36.1116,
    lng: 139.5846,
    address: "埼玉県加須市志多見1700-1",
    image_url: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=800",
    age_min: 0,
    age_max: 10,
    is_indoor: false,
    avg_stay_minutes: 180,
    cost_adult: 1200,
    cost_child: 650,
    parking_available: true,
    rating: 4.2,
    review_summary: "2歳の娘も乗れる乗り物がたくさん！いちご狩りもできて大満足。遊園地デビューにぴったり。",
  },
  {
    id: "4",
    name: "チームラボ プラネッツ TOKYO",
    description: "体ごとアート作品に没入する体験型ミュージアム",
    category: "museum",
    lat: 35.6546,
    lng: 139.7905,
    address: "東京都江東区豊洲6-1-16",
    image_url: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800",
    age_min: 0,
    age_max: 18,
    is_indoor: true,
    avg_stay_minutes: 120,
    cost_adult: 3800,
    cost_child: 1500,
    parking_available: false,
    rating: 4.7,
    review_summary: "3歳の子供が水の中を歩くエリアで大はしゃぎ。雨の日でもOKなのがありがたい！",
  },
  {
    id: "5",
    name: "マザー牧場",
    description: "動物ふれあい・季節の花・味覚狩りが楽しめる観光牧場",
    category: "farm",
    lat: 35.2632,
    lng: 139.9611,
    address: "千葉県富津市田倉940-3",
    image_url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800",
    age_min: 0,
    age_max: 18,
    is_indoor: false,
    avg_stay_minutes: 240,
    cost_adult: 1500,
    cost_child: 800,
    parking_available: true,
    rating: 4.4,
    review_summary: "羊やヤギに餌やりができて子供たちが大喜び。ソフトクリームも絶品。春はお花畑がきれい！",
  },
];

export default function DiscoverPage() {
  const [spots, setSpots] = useState<Spot[]>(DEMO_SPOTS);

  const handleSwipe = async (spotId: string, action: "skip" | "interested" | "must_go") => {
    const labels = { skip: "興味ない", interested: "興味ある", must_go: "ぜひ行きたい" };
    console.log(`${labels[action]}: ${spots.find(s => s.id === spotId)?.name}`);
    // TODO: Supabaseに保存
  };

  return (
    <div className="h-full flex flex-col pb-16">
      {/* ヘッダー */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b">
        <h1 className="text-xl font-bold text-orange-500">ヒヨリ</h1>
        <span className="text-sm text-gray-400">今日のおすすめ</span>
      </div>

      {/* スワイプエリア */}
      <SwipeStack spots={spots} onSwipe={handleSwipe} />

      {/* ボトムナビ */}
      <BottomNav />
    </div>
  );
}
