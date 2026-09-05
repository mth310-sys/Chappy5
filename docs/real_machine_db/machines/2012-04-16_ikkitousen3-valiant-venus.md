# 一騎当千3 Valiant Venus

machineName: 一騎当千3 Valiant Venus
manufacturer: タイヨー
releaseDate: 2012-04-16
releaseDatePrecision: exact_day
releaseDateNotes: K-Navi・当時系新機種一覧で2012-04-16導入開始を照合。A-SLOTは2012年4月導入開始として月単位整合。
generation: 5号機
systemType: ボーナス+ART / セットストック式ART
formalModelName: 一騎当千3
approvalNumber: 1S1217
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.6% |
| 2 | 98.0% |
| 3 | 99.9% |
| 4 | 103.0% |
| 5 | 108.7% |
| 6 | 112.9% |

reliability: ANALYSIS_HIGH
notes: 5号機クロニクルと複数解析資料で一致。

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 | ART初当り | ボーナス+ART合算 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/376.6 | 1/381.0 | 1/189.4 | 1/559.6 | 1/141.5 |
| 2 | 1/372.4 | 1/374.5 | 1/186.7 | 1/493.1 | 1/135.4 |
| 3 | 1/358.1 | 1/366.1 | 1/181.0 | 1/503.3 | 1/133.1 |
| 4 | 1/352.3 | 1/354.2 | 1/176.6 | 1/439.0 | 1/126.0 |
| 5 | 1/336.1 | 1/343.1 | 1/169.8 | 1/434.7 | 1/122.1 |
| 6 | 1/319.7 | 1/319.7 | 1/159.8 | 1/363.8 | 1/111.0 |

reliability: ANALYSIS_HIGH
notes: K-NaviとPachiNaviの設定別BIG/REG/合算/ART初当りが一致。当時系新機種一覧でもBIG/REGおよびボーナス+ART合算を照合。

## baseGamesPer50

value: UNVERIFIED_AFTER_RESEARCH
reliability: UNVERIFIED
notes: 「50枚あたり / 1000円あたり / ベース / コイン持ち」を機種名・型式名・メーカー名と組み替えて検索したが、比較可能な直接数値を確定できず。

## netIncrease

value: ART約+1.5枚/G
reliability: INDUSTRY
notes: 遊技通信社提供の当時プレス発表記事、K-Navi、P-WORLD、A-SLOTで一致。

## basicPayout

- BIG: 最大208枚
- REG: 50枚
- ART「関羽無双」: 1セット7G、約+1.5枚/G
- ART「子龍七連撃」: 1セット7G、約+1.5枚/G。消化中は毎ゲーム上乗せ抽選。

reliability: ANALYSIS_HIGH

## modeSpecificMinimumData

- ARTはセットストック式。初当り時はARTストック5個以上。
- 通常時内部状態は通常・高確・超高確の3段階。超高確中のレア小役/ボーナス成立はART突入確定とされる。
- ゲーム数天井は「ボーナス間1000G消化以降のボーナス成立後に必ずART突入」。1000G到達そのものではARTが即発動する形式ではない。

reliability: ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。K-Navi本機ページに「設定変更後の挙動」専用解析項目が存在することは確認できたが、現存公開本文から具体的処理内容を直接回収できず。一般的な5号機ART機の仕様や同シリーズ別機種を流用しない。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のボーナス間天井ゲーム数・内部状態・ARTストック等の具体的引継ぎを本機固有直接資料で確定できず。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の天井ゲーム数・内部状態・液晶ステージ・リール挙動を本機固有資料で確定できず。
gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常天井条件はボーナス間1000G消化以降のボーナス後ART突入で確定しているが、設定変更時に当該ボーナス間ゲーム数がクリアされるかを直接確認できず。
ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更専用の天井短縮・延長数値は確認できず。
modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常・高確・超高確の内部状態を持つが、設定変更時の再抽選/固定開始状態/振り分けを直接確定できず。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更時の内部状態処理を直接確定できず。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。朝一専用の短縮天井、ART/CZ優遇、公開当選率等は今回の横断検索で確定できず。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。天井進捗消去等は直接資料未確認のため推測しない。
resetDetection: UNVERIFIED_AFTER_RESEARCH。K-Navi掲示系には1G目ガックンに関するユーザー投稿が残るが、解析根拠ではないため変更判別仕様として採用しない。ガックン・初期出目・液晶ステージ等の本機固有確定資料は未確認。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH
numericResetData: normalCeiling=BONUS_INTERVAL_1000G_THEN_NEXT_BONUS_TRIGGERS_ART; settingChangeCounterHandling=UNVERIFIED; resetShortenedCeiling=UNVERIFIED; resetModeDistribution=UNVERIFIED

