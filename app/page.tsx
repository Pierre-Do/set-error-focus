import { SetFocusOnError } from "@/app/SetFocusOnError";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <h2 className="font-bold">
        Without <pre className="inline-block">setTimeout</pre>
      </h2>
      <SetFocusOnError />
      <h2 className="font-bold mt-4">
        With <pre className="inline-block">setTimeout</pre>
      </h2>
      <SetFocusOnError withTimeout />
    </main>
  );
}
