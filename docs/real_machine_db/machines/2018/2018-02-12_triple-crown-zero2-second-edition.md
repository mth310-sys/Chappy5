# No.1176 トリプルクラウンZEROII SECOND EDITION

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: トリプルクラウンZEROII SECOND EDITION
- aliases: `トリプルクラウンZEROII 2nd EDITION`, `トリプルクラウンZEROⅡ SECOND EDITION`
- manufacturer: 清龍ゲームジャパン
- releaseDateCanonical: 2018-02-12
- generation: 5号機
- systemType: ノーマルA / 完全告知 / 30Φ / リアルボーナス
- formalModelName: `トリプルクラウンZ2-30`
- certificationNumber: `7S1011`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは型式`トリプルクラウンZ2-30`、検定番号`7S1011`、メーカー`清龍ゲームジャパン`、導入開始日**2018-02-12**を掲載。
- DMMぱちタウンは同型式・同メーカーで導入開始日**2018-02-13(火)**を掲載。
- 5号機クロニクルは2018年導入機として本機を掲載するが導入時期を`2018/1`とする。
- exact dayを持つ当時機種DBのHAZUSEをcanonicalの2018-02-12として採用するが、DMMとの差は地域導入差等の可能性を断定せず`CONFLICT_RELEASE_DATE_2018_02_12_VS_2018_02_13`として保持。後年回顧DBの2018/1も`CONFLICT_RETROSPECTIVE_RELEASE_MONTH_2018_01`として隔離する。

## performanceCore

### payoutRateBySetting
- setting1: 96.47%
- setting2: 98.72%
- setting3: 100.99%
- setting4: 103.22%
- setting5: 105.47%
- setting6: 107.72%
- HAZUSEとP-WORLDで完全一致。DMMも機械割レンジ96.47%〜107.72%で整合。

### bonusBySetting
BIG:
- setting1: 1/327.68
- setting2: 1/312.08
- setting3: 1/297.89
- setting4: 1/284.94
- setting5: 1/273.07
- setting6: 1/262.14

REG:
- setting1: 1/546.13
- setting2: 1/504.12
- setting3: 1/468.11
- setting4: 1/436.91
- setting5: 1/409.60
- setting6: 1/385.51

bonusCombined:
- setting1: 1/204.80
- setting2: 1/192.75
- setting3: 1/182.04
- setting4: 1/172.46
- setting5: 1/163.84
- setting6: 1/156.04

- HAZUSEとP-WORLDで完全一致。

### baseGamesPer50
- `UNVERIFIED_AFTER_RESEARCH`
- 機種名/型式名/メーカー名と「50枚」「1000円」「ベース」「コイン持ち」を組み替え、HAZUSE、P-WORLD、DMM、後年回顧資料を再探索したが、比較可能な50枚あたりゲーム数を直接固定できず推測しない。

### netIncrease
- `NOT_APPLICABLE_NORMAL_A`

### basicPayout
- BIG BONUS: 約312枚
- REG / BONUS GAME: 約104枚
- 払い出し終了条件: BIG 345枚超 / REG 105枚超
- HAZUSEが実獲得目安約312枚/約104枚を明記し、P-WORLDが同じ払い出し終了条件を掲載。

### ceiling
- `NONE`
- HAZUSEは天井機能非搭載と明記。DMMの「調査中」表記とは定義上競合させず、明示的な非搭載情報をcanonical採用。

## modeSpecificMinimumData
- ボーナスのみで出玉を増やす完全告知ノーマルタイプ。
- リール右上のバットランプ点灯でボーナス当選濃厚。
- AT/ART/CZ、ゲーム数解除モード、天井は確認されない。
- DMMは基本仕様を前作`トリプルクラウン ZERO II-30`と共通と説明するが、resetBehaviorの未公開値を前作から自動転記しない。

## resetBehavior

### settingChangeBehavior
- 天井・ゲーム数解除・AT/ART/CZは確認されないため、それらに対する設定変更リセットは`NOT_APPLICABLE`。
- 成立済みボーナス、初期出目、告知状態、その他低レベル内部状態について本機固有の設定変更契約は、機種名/型式名/メーカー名と「設定変更」「リセット」「朝一」「据え置き」「ガックン」「電源OFF ON」を組み替えて再探索したが直接確認できず`UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きを独立条件で明記した本機固有資料は`UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。
- 天井/ゲーム数モードがないため、それらの据え置き持越しは`NOT_APPLICABLE`。

### powerCycleBehavior
- 純電源OFF→ON時の成立済みボーナス/告知状態/初期出目/低レベル内部状態を本機固有に固定できる公開資料は`UNVERIFIED_AFTER_RESEARCH`。
- 天井/ゲーム数解除モードについては`NOT_APPLICABLE`。

