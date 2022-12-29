/* eslint-disable class-methods-use-this */
import { Command, PieceContext, PieceOptions, RegisterCommand } from "@skyra/http-framework";

@RegisterCommand(builder => {
    builder
        .setName("ping")
        .setDescription("Ping pong with me!");

    return builder;
})

export class PingCommand extends Command {
    public constructor(context: PieceContext, options?: PieceOptions | undefined) {
        super(context, {
            ...options,
            name: "ping"
        });
    }

    public override async chatInputRun(interaction: Command.ChatInputInteraction): Promise<any> {
        const now = Date.now();
        const message = await interaction.reply({ content: "Pong!" });
        return message.update({ content: `Pong! Took ${Date.now() - now}ms. to reply !` });
    }
}
