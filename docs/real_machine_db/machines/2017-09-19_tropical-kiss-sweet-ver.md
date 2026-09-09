machineName: トロピカルKISS スウィートVer.
manufacturer: ハイライツ・エンタテインメント
releaseDate: 2017-09-19
recordNumber: 1145
generation: 5号機（5.5号機世代）
systemType: A+SRT / ボーナス+RT・ART系SRT
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- ハイライツ・エンタテインメントが2017-07-25に発表した「トロピカルKISS」の遊びやすさ重視スペック。ビターVer.とはボーナス確率・獲得枚数・天井が異なるため独立レコード化する。
- パチビーの2017-07-25発表会記事はスウィート/ビター2スペック同時投入を確認し、2017年9月中旬導入予定と報道。K-Navi、パチスロ必勝本、すろぱちくえすと、ちょんぼりすたでホール導入 **2017-09-19** が一致。
- 当時納品情報では納品可能日 **2017-09-18**。本DBはホール導入日として2017-09-19をcanonicalとする。
- メーカー表記は業界発表・K-Navi・必勝本・解析資料が **ハイライツ・エンタテインメント**。P-WORLDはメーカー欄を **アイゲート** とするため、製造/販売/ブランド主体の役割差を含む表記競合として保持する。
- 正式型式名・検定番号は、機種名表記揺れ、スウィート/Sweet、ハイライツ、アイゲート、型式、検定通過、中古実機等へ検索語を変えて再探索したが、今回直接固定できる資料を得られず **UNVERIFIED_AFTER_RESEARCH**。ビターVer.の型式を転記しない。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## payoutRateBySetting
- 設定1: **98.1%**
- 設定2: **99.3%**
- 設定3: **100.7%**
- 設定4: **105.0%**
- 設定5: **108.2%**
- 設定6: **111.0%**
- パチスロ必勝本・すろぱちくえすと・当時スペック資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### SUPER BIG BONUS
- 設定1: **1/993.0**
- 設定2: **1/923.0**
- 設定3: **1/819.2**
- 設定4: **1/648.9**
- 設定5: **1/555.4**
- 設定6: **1/481.9**

### BIG BONUS
- 設定1: **1/392.4**
- 設定2: **1/383.3**
- 設定3: **1/383.3**
- 設定4: **1/366.1**
- 設定5: **1/358.1**
- 設定6: **1/354.2**

### ALOHA BONUS / REG
- 設定1: **1/372.4**
- 設定2: **1/372.4**
- 設定3: **1/372.4**
- 設定4: **1/360.1**
- 設定5: **1/348.6**
- 設定6: **1/344.9**

### ボーナス合算
- 設定1: **1/160.2**
- 設定2: **1/156.8**
- 設定3: **1/153.5**
- 設定4: **1/141.9**
- 設定5: **1/134.0**
- 設定6: **1/128.3**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約32G/50枚**。
- すろぱちくえすと、同シリーズ解析で確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- SRT「トロピカルTIME」: **約0.3枚/G**。
- 業界発表、P-WORLD、必勝本、解析資料で一致。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## basicPayout
- SUPER BIG BONUS: **252枚**
- BIG BONUS: **153枚**
- ALOHA BONUS: **54枚**
- SRT初期ゲーム数: **50G / 100G / 150G / 200G / 300G / 500G**、無限SRTあり。
- K-Navi、P-WORLD、すろぱちくえすと、業界発表で照合。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## modeSpecificMinimumData
- ボーナスとSRT「トロピカルTIME」で出玉を構成するA+SRT機。市場資料ではA+RT、A+ART双方の分類表記があるため、本DBではメーカー訴求のSRT概念を維持し定義差を混ぜない。
- 通常時は内部状態（通常/高確/超高確）があり、アロハ館内→事務所→プラネタリウムの順に高確期待度が上がる。
- 通常天井は **ボーナス&SRT間777G**。到達でSRTへ突入。
- 天井到達時の公開SRTゲーム数振り分け: **50G 91% / 100G 5% / 150G 2% / 200G 1% / 300G 1%**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_TABLE_CONFIRMED; DISTINCT_STAY_SETTING_AND_GAKKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-10

### settingChangeBehavior
- 設定変更時は **天井リセット / 内部状態リセット / アロハ館内ステージ開始**。
- ちょんぼりすたのスウィートVer.朝一リセット表で、設定変更時と純電源OFF→ON時を直接比較して確認。
- 状態リセット先の低確/通常/高確等の具体的初期振り分けは公開資料から直接固定できず、通常時の状態移行率を朝一値として転記しない。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### carryOverBehavior
- 「設定変更なしの据え置き」を純電源OFF→ONと別条件で本機固有に直接明記した公開資料は、`据え置き / 朝一 / リセット / 天井引継ぎ / 状態引継ぎ`等へ検索語を変えて再探索しても固定できず **UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH**。
- 純電源OFF→ONについては天井・状態・ステージの引継ぎが直接確認できるため、別条件として保持する。
reliability: UNVERIFIED_FOR_DISTINCT_STAY_SETTING / ANALYSIS_HIGH_FOR_POWER_CYCLE

### powerCycleBehavior
- 純電源OFF→ONのみの場合は **天井引継ぎ / 内部状態引継ぎ / ステージ引継ぎ**。
- 設定変更時とは明確に異なる。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### gameCounterReset
- settingChange: **RESET**。ボーナス&SRT間777G天井の進行をリセット。
- stay setting: **UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH**。
- pure power OFF→ON: **CARRYOVER**。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### ceilingAfterReset
- normalCeiling: **777G**（ボーナス&SRT間）。
- settingChange: 天井カウンタをリセットして0G相当から再開。
- resetShortening: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井は確認できず、通常777G契約を維持する。
- pure power OFF→ON: 前日の天井進行を引き継ぐ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 公開資料で確認できる通常/高確/超高確は内部状態として扱う。
- 独立した朝一専用モード、設定変更専用モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_SEPARATE_PUBLISHED_RESET_MODE_CONTRACT

