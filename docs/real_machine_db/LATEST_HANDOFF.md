更新日: 2026-09-11

## 現在地点
- recordCount: **1266**
- latestRecordAdded: **パチスロ ヱヴァンゲリヲン AT777**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-02-18_evangelion-at777.md`
- chronologicalFrontier: **2019-02-18**
- frontierLatestMachine: **パチスロ ヱヴァンゲリヲン AT777 — No.1266**
- schema: **resetBehavior v0.7**
- status: **2019-02-18_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1265を再取得して開始。
- INDEXは旧スナップショット（19件）のため、LATEST_HANDOFF + main実レコードを正本として継続。
- 2019-02-05〜02-17境界を月間導入予定一覧・複数検索で監査し、今回独立して固定できる新規パチスロ機は確認できず、2/18群へ前進。
- main上で `パチスロ ヱヴァンゲリヲン AT777` 未登録を確認し、No.1266として登録。
- SANKYOオンライン博物館・フィールズ公式PVでビスティ/2019年2月/6号機AT/純増約4.0枚G、2019-02-18全国導入予定を確認。
- HAZUSEで型式 `SヱヴァンゲリヲンAT777F`、検定番号 `8S1123`、導入2019-02-18、設定別初当たり/合算/機械割を取得。
- 設定変更/据え置き/純電断は、ちょんぼりすた・おスロおパチおいでやす・スロパチネットを横断。設定変更で天井関連/周期/ランクシナリオ/有利区間リセット、純電断で引継ぎを固定。
- 有利区間ランプ朝一点灯は据え置き濃厚材料。朝一0Gでシナリオ履歴が残る挙動も据え置き推測材料として収録。
- 本機固有ガックン率、リセット専用朝一当選率/専用モード振り分けは検索語・資料系統変更後も固定できずUNVERIFIED/PUBLIC_VALUE_NOT_FOUND。
- 型式はHAZUSE/DMMの `...F` とスロパチネットの `...SK` が競合するためCONFLICT保持。canonicalは検定番号8S1123に紐づくHAZUSE `...F`。
- 2019-02-18群はALL7等で **パチスロ ヱヴァンゲリヲン AT777 / GI優駿倶楽部2** を確認。エヴァのみ登録済みのため群はOPENのまま。

## No.1266 — パチスロ ヱヴァンゲリヲン AT777
- releaseDateCanonical: **2019-02-18**
- manufacturer: **ビスティ**
- generation/system: **6号機 / AT / 差枚数管理型擬似ボーナス**
- formalModel: **`SヱヴァンゲリヲンAT777F`**
- certificationNumber: **`8S1123`**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.8 / 99.3 / 100.7 / 103.9 / 107.0 / 109.5%**
- ボーナス初当たり: **1/454.0 / 1/425.4 / 1/401.0 / 1/347.5 / 1/301.8 / 1/270.0**
- ボーナス出現率（引き戻し込み）: **1/211.8 / 1/201.5 / 1/193.1 / 1/172.9 / 1/155.9 / 1/144.5**
- baseGamesPer50: **約50G**
- AT純増: **約4.0枚/G**
- 基本獲得: **150〜500枚中心 / CODE777 777枚**
- 天井: **CZスルー最大5回 / 1〜9周期CZ非当選→10周期目EX**

### resetBehavior v0.7
- settingChange: 天井関連/周期/ランクシナリオ/有利区間をリセット。ステージは外界とする解析あり。
- carryOver: 据え置きは前日周期/シナリオ履歴保持が推測材料。純電断との差を完全に分離した全内部契約は一部UNVERIFIED。
- powerCycle: 天井関連/周期/ランクシナリオ/有利区間を引継ぎ。ステージ/メニューシナリオ情報も引継ぎとする資料あり。
- gameCounterReset: 設定変更で周期/CZ天井進行リセット、純電断で引継ぎ。
- ceilingAfterReset: 専用短縮天井 `NONE_CONFIRMED_AFTER_RESEARCH`。
- modeAfterReset: ランクシナリオは設定変更でリセット、純電断で引継ぎ。朝一専用振り分けは未固定。
- stateAfterReset: 周期/ランク進行は上記。液晶ランク等細部はPARTIAL。
- advantageousSectionReset: 設定変更=RESET / 純電断=CARRY_OVER。
- resetBenefits: 明確な短縮天井・朝一AT優遇はNONE_CONFIRMED。
- resetPenalties: 宵越し周期/CZスルー進行消失が客側には不利。
- resetDetection: 朝一有利区間ランプ点灯なら据え置き濃厚。シナリオ履歴も推測材料。本機固有ガックン率は未固定。
- numericResetData: リセット専用当選率/モード振り分け/ガックン率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- `CONFLICT_FORMAL_MODEL_F_VS_SK_SECONDARY`: HAZUSE/DMM `SヱヴァンゲリヲンAT777F` vs スロパチネット `SヱヴァンゲリヲンAT777SK`。canonicalはHAZUSE `F`。
- `CONFLICT_RESET_STAGE_EXPLICIT_OUTSIDE_VS_OTHER_SOURCE_UNRESOLVED`: スロパチネットは設定変更後外界ステージ、別解析は調査中。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2006-12_aqua-venus.md`**
- lastRetroQaResult: **アクアビーナス — PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaCandidate: **`docs/real_machine_db/machines/2006-12_thunder-v-special.md`**。main上ですでにv0.7 QA済みなら重複編集せずGit追加順の次の未QA機へ自動前進する。

