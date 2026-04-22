export default function GlassCard({ className = "", children }) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md ${className}`}>
      {children}
    </div>
  );
}