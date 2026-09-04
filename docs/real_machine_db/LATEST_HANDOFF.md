# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **609**
- latestMachineAdded: **REVO**（スター）
- latestRecord: `docs/real_machine_db/machines/2011-10-03_revo.md`
- chronologicalFrontier: **2011-10-03**
- frontierLatestExactDateMachine: **REVO**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — REVO

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「サムライスピリッツ鬼」を再取得して開始。
- 開始時正本は **recordCount 608 / chronologicalFrontier 2011-10-03**。
- LATEST_HANDOFF指定の最優先候補REVOをrepo検索＋実パス直接fetchで未登録確認後、609件目として追加。
- K-Navi 2011年10月導入カレンダーでは **2011-10-03全国一斉導入群**。グリーンべるとは2011-08-12時点で「納品は10月上旬開始予定」、P-WORLD/5号機クロニクルは2011年10月粒度。日付定義は平均しない。
- 型式名 **レヴォVI**、検定番号 **1S0570**。

### 性能コア

- 5号機 / ノーマル / Aタイプ / 技術介入。
- 市場/DB掲載機械割: **97.0 / 99.0 / 101.9 / 105.8 / 109.0 / 114.0%**。
- パチマガスロマガPAYOUT（シミュレート値）: **97.04 / 99.17 / 102.18 / 106.33 / 109.74 / 115.07%**。
- 両系列は平均せず `CONFLICT_OR_DEFINITION_DIFFERENCE_MARKET_RATE_VS_SIMULATED_PAYOUT`。
- BIG合成: **1/278.88 / 1/274.21 / 1/263.20 / 1/247.31 / 1/234.90 / 1/219.18**。
- REG合成: **1/478.36 / 1/428.34 / 1/402.06 / 1/366.12 / 1/339.56 / 1/299.25**。
- ボーナス合算: **1/176.17 / 1/167.18 / 1/159.07 / 1/147.60 / 1/138.85 / 1/126.52**。
- BIG最大 **335枚**、REG最大 **116枚**。
- 50枚ベースは表記揺れ・型式・メーカーと50枚/1000円/ベース/コイン持ちを変えて横断後も直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。小役確率から逆算しない。
- coreStatus: **COMPLETE_CORE_EXCEPT_BASE**。

### resetBehavior v0.7

- ノーマル機で、通常ゲーム数天井・規定G数当選・ART/AT長期状態は確認されない。
- `gameCounterReset`: **NOT_APPLICABLE_TO_GAME_COUNT_CEILING_AFTER_RESEARCH**。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: 長期当選モードは非該当。BIG中チャレンジ/PVモードは朝一内部モードではない。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits` / `resetPenalties`: 朝一専用当選率・短縮天井等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き/単純電源OFF→ON/設定変更時の液晶カスタマイズ・一時表示状態は本機固有の直接資料を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 回顧資料には、ホール側タイマーでパネル/LED・告知音・**リールガックン**等を発動できる機能の記録がある。これは設定変更ガックンとは別機能なので、朝一ガックンを変更判別根拠へ流用しない。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH / TIMER_GACKUN_FUNCTION_NOT_SETTING_CHANGE_EVIDENCE**。
- resetQaStatus: **PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH**。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 609 / chronologicalFrontier 2011-10-03**から開始。
2. K-Naviの2011-10-03全国導入群は、エージェント・クライシス、ケロット2、快盗天使ツインエンジェル3、X JAPAN、サムライスピリッツ鬼、REVOの6機種。
3. このうち **ケロット2だけ日付定義を再監査**する。K-Naviは全国一斉導入開始を2011-10-03とする一方、グリーンべると系の納品開始予定が **2011-10-10** とされているため、既存登録有無→市場投入日の定義を確認し、未登録ならどちらをchronology keyにするか根拠を分離して保存する。
4. 10-03群を閉じたら次の明確な全国導入日は **2011-10-10「キングハナハナ-30」**（K-Navi）。パイオニア公式も2011年10月発売を確認できる。
5. その後 **10-17「ラーゼフォン」→10-24「バツ＆テリー」「押忍！番長2」**へ進む。
6. tree実パス → 既存ファイル直接fetch → 未登録確認後に新規作成。code search未ヒットだけで未登録判定しない。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。
8. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-04

### REVO
- P-WORLD: `https://www.p-world.co.jp/machine/database/6469`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/star_slot/01/h.php`
- パチマガスロマガ 基本/解析: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/star_slot/01/star_slot_01.php`
- K-Navi REVO: `https://p-kn.com/slot/1481/`
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`
- グリーンべると: `https://web-greenbelt.jp/00002244/`
- 5号機クロニクル（スター）: `https://5goki.com/star`
- パチスロ業界初まとめ: `https://slothistory.com/k_all_2spec.html`

### 次回順序確認
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`
- パイオニア2011年製品一覧: `https://www.slot-pioneer.co.jp/products/2011.html`
