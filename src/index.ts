import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { Client, Registry, container } from "@skyra/http-framework";
import { DialogStore } from "./stores/DialogStore.js";
import { ParseCustomId } from "./structures/ParseCustomId.js";

const client = new Client({
    discordPublicKey: process.env.DISCORD_PUBLIC_KEY
});

container.idParser = new ParseCustomId();
client.prisma = new PrismaClient();
container.stores.register(new DialogStore());

const registry = new Registry({
	 token: process.env.DISCORD_TOKEN
});

await client.prisma.$connect();
await registry.load();
await registry.registerGlobalCommands();
await client.listen({ port: Number(process.env.PORT ?? 3000) });

declare module "@skyra/http-framework" {
    interface Client {
        prisma: PrismaClient;
    }
    interface StoreRegistryEntries {
        dialogs: DialogStore;
    }
}
