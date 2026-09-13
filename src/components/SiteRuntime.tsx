'use client';

import { useEffect } from 'react';
import vendorScripts from '@/lib/vendor-scripts.json';

declare global {
  interface Window {
    mountSuiball?: () => () => void;
    suiballReady?: boolean;
    suiballError?: string;
  }
}

// Keep the captured interaction engine, while React owns the editable page markup.
// Scripts must load in dependency order, after React has hydrated the page.
let vendorReady: Promise<void> | undefined;
function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Could not load ${src}`));
    document.body.appendChild(script);
  });
}

function prepareVendors() {
  vendorReady ??= (async () => {
    await document.fonts.ready;
    for (const src of vendorScripts) await loadScript(src);
    await loadScript('/suiball-interactions.js');
  })();
  return vendorReady;
}

export default function SiteRuntime() {
  useEffect(() => {
    let active = true;
    let dispose: (() => void) | undefined;
    if ('ontouchstart' in window) document.documentElement.classList.add('w-mod-touch');
    prepareVendors().then(() => {
      if (!active) return;
      dispose = window.mountSuiball?.();
      window.suiballReady = true;
    }).catch((error: Error) => {
      window.suiballError = error.message;
      console.error(error);
      // Keep the actual content visible if an animation dependency fails.
      document.documentElement.classList.remove('w-mod-js');
    });
    return () => {
      active = false;
      dispose?.();
      window.suiballReady = false;
    };
  }, []);
  return null;
}
