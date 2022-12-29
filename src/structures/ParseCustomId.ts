/* eslint-disable class-methods-use-this */
import { IdParserRead, StringIdParser } from "@skyra/http-framework";
import { Util } from "../Util.js";

export class ParseCustomId extends StringIdParser {
    public run(customId: string): IdParserRead | null {
        try {
            return Util.decodeBase65536(customId);
        } catch {
            return null;
        }
    }
}
