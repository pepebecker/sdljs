export const SDL_FIRSTEVENT = 0

/* Application events */
export const SDL_QUIT = 0x100

/* These application events have special meaning on iOS  see README-ios.md for details */
export const SDL_APP_TERMINATING = 0x101
export const SDL_APP_LOWMEMORY = 0x102
export const SDL_APP_WILLENTERBACKGROUND = 0x103
export const SDL_APP_DIDENTERBACKGROUND = 0x104
export const SDL_APP_WILLENTERFOREGROUND = 0x105
export const SDL_APP_DIDENTERFOREGROUND = 0x106
export const SDL_LOCALECHANGED = 0x107

/* Display events */
export const SDL_DISPLAYEVENT = 0x150

/* Window events */
export const SDL_WINDOWEVENT = 0x200
export const SDL_SYSWMEVENT = 0x201

/* Keyboard events */
export const SDL_KEYDOWN = 0x300
export const SDL_KEYUP = 0x301
export const SDL_TEXTEDITING = 0x302
export const SDL_TEXTINPUT = 0x303
export const SDL_KEYMAPCHANGED = 0x304
export const SDL_TEXTEDITING_EXT = 0x305

/* Mouse events */
export const SDL_MOUSEMOTION = 0x400
export const SDL_MOUSEBUTTONDOWN = 0x401
export const SDL_MOUSEBUTTONUP = 0x402
export const SDL_MOUSEWHEEL = 0x403

/* Joystick events */
export const SDL_JOYAXISMOTION = 0x600
export const SDL_JOYBALLMOTION = 0x601
export const SDL_JOYHATMOTION = 0x602
export const SDL_JOYBUTTONDOWN = 0x603
export const SDL_JOYBUTTONUP = 0x604
export const SDL_JOYDEVICEADDED = 0x605
export const SDL_JOYDEVICEREMOVED = 0x606
export const SDL_JOYBATTERYUPDATED = 0x607

/* Game controller events */
export const SDL_CONTROLLERAXISMOTION = 0x650
export const SDL_CONTROLLERBUTTONDOWN = 0x651
export const SDL_CONTROLLERBUTTONUP = 0x652
export const SDL_CONTROLLERDEVICEADDED = 0x653
export const SDL_CONTROLLERDEVICEREMOVED = 0x654
export const SDL_CONTROLLERDEVICEREMAPPED = 0x655
export const SDL_CONTROLLERTOUCHPADDOWN = 0x656
export const SDL_CONTROLLERTOUCHPADMOTION = 0x657
export const SDL_CONTROLLERTOUCHPADUP = 0x658
export const SDL_CONTROLLERSENSORUPDATE = 0x659
export const SDL_CONTROLLERUPDATECOMPLETE_RESERVED_FOR_SDL3 = 0x65A
export const SDL_CONTROLLERSTEAMHANDLEUPDATED = 0x65B

/* Touch events */
export const SDL_FINGERDOWN = 0x700
export const SDL_FINGERUP = 0x701
export const SDL_FINGERMOTION = 0x702

/* Gesture events */
export const SDL_DOLLARGESTURE = 0x800
export const SDL_DOLLARRECORD = 0x801
export const SDL_MULTIGESTURE = 0x802

/* Clipboard events */
export const SDL_CLIPBOARDUPDATE = 0x900

/* Drag and drop events */
export const SDL_DROPFILE = 0x1000
export const SDL_DROPTEXT = 0x1001
export const SDL_DROPBEGIN = 0x1002
export const SDL_DROPCOMPLETE = 0x1003

/* Audio hotplug events */
export const SDL_AUDIODEVICEADDED = 0x1100
export const SDL_AUDIODEVICEREMOVED = 0x1101

/* Sensor events */
export const SDL_SENSORUPDATE = 0x1200

/* Render events */
export const SDL_RENDER_TARGETS_RESET = 0x2000
export const SDL_RENDER_DEVICE_RESET = 0x2001

/* Internal events */
export const SDL_POLLSENTINEL = 0x7F00

export const SDL_USEREVENT = 0x8000

export const SDL_LASTEVENT = 0xFFFF
