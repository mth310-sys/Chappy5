# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **670**
- latestMachineAdded: **アイドルマスターライブインスロット**（Sammy / サミー）
- latestRecord: `docs/real_machine_db/machines/2012-07-02_idolmaster-live-in-slot.md`
- chronologicalFrontier: **2012-07-02**
- frontierLatestExactDateMachine: **アイドルマスターライブインスロット**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-07-02__NEXT_SAME_DAY_MAISON_IKKOKU_NATSU_IRO_NO_KAZE_TO**

## 今回の同期・時系列監査

- 最新mainのREADME全文、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「餓狼伝説☆双撃」を確認して開始。
- INDEXは旧地点19件のまま。README規定どおり、より新しいLATEST_HANDOFFと実レコードを現在進捗の正本として使用。開始時は recordCount 669 / frontier 2012-07-02。
- LATEST_HANDOFF指定の最優先候補「アイドルマスターライブインスロット」をrepo検索し未登録を確認。
- K-Naviの2012年7月カレンダーと機種ページで全国導入開始2012-07-02を確認。サミー公式2012-05-14発表の「2012年初夏より全国ホールで稼働予定」と整合。
- 670件目として追加。2012-07-02同日群は未閉鎖。

## 今回の本線追加 — アイドルマスターライブインスロット

### 識別

- manufacturer: **Sammy / サミー**
- releaseDate: **2012-07-02**
- modelName: **アイドルマスターライブインスロットZ**（中古実機流通資料。一次検定資料未確認）
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation: **5号機**
- systemType: **A+ART / 完走型押し順ART / セットストック**

### 性能コア

- 当時パチマガ系列機械割: **96.88 / 98.41 / 102.04 / 105.11 / 109.10 / 111.54%**
- 別系列: **97.2 / 98.4 / 99.9 / 104.3 / 110.6 / 114.6%** → 単純丸め差ではないため **CONFLICT**
- BIG: **1/296.54 / 1/291.27 / 1/277.69 / 1/265.33 / 1/252.06 / 1/247.31**
- REG: **1/303.41 / 1/296.54 / 1/281.27 / 1/270.81 / 1/261.10 / 1/252.06**
- ボーナス合算: **1/149.97 / 1/146.94 / 1/139.74 / 1/134.02 / 1/128.25 / 1/124.83**
- ART出現率: **1/137.86 / 1/129.84 / 1/122.82 / 1/113.00 / 1/115.96 / 1/104.68**
- 50枚ベース: **31.03 / 31.15 / 31.26 / 31.38 / 31.49 / 31.60G**
- H-BIG: **約270枚** / N-BIG: **約198枚** / REG: **約104枚**
- ART「LIVE STAGE」: **1セット30G / 純増約0.8枚/G**
- 天井: **ボーナス/ART終了後の転落リプレイ入賞を起点に通常時765G → 次回ボーナスまで無限ART**

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED_PARTIAL_RETROSPECTIVE_SOURCE** — 後年整理で設定変更時を高確/超高確状態ストック契機に含む。具体振り分けと天井カウンタ処理は未確定。
- `carryOverBehavior`: **PERIOD_STRATEGY_SOURCE_SAYS_YOIGOSHI_X_BUT_EXACT_CONTRACT_UNVERIFIED** — 2012年当時天井攻略は「宵越し×」と明記。ただし据え置き時765Gカウンタの仕様契約までは分離できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **UNVERIFIED_AFTER_RESEARCH** — 「宵越し×」だけから設定変更時CLEARを自動推定しない。
- `ceilingAfterReset`: **NO_RESET_SPECIFIC_SHORTENING_CONFIRMED_AFTER_RESEARCH**
- `modeAfterReset`: **NO_SEPARATE_GAME_COUNT_MODE_CONFIRMED; INTERNAL_STATE_TRIGGER_PARTIAL_ONLY**
- `stateAfterReset`: **CONFIRMED_PARTIAL** — 通常/高確/超高確が存在し、設定変更時が高確系状態ストック契機の一つ。振り分け未確認。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **NONE_NUMERIC_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetDetection`: **PERIOD_USER_REPORT_ONLY_NOT_PROMOTED_TO_CONFIRMED** — K-Navi利用者投稿に「朝イチ設定変更否定のチャンリプ」の記述はあるが、解析本文の条件を確定できず採用しない。ガックン等も未確認。
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**

### 品質メモ

- 「アイドルマスターライブインスロット / LIVE IN SLOT / スロマス / アイドルマスターライブインスロットZ / Sammy / サミー」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井リセット / 765G / 高確 / 超高確 / モード / チャンスリプレイ / ガックン / 50枚」を組み替えて再探索。
- サミー公式、K-Navi、P-WORLD、パチマガスロマガ、当時天井攻略、当時解析、5号機回顧DB、実機流通資料を横断。
- 新しい「アイドルマスター ミリオンライブ！」各機種のreset情報は本機へ流用していない。
- 機械割2系列は平均せずCONFLICT。BIG設定6も一部当時記事に1/243.31表記があるが、パチマガ精密表1/247.31とK-Navi合算値の整合を優先し、転記差候補としてレコードに保持。

## 次回再開地点

1. **recordCount 670 / chronologicalFrontier 2012-07-02**から開始。
2. **2012-07-02同日群を継続**。最優先は **めぞん一刻～夏色の風と～（オリンピア）**。repo重複確認後、性能コア＋resetBehavior v0.7を収集。
3. その後 **天空のシンフォニア ～光を求めて～（コルモ）** を重複確認・未登録処理。
4. 2012-07-02同日群を完全に閉じてから07-03以降へ進む。
5. 次の既知K-Navi具体日アンカーは **2012-07-09 シンデレラブレイド（ネット）**。
6. 「夜王」は既存方針どおり2012年8月地点で再監査。
7. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて十分再探索してからUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 本線新規収集を止めない。既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- サミー公式: `https://www.sammy.co.jp/japanese/news/2012/113.html`
- K-Navi機種: `https://p-kn.com/slot/1652/`
- K-Navi小役/ベース: `https://p-kn.com/slot/1652/39372/`
- K-Navi 2012年7月カレンダー: `https://p-kn.com/calendar/201207/`
- パチマガスロマガ基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/134/a.php`
- パチマガスロマガ精密確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/134/h-1.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6737`
- 5号機クロニクル: `https://5goki.com/sammy`
- 当時天井攻略: `https://macerate.seesaa.net/article/281322900.html`
- 当時天井一覧: `https://macerate.seesaa.net/article/300741744.html`

## GitHub commits

- アイドルマスターライブインスロット machine record: `491e48993b402a6eb3c51603ae088038fe13a934`
