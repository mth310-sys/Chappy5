# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **594**
- latestMachineAdded: **GRADIUS THE SLOT（グラディウス ザ・スロット）**（KPE / releaseDate key 2011-07-22）
- latestRecord: `docs/real_machine_db/machines/2011-07-22_gradius-the-slot.md`
- chronologicalFrontier: **2011-07-22**
- frontierLatestExactDateMachine: **GRADIUS THE SLOT**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — GRADIUS THE SLOT

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前frontierレコード「ミルキーマーチ」を再取得して開始。
- 開始時main正本は recordCount 593 / chronologicalFrontier 2011-07-18。
- INDEXは19件地点で古いためREADME規定どおりLATEST_HANDOFFとmain実レコードを優先。
- 2011-07-18同日群および07-19〜07-21境界を外部導入日検索で再監査。今回の検索範囲でより古い具体日付き未登録5号機を安全に確定できなかったため、handoff指定のGRADIUS THE SLOTへ進行。
- repo内重複確認後、594件目として `docs/real_machine_db/machines/2011-07-22_gradius-the-slot.md` を追加。

### 導入日 / 型式

- コナミ公式: **2011年7月稼働開始**。
- HAZUSE: **2011-07-22導入開始**。
- グリーンべると: **2011-07-24から納品予定**。
- パチビー: **2011-07-25導入日**。
- 平均化せず `CONFLICT_DATE_DEFINITION / DATE_DEFINITION_DIFFERENCE` として分離。時系列キーは具体的「導入開始日」資料の最古値2011-07-22を採用。
- 型式名: **グラディウスD** / 検定番号: **1S0201**（HAZUSE/P-WORLD）。

### 性能コア

- 5号機 A+ART / CZ / ゲーム数上乗せART。
- 機械割: **97.0 / 98.6 / 101.4 / 104.6 / 107.6 / 110.8%**。
- BIG: **1/425.6 / 412.2 / 399.6 / 385.5 / 374.5 / 366.1**。
- REG: **1/504.1 / 481.9 / 471.5 / 452.0 / 439.8 / 431.2**。
- ボーナス合算: **1/230.8 / 222.2 / 216.3 / 208.1 / 202.3 / 198.0**。
- ART初当たり（pacnk）: **1/415 / 380 / 373 / 315 / 311 / 274**。
- ボーナス+ART合算: **1/148.3 / 140.3 / 137.0 / 125.3 / 122.7 / 115.1**。
- BIG約 **252枚**、REG約 **48枚**。
- ART純増: **約+1.2枚/G**。
- 50枚ベース: 表記揺れ/型式名/1000円/コイン持ち等へ検索語を変え、公式・業界・当時解析・旧DBまで再探索したが直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。

### ART構造 / CONFLICT

- 第1カプセル7個でゼロスアタック、第2カプセル7個で次回ボーナスまで継続するHYPERゼロスアタック。
- 通常時はART期待度に関わる低確/高確/超高確、別にカプセル獲得率の低確/高確/超高確が存在。
- ゼロスアタック基本G数は **P-WORLD/パチビー「1セット30G以上+α」** と **パチマガスロマガ「1セット40G」** が競合。平均・補正せず `CONFLICT`。CHANCE POINTの40G周期とは定義を分離。

### resetBehavior v0.7

- パチマガスロマガ本機TOPに **「天井・ヤメ時」「朝イチ・設定変更」** 専用解析項目の存在までは確認。ただし具体本文は今回の取得経路で安全に回収できず。
- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。設定変更時のカプセル個数、内部状態、ART関連権利の処理を直接確定できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **NOT_APPLICABLE_NO_FIXED_GAME_COUNT_CEILING_CONFIRMED; CAPSULE_PROGRESS_RESET_UNVERIFIED**。P-WORLDの「天井」は固定G数ではなくカプセル7個蓄積によるART到達。通常の固定G数天井CLEAR/RETAIN比較は非該当だが、変更時のカプセル蓄積CLEAR/RETAINは未確認。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_FIXED_GAME_COUNT_CEILING_CONFIRMED**。設定変更後だけカプセル必要個数が短縮される等の数値はNONE_CONFIRMED_AFTER_RESEARCH。
- `modeAfterReset` / `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。通常内部状態とカプセルモードの再抽選/引継ぎを直接確定できず。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits` / `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。カプセル消失等を一般論から推測しない。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、カプセル表示、ステージ等による判別根拠を直接確定できず。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

## 主要出典 — GRADIUS THE SLOT（取得日 2026-09-04）

- コナミ公式アーカイブ: `https://www.konami.com/amusement/psm/archive/ps/2011/gradius/`
- グリーンべると/P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/4722/greenbelt`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6402`
- パチビー: `https://www.pachibee.jp/machines/index/211060004`
- パチマガスロマガ基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/26/a.php`
- パチマガスロマガTOP: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/26/kpe_slot_26.php`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0201/`
- pacnk機種ページ: `https://pacnk.com/slot/2011/gradius/top.php`
- pacnk設定判別: `https://pacnk.com/slot/tools/sh_gradius.html`
- A-SLOT: `https://www.a-slot.com/SHOP/kpe30.html`

## 遡及QA継続地点

- **美川〜さそり座のサラリーマン〜 (`docs/real_machine_db/machines/2006-11_mikawa-sasoriza-no-salaryman.md`) までresetBehavior v0.7補完済み**。
- `docs/real_machine_db/machines/2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みなので重複更新せずスキップする。
- その後は recursive tree / contentsの実パス順に進み、Thunder V SPECIALの次に存在する最初のresetBehavior欠損レコードを直接fetchして確定してから遡及QA再開。code search未ヒットだけでQA前線を動かさない。

## 本線の次回再開地点

1. **recordCount 594 / chronologicalFrontier 2011-07-22**から開始。
2. **2011-07-22同日群の残存監査**を最優先。tree実パス/contentsと外部導入カレンダーを照合し、同日未登録があれば先に処理する。
3. 同日群が閉じたら **2011-07-23〜07-24境界**を監査。GRADIUSの07-24は納品日なので重複追加しない。
4. 次の具体日付き未登録5号機を時系列順に確定して595件目へ進む。月のみ資料の機種は具体日を推測固定せず、より確かな具体日候補との前後関係を保持する。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー・シリーズ名・設定変更/朝一/据え置き/電源OFF ON/天井/モード/状態/ガックン等へ検索語を変え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで横断してから確定する。
