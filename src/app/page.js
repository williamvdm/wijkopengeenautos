// Assets
import ArrowUp from "../assets/arrow-up.svg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative bg-illusion">
      <div className="absolute bottom-0 flex justify-center mb-8 bg-white p-4 w-1/2 rounded-full">
        <input
          type="text"
          className="text-wepeep outline-none relative pr-10 w-full"
          placeholder="Type a message..."
        />
        <button type="button" className="">
          <img src="https://i.ibb.co/b65pWGc/arrow-up.png" className="size-11 mx-4"/>
        </button>
      </div>
    </main>
  );
}
