"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

const LIMITS = {
  nameMin: 2,
  nameMax: 80,
  emailMax: 254,
  messageMin: 10,
  messageMax: 2000,
  minSubmitMs: 3000,
  cooldownMs: 30_000,
  hourlyMax: 5,
} as const;

const RL_LAST_KEY = "contact_last_submit_ts";
const RL_HISTORY_KEY = "contact_submit_history";

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const URL_RE = /(https?:\/\/|www\.|<a\s|\[url=)/i;
const CONTROL_RE = /[\u0000-\u001F\u007F-\u009F]/g;

function sanitize(input: string): string {
  return input.replace(CONTROL_RE, "").trim();
}

function readHistory(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(RL_HISTORY_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    const cutoff = Date.now() - 60 * 60 * 1000;
    return arr.filter((t) => typeof t === "number" && t > cutoff);
  } catch {
    return [];
  }
}

function recordSubmission() {
  if (typeof window === "undefined") return;
  const now = Date.now();
  const history = [...readHistory(), now];
  localStorage.setItem(RL_LAST_KEY, String(now));
  localStorage.setItem(RL_HISTORY_KEY, JSON.stringify(history));
}

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string>("");
  const { t } = useLanguage();
  const mountedAt = useRef<number>(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  function fail(msg: string) {
    setErrorMsg(msg);
    setStatus("error");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    if ((formData.get("website") as string)?.trim()) {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      return;
    }

    const elapsed = Date.now() - mountedAt.current;
    if (elapsed < LIMITS.minSubmitMs) {
      fail(t("contact.form.error.tooFast"));
      return;
    }

    const lastTs = Number(localStorage.getItem(RL_LAST_KEY) || 0);
    if (Date.now() - lastTs < LIMITS.cooldownMs) {
      const waitS = Math.ceil(
        (LIMITS.cooldownMs - (Date.now() - lastTs)) / 1000
      );
      fail(t("contact.form.error.cooldown").replace("{s}", String(waitS)));
      return;
    }

    const history = readHistory();
    if (history.length >= LIMITS.hourlyMax) {
      fail(t("contact.form.error.rateLimit"));
      return;
    }

    const name = sanitize((formData.get("name") as string) || "");
    const email = sanitize((formData.get("email") as string) || "");
    const message = sanitize((formData.get("message") as string) || "");

    if (name.length < LIMITS.nameMin || name.length > LIMITS.nameMax) {
      fail(t("contact.form.error.invalidName"));
      return;
    }
    if (URL_RE.test(name)) {
      fail(t("contact.form.error.invalidName"));
      return;
    }
    if (
      email.length === 0 ||
      email.length > LIMITS.emailMax ||
      !EMAIL_RE.test(email)
    ) {
      fail(t("contact.form.error.invalidEmail"));
      return;
    }
    if (
      message.length < LIMITS.messageMin ||
      message.length > LIMITS.messageMax
    ) {
      fail(t("contact.form.error.invalidMessage"));
      return;
    }

    formData.set("name", name);
    formData.set("email", email);
    formData.set("message", message);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ""
    );
    formData.set("from_name", name);
    formData.set("subject", `New contact from ${name} — Portfolio`);
    formData.set("replyto", email);
    formData.set("botcheck", "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        recordSubmission();
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        fail(t("contact.form.error"));
      }
    } catch {
      fail(t("contact.form.error"));
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-12 space-y-4">
        <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
        <h3 className="text-xl font-semibold text-foreground">
          {t("contact.form.sent.title")}
        </h3>
        <p className="text-muted-foreground">{t("contact.form.sent.desc")}</p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          {t("contact.form.sent.another")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {t("contact.form.name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={LIMITS.nameMin}
            maxLength={LIMITS.nameMax}
            autoComplete="name"
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
            placeholder={t("contact.form.name.placeholder")}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-2"
          >
            {t("contact.form.email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={LIMITS.emailMax}
            autoComplete="email"
            inputMode="email"
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
            placeholder={t("contact.form.email.placeholder")}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {t("contact.form.message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          minLength={LIMITS.messageMin}
          maxLength={LIMITS.messageMax}
          className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
          placeholder={t("contact.form.message.placeholder")}
        />
        <p className="text-xs text-muted-foreground mt-1.5">
          {t("contact.form.message.hint")
            .replace("{min}", String(LIMITS.messageMin))
            .replace("{max}", String(LIMITS.messageMax))}
        </p>
      </div>

      {status === "error" && errorMsg && (
        <div
          role="alert"
          className="flex items-start gap-2 text-sm text-destructive"
        >
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full"
        size="lg"
      >
        {status === "sending" ? (
          t("contact.form.sending")
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            {t("contact.form.submit")}
          </>
        )}
      </Button>
    </form>
  );
}
