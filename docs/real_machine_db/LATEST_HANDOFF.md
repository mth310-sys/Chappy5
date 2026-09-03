# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **539**
- latestMachineAdded: **凄忍**（ユニバーサルエンターテインメント / 2011-01-24）
- latestRecord: `docs/real_machine_db/machines/2011-01-24_sugonin.md`
- chronologicalFrontier: **2011-01-24**
- frontierLatestMachine: **凄忍**（同日群継続中）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、538「燃えよ!功夫大戦」を再取得。
- `INDEX.md` は旧19件地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時は recordCount 538 / chronologicalFrontier 2011-01-24。
- LATEST_HANDOFFが同日群の次候補として指定した「凄忍」を処理。想定レコードパスがmainに存在しないことを確認して539件目として追加。
- chronologicalFrontierは同日群継続のため2011-01-24を維持。

## 539 — 凄忍

- メーカー: **ユニバーサルエンターテインメント**
- 世代/タイプ: **5号機 / A+ART / 押し順ART / 引き戻しゾーン**
- 導入主値: **2011-01-24**（K-Naviホール導入開始）
- 機械割: **96.4 / 98.4 / 100.9 / 105.0 / 110.0 / 115.0%**
- BIG: **1/399.61 / 390.10 / 381.02 / 372.36 / 364.09 / 356.17**
- REG: **1/655.36 / 630.15 / 585.14 / 546.13 / 481.88 / 431.16**
- ボーナス合算: **1/248.24 / 240.94 / 230.76 / 221.41 / 207.39 / 195.05**
- ART出現率: **1/379.0 / 345.8 / 313.9 / 281.8 / 229.8 / 177.8**
- K-Naviのボーナス＋ART合算: **1/150 / 142 / 133 / 124 / 109 / 93**（定義別として保持）
- BIG: **約312〜315枚** / REG: **約72枚**
- ART「凄忍タイム」: **50 / 100 / 150 / 300G、ボーナス込み約+2.1枚/G**
- 通常チャンス目約**1/80** → ART中約**1/40**
- ART終了後は条件により**引き戻しゾーン（超高確）**へ移行
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- 通常天井: K-Navi/P-WORLDで搭載自体は確認。pacnk補助表示に約1000Gの自動抽出目安があるが、原解析本文を独立確認できないため**正確な起算点/G数/恩恵はUNVERIFIED_AFTER_RESEARCH**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**
- ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用短縮天井は確認できず。
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ART終了後の超高確引き戻し状態は存在するが、設定変更時の初期状態/再抽選は確定できず。
- resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**
- 公開朝一専用数値: **NONE_CONFIRMED_AFTER_RESEARCH**
- advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）
- 一般的な5号機挙動からは補完していない。

## CONFLICT / QA注意 — 539

- 後年5号機クロニクルは本機を「リアルボーナス非搭載」「擬似ボーナス」「すごろくマップ」「忍ノ試練/月光ノ刻」等と説明するが、K-Navi/P-WORLD/当時パチマガスロマガのリアルBIG/REG搭載・凄忍タイム仕様と明確に矛盾。**SOURCE_ERROR_OR_PAGE_CONTAMINATION**としてゲーム性、獲得枚数、resetBehaviorの根拠から除外。
- BIG実獲得表記はパチマガスロマガ約312枚、K-Navi/P-WORLD 315枚。規定払い出し408枚は一致しており、丸め/実獲得目安差として双方を保持。

## 主要出典 — 539（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1332/`
- パチマガスロマガ基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/universal_slot/01/a.php`
- パチマガスロマガ確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/universal_slot/01/h.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6202`
- pacnk: `https://pacnk.com/slot/tools/sh_sugonin.html`
- 5号機クロニクル（品質注意・ゲーム性根拠には不使用）: `https://5goki.com/universal`

## 今回のGitHub更新

- 539追加: `docs/real_machine_db/machines/2011-01-24_sugonin.md`
- machine record commit: `c77eec3618922891f9d7780917ee48b32e0ab49a`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時に怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。

## 次回再開地点

1. **recordCount 539 / chronologicalFrontier 2011-01-24**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 538「燃えよ!功夫大戦」/ 539「凄忍」を再取得。
2. **2011-01-24同日群を継続**。直前HANDOFFで未登録確認済みの **「じゃりン子チエ 雷蔵伝説」** を最優先でrepo重複再確認し、具体導入日・メーカー/型式・性能コア・resetBehavior v0.7を処理する。
3. `超重神グラヴィオン`、`シスタークエスト2`、`あっぱれ剣士道`、`残機尽きるまで私は戦う` 等の2011年1月機も具体的な実ホール導入/納品日を再照合し、1/24以前または同日未処理が判明した場合は時系列遡及/同日補完する。
4. `残機尽きるまで私は戦う` の2011-01-21は展示会日なので導入日として採用しない。実納品/ホール導入日を別途確定してキューへ置く。
5. 欠損は表記・型式・メーカー・項目語を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧を横断後のみUNVERIFIED。競合は平均せずCONFLICT。
