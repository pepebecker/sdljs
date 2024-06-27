#include "SDL2/SDL_render.h"
#include "uthash.h"
#include "window.h"

typedef struct {
    int id;
    SDL_Renderer *renderer;
    UT_hash_handle hh;  // makes this structure hashable
} RendererEntry;

RendererEntry *renderers = NULL;
int next_renderer_id = 1;

int create_renderer(int winId) {
    SDL_Window *window = get_window(winId);
    if (window == NULL) {
        printf("Window not found\n");
        return -1;
    }

    RendererEntry *entry = malloc(sizeof(RendererEntry));
    if (!entry) {
        printf("Failed to allocate memory for renderer entry\n");
        return -1;
    }

    entry->renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED);
    if (!entry->renderer) {
        printf("SDL_CreateRenderer Error: %s\n", SDL_GetError());
        free(entry);
        return -1;
    }

    entry->id = next_renderer_id++;
    HASH_ADD_INT(renderers, id, entry);
    return entry->id;
}

SDL_Renderer *get_renderer(int id) {
    RendererEntry *entry;
    HASH_FIND_INT(renderers, &id, entry);
    if (!entry) {
        printf("Renderer not found\n");
        return NULL;
    }
    return entry->renderer;
}

void destroy_renderer(int id) {
    RendererEntry *entry = NULL;
    HASH_FIND_INT(renderers, &id, entry);
    if (!entry) {
        printf("Renderer not found\n");
        return;
    }
    SDL_DestroyRenderer(entry->renderer);
    HASH_DEL(renderers, entry);
    free(entry);
}
