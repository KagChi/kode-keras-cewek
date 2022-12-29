/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable class-methods-use-this */
import { Awaitable } from "@sapphire/utilities";
import { ChatType, Dialog, DialogChat } from "../stores/Dialog.js";
import { Piece } from "@skyra/http-framework";
import { Util } from "../Util.js";

export class TestDialog extends Dialog {
    public constructor(context: Piece.Context) {
        super(context, {
            identifier: "1ae120",
            author: "KagChi",
            name: "Nanyain skripsi"
        });
    }

    public init(): Awaitable<DialogChat | DialogChat[]> {
        return [
            {
                type: ChatType.Cewek,
                message: "Ayang!"
            },
            {
                type: ChatType.Cowok,
                message: "Yak"
            },
            {
                type: ChatType.Cewek,
                message: "Gimana skripsinya?"
            },
            {
                type: ChatType.Cowok,
                message: "Hehee 😅😅"
            },
            {
                type: ChatType.Cowok,
                message: "Ya gitu dah"
            },
            {
                type: ChatType.Cewek,
                message: "Belom selesai juga?"
            },
            {
                type: ChatType.Cewek,
                message: "Kamu tuh mo lulus kaga sih?",
                continue: this.cewekAskCowok_1()
            }
        ];
    }

    public cewekAskCowok_1(): DialogChat | DialogChat[] {
        return {
            type: ChatType.MultipleChoices,
            choices: [
                {
                    label: "Ya mau laah, aku juga capek",
                    value: this.cewekAskCowok_1_1(),
                    name: Util.encodeBase65536(JSON.stringify({
                        name: "playAction",
                        content: {
                            parent: this.options.identifier,
                            action: "cewekAskCowok_1_1"
                        }
                    }))
                },
                {
                    label: "Ini juga lagi dikerjain bawel",
                    value: this.cewekAskCowok_1_2(),
                    name: Util.encodeBase65536(JSON.stringify({
                        name: "playAction",
                        content: {
                            parent: this.options.identifier,
                            action: "cewekAskCowok_1_2"
                        }
                    }))
                },
                {
                    label: "Iya sayang, aku usahain terus",
                    value: this.cewekAskCowok_1_3(),
                    name: Util.encodeBase65536(JSON.stringify({
                        name: "playAction",
                        content: {
                            parent: this.options.identifier,
                            action: "cewekAskCowok_1_3"
                        }
                    }))
                }
            ]
        };
    }

    public cewekAskCowok_1_1(): DialogChat | DialogChat[] {
        return [
            {
                type: ChatType.Cowok,
                message: "Ya mau laah, aku juga capek"
            },
            {
                type: ChatType.Cewek,
                message: "Mau tapi males naujubilah"
            },
            {
                type: ChatType.Cewek,
                message: "Udah bab berapa emang?"
            },
            {
                type: ChatType.MultipleChoices,
                choices: [
                    {
                        label: "Udah bab 5",
                        value: this.cewekAskCowok_2_1(),
                        name: Util.encodeBase65536(JSON.stringify({
                            name: "playAction",
                            content: {
                                parent: this.options.identifier,
                                action: "cewekAskCowok_2_1"
                            }
                        }))
                    },
                    {
                        label: "Baru bab 2",
                        value: this.cewekAskCowok_2_2(),
                        name: Util.encodeBase65536(JSON.stringify({
                            name: "playAction",
                            content: {
                                parent: this.options.identifier,
                                action: "cewekAskCowok_2_2"
                            }
                        }))
                    }
                ]
            }
        ];
    }

    public cewekAskCowok_1_2(): DialogChat | DialogChat[] {
        return [
            {
                type: ChatType.Cewek,
                message: "Ihh, kok kamu galak !"
            },
            {
                type: ChatType.Cewek,
                message: "Aku kan cuma tanya !"
            },
            {
                type: ChatType.Cewek,
                message: "Kita putus !"
            }
        ];
    }