### stateAfterReset
- settingChange: **RESET**。
- pure power OFF→ON: **CARRYOVER**。
- reset時の具体的な通常/高確/超高確振り分け数値: **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の天井短縮、朝一専用モード、高確確定、ボーナス/SRT当選率優遇などの固定数値恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常天井自体がビターVer.の999Gより短い777Gだが、これはスウィートVer.の恒常スペック差でありリセット恩恵ではない。
reliability: ANALYSIS_HIGH_FOR_RESET_TABLE / UNVERIFIED_NO_DEDICATED_BENEFIT_FOUND

### resetPenalties
- 設定変更で天井進行と内部状態がリセットされるため、前日までの天井進行や有利な内部状態を保持していた場合は失われる。
- 設定変更専用の追加不利抽選・固定ペナルティ率は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_RESET_EFFECT / UNVERIFIED_NO_DEDICATED_PENALTY_RATE_FOUND

### resetDetection
- 設定変更時は **アロハ館内ステージ開始**、純電源OFF→ONは **前ステージ引継ぎ**。前日の終了ステージが把握できる場合は推測材料になり得るが、アロハ館内は通常の基本ステージでもあるため確定判別とはしない。
- 本機固有の確定ガックン契約、発生率、初期出目/ランプによる確定判別は、`ガックン / 設定変更判別 / 朝一 / 据え置き / 電源OFF ON`等で再探索しても **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_STAGE_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
- normalCeiling: **777G**
- normalCeilingBenefit: **SRT**
- normalCeilingSrtDistribution: **50G 91% / 100G 5% / 150G 2% / 200G 1% / 300G 1%**
- settingChangeCeilingCounter: **RESET_TO_START / normal max remains 777G**
- purePowerCycleCeilingCounter: **CARRYOVER**
- settingChangeStartStage: **アロハ館内ステージ**
- purePowerCycleStage: **CARRYOVER**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDedicatedModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- gakkun: **UNVERIFIED_AFTER_RESEARCH**

## missingFields
- 正式型式名。
- 検定番号。
- 純電源OFF→ONとは別条件として明記された「据え置き」契約。
- 設定変更時の具体的な内部状態振り分け。
- 本機固有の確定ガックン/初期出目/ランプ判別契約。

## conflicts
- manufacturer attribution: 業界発表・K-Navi・必勝本・解析資料は **ハイライツ・エンタテインメント**、P-WORLDはメーカー欄を **アイゲート** と掲載。製造/販売/ブランド主体の役割差の可能性があるため **MANUFACTURER_ATTRIBUTION_CONFLICT_OR_ROLE_SPLIT** として保持。
- system classification: 当時資料に **A+RT / A+ART / ART型SRT** の表記差がある。実装上のSRT純増約0.3枚/G・50〜500G+∞という共通仕様は一致しているため、分類ラベルのみ **SOURCE_CLASSIFICATION_VARIANCE** として保持。
- 性能コアの主要数値に重大な同一定義CONFLICTは確認されない。

## sources
取得日: 2026-09-10
- パチビー（2017-07-25発表会 / ハイライツ / 2スペック / SRT 50〜500G+∞ / 約0.3枚/G / 9月中旬導入予定）: https://www.pachibee.jp/pparticles/view/983
- PiDEA X（2017-07-26業界発表 / ハイライツ / スウィート・ビター同時販売 / スウィートSBB252枚・BB153枚・RB54枚）: https://www.pidea.jp/articles/%E4%BA%BA%E6%B0%97%E3%82%B2%E3%83%BC%E3%83%A0%E3%80%8C%E3%83%88%E3%83%AD%E3%83%94%E3%82%AB%E3%83%ABKISS%E3%80%8D%E6%96%B0%E6%84%9F%E8%A6%9ASRT%E6%90%AD%E8%BC%89%EF%BC%8F%E3%83%8F%E3%82%A4%E3%83%A9%E3%82%A4%E3%83%84
- K-Navi（導入2017-09-19 / ハイライツ / SBB252枚・BIG153枚・ALOHA54枚）: https://p-kn.com/slot/2868/
- パチスロ必勝本（2017-09-19導入 / 設定別SBB・BIG・REG・合算・機械割 / SRT約0.3枚/G・50〜500G+∞）: https://p.hisshobon.jp/machine/3043/1/66069
- P-WORLD（アイゲート表記 / SBB252枚・BIG153枚・ALOHA54枚 / SRT約0.3枚/G / 天井777G）: https://www.p-world.co.jp/machine/database/8473
- ちょんぼりすた（2017-09-19 / 天井777G / 天井SRT振り分け / 設定変更と純電断の朝一比較表）: https://chonborista.com/slot/high-enter/45615/
- すろぱちくえすと（2017-09-19 / 約32G/50枚 / 設定別スペック / 天井777G / SRT約0.3枚/G）: https://www.slopachi-quest.com/article/tropicalkiss-sweet/
- 当時スペックPDF（設定別SBB・BIG・ALOHA・合算・出玉率 / 777G天井）: https://rashinban-web.com/system/files/member/column/suzumenosu/%EF%BD%94%EF%BD%8B.pdf
- 当時納品情報（納品可能日2017-09-18 / A+RT / 2スペック）: https://www.answer-now.co.jp/newpage2.html
