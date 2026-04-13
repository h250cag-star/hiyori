"use client";

interface SwipeButtonsProps {
  onSkip: () => void;
  onInterested: () => void;
  onMustGo: () => void;
  disabled: boolean;
}

export default function SwipeButtons({ onSkip, onInterested, onMustGo, disabled }: SwipeButtonsProps) {
  return (
    <div className="flex justify-center items-center gap-5 py-4">
      {/* 興味ない */}
      <button
        onClick={onSkip}
        disabled={disabled}
        className="w-14 h-14 rounded-full bg-white shadow-lg border-2 border-gray-200 flex flex-col items-center justify-center active:scale-95 transition-transform disabled:opacity-50"
      >
        <span className="text-xl">✕</span>
      </button>

      {/* 興味ある */}
      <button
        onClick={onInterested}
        disabled={disabled}
        className="w-14 h-14 rounded-full bg-white shadow-lg border-2 border-orange-300 flex flex-col items-center justify-center active:scale-95 transition-transform disabled:opacity-50"
      >
        <span className="text-xl">👍</span>
      </button>

      {/* ぜひ行きたい */}
      <button
        onClick={onMustGo}
        disabled={disabled}
        className="w-16 h-16 rounded-full bg-orange-500 shadow-lg flex flex-col items-center justify-center active:scale-95 transition-transform disabled:opacity-50"
      >
        <span className="text-2xl">🔥</span>
      </button>
    </div>
  );
}
