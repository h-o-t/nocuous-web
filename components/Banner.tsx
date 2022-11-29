import { type ComponentChildren } from "preact";

export default function Banner(
  { children, subtitle }: { children: ComponentChildren; subtitle?: string },
) {
  return (
    <div class="flex items-center">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the nocuous logo: a radiation trefoil symbol"
      />
      <div class="flex-grow p-4">
        <h1 class="text-3xl font-header">{children}</h1>
        {subtitle && <h2 class="text-sm">{subtitle}</h2>}
      </div>
    </div>
  );
}
