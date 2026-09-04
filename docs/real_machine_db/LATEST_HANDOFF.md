# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **564**
- latestMachineAdded: **ヱヴァンゲリヲン～真実の翼～**（ビスティ / 正規化主値 2011-03-28）
- latestRecord: `docs/real_machine_db/machines/2011-03-28_evangelion-shinjitsu-no-tsubasa.md`
- chronologicalFrontier: **2011-03-28**
- frontierLatestExactDateMachine: **ヱヴァンゲリヲン～真実の翼～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、563レコード「アイムジャグラーAPEX」を再取得して開始。
- 開始時正本は **recordCount 563 / chronologicalFrontier 2011-03-22**。
- `INDEX.md` は旧少数レコードのままなので、今回も実machine treeと `LATEST_HANDOFF.md` を運用上の進捗正本として使用。
- 2011-03-23〜03-27境界を導入カレンダー/機種DB/当時資料で再監査。今回の調査範囲では、本機より前に追加すべき未登録5号機を高信頼で確定できなかった。
- repo重複確認で「ヱヴァンゲリヲン～真実の翼～」未登録を確認し、564件目として追加。

## 今回追加 — 564 ヱヴァンゲリヲン～真実の翼～

- メーカー: **ビスティ**
- 型式名: **ヱヴァンゲリヲン・真実の翼Ｇ**（SANKYOオンライン博物館公式）
- 5号機 / **ノーマルAタイプ + RT**
- 導入正規化主値: **2011-03-28**（K-Naviホール導入開始）
- パチビーは **2011-03-22** を掲載するため `SOURCE_DATE_DIFFERENCE` として保持。
- 機械割: **97.7 / 99.7 / 101.7 / 105.4 / 107.9 / 112.7%**
- BIG: **1/364 / 350 / 336 / 317 / 305 / 281**
- REG: **1/753 / 728 / 705 / 669 / 636 / 585**
- 合算: **1/245 / 237 / 228 / 215 / 206 / 190**
- 50枚ベース（解析値）: **41.52 / 42.44 / 43.42 / 45.66 / 47.48 / 50.18G**
- SUPER BIG最大 **402枚** / NORMAL BIG最大 **259枚** / REG最大 **52枚**
- REG後RT「ビーストモード」は最大100G。100G完走で次回ボーナスまでの「覚醒モード」。
- 天井RT「暴走モード」: **BIG後1000G** または **ビーストモード終了後800G** で突入し、基本的に次回ボーナスまで継続。

### 性能値CONFLICT / 定義差

- 導入日: K-Navi **2011-03-28** / パチビー **2011-03-22**。平均せず、全国ホール導入開始を明示するK-Navi 3/28を正規化主値とする。
- RT純増: K-Naviビーストモード **約+0.3枚/G** / パチビー機種タグ **約+0.5枚/G**。RT種別・算出条件差の可能性があるため `CONFLICT_DEFINITION` として平均しない。

### resetBehavior v0.7 — ヱヴァンゲリヲン～真実の翼～

- `settingChangeBehavior`: **CEILING_GAME_COUNT_RETAIN_CONFIRMED / OTHER_INTERNAL_STATE_UNVERIFIED**
- `carryOverBehavior`: **CEILING_PROGRESS_RETAIN_ON_SETTING_CHANGE_CONFIRMED**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **RETAIN_ON_SETTING_CHANGE_CONFIRMED**
- `ceilingAfterReset`: **NO_SHORTENING_CONFIRMED / ORIGINAL_PROGRESS_RETAINED**
- `modeAfterReset`: **NO_LONG_TERM_MODE_SYSTEM_CONFIRMED / RT_RELATED_STATE_UNVERIFIED**
- `stateAfterReset`: **UNVERIFIED_FOR_RT_STATE**
- `advantageousSectionReset`: **NOT_APPLICABLE**
- `resetBenefits`: **CEILING_CARRYOVER_CAN_ENABLE_MORNING_OVERDAY_CEILING**
- `resetPenalties`: **NONE_CONFIRMED_FOR_CEILING_PROGRESS / OTHER_INTERNAL_STATE_UNVERIFIED**
- `resetDetection`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `numericResetData`: **CEILING_RETAIN: BIG後1000G / BM終了後800G**

旧解析DBの本機専用項目で **「設定変更しても天井までのゲーム数を引き継ぐ」** を直接確認。したがって設定変更でも天井進捗は消えず、前日ハマリが把握できる場合は宵越し天井対象となる。単純電源OFF→ON、設定変更時のRT権利/RT状態、ガックン・出目・液晶等の変更判別は、資料系統を変えて再探索しても今回直接確定できず推測補完していない。

## 主要出典 — 564（取得日 2026-09-04）

- SANKYOオンライン博物館: `https://www.sankyo-fever.jp/collection/873/`
- K-Navi基本情報: `https://p-kn.com/slot/1381/reel/`
- K-Naviビーストモード: `https://p-kn.com/slot/1381/30110/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6269`
- パチビー: `https://www.pachibee.jp/machines/about/211010009`
- HAZUSE: `https://hazuse.com/machine/pachislot/0S1265/`
- けんのスロットシミュレーション: `https://kenslo65536.com/kaiseki/eva-shinjitu.html`

## 今回のGitHub更新

- 564追加: `docs/real_machine_db/machines/2011-03-28_evangelion-shinjitsu-no-tsubasa.md`
- 564 machine record commit: `eef4f5bf3dee2f2663d94695d28d2e8547fa44f7`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- recursive machine treeを再取得して怪胴王直後の実在path特定を試行したが、今回の取得結果から「最初のresetBehavior欠損」を順序保証付きで確定しきれなかったため、QA済み範囲を推測では進めていない。
- 次回もmachine treeを実パス/日付順に直接確認し、既にresetBehavior済みのファイルを飛ばして最初の欠損レコードだけを補完する。

## 次回再開地点

1. **recordCount 564 / chronologicalFrontier 2011-03-28**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 564レコードを再取得。
2. **2011-03-28同日群を最終監査**し、本機以外の未登録5号機があれば同日群の最古から追加。
3. 同日群が閉じたら **2011-03-29以降の最古未処理機**へ進む。導入日を複数DB/当時資料で照合してから採用する。
4. 遡及QAは怪胴王直後のmachine treeを再走査し、最初の実在resetBehavior欠損レコードを確定して補完。
5. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索し、競合は平均せずCONFLICT。