notes:
- 「一騎当千3 Valiant Venus / 一騎当千3 / タイヨー / 1S1217」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 高確 / モード / ガックン」を組み替えて再探索。
- K-Naviには本機専用「設定変更後の挙動」解析項目が残るが、検索取得できる本文では具体内容が展開されない。
- 「一騎当千XX」や後年スマスロ一騎当千のリセット情報は別機種のため流用しない。

resetQaReliability: ANALYSIS_HIGH_FOR_NORMAL_CEILING_EXISTENCE__UNVERIFIED_FOR_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_AND_DETECTION

## conflicts

- none confirmed for collected core values.

## missingFields

- baseGamesPer50
- settingChangeBehavior exact handling
- carryOverBehavior exact handling
- powerCycleBehavior exact handling
- gameCounterReset on setting change
- ceilingAfterReset
- mode/state distribution after reset
- resetDetection

## sources

取得日: 2026-09-05

1. K-Navi「一騎当千3 Valiant Venus」 https://p-kn.com/slot/1603/
   - 2012-04-16導入、BIG/REG/合算、ART初当り、ART仕様、設定変更後の挙動専用解析項目の存在。
   - reliability: ANALYSIS_HIGH
2. PachiNavi「パチスロ 一騎当千3 Valiant Venus」 https://pachinavi.net/machines/ikkitousen-3-valiant-venus/
   - 2012-04-16導入、型式名一騎当千3、検定番号1S1217、設定別機械割/BIG/REG/合算/ART初当り。
   - reliability: ANALYSIS_SINGLE / RETROSPECTIVE_DATABASE
3. P-WORLD「一騎当千3 Valiant Venus」 https://www.p-world.co.jp/machine/database/6660
   - 5号機ART、BIG最大208枚、REG50枚、ART1セット7G・約+1.5枚/G、ボーナス間1000G消化以降のボーナス後ART確定、内部状態概要。
   - reliability: ANALYSIS_HIGH / OLD_DATABASE
4. 5号機クロニクル「タイヨー 5号機全機種一覧」 https://5goki.com/taiyo
   - 2012年4月導入、設定別機械割96.6〜112.9%。
   - reliability: ANALYSIS_HIGH / RETROSPECTIVE_DATABASE
5. 遊技通信社提供「タイヨー、パチスロ新機種『一騎当千3』をプレス発表」 https://www.55hadama.com/new/2012-02-27-133840.html
   - 当時プレス発表、ART1セット7G・純増約1.5枚/G。
   - reliability: INDUSTRY
6. 天井ハイエナ生活「パチスロ・パチンコ新機種導入予定日」 https://macerate.seesaa.net/article/263152916.html
   - 当時系資料。2012-04-16導入、設定別BIG/REG、ボーナス+ART合算、BIG208枚、REG50枚、ART7G・約+1.5枚/G。
   - reliability: ANALYSIS_SINGLE / PERIOD_SECONDARY
7. A-SLOT「タイヨー 一騎当千3 Valiant Venus」 https://www.a-slot.com/SHOP/taiyo12.html
   - 2012年4月導入開始、ART1セット7G・約+1.5枚/G、BIG/REG基本獲得性能。
   - reliability: RETROSPECTIVE_SECONDARY
