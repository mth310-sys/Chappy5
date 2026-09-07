# ジャッカスチーム

machineName: ジャッカスチーム
manufacturer: 大都技研
releaseDate: 2015-08-03
releaseDatePrecision: exact_nationwide_start_day
releaseDateNote: K-Naviがホール導入開始2015-08-03を明記。グリーンべるとは最速納品2015-08-02予定としており、納品日と実ホール導入日を分離する。
generation: 5号機
systemType: A+ART / 本物ボーナス+疑似ボーナス / 新基準機
formalModelName: JACKASSTEAM A7
inspectionNumber: 5S0224
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- メーカー: **大都技研**。
- canonical導入日: **2015-08-03**。
- 型式名: **JACKASSTEAM A7**。
- 検定番号: **5S0224**。
- グリーンべるとの2015-06-19記事は最速納品を8月2日予定、K-Naviはホール導入開始を8月3日とするためイベント定義を分離。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.7% |
| 3 | 100.8% |
| 4 | 104.8% |
| 5 | 110.3% |
| 6 | 119.2% |

- K-Navi、グリーンべると、pacnk、後年解析DBで一致。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE

## initialHitBySetting

本DBの主要初当たりはART「ジャッカスボーナス」。

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/591.7 |
| 2 | 1/578.8 |
| 3 | 1/555.8 |
| 4 | 1/529.9 |
| 5 | 1/482.9 |
| 6 | 1/409.6 |

参考として本物ボーナス合算は設定1〜6で **1/222.9 / 220.7 / 217.0 / 207.4 / 199.8 / 175.7**。K-Naviの「ボーナス合算」1/154.7〜1/101.6は本物+疑似を含む別定義系列のため混ぜない。

## baseGamesPer50

- **約35.5G/50枚**。
- パチマガスロマガの小役解析ページで明示。
- confidence: ANALYSIS_HIGH

## netIncrease

- ART/疑似ボーナス純増: **約2.0枚/G**。
- グリーンべると、K-Navi、パチマガスロマガで一致。

## basicPayout

- 本物BIG: **108枚**（業界記事では約110枚表記）。
- 本物RB「トレジャーボーナス」: **36枚**（業界記事では平均約40枚表記）。
- 疑似ボーナス「ブリッツボーナス」: **1セット30G+α**。
- ART「ジャッカスボーナス」: **1セット50G+α**。

## modeSpecificMinimumData

- 通常モード天井: **800G+前兆**。
- 天国モード天井: **100G+前兆**。
- 天井到達時は疑似ボーナス「ブリッツボーナス」当選。
- ARTを含む全ボーナス当選で天井までのゲーム数をリセットする整理資料あり。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA_WITH_POWER_CYCLE_INTERNAL_CONTRACT_UNVERIFIED
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井ゲーム数リセット / 内部モード再抽選 / 内部状態再抽選**。
- 設定変更後は専用の **リセットA / リセットB** に移行。
- リセットA 90.0%、リセットB 10.0%（全設定共通）。
- リセットBは天国確定。リセットAは通常Aと同じゾーン特性。

### carryOverBehavior

