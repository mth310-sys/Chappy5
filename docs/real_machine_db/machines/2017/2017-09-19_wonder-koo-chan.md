machineName: ワンダークーちゃん
manufacturer: 山佐
releaseDate: 2017-09-19
recordNumber: 1143
generation: 5号機（5.5号機世代）
systemType: ノーマルAタイプ / 完全告知 / 技術介入 / 1段階設定
formalModelName: ワンダークーちゃん／GG
certificationNumber: 7S0941
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 山佐製の完全告知ノーマル機。設定は **Yの1段階のみ**。
- HAZUSE、K-Navi、ちょんぼりすた、2-9伝説はいずれもホール導入開始 **2017-09-19**。グリーンべるとの2017-09-06業界記事は納品日を2017-09-18予定としており整合する。
- HAZUSEで型式 `ワンダークーちゃん／GG`、検定番号 `7S0941` を直接確認。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## payoutRateBySetting
### 市場掲載 / 通常条件
- 設定Y: **98%**。
- Re.designの機種基本情報と当時解析「すろかい」で一致。

### フル攻略 / 技術介入時
- 設定Y: **102%**。
- Re.design、ちょんぼりすた、2-9伝説で一致。グリーンべると当時業界記事も「出玉率最大約102%」「通常時チェリーをフォローすれば100%超」と報じる。
- 通常掲載98%とフル攻略102%は条件差でありCONFLICTとして平均しない。
reliability: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE

## initialHitBySetting
### ボーナス確率（設定Yのみ）
- BIG: **1/216**
- REG: **1/324**
- 合算: **1/129**
- BIG:REG比率: **6:4**
- HAZUSEは合算約1/129・比率6:4、グリーンべるとは合算約1/129・比率6:4、ちょんぼりすた・2-9伝説・Re.design・すろかいはBIG/REG/合算を同値で掲載。
reliability: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE

## baseGamesPer50
- **約27G/50枚**。
- ちょんぼりすた、2-9伝説、Re.design、すろかいで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- **NOT_APPLICABLE_NORMAL_TYPE**。
- AT/ART/RTによる通常時の純増区間は非搭載。
reliability: DATABASE_PLUS_ANALYSIS_MULTI_SOURCE

## basicPayout
- BIG: **平均約318枚 / 最大321枚**。
- REG: **平均約110枚 / 最大116枚**。
- P-WORLDは最大321枚 / 最大116枚、グリーンべるとは平均約318枚 / 約110枚、ちょんぼりすた・Re.design・すろかいは平均値と最大値を両方掲載。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## modeSpecificMinimumData
- ボーナスのみで出玉を増やす完全告知ノーマルタイプ。
- リール左の「ワンワンランプ」点灯でボーナス確定。告知は先告知約1/4、後告知約3/4。
- 通常ゲーム数天井は **非搭載**。
- 設定Yのみの1段階設定で、設定間の初当たり差・モード差は存在しない。
reliability: DATABASE_PLUS_ANALYSIS_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_NO_CEILING_NO_RESET_BENEFIT_CONFIRMED; DEVICE_LEVEL_RESET_CONTRACTS_UNVERIFIED
resetQaLastUpdated: 2026-09-10

### settingChangeBehavior
- 本機は**設定Yのみの1段階設定**であり、通常の意味で別設定値へ変更する設定差運用は存在しない。
- 設定キー操作/同一設定でのリセット操作を行った場合に、成立済みボーナス、告知ランプ、初期出目等がどう処理されるかを本機固有に明記した公開資料は、機種名・型式・メーカー・`設定変更 / 設定Y / リセット / 朝一 / ガックン`等を変えて再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 天井・朝一専用モード・内部高確といったリセット対象になるゲーム性は確認されない。
reliability: ANALYSIS_HIGH_FOR_SINGLE_SETTING_AND_NO_CEILING / UNVERIFIED_FOR_DEVICE_LEVEL_RESET

### carryOverBehavior
- 天井・モード・高確状態の据え置き契約は **NOT_APPLICABLE_NO_SUCH_GAMEPLAY_SYSTEM_CONFIRMED**。
- 成立済みボーナス/告知状態など、電源操作を伴わない据え置き時の本機固有直接契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING_MODE / UNVERIFIED_FOR_BONUS_STATE_CONTRACT

