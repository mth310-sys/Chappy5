# No.1160 タロットエンペラー

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: タロットエンペラー
- manufacturer: ユニバーサルブロス
- releaseDateCanonical: 2017-11-27
- generation: 5.9号機（5号機）
- systemType: A+RT / 技術介入
- formalModelName: `タロットエンペラーRT`
- certificationNumber: `7S1246`
- collectedAt: 2026-09-10

## releaseDateEvidence
- ユニバーサル公式製品ページ: 発売2017年11月。
- HAZUSE: 導入開始2017-11-27、型式`タロットエンペラーRT`、検定番号`7S1246`。
- パチビー / K-Navi / ちょんぼりすた: 導入2017-11-27で一致。
- パチビー2017年11月導入カレンダーでは11/27のパチスロ新台は本機のみ。
- 本DBでは複数当時系資料一致から2017-11-27をcanonical。

## performanceCore

### payoutRateBySetting
市場掲載値:
- setting1: 97.4%
- setting2: 99.3%
- setting3: 101.1%
- setting4: 105.7%
- setting5: 107.0%
- setting6: 107.2%

完全攻略時:
- setting1: 99.7%
- setting2: 101.7%
- setting3: 103.5%
- setting4: 108.1%
- setting5: 108.6%
- setting6: 108.9%

- 技術介入条件差なので平均せず別系列として保持。

### bigBonusBySetting
- setting1: 1/425.6
- setting2: 1/404.5
- setting3: 1/392.4
- setting4: 1/368.2
- setting5: 1/885.6
- setting6: 1/885.6

### regularBonusBySetting
- setting1: 1/425.6
- setting2: 1/414.8
- setting3: 1/394.8
- setting4: 1/381.0
- setting5: 1/237.4
- setting6: 1/234.1

### bonusCombinedBySetting
- setting1: 1/212.8
- setting2: 1/204.8
- setting3: 1/196.8
- setting4: 1/187.2
- setting5: 1/187.2
- setting6: 1/185.1

### baseGamesPer50
- canonical: 約39G/50枚。
- パチ7の公開レンジ38.9〜42.1G/50枚も別定義の設定差レンジとして整合。

### netIncrease
- RT「タロットチャンス」: 約0.2枚/G
- RT「タロットゲーム」: 約0.5枚/G

### basicPayout
- BIG: 最大311枚（344枚超払い出しで終了）
- REG: 104枚（105枚超払い出しで終了）
- BIG後: 最大30G「タロットチャンス」→30Gまたは100G「タロットゲーム」へ移行可能。公式はBB+RT期待値400枚、RT最大130Gを訴求。
- REG後: 1G「タロットチャンス」。約25%で100G「タロットゲーム」へ。

### ceiling
- `NONE`。天井非搭載。

## modeSpecificMinimumData
- 基本はボーナス主体のA+RT。
- BIG後のタロットチャンスはJAC INハズシで延命可能。タロットゲームは30G/100G、純増約0.5枚/G。
- REG後は1Gのタロットチャンスを経由し、約25%で100Gタロットゲーム。
- 通常時から100Gタロットゲームへ入る契機も存在するが、完全再現用の詳細抽選は本DB対象外。
- 設定5/6はBIG確率が大幅に低くREG・通常小役側へ寄る特殊設計。設定1〜4と同じ感覚でBIG確率を比較しない。

## resetBehavior

### settingChangeBehavior
- 本機固有の設定変更時におけるRT状態、成立済みボーナス状態、初期出目・液晶状態の直接契約は、機種名/型式/メーカー名と「設定変更」「リセット」「朝一」「RT」「ガックン」を組み替え、公式・業界・当時解析・回顧を横断しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ゲーム数天井・ゲーム数解除モードは非搭載のため、天井リセット契約は `NOT_APPLICABLE`。

