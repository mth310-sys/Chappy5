# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before write

## Closed boundaries retained
- 2025-07-07 — CLOSED 9/9
- 2025-07-22 — CLOSED 3/3
- 2025-08-04 — CLOSED 9/9
- 2025-08-18 — CLOSED 3/3
- 2025-09-08 — CLOSED / candidate set covered
- 2025-09-22 — CLOSED 2/2
- 2025-10-06 — CLOSED / candidate set covered
- 2025-10-20 — CLOSED 2/2

## Next boundary re-enumerated: 2025-11-04 — OPEN
Independent calendars (情報島＋ / パチビー / パチンコ・パチスロ.com / other November calendars) agree that 2025-11-04 is the next major pachinko introduction boundary after 2025-10-20. Candidate set currently enumerated:
1. e花の慶次～黄金の一撃 — **COMPLETE_CORE this relay**
2. eフィーバーもののがたり — LT confirmed; **NEXT**
3. eルパン三世VSキャッツ・アイ — LT confirmed; pending
4. e源外伝 EPISODE OF -大龍- — pending LT audit
5. e ノーゲーム・ノーライフ 319Ver. — pending LT audit
6. e ノーゲーム・ノーライフ 199Ver. — pending LT audit
7. e 仮面ライダー電王 デカヘソ239 — pending LT audit
8. P いくさの子 戦極最強ドデカ199ver. — pending LT audit
9. P Re:ゼロから始める異世界生活 鬼がかり 199ver. — pending LT audit
10. P Re:ゼロから始める異世界生活 鬼がかり 99ver. — pending LT audit
11. P転生したらスライムだった件129ver. — pending LT audit
12. PA GoGo富士山 — pending LT audit
Do not assume all 12 are LT-equipped; only create records after LT is positively confirmed.

### e花の慶次～黄金の一撃 — COMPLETE_CORE
- ニューギン。型式 `e花の慶次～黄金の一撃H4`、検定番号510448。全国導入canonical 2025-11-04。
- 通常図柄揃い約1/399.76 / 傾奇者チャージ約1/2723.4 / 殿MODE中約1/520.12 / RUSH中約1/99.14。
- 図柄揃いは10R約1500個100%。50.1%でLT `天下無双RUSH` 直行、49.9%で殿MODE100回。殿MODE引き戻し約18%込みTOTAL LT/RUSH突入約59%。
- 本機はRUSH=LTの直LT型で、非LT下位RUSHなし。天下無双RUSHはST143回・継続約77%。
- 天下無双RUSH中大当りのTOTAL 23.5%で出玉強化状態 `超天下無双RUSH`。内訳は3000個+α+超RUSH18.6% / 1500個+超RUSH4.9% / 3000個+α+通常LT31.0% / 1500個+通常LT45.5%。
- 超天下無双RUSHも継続約77%。複数資料で6000個+α 49.5% / 1500個50.5%。6000個側の一部で超RUSH継続、その他は通常LTへ戻る。
- ちょんぼりすただけ超RUSH6000/1500比率を50.5/49.5と逆転表示。必勝本・パチ7・ぱちレボ・解説資料が49.5/50.5で一致するため孤立不整合として不採用、平均しない。
- HAZUSEページ上部の図柄揃い約1/339.76も孤立誤記。型式欄と他多数資料は約1/399.76で一致。
- 必勝本のみ導入日2025-11-03表記。業界記事・P-WORLD・パチビー・情報島＋等は2025-11-04で一致し、11/04をcanonical。
- 傾奇者チャージ→LT絶対割合、超RUSH6000個時の超RUSH自己継続絶対割合は公開テキストで確定できず推測しない。
- record: `docs/lt_pachinko_db/machines/2025-11-04_e_hana_no_keiji_ougon_no_ichigeki.md`
- record commit: `de5724efac2280f2005f0e716c30f19e1a438429`

Sources:
- https://news.p-world.co.jp/articles/32141/greenbelt
- https://news.p-world.co.jp/articles/32217/greenbelt
- https://www.p-world.co.jp/machine/database/10373
- https://hisshobon.com/machineinfo/99124/
- https://p.hisshobon.jp/machine/4611/1/111475
- https://pachiseven.jp/articles/detail/25471
- https://www.atari7.com/pachinko/hananokeiji-ougon.php
- https://hazuse.com/machine/pachinko/PX0316/
- https://p-johojima.jp/machine_spec/post-2074/
- https://www.pachibee.jp/machines/schedule/2025-11

## Preliminary next-machine evidence — eフィーバーもののがたり
Do not re-research from zero; continue cross-check from these confirmed points:
- SANKYO brand / manufactured by JB. 型式 `eフィーバーもののがたりF`.
- 2025-11-04 introduction.
- LT3.0プラス / direct-LT type.
- normal symbol hit approx 1/149.9; LT hit approx 1/41.1; fall/termination approx 1/111.
- LT `SPECIAL付喪ノ戦` entry approx 25.5%; direct published total LT probability approx 1/588.
- LT continuation approx 73%, fall type.
- LT payout: approx 25% 6000, 25% 3000, 50% 1500; 3000=1500×2, 6000=1500×4.
- Official SANKYO online museum confirms LT3.0+, 1/149.9, entry 25.5%, and normal hit route descriptions. Industry article (遊技通信/P-WORLD) confirms model name, manufacturer JB, core probabilities, entry/continuation and payout structure.
- next relay should collect exact initial-hit distribution and game flow, then save if cross-check remains consistent.

Preliminary sources:
- https://www.sankyo-fever.jp/collection/988/
- https://news.p-world.co.jp/articles/31752/yugitsushin
- https://www.pachibee.jp/machines/index/125090013
- https://www.pachibee.jp/machines/about/125090013
- https://1geki.jp/pachinko/e_mononogatari/
- https://1geki.jp/pachinko/e_mononogatari/51/
- https://p-johojima.jp/machine_spec/post-13731/
- https://yugi-nippon.com/pachinko-new-machine/post-72940/

## Effective DB state
Previous effective state: 141 machine records / 140 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **142**
- COMPLETE_CORE: **141**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-11-04 boundary remains OPEN. Resume with `eフィーバーもののがたり`, using the preliminary verified evidence above; then continue through the remaining 2025-11-04 candidate set in chronological/discovery order. LT-non-equipped candidates must be excluded rather than recorded.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate same-series specs, and never infer unpublished total LT arrival rates from route probabilities.
