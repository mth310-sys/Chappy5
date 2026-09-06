# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **803**
- latestRecordAdded: **ビッグボーナスX64**（タイヨー）— 2014-03-10
- latestRecord: `docs/real_machine_db/machines/2014-03-10_big-bonus-x64.md`
- chronologicalFrontier: **2014-03-10**
- frontierLatestMachine: **ビッグボーナスX64**（タイヨー）
- schema: **resetBehavior v0.7**
- status: **2014-03-10_GROUP_OPEN / BIG_BONUS_X64_ADDED**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前追加レコード `2014-02-17_jackpot-dream-plus.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を現在の正本として継続。
- 作業開始時正本は **recordCount 802 / chronologicalFrontier 2014-03-03 / 03-03群CLOSED / 03-04〜03-09境界CLOSED_FOR_CURRENT_RESEARCH**。
- 旧handoffの次機種候補 **2014-03-10「ビッグボーナスX64」** がmain未登録であることをGitHub検索で確認し、803件目として追加。
- 2014-03-10の具体日検索では今回ほかの未登録5号機を固定できていないが、全メーカー横断の同日群監査は次回の先頭で行うため **03-10_GROUP_OPEN** とする。

## 今回追加 — ビッグボーナスX64

### identity / 性能コア

- manufacturer: **タイヨー**。
- hall start: **2014-03-10**（HAZUSE具体日）。
- 型式名: **ビッグボーナスX64A**。
- 検定番号: **3S1100**。
- generation/system: **5号機 / ノーマル / ボーナス潜伏・規定ゲーム数告知 / 直撃ZONE**。
- payout: **96.5 / 98.0 / 100.5 / 103.5 / 107.0 / 112.5%**。
- ボーナス合成: **1/140.8 / 136.8 / 130.7 / 124.0 / 117.0 / 107.5**。
- 内部BIG成立確率: **全設定共通1/102.4**。
- 通常時出現率: **1/179.1〜1/112.5**。
- 直撃ZONE中出現率: **全設定共通1/102.4**。
- baseGamesPer50: **34.35G/1000円**。販売前当時記事34.5Gとも概ね一致。
- BIG: **最大約195枚 / 209枚払い出し**。
- BIG後: **直撃ZONE 20〜200G**。最大86%ループとされる。
- 天井: **BIG内部成立後最大218Gで告知/放出**。後年解析では **218Gまたはハズレ32回**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### resetBehavior v0.7

- パチマガスロマガの本機INDEXに **「朝イチ・設定変更」専用項目が存在**することは確認。
- ただし現存検索結果では専用本文の設定変更/電源OFF→ON比較表や数値を安全に回収できず、通常5号機の一般論で補完しない。
- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。
- gameCounterReset: 本機固有の「内部成立BIG→最大218G潜伏」進捗が設定変更/据え置き/電源OFF→ONでリセットか引継ぎか **UNVERIFIED_AFTER_RESEARCH**。
- ceilingAfterReset: 設定変更専用短縮天井 **NONE_CONFIRMED_AFTER_RESEARCH**。通常仕様218Gを朝一恩恵とは扱わない。
- modeAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits / resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: ガックン、初期出目、7ランプ、直撃ZONEランプ、朝一表示等まで検索語拡張したが本機固有確定判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。

## safeguards / definitions

- 通常掲載機械割 **96.5〜112.5%** と、パチマガスロマガ掲載の打ち方別シミュレートPAYOUT（例: 設定1 ボーナス狙い98.80% / 適当打ち93.11%）は定義が異なるため平均・競合処理をしない。
- **最大218G**はボーナス間天井ではなく、BIG内部成立後から告知/放出までの最大潜伏契約。AT機の通常天井と同じ定義でyardstickへ混ぜない。
- 「ハズレ32回」契約は後年解析で確認したため、複数当時資料で一致する218Gより信頼度を一段下げて保持。
- P-WORLDの直撃ZONEランプ説明は通常時のゾーン滞在示唆であり、設定変更判別契約へ拡張しない。

## 2014-03-10同日群の暫定監査

- 「2014-03-10 / 2014年3月10日」+ パチスロ/導入/新台で具体日検索を実施。
- 今回、ビッグボーナスX64以外の具体日付き未登録5号機は固定できなかった。
- ただし漏れ防止のため、次回開始時にHAZUSE/K-Navi/P-WORLD/メーカー別月間資料等で **03-10同日群を全メーカー横断再監査**してからCLOSED判定する。

## 次回再開地点

1. **recordCount 803 / chronologicalFrontier 2014-03-10 / 03-10_GROUP_OPEN** から開始。
2. まず2014-03-10同日群を全メーカー横断監査し、未登録機がなければ **03-10_GROUP_CLOSED_FOR_CURRENT_RESEARCH** にする。
3. 続いて **2014-03-11〜03-16境界監査**。
4. 漏れがなければ次の強い具体日アンカー **2014-03-17「パチスロ モンスターハンター 月下雷鳴」**（エンターライズ / 型式モンスターハンター月下雷鳴ZX / 検定3S0962）を次機種候補として処理する。
5. 03-17同日群は1機処理で閉じず、全メーカー横断監査後にCLOSED判定する。
6. 遡及resetBehavior QAは `docs/real_machine_db/machines/2007-02_pikaslo.md` から継続。新規時系列キューを止めない。
7. 2015-06-08到達時に **吉宗～極～（ヨシムネH2A4 / 3S1093）**を正式量産版として処理し、2014-02-17限定試験導入履歴とスペック差をidentity/conflictへ記録する。

## 主要出典 — 取得日 2026-09-06

### ビッグボーナスX64
- HAZUSE: `https://hazuse.com/machine/pachislot/3S1100/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7308`
- パチマガスロマガ TOP: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/79/taiyo_slot_79.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/79/h-1.php`
- パチマガスロマガ 小役確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/79/c.php`
- パチマガスロマガ 機種概要: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/79/a.php`
- 5号機クロニクル タイヨー: `https://5goki.com/taiyo`
- すろぱちくえすと 天井解析: `https://www.slopachi-quest.com/article/bbx64/`
- 当時業界系記事: `https://pachinkopachisro.com/archives/36021610.html`

### 次アンカー — モンスターハンター 月下雷鳴
- HAZUSE: `https://hazuse.com/machine/pachislot/3S0962/`

### 遡及QA
- 次対象: `docs/real_machine_db/machines/2007-02_pikaslo.md`
