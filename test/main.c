#include <stdbool.h>
#include <SDL2/SDL.h>

// core
void init(void);
void quit(void);

// window
int create_window(const char *title, int x, int y, int w, int h);
void destroy_window(int id);

// renderer
int create_renderer(int winId);
void destroy_renderer(int id);
void set_render_draw_color(int renId, Uint8 r, Uint8 g, Uint8 b, Uint8 a);
void render_clear(int renId);
void render_fill_rect(int renId, int x, int y, int w, int h);
void render_present(int renId);

int x = 50, y = 50;

int main(int argc, char **argv) {
  init();
  int winId = create_window("Pepe's Game", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, 640, 480);
  int renId = create_renderer(winId);

  SDL_Event event;
  bool running = true;
  while (running) {
    while (SDL_PollEvent(&event)) {
      if (event.type == SDL_QUIT) {
        running = false;
        break;
      }
    }

    const Uint8* keys = SDL_GetKeyboardState(NULL);

    if (keys[SDL_SCANCODE_A]) x -= 1;
    if (keys[SDL_SCANCODE_D]) x += 1;
    if (keys[SDL_SCANCODE_W]) y -= 1;
    if (keys[SDL_SCANCODE_S]) y += 1;

    set_render_draw_color(renId, 0, 0, 0, 255);
    render_clear(renId);
    set_render_draw_color(renId, 255, 0, 0, 255);
    render_fill_rect(renId, x, y, 64, 64);
    render_present(renId);
  }

  destroy_renderer(renId);
  destroy_window(winId);
  return 0;
}
