# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **656**
- latestMachineAdded: **スカイラブ4**（SNKプレイモア）
- latestRecord: `docs/real_machine_db/machines/2012-05-21_sky-love-4.md`
- chronologicalFrontier: **2012-05-21**
- frontierLatestExactDateMachine: **スカイラブ4**
- schema: **resetBehavior v0.7**
- status: **CONTINUE_2012-05-21_SAME_DAY_GROUP**

## 今回の同期・時系列監査

- 最新mainのREADME全文、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「真田純勇士すぺしゃる」を確認して開始。
- INDEXは旧地点19件のままなので、README規定どおり最新LATEST_HANDOFFと実レコードを優先。開始時正本は recordCount 655 / frontier 2012-05-14。
- 2012-05-14同日群と05-15〜05-20を、導入日/納品日/記事日を分離して境界再検索。今回、真田純勇士すぺしゃる以外に05-14〜05-20の具体日付付き未登録5号機を確定できず、05-20まで閉じた。
- 既知アンカー2012-05-21「スカイラブ4」をK-Navi、パチ＆スロ必勝本、SNKプレイモア公式で再確認。
- `docs/real_machine_db/machines/2012-05-21_sky-love-4.md` をmainで404確認後、656件目として追加。
- 追加後の2012-05-21同日群再検索で **KPE「スパイガール2」** がK-Navi上2012-05-21ホール導入開始と判明。よって同日群は未閉鎖。

## 今回の本線追加 — スカイラブ4

### 導入・分類

- manufacturer: **SNKプレイモア**。
- releaseDate: **2012-05-21**。K-Naviとパチ＆スロ必勝本で一致。SNK公式は稼働日2012年5月。
- generation: **5号機**。
- systemType: **A+ART / ゲーム数管理CZ / セット数+ゲーム数上乗せART**。
- formalModelName: **スカイラブ4A**（SNK公式）。
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**。

### 性能コア

- BIG: **1/496.5 / 481.9 / 468.1 / 455.1 / 442.8 / 431.2**。
- REG: **1/585.1 / 565.0 / 546.1 / 528.5 / 512.0 / 496.5**。
- ART初当り: **1/544.1 / 524.7 / 522.8 / 464.3 / 431.1 / 383.0**。
- ボーナス合算: **1/268.6 / 260.1 / 252.1 / 244.5 / 237.4 / 230.8**。
- 機械割はCONFLICT。系列A（P-WORLD / 5号機クロニクル）= **96.9 / 98.7 / 99.9 / 104.2 / 109.3 / 114.3%**。系列B（パチ＆スロ必勝本 / pacnk）= **97.2 / 99.0 / 100.3 / 104.6 / 109.8 / 114.8%**。平均せず両系列保存。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。2024年スマスロ版の値は別機種なので不採用。
- BIG約**203枚**、REG約**36枚**。
- ART「スカイラッシュ」: **1セット50G、約+1.7枚/G**。
- 通常モード: **通常A / 通常B / 天国**。無限SC到達ゲーム数は通常A **999G** / 通常B **768G** / 天国 **256G**。

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_GAME_COUNT_CLEAR_AND_MODE_RESELECT**。
- `gameCounterReset`: **CONFIRMED_CLEAR_ON_SETTING_CHANGE**。
- `modeAfterReset`: **CONFIRMED_RESELECT_WITH_PUBLIC_DISTRIBUTION**。
  - 設定1〜3: 通常A **37.50%** / 通常B **37.50%** / 天国 **25.00%**。
  - 設定4〜6: 通常A **33.33%** / 通常B **33.33%** / 天国 **33.33%**。
- `ceilingAfterReset`: **MODE_DEPENDENT_AFTER_RESET**。変更専用固定短縮天井ではなく、再抽選モードにより999/768/256G。朝一天国25〜33.33%が主要恩恵。
- `stateAfterReset`: **PARTIAL_CONFIRMED_MODE_RESELECT_ONLY**。モード再抽選は確認。その他ART/CZ内部状態処理は直接資料不足。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。純据え置き時の本機固有保持契約を直接確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONの直接根拠を確定できず。
- `resetBenefits`: **CONFIRMED_CHANCE_OF_HEAVEN_START**。天国開始25.00〜33.33%。
- `resetPenalties`: 前日ゲーム数進捗の消失。
- `resetDetection`: **PARTIAL_PUBLIC_COUNTER_INFORMATION**。通常ゲーム数は液晶右下で確認可能。ただしガックン/初期出目/初期ステージ等の変更判別条件は再探索後も未確定。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。

### 品質メモ

- 機械割2系列は差が丸め範囲を超えるためCONFLICT。旧解析ページの設定1「69.9%」は、設定2〜6が系列Aと一致し他資料とも大幅乖離するため明白な誤記候補として採用しない。
- 天井を単純に999Gとする回顧資料もあるが、モード別直接解析の通常A999G / 通常B768G / 天国256Gを保持。
- 2024年カルミナ「スマスロ Sky Love」の設定変更/電源OFF→ON/天井短縮/50枚情報は別機種のため一切流用していない。
- baseGamesPer50、approvalNumber、純据え置き、単純電源OFF→ON、ガックン等は検索語・資料系統変更後も直接根拠不足のためUNVERIFIED。

## 次回再開地点

1. **recordCount 656 / chronologicalFrontier 2012-05-21**から開始。
2. **2012-05-21同日群を継続**。次の未登録確定候補は **KPE「スパイガール2」**。K-Naviで2012-05-21ホール導入開始を確認済み。
3. repo重複確認後、未登録なら657件目候補として性能コア+resetBehavior v0.7を収集する。
4. スパイガール2処理後も2012-05-21同日群を最終監査し、漏れがなければ05-22以降へ前進する。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて再探索。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- SNKプレイモア公式 スカイラブ4: `https://slot.snk-corp.co.jp/official/skylove4/index.html`
- SNKプレイモア公式 ゲームフロー&ボーナス: `https://slot.snk-corp.co.jp/official/skylove4/game/index.html`
- K-Navi スカイラブ4: `https://p-kn.com/slot/1624/`
- P-WORLD スカイラブ4: `https://www.p-world.co.jp/machine/database/6699`
- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/2016/1/34455`
- パチ＆スロ必勝本 通常時のモード: `https://p.hisshobon.jp/machine/2016/1/34537`
- パチ＆スロ必勝本 通常時のSC抽選: `https://p.hisshobon.jp/machine/2016/1/35065`
- パチ＆スロ必勝本 ART概要: `https://p.hisshobon.jp/machine/2016/1/34461`
- 5号機クロニクル SNKプレイモア: `https://5goki.com/snkplaymore`
- pacnk スカイラブ4: `https://pacnk.com/slot/tools/sh_skylove4.html`
- 当時記事 スロ速VIP: `https://slosoku.com/archives/5283885.html`
- K-Navi スパイガール2（次候補）: `https://p-kn.com/slot/1622/`

## GitHub commits

- 真田純勇士すぺしゃる machine record: `5af5e51f1d31eb8561330da2efe27f93de650100`
- スカイラブ4 machine record: `aa9dec461adee380df5563578d55c860e9f80936`
