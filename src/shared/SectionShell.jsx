export default function SectionShell({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`relative min-h-screen snap-start overflow-hidden px-6 py-16 md:px-10 lg:px-16 ${className}`}
    >
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center">{children}</div>
    </section>
  );
}