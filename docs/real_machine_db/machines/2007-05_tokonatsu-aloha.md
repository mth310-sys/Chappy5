# 常夏アロハ

status: COMPLETE_CORE
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED

machineName: 常夏アロハ
manufacturer: オーイズミ（全日遊連との共同開発）
releaseDate: 2007-05中旬予定（当時業界記事） / 2007-05（5号機クロニクル）
generation: 5号機初期
systemType: ノーマル / 完全告知 / ボーナス主体
formalModel: 常夏アロハ3（当時業界記事表記）

## 性能コア

payoutRateBySetting:
- 設定1: 96.0%
- 設定2: 98.1%
- 設定3: 99.9%
- 設定4: 102.0%
- 設定5: 106.0%
- 設定6: 108.9%

confidence: ANALYSIS_HIGH（5号機クロニクルを本線とし、設定6 108.9%は2007年当時の実戦記録でも一致）

initialHitBySetting:
- BIG
  - 設定1: 1/292.57
  - 設定2: 1/283.71
  - 設定3: 1/276.52
  - 設定4: 1/268.59
  - 設定5: 1/256.00
  - 設定6: 1/248.24
- REG
  - 設定1: 1/399.61
  - 設定2: 1/356.17
  - 設定3: 1/321.25
  - 設定4: 1/292.57
  - 設定5: 1/262.14
  - 設定6: 1/248.24
- 合算
  - 設定1: 約1/168.9
  - 設定2: 約1/157.9
  - 設定3: 約1/149.6
  - 設定4: 約1/140.0
  - 設定5: 約1/129.5
  - 設定6: 約1/124.1

confidence: ANALYSIS_HIGH（BIG/REGはパチマガスロマガ、合算は同値からの整合および2007年当時実戦記録で照合）

baseGamesPer50:
- 設定1: 37.80G/1000円
- 設定2: 37.80G/1000円
- 設定3: 37.80G/1000円
- 設定4: 37.80G/1000円
- 設定5: 38.69G/1000円
- 設定6: 39.63G/1000円

confidence: ANALYSIS_HIGH

netIncrease:
- NOT_APPLICABLE。出玉増加RT/ARTを性能コアとして持たないボーナス主体機。

basicPayout:
- BIG: 346枚超払い出し終了 / 純増目安約280枚
- REG: 106枚超払い出し終了 / 純増目安約90枚

confidence: ANALYSIS_HIGH

modeSpecificMinimumData:
- 5号機/5ライン。
- 完全告知タイプ。
- リール上部の巨大パトライト/サンライズランプによる多彩な告知。
- 特殊リプレイ成立時はボーナスチャンス。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-12

settingChangeBehavior:
- `常夏アロハ / 常夏アロハ3 / オーイズミ / 全日遊連 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / パトライト` 等へ検索語を変え、当時業界記事、パチマガスロマガ、5号機DB、回顧資料、現存検索インデックスを再探索したが、本機固有の設定変更時内部処理を直接記載した資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ノーマル・ボーナス主体機という一般論から成立済みボーナスや内部フラグの扱いを補完しない。

carryOverBehavior:
- 通常時にゲーム数天井・周期ゲーム数・出玉増加RT/ARTを持つ根拠は確認されず、天井G/ATモードの引継ぎは `NOT_APPLICABLE_OR_NONE_CONFIRMED`。
- 成立済みボーナス/告知待ち状態などの本機固有据え置き処理は `UNVERIFIED_AFTER_RESEARCH`。

powerCycleBehavior:
- 純電源OFF→ON時に設定変更と異なる本機固有の内部処理、成立済みボーナス/告知状態、パトライト表示状態等を直接記載した高信頼資料は確認できず `UNVERIFIED_AFTER_RESEARCH`。

gameCounterReset:
- 通常時ゲーム数天井・周期ゲーム数の公開仕様は `NONE_CONFIRMED`。したがって朝一天井Gリセット/引継ぎの物差し対象はない。

ceilingAfterReset:
- 通常時ゲーム数天井および設定変更専用短縮天井は `NONE_CONFIRMED`。

