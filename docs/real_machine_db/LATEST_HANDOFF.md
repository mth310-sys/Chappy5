# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **673**
- latestMachineAdded: **シンデレラブレイド**（ネット）
- latestRecord: `docs/real_machine_db/machines/2012-07-09_cinderella-blade.md`
- chronologicalFrontier: **2012-07-09**
- frontierLatestExactDateMachine: **シンデレラブレイド**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2012-07-09__NEXT_2012-07-16_PACHISLOT_PATRUSH**

## 今回の同期・時系列監査

- 最新mainのREADME全文、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「天空のシンフォニア ～光を求めて～」を確認して開始。
- INDEXは旧地点19件のまま。README規定どおり、より新しいLATEST_HANDOFFと実レコードを進捗正本として使用。開始時は recordCount 672 / frontier 2012-07-02。
- LATEST_HANDOFF指定の最優先候補「シンデレラブレイド」をrepo検索し未登録を確認。
- 2012-07-03～07-08境界をK-Navi 2012年7月導入カレンダーで監査し、具体日付きパチスロ追加なし。
- K-Naviの2012-07-09パチスロ群はネット「シンデレラブレイド」のみ。673件目として追加したため2012-07-09同日群をCLOSED。
- 次のK-Navi具体日アンカーは2012-07-16 SANKYO「パチスロ パトラッシュ」。

## 今回の本線追加 — シンデレラブレイド

### 識別

- manufacturer: **ネット**
- releaseDate key: **2012-07-09**
- generation: **5号機**
- systemType: **ART専用系 / 32G周期CZ・ゲーム数上乗せ**
- releaseDate: K-Naviとパチンコビレッジが2012-07-09で一致。

### 性能コア

- 機械割: **96.3 / 98.1 / 101.5 / 104.7 / 107.6 / 114.2%**
- ART主系列（P-WORLD/pacnk）: **1/209 / 1/200 / 1/178 / 1/163 / 1/149 / 1/120**
- 当時Wiki別定義「ART初当り」: **1/339 / 1/337 / 1/310 / 1/295 / 1/277 / 1/261**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- ART「武闘会」: **1セット40G+α / 約+2.2枚/G**
- 通常周期: **32G+α**
- 通常最大天井: **25周期**。当時Wiki換算で約900～950G、pacnkでは約900～975G。

### 主要CONFLICT / 定義差

- ART初当り: P-WORLD/pacnkは1/209～1/120をART初当りとして扱う。一方、2012年当時Wikiテンプレは1/339～1/261を「ART初当り」、1/209～1/120を「平均ART出現率」と別列で併記。平均せず定義差として双方保持。
- 最大天井G換算: 25周期という本体仕様は一致するが、当時Wikiは900～950G、pacnkは900～975G。ゲーム数換算範囲のみ差異保持。

### resetBehavior v0.7

- `settingChangeBehavior`: **CONFIRMED** — 設定変更後はゲーム数・剣レベル・周期・ステージがリセット。周期天井振り分けも通常時とは別。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH** — 純据え置き時のゲーム数/周期/剣Lv/ステージ/余剰ポイント保持を本機固有の高信頼本文で直接確定できず。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH** — 設定変更なしの電源OFF→ONのみの処理を初代本機資料で確定できず。
- `gameCounterReset`: **CONFIRMED_CLEAR_ON_SETTING_CHANGE**
- `ceilingAfterReset`: **CONFIRMED_SPECIAL_RESET_CEILING_DISTRIBUTION**
- `modeAfterReset`: **RESET_PERIODIC_TABLE_CONFIRMED** — A/B/天国型ではなく設定変更後専用の周期天井テーブル。
- `stateAfterReset`: **CONFIRMED_PARTIAL** — 開始ステージは修行35% / 鍛冶30% / 古城30% / プリシラ5%。ただしステージと内部状態の完全リンクは当時資料自身が不明としているため、内部状態そのものとは断定しない。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **CONFIRMED_NUMERIC** — 5/10/15/20周期が朝一専用テーブルで優遇。
- `resetPenalties`: **CONFIRMED_PARTIAL** — 前日ゲーム数・周期・剣Lv・ステージ進捗は設定変更で失われる。
- `resetDetection`: **PARTIAL_LOW_CONFIDENCE** — 前日状態既知なら比較材料。ガックン/ランプ/初期出目など単独判別契約はUNVERIFIED。
- `publicMorningNumbers`: **CONFIRMED**

### 設定変更後の公開朝一数値

全設定共通の天井周期振り分け:

- 1～4周期: **各1%**
- 5周期: **10%**
- 6～9周期: **各1%**
- 10周期: **40%**
- 11～14周期: **各1%**
- 15周期: **15%**
- 16～19周期: **各2%**
- 20周期: **5%**
- 21～25周期: **各2%**

設定変更後/ART終了時の開始ステージ:

- 修行 **35%**
- 鍛冶 **30%**
- 古城 **30%**
- プリシラ **5%**

### 品質メモ

- 「シンデレラブレイド / シンデレラブレード / シンブレ / 初代シンデレラブレイド / NET」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 周期 / 剣レベル / ステージ / ガックン / 50枚 / 1000円」を組み替えて再探索。
- K-Navi、P-WORLD、パチンコビレッジ、ネット公式系プレス、pacnk、2012年更新のシンデレラブレイド@Wiki、当時攻略/プレイヤー回顧を横断。
- 50枚ベース、純据え置き、単純電断、ガックン等の単独判別は十分再探索後も確定できず一般論で補完していない。
- シンデレラブレイド2/3/4の50枚値・リセット仕様は別機種なので流用していない。

## 次回再開地点

1. **recordCount 673 / chronologicalFrontier 2012-07-09 / 07-09 group CLOSED**から開始。
2. **2012-07-10～07-15境界監査**を行い、具体日漏れがなければ **2012-07-16「パチスロ パトラッシュ」（SANKYO）**を次の本線候補としてrepo重複確認 → 導入日照合 → 性能コア＋resetBehavior v0.7を収集。
3. K-Navi 2012年7月導入カレンダーは2012-07-16にSANKYO「パチスロ パトラッシュ」を掲載。
4. 07-16同日群を完全に閉じてから07-17以降へ進む。
5. 「夜王」は既存方針どおり2012年8月地点で再監査。
6. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて十分再探索してからUNVERIFIED。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 本線新規収集を止めない。既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi 2012年7月導入カレンダー: `https://p-kn.com/calendar/201207/`
- パチンコビレッジ 2012年導入カレンダー: `https://www.pachinkovillage.com/introduction/index.php?Y=2012&action=archive`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6740`
- ネット公式系プレス（初代シミュレーターiOS）: `https://www.dreamnews.jp/press/0000097980/`
- ネット公式系プレス（初代シミュレーターAndroid/Kindle）: `https://www.dreamnews.jp/press/0000096413/`
- pacnk 初代シンデレラブレイド: `https://pacnk.com/slot/tools/sh_cinderellablade.html`
- シンデレラブレイド@Wiki 天井振り分け: `https://w.atwiki.jp/pipirurenyan/pages/42.html`
- シンデレラブレイド@Wiki 通常時: `https://w.atwiki.jp/pipirurenyan/pages/39.html`
- シンデレラブレイド@Wiki テンプレ: `https://w.atwiki.jp/pipirurenyan/pages/38.html`
- 当時プレイヤーレビュー/回顧: `https://crankyseven.com/cinderellablade-pc-review.htm`

## GitHub commits

- シンデレラブレイド machine record: `7f04231049cb6c583fd9b1e1ac7c87d1633d25a5`
