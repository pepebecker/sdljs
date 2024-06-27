import { JSCallback, read } from "bun:ffi";
import { lib } from "./lib";
import { createWindow, destroyWindow, getWindowPosition, getWindowSize, raiseWindow, setWindowAlwaysOnTop } from "./window";
import { type RendererID, createRenderer, destroyRenderer } from "./renderer";

export function init() {
  lib.symbols.init();
}

export function setEventHandler(onEvent: (type: number, data: string) => any) {
  lib.symbols.set_event_handler(new JSCallback(onEvent, { returns: 'void', args: ['int', 'cstring'] }));
}

export function getKeyboardState() {
  return lib.symbols.get_keyboard_state(null);
}

export function isKeyDown(key: number) {
  const ptr = getKeyboardState();
  if (ptr == null) return 0;
  return read.u8(ptr, key);
}

export function run(onFrame: (deltaTime: number) => any) {
  if (!onFrame) throw new Error("onFrame callback is required");
  const cbFrame = new JSCallback(onFrame, { returns: 'void', args: ['double'] })
  lib.symbols.run(cbFrame);
}

export function quit() {
  lib.symbols.quit();
}

export function setRenderDrawColor(renId: RendererID, r: number, g: number, b: number, a: number) {
  lib.symbols.set_render_draw_color(renId, r, g, b, a);
}

export function renderClear(renId: RendererID) {
  lib.symbols.render_clear(renId);
}

export function renderPresent(renId: RendererID) {
  lib.symbols.render_present(renId);
}

export function renderFillRect(renId: RendererID, x: number, y: number, w: number, h: number) {
  lib.symbols.render_fill_rect(renId, x, y, w, h);
}

export const sdl = {
  init,
  setEventHandler,
  isKeyDown,
  run,
  quit,
  createWindow,
  getWindowPosition,
  getWindowSize,
  raiseWindow,
  setWindowAlwaysOnTop,
  destroyWindow,
  createRenderer,
  destroyRenderer,
  setRenderDrawColor,
  renderClear,
  renderPresent,
  renderFillRect,
}
