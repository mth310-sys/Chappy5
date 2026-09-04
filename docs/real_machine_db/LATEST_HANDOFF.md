# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **640**
- latestMachineAdded: **ヱヴァンゲリヲン～生命の鼓動～**（ビスティ）
- latestRecord: `docs/real_machine_db/machines/2012-02-27_evangelion-seimei-no-kodo.md`
- chronologicalFrontier: **2012-02-27**
- frontierLatestExactDateMachine: **ヱヴァンゲリヲン～生命の鼓動～**
- schema: **resetBehavior v0.7**
- status: **2012-02-27_SAME_DAY_GROUP_AUDIT_REQUIRED__DATE_AND_PAYOUT_CONFLICTS_PRESERVED__NEXT_EARLIEST_UNPROCESSED_AFTER_OR_ON_2012-02-27**

## 今回の本線追加 — ヱヴァンゲリヲン～生命の鼓動～

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「チェリーパラダイス」を確認して開始。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時正本は **recordCount 639 / chronologicalFrontier 2012-02-20 / latestMachineAdded チェリーパラダイス**。
- 2012-02-20同日群を再監査し、HANDOFFで保留されていた「ヱヴァンゲリヲン～生命の鼓動～」はK-Navi/4Gamer/GAME Watchの2012-02-27導入根拠を優先し、2月27日到達時に処理。
- GitHubコード検索で同名レコードなしを確認後、640件目として追加。

### 導入日・型式

- 時系列キー: **2012-02-27**。
- K-Naviはホール導入開始2012-02-27。2012-02-20付のK-Navi導入前記事も「2月27日（最速導入）」と記載。
- フューチャースコープ発表を掲載した4Gamer、およびGAME Watchも2012-02-27より順次全国ホール導入開始と記録。
- HAZUSEは2012-02-20導入開始とするため **CONFLICT_DATE**。平均せず双方保持。
- 型式名: **ヱヴァンゲリヲン・生命の鼓動**。
- 検定番号: **1S1168**。

### 性能コア

- systemType: **ノーマル+RT / ボーナス主体 / 無限RT搭載**。
- 設定別機械割は **CONFLICT**。
  - P-WORLD / けんのスロットシミュレーション: **97.7 / 99.6 / 102.1 / 103.9 / 107.6 / 112.5%**。
  - HAZUSE: **97.2 / 98.5 / 100.2 / 104.5 / 107.5 / 112.9%**。
- BIG合算: **1/321.3 / 312.0 / 313.5 / 296.5 / 288.6 / 257.0**。
- REG: **1/504.1 / 452.0 / 464.8 / 420.1 / 422.8 / 354.3**。
- ボーナス合算: **1/196.2 / 184.6 / 187.3 / 173.8 / 171.6 / 148.9**。
- 50枚ベース: **39.59 / 40.42 / 41.71 / 43.08 / 44.56 / 46.85G/50枚**。直接掲載値だが単一解析資料のためANALYSIS_SINGLE。
- 基本獲得: SPECIAL BIG最大448枚 / SUPER BIG最大311枚 / NORMAL BIG最大207枚 / REG最大104枚。
- 覚醒モード: 次回ボーナスまで継続するRT、純増約**+0.3枚/G**。
- REG後は覚醒リプレイ高確「覚醒チャンス」。通常時チャンスリプレイ成立で最大7GのプチRT/CZ。
- 通常ゲーム数天井: **非搭載**。

### resetBehavior v0.7

- `settingChangeBehavior`: **NO_GAME_COUNT_CEILING_APPLICABLE__RT_CZ_TRANSIENT_STATE_BEHAVIOR_UNVERIFIED_AFTER_RESEARCH**。
- `carryOverBehavior`: 覚醒チャンス/覚醒モード/プチRT等の一時状態について **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: 同上、単純電源OFF→ONの本機固有処理は **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING**。
- `modeAfterReset`: 永続ゲーム数/AT/ARTモードは非該当。一時RT/CZ状態の処理は **UNVERIFIED_AFTER_RESEARCH**。
- `stateAfterReset`: 覚醒チャンス/覚醒モード/7GプチRT等の途中状態は **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: ガックン、初期出目、液晶/パネル、MAGI等による本機固有の変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 一般的な5号機ノーマル+RTの挙動から推定転記していない。

### 競合・注意

- 導入日はHAZUSE=2012-02-20 vs K-Navi/4Gamer掲載メーカー発表/GAME Watch=2012-02-27。時系列キーは複数当時資料が一致する02-27、HAZUSE値はCONFLICT保持。
- 機械割はP-WORLD系97.7〜112.5% vs HAZUSE 97.2〜112.9%。単純丸めではないためCONFLICT。
- 50枚ベースは設定別直接値を取得できたが、別系統直接表による照合は今回未確定。
- 設定変更/据え置き/電源OFF→ON時のRT/CZ一時状態、ガックン等は表記・型式・検索語・資料系統を変えて再探索後も確定せずUNVERIFIED_AFTER_RESEARCH。

## 時系列監査

- 2012-02-20同日群はチェリーパラダイス追加後に再監査し、生命の鼓動は02-27へ日付保留していた。
- 2012-02-21〜02-26の新規5号機について「ホール導入開始」「導入開始日」等で日付別再探索したが、今回新たな確定候補は得られなかった。
- 生命の鼓動を02-27として追加し、chronologicalFrontierを2012-02-27へ進めた。
- 次回は **2012-02-27同日群の残存未登録5号機を最終監査**。追加がなければ2012-02-28以降の最古未処理5号機へ進む。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 640 / chronologicalFrontier 2012-02-27**から開始。
2. **2012-02-27同日群の未登録5号機**をK-Navi/P-WORLD/パチビー/HAZUSE/当時業界記事/メーカー資料で最終監査。
3. 同日群に漏れがなければ **2012-02-28以降の最古未処理5号機**を日付順に確定する。
4. 候補確定後、GitHubコード検索と想定実パス直接fetchで重複確認→性能コア+resetBehavior v0.7を収集。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

- SANKYOオンライン博物館: `https://www.sankyo-fever.jp/collection/875/`
- K-Navi: `https://p-kn.com/slot/1576/`
- 4Gamer / フューチャースコープ発表: `https://www.4gamer.net/games/148/G014838/20120227009/`
- GAME Watch: `https://game.watch.impress.co.jp/docs/news/515021.html`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S1168/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6602`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/bisty_slot/20/a.php`
- けんのスロットシミュレーション: `https://kenslo65536.com/kaiseki/eva-seimei.html`
- 当時天井攻略記事: `https://mezase20.com/blog-entry-522.html`

## GitHub commits

- machine record: `a35fdcfdada47093de7af7ea0a822b5e14d3d8c6`
