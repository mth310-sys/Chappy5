# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **611**
- latestMachineAdded: **キングハナハナ-30**（パイオニア）
- latestRecord: `docs/real_machine_db/machines/2011-10-10_king-hanahana-30.md`
- chronologicalFrontier: **2011-10-10**
- frontierLatestExactDateMachine: **キングハナハナ-30**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — キングハナハナ-30

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「ケロット2」を再取得して開始。
- 開始時正本は **recordCount 610 / chronologicalFrontier 2011-10-03**。
- repo code searchで「キングハナハナ」ヒットなし、想定実パス `docs/real_machine_db/machines/2011-10-10_king-hanahana-30.md` も404を確認し、未登録と判断。
- K-Navi 2011年10月導入カレンダーで **2011-10-10全国一斉導入開始日**を確認。
- パイオニア公式は2011年10月発売、グリーンべるとは **2011-10-02納品開始予定**、K-Naviには2011-10-05付実戦レビューが存在。納品開始・地域先行稼働・全国一斉導入の定義差として `CONFLICT_OR_MARKET_DATE_DEFINITION_DIFFERENCE` を保持し、chronology keyはK-Navi全国一斉導入開始日2011-10-10を採用。
- 当初作成時に10月2日をchronology keyへ置いたが、K-Navi導入カレンダーの全国一斉導入日を再取得できたため、その誤った一時ファイルは削除し、2011-10-10実パスへ修正済み。

### 性能コア

- 5号機 / ノーマル / Aタイプ / 完全告知 / 30Φ沖スロ。
- 機械割: **96 / 98 / 101 / 104 / 107 / 111%**。
- BIG: **1/303 / 1/293 / 1/281 / 1/268〜269 / 1/255 / 1/239**。
- REG: **1/504 / 1/474〜475 / 1/439〜440 / 1/407 / 1/374 / 1/341**。
- 合算: **1/189 / 1/181 / 1/172 / 1/162 / 1/152 / 1/140〜141**。
- 50枚ベース: **約37G / 50枚**（2011-08-18グリーンべると直接値）。
- BIG **約312枚**、REG **約130枚**。
- ART/AT非搭載、通常ゲーム数天井なし。
- coreStatus: **COMPLETE_CORE**。

### resetBehavior v0.7

- `gameCounterReset`: **NOT_APPLICABLE_TO_GAME_COUNT_CEILING_AFTER_RESEARCH**。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: **NOT_APPLICABLE_TO_PERSISTENT_WINNING_MODE**。
- `advantageousSectionReset`: **NOT_APPLICABLE**。
- `resetBenefits` / `resetPenalties`: 朝一専用優遇、短縮天井、公開特定G当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更/据え置き/単純電源OFF→ON時のリール・告知ランプ・一時演出状態は、`キングハナハナ-30 / キングハナハナ / KHH-30 / パイオニア / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール`を組み替え、当時業界記事・K-Navi・P-WORLD・旧解析DB・後年解析まで再探索したが、本機固有の直接資料を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。2023年版キングハナハナや後継ハナハナのガックン情報は流用しない。
- resetQaStatus: **PARTIAL_RESET_QA_AFTER_DEEP_RESEARCH**。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 611 / chronologicalFrontier 2011-10-10**から開始。
2. K-Navi 2011年10月導入カレンダー上、10-10パチスロ群は **キングハナハナ-30のみ**。本機追加で **10-10群を閉じる**。
3. 次の明確な全国一斉導入日は **2011-10-17「ラーゼフォン」**（ロデオ）。
4. repo code search → 表記揺れ（ラーゼフォン / RahXephon / ラーゼフォンS等）→ 想定実パス直接fetchで未登録を最終確認し、未登録なら612件目候補として処理する。
5. 10-17群を閉じた後は **2011-10-24「バツ＆テリー」→「押忍！番長2」**を導入日・同日群順に処理する。
6. tree実パス → 既存ファイル直接fetch → 未登録確認後に新規作成。code search未ヒットだけで未登録判定しない。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を組み替えて再探索。
8. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-04

### キングハナハナ-30
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`
- パイオニア2011年製品一覧: `https://www.slot-pioneer.co.jp/products/2011.html`
- グリーンべると: `https://web-greenbelt.jp/00002226/`
- K-Navi内覧会: `https://p-kn.com/topics/exhibition/835/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6460`
- けんのスロットシミュレーション: `https://kenslo65536.com/kaiseki/king-hanahana-30.html`
- K-Navi 2011-10-05実戦レビュー: `https://p-kn.com/slot/1480/review/31255/`

### 次回順序確認
- K-Navi 2011年10月導入カレンダー: `https://p-kn.com/calendar/201110/`
