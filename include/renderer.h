#ifndef RENDERER_H
#define RENDERER_H

#include "SDL2/SDL_render.h"

int create_renderer(int winId);

SDL_Renderer *get_renderer(int id);

void destroy_renderer(int id);

#endif
