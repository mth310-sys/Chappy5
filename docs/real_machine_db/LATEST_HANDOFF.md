# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **629**
- latestMachineAdded: **トリプルチャンスV-30**（ウィザード）
- latestRecord: `docs/real_machine_db/machines/2011-12_triple-chance-v-30.md`
- chronologicalFrontier: **2011-12-19**
- frontierLatestExactDateMachine: **Piaキャロットへようこそ!!G.O.**
- schema: **resetBehavior v0.7**
- status: **2011-12_MONTH_END_AUDIT**

## 今回の本線追加 — トリプルチャンスV-30

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「Piaキャロットへようこそ!!G.O.」を再取得して開始。
- 開始時正本は **recordCount 628 / chronologicalFrontier 2011-12-19**。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- GitHub code searchで開始時未登録を確認。調査中に同名レコード `docs/real_machine_db/machines/2011-12_triple-chance-v-30.md` がmainへ出現したため、重複作成せず既存レコードを採用してhandoffのみ前進。
- 5号機クロニクル、スロリスクタイムの独立一覧で **ウィザード / ノーマル / 2011年12月導入**を確認。
- 具体導入日は表記揺れ・メーカー名・型式/検定・P-WORLD/K-Navi/パチビー/HAZUSE相当語・導入/納品を組み替えて再探索したが直接確定できず、releaseDate=2011-12の月粒度で保持。
- 日付未確定のためchronologicalFrontierは後退させず **2011-12-19**を維持し、本機は2011年12月BACKFILLとして扱う。

### 性能コア

- systemType: **ノーマル / 30Φ**。
- 設定別機械割: **UNVERIFIED_AFTER_RESEARCH**。5号機クロニクル自体も本機欄を不明としている。
- 設定別BIG/REG/合算: **UNVERIFIED_AFTER_RESEARCH**。同じく現存直接表を確定できず、近縁機から流用しない。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。
- BIG/REG獲得枚数: **UNVERIFIED_AFTER_RESEARCH**。
- ART/AT純増: **NOT_APPLICABLE_NORMAL_TYPE**。

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**。
- `resetBenefits` / `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- ガックン、初期出目、告知ランプ、朝一専用数値は本機固有根拠を確認できず、一般的な30Φノーマル機から補完しない。

## conflicts

- 今回は競合値ではなく主要性能値が未取得。類似機「トリプルチャンス-30」（2011/7）や同社他機種の値は同一性能確認がないため転記禁止。

## 時系列監査

- HAZUSE新台カレンダー上、2011年12月の掲載日ブロックは **12/02, 12/05, 12/09, 12/16, 12/19**。既存本線は12/19まで到達済み。
- トリプルチャンスV-30は具体日未確定の2011-12月BACKFILLとして629件目に取り込んだ。
- 次回は2011年12月末残存候補をメーカー別一覧/P-WORLD/HAZUSE/当時業界で最終監査し、漏れがなければ2012年1月へ進む。
- HAZUSEの2012年1月日付ブロックは **01/03, 01/06, 01/10, 01/13, 01/16, 01/20, 01/23, 01/27**。最初は01/03群から実在パチスロ機を同定する。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 629 / chronologicalFrontier 2011-12-19**から開始。
2. 2011年12月末の残存漏れを最終監査。トリプルチャンスV-30は再調査し直さず、既存PARTIALとしてQAへ回す。
3. 12月を閉じられた場合、HAZUSE 2012年1月カレンダーの **01/03群**から最古未処理機を同定して収集する。
4. 以降 **01/06 → 01/10 → 01/13 → 01/16 → 01/20 → 01/23 → 01/27** の順で監査する。
5. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックンを組み替えて再探索。競合値は平均せずCONFLICT。

## 主要出典 — 今回取得日 2026-09-05

### トリプルチャンスV-30
- 5号機クロニクル「ウィザード」: `https://5goki.com/wizard`
- スロリスクタイム5号機一覧: `https://pachisuro100.com/itiran/`
- スロリスクタイム ノーマルタイプ一覧: `https://pachisuro100.com/normal/`

### 時系列
- HAZUSE 新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`

### 次回順序確認
- **2011年12月末最終監査 → 2012-01-03群 → 01/06 → 01/10 → 01/13 → 01/16 → 01/20 → 01/23 → 01/27。**
