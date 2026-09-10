# No.1211 あっぱれ！PREGO

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: あっぱれ！PREGO
- manufacturer: JPS / ジェーピーエス
- releaseDateCanonical: 2018-07-09
- generation: 5.9号機 / 5号機
- systemType: ノーマル / Aタイプ / 完全告知
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- すろぱちくえすとは2018-07-09導入と明記。
- 楽スロも2018-07-09導入と明記。
- K-Naviは2018年7月上旬とする。
- 複数資料一致によりcanonicalを2018-07-09とする。
- confidence: `ANALYSIS_HIGH_CROSSCHECKED`。

## performanceCore

### payoutRateBySetting
市場掲載/打ち方別のうち、物差し本体にはフル攻略値と通常打ち系を分離保存する。

適当打ち:
- setting1: 95.5%
- setting2: 96.9%
- setting3: 99.6%
- setting4: 101.9%
- setting5: 103.9%
- setting6: 108.4%

フル攻略:
- setting1: 97.7%
- setting2: 99.0%
- setting3: 101.6%
- setting4: 103.9%
- setting5: 105.9%
- setting6: 110.4%

補助精密値として後年整理資料にフル攻略 `97.65 / 99.01 / 101.64 / 103.87 / 105.89 / 110.35%` あり。丸め精度差の範囲で一致するためCONFLICT扱いしない。

### initialHitBySetting
BIG:
- setting1: 1/281.2
- setting2: 1/275.3
- setting3: 1/267.4
- setting4: 1/260.0
- setting5: 1/254.0
- setting6: 1/234.0

REG:
- setting1: 1/451.9
- setting2: 1/399.6
- setting3: 1/358.1
- setting4: 1/319.6
- setting5: 1/299.2
- setting6: 1/270.8

ボーナス合算:
- setting1: 1/173.3
- setting2: 1/163.0
- setting3: 1/153.1
- setting4: 1/143.4
- setting5: 1/137.3
- setting6: 1/125.5

### baseGamesPer50
- setting range: 約33.3〜34.1G/50枚。

### netIncrease
- `NOT_APPLICABLE_NORMAL_TYPE`

### basicPayout
- BIG: 312枚
- REG: 104枚

### ceiling
- 通常ゲーム数天井: `NOT_APPLICABLE / 天井非搭載`。

## modeSpecificMinimumData
- 完全告知ノーマルタイプ。
- リール左側の「55」ランプ点灯でボーナス確定。
- 「モナスロ」「TOWSER」と同一スペック・同一リール配列の兄弟機とされる。
- PB機で、PREGO系列向けオリジナルブランド機。

## resetBehavior

### settingChangeBehavior
- 本機固有の設定変更時内部状態、初期出目、告知ランプ状態を直接定義した公開資料は、機種名表記揺れ・JPS・PREGO・PB機・兄弟機名と「設定変更」「リセット」「朝一」「ガックン」を組み合わせて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ノーマル機一般論は確定契約へ昇格しない。

### carryOverBehavior
- 据え置きを純電断と分離した本機固有の公開契約は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 純電源OFF→ON時の初期出目、ボーナス成立/告知状態、その他内部状態を本機固有に直接示す資料は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため天井ゲーム数カウンタは `NOT_APPLICABLE_NO_NORMAL_CEILING`。
- その他、朝一客判断に使える公開内部ゲーム数カウンタは `NONE_CONFIRMED_AFTER_RESEARCH`。

### ceilingAfterReset
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`。

### modeAfterReset
- 出玉に関わる通常時モード/朝一専用モード構造: `NOT_APPLICABLE_OR_NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更時・据え置き時・純電断時の本機固有内部状態契約: `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- ノーマルAタイプで、今回確認できた主ゲームシステム上は `NOT_APPLICABLE_TO_PRIMARY_SYSTEM`。
- 有利区間一般論からの補完は行わない。

### resetBenefits
- 設定変更固有の天井短縮、朝一ボーナス優遇、専用モード等: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の公開不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有の朝一ガックン、出目、ランプ等による設定変更判別条件・発生率は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常時の55ランプ点灯はボーナス成立告知であり、設定変更判別とは別物。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE_NO_NORMAL_CEILING`
- resetSpecificModeDistribution: `NOT_APPLICABLE_OR_PUBLIC_VALUE_NOT_FOUND`
- morningSpecificPublicHitRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- gakkunChangeDetectionRate: `PUBLIC_RATE_NOT_FOUND_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更専用の朝一特定G以内当選率、モード振り分け、ガックン率等の公開数値は再探索後も固定できず。

## conflicts
- 機械割は資料により小数第1位丸めと小数第2位精密値が混在するが、対応値は丸め精度内で整合するため `NO_MATERIAL_CONFLICT`。
- formalModelName / certificationNumber は現存する検索可能資料で直接固定できず、推定しない。

## missingFields
- 正式型式名。
- 検定番号。
- 設定変更時/据え置き時/純電断時の本機固有低レベル状態契約。
- ガックン等による設定変更判別率。
- 公開朝一専用数値。

## sources
取得日: 2026-09-10

1. PREGO公式 — あっぱれ!プレゴ
   - https://www.p-prego.com/machine/appare/
   - PREGO公式機種ページ。PBオリジナル機であることを確認。
   - confidence: `OFFICIAL`
2. PREGO公式コンテンツ
   - https://www.p-prego.com/content.html
   - プレゴオリジナルスロットとして掲載。
   - confidence: `OFFICIAL`
3. すろぱちくえすと — あっぱれ！プレゴ スロット
   - https://www.slopachi-quest.com/article/appare-prego/
   - 導入2018-07-09、JPS、ノーマル、33.3〜34.1G/50枚、BIG312枚、REG104枚、天井非搭載、設定別BIG/REG/合算、打ち方別機械割。
   - confidence: `ANALYSIS_HIGH`
4. 楽スロ — あっぱれ!PREGO 設定判別
   - https://rakuslo.com/prego-spec.html
   - 導入2018-07-09、設定別BIG/REG/合算、適当打ち〜フル攻略機械割。
   - confidence: `ANALYSIS_HIGH`
5. K-Navi — あっぱれ！プレゴ
   - https://p-kn.com/slot/3042/
   - 2018年7月上旬、JPS、設定別BIG/REG/合算。
   - confidence: `ANALYSIS_HIGH`
6. P-Summa — 2018年7月設定別機械割ランキング
   - https://psumma.jp/pachislo/43131/
   - JPS/PREGO共同開発PB機、7/9導入予定、設定1フル攻略97.65%、設定6 110.35%。
   - confidence: `ANALYSIS_SINGLE`
7. pacnk — あっぱれPREGO 設定判別ツール
   - https://pacnk.com/slot/tools/sh_apparepurego.html
   - 設定別精密ボーナス確率・通常/完全攻略PAYOUTを後年照合。
   - confidence: `RETROSPECTIVE_ANALYSIS`

## confidenceSummary
- release/manufacturer/system: `OFFICIAL + ANALYSIS_HIGH_CROSSCHECKED`
- performance core: `ANALYSIS_HIGH_CROSSCHECKED`
- resetBehavior: `UNVERIFIED_AFTER_RESEARCH_WHERE_NOT_APPLICABLE_EXCLUDED`
- conflicts: `NO_MATERIAL_NUMERIC_CONFLICT`
