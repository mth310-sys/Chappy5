# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **631**
- latestMachineAdded: **パチスロ鉄拳2nd**（山佐）
- latestRecord: `docs/real_machine_db/machines/2012-01-10_pachislot-tekken-2nd.md`
- chronologicalFrontier: **2012-01-10**
- frontierLatestExactDateMachine: **パチスロ鉄拳2nd**
- schema: **resetBehavior v0.7**
- status: **2012-01-10_SAME_DAY_AUDIT**

## 今回の本線追加 — パチスロ鉄拳2nd

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「不二子～100億$の女神～」を再取得して開始。
- 開始時正本は **recordCount 630 / chronologicalFrontier 2012-01-03**。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 2012-01-03同日群と01/06群をメーカー別一覧、旧カレンダー、P-WORLD系、当時資料で再監査。今回、01/10より前へ差し込む具体日付き未登録5号機を追加確定できなかったため01/10へ前進。
- GitHub code searchと想定実パス直接fetchで「パチスロ鉄拳2nd」が未登録であることを確認し631件目として追加。
- 山佐公式は稼働時期2012年1月、K-Navi・ハズセ・パチビーは導入開始 **2012-01-10** で一致。

### 性能コア

- systemType: **A+ART**。
- 型式名: **パチスロ鉄拳2ZX**。
- 検定番号: **1S0918**。
- 設定別機械割: **96.7 / 98.9 / 101.3 / 104.0 / 107.1 / 112.2%**。
- BIG合算: **1/425.6 / 1/392.4 / 1/402.1 / 1/362.1 / 1/368.2 / 1/341.3**。
- REG: **1/642.5 / 1/595.8 / 1/606.8 / 1/546.1 / 1/555.4 / 1/512.0**。
- ボーナス合算: **1/256.0 / 1/236.6 / 1/241.8 / 1/217.7 / 1/221.4 / 1/204.8**。
- ART初当たり: **1/566.5 / 1/493.7 / 1/540.4 / 1/460.0 / 1/510.2 / 1/441.3**。
- 50枚ベース: **約31.4～31.7G/50枚**。
- S-BIG約**300枚**、N-BIG約**200枚**、鉄拳BONUS約**40枚**。
- ART純増: **約+1.7枚/G**。
- 鉄拳RUSH基本G数はメーカー公式・パチマガスロマガ・必勝本が **1セット40G**。P-WORLD/パチビーは **50G+α** とするため `CONFLICT_ART_BASE_GAME_DEFINITION` として双方を保持。
- 通常天井は **ボーナス間1400G → デビルRUSH**。ART当選では天井ゲーム数をリセットしない。

### resetBehavior v0.7

- `settingChangeBehavior`: **INTERNAL_STATE_RESELECTION_CONFIRMED**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `ceilingAfterReset`: **UNVERIFIED_AFTER_RESEARCH_NO_RESET_SHORTENING_CONFIRMED**。
- `modeAfterReset`: **NO_SEPARATE_GAME_COUNT_RESET_MODE_CONFIRMED**。
- `stateAfterReset`: **CONFIRMED_SETTING_CHANGE_STATE_RESELECTION**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **OTHER_SETTING_CHANGE_CAN_START_HIGH_OR_SUPERHIGH_OR_PRECURSOR_STATE_CONFIRMED**。
- `resetPenalties`: **SAME_SETTING_REWRITE_STARTS_LOW_STATE_100_PERCENT_CONFIRMED**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **CONFIRMED_SETTING_CHANGE_STATE_DISTRIBUTION**。

### 公開朝一/設定変更数値

- 同一設定打ち直し: **低確100%**。
- 他設定変更時: **低確50.00%、通常16.67%**。
- 高確: 設定1/3/5 **30.83%**、設定2/4/6 **29.83%**。
- 超高確: **0.50%**。
- 前兆: 設定1/3/5 **2.00%**、設定2/4/6 **3.00%**。
- 設定変更時の1400G天井カウンタCLEAR/RETAINは、検索語・資料系統を変えて再探索しても本機固有の直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き、単純電源OFF→ON、ガックン/初期出目/液晶等の変更判別も本機固有直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。

## conflicts

1. `CONFLICT_ART_BASE_GAME_DEFINITION`
   - 山佐公式 / パチマガスロマガ / 必勝本: 鉄拳RUSH **1セット40G**。
   - P-WORLD / パチビー: **1セット50G+α**。
   - メーカー公式を主値としつつ、平均化せず差を保持。

## 時系列監査

- 2012-01-03同日群および01/06群を再監査し、今回01/10より前に差し込む具体日付き未登録5号機は追加確定できず。
- 01/10の「パチスロ鉄拳2nd」を登録。
- 前handoffで確認済みの後続日付ブロックは **01/13 → 01/16 → 01/20 → 01/23 → 01/27**。
- 既知候補「パチスロ サクラ大戦3 ～Loop ver.～」はパチビーで **2012-01-23** を確認済み。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 631 / chronologicalFrontier 2012-01-10**から開始。
2. **2012-01-10同日群**の残存漏れをメーカー別一覧/P-WORLD/HAZUSE/当時業界で最終監査。
3. 追加がなければ **01/13 → 01/16 → 01/20** の順に監査。
4. **01/23**では既知候補「パチスロ サクラ大戦3 ～Loop ver.～」のGitHub実レコードを直接確認し、未登録なら性能コア+resetBehavior v0.7を収集。
5. 以降 **01/27**へ進む。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

### パチスロ鉄拳2nd
- 山佐公式: `https://yamasa-next.co.jp/model_tk2/`
- ハズセ: `https://hazuse.com/machine/pachislot/1S0918/`
- K-Navi: `https://p-kn.com/slot/1537/`
- パチビー: `https://www.pachibee.jp/machines/index/211110004`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6560`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/184/a.php`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/1952/1/32654`
- パチスロ解析ガイド: `https://pachislot-guide.net/2012/tekken2/`

### 次回順序確認
- **2012-01-10同日群最終監査 → 01/13 → 01/16 → 01/20 → 01/23（サクラ大戦3 Loop Ver.）→ 01/27。**
