import { sdl } from "@sdl";
import { type WindowID } from "@sdl/window";
import type { RendererID } from "@sdl/renderer";
import { SDL_QUIT } from "@sdl/events";
import { SDL_SCANCODE_DOWN, SDL_SCANCODE_LEFT, SDL_SCANCODE_RIGHT, SDL_SCANCODE_UP } from "@sdl/scancode";
import { type Player } from "./player";
import { clamp, isPlayerTouchingScreenEdge, canPlayerMoveTo } from "./transition";

export const SCREEN_WIDTH = 256;
export const SCREEN_HEIGHT = 256;
const renderers: Record<WindowID, RendererID> = {};

sdl.init();
const win1 = sdl.createWindow('Window 1', 128, 128, SCREEN_WIDTH, SCREEN_HEIGHT);
const win2 = sdl.createWindow('Window 2', 128 + SCREEN_WIDTH, 128, SCREEN_WIDTH, SCREEN_HEIGHT);
sdl.raiseWindow(win1);
sdl.raiseWindow(win2);
renderers[win1] = sdl.createRenderer(win1);
renderers[win2] = sdl.createRenderer(win2);

export const player: Player = { x: 64, y: 64, w: 32, h: 32, win: win1 };

sdl.setEventHandler((type) => {
  if (type === SDL_QUIT) {
    sdl.destroyRenderer(renderers[win1]);
    sdl.destroyRenderer(renderers[win2]);
    sdl.destroyWindow(win1);
    sdl.destroyWindow(win2);
    sdl.quit();
  }
});

function handlePlayerWindowTransitions() {
  if (!isPlayerTouchingScreenEdge(player)) return;
  for (const w of Object.keys(renderers).filter(w => parseInt(w) !== player.win)) {
    const win = parseInt(w);
    if (canPlayerMoveTo(player, win)) {
      if (player.x > SCREEN_WIDTH - player.w) {
        player.win = win;
        player.x = player.x - SCREEN_WIDTH;
      }
      return
    } else {
      const [w, h] = sdl.getWindowSize(player.win);
      if (typeof w !== 'number') return;
      if (typeof h !== 'number') return;
      player.x = clamp(player.x, 0, w - player.w);
      player.y = clamp(player.y, 0, h - player.h);
    }
  }
}

function update(dt: number) {
  if (sdl.isKeyDown(SDL_SCANCODE_LEFT)) {
    player.x -= dt;
  }
  if (sdl.isKeyDown(SDL_SCANCODE_RIGHT)) {
    player.x += dt;
  }
  if (sdl.isKeyDown(SDL_SCANCODE_UP)) {
    player.y -= dt;
  }
  if (sdl.isKeyDown(SDL_SCANCODE_DOWN)) {
    player.y += dt;
  }
  handlePlayerWindowTransitions();
}

function clearScreen(ren: RendererID) {
  sdl.setRenderDrawColor(ren, 0, 0, 0, 255);
  sdl.renderClear(ren);
}

function renderPlayer() {
  const win = player.win;
  sdl.setRenderDrawColor(renderers[win], 255, 0, 0, 255);
  sdl.renderFillRect(renderers[win], player.x, player.y, player.w, player.h);
}

function render() {
  clearScreen(renderers[win1]);
  clearScreen(renderers[win2]);

  renderPlayer();

  sdl.renderPresent(renderers[win1]);
  sdl.renderPresent(renderers[win2]);
}

sdl.run((deltaTime) => {
  update(deltaTime);
  render();
});
