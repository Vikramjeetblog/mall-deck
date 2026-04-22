export default function MediaPanel({ src, type = "image", className = "" }) {
  if (type === "video") {
    return (
      <div className={`overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] ${className}`}>
        <video className="h-full w-full object-cover" src={src} autoPlay muted loop playsInline />
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] ${className}`}>
      <img src={src} alt="" className="h-full w-full object-cover" />
    </div>
  );
}