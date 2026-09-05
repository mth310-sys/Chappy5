# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **661**
- latestMachineAdded: **ニューパルサーSP**（山佐）
- latestRecord: `docs/real_machine_db/machines/2012-06-04_new-pulsar-sp.md`
- chronologicalFrontier: **2012-06-04**
- frontierLatestExactDateMachine: **ニューパルサーSP**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-06-04_SAME_DAY_GROUP**

## 今回の同期・時系列監査

- 最新mainのREADME全文、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パイレーツワールド」を確認して開始。
- INDEXは旧地点19件のままなので、README規定どおりLATEST_HANDOFFと実レコードを優先。開始時正本は recordCount 660 / frontier 2012-06-04。
- 前回HANDOFF指定の山佐「ニューパルサーSP」を実パス候補・repo検索で重複監査し、未登録確認後661件目として追加。
- 導入日はK-Navi/2012-06-04当時新台一覧=2012-06-04、HAZUSE=2012-06-11、P-WORLD/A-SLOT=2012年6月。平均せず資料差を保持し、時系列キーは最古の明示的ホール導入日2012-06-04を採用。
- 性能コアはP-WORLD、K-Navi、HAZUSE、パチマガスロマガ、当時新台一覧を横断照合。BIG/REG/合算はP-WORLDとパチマガスロマガが完全一致。
- パチマガスロマガには通常PAYOUT 96.9〜110.0%と別表示97.27〜110.48%が併存。条件定義を確定できないため平均せずCONFLICTとして双方保存。
- resetBehaviorは本機がノーマル機・天井非搭載である点と、本機固有後年資料の「設定変更後 特にありません」を根拠に、朝一固有恩恵なしを保存。電源OFF→ON、据え置き時の演出モード保持、ガックン/初期出目等は十分な再探索後も直接確定できないためUNVERIFIED_AFTER_RESEARCH。
- 通常演出に「バウンドスタート/バウンドストップ」があるため、これを設定変更ガックンと誤認しない旨を明記。

## 今回の本線追加 — ニューパルサーSP

### 導入・分類

- manufacturer: **山佐**。
- releaseDate: **2012-06-04**（K-Navi/当時新台一覧基準）。
- generation: **5号機**。
- systemType: **ノーマル / BIG+REG / 2演出モード選択式**。
- formalModelName: **ニューパルサーSP-B**。
- approvalNumber: **2S0079**。

### 性能コア

- 通常機械割: **96.9 / 98.3 / 100.1 / 102.4 / 105.2 / 110.0%**。
- パチマガ別PAYOUT: **97.27 / 98.33 / 100.14 / 103.12 / 106.23 / 110.48%**（定義未解決のためCONFLICT保持）。
- BIG: **1/282.4 / 281.2 / 275.3 / 263.2 / 252.0 / 236.5**。
- REG: **1/420.1 / 402.0 / 381.0 / 350.4 / 321.2 / 289.9**。
- 合算: **1/168.9 / 165.4 / 159.8 / 150.3 / 141.2 / 130.2**。
- 50枚ベース: **35.01〜36.98G**。
- BIG: **約312枚**（360枚超払い出し終了）。
- REG: **約104枚**（120枚超払い出し終了）。
- AT/ART: **非搭載**。

### resetBehavior v0.7

- `settingChangeBehavior`: **NO_SPECIAL_RESET_BENEFIT_CONFIRMED_SINGLE_RETROSPECTIVE**。本機固有資料で「設定変更後 特にありません」。
- `carryOverBehavior`: **PERFORMANCE_RELEVANT_CARRYOVER_NOT_APPLICABLE; PRESENTATION_MODE_PERSISTENCE_UNVERIFIED**。天井/AT・ART状態等は非該当。演出モード保持は未確認。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の演出モード/停止出目等の本機固有契約を確定できず。
- `gameCounterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING**。
- `modeAfterReset`: **INTERNAL_PERFORMANCE_MODE_NOT_APPLICABLE**。ノーマル/フラッシュはプレイヤー選択演出モード。
- `stateAfterReset`: **NOT_APPLICABLE_NO_AT_ART_STATE_CONFIRMED**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。本機固有ガックン/朝一出目/表示判別を未確認。通常演出バウンドスタートとは区別。
- `publicMorningNumbers`: **NONE_CONFIRMED**。

## CONFLICT / 品質メモ

- releaseDate: K-Navi/当時新台一覧=2012-06-04、HAZUSE=2012-06-11、P-WORLD/A-SLOT=2012年6月。平均せず保持。
- payoutRateBySetting: P-WORLD/パチマガ通常表示=96.9/98.3/100.1/102.4/105.2/110.0%。パチマガ別表示=97.27/98.33/100.14/103.12/106.23/110.48%。定義未解決のためCONFLICT。
- 2012-06-04当時新台一覧はBIG/REG値が一致する一方、設定3以降の合算欄に転記ずれが見られるため合算照合には使用しない。

## 次回再開地点

1. **recordCount 661 / chronologicalFrontier 2012-06-04**から開始。
2. **2012-06-04同日群を継続**。最優先候補は **パイオニア「オアシス」**。repo重複確認後、未登録なら662件目候補として性能コア+resetBehavior v0.7を処理。
3. その後、同日候補 **ディ・ライト「パチスロ 熱血！華成学園ヒーロー部」** を既存repoと照合し、未登録のみ収集。
4. 2012-06-04同日群をメーカー別・当時新台一覧・K-Navi/P-WORLD/HAZUSE等で最終監査し、漏れがなければ閉じて2012-06-05以降へ前進。
5. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて再探索。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- P-WORLD: `https://www.p-world.co.jp/machine/database/6724`
- K-Navi: `https://p-kn.com/slot/1626/`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S0079/`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/187/a.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/187/h.php`
- パチマガスロマガ ボーナス確率 別表示: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/187/h-1.php`
- パチマガスロマガ 小役/1000円G数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/187/c.php`
- 2012-06-04当時新台一覧: `https://macerate.seesaa.net/article/273495238.html`
- メタボ教授 本機立ち回り資料: `https://metabopro.com/newparutorimu/`
- A-SLOT: `https://www.a-slot.com/SHOP/yamasa101.html`

## GitHub commits

- パイレーツワールド machine record: `8438f88fdb02f4d5b42146ddca8b661a75aaddd5`
- ニューパルサーSP machine record: `e082c85711a19689c546612afa6e1f78e331b3bb`
