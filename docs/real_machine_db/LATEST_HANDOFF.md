# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **547**
- latestMachineAdded: **パチスロスーパー海物語IN沖縄**（三洋物産 / 2011-02-07）
- latestRecord: `docs/real_machine_db/machines/2011-02-07_pachislot-super-umi-monogatari-in-okinawa.md`
- chronologicalFrontier: **2011-02-07**
- frontierLatestMachine: **パチスロスーパー海物語IN沖縄**（同日群継続中）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線レコード `楽々温泉記` / `サムライチャンプルー極` を再取得して開始。
- 開始時正本は **recordCount 546 / chronologicalFrontier 2011-01-31**。旧チャット地点ではなく最新mainを正本として採用。
- 2011-01-31同日群を追加監査し、新たな確定未登録機を確認できなかったため次節点へ前進。
- K-Naviで `パチスロスーパー海物語IN沖縄` の **2011-02-07ホール導入開始**を確認。repo code searchで未登録を確認して547件目として追加。
- 追加後 chronologicalFrontier を **2011-02-07**へ更新。同日群はまだ閉じていない。

## 今回追加 — パチスロスーパー海物語IN沖縄

- メーカー: **三洋物産 / SANYO**
- 導入: **2011-02-07**
- タイプ: **5号機 / ノーマルA / ボーナス主体 / 完全告知 / ART非搭載**
- 機械割: **97.5 / 98.8 / 100.1 / 103.1 / 106.2 / 110.0%**
- BIG: **1/288.7 / 282.5 / 277.7 / 267.5 / 259.0 / 246.4**
- REG: **1/471.5 / 445.8 / 420.1 / 370.3 / 322.8 / 300.6**
- ボーナス合算: **1/179.1 / 172.9 / 167.2 / 155.3 / 143.7 / 135.4**
- baseGamesPer50: **34.34 / 34.42 / 34.57 / 34.93 / 35.38 / 36.18G**
- BIG: **約336枚**
- REG: **約104枚クラス**（106枚超払出し終了。実獲得直接本文はQA継続）
- ART/AT純増: **NOT_APPLICABLE**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — パチスロスーパー海物語IN沖縄

- ノーマルA・ART非搭載で、通常ゲーム数天井、AT/ART/CZ、長期ゲーム数モード等の朝一持越し対象は確認されない。
- `gameCounterReset`: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**
- `modeAfterReset`: **NOT_APPLICABLE_AS_GAME_COUNT_MODE**。海/マリン/シーサー/シークレットは遊技者選択の演出モードで、内部ゲーム数モードとは分離。
- `advantageousSectionReset`: **NOT_APPLICABLE**（5号機・制度前）。
- `resetBenefits` / `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- パチマガスロマガ保存インデックスに本機専用の「朝イチ・設定変更」項目が存在することは確認したが、取得可能本文では具体挙動まで展開できず。
- 設定変更・据え置き・単純電源OFF→ON時のリール/表示等の低レベル挙動、ガックン/初期出目による変更判別は、表記揺れ・三洋・海スロ等へ検索語を展開後も直接確定できず `UNVERIFIED_AFTER_RESEARCH`。

### 別スペック分離 — 30KD

- `パチスロ スーパー海物語IN沖縄30KD` が別スペックとして存在。
- 30KDは機械割 **96.7 / 98.1 / 99.4 / 102.0 / 104.4 / 108.4%**、BIG **1/306.2 → 1/266.4**、REG **1/574.9 → 1/404.5**で、今回の標準版と明確に別系列。
- 後年一覧の25Φ/30Φ混載値を標準版のCONFLICTへ混ぜず、**別機種/別レコード候補として分離**。導入具体日は次回監査する。

### 主要出典 — 547（取得日 2026-09-04）

- K-Navi: `https://p-kn.com/slot/1331/`
- パチマガスロマガ 1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/12/c.php`
- パチマガスロマガ index: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/12/sanyo_slot_12.php`
- pacnk 標準版: `https://pacnk.com/slot/tools/sh_umimonookinawa.html`
- pacnk 30KD: `https://pacnk.com/slot/tools/sh_supaumistoryinokinawa30ked.html`

## 今回のGitHub更新

- 547追加: `docs/real_machine_db/machines/2011-02-07_pachislot-super-umi-monogatari-in-okinawa.md`
- machine record commit: `d6e68d54b51472980ba86a68f240cbc822e6c25e`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みであるため重複QA対象外。
- QA済み範囲は推測で動かさず、machine treeを日付/パス順に直接確認して最初のresetBehavior欠損から再開する。

## 次回再開地点

1. **recordCount 547 / chronologicalFrontier 2011-02-07**。最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 547レコードを再取得。
2. **2011-02-07同日群を継続**。`秘宝伝 ～封じられた女神～` はK-Naviで2011-02-07ホール導入開始を確認済み、今回のrepo code searchでは未登録だったため次の強い候補。開始時に再度main重複確認して処理する。
3. `パチスロ スーパー海物語IN沖縄30KD` は別スペックで2011年2月導入まで確認済み。具体的ホール導入日を再探索し、2/7同日またはそれ以前なら秘宝伝より先に別レコード化する。
4. 2/7候補（頑固一徹等）も実ホール導入日を別資料で照合し、同日群を閉じるまで後日へ進まない。
5. `残機尽きるまで私は戦うS` は2011-03-06納品開始予定のため2月へ誤繰上げしない。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間を変えて横断後のみ維持。競合は平均せずCONFLICT。
