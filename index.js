#!/usr/bin/env node
import chalk from "chalk";
import { program } from "commander";
import generateComponent from "./templates/components.js";

program
  .command("component <name>")
  .alias("c")
  .description("Generate a new component with name <name>")
  .action((name) => {
    generateComponent(name);
  });

program
  .command("hook <name>")
  .alias("h")
  .description("Generate a new hook with name <name>")
  .action((name) => {
    generateHook(name);
  });

program.parse(process.argv);

function generateHook(name) {
  // Generate hook logic
  console.log(chalk.green(`Hook ${name} created successfully!`));
}
