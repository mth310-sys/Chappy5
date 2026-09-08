machineName: 沖ドキ！パラダイス-30
manufacturer: アクロス
releaseDate: 2016-06-27
recordNumber: 990
generation: 5号機
systemType: AT / 疑似ボーナス連続タイプ / 完全告知 / 30Φ
formalModelName: 沖ドキ！パラダイスHH-30
certificationNumber: 5S1370
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- ユニバーサル公式は「沖ドキ！パラダイス」を2016年6月発売、25Φ/30Φ同時デビューとして掲載。公式商品ページ上の代表メーカー表記はユニバーサルブロスだが、30Φ個別機種はP-WORLD・パチビー・ALL7等の当時/業界DBでアクロス扱い。
- P-WORLDで30Φ側の型式名 `沖ドキ！パラダイスHH-30`、検定番号 `5S1370`、メーカー アクロスを確認。
- パチビー、ALL7で2016-06-27導入・アクロスを照合。
- No.989の25Φ `沖ドキ！パラダイスHA / 5S1348 / ユニバーサルブロス` と同スペック系だが、メーカー・型式・検定番号・口径が異なるため独立レコードとする。
reliability: OFFICIAL_INDUSTRY_ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.7% |
| 2 | 99.4% |
| 3 | 101.5% |
| 4 | 104.1% |
| 5 | 107.1% |
| 6 | 110.2% |
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/799.1 | 1/149.7 | 1/126.1 |
| 2 | 1/551.6 | 1/143.4 | 1/113.8 |
| 3 | 1/625.4 | 1/141.6 | 1/115.5 |
| 4 | 1/451.6 | 1/134.6 | 1/103.7 |
| 5 | 1/491.7 | 1/133.6 | 1/105.1 |
| 6 | 1/355.9 | 1/118.3 | 1/88.8 |
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 設定1: **48.9G/50枚**
- 設定2: **49.0G/50枚**
- 設定3: **49.1G/50枚**
- 設定4: **49.2G/50枚**
- 設定5: **49.3G/50枚**
- 設定6: **49.4G/50枚**
- 比較用代表値: **約49G/50枚**。
- 25Φ/30Φは中身同一とする当時解析を照合して30Φにも採用。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- AT疑似ボーナス純増: **約3.0枚/G**。
- 公式は25Φ/30Φ同時展開商品として「最後の純増3.0枚」を明記し、P-WORLD 30Φ個別ページでも1Gあたり3.0枚増加を確認。
reliability: OFFICIAL_INDUSTRY

## basicPayout
- BIG: **40G / 約120枚**。
- REG: **10G / 約30枚**。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常A / 通常B / 天国準備: 天井 **700G表記**。
- P-WORLD/パチビー30Φ個別ページは「ボーナス間最大699G消化でボーナス確定」と表記。解析の700G天井と到達点カウント表現差として双方保持。
- 引き戻し: 最大 **170G**。
- 天国 / ドキドキ / 超ドキドキ / 保障: **32G**。
- 通常時は8モードを持つ。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は **天井ゲーム数RESET**。
- 内部モードは **RESELECT**。
- 25Φ/30Φは中身同一とする当時解析、および共通スペック解析で設定変更契約を照合。

### carryOverBehavior
- 据え置き: 前日の天井進捗・内部モードを **CARRYOVER**。

### powerCycleBehavior
- 純電源OFF→ON: **天井ゲーム数CARRYOVER / 内部モードCARRYOVER**。
- 設定変更とは別挙動。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き / 純電源OFF→ON: **CARRYOVER**。

### ceilingAfterReset
- 設定変更時はモード再抽選。
- **33.59%で引き戻しモード**へ入り、その場合は最大170Gとなる。
- 固定のリセット専用天井ではなく `PROBABILISTIC_RESET_SHORTENING_VIA_MODE_RESELECT`。

### modeAfterReset
設定変更時モード振り分け（全設定共通）:
| モード | 振り分け |
|---|---:|
| 通常A | 50.00% |
| 通常B | 15.23% |
| 天国準備 | 1.17% |
| 引き戻し | 33.59% |
- 純電源OFF→ONでは前日モードを引き継ぐ。

