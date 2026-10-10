"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, summary, label, [role='button'], [role='link']";
const NATIVE_CURSOR = "[data-native-cursor], input, textarea, select, [contenteditable='true']";

function labelFor(element: Element) {
  const link = element.closest("a");
  if (link instanceof HTMLAnchorElement) {
    const href = link.getAttribute("href") ?? "";
    if (href.startsWith("tel:")) return "Call";
    if (href.startsWith("mailto:")) return "Mail";
    if (href.includes("wa.me") || href.includes("whatsapp")) return "Chat";
    if (href.includes("maps")) return "Map";
    return "View";
  }
  return "Open";
}

function isGoldColor(color: string) {
  const match = color.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s/]+([\d.]+))?/);
  if (!match) return false;
  const red = Number(match[1]);
  const green = Number(match[2]);
  const blue = Number(match[3]);
  const alpha = match[4] === undefined ? 1 : Number(match[4]);
  return alpha > 0.45 && red > 185 && green > 145 && blue < 130 && red - blue > 70;
}

function surfaceIsGold(start: Element | null) {
  let node = start;
  for (let depth = 0; depth < 5 && node; depth += 1) {
    if (isGoldColor(getComputedStyle(node).backgroundColor)) return true;
    node = node.parentElement;
  }
  return false;
}

export default function PremiumCursor() {
  const followRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLSpanElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorMedia = window.matchMedia(
      "(min-width: 821px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const follow = followRef.current;
    const shape = shapeRef.current;
    const label = labelRef.current;
    const dot = dotRef.current;
    if (!follow || !shape || !label || !dot) return;

    const root = document.documentElement;

    let x = 0;
    let y = 0;
    let ringX = 0;
    let ringY = 0;
    let aimX = 0;
    let aimY = 0;
    let vx = 0;
    let vy = 0;
    let scale = 1;
    let hovering = false;
    let pressed = false;
    let placed = false;
    let currentLabel = "";
    let frame = 0;

    const paint = () => {
      vx += (aimX - ringX) * 0.2;
      vy += (aimY - ringY) * 0.2;
      vx *= 0.7;
      vy *= 0.7;
      ringX += vx;
      ringY += vy;

      const targetScale = (hovering ? 2.35 : 1) * (pressed ? 0.84 : 1);
      scale += (targetScale - scale) * 0.16;

      const speed = Math.hypot(vx, vy);
      const stretch = hovering ? 1 : Math.min(1.5, 1 + speed / 70);
      const angle = Math.atan2(vy, vx);

      follow.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      shape.style.transform = `rotate(${angle}rad) scale(${stretch}, ${Math.max(0.74, 1 / stretch)})`;
      label.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = window.requestAnimationFrame(paint);
    };

    const onLeave = () => {
      hovering = false;
      pressed = false;
      placed = false;
      vx = 0;
      vy = 0;
      scale = 1;
      follow.classList.remove("is-visible", "is-hover", "is-on-gold");
      label.classList.remove("is-visible");
      dot.classList.remove("is-visible");
      root.classList.remove("has-premium-cursor");
      window.cancelAnimationFrame(frame);
      frame = 0;
    };

    const onMove = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (event.pointerType !== "mouse" || !cursorMedia.matches || target?.closest(NATIVE_CURSOR)) {
        onLeave();
        return;
      }

      root.classList.add("has-premium-cursor");
      x = event.clientX;
      y = event.clientY;
      if (!placed) {
        placed = true;
        ringX = x;
        ringY = y;
        aimX = x;
        aimY = y;
      }

      follow.classList.add("is-visible");
      dot.classList.add("is-visible");

      const interactive = target?.closest(INTERACTIVE) ?? null;
      hovering = Boolean(interactive);
      const onGold = hovering && surfaceIsGold(interactive);
      follow.classList.toggle("is-hover", hovering);
      follow.classList.toggle("is-on-gold", onGold);
      label.classList.toggle("is-visible", hovering);

      aimX = x;
      aimY = y;
      if (interactive) {
        const rect = interactive.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(centerX - x, centerY - y);
        if (distance < 150 && rect.width < 280) {
          aimX = x + (centerX - x) * 0.34;
          aimY = y + (centerY - y) * 0.34;
        }
      }

      const nextLabel = interactive ? labelFor(interactive) : "";
      if (nextLabel !== currentLabel) {
        currentLabel = nextLabel;
        label.textContent = nextLabel;
      }
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    const onDown = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (event.pointerType !== "mouse" || !cursorMedia.matches || target?.closest(NATIVE_CURSOR)) {
        onLeave();
        return;
      }
      pressed = true;
    };

    const onUp = () => {
      pressed = false;
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    cursorMedia.addEventListener("change", onLeave);

    return () => {
      onLeave();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      cursorMedia.removeEventListener("change", onLeave);
    };
  }, []);

  return (
    <>
      <div className="premium-cursor" ref={followRef} aria-hidden="true">
        <span className="premium-cursor__shape" ref={shapeRef} />
      </div>
      <span className="premium-cursor__label" ref={labelRef} aria-hidden="true" />
      <div className="premium-cursor__dot" ref={dotRef} aria-hidden="true" />
    </>
  );
}
