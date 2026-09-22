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
- 2025-11-04 — CLOSED 12/12 candidate audit
- 2025-11-17 — CLOSED 1/1 pachinko candidate

## Prior relay retained
### P いくさの子 戦極最強ドデカ199ver. — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2025-11-04_p_ikusanoko_sengoku_saikyo_dodeka_199.md`
- record commit: `f68c3baf6ee2cf0bbc0f6113f938358c87509422`
- 通常約1/199、初当り約20%で桶狭間の戦いBONUS、勝利期待約50%。勝利時約25%でLT `極・戦極最強の刻` 300秒、約75%で通常上乗せZONE100秒。LT期待約9000個は複数大当り＋終了後BONUSを含む出玉期待値で単発出玉ではない。

### 2025-11-04 non-LT exclusions retained
- P Re:ゼロから始める異世界生活 鬼がかり 199ver. — LT非搭載 confirmed; excluded
- P Re:ゼロから始める異世界生活 鬼がかり 99ver. — LT非搭載 confirmed; excluded
- P転生したらスライムだった件129ver. — LT非搭載 confirmed; excluded
- PA GoGo富士山 — LT非搭載 confirmed; excluded

### Pメイドインアビス 奈落の連環蝕 — COMPLETE_CORE
- record: `docs/lt_pachinko_db/machines/2025-11-17_p_made_in_abyss_naraku_no_renkanshoku.md`
- record commit: `c8328147350ba6292514345b7178f3ee3069dc61`
- 通常1/129.7、RUSH入口70%、下位約76%。虹の黄金域大当り50%でLT `連環蝕`。LT88%ループ、12%側でも下位RUSHへ復帰。

## 2025-12-08 boundary — OPEN
Candidate set (calendar order; do not assume every candidate is LT):
1. e北斗の拳11 暴凶星 — **COMPLETE_CORE this relay**
2. PA海物語 極JAPAN Withナギナミ — pending exact LT/non-LT audit
3. eアズールレーン2 THE ANIMATION 超次元 — pending LT audit
4. Pフィーバーからくりサーカス2 Light ver. — pending LT audit
5. e地獄少女7500Ver. — pending LT audit
6. eうしおととら～神のせSPEC～150ver. — LT candidate; independent machine DB labels LT
7. eうしおととら～神のせSPEC～399ver. — LT candidate; independent machine DB labels LT
8. PA野生の王国6 — pending LT audit
9. Pこの素晴らしい世界に祝福を！最終クエスト1/49 — pending LT audit

### e 北斗の拳11 暴凶星 — COMPLETE_CORE
- サミー（銀座製）。型式 `e北斗の拳11暴凶星SHEF`。2025-12-08導入。
- LT3.0プラス / 1種2種混合。通常約1/399.8。これは図柄揃い演出＋拳王覚醒成功の合算。
- 右約1/10.7、C時短込み。純粋な大当り確率と混同しない。
- 初当り: 4500個+RUSH約5% / 1800個+RUSH約4% / 1500個+RUSH約52% / 1500個通常約39%。RUSH/LT入口約61%。
- 本機は非LT下位RUSHを経由しない直LT型。LT/RUSH演出モードは `拳王RUSH / 救世主RUSH`。必勝本はLTを「拳王RUSH」として解説。
- ST10回+残保留4個、継続約75%（C時短込み）。
- 右振り分け: 6000個約10% / 4500個約40% / 1500個約30% / STリセット約20%。約50%が4500個以上。
- 4500個=1500個×3、6000個=1500個×4。初当り1800個=300個+1500個。単一大当り出玉ではない。
- `極闘` 発生時6000～12000個の可能性。12000個も上乗せ/複数回分を含む出玉塊で単一10Rではない。
- 通常時全体を分母にした別定義の総LT確率は直接公表値未確認のため独自算出しない。
- conflicts: []
- record: `docs/lt_pachinko_db/machines/2025-12-08_e_hokuto_no_ken_11_boukyousei.md`
- record commit: `df4cb00c9c1ac6a414cea665c48440ae55c13060`

Sources:
- https://yugi-nippon.com/pachinko-new-machine/post-73381/
- https://news.p-world.co.jp/articles/32048/greenbelt
- https://www.p-world.co.jp/machine/database/10359
- https://hisshobon.com/machineinfo/99243/
- https://hisshobon.com/machineinfo/99245/
- https://www.sammy-net.jp/news/2026/03/e-11-777town-mobile.html

## PA海物語 極JAPAN Withナギナミ — preliminary audit only
- 型式 `PA海物語極ジャパンHBD`、2025-12-08、三洋物産。
- 業界一次/解析では通常約1/99.9、右実質約1/56.2、初当り後ST16回または70回、極ノ刻TOTAL突入約65%、継続約74%を確認。
- 現時点の資料群は通常ST/1種2種混合として説明しておりLT名称/発動契機を確認できていないが、「LT非搭載」の明示資料をまだ取得していないため、mission ruleに従い未確定。DBレコードは作成しない。
- 次リレーでメーカー/HAZUSE/機種DB等を表記揺れ・型式名込みで再探索し、LT非搭載を明示確認してから除外すること。

Preliminary sources:
- https://news.p-world.co.jp/articles/31910/yugitsushin
- https://www.pachibee.jp/machines/about/125110006
- https://1geki.jp/pachinko/pa_umi_kiwamijapan_ngnm/39/

## Effective DB state
Previous effective state: 150 machine records / 149 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **151**
- COMPLETE_CORE: **150**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**Resume at 2025-12-08 candidate #2 `PA海物語 極JAPAN Withナギナミ`. First resolve exact LT/non-LT status using explicit evidence; do not infer non-LT merely from absence of LT wording. If non-LT is confirmed, exclude without creating a machine record and continue immediately to candidate #3 `eアズールレーン2 THE ANIMATION 超次元`.**

For each positive LT machine: duplicate-search first, collect exact model/manufacturer, normal/right probabilities and definitions, initial payout/distribution, lower RUSH structure if any, formal LT name/routes/rates, lower/LT continuation, payout distribution, ST/time-shortening/C-time/residual-hold handling and complete normal→initial→RUSH→LT flow. Preserve `約`/`実質`/`TOTAL`, payout vs expected payout, and sibling-spec distinctions. Never infer unpublished total LT arrival rates from route probabilities.
