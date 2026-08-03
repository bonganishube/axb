import Image from "next/image";

type Product = {
  title: string;
  blurb: string;
  /** Entry price, rand. Rendered as "From R{price}". */
  price: string;
  src: string;
  alt: string;
  /** Double-width on desktop, to fill the grid's last row. */
  wide?: boolean;
};

const PRODUCTS: Product[] = [
  {
    title: "Pull-Up Banners",
    blurb: "Eye-catching banners for events, shops and promotions.",
    price: "850",
    src: "/pull-up-banners.png",
    alt: "Branded pull-up banner on a stand",
  },
  {
    title: "Business Cards",
    blurb: "Premium cards that leave the right impression.",
    price: "350",
    src: "/business-cards.png",
    alt: "Stacks of black and white branded business cards with gold gilded edges",
  },
  {
    title: "Key Holders",
    blurb: "Practical branding people use every day.",
    price: "150",
    src: "/key-holders.png",
    alt: "Branded leather key holder with a gold ring",
  },
  {
    title: "Diary Books",
    blurb: "Branded diaries that keep your business top of mind.",
    price: "120",
    src: "/diary-books.png",
    alt: "Branded spiral-bound diary book",
  },
  {
    title: "NFC Tags",
    blurb: "Tap to connect. Share your details instantly.",
    price: "180",
    src: "/nfc-tags.png",
    alt: "Round branded NFC tag on a key ring",
  },
  {
    title: "Pens",
    blurb: "Simple, useful and effective brand visibility.",
    price: "30",
    src: "/pens.png",
    alt: "Two branded pens",
    wide: true,
  },
];

export default function BrandProducts() {
  return (
    <section id="products" className="bg-cream py-20 lg:py-24">
      <div className="container-px">
        {/* The intro sits in the grid's first cell rather than above it, so the
            cards start on the same line as the heading. */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-4">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark">
              OUR BRANDING PRODUCTS
            </p>
            {/* No sm:text-4xl bump like the other section headings get — this
                one lives in a quarter-width grid cell, not across the page. */}
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink">
              Everything You Need to Represent Your Brand
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-body">
              High-quality branded items that help you make a lasting impression
              everywhere your business goes.
            </p>
          </div>

          {PRODUCTS.map(({ title, blurb, price, src, alt, wide }) => (
            <article
              key={title}
              className={`flex gap-4 rounded-2xl border border-black/[0.08] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-md ${
                wide ? "sm:col-span-2" : ""
              }`}
            >
              {/* The mockups are shot on near-white, so they sit straight on the
                  card with no panel behind them. Contained, not covered — these
                  are products, and a crop would cut the item itself. min-h keeps
                  the image area from collapsing on the shortest blurbs. */}
              <div className="relative min-h-[210px] w-[46%] shrink-0 self-stretch">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain object-center"
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 25vw, 45vw"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-lg font-extrabold leading-tight text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{blurb}</p>
                <p className="mt-auto pt-6 text-sm font-bold text-gold-dark">
                  From R{price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
