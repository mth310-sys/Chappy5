# リンダの狙いうち

machineName: リンダの狙いうち
manufacturer: IGTジャパン
releaseDate: 2006-12-03
generation: 5号機初期
systemType: ボーナス + RT

## payoutRateBySetting

設定1: 99.30%
設定2: 100.50%
設定3: 101.92%
設定4: 103.58%
設定5: 105.12%
設定6: 106.65%

パチマガスロマガ掲載値。5号機クロニクルでも 99.3 / 100.5 / 101.9 / 103.6 / 105.1 / 106.7% と丸め差の範囲で一致。

reliability: ANALYSIS_HIGH

## initialHitBySetting

パチマガスロマガ掲載:

| 設定 | BIG合算 | REG |
|---:|---:|---:|
| 1 | 1/267.49 | 1/704.69 |
| 2 | 1/261.10 | 1/704.69 |
| 3 | 1/255.00 | 1/704.69 |
| 4 | 1/247.31 | 1/704.69 |
| 5 | 1/240.06 | 1/704.69 |
| 6 | 1/233.22 | 1/704.69 |

青7BIGは全設定共通1/704.69。赤7BIGは設定差あり。
5号機クロニクル掲載値（赤BIG約1/431〜1/348、青BIG 1/704、REG 1/704、合算約1/194〜1/175）とも整合。

reliability: ANALYSIS_HIGH

## baseGamesPer50

1000円あたりプレイ数（パチマガスロマガ）:
- 設定1: 33.89P
- 設定2: 34.24P
- 設定3: 34.78P
- 設定4: 35.19P
- 設定5: 35.65P
- 設定6: 36.18P

50枚あたりゲーム数と同等の比較指標として保持。

reliability: ANALYSIS_SINGLE

## netIncrease

RT「うららタイム」搭載。
- チェリー契機: 77G
- スイカ契機: 33G

1Gあたり純増の確定数値は今回未取得。後年回顧では減少型RTとの記述もあるため、推測値は入れない。

## basicPayout

- 赤7BIG: 規定345枚超払い出し終了 / 純増約305枚
- 青7BIG（MB相当）: 規定253枚超払い出し終了 / 純増約220枚
- REG: 規定119枚超払い出し終了 / 純増約100枚

当時業界記事でも平均約305枚 / 約220枚 / 約100枚で一致。

reliability: INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData

- ボーナス終了後はチャンスゾーンへ移行。
- チェリー・スイカでRT「うららタイム」を抽選。
- 通常時も約100P周期でチャンスゾーンが巡る仕様。
- ボーナスとRTのダブル同時抽選を特徴とする。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH

gameCounterReset: UNVERIFIED_AFTER_RESEARCH
ceilingAfterReset: NO_CONVENTIONAL_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH; PERIODIC_CZ_PROGRESS_RESET_UNVERIFIED
modeAfterReset: UNVERIFIED_AFTER_RESEARCH
stateAfterReset: UNVERIFIED_AFTER_RESEARCH
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
resetDetection: UNVERIFIED_AFTER_RESEARCH
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH

notes:
- 通常時にも約100P周期でチャンスゾーンが巡るため、ゲーム数要素を一律NOT_APPLICABLEにはしない。
- 設定変更時に周期CZ進捗がクリア/引継ぎされるか、CZ/RT状態がどう処理されるかは本機固有の直接資料を確定できず未確認。
- 据え置き時、単純電源OFF→ON時の周期/CZ/RT状態保持も直接根拠未取得。
- 朝一専用短縮天井、確定恩恵/不利、ガックン・初期出目・ランプ等の変更判別数値は再探索後も確認できず、他機種・一般論から補完しない。

resetQaReliability: PARTIAL_ANALYSIS_AFTER_MULTI_QUERY_RESEARCH

## sources

取得日: 2026-08-31
resetBehavior再調査日: 2026-09-05

1. グリーンべると — ダブル同時抽選搭載、『リンダの狙いうち』登場
   - https://web-greenbelt.jp/00004952/
   - 2006-12-03納品開始、RT 77G/33G、獲得枚数約305/220/100枚
   - reliability: INDUSTRY
2. パチマガスロマガ — リンダの狙いうち / ボーナス抽選確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/43/h.php
   - 設定別BIG、REG、PAYOUT
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — リンダの狙いうち / 小役出現確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/43/c.php
   - 1000円あたりプレイ数
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — リンダの狙いうち / 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/43/a.php
   - ボーナス純増、チャンスゾーン/RT構造
   - reliability: ANALYSIS_HIGH
5. 5号機クロニクル — IGTジャパン5号機全機種一覧
   - https://5goki.com/igt
   - 2006/12導入、設定別確率・機械割の照合
   - reliability: ANALYSIS_SINGLE
6. resetBehavior再探索（2026-09-05）
   - 「リンダの狙いうち 設定変更/設定変更後/朝一/据え置き/電源/天井/チャンスゾーン」を複数系統で再検索。
   - 周期CZの存在は既存解析と整合するが、設定変更・据え置き・電源OFF→ON時の直接処理を確定できる資料は未取得。
   - reliability: RESEARCH_NEGATIVE_RESULT

## missingFields

- RT 1Gあたり純増の確定値
- 設定変更時の周期CZ進捗処理
- 据え置き/電源OFF→ON時のCZ・RT状態処理
- 変更判別の直接根拠

## conflicts

確定的な主要性能値の競合なし。機械割は資料間で丸め差のみ。
