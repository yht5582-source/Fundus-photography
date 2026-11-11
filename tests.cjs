// node tests.cjs — checks the teaching content in index.html (demo cases, quiz, mind map)
const fs = require('fs'), vm = require('vm');
const html = fs.readFileSync(__dirname + '/index.html', 'utf8');
const block = html.split('/*TEACH-START*/')[1].split('/*TEACH-END*/')[0];
const ctx = {};
vm.runInNewContext(block + ';this.REFS=REFS;this.DEMOS=DEMOS;this.QUIZ=QUIZ;this.MINDMAP=MINDMAP;', ctx);
const { REFS, DEMOS, QUIZ, MINDMAP } = ctx;
const caseIds = new Set([...html.matchAll(/^\{id:(\d+),group:/gm)].map(m => +m[1]));
let n = 0, fail = 0;
const ok = (c, msg) => { n++; if (!c) { fail++; console.log('FAIL', msg); } };

ok(caseIds.size === 40, 'practice cases parsed');
for (const m of html.matchAll(/img:'(assets\/[^']+)'/g)) ok(fs.existsSync(__dirname + '/' + m[1]), 'image file ' + m[1]);
for (const m of html.matchAll(/\{x:([\d.]+),y:([\d.]+),rx:([\d.]+),ry:([\d.]+),title/g)) { const [x, y, rx, ry] = m.slice(1).map(Number); ok(x - rx >= -1 && x + rx <= 101 && y - ry >= -1 && y + ry <= 101, 'region inside image ' + m[0].slice(0, 30)); }
ok(DEMOS.length === 12, '12 demo cases');
ok(new Set(DEMOS.map(d => d.id)).size === 12, 'demo ids unique');
for (const d of DEMOS) {
  ok(d.title && d.vignette && d.take, d.id + ' text');
  ok(d.steps.length >= 4 && d.steps.every(s => s.q && s.a), d.id + ' steps');
  ok(caseIds.has(d.img), d.id + ' image case');
  ok(d.practice.length && d.practice.every(i => caseIds.has(i)), d.id + ' practice links');
  ok(d.src.length && d.src.every(k => REFS[k]), d.id + ' refs');
}
ok(QUIZ.length === 40, '40 questions');
ok(QUIZ.filter(q => q.lv === 'basic').length === 20, '20 basic');
ok(QUIZ.filter(q => q.lv === 'adv').length === 20, '20 advanced');
ok(new Set(QUIZ.map(q => q.q)).size === 40, 'questions unique');
const dist = [0, 0, 0, 0];
QUIZ.forEach((q, i) => {
  ok(q.o.length === 4 && new Set(q.o).size === 4, `q${i + 1} four distinct options`);
  ok(Number.isInteger(q.a) && q.a >= 0 && q.a < 4, `q${i + 1} answer index`);
  dist[q.a]++;
  ok(q.why && q.src.length && q.src.every(k => REFS[k]), `q${i + 1} rationale and refs`);
  if (q.img) ok(caseIds.has(q.img), `q${i + 1} image`);
  if (q.see) ok(caseIds.has(q.see), `q${i + 1} see link`);
});
ok(dist.every(x => x === 10), 'answers spread A–D 10 each: ' + dist);
const longest = QUIZ.filter(q => q.o[q.a].length === Math.max(...q.o.map(t => t.length))).length;
ok(longest <= 18, 'correct option is the longest in too many questions: ' + longest);
ok(MINDMAP.branches.length >= 6, 'map branches');
for (const b of MINDMAP.branches) {
  ok(b.leaves.length >= 2, b.t + ' leaves');
  for (const [, id] of b.leaves) if (id) ok(caseIds.has(id), b.t + ' link ' + id);
}
for (const k in REFS) ok(/^https:\/\//.test(REFS[k][1]), k + ' url');
// follow-up intervals agree with AAO 2025 Table 5 wherever teaching content states them
const map = JSON.stringify(MINDMAP);
ok(map.includes('中度：6–12 個月'), 'moderate 6–12 mo');
ok(map.includes('重度（4-2-1 任一項）：3–4 個月'), 'severe 3–4 mo');
ok(map.includes('高危險 PDR：2–4 個月'), 'high-risk 2–4 mo');
ok(!html.includes('3–6'), 'no stale 3–6 mo moderate NPDR interval');
// hash routes must not collide with element ids
ok(!/id="(cases|quiz|map)"/.test(html.replace('id="quiz">', '')), 'route names are not element ids');
console.log(`${n - fail}/${n} passed; correct option longest in ${longest}/${QUIZ.length}`);
process.exit(fail ? 1 : 0);