### carryOverBehavior
- 据え置き時の低レベルRT状態、ボーナス成立状態、液晶状態の直接比較資料は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 天井・ゲーム数解除がないため、前日ゲーム数持越しによる天井狙い価値は `NOT_APPLICABLE`。

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ON時にRT残G、RT種別、成立済みボーナス、液晶状態がどう扱われるかを本機固有に直接記載する資料は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的なA+RT機の挙動から推測補完しない。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`
- 設定変更専用の短縮天井なし。

### modeAfterReset
- ゲーム数解除モード / 朝一専用モードは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 高確/低確/CZ等の設定変更専用状態は `NONE_CONFIRMED_AFTER_RESEARCH`。
- RT・ボーナス成立等の低レベル状態は settingChange / carryOver / powerCycle の直接契約が取れずUNVERIFIED。

### advantageousSectionReset
- `NOT_APPLICABLE_TO_CONFIRMED_GAMEPLAY`。
- 5.9号機表記だが、公開ゲーム性はボーナス+RTであり、朝一客行動へ影響する有利区間ランプ/有利区間状態の本機固有契約を確認できないため推測しない。

### resetBenefits
- 天井短縮、朝一高確、変更時初当たり優遇等の主要恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の公開された出玉上の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン、朝一初期出目、液晶表示、ランプによる設定変更/据え置き確定契約は `UNVERIFIED_AFTER_RESEARCH`。
- 設定5/6は通常時小役確率が極端に高く、短時間実戦でも挙動差を把握しやすいとの当時実戦報告があるが、これは「設定変更判別」そのものではなく設定推測要素のため resetDetection の確定材料にはしない。

### numericResetData
- resetSpecificCeiling: `NOT_APPLICABLE_NO_CEILING`
- resetSpecificModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificInitialHitRate: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBenefitProbability: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunProbability: `UNVERIFIED_AFTER_RESEARCH`

## conflicts
- 50枚ベースは攻略まとめの約39Gとパチ7の38.9〜42.1Gレンジがある。前者は代表値、後者は設定差を含む公開レンジとみなし、同一定義の競合として平均化しない。
- RT純増について、公式ページはRT最大130G・BB+RT期待値400枚を訴求し、解析資料は前半TC約0.2枚/G、後半TG約0.5枚/Gと段階別に記載。定義差として両方保持。

## sources
取得日: 2026-09-10

1. ユニバーサルエンターテインメント公式 — タロットエンペラー
   - https://www.universal-777.com/product/slot/tarot_emperor/
   - ユニバーサルブロス、ボーナス+RT、5号機、発売2017年11月、RT最大130G、BB+RT期待値400枚。
   - confidence: `OFFICIAL`

2. グリーンべると — 「A PROJECT」初の液晶搭載機登場
   - https://web-greenbelt.jp/00010014/
   - 2017-11-08発表記事。ユニバーサルブロス製、A+RT、BIG最大311枚、REG104枚。
   - confidence: `INDUSTRY`

3. HAZUSE — タロットエンペラー
   - https://hazuse.com/machine/pachislot/7S1246/
   - 導入2017-11-27、型式`タロットエンペラーRT`、検定番号`7S1246`、設定別BIG/REG/合算。
   - confidence: `ANALYSIS_HIGH`

4. P-WORLD — タロットエンペラー
   - https://www.p-world.co.jp/machine/database/8533
   - BIG/REG/合算、通常機械割・完全攻略機械割、BIG311枚/REG104枚、RT構造・純増約0.5枚/G。
   - confidence: `INDUSTRY`

5. ちょんぼりすた — タロットエンペラー
   - https://chonborista.com/slot/universal-slot/49960/
   - 導入2017-11-27、A+RT、約39G/50枚、TC約0.2枚/G、TG約0.5枚/G、天井なし、設定別BIG/REG/合算/通常機械割/完全攻略機械割。
   - confidence: `ANALYSIS_HIGH`

6. パチ7 — タロットエンペラー 通常時の打ち方
   - https://pachiseven.jp/machines/5331/cutout/70
   - 38.9〜42.1G/50枚、天井機能なし、導入2017-11-27。
   - confidence: `ANALYSIS_HIGH`

7. パチマガスロマガ — タロットエンペラー ゲーム性丸わかり解説
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/universalbros_slot/07/l.php
   - BIG311枚、REG104枚、BIG後最大30G TC、REG後1G TC、TG30/100G・純増約0.5枚/G、REG後TG移行25%。
   - confidence: `ANALYSIS_HIGH`

8. パチビー — 2017年11月新機種導入日
   - https://www.pachibee.jp/machines/schedule/2017-11
   - 2017-11-27導入のパチスロ新台としてタロットエンペラーのみを掲載。
   - confidence: `INDUSTRY`

9. K-Navi — タロットエンペラー
   - https://p-kn.com/slot/2918/
   - ホール導入開始2017-11-27、BIG最大311枚、REG104枚、ノーマル+RT。
   - confidence: `ANALYSIS_HIGH`

10. さむらい流スロプロ道 — タロットエンペラー実戦記
   - https://sloter-samurai.com/penetration/tarotemperor_jissen01
   - 設定5/6系の極端な小役挙動を利用した据え置き/上げ狙い実戦。reset契約の根拠にはせず補助的な設定推測観測のみ。
   - confidence: `RETROSPECTIVE_SINGLE`

## missingFields
- settingChangeLowLevelState: `UNVERIFIED_AFTER_RESEARCH`
- carryOverLowLevelState: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- resetDetectionGakkun: `UNVERIFIED_AFTER_RESEARCH`
- resetInitialScreenOrReelPosition: `UNVERIFIED_AFTER_RESEARCH`
- publicResetSpecificNumericBenefit: `NONE_CONFIRMED_AFTER_RESEARCH`

## researchNotes
- `タロットエンペラー / TAROT EMPEROR / タロットエンペラーRT / 7S1246 / ユニバーサルブロス`に加え、「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「電断」「RT引継ぎ」「ガックン」「天井」「50枚」「機械割」を組み替えて再探索。
- メーカー公式、業界記事、P-WORLD、HAZUSE、パチビー、K-Navi、パチ7、パチマガスロマガ、当時解析、回顧実戦まで横断。
- resetBehaviorの低レベル状態は一般論で補完せず、十分な再探索後にUNVERIFIEDとした。
