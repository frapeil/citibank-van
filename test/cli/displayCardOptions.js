import test from 'ava';
import { spawn } from 'child_process';

test.cb('can display card options screen', (t) => {
  const cli = spawn('node', [ './test/helpers/fakecli.js', 'displayCardOptionsPrompt' ]);

  cli.stderr.on('data', (param) => {
    console.log(param.toString());
  });

  cli.on('close', (code) => {
    t.fail(`app failed to boot ${code}`);
  });

  setTimeout(() => {
    t.pass();
    t.end();
    cli.kill();
  }, 500);
});