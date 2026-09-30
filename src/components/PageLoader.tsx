"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let leaveTimer = 0;
    let removeTimer = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finish = () => {
      if (reduceMotion) {
        setVisible(false);
        return;
      }
      leaveTimer = window.setTimeout(() => setLeaving(true), 250);
      removeTimer = window.setTimeout(() => setVisible(false), 800);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;
  return <div className={`page-loader${leaving ? " is-leaving" : ""}`} role="status" aria-label="Loading Atul Rathod’s website">
    <span className="loader-kicker">SOFTWARE QUALITY · PORTFOLIO</span>
    <span className="loader-mark" aria-hidden="true">AR</span>
    <strong>Atul Ganesh Rathod</strong>
    <span className="loader-caption">Preparing the details</span>
    <span className="loader-track" aria-hidden="true"><i /></span>
  </div>;
}
