import { resolve } from "path";
import { dlopen, FFIType } from "bun:ffi";

const libPath = resolve(import.meta.dir, "../../lib/libsdl.so");
export const lib = dlopen(libPath, {
  // General
  init: {
    args: [],
    returns: FFIType.void,
  },
  run: {
    args: [FFIType.function],
    returns: FFIType.void,
  },
  quit: {
    args: [],
    returns: FFIType.void,
  },

  // Event
  set_event_handler: {
    args: [FFIType.function],
    returns: FFIType.void,
  },
  get_keyboard_state: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },

  // Window
  create_window: {
    args: [FFIType.cstring, FFIType.int, FFIType.int, FFIType.int, FFIType.int],
    returns: FFIType.int,
  },
  get_window_position: {
    args: [FFIType.int],
    returns: FFIType.ptr,
  },
  get_window_size: {
    args: [FFIType.int],
    returns: FFIType.ptr,
  },
  raise_window: {
    args: [FFIType.int],
    returns: FFIType.void,
  },
  set_window_always_on_top: {
    args: [FFIType.int, FFIType.int],
    returns: FFIType.void,
  },
  destroy_window: {
    args: [FFIType.int],
    returns: FFIType.void,
  },

  // Renderer
  create_renderer: {
    args: [FFIType.int],
    returns: FFIType.int,
  },
  destroy_renderer: {
    args: [FFIType.int],
    returns: FFIType.void,
  },

  // Render
  set_render_draw_color: {
    args: [FFIType.int, FFIType.int, FFIType.int, FFIType.int, FFIType.int],
    returns: FFIType.void,
  },
  render_clear: {
    args: [FFIType.int],
    returns: FFIType.void,
  },
  render_present: {
    args: [FFIType.int],
    returns: FFIType.void,
  },
  render_draw_rect: {
    args: [FFIType.int, FFIType.int, FFIType.int, FFIType.int, FFIType.int],
    returns: FFIType.void,
  },
  render_fill_rect: {
    args: [FFIType.int, FFIType.int, FFIType.int, FFIType.int, FFIType.int],
    returns: FFIType.void,
  },
});
