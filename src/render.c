#include "renderer.h"

void set_render_draw_color(int rendererId, int r, int g, int b, int a) {
    SDL_Renderer *renderer = get_renderer(rendererId);
    if (!renderer) return;
    SDL_SetRenderDrawColor(renderer, r, g, b, a);
}

void set_render_blend_mode(int rendererId, int blendMode) {
    SDL_Renderer *renderer = get_renderer(rendererId);
    if (!renderer) return;
    SDL_SetRenderDrawBlendMode(renderer, blendMode);
}

void render_clear(int rendererId) {
    SDL_Renderer *renderer = get_renderer(rendererId);
    if (!renderer) return;
    SDL_RenderClear(renderer);
}

void render_present(int rendererId) {
    SDL_Renderer *renderer = get_renderer(rendererId);
    if (!renderer) return;
    SDL_RenderPresent(renderer);
}

void render_draw_rect(int rendererId, int x, int y, int w, int h) {
    SDL_Renderer *renderer = get_renderer(rendererId);
    if (!renderer) return;
    SDL_Rect rect = { x, y, w, h };
    SDL_RenderDrawRect(renderer, &rect);
}

void render_fill_rect(int rendererId, int x, int y, int w, int h) {
    SDL_Renderer *renderer = get_renderer(rendererId);
    if (!renderer) return;
    SDL_Rect rect = { x, y, w, h };
    SDL_RenderFillRect(renderer, &rect);
}