### powerCycleBehavior
- 純電源OFF→ON時の成立済みボーナス、告知ランプ、初期出目の扱いを本機固有に直接比較した資料は、`電源OFF ON / 電源入切 / 据え置き / 朝一 / リセット`等で再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的なノーマル機の挙動から推測転記しない。
reliability: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- settingChange: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- stay setting: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- pure power OFF→ON: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。
- HAZUSE、ちょんぼりすた、2-9伝説で天井非搭載を確認。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- normalCeiling: **NONE**。
- resetShortening: **NOT_APPLICABLE_NO_CEILING**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 朝一専用モード、通常時モード管理、設定変更専用モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 1段階設定ノーマル機で、公開解析上モード管理を確認できない。
reliability: ANALYSIS_HIGH_FOR_GAME_STRUCTURE

### stateAfterReset
- 高確/低確など通常時の内部状態管理、および設定変更時の状態再抽選は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 成立済みボーナス状態の設定変更/電断時処理のみ **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NO_MANAGED_STATE / UNVERIFIED_FOR_ESTABLISHED_BONUS_STATE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更/リセット専用の天井短縮、初当たり優遇、高確スタート、専用モード、公開朝一数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 1段階設定かつ天井非搭載のノーマル機で、朝一狙いに直結する公開リセット恩恵は確認できない。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_NO_DEDICATED_BENEFIT_FOUND

### resetPenalties
- 設定変更/リセット専用の不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: UNVERIFIED_NO_DEDICATED_PENALTY_FOUND

### resetDetection
- 本機固有の確定ガックン、初期出目、ワンワンランプ、ゲーム数挙動等による設定変更/リセット判別契約は、表記揺れ・型式名・`設定変更 / 設定Y / リセット / 朝一 / ガックン / 据え置き / 電源OFF ON`を変えて再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- 設定Yのみのため、別設定値への変更判別という意味自体が通常の多段階設定機より限定的。
reliability: UNVERIFIED_AFTER_RESEARCH

### numericResetData
- normalCeiling: **NONE**
- resetCeilingShortening: **NOT_APPLICABLE**
- resetDedicatedModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDedicatedHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- purePowerCycleBonusState: **UNVERIFIED_AFTER_RESEARCH**
- gakkun: **UNVERIFIED_AFTER_RESEARCH**

## missingFields
- 設定キー操作/同一設定リセット時の成立済みボーナス・告知ランプ・初期出目の直接契約。
- 純電源OFF→ON時の成立済みボーナス・告知ランプ・初期出目の直接契約。
- 本機固有の確定ガックン契約。

## conflicts
- 性能コアの重大な同一定義CONFLICTなし。
- 出玉率 **98%** は通常掲載/市場条件、**102%** はフル攻略時で定義が異なるため平均せず併記。
- 導入開始2017-09-19と納品予定2017-09-18は定義差でありCONFLICTではない。

## sources
取得日: 2026-09-10
- グリーンべると（2017-09-06業界記事 / 設定1段階 / 合算約1/129 / 出玉率最大約102% / BIG平均約318枚 / REG平均約110枚 / 納品9/18予定）: https://web-greenbelt.jp/00009872/
- HAZUSE（型式・検定番号・導入日 / 合算約1/129 / BIG:REG 6:4 / 天井非搭載 / 最大321・116枚）: https://hazuse.com/machine/pachislot/7S0941/
- P-WORLD（山佐 / ノーマル完全告知・技術介入 / 最大321・116枚）: https://www.p-world.co.jp/machine/database/8507
- K-Navi（導入日 / 完全告知 / 合算約1/129 / 最大321・116枚）: https://p-kn.com/slot/2882/
- ちょんぼりすた（設定Y / BIG1/216・REG1/324・合算1/129 / 27G/50枚 / フル攻略102% / 天井なし / 平均・最大獲得枚数）: https://chonborista.com/slot/yamasa-slot/44553/
- 2-9伝説（BIG1/216・REG1/324・合算1/129 / 27G/50枚 / フル攻略102% / 天井なし）: https://29den.com/wonderqoo/
- Re.design（通常掲載出率98% / フル攻略102% / 27.0G/千円 / 平均・最大獲得枚数 / 最短納期9/18）: https://www.redesign777.tokyo/Spec/SlotView?flag=0&id=S2017080912003501
- スロット解析情報~すろかい~（当時解析 / 通常掲載98% / BIG・REG・合算 / 約27G/50枚 / 平均・最大獲得枚数）: https://slotkaiseki.hatenablog.com/entry/wonder
