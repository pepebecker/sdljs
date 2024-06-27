.PHONY: bun
bun:
	cd bun && bun install
	cd bun && bun run src/index.ts

.PHONY: run
run: clean build
	@./bin/test

.PHONY: build
build: clean lib test

.PHONY: lib
lib:
	@mkdir -p lib
	gcc src/*.c -dynamiclib -o lib/libsdl.so -I./include -lSDL2

.PHONY: test
test:
	@mkdir -p bin
	gcc test/*.c -o bin/test -I./include -L./lib -lSDL2 -lsdl

.PHONY: clean
clean:
	@rm -rf bin
	@rm -rf lib

.PHONY: init
init:
	bear -- make build
