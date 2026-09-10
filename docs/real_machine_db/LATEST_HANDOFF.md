更新日: 2026-09-10

## 現在地点
- recordCount: **1251**
- latestRecordAdded: **回胴黙示録カイジ4**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-12-17_kaiji4.md`
- chronologicalFrontier: **2018-12-17**
- frontierLatestMachine: **回胴黙示録カイジ4 — No.1251**
- schema: **resetBehavior v0.7**
- status: **2018-12-17_GROUP_OPEN_2_OF_AT_LEAST_3_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1250を取得して開始。
- INDEXは旧スナップショットのためREADME指示どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 12/17群の最古未処理 `回胴黙示録カイジ4` をNo.1251として登録。
- 同日候補 `アナザーゴッドハーデス-冥王召喚-` は未処理のため群はOPENを維持。
- 遡及QAはサンダーVスペシャルが既にv0.7 QA済みであることを再確認。追加順のリンダの狙いうち、ドカベンDも既にv0.7 QA済みのため重複編集せず通過し、最初の旧形式欠損 `コミックワールド沖` をv0.7へ更新。

## No.1251 — 回胴黙示録カイジ4
- manufacturer: **サミー**
- releaseDateCanonical: **2018-12-17**
- formalModelNameCanonical: **カイジ4／ZS**
- certificationNumber: **7S1728**
- generation/system: **5.9号機 / A+ART**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.5 / 98.7 / 100.2 / 104.1 / 110.0 / 114.1%**
- bonusCombined: **1/198.6 / 1/189.4 / 1/187.2 / 1/171.6 / 1/156.8 / 1/145.0**
- ART初当たり: **1/299.8 / 1/299.0 / 1/298.9 / 1/297.8 / 1/296.2 / 1/294.9**
- baseGamesPer50: **約33.4G**
- ART純増: **約0.3枚/G**
- ART: **1セット30G+α / 平均滞在約145G**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: **有利区間→非有利区間 / RT状態引継ぎ / 公園ステージ**。
- carryOver: **有利区間引継ぎ / RT状態引継ぎ / 公園ステージ**。
- powerOFF→ON: 当時朝一表で **有利区間引継ぎ / RT状態引継ぎ / 公園ステージ**。
- gameCounterReset / ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。
- modeAfterReset: 長期ゲーム数モード体系は比較対象として確認せず。
- stateAfterReset: RTは全条件引継ぎ。有利区間のみ設定変更で非有利区間へ。
- advantageousSectionReset: 設定変更 **RESET_TO_NON_ADVANTAGEOUS_SECTION** / 据え置き・純電断 **CARRY_OVER**。
- resetBenefits: 当時解析で **朝一専用恩恵なし**。
- resetPenalties: 専用不利数値なし。設定変更で有利区間を失う仕様差は保持。
- resetDetection: 有利区間ランプは補助材料になり得るが単独確定契約は固定せず。ガックン率・初期出目の公開確定値は未取得。

### quality notes
- `RT状態引継ぎ` と `有利区間リセット` は別レイヤーの状態でありCONFLICTではない。
- 据え置きと純電断は同義推定せず、当時朝一表が電源ON/OFF条件を明示する範囲で採用。
- 主要性能コアに重大CONFLICTなし。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- サンダーVスペシャル: **既存v0.7 QA済み**のため重複編集なし。
- リンダの狙いうち: **既存v0.7 QA済み**のため通過。
- ドカベンD: **既存v0.7 QA済み**のため通過。
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_comic-world-oki.md`**。
- 今回 `コミックワールド沖` を `PARTIAL_RESEARCH_EXHAUSTED` のv0.7形式へ更新。性能コアは変更せずreset側のみ再整理。
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_moeru-marine-battle.md`（モエる まりんバトる）**。

### コミックワールド沖 reset QA要約
- settingChange / carryOver: **UNVERIFIED_AFTER_RESEARCH**。
- powerOFF→ON: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- gameCounter / ceiling: **公開ゲーム数天井なし確認範囲でNOT_APPLICABLE**。
- 南国モード、シフトアップナビ色ランプ状態の変更/据え置き/純電断処理: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSection: **NOT_APPLICABLE（5号機初期）**。
- 朝一専用恩恵/不利、ガックン率、公開朝一数値: **NONE_CONFIRMED / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**。
- 類似沖スロ・一般5号機からの転用なし。

## 2018-12-17群
### 登録済み
- No.1250 パチスロ ロード オブ ヴァーミリオン Re:
- No.1251 回胴黙示録カイジ4

### 未処理候補
1. **アナザーゴッドハーデス-冥王召喚-**（ミズホ）— 2018-12-17。

### 判定
- **2018-12-17_GROUP_OPEN_2_OF_AT_LEAST_3_PROCESSED**。
- LoV Re:、カイジ4、ハーデス冥王召喚を少なくとも同日候補として保持。
- ハーデス処理後に12/17全メーカー/別型式/別スペック/PB/地域差を再監査してCLOSED可否を判定する。

## 継続注意事項
- `INDEX.md`は旧スナップショット。`LATEST_HANDOFF.md` + main実レコードを優先。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新があれば最新HEADを優先し、古い番号で上書きしない。
- COMPLETE_CORE等の性能完了判定をreset欠損だけで崩さない。reset QA状態は別管理。
- 据え置きと純電断を同義扱いしない。ただし資料が同一列で定義する場合はその定義を明示する。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 同日群は全メーカー/別型式/別スペック/PB/地域差監査後にのみCLOSED判定する。
- 競合値は平均せずCONFLICTを保持。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1251を再取得。
2. **1251件 / chronologicalFrontier 2018-12-17 / `2018-12-17_GROUP_OPEN_2_OF_AT_LEAST_3_PROCESSED`** を正本として継続。ただし並行更新があれば最新HEAD優先。
3. **アナザーゴッドハーデス-冥王召喚-**の導入日・重複を再確認し、未処理ならNo.1252として性能コア+resetBehavior v0.7を処理。
4. 12/17同日全メーカー/別型式/別スペック/PB/地域差を再監査し、CLOSED可否を判定。
5. 遡及QAは **`docs/real_machine_db/machines/2006-12_moeru-marine-battle.md`（モエる まりんバトる）** から再開。

## 主要出典 — 取得日 2026-09-10
### No.1251 回胴黙示録カイジ4
- すろぱちくえすと: https://www.slopachi-quest.com/article/kaiji4/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/68801/
- P-WORLD: https://www.p-world.co.jp/machine/database/8793
- HAZUSE: https://hazuse.com/machine/pachislot/7S1728/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-22604/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/171/l.php

### 遡及QA — コミックワールド沖
- グリーンべると: https://web-greenbelt.jp/00004945/
- pacnk: https://pacnk.com/slot/tools/sh_komikkuwarudooki.html
- 5号機クロニクル: https://5goki.com/baltec
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/47/baltech_slot_47.php
- pachinko's blog: https://pachinko.hatenablog.jp/entry/2006/12/comicWorld-oki
