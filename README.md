# SDLJS

This is a personal project for learning about creating shared objects in C and using them in other languages, such as TypeScript. It includes a custom TypeScript wrapper around the SDL2 library for creating native desktop games in TypeScript.

## Usage
Make sure you have SDL2 installed on your system. You can download the lastest release from [here](https://github.com/libsdl-org/SDL/releases/latest). Then, run the following command to compile the shared object:
```bash
make lib
```

After that you can run the TypeScript example with bun using the following command:
```bash
make bun
```
