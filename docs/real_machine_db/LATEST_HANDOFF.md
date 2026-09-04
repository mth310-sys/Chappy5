# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **589**
- latestMachineAdded: **センゴク回胴記**（ニューギン / releaseDate 2011-07-04）
- latestRecord: `docs/real_machine_db/machines/2011-07-04_sengoku-kaidouki.md`
- chronologicalFrontier: **2011-07-04**
- frontierLatestExactDateMachine: **センゴク回胴記**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線継続 — センゴク回胴記

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「サイバードラゴン2」を再取得して開始。
- main正本は recordCount 588 / chronologicalFrontier 2011-07-04 まで進んでいたため、以前の6月候補には戻らずLATEST_HANDOFF指定の7/4同日群を継続。
- repo内検索で「センゴク回胴記」の未登録を確認し、589件目として追加。
- K-Naviで2011-07-04ホール導入開始、A-SLOTで2011年7月導入開始。5号機クロニクルは2011/6表記のためreleaseDate conflictとして保持し、exact dateを持つK-Naviを時系列キーに採用。

### 性能コア

- 機械割: **94.6 / 96.3 / 97.7 / 101.7 / 105.4 / 112.6%**。
- BIG合成: **1/481.88 → 1/431.16**。
- REG: **1/555.39 → 1/489.07**。
- ボーナス合成: **1/258.02 → 1/229.15**。
- ボーナス+ART合成: 設定1 **約1/115.1**、設定6 **約1/89.9**（BB中初当たりを含む）。設定2〜5およびART単独初当り全設定表は現存本文で回収できずUNVERIFIED。
- 同色BIG約**313枚**、異色BIG約**206枚**、REG約**50枚**。
- ART「勇ノ刻」: **1セット50G / 約+1.4枚/G**。
- CZ「生還への路」: ART期待度50%超。5/10/20/255G・無限・超無限を確認。
- 50枚ベースは検索語・資料系統を変更して横断したが直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。

### resetBehavior v0.7

- 通常天井: **ボーナス間1200G → 次回ボーナスまで終了しないCZ「生還への路」**。
- K-Naviに本機専用「設定変更後の挙動」「状態移行率(設定変更後)」解析項目が存在することは確認。
- ただし現存取得本文から設定変更時の1200GカウンタCLEAR/RETAIN、CZ/ARTストック、内部状態の具体処理を直接確定できず、`settingChangeBehavior` / `gameCounterReset` / `carryOverBehavior` / `powerCycleBehavior` / `resetDetection` は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の状態振り分け具体数値も **UNVERIFIED_AFTER_RESEARCH**。
- リセット専用短縮天井・朝一特定G以内当選率・専用CZ/ART優遇の公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE**。
- 一般則からの推測補完はしていない。

## 主要出典 — センゴク回胴記（取得日 2026-09-04）

- グリーンべると: `https://web-greenbelt.jp/00002041/`
- K-Navi: `https://p-kn.com/slot/1430/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6376`
- パチマガスロマガ基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/18/a.php`
- パチマガスロマガ設定別ボーナス/機械割: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/18/h-1.php`
- 5号機クロニクル: `https://5goki.com/newgin-excite`
- A-SLOT: `https://www.a-slot.com/SHOP/newgin10.html`

## source QA note

- 2026年生成系の一部回顧ページには本機を「6号機」「有利区間機」と誤認し、純増3〜5枚/G等を推測する記述が混在する。2011年当時業界記事、P-WORLD、K-Navi、パチマガスロマガと明確に矛盾するため性能根拠から除外。
- release monthは5号機クロニクルの2011/6と、K-Navi/A-SLOTの2011/7に差があるためCONFLICT保持。

## 直前までの重要重複監査情報

- `docs/real_machine_db/machines/2011-06-17_onihama-gaiden-hayato-shippuden.md`
- `docs/real_machine_db/machines/2011-06-20_riospa-rio-no-dai-onsen.md`
- `docs/real_machine_db/machines/2011-06-20_progolfer-saru.md`
- `docs/real_machine_db/machines/2011-06-27_skylove3.md`
- `docs/real_machine_db/machines/2011-06-27_daigyakuten.md`
- `docs/real_machine_db/machines/2011-06_warau-salesman.md`
- `docs/real_machine_db/machines/2011-07-04_cyberdragon2.md`
- `docs/real_machine_db/machines/2011-07-04_sengoku-kaidouki.md`
- 以後もrecursive tree / contents実パス確認を重複判定の優先手順とし、code search未ヒットだけで未登録判定しない。

## 遡及QA継続地点

- **めぞん一刻 (`docs/real_machine_db/machines/2006-11_mezon-ikkoku.md`) までresetBehavior v0.7補完済み**。
- 次のtree実パスは **`docs/real_machine_db/machines/2006-11_mikawa-sasoriza-no-salaryman.md`**。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。

## 本線の次回再開地点

1. **recordCount 589 / chronologicalFrontier 2011-07-04**から開始。
2. **2011-07-04同日群の残存監査を続行**し、tree実パス/contentsと外部導入カレンダーを照合。未登録があれば同日群を優先。
3. 同日群が閉じたら **2011-07-05以降の最古未処理機**へ前進する。
4. `GRADIUS THE SLOT` は今回の先行監査で、KONAMI公式が2011年7月稼働、グリーンべるとが7/24納品予定、パチビーが7/25導入、HAZUSEが7/22導入開始としている。7/4同日機ではないため先に処理しない。到達時は **2011-07-22 / 07-24 / 07-25 の日付定義差・CONFLICT** を保持して処理する。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー・シリーズ名・設定変更/朝一/据え置き/電源OFF ON/天井/モード/ガックン等へ検索語を変え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで横断してから確定する。競合は平均せずCONFLICT。