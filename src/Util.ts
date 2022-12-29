/* eslint-disable @typescript-eslint/no-extraneous-class */
import { decode, encode } from "base65536";

export class Util {
    public static decodeBase65536<T>(bufferOrString: Uint8Array | string): T {
        if (typeof bufferOrString === "string") bufferOrString = decode(bufferOrString);
        return JSON.parse(Buffer.from(bufferOrString.buffer, bufferOrString.byteOffset, bufferOrString.byteLength).toString("utf-8")) as T;
    }

    public static encodeBase65536(str: string): string {
        return encode(Buffer.from(str));
    }
}
