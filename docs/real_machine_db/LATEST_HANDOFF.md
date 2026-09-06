# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **828**
- latestRecordAdded: **パチスロ まじかる☆タルるートくん**（ニューギン）— 2014-07-07
- latestRecord: `docs/real_machine_db/machines/2014-07-07_magical-taruruto-kun.md`
- chronologicalFrontier: **2014-07-07**
- frontierLatestMachine: **パチスロ まじかる☆タルるートくん**
- schema: **resetBehavior v0.7**
- status: **2014-07-07_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、827件目 `2014-06-16_tenpai-rush.md` を再読。
- INDEXは19件表記の旧集約状態。README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として継続。
- 作業開始時の正本は **827件 / 2014-06-16 / 06-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 2014-06-17以降をK-Navi導入カレンダー、ALL7月別一覧、当時業界記事、P-WORLD系検索で境界監査。
- 6月末検索で混入する「嬢王」「ブラックラグーン2」は2014年6月末～7月の当該検索文脈ではCRパチンコ機であり、パチスロ本線へ混入させない。
- 2014-06-17～07-06について、今回安全に具体的ホール導入日を固定できた未処理パチスロを確認できず **CLOSED_FOR_CURRENT_RESEARCH** とした。
- 次の具体日アンカー **2014-07-07**へ進み、K-Navi導入カレンダーで確認した **「パチスロ まじかる☆タルるートくん」**を828件目として処理。
- 07-07同日群には他の未処理候補が存在するため **GROUP_OPEN** のまま継続する。

## 今回追加 — パチスロ まじかる☆タルるートくん

### identity / 性能コア

- manufacturer: **ニューギン**。
- hall start: **2014-07-07**（K-Navi導入カレンダー）。
- generation/system: **5号機 / ART / BR非搭載 / CZ / ゲーム数・MB回数天井**。
- payoutRate: **97.0 / 98.4 / 100.2 / 103.3 / 107.1 / 111.7%**。
- ART初当たり: **1/198.1 / 1/188.7 / 1/177.1 / 1/158.2 / 1/137.0 / 1/114.8**。
- CZ: **1/253.86 / 1/248.22 / 1/237.36 / 1/204.39 / 1/174.54 / 1/144.25**。
- baseGamesPer50: **約35G**。
- ART「特訓RUSH」: **約2.0枚/G、初期40G以上**。
- ゲーム数天井: **999G**。
- MB回数天井: **12回**。
- formalModelName / inspectionNumber: 表記揺れ・型式/検定検索後も安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **COMPLETE_CORE**。

## パチスロ まじかる☆タルるートくん — resetBehavior v0.7

- settingChangeBehavior: 解析資料で **天井までのカウントリセット**を確認。
- gameCounterReset: **999Gゲーム数天井はRESET_CONFIRMED_ON_SETTING_CHANGE**。
- MB回数12回天井も同じ解析総括ではリセット対象として扱われるが、MBカウンタ単独の別系統直接照合は未取得のため **SUPPORTED_BY_ANALYSIS_SUMMARY / SECOND_SOURCE_UNVERIFIED** とした。
- ceilingAfterReset: 設定変更専用の短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- carryOverBehavior: 据え置き時のゲーム数・MB回数・モード・状態引継ぎを直接固定できる本機固有資料は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 設定変更なし電源OFF→ON時の契約は **UNVERIFIED_AFTER_RESEARCH**。
- modeAfterReset / stateAfterReset: 設定変更時の具体的モード・状態振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits / resetPenalties: 設定変更専用の主要恩恵/不利は **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 朝一・設定変更・据え置き・ガックン等を再探索したが本機固有の高信頼判別契約は **UNVERIFIED_AFTER_RESEARCH**。
- publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBehaviorQA: **PARTIAL**。

## CONFLICT / safeguard

- 999G天井到達時の恩恵について、CrankySevenは **ART当選**、スロパチクエストは **「ボーナス確定」**と表記。
- P-WORLDでは本機はBR非搭載。用語差/転記差を今回解消できないため、`CONFLICT_CEILING_BENEFIT_TERMINOLOGY_ART_VS_BONUS` として平均・同一視せず保持。
- 通常時の全モード移行テーブル、小役別抽選、CZ内部抽選は実機完全再現用の詳細解析となるため収集していない。

## 再探索 — パチスロ まじかる☆タルるートくん

- `パチスロ まじかる☆タルるートくん / まじかるタルるートくん / ニューギン / 型式 / 検定 / 4S` に `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 999G / MB回数 / 短縮 / モード / 状態 / ガックン / 50枚 / 1000円` を組み合わせて再探索。
- K-Navi、グリーンべると、P-WORLD、pacnk、スロパチクエスト、CrankySeven等の当時系/古い解析DB/後年整理資料を横断。
- 一般的な5号機ART機の据え置き/電断挙動を推測転記していない。

## 2014-07-07群 / 次候補

- 07-07群は **パチスロ まじかる☆タルるートくん**まで処理済み。
- 同日群はまだ **OPEN**。
- 次の具体日付き未処理候補として **「パチスロ鉄拳3rd」（山佐）**を確認済み。HAZUSEでは2014-07-07、型式 `パチスロ鉄拳3EE`、検定番号 `4S0216`。
- 次回は07-07同日群をK-Navi / パチ7 / HAZUSE / P-WORLD / 当時業界資料で全メーカー横断し、鉄拳3rdを含む未処理機種を導入日順・同日順に継続する。

## 遡及 resetBehavior QA

- 直前handoffからQAカーソルを維持。
- 次QAカーソル: `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md`。
- 新規時系列収集を止めず、余力のあるリレーで既存PARTIALへv0.7を遡及する。

## 次回再開地点

1. **recordCount 828 / chronologicalFrontier 2014-07-07 / 07-07_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 828件目を再確認。
3. **2014-07-07同日群の全メーカー横断監査を継続**。
4. 最初の明確な未処理候補は **パチスロ鉄拳3rd（山佐）**。他の07-07導入パチスロを同時に洗い出し、未処理を飛ばさない。
5. 07-07群を閉じられるだけ監査後、次の日付境界へ進む。
6. 遡及QAは `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md` から再開。
7. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### パチスロ まじかる☆タルるートくん
- K-Navi 2014年7月新台導入カレンダー: `https://p-kn.com/calendar/201407/`
- グリーンべると: `https://web-greenbelt.jp/00006933/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7426`
- K-Navi ゲームフロー: `https://p-kn.com/slot/2078/50017/`
- K-Navi モード情報: `https://p-kn.com/slot/2078/51086/`
- pacnk: `https://pacnk.com/slot/tools/sh_taruruto.html`
- スロパチクエスト 機種解析: `https://www.slopachi-quest.com/kisyubetsu/magical-tatutu-to/`
- スロパチクエスト 天井解析: `https://www.slopachi-quest.com/article/magical-talroute/`
- CrankySeven: `https://crankyseven.com/taruruto-pc.htm`

### 次候補
- HAZUSE パチスロ鉄拳3rd: `https://hazuse.com/i/det2/tekken3/index.htm`
