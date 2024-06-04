import ArrowUp from "../assets/arrow-up.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative bg-illusion">
      <div className="absolute bottom-0 inset-x-4 flex justify-center mx-auto mb-8 bg-white p-4 rounded-full max-w-3xl">
        <input
          type="text"
          className="text-wepeep outline-none relative p-2 w-full"
          placeholder="Type a message..."
        />
        <button type="button" className="w-11 mx-4">
          <img src="https://i.ibb.co/b65pWGc/arrow-up.png" className="w-full"/>
        </button>
      </div>
    </main>
  );
}
