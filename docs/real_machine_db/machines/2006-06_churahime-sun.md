# ちゅら姫SUN

machineName: ちゅら姫SUN
manufacturer: エレコ
releaseDate: 2006-06
generation: 5号機初期
systemType: ノーマル / 沖縄系 / 準完全告知 / 2段階設定
qaResetBehavior: PARTIAL

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
- 設定別BIG単独確率: UNVERIFIED
- 設定別CHURA CHANCE単独確率: UNVERIFIED

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `ちゅら姫SUN / ちゅら姫 サン / エレコ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / リール初動 / 天井 / RT` を組み替えて再探索。
- 本機固有の設定変更時内部状態処理を示す高信頼資料は確認できずUNVERIFIED。
- 既存の公式・当時解析仕様ではボーナス主体のノーマル機として確認され、通常時ゲーム数天井、RT/AT、朝一専用CZ・ゲーム数モードはNONE_CONFIRMED。

carryOverBehavior:
- 通常時天井/ゲーム数管理モード、RT/AT残ゲームはNONE_CONFIRMED / NOT_APPLICABLE。
- 据え置き固有の公開恩恵・不利はNONE_CONFIRMED。

powerCycleBehavior:
- 電源OFF→ONのみで引き継ぐべきゲーム数天井・RT/AT状態はNONE_CONFIRMED / NOT_APPLICABLE。
- 本機固有の液晶/告知状態やその他内部状態の電断復帰挙動はUNVERIFIED。

gameCounterReset:
- 通常時ボーナス天井・周期天井はNONE_CONFIRMED / NOT_APPLICABLE。

ceilingAfterReset:
- 設定変更時短縮天井を含めNONE_CONFIRMED / NOT_APPLICABLE。

modeAfterReset:
- 朝一専用モード、設定変更専用モード、ゲーム数管理モードはNONE_CONFIRMED。

stateAfterReset:
- RT/AT/CZの継続状態は公開仕様上NONE_CONFIRMED / NOT_APPLICABLE。
- その他の朝一客行動へ影響する公開内部状態再抽選はNONE_CONFIRMED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更専用の短縮天井、朝一モード、CZ優遇、初当たり優遇など比較可能な公開恩恵はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の主要な公開不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、リール初動、表示、ゲーム数挙動による設定変更/据え置き判別は検索語・資料系統変更後もUNVERIFIED。

numericResetData:
- 公開朝一数値: 今回未確認
- 短縮天井: NOT_APPLICABLE / NONE_CONFIRMED
- 設定変更時モード振り分け: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. ユニバーサルエンターテインメント公式 — ちゅら姫SUN
   - https://www.universal-777.com/product/slot/churahime_sun/
   - 沖縄系第2弾、BIG約333枚、CHURA CHANCE約238枚
   - reliability: OFFICIAL
2. パチマガスロマガ — ちゅら姫SUN 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/62/a.php
   - 5号機/1ライン、BIG345枚超（純増約333枚）、CHURA CHANCE240枚超（純増約238枚）
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — ちゅら姫SUN 設定推測
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/62/i.php
   - 合成 設定1 1/217.01、設定6 1/192.75
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — ちゅら姫SUN 小役確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/62/c.php
   - 1000円あたり設定1 34.11P、設定6 34.49P
   - reliability: ANALYSIS_HIGH
5. 5号機クロニクル — ユニバーサル系5号機一覧
   - https://5goki.com/universal
   - 2006年6月、エレコ、設定1/6機械割97.2/103.1%
   - reliability: ANALYSIS_SINGLE
6. なな徹 — パチスロ設定段階解説
   - https://nana-press.com/post/1591139
   - 2006年6月ちゅら姫SUNは2段階設定、当時エレコの2段階は1/6構成
   - reliability: ANALYSIS_HIGH

## missingFields

- 設定別BIG確率
- 設定別CHURA CHANCE確率
- 本機固有の設定変更/据え置き/電源OFF→ON挙動
- 本機固有のガックン/変更判別
- 公開朝一数値

## conflicts

5号機クロニクルではボーナス仕様をBIG約350枚 / REG約104枚とする記述があるが、メーカー公式および当時パチマガスロマガはBIG約333枚 / CHURA CHANCE約238枚で一致するため、物差しDBでは公式/当時資料側を採用し、後年一覧側のボーナス記述は採用しない。

status: PARTIAL
