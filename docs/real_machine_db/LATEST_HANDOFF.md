# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **667**
- latestMachineAdded: **セブンバー30**（高砂電器産業 / TAKASAGO）
- latestRecord: `docs/real_machine_db/machines/2012-06-25_sevenbar30.md`
- chronologicalFrontier: **2012-06-25**
- frontierLatestExactDateMachine: **セブンバー30**
- schema: **resetBehavior v0.7**
- status: **OPEN_2012-06-25__NEXT_SAME_DAY_AUDIT_THEN_2012-06-26_TO_2012-07-02**

## 今回の同期・時系列監査

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「鉄のラインバレル」を確認して開始。
- INDEXは旧地点19件のままなので、README規定どおりLATEST_HANDOFFと実レコードを正本化。開始時は recordCount 666 / frontier 2012-06-18。
- 2012-06-18同日群と06-19～06-24境界を再監査。
- 「夜王」は一度06-18候補に見えたが、パチ7の年月日は導入日として使える根拠ではなく、5号機クロニクルでは導入2012年8月。時系列誤登録を避けて今回追加しなかった。
- 既知候補「セブンバー30」はrepo未登録を確認し、667件目として追加。
- 導入日はK-Navi=2012-06-25、HAZUSE=2012-06-24、コナミアミューズメント公式アーカイブ=2012年7月でCONFLICT。平均せず全て保持し、時系列キーは「ホール導入開始」と明記するK-Naviの2012-06-25を採用。

## 今回の本線追加 — セブンバー30

### 識別

- manufacturer: **高砂電器産業 / TAKASAGO**
- modelName: **セブンバーR30**
- approvalNumber: **2S0272**
- releaseDate: **2012-06-25**（HAZUSE 2012-06-24 / 公式アーカイブ2012年7月とCONFLICT）
- generation: **5号機**
- systemType: **ノーマル / 30Φ / 完全告知 / ボーナス単独成立**

### 性能コア

- 機械割: **97.5 / 98.9 / 100.5 / 102.5 / 105.0 / 108.2%**
- BIG: **1/299.3 / 288.7 / 277.7 / 268.6 / 268.6 / 256.0**
- REG: **1/595.8 / 580.0 / 555.4 / 496.5 / 381.0 / 358.1**
- ボーナス合算: **1/199.2 / 192.8 / 185.1 / 174.3 / 157.5 / 149.3**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- BIG: **約312枚**（規定払い出し345枚）
- REG: **約117枚**（規定払い出し134枚）
- ART/AT: **非搭載**
- ゲーム数天井/規定G解除: **確認なし**

### resetBehavior v0.7

- `settingChangeBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `carryOverBehavior`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_OR_MODE_CONFIRMED**
- `powerCycleBehavior`: **UNVERIFIED_AFTER_RESEARCH**
- `gameCounterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**
- `ceilingAfterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**
- `modeAfterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED_AFTER_RESEARCH**
- `stateAfterReset`: **UNVERIFIED_AFTER_RESEARCH**
- `advantageousSectionReset`: **NOT_APPLICABLE_5TH_GEN**
- `resetBenefits`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetPenalties`: **NONE_CONFIRMED_AFTER_RESEARCH**
- `resetDetection`: **UNVERIFIED_AFTER_RESEARCH**
- `publicMorningNumbers`: **NONE_CONFIRMED_AFTER_RESEARCH**

### resetBehavior品質メモ

- 「セブンバー30 / セブンバーR30 / TAKASAGO / 高砂電器産業」に「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / モード / 状態 / ガックン」を組み替えて再探索。
- K-Navi、HAZUSE、パチマガスロマガ、P-WORLD、コナミアミューズメント公式機種アーカイブを横断。
- 純ノーマル機でゲーム数天井・規定G解除・ART/ATを確認しないため該当項目はNOT_APPLICABLE。ただし設定変更時/単純電源OFF→ONの細かな出目・ランプ挙動は一般論で補完していない。
- 本機資料にある**「カックン告知」**はボーナス成立時のプレミアム告知演出名。設定変更判別のリールガックンとは別概念なので、`resetDetection`の根拠には使わない。

## CONFLICT / 品質メモ

- releaseDate: K-Navi **2012-06-25** / HAZUSE **2012-06-24** / コナミアミューズメント公式アーカイブ **2012年7月**。平均せず保持。
- manufacturerName: 当時資料は**高砂電器産業 / TAKASAGO**、現行P-WORLD・公式アーカイブは**コナミアミューズメント**表記。会社再編後の名称と当時メーカー名を区別。
- BIG/REG/合算/機械割はK-Navi、パチマガスロマガ、HAZUSEで一致。

## 次回再開地点

1. **recordCount 667 / chronologicalFrontier 2012-06-25**から開始。
2. **2012-06-25同日群を最終監査**し、具体日付き未登録5号機があれば先に処理。
3. 同日群を閉じたら **2012-06-26～07-01境界監査**へ進む。
4. K-Navi 2012年7月カレンダーで **2012-07-02** に以下のパチスロ群を確認済み。repo重複を順に確認して最古未処理から処理する。
   - スーパー5（ウィンネット）
   - 餓狼伝説☆双撃（SNKプレイモア）
   - アイドルマスターライブインスロット（Sammy）
   - めぞん一刻～夏色の風と～（オリンピア）
   - 天空のシンフォニア ～光を求めて～（コルモ）
5. 「夜王」は2012-06-18には登録しない。2012年8月地点で再監査する。
6. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間/50枚を組み替えて再探索。競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- K-Navi セブンバー30: `https://p-kn.com/slot/1639/`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/04/a.php`
- パチマガスロマガ 確率表: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/takasago_slot/04/h.php`
- HAZUSE: `https://hazuse.com/machine/pachislot/2S0272/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6727`
- コナミアミューズメント公式アーカイブ: `https://www.konami.com/amusement/psm/archive/ps/2012/sevenbar30/`
- K-Navi 2012年7月導入カレンダー: `https://p-kn.com/calendar/201207/`

## GitHub commits

- セブンバー30 machine record: `a2b8254874117e2815f23a603b2dd9521a4c6f04`
