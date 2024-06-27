import { read } from "bun:ffi";
import { lib } from "./lib";

export type WindowID = number;

export const SDL_WINDOWPOS_UNDEFINED = 0x1FFF0000;
export const SDL_WINDOWPOS_CENTERED = 0x2FFF0000;

export function createWindow(title: string, x: number, y: number, w: number, h: number): WindowID {
  if (!title) title = "Untitled";
  if (typeof x === "undefined") x = SDL_WINDOWPOS_UNDEFINED
  if (typeof y === "undefined") y = SDL_WINDOWPOS_UNDEFINED
  if (typeof w === "undefined") w = 640;
  if (typeof h === "undefined") h = 480;
  return lib.symbols.create_window(Buffer.from(title + '\0', "utf8"), x, y, w, h);
}

export function getWindowPosition(winId: WindowID) {
  const ptr = lib.symbols.get_window_position(winId);
  if (ptr == null) return [null, null];
  const wx = read.i32(ptr);
  const wy = read.i32(ptr + 4 as any);
  if (wx > 9999999 || wy > 9999999) return [null, null];
  return [wx, wy];
}

export function getWindowSize(winId: WindowID) {
  const ptr = lib.symbols.get_window_size(winId);
  if (ptr == null) return [null, null];
  const w = read.i32(ptr);
  const h = read.i32(ptr + 4 as any);
  if (w > 9999999 || h > 9999999) return [null, null];
  return [w, h];
}

export function raiseWindow(winId: WindowID) {
  lib.symbols.raise_window(winId);
}

export function setWindowAlwaysOnTop(winId: WindowID, on: boolean) {
  lib.symbols.set_window_always_on_top(winId, on ? 1 : 0);
}

export function destroyWindow(winId: WindowID) {
  lib.symbols.destroy_window(winId);
}
