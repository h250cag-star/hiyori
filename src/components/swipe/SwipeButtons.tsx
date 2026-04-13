"use client";

interface SwipeButtonsProps {
  onSkip: () => void;
  onInterested: () => void;
  onMustGo: () => void;
  disabled: boolean;
}

export default function SwipeButtons({ onSkip, onInterested, onMustGo, disabled }: SwipeButtonsProps) {
  return (
    <div className="flex justify-center items-end gap-4 py-3">
      {/* 興味ない */}
      <button
        onClick={onSkip}
        disabled={disabled}
        className="flex flex-col items-center gap-1 active:scale-95 transition-transform disabled:opacity-50"
      >
        <div className="w-14 h-14 rounded-full bg-white shadow-lg border-2 border-gray-300 flex items-center justify-center">
          <span className="text-xl text-gray-400">✕</span>
        </div>
        <span className="text-xs text-gray-500">興味ない</span>
      </button>

      {/* 興味ある */}
      <button
        onClick={onInterested}
        disabled={disabled}
        className="flex flex-col items-center gap-1 active:scale-95 transition-transform disabled:opacity-50"
      >
        <div className="w-14 h-14 rounded-full bg-white shadow-lg border-2 border-orange-300 flex items-center justify-center">
          <span className="text-xl">👍</span>
        </div>
        <span className="text-xs text-orange-500">興味ある</span>
      </button>

      {/* ぜひ行きたい */}
      <button
        onClick={onMustGo}
        disabled={disabled}
        className="flex flex-col items-center gap-1 active:scale-95 transition-transform disabled:opacity-50"
      >
        <div className="w-16 h-16 rounded-full bg-orange-500 shadow-lg flex items-center justify-center">
          <span className="text-2xl">🔥</span>
        </div>
        <span className="text-xs text-orange-600 font-bold">行きたい！</span>
      </button>
    </div>
  );
}
