# コミックワールド沖

machineName: コミックワールド沖
manufacturer: バルテック
releaseDate: 2006-12-03
generation: 5号機初期
systemType: ボーナス主体 + ナビ支援（A+AT的構造）

## payoutRateBySetting

| 設定 | PAYOUT |
|---:|---:|
| 1 | 95.60% |
| 2 | 97.80% |
| 3 | 101.40% |
| 4 | 104.50% |
| 5 | 106.70% |
| 6 | 109.60% |

グリーンべると発表値とpacnk、5号機クロニクルが一致。

reliability: ANALYSIS_HIGH

## initialHitBySetting

BIG合算:
- 設定1: 1/324.43
- 設定2: 1/309.13
- 設定3: 1/295.20
- 設定4: 1/282.48
- 設定5: 1/270.81
- 設定6: 1/260.06

グリーンべるとでは合成約1/324（設定1）〜1/260（設定6）。

reliability: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED

「50枚」「1000円」「ベース」「コイン持ち」を含め再探索したが、比較可能な確定値を今回取得できず。

## netIncrease

通常時のチェリーナビ率を高める「シフトアップナビゲーション」を搭載。
ナビ状態によるベースアップ効果は確認できるが、1Gあたり純増等の比較可能な数値は今回未取得。

## basicPayout

グリーンべると掲載の6種類のボーナス純増:
- Easy: 351枚 / 208枚
- AT: 364枚 / 234枚
- Challenge: 380枚 / 268枚

reliability: INDUSTRY

## modeSpecificMinimumData

- 赤・青・黄3色チェリーのナビ率を高めるシフトアップナビゲーション。
- 各色ランプ点灯数に応じてチェリーナビ率が上昇し、全色点灯時は全チェリーのナビ率がほぼ100%。
- BIG中ミニゲームの結果で終了後ステージが変化。
- 勝利時の「南国モード」は全チェリーのナビ率が上がり、ボーナス完全告知となる。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-10

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名・メーカー・南国モード・シフトアップナビを軸に「設定変更」「リセット」「朝一」「変更後」「初期化」を組み替え、当時解析・旧DB・回顧資料を再探索したが、本機固有の設定変更時内部処理を直接固定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の南国モード、各色ランプ/ナビ状態、BIG後状態の保持契約を直接確認できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。単純電源OFF→ON時の南国モード・ランプ・ナビ状態保持を、据え置き一般論から補完しない。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH**。公開資料では純Aタイプ/ボーナス主体として扱われ、ゲーム数天井を確認できない。

ceilingAfterReset: **NOT_APPLICABLE_NO_PUBLIC_GAME_COUNT_CEILING_CONFIRMED**。設定変更専用短縮天井・朝一規定G数も確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。BIG後ミニゲーム勝利時の「南国モード」は確認できるが、その設定変更/据え置き/電断時処理は未確認。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。シフトアップナビゲーションの色ランプ状態およびボーナス後状態の処理を直接固定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用高ナビ率、ボーナス優遇、特殊モード移行率等の公開値は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更で失うことが確定したゲーム数天井・ストック等は確認できないため推測しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、ランプ状態等を用いる本機固有の変更判別契約を固定できず。

publicMorningNumbers: **NONE_CONFIRMED_AFTER_RESEARCH**。

numericResetData:
- publicNormalCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetCeiling: `NOT_APPLICABLE_NO_PUBLIC_CEILING`
- settingChangeModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- morningBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

resetBehaviorConfidence: `PARTIAL_RESEARCH_EXHAUSTED_MACHINE_SPECIFIC_DIRECT_CONTRACT_NOT_FOUND`。

### reset QA notes
- 2026-09-10遡及QAで、既存性能コアは変更せずresetBehaviorのみv0.7形式へ再整理。
- 後継/類似沖スロや一般的5号機の設定変更挙動は転用していない。
- pacnkは現行再整理ページとして「設定示唆なし」を示すが、これは朝一変更判別なしの直接証明ではないためresetDetectionの確定には使用しない。

## sources

取得日: 2026-08-31
resetBehavior再調査日: 2026-09-10

1. グリーンべると — パチスロ漫画界の巨匠とのタイアップ実現
   - https://web-greenbelt.jp/00004945/
   - 2006-12-03納品、ゲーム性、6種ボーナス純増、合成確率、出玉率
   - reliability: INDUSTRY
2. pacnk — コミックワールド沖 設定判別ツール
   - https://pacnk.com/slot/tools/sh_komikkuwarudooki.html
   - 設定別BIG合算・PAYOUT、現行整理で設定示唆なし
   - reliability: ANALYSIS_SINGLE
3. 5号機クロニクル — バルテック5号機全機種一覧
   - https://5goki.com/baltec
   - 2006/12導入、設定別機械割照合
   - reliability: ANALYSIS_SINGLE
4. パチマガスロマガ — コミックワールド沖
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/47/baltech_slot_47.php
   - 当時解析ページの存在を確認
   - reliability: ANALYSIS_HIGH
5. pachinko's blog — https://pachinko.hatenablog.jp/entry/2006/12/comicWorld-oki
   - 2006年12月、バルテック、設定別出玉率/合算、ノーマルタイプの回顧整理
   - reliability: RETROSPECTIVE_SECONDARY
6. resetBehavior QA再探索（2026-09-10）
   - 「コミックワールド沖 設定変更/リセット/朝一/据え置き/電源OFF ON/南国モード/天井/ガックン」「バルテック コミックワールド沖 攻略 設定変更」等を資料系統を変えて検索。
   - settingChange/carryOver/powerCycleの本機固有直接契約および公開朝一数値は固定できず。
   - reliability: RESEARCH_NEGATIVE_RESULT

## missingFields

- 50枚あたりゲーム数
- ナビ状態の定量的な純増/ベース差
- settingChangeBehavior / carryOverBehavior / powerCycleBehavior の直接契約
- 南国モード・ランプ状態の変更時処理
- 変更判別の直接根拠・公開朝一数値

## conflicts

主要取得値に確定的な競合なし。
