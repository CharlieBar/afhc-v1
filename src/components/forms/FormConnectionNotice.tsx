export default function FormConnectionNotice() {
  return (
    <div
      className="mb-5 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950"
      role="status"
      aria-live="polite"
    >
      <p className="font-heading text-sm font-bold">Form not yet connected</p>
      <p className="mt-1 font-light leading-relaxed">
        This form UI is in place, but the full submission workflow is intentionally
        deferred to Phase 3. Placeholder API routes exist only to keep the build
        surface clean.
      </p>
    </div>
  );
}
