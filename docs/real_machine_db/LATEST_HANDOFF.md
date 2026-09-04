# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **561**
- latestMachineAdded: **G-SPIN**（ユニバーサルエンターテインメント / 2011-03-22）
- latestRecord: `docs/real_machine_db/machines/2011-03-22_g-spin.md`
- chronologicalFrontier: **2011-03-22**
- frontierLatestExactDateMachine: **G-SPIN**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、560レコード「パチスロ『モンキーターン』」を再取得して開始。
- 開始時正本は **recordCount 560 / chronologicalFrontier 2011-03-07**。
- 2011-03-08〜03-21境界を再監査。K-Navi全国一斉導入カレンダーでは次の独立パチスロ群が2011-03-22であることを確認。
- 2011-03-22群は **G-SPIN / GETだ!BILLY / アイムジャグラーAPEX**。
- repo突合でG-SPIN未登録を確認し、561件目として追加。

## 今回追加 — 561 G-SPIN

- メーカー: **ユニバーサルエンターテインメント**
- 型式名: **ジースピン2**
- 検定番号: **9S1126**
- 5号機 / MB + ART / ゲーム数上乗せ型ART
- 導入主値: **2011-03-22**（K-Navi全国一斉導入日）
- メーカー公式発売: **2011年3月**
- 機械割: **96.7 / 98.9 / 103.0 / 107.0 / 112.0 / 118.0%**
- ART初当たり: **1/555 / 1/371 / 1/709 / 1/281 / 1/419 / 1/172**（単一整理資料値）
- MB: 約 **1/161〜1/164**、通常時平均約 **50枚**
- ART「G-SPLASH」: **約+1.6枚/G**（メーカー公式・P-WORLD一致）
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**

### 主要CONFLICT

- ART純増はメーカー公式/P-WORLDが **約+1.6枚/G**、5号機クロニクルが **約+2.2枚/G**。平均せず公式値を主値として競合保持。
- 5号機クロニクルには「リアルボーナス非搭載」記述があるが、メーカー公式はボーナス+ART、P-WORLDはMB約50枚を掲載。MBの扱いは公式/P-WORLDを優先。
- MB確率は資料間で1/161〜1/164程度の丸め/系列差あり。

### resetBehavior v0.7 — G-SPIN

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: 固定ゲーム数天井を高信頼資料で確認できず、設定変更時CLEAR/RETAINを断定しない。
- `ceilingAfterReset`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `modeAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `advantageousSectionReset`: **NOT_APPLICABLE**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。ガックン/初期出目/ランプ等の本機固有変更判別は確定できず。
- `numericResetData`: **NONE_CONFIRMED_AFTER_RESEARCH**

欠損判定前に「G-SPIN / ジースピン2 / 9S1126 / ユニバーサル」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン」を組み替え、メーカー公式、P-WORLD、当時紹介、後年DBを横断した。推測補完はしていない。

## 主要出典 — 561（取得日 2026-09-04）

- ユニバーサル公式: `https://www.universal-777.com/product/slot/g_spin/`
- K-Navi 2011年3月カレンダー: `https://p-kn.com/calendar/201103/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6287`
- みんスロ: `https://minslo.com/g%E2%80%90spin/`
- 5号機クロニクル: `https://5goki.com/universal`
- A-SLOT: `https://www.a-slot.com/SHOP/universal-1.html`

## 今回のGitHub更新

- 561追加: `docs/real_machine_db/machines/2011-03-22_g-spin.md`
- 561 machine record commit: `e5e2ca60e2d8000ba2012385be37a74006eeddad`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` はresetBehavior収集済みのため重複QA対象外。
- QA済み範囲を推測では動かさず、怪胴王直後のmachine treeを実パス/日付順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 561 / chronologicalFrontier 2011-03-22**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 561レコードを再取得。
2. **2011-03-22同日群を継続**。次候補はエレコ **「GETだ!BILLY」**。repo重複確認 → 性能コア + resetBehavior v0.7を収集して未登録なら562件目として追加。
3. その後、同日群の北電子 **「アイムジャグラーAPEX」**を処理。
4. 3/22同日群を閉じた後、**2011-03-23〜03-27境界**を監査。
5. 次の明確な全国導入アンカーは **2011-03-28「ヱヴァンゲリヲン～真実の翼～」**。
6. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索し、競合は平均せずCONFLICT。
