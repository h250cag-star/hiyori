import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 bg-gradient-to-b from-orange-50 to-white">
      <div className="text-center max-w-sm">
        <h1 className="text-5xl font-bold text-orange-500 mb-2">ヒヨリ</h1>
        <p className="text-lg text-gray-600 mb-8">
          週末をもっと楽しく。
          <br />
          15分で最高の1日を。
        </p>

        <Link
          href="/discover"
          className="inline-block w-full bg-orange-500 text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-orange-600 active:scale-95 transition-all"
        >
          はじめる
        </Link>

        <p className="mt-6 text-sm text-gray-400">
          忙しいあなたの週末を、AIが設計します
        </p>
      </div>
    </div>
  );
}
