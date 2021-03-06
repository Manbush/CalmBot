import { Message, User } from "discord.js";
import Client from "../structures/Client";
import adminmanualchallenge from "../handlers/admin/adminmanualchallenge";
import admindisablecommand from "../handlers/admin/admindisablecommand";
import adminenablecommand from "../handlers/admin/adminenablecommand";
import adminsleep from "../handlers/admin/adminsleep";
import admincommand from "../handlers/admin/admincommand";
module.exports = {
  name: "admin",
  description: "For admin use only",
  category: "Admin",
  run: async function run(client: Client, message: Message, args: Array<String>) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      message.channel.send("Missing Permissions.\nRequired: **ADMINISTRATOR**");
      return;
    }

    if (args.length === 0) {
      message.channel.send("Invalid Arguments.");
      return;
    }

    args[0] = args[0].toLowerCase();
    if (args[0] === "manualchallenge") {
      adminmanualchallenge.run(client, message, args);
      return;
    } else if (args[0] === "disablecommand") {
      admindisablecommand.run(client, message, args);
      return;
    } else if (args[0] === "enablecommand") {
      adminenablecommand.run(client, message, args);
      return;
    } else if (args[0] === "sleep"){
      adminsleep.run(client, message, args);
    } else if (args[0] === "command"){
      admincommand.run(client, message, args);
    }
  },
};
