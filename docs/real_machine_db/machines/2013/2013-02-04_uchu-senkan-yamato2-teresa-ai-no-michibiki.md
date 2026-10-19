# パチスロ宇宙戦艦ヤマト2 ～テレサ、愛の導き～

machineName: パチスロ宇宙戦艦ヤマト2 ～テレサ、愛の導き～
manufacturer: 山佐
releaseDate: 2013-02-04
releaseDatePrecision: exact_day
releaseDateNotes: パチビー当時機種ページで2013-02-04導入。山佐公式現行アーカイブは稼働時期2013年2月と確認。
generation: 5号機
systemType: ART / BR非搭載 / ゲーム数上乗せ型
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_PARTIAL

## identity

- 山佐公式現行アーカイブに本機の5号機・ARTタイプ・2013年2月稼働を確認。
- 型式名 / 検定番号は表記揺れ・メーカー・検定番号検索を変更して再探索したが、今回高信頼に確定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: OFFICIAL_FOR_MODEL_EXISTENCE_AND_MONTH / UNVERIFIED_FOR_FORMAL_TYPE_CODE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.9% |
| 2 | 98.5% |
| 3 | 100.8% |
| 4 | 104.3% |
| 5 | 108.5% |
| 6 | 112.6% |

- P-WORLD、パチマガスロマガ、後年設定DBで一致。
- パチマガスロマガ取得本文では設定1/2のPAYOUTが「196.9% / 198.5%」と表示されるが、同系統複数資料の96.9% / 98.5%および設定3以降との整合性から表示異常と判断し、平均せず conflict note に保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART「ヤマトボーナス」初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/259.6 |
| 2 | 1/251.5 |
| 3 | 1/251.0 |
| 4 | 1/224.9 |
| 5 | 1/217.2 |
| 6 | 1/196.0 |

- P-WORLD、パチマガスロマガ、後年設定DBで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 「50枚 / 1000円 / ベース / コイン持ち / 1K」を機種名・略称・メーカー名と組み替え、当時攻略・古いDB・回顧資料まで再探索したが、比較可能な直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 実戦体感値や推算値は採用しない。

## netIncrease

- ART「ヤマトボーナス」: **純増約+2.2枚/G**。
- 山佐公式、パチビー、P-WORLD、2012年12月公開の業界試打動画説明で一致。
- confidence: OFFICIAL_PLUS_MULTI_SOURCE

## basicPayout

- リアルボーナス非搭載。
- ART「ヤマトボーナス」は当選時に「波動砲チャンス」または「愛波動砲チャンス」で初期ゲーム数を決定し、その獲得ゲーム数がART継続ゲーム数となる。
- 赤7系「波動砲チャンス」は50% or 66%継続、青7系「愛波動砲チャンス」は85% or 92%継続の0G連上乗せ系列。
- 「ワープアタック」は継続率98%の0G連上乗せ。
- 物差し用途では上記をゲーム性構造として保持し、全上乗せ振り分けは収集しない。

## modeSpecificMinimumData

- 通常時はレア役からのART当選を主軸とし、ゲーム数テーブル管理型ではないと当時攻略資料が明記。
- 「愛モード」はテレザート星ステージで示唆され、P-WORLDではARTを毎ゲーム約1/8で抽選、平均継続約32Gと掲載。

### 天井

- ART間 **1024G or 1280G** の2種類。
- 天井到達でART「ヤマトボーナス」確定。
- **1280G天井選択時は「愛波動砲チャンス」確定**とP-WORLDおよび当時攻略資料で一致。
- ペナルティ等で表示上の到達ゲーム数を超える場合あり。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_SOURCE__SETTING_CHANGE_COUNTER_CLEAR_CONFIRMED__SUEOKI_POWER_CYCLE_MODE_STATE_PARTIAL
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は **天井までのゲーム数をクリア**。2013年当時攻略資料で明示。
- 設定変更時の1024G / 1280G天井選択率、内部状態・愛モード関連状態の具体再抽選内容は、検索語・資料系統を変えて再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 純据え置き時の天井カウンタ、内部高確/愛モード関連状態を独立条件で直接明記する本機固有の高信頼資料は、再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機慣行から補完しない。

### powerCycleBehavior

- 設定変更を伴わない単純電源OFF→ON時の天井カウンタ、内部状態、液晶初期状態の保持/初期化は、本機固有資料で直接確定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更時: **CLEAR_CONFIRMED**。
- 据え置き時: **UNVERIFIED_AFTER_RESEARCH**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更で前日ART間ゲーム数は消失し、天井カウンタを再スタート。
- 設定変更専用の短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常天井そのものが1024G / 1280Gの2種類であるため、「1024G選択」をリセット専用短縮と誤認しない。

### modeAfterReset