modeAfterReset:
- 朝一専用モード、ゲーム数モード、天国等の出玉モードは `NONE_CONFIRMED`。

stateAfterReset:
- 高確/低確等の出玉状態を設定変更時に再抽選/引継ぎする本機固有契約は `UNVERIFIED_AFTER_RESEARCH`。
- ボーナス成立済み/告知待ち等の完全再現用特殊ケースは推測補完しない。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更専用の短縮天井、朝一専用モード、CZ/RT優遇、固定当選率等は再探索後も `NO_PUBLIC_RESET_SPECIFIC_BENEFIT_FOUND_AFTER_RESEARCH`。

resetPenalties:
- 設定変更専用の定量的不利要素は `NO_PUBLIC_RESET_SPECIFIC_PENALTY_FOUND_AFTER_RESEARCH`。

resetDetection:
- ガックン、初期出目、パトライト/サンライズランプ、液晶/表示、ゲーム数挙動を用いた本機固有の変更判別契約は再探索後も `UNVERIFIED_AFTER_RESEARCH`。
- 完全告知機であること自体を設定変更判別へ転用しない。

numericResetData:
- リセット時天井短縮: `NONE_CONFIRMED`
- 朝一専用モード数値: `NONE_CONFIRMED`
- 設定変更時恩恵発生率: `NONE_CONFIRMED`
- 本機固有ガックン発生率: `UNVERIFIED_AFTER_RESEARCH`

## sources

取得日: 2026-08-31 / resetBehavior再探索: 2026-09-12

1. Pマンズ / プレイグラフ系当時記事「全日とオーイズミが『常夏アロハ』を共同開発」
   - https://p-mans.blogspot.com/2007/04/
   - 2007-04-03更新。全日遊連とオーイズミの共同開発機「常夏アロハ3」、完全告知タイプ、導入開始は5月中旬予定と確認。
   - reliability: INDUSTRY
2. パチマガスロマガ「常夏アロハ ボーナス確率・PAYOUT」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/13/h.php
   - 設定別BIG/REG確率。PAYOUT欄は現存ページでは調査中表記のため機械割には使用しない。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ「常夏アロハ 基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/13/a.php
   - 5号機/5ライン、BIG346枚超（約280枚）、REG106枚超（約90枚）、巨大パトライト/特殊リプレイ仕様。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ「常夏アロハ 小役確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/13/c.php
   - 設定別1000円あたりプレイ数37.80〜39.63P。
   - reliability: ANALYSIS_HIGH
5. 5号機クロニクル「オーイズミ5号機全機種一覧」
   - https://5goki.com/oizumi
   - 導入時期2007/5、設定別機械割96.0〜108.9%。
   - reliability: ANALYSIS_SINGLE
6. 自転車旅っちゃ！「常夏アロハ 初打ち＆全台設定6」
   - https://jitenshatabi.com/blog-entry-277.html
   - 2007-08-06当時記録。設定6機械割108.9%の補助照合。
   - reliability: ANALYSIS_SINGLE
7. 自転車旅っちゃ！「全台6結果と明日も全台6」
   - https://jitenshatabi.com/blog-entry-276.html
   - 2007-08-07当時記録。設定別合算1/168.9〜1/124.1を補助照合。
   - reliability: ANALYSIS_SINGLE
8. resetBehavior再探索（2026-09-12）
   - 機種名/型式/メーカーに `設定変更`, `リセット`, `朝一`, `据え置き`, `電源OFF ON`, `ガックン`, `天井`, `パトライト` を組み合わせて複数検索系統を再探索。
   - 本機固有の設定変更/据え置き/純電断契約を直接固定できる追加資料なし。
   - reliability: RESEARCH_EXHAUSTED / UNVERIFIED

## missingFields
- 厳密な初回納品/ホール導入日
- 設定変更/据え置き/電源OFF→ON時の成立済みボーナス・告知待ち等の本機固有処理
- 本機固有の設定変更判別条件/発生率

## conflicts
- 現時点で性能コアに重大な数値CONFLICTなし。
- 当時業界記事は導入「5月中旬予定」、5号機クロニクルは「2007/5」。厳密な初回導入日は未確定のため日付を捏造しない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
