// Pemeriksa isi ORDER 9 (apt. Aulia Marwa Andini Abidin). Jalankan: node cek/cek-isi.mjs
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8')
let bad = 0
const ok = (name, cond, detail = '') => { if (!cond) bad++; console.log((cond ? 'LULUS ' : 'GAGAL ') + name + (cond || !detail ? '' : ' -> ' + detail)) }

const walk = (d, out = []) => { for (const f of fs.readdirSync(d, { withFileTypes: true })) { if (['node_modules', '.next', 'cek'].includes(f.name)) continue; const p = path.join(d, f.name); f.isDirectory() ? walk(p, out) : out.push(p) } return out }
const code = walk(root).filter((f) => /\.(tsx?|css|json)$/.test(f) && !f.endsWith('package-lock.json'))

// 1. kunci ID dan EN sama
const tr = read('contexts/translations.ts')
const idBlock = tr.slice(tr.indexOf('  id: {'), tr.indexOf('  en: {'))
const enBlock = tr.slice(tr.indexOf('  en: {'))
const keys = (s) => [...s.matchAll(/^\s+'([\w.]+)':/gm)].map((m) => m[1])
const idK = keys(idBlock), enK = keys(enBlock)
ok('kunci teks ID dan EN sama', idK.length === enK.length && idK.every((k) => enK.includes(k)), idK.filter((k) => !enK.includes(k)).concat(enK.filter((k) => !idK.includes(k))).join(', '))

// 2. semua t('...') yang dipakai terdefinisi
const used = new Set()
for (const f of code.filter((f) => /\.tsx$/.test(f))) for (const m of fs.readFileSync(f, 'utf8').matchAll(/\bt\('([\w.]+)'\)/g)) used.add(m[1])
ok("semua t('kunci') terdefinisi", [...used].every((k) => idK.includes(k)), [...used].filter((k) => !idK.includes(k)).join(', '))

// 3. gambar yang dirujuk ada
const refs = new Set()
for (const f of code.filter((f) => /\.tsx?$/.test(f))) for (const m of fs.readFileSync(f, 'utf8').matchAll(/['"`](\/(?:projects\/)?[\w\-./]+\.(?:jpg|jpeg|png|pdf|svg))['"`]/g)) refs.add(m[1])
const missing = [...refs].filter((r) => !fs.existsSync(path.join(root, 'public', r)))
ok('semua gambar/berkas yang dirujuk ada di public/', missing.length === 0, missing.join(', '))

// 4. tidak ada sisa data template lama
const stale = /hafizah|ufairah|kariadi|stefani|richard|cikokol|bio farma|borneo lestari|penta valent|pusdokkes|rida|angriani|makassar|marga nusantara|siloam|lifiyura|lafi|muslim indonesia/i
const hits = code.filter((f) => stale.test(fs.readFileSync(f, 'utf8')) && !/Sections\.tsx$/.test(f) ? true : false).map((f) => path.relative(root, f))
const secHits = [...fs.readFileSync(path.join(root, 'components/Sections.tsx'), 'utf8').matchAll(/(hafizah|ufairah|kariadi|stefani|richard|cikokol|bio farma|borneo lestari|penta valent|pusdokkes|rida|angriani|makassar|marga nusantara|siloam|lifiyura|lafi|muslim indonesia)/gi)].length
ok('tidak ada nama/instansi Hafizah tersisa di kode', hits.length === 0 && secHits === 0, hits.join(', ') + (secHits ? ' Sections.tsx x' + secHits : ''))

// 5. gambar publik yang tidak dipakai (hanya informasi)
const pub = walk(path.join(root, 'public')).map((f) => '/' + path.relative(path.join(root, 'public'), f).split(path.sep).join('/'))
const unused = pub.filter((f) => !refs.has(f))
console.log('INFO berkas public yang belum dirujuk: ' + (unused.join(', ') || '-'))

// 6. kunci dinamis (template literal) tetap terdefinisi
const dyn = [['work.', 6, ['role', 'inst', 'loc', 'period', 'sub', 'desc']], ['skills.b.', 20, ['']], ['personal.soft.', 6, ['']], ['award.', 5, ['title', 'issuer', 'cat', 'date', 'desc']], ['academic.', 3, ['period', 'role', 'sub', 'b1', 'b2', 'b3', 'b4', 'tag1', 'tag2', 'tag3', 'tag4']]]
const lack = []
for (const [pre, n, sfx] of dyn) for (let i = 1; i <= n; i++) for (const x of sfx) { const k = ['work.', 'award.', 'academic.'].includes(pre) ? pre + i + '.' + x : pre + i; if (!idK.includes(k)) lack.push(k) }
for (const [n, c] of [[1, 5], [2, 5], [3, 4], [4, 4], [5, 4], [6, 4]]) for (let i = 1; i <= c; i++) { const k = 'work.' + n + '.t' + i; if (!idK.includes(k) || !enK.includes(k)) lack.push(k) }
ok('kunci dinamis work/skills/personal lengkap', lack.length === 0, lack.join(', '))

// 7. data kontak sesuai CV
const contact = read('components/Contact.tsx')
ok('kontak sesuai CV (email, WhatsApp, lokasi, LinkedIn)', /auliamarwaandini22@gmail\.com/.test(contact) && /6281242686264/.test(contact) && /Cimahi, Jawa Barat/.test(contact) && /linkedin\.com\/in\/aulia-marwa-andini-abidin-23b9b53b8/.test(contact))
console.log(bad ? 'GAGAL (' + bad + ')' : 'OK')
process.exit(bad ? 1 : 0)