- 据え置き時は **天井ゲーム数 / 内部モード / 内部状態を引き継ぐ** と当時朝一解析に明記。
- ステージ挙動は当時資料でも調査中のため `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 純粋な電源OFF→ON時の天井G/内部モード/内部状態の正常機における本機固有契約は `UNVERIFIED_AFTER_RESEARCH`。
- 中古実機販売資料に電源断前のART/ボーナス状態を保持するバックアップ機構の存在は示されるが、経年劣化によるバックアップエラー注意書きであり、営業用実機の純電断契約を確定する根拠には使用しない。

### gameCounterReset

- 設定変更時: **RESET**。
- 据え置き時: **CARRY_OVER**。
- 純電源OFF→ON時: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- リセット時も通常のモード依存天井を使用。
- リセットB（10%）は天国確定のため **100G+前兆**。
- リセットA（90%）は通常A同様のゾーン特性。固定短縮天井として「必ず100G以内」ではない。

### modeAfterReset

- 設定変更時: **リセットA 90.0% / リセットB 10.0%**（全設定共通）。
- リセットBは天国確定。
- 公開朝一数値として保存。

### stateAfterReset

- 設定変更時: **再抽選**。
- 据え置き時: **引き継ぐ**。
- 具体的な初期低/高状態振り分けは今回の収集粒度では固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更後は **10%でリセットB→天国確定**。
- 天国時は100G+前兆が天井となるため朝一100G付近までの狙い材料になる。

### resetPenalties

- 前日天井進捗は設定変更で消失するため、前日ハマリを宵越しで狙う客には不利。
- その他の設定変更専用ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のガックン/初期出目/ステージによる確定的変更判別は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 100G+前兆で当選した場合はリセットB/天国の可能性を示すが、通常の天国移行もあるため設定変更確定材料にはしない。

### numericResetData

| 項目 | 数値 |
|---|---:|
| リセットA | 90.0% |
| リセットB | 10.0% |
| リセットBの性質 | 天国確定 |
| 天国天井 | 100G+前兆 |
| 通常天井 | 800G+前兆 |

- リセットA/Bからボーナス後に通常A/B/C/天国へ移行する詳細テーブルも公開されているが、実機完全再現用の細かな内部移行率にあたるため本DBでは主要朝一値の90/10のみ保持する。

## conflicts

- `RELEASE_DATE_DEFINITION_2015_08_02_DELIVERY_VS_2015_08_03_HALL_START`。
- BIG約110枚 vs 108枚、RB平均約40枚 vs 36枚は概数と精密純増値の定義差として扱い、CONFLICTにはしない。
- K-Naviのボーナス合算1/154.7〜1/101.6とpacnkの本物ボーナス合算1/222.9〜1/175.7は対象範囲が異なる別定義系列。

## missingFields

- 純電源OFF→ON時の天井G/モード/状態の正常機固有契約: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の内部状態具体振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有のガックン等変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources

取得日: 2026-09-07

1. 大都技研 製品情報 — https://www.daitogiken.com/products/slot/
   - 2015年8月導入機、製品説明を確認。
2. K-Navi「ジャッカスチーム」 — https://p-kn.com/slot/2299/
   - ホール導入開始2015-08-03、設定別機械割、広義ボーナス合算を確認。
3. グリーンべると 2015-06-19 — https://web-greenbelt.jp/00007876/
   - 最速納品8月2日予定、A+ART、新基準機、純増約2.0枚/G、BB約110枚、RB平均約40枚、機械割を確認。
4. P-WORLD — https://www.p-world.co.jp/machine/database/7770
   - 大都技研、5号機ART、BB108枚、RB36枚、ブリッツ30G+α、ART50G+αを確認。
5. パチマガスロマガ 小役確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/60/c.php
   - 50枚あたり約35.5Gを確認。
6. パチマガスロマガ ゲーム性 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/60/l.php
   - ART/疑似ボーナス純増約2.0枚/G、基本G数、内部状態概念を確認。
7. すろぱちくえすと 朝一設定変更 — https://www.slopachi-quest.com/article/jackass-team-reset/
   - 設定変更時の天井リセット・モード再抽選・状態再抽選、据え置き時の各項目引継ぎを確認。
8. すろぱちくえすと リセットモード — https://www.slopachi-quest.com/article/jackass-team-resetmode/
   - リセットA 90% / リセットB 10%、リセットB天国確定を確認。
9. 期待値見える化 — https://slotjin.com/zone/jackassteam/
   - 通常800G+前兆、天国100G+前兆、設定変更で天井Gリセットを照合。
10. pachinavi — https://pachinavi.net/machines/jackass-team/
   - 型式JACKASSTEAM A7、検定番号5S0224、設定別ART初当たり・機械割を補助確認。
