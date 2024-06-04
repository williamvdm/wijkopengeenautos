import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative bg-illusion">
      <div className="absolute bottom-0 w-full flex justify-center mb-8">
        <input
          type="text"
          className="rounded-full p-3 w-1/2 text-wepeep outline-none"
        />
      </div>
    </main>
  );
}
