# 新鬼武者 再臨

machineName: 新鬼武者 再臨
manufacturer: ロデオ
releaseDate: 2013-03-18
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi、HAZUSEが2013-03-18導入で一致。
generation: 5号機
systemType: AT / ゲーム数解除+CZ+直撃
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- 正式表記: **新鬼武者 再臨**。
- メーカー: **ロデオ**。
- 型式名: **新鬼武者AW**。
- 検定番号: **2S1419**。
- 導入開始日: **2013-03-18**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.0% |
| 2 | 98.7% |
| 3 | 100.2% |
| 4 | 104.4% |
| 5 | 107.3% |
| 6 | 114.4% |

- HAZUSE、後年解析整理で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/416.2 |
| 2 | 1/394.6 |
| 3 | 1/384.6 |
| 4 | 1/334.7 |
| 5 | 1/313.8 |
| 6 | 1/288.8 |

- HAZUSE、必勝本系解析、後年解析整理で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約31.1G/50枚**。
- HAZUSE基本スペックの直接値。
- confidence: ANALYSIS_HIGH

## netIncrease

- AT「蒼剣ラッシュ」: **約+2.8枚/G**。
- K-Navi、HAZUSE、必勝本で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「蒼剣ラッシュ」: **1セット約50G+α**（40G通常パート+継続バトル+上乗せ分という説明あり）。
- 継続率管理、最大89%ループ。
- 純増約+2.8枚/G。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

### 通常時

- AT当選契機は主に規定ゲーム数、CZ、自力直撃。
- CZ「鬼の試練」「覚醒の試練」を搭載。
- 通常時は規定ゲーム数に関係する通常A / 通常B / 天国のモードを確認。

### 天井

- **最大1280G**でAT当選。
- モード別最大: **通常A 1248G / 通常B 1280G / 天国 128G**。
- HAZUSEと当時攻略資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_CONTRACT_CONFIRMED__RESET_NUMERIC_DISTRIBUTIONS_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **天井ゲーム数を再抽選**。
- **モードを再抽選**。
- **内部状態を再抽選**。
- 鬼モード・AT中に設定変更された場合は蒼鬼ステージへ移行し、それ以外のステージは引き継ぐ、と必勝本の機種固有ページに明記。
- confidence: ANALYSIS_HIGH_DIRECT_MACHINE_SPECIFIC

### carryOverBehavior

- 純据え置きでは、設定変更を行わないため天井進捗・モード・状態は継続する契約として電源OFF/ON資料と整合。
- ただし「据え置き」という見出しで独立して全項目を列挙した本機固有資料は確認できなかったため、厳密表現は `SUPPORTED_BY_POWER_CYCLE_CONTRACT` とする。

### powerCycleBehavior

- **電源OFF→ONのみでは天井ゲーム数を引き継ぐ**。
- **モードを引き継ぐ**。
- **内部状態を引き継ぐ**。
- **ステージを引き継ぐ**。
- 必勝本の「天井&設定変更」機種固有ページの直接記述。
- confidence: ANALYSIS_HIGH_DIRECT_MACHINE_SPECIFIC

### gameCounterReset

- 設定変更時: **RESET / RESELECTED**。前日の天井進捗は持ち越さない。
- 電源OFF→ONのみ: **CARRY_OVER**。

### ceilingAfterReset

- 設定変更後も通常時のモード別最大天井体系（通常A 1248G / 通常B 1280G / 天国128G）を使用する。
- **設定変更専用の固定短縮天井は確認できない**。
- 設定変更時は規定ゲーム数自体が再抽選されるため、前日ハマリの宵越し価値は消失。

### modeAfterReset

- 設定変更時: **RESELECT / 再抽選**。
- 電源OFF→ONのみ: **CARRY_OVER**。
- 設定変更時の通常A/B/天国の具体的振り分けは、HAZUSE/K-Navi/必勝本/当時攻略ブログ/後年回顧を検索語変更して再探索したが、今回直接確定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更時: **RESELECT / 再抽選**。
- 電源OFF→ONのみ: **CARRY_OVER**。
- 設定変更時の低確/通常/高確/超高確等の具体振り分けは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更でモード・状態・天井ゲーム数が再抽選されるため、前日状態に依存しない朝一抽選を受ける。
- K-Naviには当時の攻略記事見出しとして「リセット台は220G付近までが狙い目」が残るが、具体的な当選率・期待値本文を今回安全に回収できないため、数値恩恵としては採用しない。

