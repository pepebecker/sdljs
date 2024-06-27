#include "SDL2/SDL_events.h"
#include <stdio.h>
#include <SDL2/SDL.h>

int running = 1;

void (*js_event_handler)(int, int);

void init() {
    if (SDL_Init(SDL_INIT_VIDEO) != 0) {
        printf("SDL_Init Error: %s\n", SDL_GetError());
        return;
    }
}

void set_event_handler(void (*handler)(int, int)) {
    js_event_handler = handler;
}

const Uint8* get_keyboard_state(int *numkeys) {
    return SDL_GetKeyboardState(numkeys);
}

void run(void (*js_frame)(double)) {
    Uint64 NOW = SDL_GetPerformanceCounter();
    Uint64 LAST = 0;

    SDL_Event event;
    while (running) {
        while (SDL_PollEvent(&event)) {
            if (js_event_handler != NULL) {
                if (event.type == SDL_KEYDOWN || event.type == SDL_KEYUP) {
                    js_event_handler(event.type, event.key.keysym.sym);
                    continue;
                }
                js_event_handler(event.type, 0);
            }
        }

        LAST = NOW;
        NOW = SDL_GetPerformanceCounter();
        double deltaTime = (double)((NOW - LAST)*1000 / (double)SDL_GetPerformanceFrequency());

        if (js_frame != NULL) {
            js_frame(deltaTime);
        }
    }
    SDL_Quit();
}

void quit() {
    exit(0);
}
