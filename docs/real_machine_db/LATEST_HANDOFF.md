# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **610**
- latestMachineAdded: **パチスロ「ケロット2」**（山佐）
- latestRecord: `docs/real_machine_db/machines/2011-10-03_pachislot-kerotto2.md`
- chronologicalFrontier: **2011-10-03**
- frontierLatestExactDateMachine: **パチスロ「ケロット2」**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — パチスロ「ケロット2」

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコードREVOを再取得して開始。
- 開始時正本は **recordCount 609 / chronologicalFrontier 2011-10-03**。
- LATEST_HANDOFF指定の10月3日群残存「ケロット2」をrepo code search、recursive tree、想定実パス直接fetchで未登録確認後、610件目として追加。
- K-Naviは **2011-10-03全国一斉導入開始**。一方、グリーンべるとは **2011-10-10納品開始予定**、HAZUSEは **2011-10-11導入開始日**。全国導入日・納品開始予定・DB導入開始日の定義を混同せず `CONFLICT_OR_MARKET_DATE_DEFINITION_DIFFERENCE` として保持し、chronology keyはK-Naviの全国一斉導入開始日2011-10-03を採用。
- 型式名 **ケロット2A**、検定番号 **1S0294**。

### 性能コア

- 5号機 / ノーマル / Aタイプ / ボーナス主体。
- HAZUSE機械割: **96.8 / 98.6 / 101.1 / 104.2 / 106.3 / 110.1%**。
- 後年回顧には98.1〜110.2%、5号機クロニクルには97.5〜109.3%の別系列があり、後者は導入年月誤記もあるため平均せずCONFLICT補助として保持。
- BIG: **1/287.4 / 1/282.4 / 1/270.8 / 1/258.0 / 1/250.1 / 1/235.7**。
- REG: **1/455.1 / 1/425.5〜425.6 / 1/409.6 / 1/390.1 / 1/376.6 / 1/352.3**。
- 合算: **1/176.1〜176.2 / 1/169.7〜169.8 / 1/163.0 / 1/155.3 / 1/150.3 / 1/141.2**。
- 50枚ベース: **34.6〜36.3G / 50枚（設定1〜6レンジ）**。設定別6点は未確認のためレンジのまま保存。
- BIG **最大335枚**、REG **104枚**。グリーンべると、P-WORLD、パチマガスロマガで一致。
- ART/AT非搭載。オレンジ成立後の3GプチRTは演出用短期RTで、出玉増加RT純増として扱わない。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- 通常ゲーム数天井・規定G数当選・ART/AT長期状態は確認されないノーマルAタイプ。
- `gameCounterReset`: **NOT_APPLICABLE_TO_GAME_COUNT_CEILING_AFTER_RESEARCH**。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: 当選モードは非該当。4液晶ステージは演出ステージであり、朝一モードとは混同しない。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits` / `resetPenalties`: 朝一専用優遇、短縮天井、公開特定G当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更/据え置き/単純電源OFF→ON時の液晶ステージ・短期RT・一時表示状態は、`ケロット2 / ケロット2A / 山佐 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / ステージ`を組み替え再探索したが本機固有の直接資料を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。後継ケロットや他山佐機のガックン仕様は流用しない。
- resetQaStatus: **PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH**。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 610 / chronologicalFrontier 2011-10-03**から開始。
2. K-Naviの2011-10-03全国導入群6機種（エージェント・クライシス、ケロット2、快盗天使ツインエンジェル3、X JAPAN、サムライスピリッツ鬼、REVO）は本線上すべて登録済み。**10-03群を閉じる。**
3. 次の明確な全国一斉導入日は **2011-10-10「キングハナハナ-30」**（パイオニア）。パイオニア公式2011年製品一覧でも2011年10月発売を確認済み。
4. repo code searchで「キングハナハナ」ヒットなし、想定実パス `docs/real_machine_db/machines/2011-10-10_king-hanahana-30.md` も現時点で404。次回はrecursive tree/表記揺れ（キングハナハナ / KING HANA HANA / キングハナハナ-30 / KHH-30等）も含めて未登録を最終確認し、未登録なら611件目候補として処理する。
5. 10-10群を閉じた後は **10-17「ラーゼフォン」→10-24「バツ＆テリー」「押忍！番長2」**へ進む。
6. tree実パス → 既存ファイル直接fetch → 未登録確認後に新規作成。code search未ヒットだけで未登録判定しない。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。
8. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-04

### パチスロ「ケロット2」
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`
- グリーンべると: `https://web-greenbelt.jp/00002298/`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0294/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6476`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/182/a.php`
- K-Navi 液晶ステージ法則: `https://p-kn.com/slot/1488/33475/`
- 後年ケロットシリーズ回顧: `https://www.marimo0925.net/pachislot-kikaiwari-ranking-kelot-ban/`
- 5号機クロニクル 山佐一覧: `https://5goki.com/yamasa`

### 次回順序確認
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`
- パイオニア2011年製品一覧: `https://www.slot-pioneer.co.jp/products/2011.html`
