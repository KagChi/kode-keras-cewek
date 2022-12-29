/* eslint-disable class-methods-use-this */
import { ActionRowBuilder, ButtonBuilder, bold } from "@discordjs/builders";
import { Command, PieceContext, PieceOptions, RegisterCommand } from "@skyra/http-framework";
import { stripIndents } from "common-tags";
import { ChatType } from "../stores/Dialog.js";
import { ButtonStyle, MessageFlags } from "discord-api-types/v10";

@RegisterCommand(builder => {
    builder
        .setName("start")
        .setDescription("Start a new game session !");

    return builder;
})

export class StartCommand extends Command {
    public constructor(context: PieceContext, options?: PieceOptions | undefined) {
        super(context, {
            ...options,
            name: "start"
        });
    }

    public override async chatInputRun(interaction: Command.ChatInputInteraction): Promise<any> {
        const message = await interaction.defer();
        const dialog = this.container.stores.get("dialogs").random(); if (!dialog) return interaction.reply({ content: "No dialog found !", flags: MessageFlags.Ephemeral });
        const chat = await dialog.init();
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

            return message.update({
                components: row.components.length ? [row.toJSON()] : [],
                content:
            stripIndents`
            ${bold(dialog.options.name!)}, By: ${bold(dialog.options.author)}

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

        switch (chat.type) {
            case ChatType.Cowok:
                return interaction.reply({
                    components: [row.toJSON()],
                    content:
                    stripIndents`
            ${bold("Cowok")}: ${chat.message!}
                    `
                });
            case ChatType.Cewek:
                return interaction.reply({
                    components: [row.toJSON()],
                    content:
                    stripIndents`
            ${bold("Cewek")}: ${chat.message!}
                    `
                });
            default:
                break;
        }
    }
}
