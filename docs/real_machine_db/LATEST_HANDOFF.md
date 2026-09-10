更新日: 2026-09-10

## 現在地点
- recordCount: **1212**
- latestRecordAdded: **雷雷弁慶**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-07-17_rairai-benkei.md`
- chronologicalFrontier: **2018-07-17**
- frontierLatestMachine: **雷雷弁慶 — No.1212**
- schema: **resetBehavior v0.7**
- status: **2018-07-16_17_BOUNDARY_GROUP_OPEN_1_MACHINE_PROCESSED_AUDIT_PENDING**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1211を再取得して開始。
- INDEXは19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として継続。
- 2018-07-09群を複数の2018年導入一覧、メーカー/表記揺れ、PB/地域限定機の観点で再監査。既登録No.1211「あっぱれ！PREGO」以外の7/9導入パチスロを固定できず `2018-07-09_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT` と判定。
- 次境界の2018-07-16〜17候補を監査。雷雷弁慶は導入日に2018-07-16 / 07-17 / 07-23の資料競合があるためCONFLICT保持。型式・検定番号まで紐づくHAZUSEとDMM系列情報の一致を優先し、canonicalを2018-07-17としてNo.1212登録。
- 雷雷弁慶の性能コアはHAZUSE、一撃、すろぱちくえすと、ちょんぼりすたで照合。精密値と丸め値は整合。
- resetBehaviorは一撃の機種固有「天井/設定変更」資料から、設定変更時と電源ON/OFF時を分離して取得。双方ともボーナス間G数は引継ぎ、予想履歴内容はリセット。通常ゲーム数天井は非搭載。
- 「据え置き」を純電断と独立条件で直接定義した資料は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。ガックン等の変更判別率・朝一専用当選数値も未固定。
- 遡及resetBehavior QAはクランキーコンドルXを再探索。既存性能コアは変更せず、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ更新。
- Git追加履歴を確認し、クランキーコンドルX追加commitの直後の実機追加がランブルローズであることを確定。次QAカーソルをランブルローズへ進めた。

## No.1212 — 雷雷弁慶
- manufacturer: **ボーダー**
- releaseDateCanonical: **2018-07-17**
- releaseDateConflict: **2018-07-16 / 2018-07-17 / 2018-07-23**
- formalModelName: **ライライベンケイ2**
- certificationNumber: **7S1818**
- generation/system: **5.9号機 / ノーマルA**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payout: **97.62 / 98.19 / 101.11 / 104.62 / 107.92 / 110.26%**
- BIG: **1/278.88 / 1/276.52 / 1/266.41 / 1/255.00 / 1/246.38 / 1/240.06**
- REG: **1/313.57 / 1/312.08 / 1/299.25 / 1/283.71 / 1/265.33 / 1/239.18**
- 合算: **1/147.60 / 1/146.61 / 1/140.94 / 1/134.30 / 1/127.75 / 1/119.81**
- base: **約32.56〜35.01G/50枚**
- BIG: **約307枚**
- REG: **約102枚**
- normal ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: ボーナス間G数 `CARRY_OVER`、予想履歴内容リセット、公開告知モードは「ボーナス告知モード」。
- carryOver: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerOFF→ON: ボーナス間G数 `CARRY_OVER`、予想履歴内容リセット、公開告知モードは「ボーナス告知モード」。
- gameCounter/ceiling: 通常天井なし。公開されるボーナス間G数は設定変更/電源ON-OFFとも引継ぎ。
- mode/state: 朝一専用出玉モード/設定変更専用振り分け `NONE_CONFIRMED_AFTER_RESEARCH`。
- advantageousSection: ノーマルA主システムとして `NOT_APPLICABLE_TO_PRIMARY_SYSTEM`。5.9号機一般論から本機固有挙動を補完しない。
- resetBenefits / resetPenalties: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 予想履歴リセットとG数引継ぎは設定変更/純電断双方で同じため、それ単独では設定変更判別にならない。ガックン/初期出目条件は `UNVERIFIED_AFTER_RESEARCH`。
- numericResetData: 短縮天井 `NOT_APPLICABLE`、朝一当選率/専用モード振り分け/ガックン率 `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## 2018-07-09群監査
### 登録済み
- No.1211 あっぱれ！PREGO（JPS）

