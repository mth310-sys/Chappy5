# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **608**
- latestMachineAdded: **サムライスピリッツ鬼**（SNKプレイモア）
- latestRecord: `docs/real_machine_db/machines/2011-10-03_samurai-spirits-oni.md`
- chronologicalFrontier: **2011-10-03**
- frontierLatestExactDateMachine: **サムライスピリッツ鬼**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — サムライスピリッツ鬼

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ快盗天使ツインエンジェル3」を再取得して開始。
- 開始時正本は **recordCount 607 / chronologicalFrontier 2011-10-03**。
- 2011-10-03全国導入群を継続監査。repo code searchで機種名ヒットなし、想定実パスを直接fetchして404確認後、本機を608件目として追加。
- K-Naviで **2011-10-03ホール導入開始**、同月カレンダーでも10-03全国一斉導入群に掲載。
- SNK旧公式で型式名 **サムライスピリッツ鬼C** を確認。

### 性能コア

- 5号機 / ボーナス+ART / ゲーム数管理+自力継続複合ART。
- 機械割: **96.8 / 98.5 / 100.2 / 104.8 / 109.2 / 113.4%**。
- ART初当たり: **1/647.7 / 1/519.5 / 1/644.3 / 1/423.1 / 1/600.1 / 1/336.6**。
- ボーナス合算: **1/399.61 / 1/399.61 / 1/372.36 / 1/372.36 / 1/348.60 / 1/348.60**。
- BIG: **1/595.78 / 1/595.78 / 1/574.88 / 1/574.88 / 1/555.39 / 1/555.39**。
- REG: **1/1213.63 / 1/1213.63 / 1/1057.03 / 1/1057.03 / 1/936.23 / 1/936.23**。
- ボーナス+ART初当たり合算: **1/247.1 / 1/225.8 / 1/235.9 / 1/198.0 / 1/220.5 / 1/171.2**。
- 1000円あたりゲーム数: **31.50 / 31.64 / 31.80 / 31.94 / 32.10 / 32.24G**。
- ART「斬撃RUSH」: **約+1.7枚/G**。修羅は基本**30G+α**。
- BIG約**204枚**、REG最大**48枚**。
- coreStatus: **COMPLETE_CORE**。

### 天井 / モード

- P-WORLDの規定Gテーブル表示: **約200 / 約450 / 約700 / 約980 / 約1280G**（ボーナスorART間）。規定到達でART。
- 2011-10-20付当時解析記事は最大天井を **1248G** と実数記載。
- 約1280Gと1248Gは平均せず、概算テーブル表示と解析実数の `CONFLICT_OR_DEFINITION_DIFFERENCE` として双方保持。
- 通常時内部モードは **通常 / 高確 / 超高確 / SPモード**。

### resetBehavior v0.7

- 当時解析記事に **「設定変更で天井までのG数はリセット」**との直接記述あり。
- `gameCounterReset`: **CLEAR_ON_SETTING_CHANGE_CONFIRMED_BY_PERIOD_ANALYSIS**。
- `ceilingAfterReset`: **RESET_CONFIRMED / SHORTENING_NOT_CONFIRMED**。設定変更専用の短縮天井は再探索後も確認できず。
- 据え置き時の天井進捗/内部モード/ARTストック等の保持は **UNVERIFIED_AFTER_RESEARCH**。
- 単純電源OFF→ONは **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の通常/高確/超高確/SPモード振り分け・状態再抽選は **UNVERIFIED_AFTER_RESEARCH**。
- リールガックン/初期出目/液晶等による変更判別も **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は制度導入前の5号機なので **NOT_APPLICABLE**。
- 公開朝一数値として設定変更専用の当選率・短縮G数は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更で前日ハマリの天井進捗を失うため、客側には宵越し期待を失う不利があり得る。
- resetQaStatus: **PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH**。

### 資料品質

- 機械割/ART初当たり/BIG/REG/ベースはパチマガスロマガの直接値を主値に採用。
- P-WORLD/K-Naviでボーナス+ART合算、ART純増、基本獲得枚数を照合。
- SNK旧公式で型式名とART公式ページを確認。
- 設定変更時天井リセットは現時点で当時解析単一系統の直接記述なので、一般則を上乗せせず信頼度を明示。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 608 / chronologicalFrontier 2011-10-03**から開始。
2. エージェント・クライシス、X JAPAN～強行突破～、快盗天使ツインエンジェル3、サムライスピリッツ鬼を重複追加しない。
3. **2011-10-03全国導入群**の残存を継続監査。
4. 最優先候補は **REVO（スター）**。K-Navi 10-03群に掲載。グリーンべるとは2011-08-12記事で「納品は10月上旬開始予定」と記録、5号機クロニクルも2011/10導入。repo実パスを直接確認し、未登録なら次レコードとする。
5. REVOの既知コア候補: 機械割 **97.0 / 99.0 / 101.9 / 105.8 / 109.0 / 114.0%**（5号機クロニクル）。P-WORLDでは5号機ノーマル/技術介入、BIG最大335枚、REG最大116枚。次回は設定別ボーナス確率・50枚ベース・技術介入時機械割・resetBehaviorを深掘りしてから保存する。
6. **ケロット2はグリーンべるとで10-10納品開始予定**。K-Naviの10-03全国導入表記と日付定義が競合するため、10-03群を閉じる際に再照合するが、現時点では10-10側を強い市場投入根拠として後ろへ回す。
7. 10-03群を閉じた後、K-Naviでは10-10にキングハナハナ-30、10-17にラーゼフォン、10-24にバツ＆テリー/押忍！番長2が続く。
8. tree実パス → 既存ファイル直接fetch → 未登録確認後に新規作成。code search未ヒットだけで未登録判定しない。
9. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。
10. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-04

### サムライスピリッツ鬼
- SNK旧公式 ART: `https://slot.snk-corp.co.jp/official/samurai_oni/art/index.html`
- SNK旧公式 ゲームフロー: `https://slot.snk-corp.co.jp/official/samurai_oni/game/index.html`
- K-Navi: `https://p-kn.com/slot/1482/`
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6472`
- パチマガスロマガ ボーナス確率/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/36/h-1.php`
- パチマガスロマガ 小役/1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/36/c.php`
- 娯楽産業: `https://www.goraku-sangyo.com/snk%E3%83%97%E3%83%AC%E3%82%A4%E3%83%A2%E3%82%A2%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%82%B5%E3%83%A0%E3%83%A9%E3%82%A4%E3%82%B9%E3%83%94%E3%83%AA/`
- 当時天井解析: `https://mezase20.com/blog-entry-477.html`
- 回顧機械割照合: `https://www.marimo0925.net/pachislot-kikaiwari-ranking-samusupi-ban/`

### 次回候補確認 — REVO
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`
- グリーンべると: `https://web-greenbelt.jp/00002244/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6469`
- 5号機クロニクル（スター）: `https://5goki.com/star`
