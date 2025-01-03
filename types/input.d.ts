// https://github.com/unified-naming-convention/NamingStandard/tree/main/api/input

/**
 * Returns whether the game's window is in focus. Must be true for other input
 * functions to work.
 * @returns Window focus.
 */
export declare function isrbxactive(): boolean;
/**
 * @alias isrbxactive
 * @hidden
 */
export declare const isgameactive: typeof isrbxactive | undefined;

/**
 * Simulates a left mouse button click.
 */
export declare function mouse1click(): void;

/**
 * Simulates a left mouse button press.
 */
export declare function mouse1press(): void;

/**
 * Simulates a left mouse button release.
 */
export declare function mouse1release(): void;

/**
 * Simulates a right mouse button click.
 */
export declare function mouse2click(): void;

/**
 * Simulates a right mouse button press.
 */
export declare function mouse2press(): void;

/**
 * Simulates a right mouse button release.
 */
export declare function mouse2release(): void;

/**
 * Moves the mouse to the given coordinates.
 * @param x The x coordinate.
 * @param y The y coordinate.
 */
export declare function mousemoveabs(x: number, y: number): void;

/**
 * Adjusts the mouse position by the given amount.
 * @param x The x offset.
 * @param y The y offset.
 */
export declare function mousemoverel(x: number, y: number): void;

/**
 * Simulates a mouse scroll by `pixels`.
 */
export declare function mousescroll(pixels: number): void;
