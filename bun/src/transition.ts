import { sdl } from "@sdl";
import { type WindowID } from "@sdl/window";
import { type Player } from "./player";

export function clamp(x: number, min: number, max: number) {
  if (x < min) return min;
  if (x > max) return max;
  return x;
}

export function getWindowBounds(win: WindowID) {
  const [l, t] = sdl.getWindowPosition(win);
  const [w, h] = sdl.getWindowSize(win);
  if (typeof l !== 'number') return null;
  if (typeof t !== 'number') return null;
  if (typeof w !== 'number') return null;
  if (typeof h !== 'number') return null;
  return { l, t, r: l + w + 2, b: t + h + 2 };
}

export function isWindowIntersecting(win1: WindowID, win2: WindowID) {
  const w1 = getWindowBounds(win1);
  const w2 = getWindowBounds(win2);

  if (w1 === null || w2 === null) return false;

  if (w1.r <= w2.l || w1.b <= w2.t || w2.r <= w1.l || w2.b <= w1.t) {
    return false;
  }

  return true;
}

export function isPlayerTouchingScreenEdge(player: Player) {
  const [w, h] = sdl.getWindowSize(player.win);
  if (typeof w !== 'number') return false;
  if (typeof h !== 'number') return false;
  if (player.x <= 0) return true;
  if (player.y <= 0) return true;
  if (player.x >= w - player.w) return true;
  if (player.y >= h - player.h) return true;
  return false;
}

export function canPlayerMoveTo(player: Player, win: WindowID) {
  if (win === player.win) return false;
  const w = getWindowBounds(win);
  if (w === null) return false;
  if (!isWindowIntersecting(player.win, win)) return false;
  return true;
}
