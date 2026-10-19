# クイーンハナハナ-30

machineName: クイーンハナハナ-30
aliases: クイーンハナハナ30 / QUEEN HANAHANA-30
manufacturer: パイオニア / PIONEER
releaseDate: 2013-10-07
releaseDatePrecision: exact_day
modelName: クイーンハナハナEX-30

generation: 5号機
systemType: ノーマル / Aタイプ / 完全告知 / 30φ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- パイオニア製ハナハナシリーズの30φノーマル機。
- パチビー / K-Naviでホール導入開始 **2013-10-07** を確認。グリーンべると当時業界記事は納品開始 **2013-10-06** としており、納品日とホール導入日を分離して保持。
- 型式名 **クイーンハナハナEX-30** は当時業界記事で確認。
- confidence: INDUSTRY + ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96% |
| 2 | 98% |
| 3 | 101% |
| 4 | 104% |
| 5 | 107% |
| 6 | 111% |

- K-Naviの設定別表とグリーンべると当時記事の設定1〜6範囲が整合。
- confidence: INDUSTRY + ANALYSIS_HIGH

## initialHitBySetting

### BIG / REG / ボーナス合算

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/309 | 1/516 | 1/193 |
| 2 | 1/297 | 1/481 | 1/184 |
| 3 | 1/284 | 1/445 | 1/173 |
| 4 | 1/270 | 1/409 | 1/163 |
| 5 | 1/256 | 1/376 | 1/152 |
| 6 | 1/240 | 1/344 | 1/141 |

- K-Navi設定別表で確認。グリーンべると当時記事も設定1/6の端点および合算端点が一致。
- confidence: INDUSTRY + ANALYSIS_HIGH

## baseGamesPer50

- **平均約37.5G/50枚**。
- グリーンべると2013-08-30業界記事の「1000円あたり平均37.5G」を20円スロット50枚相当として採用。
- confidence: INDUSTRY

## netIncrease

- NOT_APPLICABLE_NORMAL_TYPE。
- ART/AT等の付加機能は非搭載。

## basicPayout

- BIG: **最大約312枚**（345枚超払い出しで終了）。
- REG: **最大約130枚**（135枚超払い出しで終了）。
- K-Navi / パチマガスロマガ / グリーンべるとで一致。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ボーナスのみで出玉を増やすノーマルタイプ完全告知機。
- ART/AT/CZ、通常時モード・状態による初当たり管理は非搭載として扱う。
- 告知タイミングは当選ゲームレバーON中心で、次ゲーム告知も存在するがリセット物差しとは別の演出仕様。

## ceiling

- **NOT_APPLICABLE_NORMAL_TYPE**。
- ゲーム数天井・ART/AT間天井は非搭載。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__NORMAL_TYPE_NO_CEILING_MODE_STATE_PROGRESS__MORNING_CHANGE_DETECTION_OBSERVATIONAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 本機固有の設定変更後専用モード、短縮天井、CZ/AT優遇は **NOT_APPLICABLE_NORMAL_TYPE**。
- 設定変更そのものに伴うリール初動以外の特別な内部朝一恩恵は、機種名・型式・「設定変更/リセット/朝一/据え置き/電源OFF」を変えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。

### carryOverBehavior

- 天井・モード・ART/AT状態など、ホール朝一で宵越し価値を持つ進行要素は **NOT_APPLICABLE_NORMAL_TYPE**。
- ボーナス履歴表示など外部データカウンタ側の扱いは本DBの実機内部resetBehavior対象外。

### powerCycleBehavior

- 電源OFF→ONのみで比較対象となる天井進捗・モード・ART/AT状態は **NOT_APPLICABLE_NORMAL_TYPE**。
- 本機固有の電断時特殊挙動は **NONE_CONFIRMED_AFTER_RESEARCH**。

### gameCounterReset

- internal ceiling/game-number progression: **NOT_APPLICABLE_NORMAL_TYPE**。

### ceilingAfterReset

- **NOT_APPLICABLE_NORMAL_TYPE**。設定変更専用短縮天井なし。

### modeAfterReset