### stateAfterReset
- ホール経営/朝一客AIに主要な長期内部状態は上記モード契約として記録。
- それ以外の細かな内部状態抽選は物差し用途外。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時の **33.59%で引き戻しモード**が主要朝一恩恵。
- 引き戻しなら最大170Gでボーナス到達。

### resetPenalties
- 設定変更で前日の天井進捗・内部モードを失うため、深いハマリや良モードの据え置き期待は消える。
- その他の設定変更専用不利数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 共通解析では朝一は基本的に設定変更を見抜きにくいとされる。
- 30Φ固有のガックン・初期出目・ランプ等について、機種名/型式名/アクロス/設定変更/リセット/朝一/ガックン/変更判別を組み替えて再探索したが、確定的契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 170G以内の当選は引き戻し示唆になり得るが、設定変更確定材料ではない。

### numericResetData
- 設定変更時モード: 通常A **50.00%** / 通常B **15.23%** / 天国準備 **1.17%** / 引き戻し **33.59%**。
- 引き戻しモード天井: **最大170G**。

## dataQualityNotes
- 30Φ個別のメーカー/型式/検定番号はP-WORLDで直接確認し、25Φとの混同を回避。
- 公式は25Φ/30Φ同時デビューを明記。スロ確は両バージョンを「中身は同じ」と明記し、メーカー区分を25Φユニバーサルブロス / 30Φアクロスと整理。
- 性能コアはP-WORLD/パチビー30Φ個別ページと共通解析の一致を優先。
- 天井「700G」と「699G消化で確定」は表現差として双方保持。
- resetBehaviorは同一内部仕様を示す当時解析を根拠に、30Φ固有の識別情報と分離して保存。

## sources
取得日: 2026-09-08

1. ユニバーサルエンターテインメント公式 — 沖ドキ！パラダイス
   - https://www.universal-777.com/product/slot/okidoki_paradise/
   - 5号機AT、2016年6月発売、純増3.0枚、25Φ/30Φ同時デビュー。
   - reliability: OFFICIAL
2. P-WORLD — 沖ドキ！パラダイス-30
   - https://www.p-world.co.jp/machine/database/8049
   - アクロス、30Φ、型式 `沖ドキ！パラダイスHH-30`、検定番号 `5S1370`、AT純増3.0枚/G、40G/10G、機械割、初当たり、最大699G消化表記。
   - reliability: INDUSTRY_DATABASE
3. パチビー — 沖ドキ！パラダイス-30
   - https://www.pachibee.jp/machines/index/216060008
   - アクロス、2016-06-27、設定別機械割/ボーナス、最大699G消化、純増3.0枚/G。
   - reliability: INDUSTRY_DATABASE
4. パチビー — 仕様解説
   - https://www.pachibee.jp/machines/lecture/216060008
   - 8モード、各ボーナス構造。
   - reliability: INDUSTRY_DATABASE
5. スロ確.com — 沖ドキ！パラダイス
   - https://slotkaku.com/okidokiparadise
   - 25Φユニバーサルブロス/30Φアクロス、両版「中身は同じ」、設定別性能、48.9〜49.4G/50枚、700G/170G/32G天井、設定変更/電断、モード振り分け。
   - reliability: PERIOD_ANALYSIS
6. ALL7 — 2016年6月導入予定一覧
   - https://www.all7.jp/plans/index/2016/06
   - 2016-06-27、沖ドキ！パラダイス-30、メーカー アクロス。
   - reliability: PERIOD_DATABASE

## missingFields
- 30Φ固有の確定的設定変更判別契約（十分再探索後も確認なし）

## conflicts
- `CEILING_COUNT_PRESENTATION_699_GAMES_CONSUMED_VS_700G_CEILING`: P-WORLD/パチビーは最大699G消化で確定、解析は700G天井。到達点のカウント表現差として双方保持。
- `OFFICIAL_PRODUCT_PAGE_MANUFACTURER_LABEL_VS_VARIANT_MANUFACTURER`: 公式商品ページ代表表記はユニバーサルブロスだが、30Φ個別のP-WORLD/パチビー/ALL7はアクロス。型式 `HH-30` / 検定 `5S1370` を伴う30Φ個別区分ではアクロスをcanonicalとする。
