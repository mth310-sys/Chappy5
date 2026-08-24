import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../prototype/index.html', import.meta.url), 'utf8');

const requiredSnippets = [
  'id="board"',
  'id="runButton"',
  'id="resetButton"',
  'data-tool="diverter"',
  'data-tool="booster"',
  'data-tool="splitter"',
  'const COLS = 7;',
  'const ROWS = 5;',
  'const MAX_PARTS = 6;',
  'function startRun()',
  'function resetBoard()'
];

for (const snippet of requiredSnippets) {
  if (!html.includes(snippet)) {
    throw new Error(`Prototype verification failed: missing ${snippet}`);
  }
}

const scriptMatches = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
if (scriptMatches.length !== 1) {
  throw new Error(`Prototype verification failed: expected exactly one inline script, found ${scriptMatches.length}`);
}

// Parse the browser script without executing DOM-dependent code.
new Function(scriptMatches[0][1]);

const blockMatch = html.match(/const BLOCKS = new Set\(\[([^\]]+)\]\);/);
if (!blockMatch || !blockMatch[1].includes("'2,2'")) {
  throw new Error('Prototype verification failed: expected central routing blocker is missing');
}

console.log('Prototype structural and JavaScript syntax checks passed.');