- **NOT_APPLICABLE_NORMAL_TYPE**。AT/ART/CZの通常時モード管理なし。

### stateAfterReset

- **NOT_APPLICABLE_NORMAL_TYPE**。朝一狙いに影響するAT/ART内部高確等なし。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更そのものによる短縮天井・朝一CZ/AT・モード優遇: **NONE / NOT_APPLICABLE_NORMAL_TYPE**。

### resetPenalties

- 前日天井進捗消滅等の不利: **NOT_APPLICABLE_NORMAL_TYPE**。

### resetDetection

- 後年のハナハナ解析資料では、クイーンハナハナを含むシリーズの朝一判別として **ガックンすれば設定変更濃厚** とされる。ただし停止出目・個体差・店側の1G回しや同一設定打ち替え等で無効化可能なため確定判別にはしない。
- **朝一87G以内のボーナスでBGM変化が発生した場合は据え置き濃厚** とする解析資料がある。発生率自体は低く、単独での確定判別とはしない。
- クイーンハナハナ以降はベットランプ判別は不可とされる。
- confidence: ANALYSIS_SINGLE_OBSERVATIONAL

### publicMorningNumbers

- reset-only shortened ceiling: **NOT_APPLICABLE**。
- reset mode/state distribution: **NOT_APPLICABLE_NORMAL_TYPE**。
- morning carry-over detection window: **87G以内**のボーナス時BGM変化は据え置き濃厚とする後年解析あり（観測系、発生率低）。

## conflicts / safeguards

- K-Navi本文中に「クイーンズハナハナ-30」と複数形表記があるが、機種名・型式・パイオニア系資料は **クイーンハナハナ-30 / クイーンハナハナEX-30** を採用。
- 納品開始2013-10-06とホール導入開始2013-10-07は定義差でありCONFLICTにしない。
- ガックン/BGM変更判別は後年解析・実戦系であり、メーカー公式確定契約として扱わない。

## sources

取得日: **2026-09-06**

1. パチビー「クイーンハナハナ-30」
   - https://www.pachibee.jp/machines/about/213080011
   - 2013-10-07導入 / 5号機ノーマル / 完全告知 / 30φ。
   - confidence: ANALYSIS_HIGH_DATABASE

2. K-Navi「クイーンハナハナ-30」
   - https://p-kn.com/slot/1926/
   - 2013-10-07導入 / 設定別BIG・REG・合算 / 機械割 / BIG312枚・REG130枚。
   - confidence: ANALYSIS_HIGH

3. P-WORLD業界ニュース / グリーンべると「シリーズ最多の点滅演出『クイーンハナハナ-30』」2013-08-30
   - https://news.p-world.co.jp/articles/6038/greenbelt
   - 型式クイーンハナハナEX-30 / 平均37.5G/1000円 / BB・RB・合算端点 / 出玉率96〜111% / BB最大312枚・RB最大130枚 / 納品10-06から。
   - confidence: INDUSTRY

4. パチマガスロマガ「クイーンハナハナ-30」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/107/a.php
   - 2013年10月 / ノーマル完全告知 / BIG約312枚・REG約130枚。
   - confidence: ANALYSIS_HIGH_PERIOD_DATABASE

5. スロパチクエスト「クイーンハナハナ 設定判別ツール・設定差 完全まとめ」
   - https://www.slopachi-quest.com/article/queen-hanahana/
   - 朝一ガックン / 87G以内BGM変化の据え置き示唆 / ベットランプ判別不可 / 対策注意。
   - confidence: ANALYSIS_SINGLE_OBSERVATIONAL

## missingFields

- メーカー公式の設定変更/電源OFF→ON固有契約: UNVERIFIED_AFTER_RESEARCH（ただしホール朝一価値を持つ天井・モード・状態はノーマル機構上NOT_APPLICABLE）。
- メーカー公式のガックン/BGM変更判別契約: UNVERIFIED_AFTER_RESEARCH。

## nextQaNotes

- 当時パイオニア公式取扱資料やホール向け資料が発掘できた場合のみ、設定変更時リール初動・電断契約を公式根拠へ格上げする。
