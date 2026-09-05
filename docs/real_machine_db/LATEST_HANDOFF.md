# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **683**
- latestMachineAdded: **クレアの秘宝伝 ～はじまりの扉と太陽の石～**（大都技研）
- latestRecord: `docs/real_machine_db/machines/2012-09-03_kurea-no-hihouden-hajimari-no-tobira-to-taiyou-no-ishi.md`
- chronologicalFrontier: **2012-09-03**
- frontierLatestExactDateMachine: **クレアの秘宝伝 ～はじまりの扉と太陽の石～**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-09-03_PACHISLOT_GROUP__NEXT_BOUNDARY_TO_2012-09-10**

## 今回の同期・時系列監査

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、最新レコードを確認して開始。
- 開始時正本は recordCount 682 / chronologicalFrontier 2012-08-20 / 08-20同日群OPEN。
- 2012年8月のパチスロ一覧を再監査し、押忍!! 豪炎高校應援團、ドンちゃん祭、海物語ミラクルマリン、夜王の4機種系統を確認。最新mainではこれらが既収録のため、08-20同日群と08-21〜09-02境界を閉鎖方向で処理。
- 2012-09-03候補としてhandoffに記載されていた「おそ松くん」（サンスリー）は、K-Navi/業界資料で **CRおそ松くん＝パチンコ** と確認。パチスロ本線候補から除外した。
- 同じ2012-09-03の大都技研「クレアの秘宝伝 ～はじまりの扉と太陽の石～」はmain未登録を確認し、683件目として追加。
- 2012年9月パチスロ一覧ではクレアのほか、リングにかけろ1 ギリシア十二神編、聖闘士星矢、キュインぱちすろ南国育ち 1st vacation、戦人、覇王伝 零、兎－野生の闘牌－、トロピカーナ、マハロ-30、ニューワンバー-30を確認。次回は具体導入日を古い順に確定して進む。

## 今回の本線追加 — クレアの秘宝伝 ～はじまりの扉と太陽の石～

### 識別

- manufacturer: **大都技研**
- releaseDate key: **2012-09-03**
- generation: **5号機**
- systemType: **ノーマルタイプ / ボーナス主体 / プチRT演出**
- modelName: **クレアの秘宝伝K**
- approvalNumber: **1S1039**
- releaseDate conflict: K-Navi/パチ＆スロ必勝本 **2012-09-03** vs HAZUSE **2012-09-10**。平均せず保持。

### 性能コア

- 市場掲載/解析機械割: **97.50 / 98.90 / 101.30 / 105.10 / 108.70 / 115.30%**
- 完全技術介入シミュレート: **98.06 / 99.63 / 101.80 / 105.40 / 109.39 / 114.46%**
- BIG: **1/287.44 / 282.48 / 273.07 / 256.00 / 237.45 / 221.41**
- REG: **1/321.25 / 303.41 / 295.21 / 277.69 / 260.06 / 227.56**
- ボーナス合算: **1/151.7 / 146.3 / 141.9 / 133.2 / 124.1 / 112.1**
- 50枚ベース: **34.6G（設定1）～37.3G（設定6）**
- BIG: **約311枚** / REG: **約104枚**
- ART/AT非搭載。ゲーム数天井/規定G天井は確認されず。

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_STATE_TRANSITION**。初代固有の設定変更時RT/液晶初期状態は確定できず、後継クレア2/3の仕様を流用しない。
- `carryOverBehavior`: **NO_GAME_COUNT_CEILING_TO_CARRY_OVER_CONFIRMED**。天井進捗の据え置き/宵越しはNOT_APPLICABLE。RT/液晶状態の保持は未確定。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。電源OFF→ONのみの初代固有挙動は高信頼資料で未確定。
- `gameCounterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING**。リセット専用短縮天井なし。
- `modeAfterReset`: 規定GモードはNOT_APPLICABLE。プチRT/高確率演出状態の変更時処理は未確定。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: 初代固有ガックン/初期ステージ等は **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetQaStatus: **PARTIAL_RESET_QA_AFTER_RESEARCH**。性能コアはCOMPLETE_CORE相当。

## 遡及resetBehavior QA 進捗

- 前handoffから継続するQA再開地点は変更しない。
- 遡及QA次回再開地点: **`docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`**。
- 本線の時系列収集を止めず、QAは別リレーで既存レコードのresetBehavior欠損だけ補完する。

## 次回再開地点

1. **recordCount 683 / chronologicalFrontier 2012-09-03 / 09-03パチスロ群CLOSED**から開始。
2. **2012-09-04〜09-09境界監査**を行い、より古い具体日付き未登録機を確認する。
3. 次の既知具体日アンカーは **2012-09-10**。少なくとも「パチスロ聖闘士星矢」（三洋）と「リーチラッシュ」（ベルコ）がALL7.jpの09-10導入予定一覧にある。重複確認後、古い順に処理する。
4. 9月月間候補として「リングにかけろ1 ギリシア十二神編」「キュインぱちすろ南国育ち 1st vacation」「戦人」「覇王伝 零」「兎－野生の闘牌－」「トロピカーナ」「マハロ-30」「ニューワンバー-30」を保持。必ず具体日を照合して時系列順に挿入する。
5. `おそ松くん`（サンスリー/2012-09-03）はCR機のためパチスロ本線から除外。旧handoff記述を再利用しない。
6. PARTIAL/UNVERIFIED/reset欠損は検索語・資料系統を変えて十分再探索。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

- K-Navi クレアの秘宝伝: `https://p-kn.com/slot/1694/`
- P-WORLD クレアの秘宝伝: `https://www.p-world.co.jp/machine/database/6820`
- HAZUSE クレアの秘宝伝: `https://hazuse.com/machine/pachislot/1S1039/`
- パチ＆スロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/2062/1/35798`
- パチ＆スロ必勝本 打ち方説明: `https://p.hisshobon.jp/machine/2062/1/36020`
- パチ＆スロ必勝本 シミュレート: `https://p.hisshobon.jp/machine/2062/1/36021`
- K-Navi CRおそ松くん（除外根拠）: `https://p-kn.com/pachinko/1693/spec/2119/`
- ALL7.jp 2012年9月導入予定一覧: `https://www.all7.jp/plans/index/2012/09`
- 2012年パチスロ機種一覧: `https://www.nikuziru.com/slot/2012slot-list`

## GitHub commits

- クレアの秘宝伝 machine record: `d157b41a6d24f01c422e9d2aacf2351cd1949adb`
