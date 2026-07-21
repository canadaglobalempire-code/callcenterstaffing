'use client';

import { useEffect, useState } from 'react';

/**
 * Hero background video, deferred.
 *
 * The source file is ~8.2MB. Loading it eagerly meant it competed with the LCP
 * element for bandwidth on first paint, and mobile users paid the full download
 * for a decorative background. So:
 *
 *  - The poster paints immediately (plain <img>, no video element at all).
 *  - The <video> only mounts after the page has loaded, and only on viewports
 *    wide enough for the motion to actually read.
 *  - Respects prefers-reduced-motion and the Save-Data hint.
 *
 * Result: LCP is decided by the poster, never by the video.
 */
export function HeroVideo() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const isNarrow = window.matchMedia('(max-width: 1023px)').matches;
    const saveData = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection?.saveData;

    if (prefersReducedMotion || isNarrow || saveData) return;

    // Wait until after load so the video never competes with LCP.
    const start = () => setShowVideo(true);
    if (document.readyState === 'complete') {
      const id = window.setTimeout(start, 200);
      return () => window.clearTimeout(id);
    }
    window.addEventListener('load', start, { once: true });
    return () => window.removeEventListener('load', start);
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        aria-hidden
        alt=""
        src="/images/cc-office-wide.jpg"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {showVideo && (
        <video
          aria-hidden
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/cc-office-wide.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
}
