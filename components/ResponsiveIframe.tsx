import React from "react";

export default function ResponsiveIframe({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-900/60 pt-[150%] sm:pt-[120%] lg:pt-[90%]">
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
