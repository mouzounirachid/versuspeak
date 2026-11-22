/** Disabled until network approval and a compliant consent platform are configured. */
export function AdSlot({ id }: { id: string }) {
 if (process.env.NEXT_PUBLIC_ENABLE_AD_SLOTS !== 'true') return null;
 return <aside aria-label="Advertisement" data-ad-slot={id} className="mx-auto my-10 flex min-h-[280px] max-w-5xl flex-col items-center justify-center border border-stone-200 bg-stone-50 text-xs text-stone-500"><span>Advertisement</span><div id={id} className="min-h-[250px] w-full" /></aside>;
}
