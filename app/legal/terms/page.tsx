export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Terms of Service</h1>
      <p className="text-muted-foreground mt-2 text-sm">
        By using this site, you agree to our terms.
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
        <li>Content is provided as-is without warranties.</li>
        <li>All trademarks are property of their respective owners.</li>
        <li>These terms are governed by applicable laws.</li>
      </ul>
    </main>
  );
}


