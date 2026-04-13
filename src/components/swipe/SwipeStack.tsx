"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spot } from "@/types";
import SpotCard from "./SpotCard";
import SwipeButtons from "./SwipeButtons";

type SwipeAction = "skip" | "interested" | "must_go";

interface SwipeStackProps {
  spots: Spot[];
  onSwipe: (spotId: string, action: SwipeAction) => void;
}

export default function SwipeStack({ spots, onSwipe }: SwipeStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [action, setAction] = useState<SwipeAction | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentSpot = spots[currentIndex];
  const isFinished = currentIndex >= spots.length;

  const handleAction = useCallback(
    (selectedAction: SwipeAction) => {
      if (isAnimating || isFinished) return;

      setAction(selectedAction);
      setIsAnimating(true);

      onSwipe(currentSpot.id, selectedAction);

      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setAction(null);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating, isFinished, currentSpot, onSwipe]
  );

  if (isFinished) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">🌤️</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            今日のカードはおしまい
          </h2>
          <p className="text-gray-500">
            また明日、新しいスポットをお届けします
          </p>
        </div>
      </div>
    );
  }

  const getAnimation = () => {
    if (action === "skip") return { x: -400, rotate: -20 };
    if (action === "interested") return { x: 400, rotate: 10 };
    if (action === "must_go") return { x: 400, rotate: 20, scale: 1.05 };
    return { x: 0, rotate: 0 };
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* カードエリア */}
      <div className="flex-1 relative mx-4 my-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSpot.id}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              ...getAnimation(),
            }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-0"
          >
            {/* オーバーレイ */}
            {action === "must_go" && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-orange-500/10 rounded-2xl">
                <span className="text-5xl bg-white/90 rounded-full p-5 shadow-lg">
                  🔥
                </span>
              </div>
            )}
            {action === "interested" && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-blue-500/10 rounded-2xl">
                <span className="text-5xl bg-white/90 rounded-full p-5 shadow-lg">
                  👍
                </span>
              </div>
            )}
            {action === "skip" && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-500/10 rounded-2xl">
                <span className="text-5xl bg-white/90 rounded-full p-5 shadow-lg">
                  ✕
                </span>
              </div>
            )}
            <SpotCard spot={currentSpot} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ボタン */}
      <SwipeButtons
        onSkip={() => handleAction("skip")}
        onInterested={() => handleAction("interested")}
        onMustGo={() => handleAction("must_go")}
        disabled={isAnimating}
      />

      {/* 残りカード数 */}
      <div className="text-center text-sm text-gray-400 pb-2">
        {currentIndex + 1} / {spots.length}
      </div>
    </div>
  );
}
