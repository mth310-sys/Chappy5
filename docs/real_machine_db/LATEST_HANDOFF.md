# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **562**
- latestMachineAdded: **GETだ!BILLY**（エレコ / 主値2011-03-22、HAZUSE 2011-03-18 CONFLICT）
- latestRecord: `docs/real_machine_db/machines/2011-03-22_get-da-billy.md`
- chronologicalFrontier: **2011-03-22**
- frontierLatestExactDateMachine: **GETだ!BILLY**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、561レコード「G-SPIN」を再取得して開始。
- 開始時正本は **recordCount 561 / chronologicalFrontier 2011-03-22**。
- LATEST_HANDOFF指定どおり2011-03-22同日群を継続。
- repo検索で **GETだ!BILLY未登録**を確認し、562件目として追加。
- 次の同日群候補は北電子 **「アイムジャグラーAPEX」**。

## 今回追加 — 562 GETだ!BILLY

- メーカー: **エレコ**
- 型式名: **GETだ！BILLY-B**
- 検定番号: **0S1131**
- 5号機 / **ノーマルAタイプ / 完全告知 / 技術介入要素あり**
- 導入主値: **2011-03-22**（パチ＆スロ必勝本）
- alternate: **2011-03-18**（HAZUSE DATA）→ 日付定義差を断定できないためCONFLICT保持
- 機械割: **97.4 / 99.5 / 102.3 / 105.6 / 110.0 / 115.1%**
- BIG: **1/278.9 / 269.7 / 257.0 / 243.6 / 225.2 / 206.7**
- REG: **1/428.3 / 402.1 / 374.5 / 346.8 / 319.7 / 293.6〜293.9**
- ボーナス合算: **1/168.9 / 161.4 / 152.4 / 143.1 / 132.1 / 121.4**
- BIG最大 **311枚** / REG最大 **104枚**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**

### 重要な資料競合

- P-WORLDとパチ＆スロ必勝本は本機を**ボーナスのみで出玉を増やすノーマルタイプ**と明記。
- 5号機クロニクルには「BILLY RUSH」「ART純増約1.4枚/G」等の記載があるが、上記複数資料と機種構造が明確に矛盾するため **SOURCE_ERROR_OR_SERIES_CONTAMINATION** として性能コアから除外。
- REG設定6は必勝本/HAZUSE **1/293.6**、P-WORLD **1/293.9**。平均せず軽微なCONFLICTとして保持。

### resetBehavior v0.7 — GETだ!BILLY

- `settingChangeBehavior`: **NO_SPECIAL_RESET_FEATURE_CONFIRMED / OTHERWISE_UNVERIFIED**
- `carryOverBehavior`: **NO_PERSISTENT_MODE_OR_CEILING_CONFIRMED / OTHERWISE_UNVERIFIED**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **NOT_APPLICABLE_NO_CONFIRMED_GAME_COUNT_CEILING**
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**
- `modeAfterReset`: **NOT_APPLICABLE_NO_MODE_SYSTEM_CONFIRMED**
- `stateAfterReset`: **NO_RESET_SENSITIVE_INTERNAL_STATE_CONFIRMED / OTHERWISE_UNVERIFIED**
- `advantageousSectionReset`: **NOT_APPLICABLE**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**
- `numericResetData`: **NONE_CONFIRMED_AFTER_RESEARCH**

欠損判定前に「GETだ!BILLY / GETだ！BILLY-B / 0S1131 / エレコ」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 50枚 / ベース / コイン持ち / ガックン」を組み替え、P-WORLD、必勝本、HAZUSE、旧天井DB、後年回顧資料を横断。推測補完はしていない。

## 主要出典 — 562（取得日 2026-09-04）

- P-WORLD: `https://www.p-world.co.jp/machine/database/6247`
- パチ＆スロ必勝本: `https://p.hisshobon.jp/machine/1787/1/28368`
- HAZUSE DATA: `https://data.hazuse.com/?machine_code=0S1432`
- パチスロ天井パラダイス: `https://sloten7.com/years/y2011/`
- 樂都機種紹介PDF: `https://slotto.com.tw/data/attachment/product/202308/go3b589xd4.pdf`
- 5号機クロニクル（競合確認用）: `https://5goki.com/universal`

## 今回のGitHub更新

- 562追加: `docs/real_machine_db/machines/2011-03-22_get-da-billy.md`
- 562 machine record commit: `8bfcefe718b988fcf117b9ce63f2abf3e663b6c6`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` はresetBehavior収集済みのため重複QA対象外。
- QA済み範囲を推測では動かさず、怪胴王直後のmachine treeを実パス/日付順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 562 / chronologicalFrontier 2011-03-22**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 562レコードを再取得。
2. **2011-03-22同日群を継続**。次候補は北電子 **「アイムジャグラーAPEX」**。repo重複確認 → 性能コア + resetBehavior v0.7を収集して未登録なら563件目として追加。
3. 3/22同日群を閉じた後、**2011-03-23〜03-27境界**を監査。
4. 次の明確な全国導入アンカーは **2011-03-28「ヱヴァンゲリヲン～真実の翼～」**。
5. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索し、競合は平均せずCONFLICT。
