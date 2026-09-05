# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **662**
- latestMachineAdded: **オアシス**（パイオニア）
- latestRecord: `docs/real_machine_db/machines/2012-06-04_oasis.md`
- chronologicalFrontier: **2012-06-04**
- frontierLatestExactDateMachine: **オアシス**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-06-04_SAME_DAY_GROUP**

## 今回の同期・時系列監査

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「ニューパルサーSP」を確認して開始。
- INDEXは旧地点19件のままなので、README規定どおりLATEST_HANDOFFと実レコードを優先。開始時正本は recordCount 661 / frontier 2012-06-04。
- 前回HANDOFF指定のパイオニア「オアシス」をrepo検索で重複監査し、未登録確認後662件目として追加。
- 導入日はK-Navi、2012-03-28当時業界記事、2012-06-04当時新台一覧が2012-06-04で一致。パイオニア公式は2012年6月発売。時系列キーは2012-06-04。
- パイオニア公式PDFから型式名「オアシスA」を直接確認。検定番号は検索語・資料系統を変えて再探索したが確定できずUNVERIFIED_AFTER_RESEARCH。
- 性能コアはパイオニア公式、K-Navi、P-WORLD、パチマガスロマガ、pacnk、当時新台一覧、当時業界記事、中古実機DBを横断照合。
- BIG/REG/合算/機械割は複数系統で一致。パチマガスロマガ検索取得本文のみPAYOUT設定1=197%、設定2=199%と明白な表示異常があるため主値に採用せずCONFLICT_NOTE。
- 50枚ベースは「50枚/1000円/ベース/コイン持ち/小役確率」を組み替え、前後シリーズの値を排除して再探索したが2012年版の直接値を確定できずUNVERIFIED_AFTER_RESEARCH。
- resetBehaviorはノーマル/AT・ART・CZ非搭載、有利区間非該当を保存。設定変更/据え置き/単純電源OFF→ONの停止出目・告知状態等は十分な再探索後も直接契約を確定できずUNVERIFIED_AFTER_RESEARCH。
- K-Naviの2012-04-05展示会実戦記に、前作「スペシャルオアシス」で使えた設定変更判別ネタを今作でも試したが「ダメでした」とする当時観察があるため、旧変判手法非機能を限定的に保存。手法自体や全変更判別不能へ一般化しない。

## 今回の本線追加 — オアシス

### 導入・分類

- manufacturer: **パイオニア**。
- releaseDate: **2012-06-04**。
- generation: **5号機**。
- systemType: **ノーマル / 完全告知 / BIG+REG / 25φ**。
- formalModelName: **オアシスA**。
- approvalNumber: **UNVERIFIED_AFTER_RESEARCH**。

### 性能コア

- 機械割: **97 / 99 / 101 / 103 / 106 / 110%**。
- BIG: **1/296 / 287 / 277 / 266 / 253 / 239**。
- REG: **1/455 / 425 / 392 / 360 / 329 / 299**。
- 合算: **1/179 / 171 / 162 / 153 / 143 / 132**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。
- BIG: **約312枚**。
- REG: **約104枚**。
- AT/ART/CZ: **非搭載**。

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。停止出目/一時告知状態等の本機固有設定変更契約を確定できず。
- `carryOverBehavior`: **PERFORMANCE_RELEVANT_CARRYOVER_NOT_APPLICABLE; PRESENTATION_STATE_UNVERIFIED**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_CEILING**。
- `modeAfterReset`: **INTERNAL_PERFORMANCE_MODE_NOT_APPLICABLE**。
- `stateAfterReset`: **NOT_APPLICABLE_NO_AT_ART_CZ_STATE**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **PREVIOUS_MODEL_CHANGE_DETECTION_TRICK_REPORTED_NOT_WORKING_ON_THIS_MODEL_SINGLE_PERIOD_OBSERVATION; SPECIFIC_METHOD_UNVERIFIED**。K-Navi当時展示会実戦記の限定観察。
- `publicMorningNumbers`: **NONE_CONFIRMED**。

## CONFLICT / 品質メモ

- パチマガスロマガ本機専用ページの検索取得本文でPAYOUT設定1=197%、設定2=199%と表示。K-Navi/pacnk/当時新台一覧は97%/99%、かつ同ページ設定3〜6は101/103/106/110%なので明白な表示/転記異常として主値不採用。
- 50枚ベースは兄弟機/前後シリーズの約37G等を本機へ流用しない。
- 前作の変判ネタが今作では機能しなかったという当時観察は、具体手法や全変更判別不能の証明ではない。

## 次回再開地点

1. **recordCount 662 / chronologicalFrontier 2012-06-04**から開始。
2. **2012-06-04同日群を継続**。最優先候補は **ディ・ライト「パチスロ 熱血！華成学園ヒーロー部」**。repo検索時点では未登録。一次/当時資料で導入日再照合後、未登録なら663件目候補として性能コア+resetBehavior v0.7を処理。
3. その後、2012-06-04同日群をメーカー別・当時新台一覧・K-Navi/P-WORLD/HAZUSE等で最終監査し、漏れがなければ閉じて2012-06-05以降へ前進。
4. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて再探索。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- パイオニア公式発売PDF: `https://www.slot-pioneer.co.jp/information/pdf/pioneer_oasis_120326.pdf`
- パイオニア公式2012製品一覧: `https://www.slot-pioneer.co.jp/products/2012.html`
- K-Navi: `https://p-kn.com/slot/1616/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6688`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/102/a.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/102/h.php`
- pacnk: `https://pacnk.com/slot/2012/oasis/top.php`
- 2012-06-04当時新台一覧: `https://macerate.seesaa.net/article/273495238.html`
- Pマンズ 2012-03-28業界記事: `https://p-mans.blogspot.com/2012/03/`
- A-SLOT: `https://www.a-slot.com/SHOP/pioneer17.html`

## GitHub commits

- ニューパルサーSP machine record: `e082c85711a19689c546612afa6e1f78e331b3bb`
- オアシス machine record: `3c7877eb20c01089cbd6adfeb215ebe42bfcf93f`
