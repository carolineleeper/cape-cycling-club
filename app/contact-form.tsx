"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle", message: "" };

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-[#123B6D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#123B6D]/30";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  if (state.status === "success") {
    return <p className="text-[#123B6D] text-sm" aria-live="polite">{state.message}</p>;
  }

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-2">
        <input type="text" name="name" placeholder="Name" required className={inputClass} />
        <input type="email" name="email" placeholder="Email" required className={inputClass} />
      </div>
      <textarea
        name="message"
        rows={2}
        placeholder="Say hello, or let us know you'd like to join a ride…"
        required
        maxLength={5000}
        className={`${inputClass} resize-none`}
      />
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-[#123B6D] px-5 py-2 text-sm font-medium text-[#F2E8D1] hover:bg-[#123B6D]/80 transition-colors disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send"}
        </button>
        {state.status === "error" && (
          <p className="text-sm text-red-700" aria-live="polite">{state.message}</p>
        )}
      </div>
    </form>
  );
}
