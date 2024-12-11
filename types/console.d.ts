// https://github.com/unified-naming-convention/NamingStandard/tree/main/api/console

/**
 * Clears the console window.
 */
export declare function rconsoleclear(): void;
/**
 * @alias rconsoleclear
 * @hidden
 */
export declare const consoleclear: typeof rconsoleclear | undefined;

/**
 * Opens an empty console window.
 */
export declare function rconsolecreate(): void;
/**
 * @alias rconsolecreate
 * @hidden
 */
export declare const consolecreate: typeof rconsolecreate | undefined;

/**
 * Closes the console window after clearing it.
 */
export declare function rconsoledestroy(): void;
/**
 * @alias rconsoledestroy
 * @hidden
 */
export declare const consoledestroy: typeof rconsoledestroy | undefined;

/**
 * Waits for the user to input text into the console window. Returns the text.
 * @returns The text entered by the user.
 */
export declare function rconsoleinput(): string;
/**
 * @alias rconsoleinput
 * @hidden
 */
export declare const consoleinput: typeof rconsoleinput | undefined;

/**
 * Prints the text to the console window. Some engines may allow you to change
 * text color via `@@@RED@@@`, `@@@BLUE@@@`, etc.
 * @param text The text to print.
 */
export declare function rconsoleprint(text: string): void;
/**
 * @alias rconsoleprint
 * @hidden
 */
export declare const consoleprint: typeof rconsoleprint | undefined;

/**
 * Sets the title of the console window.
 * @param title The title to set.
 */
export declare function rconsolesettitle(title: string): void;
/**
 * @alias rconsolesettitle
 * @hidden
 */
export declare const rconsolename: typeof rconsolesettitle | undefined;
/**
 * @alias rconsolesettitle
 * @hidden
 */
export declare const consolesettitle: typeof rconsolesettitle | undefined;
