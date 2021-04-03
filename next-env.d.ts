/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '*.md' {
    const attributes: Record<string, unknown>;
    export { attributes };
}