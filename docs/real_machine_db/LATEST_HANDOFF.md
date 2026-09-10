更新日: 2026-09-11

## 現在地点
- recordCount: **1267**
- latestRecordAdded: **GI優駿倶楽部2**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-02-18_g1-derby-club-2.md`
- chronologicalFrontier: **2019-02-18**
- frontierLatestMachine: **GI優駿倶楽部2 — No.1267**
- schema: **resetBehavior v0.7**
- status: **2019-02-18_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1266を再取得して開始。
- INDEXは旧スナップショットのため、LATEST_HANDOFF + main実レコードを正本として継続。
- mainが会話上の旧地点より進んでいたため、No.1266 `パチスロ ヱヴァンゲリヲン AT777` からhandoff指定の次未処理 `GI優駿倶楽部2` をNo.1267として登録。
- GI優駿倶楽部2はK-Navi / HAZUSE / パチ＆スロ必勝本 / ちょんぼりすた / P-WORLD等を横断し、導入日、型式、検定番号、設定別AT初当たり、機械割、約50G/50枚、AT純増約3.1枚/G、999G+α天井を固定。
- resetBehavior v0.7は、設定変更で天井RESET、純電源OFF→ONで天井・内部状態CARRY_OVER、朝一温泉ぞーん表示、出走週矛盾による据え置き推測材料を収録。
- 設定変更時の内部状態詳細、据え置きと純電断を完全分離した全内部契約、本機固有の有利区間reset契約、朝一専用モード振り分け/当選率、ガックン率は検索語・資料系統を変えて再探索後も固定できずUNVERIFIED/PUBLIC_VALUE_NOT_FOUND。
- 2019-02-18群をALL7月間導入予定一覧、K-Navi個別導入日、複数検索で再監査。パチスロは `パチスロ ヱヴァンゲリヲン AT777` と `GI優駿倶楽部2` の2機で整合し、追加の別型式/別スペック/PB/地域差候補を固定できなかったため群CLOSED。
- 2019-02-19〜02-24境界を月間一覧で確認し、次のパチスロ導入群は2019-02-25。`アナザーハナビ弥生ちゃん` を次回No.1268候補として固定。

## No.1267 — GI優駿倶楽部2
- releaseDateCanonical: **2019-02-18**
- manufacturer: **コナミアミューズメント**
- generation/system: **6号機 / AT / 周期育成型 / シナリオ管理型AT**
- formalModel: **`S GI優駿倶楽部2KB`**
- certificationNumber: **`8S0937`**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- AT初当たり: **1/348.8 / 1/342.8 / 1/324.5 / 1/296.8 / 1/283.5 / 1/266.0**
- 機械割: **97.9 / 98.5 / 99.8 / 102.2 / 105.7 / 108.3%**
- baseGamesPer50: **約50G**
- AT純増: **約3.1枚/G**
- GIロード: **1セット30G+α**
- 通常天井: **999G+α到達後の新馬戦チャレンジでAT当選**
- キタサンブラックの短縮値は通常ゲーム性側として保持し、reset専用恩恵とは分離。

### resetBehavior v0.7
- settingChange: **999G天井進行RESET**。朝一表示は温泉ぞーん。内部状態詳細はUNVERIFIED_AFTER_RESEARCH。
- carryOver: 据え置きは天井進行保持と整合するが、純電断と完全分離した全内部状態はPARTIAL/UNVERIFIED。
- powerCycle: **天井CARRY_OVER / 内部状態CARRY_OVER** とする本機専用解析あり。表示は温泉ぞーん。
- gameCounterReset: 設定変更=RESET / 純電断=CARRY_OVER。
- ceilingAfterReset: 設定変更専用固定短縮天井 `NONE_CONFIRMED_AFTER_RESEARCH`。
- modeAfterReset: 朝一専用振り分け `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- stateAfterReset: 設定変更時は当時資料でも調査中。純電断は引継ぎ資料あり。
- advantageousSectionReset: 6号機ATだが、本機固有の設定変更/据え置き/純電断の直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- resetBenefits: 温泉ぞーん開始。設定変更専用の固定天井短縮/AT優遇値はNONE_CONFIRMED。
- resetPenalties: 設定変更で前日の天井進行を失うため宵越し狙いには不利。
- resetDetection: 朝一出走週の通常法則との矛盾は据え置き推測材料。温泉ぞーん表示だけでは設定変更/純電断を区別不可。本機固有ガックン率は未固定。
- numericResetData: リセット専用当選率/モード振り分け/ガックン率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- `NONE_MATERIAL_CONFIRMED`。GI優駿倶楽部2の性能コア主要値は複数資料で一致。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`**
- lastRetroQaResult: **アクアビーナス — PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_thunder-v-special.md`**。main上ですでにv0.7 QA済みなら重複編集せずGit追加順の次の未QA機へ自動前進する。

## 2019-02-18群
### 登録済み
- No.1266 パチスロ ヱヴァンゲリヲン AT777
- No.1267 GI優駿倶楽部2

### 群判定
- **CLOSED_AFTER_CROSS_SOURCE_AUDIT**。ALL7 2019年2月一覧と個別導入日資料を横断し、2/18パチスロは上記2機で整合。追加の別型式/別スペック/PB/地域差を独立固定できず。

## 次回候補 — 2019-02-25群
- **アナザーハナビ弥生ちゃん** — ユニバーサルブロス / 6号機AT / 2019-02-25。No.1268候補。
- ALL7月間一覧、APチャンネル当時試打、複数解析で2/25導入一致。
- 2/25群処理後も全メーカー/別型式/別スペック/PB/地域差を横断監査してからCLOSE判定する。

## 継続注意事項
- 毎回最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを再取得。
- 並行更新があれば最新mainを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 競合値は平均せずCONFLICT保持。
- 見つからない項目は公式/業界/当時解析/古いDB/アーカイブ/回顧資料まで検索軸を変更後にUNVERIFIED。

## 次回再開地点
1. 最新mainを再取得しrecordCount/HEAD競合を確認。
2. 2019-02-19〜02-24境界を短く再監査。
3. **アナザーハナビ弥生ちゃん** が未登録なら2019-02-25群の次未処理としてNo.1268候補で処理する。
4. 性能コア + resetBehavior v0.7を同時収集。天井非搭載、CZ/AT初当たり、純増、設定変更/据え置き/純電断、有利区間、朝一判別を分離する。
5. 登録後、2019-02-25同日全メーカー/別型式/別スペック/PB/地域差を横断監査し群CLOSED可否を判定。
6. 遡及QAは `2006-12_thunder-v-special.md` から確認し、既QAなら次の未QA機へ進む。

## 主要出典 — 取得日 2026-09-11
### GI優駿倶楽部2
- K-Navi: https://p-kn.com/slot/3166/
- HAZUSE: https://hazuse.com/machine/pachislot/8S0937/genre/201/
- ちょんぼりすた: https://chonborista.com/slot/konami-slot/71347/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3321/1/72716
- P-WORLD: https://www.p-world.co.jp/machine/database/8838
- スロがち.COM: https://slogati.com/g1-2/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/06/a.php
- ALL7 2019年2月導入予定一覧: https://www.all7.jp/plans/index/2019/02

### 次回先行候補
- ALL7 2019年2月導入予定一覧: https://www.all7.jp/plans/index/2019/02
- アナザーハナビ弥生ちゃん 一撃: https://1geki.jp/slot/s_ahanabi/
- アナザーハナビ弥生ちゃん すろぱちくえすと: https://www.slopachi-quest.com/article/another-hanabi-yayoichan/
