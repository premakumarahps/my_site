"use client";

import { useEffect } from "react";

/**
 * Custom hook to safely manage locking and unlocking body scroll.
 * Uses reference counting on document.body.dataset to prevent collisions
 * between multiple open modals or menus.
 */
export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    const currentCount = parseInt(document.body.dataset.scrollLockCount || "0", 10);
    document.body.dataset.scrollLockCount = String(currentCount + 1);

    if (currentCount === 0) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      const activeCount = parseInt(document.body.dataset.scrollLockCount || "0", 10);
      const newCount = Math.max(0, activeCount - 1);

      if (newCount === 0) {
        delete document.body.dataset.scrollLockCount;
        document.body.style.overflow = "";
      } else {
        document.body.dataset.scrollLockCount = String(newCount);
      }
    };
  }, [isLocked]);
}
