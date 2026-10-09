"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s()+.-]{7,20}$/;

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const data = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    service: String(formData.get("service") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const errors: ContactState["errors"] = {};
  if (data.name.length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.phone && !PHONE_RE.test(data.phone)) errors.phone = "Please enter a valid phone number.";
  if (data.message.length < 10) errors.message = "Please tell us a little more (at least 10 characters).";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  // TODO: deliver the request — e.g. send an email (Resend, SendGrid) or save it to a database.
  // Avoid storing detailed medical information unless the destination is HIPAA compliant.
  console.log("New appointment request", { ...data, message: `${data.message.length} chars` });

  return {
    status: "success",
    message: `Thank you, ${data.name.split(" ")[0]}! We'll contact you within one business day to confirm your appointment.`,
  };
}
