"use client";

import { useActionState } from "react";
import { Icon } from "@/components/icons";
import { services } from "@/lib/site";
import { sendContactMessage, type ContactState } from "./actions";

const initialState: ContactState = { status: "idle", message: "" };

const inputClass =
  "mt-2 w-full rounded-lg border border-flag-blue/20 bg-white px-4 py-3 text-ink outline-none transition placeholder:text-muted/60 focus:border-flag-blue focus:ring-2 focus:ring-flag-blue/20 aria-invalid:border-flag-red aria-invalid:ring-flag-red/20";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl bg-flag-blue-soft p-10 text-center" role="status">
        <span className="flex size-16 items-center justify-center rounded-full bg-flag-blue text-white">
          <Icon name="check" className="size-8" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-flag-blue">Request received</h3>
        <p className="mt-2 max-w-md text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field label="Full name" name="name" error={errors.name}>
        <input id="name" name="name" autoComplete="name" required aria-invalid={!!errors.name} className={inputClass} placeholder="Jane Doe" />
      </Field>
      <Field label="Email" name="email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} className={inputClass} placeholder="jane@example.com" />
      </Field>
      <Field label="Phone (optional)" name="phone" error={errors.phone}>
        <input id="phone" name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} className={inputClass} placeholder="(555) 555-5555" />
      </Field>
      <Field label="Service" name="service">
        <select id="service" name="service" className={inputClass} defaultValue="">
          <option value="">General question</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
        </select>
      </Field>
      <div className="sm:col-span-2">
        <Field label="How can we help?" name="message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            aria-invalid={!!errors.message}
            className={inputClass}
            placeholder="Preferred date and time, reason for visit, questions…"
          />
        </Field>
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2">
        {state.status === "error" && (
          <p className="text-sm font-semibold text-flag-red" role="alert">{state.message}</p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-flag-red px-8 py-3.5 font-bold text-white transition hover:bg-flag-red-dark disabled:opacity-60 sm:w-fit"
        >
          {pending ? "Sending…" : "Send Request"}
          {!pending && <Icon name="arrow" className="size-4" />}
        </button>
        <p className="text-xs text-muted">
          Please don&rsquo;t include sensitive medical details. For emergencies, call 911.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold text-flag-blue">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-sm text-flag-red">{error}</p>}
    </div>
  );
}