    public cewekAskCowok_1_3(): DialogChat | DialogChat[] {
        return [
            {
                type: ChatType.Cewek,
                message: "Emang kamu udah bab berapa?"
            },
            {
                type: ChatType.Cowok,
                message: "Anoo, baru bab 2 yang"
            },
            {
                type: ChatType.Cewek,
                message: "Ih kamu ga pernah baca bimbingan skripsi ya?"
            },
            {
                type: ChatType.Cowok,
                message: "Iya, aku baca"
            },
            {
                type: ChatType.Cowok,
                message: "Tapi aku ngebut, sayang"
            },
            {
                type: ChatType.Cewek,
                message: "Kamu ngebut tapi ga baca bimbingan skripsi?"
            },
            {
                type: ChatType.Cewek,
                message: "Kita putus !"
            }
        ];
    }

    public cewekAskCowok_2_1(): DialogChat | DialogChat[] {
        return [
            {
                type: ChatType.Cowok,
                message: "Udah bab 5"
            },
            {
                type: ChatType.Cewek,
                message: "Lah seriusan?"
            },
            {
                type: ChatType.Cewek,
                message: "Bukannya kemaren baru bimbingan bab 2?"
            },
            {
                type: ChatType.MultipleChoices,
                choices: [
                    {
                        label: "Aku ngebut, sayang",
                        value: this.cewekAskCowok_3_1(),
                        name: Util.encodeBase65536(JSON.stringify({
                            name: "playAction",
                            content: {
                                parent: this.options.identifier,
                                action: "cewekAskCowok_3_1"
                            }
                        }))
                    },
                    {
                        label: "Enggak deng, masih bab 2",
                        value: this.cewekAskCowok_3_2(),
                        name: Util.encodeBase65536(JSON.stringify({
                            name: "playAction",
                            content: {
                                parent: this.options.identifier,
                                action: "cewekAskCowok_3_2"
                            }
                        }))
                    }
                ]
            }
        ];
    }

    public cewekAskCowok_2_2(): DialogChat | DialogChat[] {
        return [
            {
                type: ChatType.Cowok,
                message: "Baru bab 2"
            },
            {
                type: ChatType.Cewek,
                message: "Lah seriusan? 10 BULAN KAMU NGAPAIN AJA ANJIR"
            },
            {
                type: ChatType.Cewek,
                message: "Kamu udah bimbingan skripsi kemaren?"
            },
            {
                type: ChatType.Cowok,
                message: "Iya, aku baca"
            },
            {
                type: ChatType.Cowok,
                message: "Tapi aku akan ngebut, sayang"
            },
            {
                type: ChatType.Cewek,
                message: "Awas ya kalo kamu ga lulus"
            },
            ...this.goodEnd()
        ];
    }

    public cewekAskCowok_3_1(): DialogChat | DialogChat[] {
        return [
            {
                type: ChatType.Cowok,
                message: "Aku ngebut, sayang"
            },
            {
                type: ChatType.Cewek,
                message: "Ya gak mungkin lah pe a"
            },
            ...this.badEnd()
        ];
    }

    public cewekAskCowok_3_2(): DialogChat | DialogChat[] {
        return [
            {
                type: ChatType.Cewek,
                message: "Oh jadi kamu bohong ke aku?"
            },
            {
                type: ChatType.Cewek,
                message: "Okelah kamu bohong"
            },
            ...this.badEnd()
        ];
    }

    public badEnd(): DialogChat[] {
        return [
            {
                type: ChatType.Cewek,
                message: "Urusin kuliah aja ga bener"
            },
            {
                type: ChatType.Cewek,
                message: "Apalagi urusin aku, tambah ga bener"
            },
            {
                type: ChatType.Cewek,
                message: "Umur kamu tuh udah 26 tahun"
            },
            {
                type: ChatType.Cewek,
                message: "Boro2 mau nikahin aku, kerja aja belom tentu"
            },
            {
                type: ChatType.Cewek,
                message: "Kita putus!"
            }
        ];
    }

    public goodEnd(): DialogChat[] {
        return [
            {
                type: ChatType.Cowok,
                message: "Aku akan berjuang demi kamu sayang"
            },
            {
                type: ChatType.Cewek,
                message: "Kalo ada yang ga ngerti tanya aku aja ya"
            }
        ];
    }
}
