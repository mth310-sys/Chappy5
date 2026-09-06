# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **822**
- latestRecordAdded: **パチスロ御伽屋HANZO**（タイヨーエレック）— 2014-05-26
- latestRecord: `docs/real_machine_db/machines/2014-05-26_otogiya-hanzo.md`
- chronologicalFrontier: **2014-05-26**
- frontierLatestMachine: **パチスロ御伽屋HANZO**
- schema: **resetBehavior v0.7**
- status: **2014-05-26_GROUP_CLOSED**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、直前レコード `docs/real_machine_db/machines/2014-05-26_mahjong-fight-club.md` を再読。
- INDEXは旧集約状態のため、README規定に従いLATEST_HANDOFFと実レコードを進捗正本として継続。
- 作業開始時の正本は **821件 / 2014-05-26 / 05-26_GROUP_OPEN**。
- handoff指定の次の未処理 **パチスロ御伽屋HANZO（タイヨーエレック）— 2014-05-26** が未登録であることをmain検索で再確認し、822件目として追加。

## 今回追加 — パチスロ御伽屋HANZO

### identity / 性能コア

- manufacturer: **タイヨーエレック**。
- formalModelName: **御伽屋HANZO ZZ**（流通系実機資料）。
- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**。型式名・メーカー・シリーズ名・検定通過語を組み替えて再探索したが、公的検定番号を今回安全に固定できず。
- hall start: **2014-05-26**。K-Navi全国一斉導入カレンダーを時系列キーに採用。グリーンべるとは2014-05-12記事で最速5月25日納品開始と報道。
- generation/system: **5号機 / ART / 擬似ボーナス / CZ**。
- payout: **96.9 / 98.2 / 100.5 / 102.9 / 106.0 / 111.2%**。
- ART「月闘之刻」初当たり: **1/332.9 / 304.4 / 278.7 / 251.4 / 225.8 / 188.4**。
- ボーナス+ART合算: **1/227.7 / 215.9 / 199.6 / 178.7 / 163.6 / 135.2**。設定2のみP-WORLD等に1/214.9がありCONFLICT保持。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガ現存ページも1000円あたりG数を「現在調査中」としている。
- ART/擬似ボーナス純増: **約2.0枚/G**。
- ART「月闘之刻」: **初期50G + バトル8G = 58G+α**。
- BIG: **約100枚前後**、御伽屋BONUS: **約30〜31枚**。
- ceiling: **ボーナス/ART間999G + 最大41G前兆 / BIG2〜4セット + ART確定**。
- coreStatus: **COMPLETE_CORE_WITH_BASE_UNVERIFIED**。

### resetBehavior v0.7

- settingChangeBehavior: **設定変更で天井G数リセット CONFIRMED**。2-9伝説機種別解析と天井一覧の「宵×＝設定変更で天井G数リセット」定義+HANZO掲載で確認。
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。純据え置き時の天井/モード/状態保持を本機固有の直接比較表で固定できず、一般論から補完しない。
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更なしの電源OFF→ONについて本機固有の直接契約を固定できず。
- gameCounterReset: 設定変更はRESET。據え置き/純電断はUNVERIFIED。
- ceilingAfterReset: 設定変更専用の短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。通常999G天井へ戻る扱い。
- modeAfterReset: ボーナス/ART解除モード・CZ抽選モードは存在するが、設定変更時振り分け/朝一専用モード数値は **UNVERIFIED_AFTER_RESEARCH**。
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 専用短縮天井・朝一高確率/CZ優遇はNONE_CONFIRMED。前日天井進捗消去が主な店側効果。
- resetPenalties: 前日999G天井進捗消去。
- resetDetection: 本機固有ガックン/初期出目/液晶判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBehaviorQA: **PARTIAL**。

## conflicts / safeguards

- ART初当たり設定1: **1/332.9**（当日解析/2-9伝説） vs **1/332.2**（スロパチクエスト）。複数一致の1/332.9を本表採用、競合注記保持。
- ボーナス合算設定1: **1/722.0**（2014-05-26当日解析） vs **1/772.0**（2-9伝説後年整理）。CONFLICT。
- ボーナス+ART合算設定2: **1/215.9**（当日解析） vs **1/214.9**（P-WORLD/流通資料）。CONFLICT。
- パチンコ「CR御伽屋HANZO」の数値を本パチスロ機へ混入しない。
- 中古流通資料のSammy表記は販売系統表記を含むため、manufacturerは当時業界記事・攻略資料に従いタイヨーエレック。

## 2014-05-26群 / 境界

K-Navi全国一斉導入カレンダー掲載パチスロ:
1. **B-MAX**（アクロス）— No.820 / 処理済み
2. **麻雀格闘倶楽部**（KPE）— No.821 / 処理済み
3. **パチスロ御伽屋HANZO**（タイヨーエレック）— No.822 / 処理済み

- 2014-05-26掲載パチスロ3機を全件処理したため **2014-05-26_GROUP_CLOSED**。

## 次の境界 / 候補

- 次回は **2014-05-27〜2014-06-01境界監査**を先に実施し、未処理5号機がないかメーカー横断確認。
- 現時点の次の強い具体日アンカーは **2014-06-02「ケロット3」（山佐）**。当時解析資料で導入日2014-06-02、A+プチRT、天井非搭載を確認済み。
- ただし2014-06-02同日群の他メーカー機を先に全件洗い出し、時系列で最初の未処理から登録する。ケロット3を即No.823と固定しない。
- 2014年6月候補には戦国乙女西国参戦編、蒼天の拳2、餓狼伝説PREMIUM等があるため、月単位資料を具体日へ解像して漏れなく前進する。

## 遡及 resetBehavior QA

- 直前handoffのQAカーソルを維持。
- 次QAカーソル: `docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md`。

## 次回再開地点

1. **recordCount 822 / chronologicalFrontier 2014-05-26 / 05-26_GROUP_CLOSED** から開始。
2. 最新mainで既存登録を再確認。
3. **2014-05-27〜06-01境界監査**。
4. その後 **2014-06-02同日群を全メーカー横断で列挙し、最初の未処理機種**をNo.823候補として処理。強いアンカーはケロット3（山佐）。
5. 遡及resetBehavior QAは `docs/real_machine_db/machines/2007-02-18_kamen-rider-dx-super-bike.md` から再開。
6. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### 境界 / 導入日
- K-Navi 2014年5月全国一斉導入カレンダー: `https://p-kn.com/calendar/201405/`
- ケロット3 当時スペック/導入日整理: `https://pachinkolist.com/archives/38785712.html`

### パチスロ御伽屋HANZO
- グリーンべると 2014-05-12: `https://web-greenbelt.jp/00006230/`
- パチマガスロマガ機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/17/taiyoelec_slot_17.php`
- パチマガスロマガ小役/1000円G: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/17/c.php`
- パチマガスロマガCZ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/17/01-1.php`
- スロ板-RUSH 2014-05-26: `https://fiveslot777.com/archives/39029013.html`
- 2-9伝説機種別: `https://29den.com/otogiyahanzo/`
- 2-9伝説天井一覧: `https://2-9densetsu.com/blog-entry-311-html/`
- スロパチクエスト天井: `https://www.slopachi-quest.com/article/otogiya-hanzo/`
- スロパチクエストゾーン: `https://www.slopachi-quest.com/article/hanzone/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7405`
- 中一商事 Yahoo!ショッピング中古実機: `https://store.shopping.yahoo.co.jp/nakaiticom/126.html`
