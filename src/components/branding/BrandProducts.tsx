import Image from "next/image";

type Product = {
  title: string;
  blurb: string;
  /** Entry price, rand. Rendered as "From R{price}". */
  price: string;
  src: string;
  alt: string;
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
  },
];

export default function BrandProducts() {
  return (
    <section id="products" className="bg-cream py-20 lg:py-24">
      <div className="container-px">
        {/* Same header shape as the Brand Catalogue above it, so the two
            sections read as a pair rather than two different layouts. */}
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-dark">
              OUR BRANDING PRODUCTS
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Everything You Need
              <br />
              <span className="text-gold-dark">to Represent Your Brand</span>
            </h2>
          </div>
          <p className="text-body text-sm leading-relaxed lg:pt-2">
            High-quality branded items that help you make a lasting impression
            everywhere your business goes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map(({ title, blurb, price, src, alt }) => (
            <article
              key={title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-lg"
            >
              {/* Every product gets the same stage, so a tall banner and a flat
                  stack of cards still line up across the row. Square on purpose:
                  the mockups are all either 2:3 or 3:2, and in a square box those
                  reciprocal ratios render to the same area — a wider stage makes
                  the landscape shots look twice the size of the portrait ones.
                  The stage stays white because the mockups are shot on white with
                  no alpha, so any tint would show their edges as a rectangle.
                  Padding sits on the image so object-contain fits inside it. */}
              <div className="relative aspect-square">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                />
              </div>

              <div className="flex grow flex-col px-6 pb-6">
                <h3 className="text-lg font-extrabold leading-tight text-ink">
                  {title}
                </h3>
                {/* grow on the blurb absorbs the slack from shorter copy, so the
                    prices line up along the bottom of every card in a row */}
                <p className="mt-2 grow text-sm leading-relaxed text-body">
                  {blurb}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5 border-t border-black/[0.06] pt-4">
                  <span className="text-xs font-medium text-body">From</span>
                  <span className="text-lg font-extrabold text-gold-dark">
                    R{price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