## 2019-02-18群
### 登録済み
- No.1266 パチスロ ヱヴァンゲリヲン AT777

### 未処理確認済み候補
- **GI優駿倶楽部2** — コナミアミューズメント / 6号機AT / 2019-02-18。次回No.1267候補。

### 群判定
- **OPEN**。少なくともエヴァAT777とGI優駿倶楽部2を複数一覧で確認。GI優駿倶楽部2処理後も全メーカー/別型式/別スペック/PB/地域差を監査してからCLOSE判定する。

## 継続注意事項
- 毎回最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを再取得。
- 並行更新があれば最新mainを優先し、古い番号で上書きしない。
- 据え置きと純電断を同義扱いしない。
- 同一/近似ゲーム性の先行・後継機からresetBehaviorを自動転記しない。
- 競合値は平均せずCONFLICT保持。

## 次回再開地点
1. 最新mainを再取得しrecordCount/HEAD競合を確認。
2. **GI優駿倶楽部2** が未登録なら2019-02-18群の次の未処理としてNo.1267候補で処理する。
3. 性能コア + resetBehavior v0.7を同時収集する。特に通常999G天井、キタサンブラック等の天井短縮、設定変更/据え置き/純電断、有利区間、朝一判別を分離する。
4. GI優駿倶楽部2登録後、2019-02-18同日全メーカー/別型式/別スペック/PB/地域差を横断監査し群CLOSED可否を判定。
5. 遡及QAは `2006-12_thunder-v-special.md` から確認し、既QAなら次の未QA機へ進む。

## 主要出典 — 取得日 2026-09-11
### パチスロ ヱヴァンゲリヲン AT777
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/888/
- フィールズ公式PV: https://www.youtube.com/watch?v=CfKUGPR2mLA
- HAZUSE: https://hazuse.com/machine/pachislot/8S1123/
- ちょんぼりすた: https://chonborista.com/slot/bisty-slot/73148/
- おスロおパチおいでやす: https://oslo-opachi.com/2019/02/19/post-4577/
- スロパチネット: https://slopachi-net.com/eva777
- K-Navi: https://p-kn.com/slot/3183/
- DMMぱちタウン: https://p-town.dmm.com/machines/3363/shops
- ALL7 2019年2月導入予定一覧: https://www.all7.jp/plans/index/2019/02

### 次回先行候補
- GI優駿倶楽部2: https://p-kn.com/slot/3166/
- GI優駿倶楽部2解析: https://chonborista.com/slot/konami-slot/71347/
