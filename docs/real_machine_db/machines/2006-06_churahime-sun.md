# ちゅら姫SUN

machineName: ちゅら姫SUN
manufacturer: エレコ
releaseDate: 2006-06
generation: 5号機初期
systemType: ノーマル / 沖縄系 / 準完全告知 / 2段階設定
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.2% |
| 6 | 103.1% |

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

ボーナス合成:

| 設定 | 合成 |
|---|---:|
| 1 | 1/217.01 |
| 6 | 1/192.75 |

信頼度: ANALYSIS_HIGH（パチマガスロマガと2段階設定資料を照合）

## baseGamesPer50

1000円（50枚）あたり:

| 設定 | G数 |
|---|---:|
| 1 | 34.11G |
| 6 | 34.49G |

信頼度: ANALYSIS_HIGH

## netIncrease

該当なし。

## basicPayout

- BIG CHANCE: 規定払い出し345枚超で終了 / 純増約333枚
- CHURA CHANCE: 規定払い出し240枚超で終了 / 純増約238枚

公式製品ページでは獲得目安をBIG約333枚、CHURA CHANCE約238枚として案内。

信頼度: OFFICIAL + ANALYSIS_HIGH

## modeSpecificMinimumData

- 設定構成: 1 / 6 の2段階
- 5号機 / 1ライン
- リプレイ同時成立を除き成立ゲームで告知する準完全告知
- 通常ゲーム数天井、RT、AT、ART、CZ、ゲーム数管理モードは公開仕様上NONE_CONFIRMED。
- 設定別BIG単独確率: UNVERIFIED
- 設定別CHURA CHANCE単独確率: UNVERIFIED

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- `ちゅら姫SUN / ちゅら姫 サン / エレコ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール初動 / 天井 / RT / 初期出目 / 電断復帰` を組み替え、メーカー公式、当時パチマガスロマガ、旧機種DB、後年5号機回顧資料、業界資料を再探索。
- 本機固有の設定変更時内部状態処理を示す直接資料は追加固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 公式/当時解析ではボーナス主体ノーマル機で、通常時ゲーム数天井、RT/AT/ART/CZ、朝一専用ゲーム数モードは **NONE_CONFIRMED / NOT_APPLICABLE**。
- 一般的な5号機ノーマル機の挙動からRESET契約を推測して補完しない。
reliability: ANALYSIS_HIGH_FOR_SYSTEM_CLASSIFICATION / UNVERIFIED_FOR_MACHINE_SPECIFIC_RESET_INTERNALS

### carryOverBehavior
- 通常時天井/ゲーム数管理モード、RT/AT/ART残ゲームは **NONE_CONFIRMED / NOT_APPLICABLE**。
- 据え置き固有の公開恩恵・不利、成立済みボーナス/告知/表示履歴の処理は、本機固有の直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_FOR_LOW_LEVEL_INTERNAL_STATE

### powerCycleBehavior
- 電源OFF→ONのみで引き継ぐべきゲーム数天井・RT/AT/ART状態は **NONE_CONFIRMED / NOT_APPLICABLE**。
- 本機固有の成立済みボーナス、液晶/蝶/ハイビスカス告知状態、初期出目等の電断復帰挙動は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更との差を示す直接契約がないため、一般論からCARRYOVER/RESETを付与しない。
reliability: UNVERIFIED

### gameCounterReset
- 通常時ボーナス天井・周期天井は **NONE_CONFIRMED / NOT_APPLICABLE**。

### ceilingAfterReset
- 設定変更時短縮天井を含め **NONE_CONFIRMED / NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。

### modeAfterReset
- 朝一専用モード、設定変更専用モード、ゲーム数管理モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM_CLASSIFICATION

### stateAfterReset
- RT/AT/ART/CZの継続状態は公開仕様上 **NONE_CONFIRMED / NOT_APPLICABLE**。
- その他の朝一客行動へ影響する公開内部状態再抽選は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 成立済みボーナス等の低レベル内部状態については **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SYSTEM_CLASSIFICATION / UNVERIFIED_FOR_LOW_LEVEL_INTERNAL_STATE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の短縮天井、朝一モード、CZ優遇、初当たり優遇など比較可能な公開恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_PUBLISHED_RESET_BENEFIT_FOUND

### resetPenalties
- 設定変更固有の主要な公開不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_CONFIRMED_PUBLISHED_PENALTY

### resetDetection
- 本機固有のガックン、リール初動、初期出目、ランプ/液晶表示、ゲーム数挙動による設定変更/据え置き判別は、検索語・資料系統変更後も **UNVERIFIED_AFTER_RESEARCH**。
- ボーナス合成確率は設定推測材料であって、変更/据え置きの直接判別には転用しない。
reliability: UNVERIFIED_FOR_MACHINE_SPECIFIC_RESET_DETECTION

### numericResetData
- resetCeiling: **NOT_APPLICABLE / NONE_CONFIRMED**。
- resetModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetStateDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBenefitProbability: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetGakkunProbability: **UNVERIFIED_AFTER_RESEARCH**。

## sources

取得日: 2026-09-09

1. ユニバーサルエンターテインメント公式 — ちゅら姫SUN
   - https://www.universal-777.com/product/slot/churahime_sun/
   - ノーマル、5号機、2006年6月、BIG約333枚、CHURA CHANCE約238枚、先告知/同時抽選方式
   - reliability: OFFICIAL
2. パチマガスロマガ — ちゅら姫SUN 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/62/a.php
   - 5号機/1ライン、準完全告知、BIG345枚超（純増約333枚）、CHURA CHANCE240枚超（純増約238枚）
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — ちゅら姫SUN 設定推測
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/62/i.php
   - 合成 設定1 1/217.01、設定6 1/192.75
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — ちゅら姫SUN チャンスリプレイ/同時成立
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/62/k.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/62/h.php
   - reliability: ANALYSIS_HIGH
5. 5号機クロニクル — ユニバーサル系5号機一覧
   - https://5goki.com/universal
   - 2006年6月、エレコ、設定1/6機械割97.2/103.1%
   - reliability: ANALYSIS_SINGLE
6. なな徹 — パチスロ設定段階解説
   - https://nana-press.com/post/1591139
   - 2006年6月ちゅら姫SUNは2段階設定、当時エレコの2段階は1/6構成
   - reliability: ANALYSIS_HIGH
7. ALL7 — 2006年6月導入予定一覧
   - https://www.all7.jp/plans/index/2006/06
   - ちゅら姫SUN、メーカーエレコ、導入予定2006-06-26
   - reliability: INDUSTRY_CALENDAR
8. グリーンべると — アルゼ第1四半期記事（2006-09-08）
   - https://web-greenbelt.jp/00004865/
   - ちゅら姫SUNを同期中に発表した5号機として記載
   - reliability: INDUSTRY_CONTEMPORARY

## missingFields

- 設定別BIG確率
- 設定別CHURA CHANCE確率
- 本機固有の設定変更/据え置き/電源OFF→ON時の低レベル内部状態契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有のガックン/変更判別: UNVERIFIED_AFTER_RESEARCH
- 公開朝一数値: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

5号機クロニクルではボーナス仕様をBIG約350枚 / REG約104枚とする記述があるが、メーカー公式および当時パチマガスロマガはBIG約333枚 / CHURA CHANCE約238枚で一致するため、物差しDBでは公式/当時資料側を採用し、後年一覧側のボーナス記述は採用しない。

status: PARTIAL