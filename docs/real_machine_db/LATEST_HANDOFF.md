# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **336件地点 / 2009-01-12 キング・コングまで完了**。
- 直前指示どおり2009-01-01〜11を再監査した結果、**2009-01-04納品開始の未処理機「パチスロ秘密戦隊ゴレンジャー」**を当時グリーンべると記事で確定。
- 今回、時系列漏れとして **337 `パチスロ秘密戦隊ゴレンジャー`（SANKYO）** を遡及追加。
- **既存337件の再追加禁止。**

## 337. パチスロ秘密戦隊ゴレンジャー

record:
- `docs/real_machine_db/machines/2009-01-04_himitsu-sentai-gorenger.md`

要点:
- machineName: **パチスロ秘密戦隊ゴレンジャー**
- manufacturer: **SANKYO**
- releaseDate: **2009-01-04**。当時グリーンべると記事が「1月4日から納品を開始」と明記。SANKYO公式オンライン博物館は導入年月2009.01。
- modelNumber: **パチスロ秘密戦隊ゴレンジャー**
- approvalNumber: **8S0923**（P-WORLD）
- generation: **5号機**
- systemType: **ボーナス+貫通型RT**
- 設定構成: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97 / 99 / 101 / 104 / 108 / 112%**。K-Navi、P-WORLD、当時5号機まとめで一致。
- BIG合算: **1/496 → 1/385**、CHALLENGE BONUS合算: **1/81 → 1/62**、総ボーナス合算: **1/69 → 1/53**。SANKYO公式アーカイブとK-Naviで一致。
- 50枚ベース: **34.01 / 34.36 / 34.69 / 35.04 / 35.36 / 35.74G**。当時5号機まとめの単一表なので `ANALYSIS_SINGLE` として保持し、別系統照合待ち。
- 赤BIG約**260枚**、青/黄BIG約**120枚**、赤CB約**90枚**、青CB約**63枚**、黄CB約**45枚**。パチマガスロマガ旧ページとP-WORLDで整合。
- RT「ゴレンジャータイム」はBIG後必ず突入。青/黄BIG後**200G**、赤BIG後**9999Gまたは次回BIGまで**。RT中CBでは終了しない貫通型。
- RT純増はP-WORLDが**現状維持程度**、当時5号機まとめが**CB込み期待値約+0.9枚/G**。定義が異なるためCONFLICT扱いせず別定義で保持。
- `coreStatus=COMPLETE_CORE_WITH_BASE_SINGLE_SOURCE`。

### v0.7 resetBehavior

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `carryOverBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**。
- `gameCounterReset`: **NONE_CONFIRMED_AFTER_RESEARCH**。通常時ゲーム数天井を本機固有資料で確認できず。
- `ceilingAfterReset`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `modeAfterReset`: **NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH**。
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**。
- `advantageousSectionReset`: **NOT_APPLICABLE**（5号機・有利区間制度前）。
- `resetBenefits` / `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**。
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**。
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 機種名/型式/メーカーに設定変更/リセット/朝一/据え置き/電源OFF ON/天井/RT/状態/ガックンを組み替え、SANKYO公式、業界記事、P-WORLD、K-Navi、パチマガスロマガ旧ページ、当時5号機まとめ/回顧資料まで横断後にUNVERIFIED判定。BIG後RT200G/9999Gを通常時天井やリセット天井へ流用しない。一般的5号機挙動から補完しない。

### 資料QA注意

- 現行の5号機クロニクルSANKYO一覧の検索結果には、本機をA+ART・BIG約208枚/REG約60枚・ART初当たり等とする、SANKYO公式/P-WORLD/K-Navi/当時パチマガと整合しない記述が混入している。
- 別機種級の内容不整合と判断し、本機の性能値には採用しない。競合値として平均もしない。

主要出典（取得日 2026-09-02）:
- https://web-greenbelt.jp/00003962/
- https://www.sankyo-fever.jp/collection/531/
- https://www.p-world.co.jp/machine/database/5407
- https://p-kn.com/slot/900/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/15/a.php
- https://w.atwiki.jp/5gouki/pages/138.html
- https://sulocale.sulopachinews.com/archives/23606

## 2009-01境界監査

- 直前336件地点では、具体日を強く確認できた最古候補を1/12キング・コングとしていたが、今回再監査で **1/4 パチスロ秘密戦隊ゴレンジャー**を当時業界記事から確定したため遡及追加。
- **悪魔城ドラキュラ（KPE）**はパチビーで **2009-01-06導入**、KONAMI公式アーカイブで稼働開始2009年1月を確認済み。現時点の次の具体日未処理本線候補。
- **南国育ち30** はグリーンべるとで **2009-01-18納品**を確認済み。
- 月単位候補 `がんばれ満月姫! / アイムマジック / バケーション / KELOT / マキシマムインパクト / 忍魂 / 甘ぴかっ` は具体導入日を確定してから時系列へ入れる。月情報だけで順序を推測しない。
- `魔界城` / `シャドウハーツII` の具体日が判明した場合は2008-12の正しい位置へ遡及挿入する。

## resetBehavior遡及QA進捗

- 直前までに **大山鳴動漢みちスロ!（2006-09）** をv0.7化済み。
- 次は `2006-09_takenaka-naoto-taikoki.md`（竹中直人のパチスロ太閤記）。
- 新規本線を止めず、QAリレー時に時系列順で進める。

## 次回再開地点

1. **LATEST_HANDOFF基準337件地点。時系列上は2009-01-04 パチスロ秘密戦隊ゴレンジャーを遡及追加済み。336キング・コングも既存レコードとして保持。**
2. まず **2009-01-01〜05** にさらに具体日付き未処理機がないか短く再監査する。
3. 未処理がなければ **2009-01-06「悪魔城ドラキュラ」（KPE）** を次の本線として性能コア+v0.7 resetBehaviorを収集する。
4. その後、1/7〜11と1/12同日群を監査し、キング・コングへ時系列を接続する。キング・コングは再追加しない。
5. 1/13〜17を閉じ、未処理具体日機がなければ **1/18 南国育ち30** へ進む。
6. 月単位候補は具体日確定後のみ正しい位置へ追加する。
7. 遡及QAは **竹中直人のパチスロ太閤記（2006-09）** から再開。
8. PARTIAL/UNVERIFIEDやreset欠損は、表記揺れ・型式・メーカー・シリーズ名に設定変更/リセット/朝一/据え置き/電源OFF ON/天井/モード/状態/ガックンを組み替え、公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで再探索する。一般論や別機種値から推測補完しない。

## コミット（今回）

- 337 パチスロ秘密戦隊ゴレンジャー: `980d48893f8e24039e1fadf7faa67bab87bca9be`
