
// Typescript declaration for using webpack code splitting with ts-loader.
// For more information see:
//   https://github.com/TypeStrong/ts-loader#code-splitting-and-loading-other-resources
//   https://webpack.js.org/guides/code-splitting/
//

declare var require: {
    <T=string>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T=string>(path: string) => T) => void) => void;
};