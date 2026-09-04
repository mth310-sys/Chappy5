# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **559**
- latestMachineAdded: **テンションブースター**（北電子 / 2011-03-07主値、HAZUSE 2011-03-04導入開始）
- latestRecord: `docs/real_machine_db/machines/2011-03-07_tension-booster.md`
- chronologicalFrontier: **2011-03-07**
- frontierLatestExactDateMachine: **テンションブースター**（北電子 / 2011-03-07）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、558レコード「残機尽きるまで私は戦う」を再取得して開始。
- 開始時正本は **recordCount 558 / chronologicalFrontier 2011-03-07**。会話履歴ではなくGitHub最新mainを正とした。
- LATEST_HANDOFFの最優先未登録候補 **北電子「テンションブースター」**をrepo突合し、未登録を確認して559件目として追加。
- K-Naviのホール導入開始 **2011-03-07** とHAZUSEの導入開始 **2011-03-04** は平均せず、日付定義差として分離保存。

## 今回追加 — 559 テンションブースター

- メーカー: **北電子**
- 型式名: **テンションブースター2**
- 検定番号: **0S0765**
- 5号機 / A+RT / 次回ボーナスまで継続する無限RT
- 導入主値: **2011-03-07**
- 別導入資料: **2011-03-04**（HAZUSE。定義差として保持）
- 機械割: **97.5 / 98.8 / 100.1 / 103.3 / 107.6 / 114.0%**（北電子公式）
- BIG: **1/322.8 → 1/232.4**
- REG: **1/455.1 → 1/284.9**
- ボーナス合成: **1/188.9 → 1/128.0**
- RT合成: **1/163.2 → 1/112.9**（北電子公式表記）
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- 無限RT: **約+0.3枚/G、次回ボーナスまで継続**
- BIG: **最大311枚**（規定払い出し344枚）
- REG: **最大103枚**（規定払い出し104枚）
- 天井: **ナシ**（パチマガスロマガ機種別攻略で明示）

### resetBehavior v0.7 — テンションブースター

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガに本機専用「朝イチ・設定変更」項目の存在は確認したが、設定変更時のRT状態・内部フラグ等の本文を安全に回収できず。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のRT状態・内部フラグについて直接根拠未回収。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のRT状態・内部フラグ・初期出目を直接確定できず。
- `gameCounterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。通常ゲーム数天井がないためCLEAR/RETAIN対象なし。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING**。
- `modeAfterReset`: **NONE_CONFIRMED_AFTER_RESEARCH**。長期ゲーム数モード/天井モードの公開仕様なし。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一短縮天井・朝一RT確定等を確認できず。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失は非該当。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/朝一判別数値を確定できず。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `numericResetData`: **NONE_RECOVERED_AFTER_RESEARCH**。

## 主要出典 — 559（取得日 2026-09-04）

- 北電子公式: `https://www.kitadenshi.co.jp/slot/tensionbooster/`
- K-Navi: `https://p-kn.com/slot/1361/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6238`
- パチマガスロマガ公式アーカイブ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/76/kitac_slot_76.php`
- パチマガスロマガ基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/76/a.php`
- HAZUSE: `https://hazuse.com/machine/pachislot/0S0765/`
- 当時記事: `https://ameblo.jp/pachi-victory/entry-10780353387.html`

## conflicts / 注意

- **release chronologyはSOURCE_DATE_DIFFERENCEとして分離**: K-Navi=2011-03-07、HAZUSE=2011-03-04。平均化しない。
- 性能コアの主要数値は北電子公式を主系列とし、K-Navi/P-WORLD系と整合を確認。
- 天井「ナシ」は直接資料があるため、天井ゲーム数リセットをUNKNOWNにせずNOT_APPLICABLEとした。
- 「朝イチ・設定変更」解析項目の存在だけを根拠に具体的リセット挙動を作らない。
- 既存 `COMPLETE_CORE` 系の性能完了判定とresetBehavior QA状態は分離管理する方針を維持。

## 今回のGitHub更新

- 559追加: `docs/real_machine_db/machines/2011-03-07_tension-booster.md`
- 559 machine record commit: `4418c49bf116e8fcc5f99745b03d43d316843e2e`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` はresetBehavior収集済みのため重複QA対象外。
- 今回もQA済み範囲を推測では動かしていない。machine treeを日付/実パス順に直接確認し、怪胴王直後の最初のresetBehavior欠損レコードを確定してから追補する。

## 次回再開地点

1. **recordCount 559 / chronologicalFrontier 2011-03-07**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 559レコードを再取得。
2. **2011-03-07同日群の残存未登録候補、山佐「パチスロ『モンキーターン』」を最優先**。パチビー/K-Naviは2011-03-07、HAZUSEは2011-03-04、グリーンべるとは3月上旬納品予定なので、発表日/納品日/導入日を分離して扱う。
3. モンキーターンの性能コア + v0.7 resetBehavior（設定変更/据え置き/電源OFF→ON、ゲーム数・天井、モード・状態、朝一恩恵/不利、変更判別、公開朝一数値）を複数系統で照合する。
4. 3/7同日群を閉じてから3/8以降の最古未登録機へ進む。
5. 遡及QAは怪胴王直後のmachine treeを日付/パス順に確認し、最初のresetBehavior欠損レコードから再開。PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索し、競合は平均せずCONFLICT。
