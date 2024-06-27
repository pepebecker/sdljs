#ifndef WINDOW_H
#define WINDOW_H

#include "SDL2/SDL_video.h"

int create_window(const char *title, int x, int y, int w, int h);
SDL_Window *get_window(int id);
void destroy_window(int id);

#endif