### gameCounterReset
- ceilingCounter: `NOT_APPLICABLE_NO_CEILING`
- gameNumberReleaseCounter: `NOT_APPLICABLE`
- otherMorningRelevantCounter: `NONE_CONFIRMED_AFTER_RESEARCH`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`

### modeAfterReset
- gameNumberMode: `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`

### stateAfterReset
- AT/ART/CZ高確等: `NOT_APPLICABLE_TO_CONFIRMED_NORMAL_A_GAMEPLAY`
- bonus/告知等の低レベル状態: `UNVERIFIED_AFTER_RESEARCH`

### advantageousSectionReset
- `NOT_APPLICABLE_TO_CONFIRMED_NORMAL_A_GAMEPLAY`
- 本機はボーナスのみで出玉を増やすノーマルAとして確認され、有利区間を用いるAT/ART/CZゲーム性は確認しない。

### resetBenefits
- 天井短縮: `NOT_APPLICABLE`
- 朝一専用モード/設定変更専用初当たり優遇/ボーナス優遇: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetPenalties
- 設定変更専用の主要な数値的不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`

### resetDetection
- 本機固有のガックン発生条件/確率、初期出目、ランプ等による設定変更/据え置き判別は、表記揺れ・型式名を含め再探索したが`UNVERIFIED_AFTER_RESEARCH`。
- BIG中チェリー、REG中サイドランプ、ボーナス終了時王冠ランプは設定推測要素であり、設定変更判別とは混同しない。

### numericResetData
- resetSpecificCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificInitialHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificBenefitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更時のみ適用される公開された朝一当選率、専用モード振り分け、短縮天井、恩恵発生率は`NONE_CONFIRMED_AFTER_RESEARCH`。
- DMMの朝イチ解析欄は「準備中」。後年検索を含めても本機固有のreset専用数値は固定できなかった。

## conflicts
- `CONFLICT_RELEASE_DATE_2018_02_12_VS_2018_02_13`:
  - HAZUSE: 2018-02-12
  - DMMぱちタウン: 2018-02-13(火)
  - 平均・統合せず双方保持。canonicalはHAZUSEの2018-02-12。
- `CONFLICT_RETROSPECTIVE_RELEASE_MONTH_2018_01`:
  - 5号機クロニクル: 2018/1
  - exact dayを持つHAZUSE/DMMは2018/2。
  - 後年回顧資料の月表記はcanonicalへ採用せず隔離。
- `CONFLICT_ROUNDED_PAYOUT_RETROSPECTIVE`:
  - 5号機クロニクル: 96.5 / 98.7 / 101.0 / 103.2 / 105.5 / 107.7%
  - HAZUSE/P-WORLD: 96.47 / 98.72 / 100.99 / 103.22 / 105.47 / 107.72%
  - 丸めで整合するため実質同値扱い。精密値をcanonicalとする。

## missingFields
- baseGamesPer50: `UNVERIFIED_AFTER_RESEARCH`
- settingChange時の成立済みボーナス/告知状態/初期出目: `UNVERIFIED_AFTER_RESEARCH`
- powerCycle時の成立済みボーナス/告知状態/初期出目: `UNVERIFIED_AFTER_RESEARCH`
- 据え置き独立契約: `UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`
- ガックン等の確定的変更判別: `UNVERIFIED_AFTER_RESEARCH`
- ガックン発生率: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-10

1. HAZUSE — トリプルクラウンZEROII 2nd EDITION
   - https://hazuse.com/machine/pachislot/7S1011/
   - 型式、検定番号、メーカー、2018-02-12、設定別BIG/REG/合算/機械割、天井非搭載、BIG約312枚/REG約104枚。
   - confidence: `ANALYSIS_HIGH`

2. P-WORLD — トリプルクラウンZEROII SECOND EDITION
   - https://www.p-world.co.jp/machine/database/8565
   - 設定別BIG/REG/合算/機械割、BIG/REG払い出し終了条件。
   - confidence: `INDUSTRY`

3. DMMぱちタウン — トリプルクラウンZEROⅡ SECOND EDITION
   - https://p-town.dmm.com/machines/3240
   - 型式、メーカー、2018-02-13、機械割レンジ、前作と基本仕様共通、朝イチ欄準備中。
   - confidence: `ANALYSIS_HIGH`

4. 5号機クロニクル — 清龍ゲームジャパン5号機全機種一覧
   - https://5goki.com/seiryu
   - 2018年導入機として本機を掲載。導入時期2018/1、丸め機械割を掲載。exact day資料と競合するため補助/CONFLICT資料として使用。
   - confidence: `ANALYSIS_SINGLE`

5. P-WORLD業界ニュース / グリーンべると転載 — 旧規則機撤去リスト
   - https://news.p-world.co.jp/articles/13945/greenbelt
   - Aタイプ一覧に型式`トリプルクラウンZ2-30`を掲載し、実在型式のクロスチェックに使用。
   - confidence: `INDUSTRY`
