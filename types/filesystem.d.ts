// https://github.com/unified-naming-convention/NamingStandard/tree/main/api/filesystem

/**
 * Append to the given file's contents. Creates a new file if it doesn't exist.
 * @param file The path to the file.
 * @param text The text to append.
 */
export declare function appendfile(file: string, text: string): void;

/**
 * Removes the file at the given path.
 * @param file The path to the file.
 */
export declare function delfile(file: string): void;

/**
 * Removes the directory at the given path.
 * @param directory The path to the directory.
 */
export declare function delfolder(directory: string): void;

/**
 * Attempts to load and run the given file.
 * @param file The path to the file.
 */
export declare function dofile(file: string): void;

/**
 * Check whether the given path points to a file.
 * @param path The path to verify.
 * @returns Whether the path is a file.
 */
export declare function isfile(path: string): boolean;

/**
 * Check whether the given path points to a directory.
 * @param path The path to verify.
 * @returns Whether the path is a directory.
 */
export declare function isfolder(path: string): boolean;

/**
 * Returns a list of file paths in the given directory.
 * @param directory The path to the directory.
 * @returns The list of files.
 */
export declare function listfiles(directory: string): readonly string[];

/**
 * Create a new directory at the given path.
 * @param directory The path to the directory.
 */
export declare function makefolder(directory: string): void;

/**
 * Load the given file and return its contents.
 * @param file The path to the file.
 * @returns The file's contents.
 */
export declare function readfile(file: string): string;

/**
 * Change the given file's contents. Creates a new file if it doesn't exist.
 * @param file The path to the file.
 * @param text The text to write.
 */
export declare function writefile(file: string, text: string): void;
