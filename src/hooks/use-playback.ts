"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import type { ConversationTurn } from "@/types/learning";

/**
 * Reveals a scripted conversation turn by turn, with a typing pause before
 * each tutor message. A live tutor session can replace this with streamed turns.
 */
export function usePlayback(turns: ConversationTurn[], start: boolean, replayKey: number) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!start) return;
    const timers: number[] = [];
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));

    at(0, () => {
      setTyping(false);
      setVisible(reduce ? turns.length : 0);
    });
    if (reduce) return () => timers.forEach(clearTimeout);

    let time = 350;
    turns.forEach((turn, i) => {
      if (turn.speaker === "tutor") {
        at(time, () => setTyping(true));
        time += 950;
      } else {
        time += 650;
      }
      at(time, () => {
        setTyping(false);
        setVisible(i + 1);
      });
      time += 600 + turn.text.length * 14;
    });

    return () => timers.forEach(clearTimeout);
  }, [turns, start, replayKey, reduce]);

  return { visible, typing, done: visible >= turns.length };
}
