import {
  AppWindow,
  ArrowRight,
  BookOpen,
  Building2,
  Car,
  Coffee,
  CreditCard,
  FileText,
  Flag,
  Gem,
  Gift,
  GlassWater,
  KeyRound,
  Layers,
  Mail,
  Nfc,
  NotebookPen,
  Pen,
  Presentation,
  ReceiptText,
  RefreshCw,
  Share2,
  Shirt,
  Signpost,
  Store,
  Table,
  Tent,
  Timer,
  Truck,
  type LucideIcon,
} from "lucide-react";

type Category = {
  title: string;
  headerIcon: LucideIcon;
  items: { icon: LucideIcon; label: string }[];
};

const CATEGORIES: Category[] = [
  {
    title: "BRANDING ESSENTIALS",
    headerIcon: Mail,
    items: [
      { icon: CreditCard, label: "Business Cards" },
      { icon: FileText, label: "Letterheads" },
      { icon: Mail, label: "Email Signature" },
      { icon: ReceiptText, label: "Invoice Template" },
      { icon: Building2, label: "Company Profile" },
      { icon: Share2, label: "Social Media Templates" },
      { icon: Presentation, label: "Presentation Deck" },
      { icon: BookOpen, label: "Brand Guidelines" },
      { icon: RefreshCw, label: "Logo Refresh" },
    ],
  },
  {
    title: "PROMOTIONAL ITEMS",
    headerIcon: Gift,
    items: [
      { icon: Nfc, label: "NFC Business Card" },
      { icon: KeyRound, label: "NFC Key Holder" },
      { icon: Pen, label: "Pens" },
      { icon: NotebookPen, label: "Notepads" },
      { icon: Coffee, label: "Mugs" },
      { icon: GlassWater, label: "Water Bottles" },
      { icon: Shirt, label: "T-Shirts" },
      { icon: Shirt, label: "Golf Shirts" },
      { icon: Shirt, label: "Hoodies" },
    ],
  },
  {
    title: "OFFICE & EVENTS",
    headerIcon: Building2,
    items: [
      { icon: Flag, label: "Pull-up Banner" },
      { icon: Tent, label: "Gazebo" },
      { icon: Table, label: "Table Cloth" },
      { icon: Flag, label: "Flags" },
      { icon: Signpost, label: "Wall Banner" },
      { icon: Signpost, label: "Reception Signage" },
      { icon: Car, label: "Vehicle Branding" },
      { icon: AppWindow, label: "Window Vinyl" },
      { icon: Store, label: "Office Signs" },
    ],
  },
];

const BENEFITS = [
  { icon: Gem, label: "Premium quality materials" },
  { icon: Layers, label: "Consistent brand everywhere" },
  { icon: Timer, label: "Fast turnaround times" },
  { icon: Truck, label: "Delivered to your doorstep" },
];

export default function BrandCatalogue() {
  return (
    <section id="catalogue" className="bg-white py-16 lg:py-20">
      <div className="container-px">
        <div className="grid gap-8 lg:grid-cols-[1fr_2.3fr_0.9fr]">
          {/* Left: heading + accelerator card */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark">
              CHOOSE WHAT YOU NEED
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
              Brand Catalogue
            </h2>
            <p className="mt-2 text-sm text-body">
              Pick the items that fit your business.
            </p>

            <div className="mt-6 rounded-xl border border-black/[0.08] p-6">
              <h3 className="text-lg font-bold text-ink">Brand Accelerator</h3>
              <p className="mt-4 text-sm text-body">Starting from</p>
              <p className="text-3xl font-extrabold text-gold-dark">R2,500</p>
              <p className="mt-2 text-sm text-body leading-relaxed">
                Choose only the items your business needs.
              </p>
              <hr className="my-5 border-black/10" />
              <p className="text-sm text-body leading-relaxed">
                Unlock the complete Brand Accelerator{" "}
                <span className="font-semibold text-ink">free</span> when you
                sign up for{" "}
                <span className="font-semibold text-ink">AXB Enterprise</span>.
              </p>
              <a
                href="#catalogue"
                className="mt-6 flex w-full items-center justify-center rounded-md bg-gold px-5 py-3 text-sm font-semibold text-ink hover:bg-gold-light transition-colors"
              >
                Browse Catalogue
              </a>
            </div>
          </div>

          {/* Middle: three category cards */}
          <div className="grid gap-5 sm:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="flex flex-col rounded-xl border border-black/[0.08] p-5"
              >
                <div className="flex items-center gap-2 border-b border-black/[0.06] pb-3">
                  <span className="flex size-7 items-center justify-center rounded-md bg-cream text-gold-dark">
                    <cat.headerIcon className="size-4" />
                  </span>
                  <p className="text-xs font-bold tracking-wider text-ink">
                    {cat.title}
                  </p>
                </div>
                <ul className="mt-4 flex flex-col gap-3 grow">
                  {cat.items.map((item, i) => (
                    <li
                      key={`${item.label}-${i}`}
                      className="flex items-center gap-2.5 text-sm text-ink/80"
                    >
                      <item.icon className="size-4 shrink-0 text-gold-dark" />
                      {item.label}
                    </li>
                  ))}
                </ul>
                <a
                  href="#catalogue"
                  className="mt-5 flex items-center justify-center gap-2 rounded-md border border-black/15 px-4 py-2.5 text-sm font-semibold text-ink hover:bg-cream transition-colors"
                >
                  View Options
                  <ArrowRight className="size-4" />
                </a>
              </div>
            ))}
          </div>

          {/* Right: benefits */}
          <div className="flex flex-col justify-center gap-7">
            {BENEFITS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="size-5 shrink-0 text-gold-dark" />
                <p className="text-sm font-medium text-ink leading-snug">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
