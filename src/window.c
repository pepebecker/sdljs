#include "SDL2/SDL_video.h"

int create_window(const char *title, int x, int y, int w, int h) {
    if (x == -1) x = SDL_WINDOWPOS_UNDEFINED;
    if (y == -1) y = SDL_WINDOWPOS_UNDEFINED;
    if (x == -2) x = SDL_WINDOWPOS_CENTERED;
    if (y == -2) y = SDL_WINDOWPOS_CENTERED;
    SDL_Window *window = SDL_CreateWindow(title, x, y, w, h, SDL_WINDOW_SHOWN);
    if (window == NULL) {
        printf("SDL_CreateWindow Error: %s\n", SDL_GetError());
        return -1;
    }
    return SDL_GetWindowID(window);
}

SDL_Window *get_window(int id) {
    return SDL_GetWindowFromID(id);
}

const int *get_window_position(int id) {
    int x, y;
    SDL_GetWindowPosition(get_window(id), &x, &y);
    return (const int[]){x, y};
}

const int *get_window_size(int id) {
    int w, h;
    SDL_GetWindowSize(get_window(id), &w, &h);
    return (const int[]){w, h};
}

void raise_window(int id) {
    SDL_RaiseWindow(get_window(id));
}

void set_window_always_on_top(int id, int on) {
    SDL_SetWindowAlwaysOnTop(get_window(id), on);
}

void destroy_window(int id) {
    SDL_DestroyWindow(get_window(id));
}

