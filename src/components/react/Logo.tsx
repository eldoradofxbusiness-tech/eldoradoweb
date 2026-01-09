export default function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const sizes = {
    sm: "h-12",
    md: "h-14",
  };

  return (
    <a href="/" className="flex items-center">
      <img
        src="/logo.webp"
        alt="El DoradoFx logo"
        className={`${sizes[size]} w-auto object-contain`}
      />
    </a>
  );
}
