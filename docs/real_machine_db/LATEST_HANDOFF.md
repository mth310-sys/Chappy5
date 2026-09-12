更新日: 2026-09-12

## 現在地点
- recordCount: **1471**
- latestRecordAdded: **ハイスクールD×D2 ハーレム王に俺はなる — No.1471**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-01-24_high-school-dxd2-harem-king.md`
- chronologicalFrontier: **2022-01-24**
- frontierLatestMachine: **ハイスクールD×D2 ハーレム王に俺はなる — No.1471**
- schema: **resetBehavior v0.7**
- status: **2022-01-24_GROUP_OPEN_8_OF_11_KNOWN_INDEPENDENT_RECORDS_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1470「パチスロ南国物語30」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定どおり、2022-01-24群の次機種 `ハイスクールD×D2 ハーレム王に俺はなる` をNo.1471へ追加。
- 性能コアはコナミアミューズメント公式、P-WORLD、HAZUSE、ちょんぼりすた、パチマガスロマガ、なな徹を横断。設定1〜6の機械割97.6〜107.4%、初当り1/256.0〜1/206.9、約32G/50枚、AT純増約3.0枚/G・擬似ボーナス約5.0枚/G、通常天井666G+αまたは最大10周期を保存。
- 製造はグレードワン、販売・ブランドはコナミアミューズメント。型式は `SハイスクールD×D2GT`。HAZUSE machine_code `1S0348` で機種同定できるためinspectionCodeとして保存したが、公的検定一覧本文での別系統照合は今回未固定として注記した。
- resetBehaviorは設定変更時に天井・内部モード・有利区間RESET、据え置き/純電源OFF→ONでは各項目CARRY_OVERを機種別資料で確認。
- 有利区間リセット後は全設定共通で約50%が天国モード。天国は最大3周期、天国選択時は70%で2周期天井。CZ自力抽選込みで3周期以内D×Dボーナス当選率約80%という公開朝一関連値を収録した。
- PAY右下ドットの有利区間ランプは設定変更時消灯、D×Dボーナス/AT突入時点灯、AT終了時消灯。朝一点灯は据え置き推測材料となる一方、消灯だけではAT終了時消灯等があるため変更確定材料とはしていない。
- 本機固有のガックン条件/発生率は、機種名・型式・グレードワン/コナミ・設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンを変えて再探索しても直接固定できず `UNVERIFIED_AFTER_RESEARCH`。coreStatusは `COMPLETE_CORE`、reset QAは `PARTIAL_RESEARCH_EXHAUSTED`。
- 遡及resetBehavior QAは本線の同日群前進を優先し、前回カーソルを維持した。

## No.1471 — ハイスクールD×D2 ハーレム王に俺はなる
- path: `docs/real_machine_db/machines/2022-01-24_high-school-dxd2-harem-king.md`
- manufacturer: **グレードワン（販売・ブランド: コナミアミューズメント）**
- formalModel: **SハイスクールD×D2GT**
- inspectionCode: **1S0348（HAZUSE machine_codeで機種同定。公的検定一覧本文の別系統照合は未固定）**
- releaseDate: **2022-01-24**
- generation/system: **6.1号機 / AT / 周期抽選 / 擬似ボーナス / CZ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.7 / 100.1 / 104.1 / 107.1 / 107.4%**
- initialHit: **1/256.0 / 1/251.4 / 1/245.5 / 1/228.2 / 1/215.1 / 1/206.9**
- baseGamesPer50: **約32.0G/50枚**
- netIncrease: **AT約3.0枚/G / 擬似ボーナス約5.0枚/G**
- normalCeiling: **666G+α または最大10周期**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- confidence: **HIGH_CORE_HIGH_RESET_WITH_MINOR_UNVERIFIED**

### resetBehavior v0.7 — No.1471
- **設定変更**: 天井RESET / 内部モードRESET / 有利区間RESET。
- **据え置き**: 天井・内部モード・有利区間CARRY_OVER。
- **純電源OFF→ON**: 天井・内部モード・有利区間CARRY_OVER。
- **リセット恩恵**: 有利区間リセット後は天国約50%（全設定共通）。天国は最大3周期。
- **公開数値**: 天国選択時70%で2周期天井。CZ自力抽選込みで3周期以内D×Dボーナス当選率約80%。
- **変更判別**: PAY右下ドットの有利区間ランプ。設定変更時消灯、D×Dボーナス/AT突入時点灯、AT終了時消灯。朝一消灯単独では確定扱いしない。
- **ガックン**: `UNVERIFIED_AFTER_RESEARCH`。

## 2022-01-24群 — OPEN
既知の独立レコード候補:
1. **ハナハナホウオウ～天翔～（25φ） — No.1464 / DONE**
2. **ハナハナホウオウ～天翔～-30（30φ） — No.1465 / DONE**
3. **パチスロディスクアップ2 — No.1466 / DONE**
4. **聖闘士星矢 冥王復活 — No.1467 / DONE**
5. **新世紀エヴァンゲリオン～魂の共鳴～ — No.1468 / DONE**
6. **アラジンAクラシック — No.1469 / DONE**
7. **パチスロ南国物語30 — No.1470 / DONE**
8. **ハイスクールD×D2 ハーレム王に俺はなる — No.1471 / DONE**
9. **ぱちスロ ギャグダー — No.1472候補 / NEXT**
10. **パチスロ春一番**
11. **来雷エイサー30**

## 次回本線の再開地点
- **No.1472候補「ぱちスロ ギャグダー」— 2022-01-24。**
- 性能コアとresetBehavior v0.7を同時収集する。
- 同日群を最後まで処理後、別型式/25φ・30φ/PB/地域先行/延期・段階導入を再監査してCLOSED判定する。
- **2022-01-25 ブルーファルコン（玉越PB）** を1/24群と混同しない。
- 25φ後発紫パネル `Sハナハナホウオウ～天翔～GP` は2022-05上旬導入の別型式。1/24群へ重複登録しない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は本線の2022-01-24群を優先し、遡及QAの新規更新なし。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md`（パチスロ暴れん坊将軍）**。

## GitHub保存
- No.1471追加 commit: `1d2bf1aeb68a08eef47108b00b4a878023c8d5c8`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1471 ハイスクールD×D2 ハーレム王に俺はなる
- https://www.konami.com/amusement/corporate/ja/topics/20211108/
- https://www.p-world.co.jp/machine/database/9526
- https://data.hazuse.com/?genre=202&machine_code=1S0348
- https://chonborista.com/slot/konami-slot/155884/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/17/kr01.php
- https://nana-press.com/kaiseki/machine/270/7711/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/17/tj02.php
- https://nana-press.com/kaiseki/machine/270/7708/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/17/tk03.php
