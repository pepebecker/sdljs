import { lib } from "./lib";
import { WindowID } from "./window";

export type RendererID = number;

export function createRenderer(winId: WindowID): RendererID {
  return lib.symbols.create_renderer(winId);
}

export function destroyRenderer(renId: RendererID) {
  lib.symbols.destroy_renderer(renId);
}
