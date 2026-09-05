# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **706**
- latestMachineAdded: **SLOT牙狼**（エレコ）
- latestRecord: `docs/real_machine_db/machines/2012-12-17_slot-garo.md`
- chronologicalFrontier: **2012-12-17**
- frontierLatestExactDateMachine: **SLOT牙狼**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-12-17_GROUP__AUDIT_REMAINING_BEFORE_ADVANCE**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前最新レコード `2012-12-03_hihouden-taiyo-wo-motomeru-monotachi.md` を確認。
- `INDEX.md` は19件地点の古い集約状態。README規定どおり、より新しい `LATEST_HANDOFF.md` を直近進捗の正本として優先。
- 開始時main正本は recordCount **705** / chronologicalFrontier **2012-12-03** / 12-03群OPEN。
- 12/03同日群を再検索し、既登録の「バイオハザード5」「秘宝伝 ～太陽を求める者達～」以外の具体的12/03導入候補を今回追加確認できなかったため、**2012-12-03群をCLOSED**。
- 2012-12-04～12-16境界を具体日・導入日・ホール導入開始の語で監査。新規未登録機の具体的導入日を今回確認できず、既知アンカー2012-12-17へ前進。
- repo重複検索で「SLOT牙狼」既存レコードなしを確認。
- **706件目: SLOT牙狼（エレコ）** を登録。

## 今回追加 — SLOT牙狼

### 性能コア

- releaseDate: **2012-12-17**。ユニバーサルエンターテインメント公式系プレスリリース、K-Navi、パチビー、HAZUSEで一致。
- 型式名: **SLOT牙狼XG** / 検定番号 **2S1032**（HAZUSE）。
- systemType: **5号機 / ボーナス + ART / ART主体**。
- 機械割: **97.6 / 99.2 / 101.4 / 105.5 / 110.8 / 116.7%**。HAZUSE・pacnk一致。
- 呀CHANCE初当たり: **1/402.9 / 1/384.9 / 1/351.3 / 1/309.9 / 1/263.7 / 1/222.9**。
- 魔戒BONUS初当たり: **1/1495.6 / 1/1453.6 / 1/1360.3 / 1/1252.3 / 1/1028.2 / 1/921.1**。
- ART初当たり合算: **1/299.1 / 1/287.9 / 1/266.0 / 1/238.5 / 1/203.1 / 1/174.6**。
- 牙狼BIG: 全設定 **1/16384.0**、約**300枚** + 牙狼RUSH確定。
- 牙狼RUSH: **基本50G / 純増約+2.0枚/G / ループ率83～92%**。
- 魔戒BONUS: **50G継続のARTボーナス**。
- 50枚ベース: 当時資料 **約29G/1k**、後年整理 **約30G/50枚**。いずれも概数なので約29～30Gの丸め幅として保持。
- 天井: **ボーナスまたはART終了後1280G消化で天井状態**。当時攻略資料では、その後の特定レア小役で牙狼RUSH当選確定・呀CHANCE非経由で直接牙狼RUSHと説明。

### resetBehavior v0.7

- 表記揺れ「SLOT牙狼 / SLOT 牙狼 / 牙狼-GARO- / SLOT牙狼XG / エレコ」と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/モード/状態/ガックンを組み替え、公式・当時DB・当時攻略・後年整理を横断。
- 2012年12月の当時天井攻略資料は **「宵越し×」** と明記。
- ただし、この「宵越し不可」が設定変更・純据え置き・閉店電断・店側運用のどれに由来するかを分解できる直接解析表は今回確定できなかったため、設定変更時ゲーム数クリアを推測でCONFIRMEDにはしていない。
- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH_AS_DIRECT_CONTRACT_WITH_PERIOD_NO_CARRYOVER_REPORT**。
- `carryOverBehavior`: 当時資料で宵越し不可扱い。ただし純据え置き契約は **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: 単純電源OFF→ONのみの天井G・状態・液晶契約は **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: 通常天井1280Gは確認。設定変更/据え置き/純電断それぞれの直接契約は未確定。
- `ceilingAfterReset`: 設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset` / `stateAfterReset`: 設定変更時専用の再抽選契約・公開振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- `resetDetection`: ガックン・初期出目・朝一液晶等の2012年版固有判別は **UNVERIFIED_AFTER_RESEARCH**。
- `publicMorningNumbers`: 設定変更専用の比較可能な公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- 2017年「牙狼 守りし者」、2021年「S牙狼-黄金騎士-」のリセット短縮天井・ガックン・有利区間ランプ仕様は別機種として除外。

## CONFLICT / 注意

- 今回、機械割・主要初当たりに重大なCONFLICTは確認せず。
- 50枚ベースは約29Gと約30G。双方とも概数であり差が小さいため、現時点ではCONFLICTではなく概数幅として保持。
- 当時資料の「宵越し×」を、設定変更で必ず天井Gクリアと自動解釈していない。
- 後継牙狼シリーズの朝一仕様を2012年版へ混入させない。

## 2012-12-17同日群 / 次境界

- **SLOT牙狼** 登録済み。
- 「2012年12月17日」「導入日」「ホール導入開始」を組み替えた今回の検索では、SLOT牙狼以外の具体的な同日未登録候補を追加確認できなかった。
- 全機種方針のため12/17群は次回もう一段、HAZUSE/P-WORLD/K-Navi/パチビー/メーカー一覧で監査してからCLOSED判定する。
- 12/18～年末および2013-01-01～01-06の境界も監査する。
- 次の既知アンカーとして **2013-01-07「パチスロ攻殻機動隊S.A.C.」（Sammy）** をK-Naviで確認済み。

## 遡及resetBehavior QA 進捗

- 本線と別の遡及QA再開地点は維持: `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`
- 本線時系列収集を止めず、QAは別リレーで進める。

## 次回再開地点

1. **recordCount 706 / chronologicalFrontier 2012-12-17 / 12-17群OPEN** から開始。
2. 12/17同日群をHAZUSE新台カレンダー、P-WORLD、K-Navi、パチビー、メーカー/業界資料で最終監査。
3. 未登録12/17機がなければ12/17群をCLOSED。
4. **2012-12-18～2013-01-06境界**を具体導入日順に監査し、未登録機があれば日付順に先に処理。
5. 境界に未登録機がなければ既知アンカー **2013-01-07「パチスロ攻殻機動隊S.A.C.」（Sammy）** をrepo重複確認→性能コア＋resetBehavior v0.7調査→次レコードとして登録。
6. 欠損は表記揺れ・型式名・メーカー・シリーズ名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間」を組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料を横断後のみUNVERIFIED。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-05

### SLOT牙狼
- ユニバーサル公式製品: `https://www.universal-777.com/product/slot/slot_garo/`
- ユニバーサル公式系プレスリリース: `https://www.atpress.ne.jp/news/32143`
- K-Navi: `https://p-kn.com/slot/1752/`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S1032/`
- パチビー: `https://www.pachibee.jp/machines/lecture/212110005`
- パチスロ解析ガイド: `https://pachislot-guide.net/2012/garo/`
- pacnk: `https://pacnk.com/slot/tools/sh_slotgaro.html`
- 当時天井攻略: `https://macerate.seesaa.net/article/308170139.html`
- みんスロ: `https://minslo.com/%E7%89%99%E7%8B%BC/`

### 次候補 / 境界
- K-Navi パチスロ攻殻機動隊S.A.C.: `https://p-kn.com/slot/1762/`
