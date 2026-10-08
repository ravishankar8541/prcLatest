"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { KitchenSinkProduct } from "./kitchen-sink-data";

export default function KitchenSinkCard({ product }: { product: KitchenSinkProduct }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const titleId = `sink-detail-${product.id}`;
  const name = `${product.name} — ${product.variant}, ${product.size}`;
  const cardName = `${product.variant} Kitchen Sink`;
  const enquiry = `https://wa.me/919643332209?text=${encodeURIComponent(
    `Hello PRC, please share details and availability for the ${product.range} ${product.variant} kitchen sink (${product.size}).`,
  )}`;

  useEffect(() => {
    if (!open) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <article className="sink-product-card">
      <button className="sink-product-card__trigger" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-label={`View details for ${name}`}>
        <span className="sink-product-card__image">
          <Image src={product.image} alt={name} fill sizes="(max-width: 640px) 90vw, (max-width: 820px) 44vw, 420px" unoptimized />
        </span>
        <span className="sink-product-card__name">{cardName}</span>
      </button>

      <dialog className="sink-detail" ref={dialog} aria-labelledby={titleId} onClose={() => setOpen(false)} onClick={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}>
        {open && <div className="sink-detail__panel">
          <button className="sink-detail__close" aria-label="Close product details" onClick={() => setOpen(false)} autoFocus>×</button>
          <div className="sink-detail__image">
            <Image src={product.image} alt={name} fill sizes="(max-width: 760px) 90vw, 480px" unoptimized />
          </div>
          <div className="sink-detail__body">
            <p className="sink-detail__collection">{product.range} / {product.variant}</p>
            <h2 id={titleId}>{product.name}</h2>
            <p className="sink-detail__size">{product.size}</p>
            <h3>Product details</h3>
            <dl>
              <div><dt>Brand</dt><dd>PRC</dd></div>
              <div><dt>Collection</dt><dd>{product.range} / {product.variant}</dd></div>
              <div><dt>Size</dt><dd>{product.size}</dd></div>
              {product.specs.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}
            </dl>
            {product.packing && <div className="sink-detail__packing"><h3>Packing details</h3><p>{product.packing}</p></div>}
            {product.specs.length === 0 && <p className="sink-detail__note">Contact PRC for additional product specifications.</p>}
            <a className="sink-button sink-button--gold" href={enquiry} target="_blank" rel="noopener noreferrer">Inquiry Now <span aria-hidden="true">↗</span></a>
          </div>
        </div>}
      </dialog>
    </article>
  );
}
