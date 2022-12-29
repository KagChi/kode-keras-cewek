import { Store } from "@skyra/http-framework";
import { Dialog } from "./Dialog.js";

export class DialogStore extends Store<Dialog> {
    public constructor() {
        super(Dialog, { name: "dialogs" });
    }
}
