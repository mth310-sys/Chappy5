# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **606**
- latestMachineAdded: **パチスロ X JAPAN～強行突破～**（SANKYO）
- latestRecord: `docs/real_machine_db/machines/2011-10-02_x-japan-kyoko-toppa.md`
- chronologicalFrontier: **2011-10-02**
- frontierLatestExactDateMachine: **パチスロ X JAPAN～強行突破～**（10-02納品開始 / 10-03導入開始の定義差）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — パチスロ X JAPAN～強行突破～

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「エージェント・クライシス」、machine treeを再取得して開始。
- 開始時正本は **recordCount 605 / chronologicalFrontier 2011-10-02**。
- 10-02納品 / 10-03導入群を監査。ケロット2はグリーンべるとで **10-10納品開始予定**を確認したため、最古市場投入日基準では本機より後ろへ回した。
- X JAPANはグリーンべるとで **2011-10-02納品開始**、HAZUSEで **2011-10-03導入開始**。`DATE_DEFINITION_DIFFERENCE`として両方保持し、時系列キーは10-02。
- 型式名 **X JAPAN・強行突破F**、検定番号 **1S0652**。

### 性能コア

- 5号機 / A+ART / ボーナス+セットストック&ゲーム数上乗せART。
- 機械割: **96.1 / 98.3 / 100.5 / 104.6 / 108.5 / 112.1%**。
- ART初当り: **1/388 / 1/347 / 1/339 / 1/301 / 1/281 / 1/241**。
- BIG: **1/397 / 1/392 / 1/387 / 1/378 / 1/368 / 1/356**。
- REG: **1/668 / 1/648 / 1/630 / 1/612 / 1/555 / 1/492**。
- X BONUS: **全設定共通1/16384**。
- 50枚ベース: **31.44 / 31.64 / 31.80 / 32.01 / 32.20 / 32.43G**。
- ART「無敵な夜」: **1セット40G+α / 約+1.4枚/G**。
- 上乗せゾーン「強行突破」: **1セット4G、最大7セット**、毎G5〜100G上乗せ。
- X BONUS/BIG: **約204枚**、REG: **約60〜61枚**。
- 通常天井: **ボーナス間1199G → ART5セット以上**。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- 本機専用解析で **「天井RT数は設定変更でリセット」**を直接確認。
- `gameCounterReset`: **RESET_ON_SETTING_CHANGE_CONFIRMED**。
- 通常1199G天井までの前日進捗は設定変更で消えるため、`resetPenalties`に明示。
- 設定変更専用の短縮天井、高確保証、ART付与、朝一特定G以内当選率等は再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き時の天井進捗/内部状態保持、単純電源OFF→ON、設定変更時の開始モード/状態振り分け、ガックン/初期出目/液晶等の変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は制度導入前の5号機なので **NOT_APPLICABLE**。
- resetQaStatus: **PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH**。

### CONFLICT / 資料品質

- releaseDate: **10-02納品開始** vs **10-03導入開始**。定義差として保持。
- 純増はグリーンべると/P-WORLD/HAZUSE/パチマガスロマガが **約+1.4枚/G**で一致。後年回顧1資料のみ約+1.3枚/Gのため `MINOR_RETROSPECTIVE_DIFFERENCE`。
- HAZUSE機械割は整数丸め（96/98/101/105/109/112%）。詳細解析値96.1〜112.1%と丸め整合するためCONFLICT扱いしない。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 606 / chronologicalFrontier 2011-10-02**から開始。
2. エージェント・クライシス、パチスロ X JAPAN～強行突破～を重複追加しない。
3. **2011-10-02納品 / 10-03全国導入群**の残存を最終監査。
4. K-Navi 10/03群の未処理候補 **快盗天使ツインエンジェル3 / サムライスピリッツ鬼 / REVO / ケロット2**について、それぞれ納品開始日・市場投入日の定義を再確認し、最古の未登録から処理する。
5. **ケロット2はグリーンべるとで10-10納品開始予定**を確認済み。K-Naviの10-03全国導入表記と時系列定義が競合するため、先に決め打ちせず再照合する。
6. tree実パス → 既存ファイル直接fetch → 未登録確認後に新規作成。code search未ヒットだけで未登録判定しない。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。
8. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-04

### パチスロ X JAPAN～強行突破～
- SANKYOオンライン博物館: `https://www.sankyo-fever.jp/collection/540/`
- グリーンべると: `https://web-greenbelt.jp/00002211/`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0652/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6473`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/26/sankyo_slot_26.php`
- パチマガスロマガ 1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/26/c.php`
- パチスロ救急車: `https://www.eightbeat.com/slot99/kishu/a_gyou/e/Xjapan/page_menu.html`

### 次回候補確認
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`
- ケロット2 グリーンべると: `https://web-greenbelt.jp/00002298/`
