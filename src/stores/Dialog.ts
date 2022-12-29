import { Awaitable } from "@sapphire/utilities";
import { Piece } from "@skyra/http-framework";

export abstract class Dialog extends Piece {
    public constructor(context: Piece.Context, public options: DialogOptions) {
        super(context, options);
    }

    public abstract init(): Awaitable<DialogChat | DialogChat[]>;
    public abstract end(): Awaitable<DialogChat | DialogChat[]>;
}

export interface DialogChat {
    type: ChatType;
    message?: string;
    continue?: DialogChat | DialogChat[];
    choices?: DialogChatChoice[];
}

export interface DialogChatChoice {
    label: string;
    value: DialogChat | DialogChat[];
    name: string;
}

export enum ChatType {
    Cowok = 0,
    Cewek = 1,
    MultipleChoices = 2
}

export interface DialogOptions extends Piece.Options {
    identifier: string;
    author: string;
}