### resetPenalties

- 前日天井進捗は設定変更で消失するため、**宵越し天井狙いは無効化**される。
- 当時攻略資料にも設定変更で天井消化ゲーム数リセット・宵越し不可との記述あり。

### resetDetection

- 設定変更で鬼モード/AT中なら蒼鬼ステージへ、それ以外はステージ引継ぎ。単純電源OFF/ONではステージ引継ぎ。
- ただし通常閉店時の朝一外見だけで設定変更を確定できる主要判別法、リールガックンの公式/解析契約は、機種名・型式名・ロデオ・「設定変更/リセット/据え置き/電源OFF ON/ガックン/朝一/初期出目」を組み替えて再探索しても確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 実戦回顧に「ガックンなし」を据え置き推測材料にした例はあるが、仕様確定資料ではないため根拠値に採用しない。

### publicMorningNumbers

- normalCeiling: **通常A 1248G / 通常B 1280G / 天国128G**
- resetShortCeiling: **NONE_CONFIRMED_AS_FIXED_RESET_ONLY_CEILING**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetBenefitRate: **UNVERIFIED_AFTER_RESEARCH**
- resetStrategyReference: **K-Navi article heading says reset machines were targeted to around 220G; no recoverable numeric probability in this run**
- advantageousSection: **NOT_APPLICABLE_5TH_GEN**

### numericResetData

- settingChangeCeilingProgress: RESET_AND_RESELECT
- powerCycleCeilingProgress: CARRY_OVER
- resetModeNumericRate: UNVERIFIED_AFTER_RESEARCH
- resetStateNumericRate: UNVERIFIED_AFTER_RESEARCH
- publicMorningNumericAdvantage: UNVERIFIED_AFTER_RESEARCH

resetQaReliability: ANALYSIS_HIGH_DIRECT_FOR_SETTING_CHANGE_POWER_CYCLE_AND_CEILING__UNVERIFIED_AFTER_RESEARCH_FOR_RESET_DISTRIBUTIONS_AND_GACCKUN

## missingFields

- resetModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- machineSpecificGacckunContract: `UNVERIFIED_AFTER_RESEARCH`
- publicResetHitRateWithin220G: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- NONE_CONFIRMED_FOR_PRIMARY_CORE_OR_RESET_CONTRACT.
- 後継「パチスロ 新鬼武者2」や「スマスロ 新鬼武者3」のリセット仕様は別機種のため採用しない。

## sources

取得日: **2026-09-06**

- K-Navi — 導入日/AT概要/純増/50G+α/朝一攻略記事見出し: `https://p-kn.com/slot/1822/`
- HAZUSE — 型式/検定番号/導入日/AT初当たり/機械割/50枚ベース/モード別天井/AT概要: `https://hazuse.com/machine/pachislot/2S1419/`
- HAZUSE 基本スペック: `https://hazuse.com/machine/pachislot/2S1419/genre/201/`
- HAZUSE AT/ART: `https://hazuse.com/machine/pachislot/2S1419/genre/209/`
- パチ＆スロ必勝本 — 天井&設定変更（設定変更/電源OFF→ONの直接契約）: `https://p.hisshobon.jp/machine/2172/1/39091`
- パチ＆スロ必勝本 — AT概要/最大1280G/純増2.8枚/G/50G+α: `https://p.hisshobon.jp/machine/2172/1/39093`
- パチ＆スロ必勝本 — 規定ゲーム数振り分け: `https://p.hisshobon.jp/machine/2172/1/40408`
- スロパチクエスト — 天井/AT初当たり/機械割/純増の後年照合: `https://www.slopachi-quest.com/article/%E6%96%B0%E9%AC%BC%E6%AD%A6%E8%80%85%E5%86%8D%E8%87%A8/`
- 天井ハイエナ生活（2013年当時） — モード別天井/設定変更で天井Gリセット・宵越し不可: `https://macerate.seesaa.net/article/347710880.html`
- 天井ハイエナ生活 インデックス（当時記述再掲）: `https://macerate.seesaa.net/article/265748860.html`
- 真パチスロ備忘録 — 後年実戦回顧のガックン使用例（仕様確定には不採用）: `https://sin-surobi.com/etc/12904/`
