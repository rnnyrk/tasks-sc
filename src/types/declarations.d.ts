// REQUIRED TO TURN THIS FILE INTO A MODULE -- DO NOT REMOVE
export {};

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  // We have to declare how files other than .ts(x) or .js(x) are handled by our codebase because
  // Typescript does not know we are handling these files with Webpack.
  declare module '*.otf' {
    const value: string;
    export = value;
  }
  declare module '*.ttf' {
    const value: string;
    export = value;
  }
  declare module '*.woff' {
    const value: string;
    export = value;
  }
  declare module '*.woff2' {
    const value: string;
    export = value;
  }
  declare module '*.eot' {
    const value: string;
    export = value;
  }
}
