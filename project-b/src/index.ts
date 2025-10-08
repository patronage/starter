import 'dotenv/config';

interface CliOptions {
  name?: string;
}

const parseArgs = (argv: string[]): CliOptions => {
  const args = argv.slice(2);
  const options: CliOptions = {};

  for (const arg of args) {
    if (arg.startsWith('--name=')) {
      options.name = arg.split('=')[1];
    }
  }

  return options;
};

const main = async () => {
  const options = parseArgs(process.argv);
  const name = options.name || 'World';

  console.log(`Hello, ${name}!`);
};

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('Script failed');
    console.error(error);
    process.exitCode = 1;
  });
}
