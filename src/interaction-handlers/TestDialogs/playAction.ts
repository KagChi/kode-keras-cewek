/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable class-methods-use-this */
import { InteractionHandler, Interactions, Piece } from "@skyra/http-framework";
import { ButtonBuilder, ActionRowBuilder, bold } from "@discordjs/builders";
import { stripIndent } from "common-tags";
import { ButtonStyle } from "discord-api-types/v10";
import { ChatType, DialogChat } from "../../stores/Dialog.js";

export class cewekAskCowok_1_1 extends InteractionHandler {
    public constructor(context: Piece.Context) {
        super(context, {
            name: "playAction"
        });
    }

    public run(interaction: Interactions.MessageComponentStringSelect, { parent, action }: { parent: string; action: string }): any {
        const dialog = this.container.stores.get("dialogs").find(x => x.options.identifier === parent);
        if (!dialog) return interaction.reply({ content: "Dialog not found" });
        if (action && action in dialog) {
            // @ts-expect-error Little hacky but it works
            const chat: DialogChat | DialogChat[] = dialog[action]();
            if (Array.isArray(chat)) {
                const components: ButtonBuilder[] = [];
                for (const x of chat) {
                    if (x.type === ChatType.Cewek && x.continue && !Array.isArray(x.continue)) {
                        for (const choice of x.continue.choices ?? []) {
                            components.push(
                                new ButtonBuilder()
                                    .setCustomId(choice.name)
                                    .setLabel(choice.label)
                                    .setStyle(ButtonStyle.Primary)
                            );
                        }
                        break;
                    }
                    for (const choice of x.choices ?? []) {
                        components.push(
                            new ButtonBuilder()
                                .setCustomId(choice.name)
                                .setLabel(choice.label)
                                .setStyle(ButtonStyle.Primary)
                        );
                    }
                }

                const row = new ActionRowBuilder<ButtonBuilder>();

                for (const component of components) {
                    row.addComponents(component);
                }

                return interaction.update({
                    components: row.components.length ? [row.toJSON()] : [],
                    content:
            stripIndent`
    ${chat.map(x => {
        switch (x.type) {
            case 0:
                return `${bold("Cowok")}: ${x.message!}`;
            case 1:
                return `${bold("Cewek")}: ${x.message!}`;
            default:
                break;
        }
    }).join("\n")}
            `
                });
            }

            const components: ButtonBuilder[] = [];
            if (chat.type === ChatType.Cewek && chat.continue && !Array.isArray(chat.continue)) {
                for (const choice of chat.continue.choices ?? []) {
                    components.push(
                        new ButtonBuilder()
                            .setCustomId(choice.name)
                            .setLabel(choice.label)
                            .setStyle(ButtonStyle.Primary)
                    );
                }
            }

            const row = new ActionRowBuilder<ButtonBuilder>();

            for (const component of components) {
                row.addComponents(component);
            }

            return interaction.reply({
                components: [row.toJSON()],
                content:
            stripIndent`
    ${bold("Cewek")}: ${chat.message!}
            `
            });
        }
    }
}