- ゲーム数テーブル管理型ではないことは確認済み。
- 設定変更時の「愛モード」等の主要状態/モードの再抽選・引継ぎ契約は **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 設定変更時の高確/通常など内部状態振り分けは **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更専用の天井短縮率、高確スタート率、朝一ART当選率など、比較可能な公開恩恵数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 1280G天井時の愛波動砲チャンスは通常天井選択に伴う恩恵であり、設定変更専用ではない。

### resetPenalties

- 前日ART間ゲーム数の進捗は設定変更で消失。

### resetDetection

- 本機固有のガックン、初期出目、液晶ステージ、朝一挙動による設定変更/据え置き判別は、表記揺れ・「ガックン/朝一/リセット判別/設定変更判別」を変更して再探索したが **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時天井カウンタ: **CLEAR / 0から再スタート**。
- 通常天井: **1024G or 1280G**。
- 設定変更専用の天井選択率: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用のモード/状態振り分け率: **UNVERIFIED_AFTER_RESEARCH**。

### numericResetData

- settingChangeGameCounter: CLEAR_CONFIRMED
- normalCeilingCandidates: 1024G_OR_1280G
- 1280GCeilingBenefit: AI_HADOHO_CHANCE_CONFIRMED
- resetSpecificCeilingReduction: NONE_CONFIRMED_AFTER_RESEARCH
- settingChangeCeilingDistribution: UNVERIFIED_AFTER_RESEARCH
- settingChangeModeDistribution: UNVERIFIED_AFTER_RESEARCH
- advantageousSection: NOT_APPLICABLE_5TH_GEN

resetQaReliability: PERIOD_ANALYSIS_FOR_COUNTER_CLEAR_PLUS_MULTI_SOURCE_FOR_CEILING__UNVERIFIED_AFTER_RESEARCH_FOR_SUEOKI_POWER_CYCLE_MODE_STATE_AND_DETECTION

## missingFields

- 50枚あたりゲーム数の直接比較値。
- 正式型式名 / 検定番号の高信頼値。
- 設定変更時の1024G/1280G天井選択率。
- 設定変更時の内部状態/モード具体振り分け。
- 純据え置き時の天井・状態の完全契約。
- 単純電源OFF→ON時の天井・状態の完全契約。
- 本機固有の変更判別要素。

## conflicts

1. **CONFLICT_RETROSPECTIVE_WRONG_SPEC_OR_MIXED_MACHINE**
   - 5号機クロニクル山佐一覧は本機を「2013年7月 / AT / 純増約2.8枚/G / イスカンダルロード / コスモコンボ」と掲載している。
   - 山佐公式、2013年2月当時のパチビー、P-WORLD、2012年12月業界試打資料は「2013年2月 / ART / 純増約2.2枚/G / ヤマトボーナス」で一致。
   - 後年回顧DBが別ヤマト系スペックを混同した可能性が高いため、平均・統合せず当時/公式系列を本線採用。
2. **CONFLICT_DISPLAY_ERROR_PACHIMAGA_PAYOUT_SETTING1_2**
   - パチマガスロマガ取得本文の設定1/2機械割が196.9%/198.5%と表示されるが、設定3以降およびP-WORLD等は96.9%/98.5%。表示上の先頭「1」混入とみられるため主値には採用しない。

## sources

取得日: 2026-09-06

1. 山佐ネクスト公式 — https://yamasa-next.co.jp/model_ymt2/
   - 5号機、ARTタイプ、稼働時期2013年2月、純増約2.2枚/G、波動砲チャンス、ワープアタック。
2. パチビー — https://www.pachibee.jp/movies/index/9023
   - 導入日2013-02-04、5号機ART、BR非搭載、天井あり、純増約2.2枚/G。
3. P-WORLD — https://www.p-world.co.jp/machine/database/6961
   - 機械割、ART初当たり、純増約2.2枚/G、1024/1280G天井、1280G時愛波動砲チャンス、愛モード約1/8・平均約32G。
4. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/191/h.php
   - ART初当たり、機械割系列。設定1/2PAYOUT表示異常をCONFLICT保持。
5. パチスロを楽しむための情報サイト / 2013年当時攻略 — https://slogora.seesaa.net/
   - 1024G/1280G天井、1280G時愛波動砲チャンス、設定変更時天井ゲーム数クリア、ゲーム数テーブル管理型ではない旨。
6. 協会娯楽産業 試打動画（2012-12-17） — https://www.youtube.com/watch?v=kSXSVu_jAwQ
   - 純増約2.2枚/G、ART「ヤマトボーナス」、波動砲チャンス、ワープアタックの当時説明。
7. pacnk 設定判別DB — https://pacnk.com/slot/tools/sh_yamato2.html
   - 2013年2月導入、設定別ART初当たり・PAYOUT照合。
8. 5号機クロニクル 山佐 — https://5goki.com/yamasa
   - 後年回顧で本機を2013年7月/純増2.8枚等とする競合系列。公式・当時資料との不一致のため主値不採用。

coreStatus: COMPLETE_CORE_EXCEPT_BASE50_AND_FORMAL_TYPE_CODE
resetBehaviorQA: PARTIAL_RESEARCHED
