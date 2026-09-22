# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- latest prior record `2025-11-04_e_kamen_rider_den_o_dekaheso_239.md`: checked
- duplicate searches performed before writes

## Closed boundaries retained / advanced
- 2025-07-07 — CLOSED 9/9
- 2025-07-22 — CLOSED 3/3
- 2025-08-04 — CLOSED 9/9
- 2025-08-18 — CLOSED 3/3
- 2025-09-08 — CLOSED / candidate set covered
- 2025-09-22 — CLOSED 2/2
- 2025-10-06 — CLOSED / candidate set covered
- 2025-10-20 — CLOSED 2/2
- **2025-11-04 — CLOSED 12/12 candidate audit**
- **2025-11-17 — CLOSED 1/1 pachinko candidate**

## 2025-11-04 boundary closure
Candidate set and result:
1. e花の慶次～黄金の一撃 — COMPLETE_CORE
2. eフィーバーもののがたり — COMPLETE_CORE
3. eルパン三世VSキャッツ・アイ — COMPLETE_CORE
4. e源外伝 EPISODE OF -大龍- — COMPLETE_CORE
5. e ノーゲーム・ノーライフ 319Ver. — COMPLETE_CORE
6. e ノーゲーム・ノーライフ 199Ver. — COMPLETE_CORE
7. e 仮面ライダー電王 デカヘソ239 — COMPLETE_CORE
8. P いくさの子 戦極最強ドデカ199ver. — **COMPLETE_CORE this relay**
9. P Re:ゼロから始める異世界生活 鬼がかり 199ver. — **LT非搭載 confirmed; excluded**
10. P Re:ゼロから始める異世界生活 鬼がかり 99ver. — **LT非搭載 confirmed; excluded**
11. P転生したらスライムだった件129ver. — **LT非搭載 confirmed; excluded**
12. PA GoGo富士山 — **LT非搭載 confirmed; excluded**

Exclusion evidence:
- Re:ゼロ鬼がかり199: HAZUSE explicitly `ラッキートリガー 非搭載`; 型式 `P/Re：ゼロから始める異世界生活鬼がかりver/L07`, 検定4P1703. Pachinko Village detailed spec also `ラッキートリガー なし`.
- Re:ゼロ鬼がかり99: HAZUSE explicitly `ラッキートリガー 非搭載`; 型式 `P/Re：ゼロから始める異世界生活鬼がかりver/A03`, 検定4P1603. 必勝本 and Pachinko Village also explicitly non-LT.
- 転スラ129: 必勝本 explicitly `ラッキートリガー 非搭載`; 型式 `P転生したらスライムだった件ARJ`. Industry articles describe 1/129.7 ST, RUSH100%/約75% without LT.
- PA GoGo富士山: HAZUSE explicitly `ラッキートリガー 非搭載`; 型式 `PAGoGo富士山T`, 検定5P0026. Analog役物機.
No machine records created for these four, per mission rule.

## P いくさの子 戦極最強ドデカ199ver. — COMPLETE_CORE
- サミー / 銀座製。型式 `Pいくさの子戦極最強GRPJ`。2025-11-04導入。
- 通常約1/199（解析詳細1/199.8）、（極）戦極最強の刻中約1/69.9。
- 初当り2R約300個100%。約20%で桶狭間の戦いBONUS、約80%通常。
- 桶狭間の戦いBONUSは10R約1500個。勝利期待約50%で上乗せZONEへ、敗北約50%で通常。敗北後約0.5%復活注記あり。
- 勝利時約75%は通常上乗せZONE `戦極最強の刻` 100秒、約25%はLT `極・戦極最強の刻` 300秒。
- 100秒ZONEは平均大当り約1.7回＋終了後BONUS込み期待約4000個。LT300秒は平均大当り約5回＋終了後BONUS込み期待約9000個。単一大当り出玉ではない。
- 100/300秒ZONE終了後は必ず桶狭間の戦いBONUSへ戻り、約50%で再ループ。LT終了＝通常終了ではない。
- 通常遊技全体基準の総LT到達率/確率は直接値未確認。20%×50%×25%等から独自算出しない。
- conflicts: []
- record: `docs/lt_pachinko_db/machines/2025-11-04_p_ikusanoko_sengoku_saikyo_dodeka_199.md`
- record commit: `f68c3baf6ee2cf0bbc0f6113f938358c87509422`

