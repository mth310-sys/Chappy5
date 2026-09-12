更新日: 2026-09-12

## 現在地点
- recordCount: **1466**
- latestRecordAdded: **パチスロディスクアップ2 — No.1466**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-24_disc-up-2.md`
- chronologicalFrontier: **2022-01-24**
- frontierLatestMachine: **パチスロディスクアップ2 — No.1466**
- schema: **resetBehavior v0.7**
- status: **2022-01-24_GROUP_OPEN_3_OF_11_KNOWN_INDEPENDENT_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1465「ハナハナホウオウ～天翔～-30」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定どおり、2022-01-24群の次機種 `パチスロディスクアップ2 / Sディスクアップ2ZF / 0S0593` をNo.1466へ追加。
- 性能コアはHAZUSE・ちょんぼりすた・複数解析サイトで照合。市場予測機械割と完全攻略機械割を定義分離して保存した。
- resetBehavior v0.7では天井非搭載を確認した上で、機種別朝一解析から設定変更時AT状態リセット、純電源OFF→ON時AT状態引継ぎ、朝一1G目ガックンの有無を取得。サミートロフィー出現率用消化G数基準が電源OFFでリセットされる点も朝一関連情報として保存した。
- 遡及resetBehavior QAカーソルは今回は本線優先のため進めず、`docs/real_machine_db/machines/2007-02_playboy.md`（パチスロPLAYBOY / 25φ）を維持。

## No.1466 — パチスロディスクアップ2
- path: `docs/real_machine_db/machines/2022-01-24_disc-up-2.md`
- manufacturer: **サミー**
- formalModel: **Sディスクアップ2ZF**
- certificationNumber: **0S0593**
- releaseDate: **2022-01-24**
- generation/system: **6.2号機 / リアルボーナス + AT / 技術介入**
- settings: **1 / 2 / 5 / 6**
- payoutRate market estimate: **99.4 / 101.2 / 104.2 / 105.3%**
- payoutRate full strategy: **103.0 / 104.5 / 107.4 / 108.6%**
- bonusInitialHit: **BIG 1/287.4→1/276.5 / REG 1/496.5→1/397.2 / 合算 1/182.0→1/163.0**
- baseGamesPer50: **約37G/50枚（設定1）**
- netIncrease: **AT 約0.5枚/G**
- basicPayout: **BIG最大202枚 / REG最大65枚**
- normalCeiling: **非搭載**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_FOR_YARDSTICK**
- confidence: **HIGH_CORE_HIGH_RESET**

### resetBehavior v0.7 — No.1466
- **設定変更**: 天井非搭載。AT状態はリセット。設定変更専用の短縮天井・朝一専用モード・初当たり/CZ優遇は確認されない。
- **据え置き**: 天井は非該当。機種別解析ではAT状態を引き継ぐ扱い。
- **純電源OFF→ON**: AT状態は引き継ぐ。サミートロフィー出現率用の消化G数基準は電源OFFでリセットされ、ON後1Gから再カウント。
- **変更判別**: 朝一1G目にリールガックンありなら設定変更の有力材料。電源OFF→ONのみではガックンしないとの機種別解析あり。ただし設定変更後1G回し・リール手回し等のホール対策が可能なので確定判別扱いにはしない。
- **公開朝一数値**: 設定変更専用の当選率・モード振り分け・短縮天井G数はなし/確認なし。
- **有利区間**: 設定変更時にリセットされる世代だが、本機は天井/朝一モード狙いを持たず、物差し上の主要差分はAT状態リセットとガックン判別。

## 2022-01-24群 — OPEN
既知の独立レコード候補:
1. **ハナハナホウオウ～天翔～（25φ） — No.1464 / DONE**
2. **ハナハナホウオウ～天翔～-30（30φ） — No.1465 / DONE**
3. **パチスロディスクアップ2 — No.1466 / DONE**
4. **聖闘士星矢 冥王復活 — No.1467候補 / NEXT**
5. **新世紀エヴァンゲリオン～魂の共鳴～**
6. **アラジンAクラシック**
7. **南国物語30**
8. **ハイスクールD×D2 ハーレム王に俺はなる**
9. **ぱちスロ ギャグダー**
10. **パチスロ春一番**
11. **来雷エイサー30**

## 次回本線の再開地点
- **No.1467候補「聖闘士星矢 冥王復活」— 2022-01-24。**
- 性能コアとresetBehavior v0.7を同時収集する。
- 同日群を最後まで処理後、別型式/25φ・30φ/PB/地域先行/延期・段階導入を再監査してCLOSED判定する。
- **2022-01-25 ブルーファルコン（玉越PB）** を1/24群と混同しない。
- 25φ後発紫パネル `Sハナハナホウオウ～天翔～GP` は2022-05上旬導入の別型式。1/24群へ重複登録しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`（空手バカ一代）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02_playboy.md`（パチスロPLAYBOY / 25φ）**。
- 今回は本線No.1466を優先し、遡及QAは未処理。

## GitHub保存
- No.1466追加 commit: `0b108dd3b8a5a04b789cd055a5e449f7829a3ead`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1466 パチスロディスクアップ2
- https://hazuse.com/machine/pachislot/0S0593/
- https://hazuse.com/machine/pachislot/0S0593/genre/209/
- https://chonborista.com/slot/sammy-slot/155388/
- https://www.nankaikoya.jp/discup2-settei/
- https://slot-seven.com/discup2-settei/
- https://p.hisshobon.jp/machine/3789/1/88463
- https://flick7.net/slot/discup2__k.php
- https://www.slopachi-quest.com/article/discup2-settei/
