export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight gradient-text">Privacy Policy</h1>
      <p className="text-muted-foreground mt-2 text-sm">
        We respect your privacy. We collect only necessary information to respond to inquiries and improve our services.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
        <li>We use Vercel Analytics to understand site usage.</li>
        <li>Contact form submissions are sent to our email provider.</li>
        <li>We do not sell your personal information.</li>
      </ul>
    </main>
  );
}