Sources:
- https://news.p-world.co.jp/articles/31715
- https://news.p-world.co.jp/articles/31720/greenbelt
- https://www.p-world.co.jp/machine/database/10334
- https://www.pachibee.jp/machines/index/125090020
- https://1geki.jp/pachinko/p_ikusanoko_ds/
- https://p-kn.com/pachinko/4385/
- https://p-johojima.jp/machine_spec/post-13327/
- https://hisshobon.com/machineinfo/98838/
- https://hisshobon.com/machineinfo/98839/

## 2025-11-17 boundary — CLOSED 1/1
Calendar cross-check (Pachibee + independent new-machine schedule) shows one pachinko candidate on 2025-11-17: `Pメイドインアビス 奈落の連環蝕`.

### Pメイドインアビス 奈落の連環蝕 — COMPLETE_CORE
- メーシー / ユニバーサル。型式 `PメイドインアビスSL`。2025-11-17導入。
- Universal official explicitly confirms LT `連環蝕`, initial about 1/129, RUSH entry70%, continuation76%, LT loop88%, and LT exit returns to RUSH.
- 通常1/129.7。右図柄揃い1/29.0（大当り＋小当り合算）、転落1/72.4。
- 初当り: 10R1000個＋虹の黄金域1% / 2R200個＋下位RUSH69% / 2R200個＋通常30%。TOTAL RUSH系入口70%。
- 下位RUSH `Deep in Abyss / オーバードタイム` 約76%。10R大当り4%またはC時短で `虹の黄金域` へ。虹の黄金域突入契機合算約1/343.3。
- 虹の黄金域は実質次回大当りまで。大当りの50%でLT `連環蝕`。
- LT中: 10R1000個＋LT4% / 6R600個＋LT84% / 6R600個＋下位RUSH12%。LTループ88%、終了12%でも下位RUSHへ戻る。
- 通常遊技全体基準の総LT到達率/確率は直接値未確認。経路値から独自算出しない。
- conflicts: []
- record: `docs/lt_pachinko_db/machines/2025-11-17_p_made_in_abyss_naraku_no_renkanshoku.md`
- record commit: `c8328147350ba6292514345b7178f3ee3069dc61`

Sources:
- https://www.universal-777.co.jp/news/20250901002396/
- https://news.p-world.co.jp/articles/31816/yugitsushin
- https://news.p-world.co.jp/articles/31856/greenbelt
- https://www.pachibee.jp/machines/index/125100000
- https://www.p-world.co.jp/machine/database/10344
- https://1geki.jp/pachinko/p_madeinabyss_naraku/
- https://1geki.jp/pachinko/p_madeinabyss_naraku/51/
- https://hisshobon.com/machineinfo/99111/
- https://nana-press.com/kaiseki/machine/1049/32379/
- https://chonborista.com/pachinko/universal/245390/

## Effective DB state
Previous effective state: 148 machine records / 147 COMPLETE_CORE / 1 CONFLICT.
This relay added 2 COMPLETE_CORE records.
- machine records: **150**
- COMPLETE_CORE: **149**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next chronological boundary: 2025-12-08 — OPEN
2025-12-01 has no pachinko release in the cross-checked schedule. Next pachinko boundary is 2025-12-08.
Candidate set to audit in calendar order (do not assume every candidate is LT):
1. e北斗の拳11 暴凶星 — pending LT audit
2. PA海物語 極JAPAN Withナギナミ — pending LT audit
3. eアズールレーン2 THE ANIMATION 超次元 — pending LT audit
4. Pフィーバーからくりサーカス2 Light ver. — pending LT audit
5. e地獄少女7500Ver. — pending LT audit
6. eうしおととら～神のせSPEC～150ver. — LT candidate; independent machine DB labels LT
7. eうしおととら～神のせSPEC～399ver. — LT candidate; independent machine DB labels LT
8. PA野生の王国6 — pending LT audit
9. Pこの素晴らしい世界に祝福を！最終クエスト1/49 — pending LT audit

## Next restart point
**Resume at 2025-12-08 with `e北斗の拳11 暴凶星`. First positively confirm LT on the exact specification, duplicate-search, then collect model number/manufacturer, normal/right probabilities, initial payout/distribution, lower RUSH structure, LT formal name/routes/rates, lower/LT continuation, payout distribution, ST/time-shortening/C-time/residual-hold handling, and full game flow. Continue through the 2025-12-08 candidate set, excluding non-LT machines with explicit evidence rather than creating records.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate sibling specs, and never infer unpublished total LT arrival rates from route probabilities.
