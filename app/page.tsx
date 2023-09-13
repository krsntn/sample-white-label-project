import css from "./page.module.css";

export default function Home() {
  return (
    <div className={`w-full min-h-[100dvh] ${css.div}`}>
      <h1 className="text-lg text-white">
        {process.env.clientId || "client1"}
      </h1>
    </div>
  );
}