### 群判定
- `2018-07-09_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`
- 2018年導入一覧では7/9は本機のみを掲載。別系統資料・PB/地域限定機観点で再探索しても追加対象を固定できなかった。

## 2018-07-16〜17境界監査
### 登録済み
- No.1212 雷雷弁慶（ボーダー）— canonical 2018-07-17、導入日CONFLICT保持。

### 未処理候補
- ストリートファイターV パチスロエディション（エンターライズ）
  - すろぱちくえすと: 2018-07-16
  - HAZUSE / 複数解析: 2018-07-23
  - 日付競合を解決・保持した上で、7/16〜23境界から漏れないよう次回最優先監査する。

### 群判定
- `2018-07-16_17_BOUNDARY_GROUP_OPEN_1_MACHINE_PROCESSED_AUDIT_PENDING`

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-08_cranky-condor-x.md**（クランキーコンドルX）。
- latestRetroQaResult: **PARTIAL_RESEARCH_EXHAUSTED**。性能コア判定は維持し、reset側のみ別管理。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-08_rumble-roses.md`（ランブルローズ）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- next cursor evidence: クランキーコンドルX追加commit `c48cbb8f2e0ed07aeb54e9b94722c182fe222871` の直後の実機追加commit `960c357b2d04159358c182db55d996531bc1bfa7` がランブルローズ。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- 毎回、最新mainのREADME / mission / INDEX / LATEST_HANDOFF / latest recordを読み直す。
- 並行更新がある場合は最新HEADを優先し、古い番号で上書きしない。
- resetBehaviorで一般論を確定契約へ昇格しない。据え置きと純電断を同義扱いしない。
- 導入日競合機は最古候補日を飛ばさず境界群として監査し、CONFLICTを保持する。
- 同日/境界群は全メーカー/別スペック/PB/地域差監査後にのみCLOSED判定する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1212を再取得。
2. **1212件 / chronologicalFrontier 2018-07-17 / 7/16〜17境界群OPEN**を正本として継続。ただし並行更新があれば最新HEADを優先。
3. `ストリートファイターV パチスロエディション` の2018-07-16 vs 07-23導入日競合を複数ソースで再確認し、未登録なら次レコード候補として処理する。
4. その後、2018-07-23群の既知候補 `ハイスクール・フリート` / `マイジャグラーIV` を含め全メーカー監査する。
5. 遡及QAは `docs/real_machine_db/machines/2006-08_rumble-roses.md` から継続。

## 主要出典 — 取得日 2026-09-10
### 7/9〜7/23境界監査
- すろぱちくえすと2018一覧: https://www.slopachi-quest.com/article/sindai-2018/
- HAZUSE新台カレンダー/機種DB: https://hazuse.com/

### No.1212 雷雷弁慶
- HAZUSE: https://hazuse.com/machine/pachislot/7S1818/
- 一撃 ボーナス確率: https://1geki.jp/slot/rairaibenkei/1/
- 一撃 天井/設定変更: https://1geki.jp/slot/rairaibenkei/6/
- すろぱちくえすと: https://www.slopachi-quest.com/article/rairaibenkei/
- ちょんぼりすた: https://chonborista.com/slot/border-slot/60630/
- DMMぱちタウン: https://p-town.dmm.com/machines/2861

### クランキーコンドルX reset QA
- ユニバーサル公式: https://www.universal-777.com/product/slot/cranky_condor_x/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/64/eleco_slot_64.php
- パチ7機種史/5号機回顧: https://pachiseven.jp/articles/detail/11508
- K-Navi当時記事: https://p-kn.com/topics/news/11/
