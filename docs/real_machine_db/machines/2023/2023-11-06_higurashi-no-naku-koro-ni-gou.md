# L ひぐらしのなく頃に 業

recordNo: 1602
machineName: L ひぐらしのなく頃に 業
manufacturer: ディ・ライト（大一商会グループ）
formalModel: Lパチスロひぐらしのなく頃に業SS
inspectionCode: 3S0262
releaseDate: 2023-11-06
generation: 6.5号機 / スマスロ
systemType: A+ART / 技術介入 / 完走型ART
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## payoutRateBySetting

### 市場掲載/通常攻略時
- 設定1: 96.5%
- 設定2: 97.6%
- 設定3: 99.7%
- 設定4: 101.6%
- 設定5: 103.4%
- 設定6: 105.3%

### 完全攻略時
- 設定1: 103.0%
- 設定2: 104.3%
- 設定3: 106.2%
- 設定4: 109.1%
- 設定5: 113.4%
- 設定6: 114.9%

- フィールズ発表系と「なな徹」で一致。
- 一部二次資料に通常攻略値を1.0pt低く `95.5/96.6/98.7/100.6/102.4/104.2%` とする表があるため、平均化せずCONFLICTとして保持する。
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting

### ボーナス合算
- 設定1: 1/196.8
- 設定2: 1/192.2
- 設定3: 1/188.3
- 設定4: 1/184.1
- 設定5: 1/180.0
- 設定6: 1/176.2

### BIG合成 / REG
- 設定1: BIG 1/381.0 / REG 1/407.1
- 設定2: BIG 1/372.4 / REG 1/397.2
- 設定3: BIG 1/366.1 / REG 1/387.8
- 設定4: BIG 1/358.1 / REG 1/378.8
- 設定5: BIG 1/350.5 / REG 1/370.3
- 設定6: BIG 1/343.1 / REG 1/362.1

信頼度: INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 約34G/50枚
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- ART「運命の解」: 約0.9枚/G
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- オヤシロBIG: 約260枚
- BIG: 約203枚
- REG: 約56枚
- ボーナス後はCZ「運命分岐モード」へ移行。
- ARTは完走型。通常のARTゲーム数はCZ結果等により30G / 50G / 90G等。
信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はリアルボーナス当選またはCZ間規定ゲーム数到達からCZ「運命分岐モード」へ。
- CZ周期は200Gまたは400G。CZ終了時の技術介入結果等で次周期が決まる。
- CZでは技術介入によりARTゲーム数または次回CZ周期が優遇される。
- ART「運命の解」は純増約0.9枚/Gの完走型。
- 上位要素として次回ボーナスまでARTが継続する「∞モード」を搭載。
信頼度: INDUSTRY / ANALYSIS_HIGH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: CONFLICT_ON_GAME_COUNTER_RESET_WITH_PARTIAL_POWER_CYCLE
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 有利区間: RESET（なな徹）。
- 内部状態: RESET（なな徹・ちょんぼりすたで一致）。
- CZ周期/天井ゲーム数: 情報源間でCONFLICT。なな徹はRESET、ちょんぼりすたは設定変更でもCARRY_OVERと明記。
- 表示ステージ: 昼ステージ開始との解析あり。
信頼度: ANALYSIS_HIGH / GAME_COUNTER_CONFLICT

### carryOverBehavior
- 据え置き: 有利区間CARRY_OVER、天井/CZ周期CARRY_OVER、内部状態CARRY_OVER（なな徹）。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみ: ちょんぼりすたではCZ周期/天井CARRY_OVER、内部状態CARRY_OVER、昼ステージ開始。
- 有利区間そのものの純電源OFF→ON時契約は、今回確認できた機種固有資料では独立に固定できずUNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_SINGLE / PARTIAL

### gameCounterReset
- 設定変更: CONFLICT。
  - なな徹: RESET。
  - ちょんぼりすた: CARRY_OVER。
- 据え置き: CARRY_OVER。
- 電源OFF→ONのみ: CARRY_OVER（ちょんぼりすた）。
- 競合は平均化・多数決せず双方を保持する。
信頼度: CONFLICT

### ceilingAfterReset
- 通常CZ周期上限: 400G（200Gまたは400G）。
- 設定変更後の固定短縮天井: NONE_CONFIRMED。
- 設定変更時に周期進行をリセットするか自体が資料競合のため、朝一専用短縮としては固定しない。
信頼度: ANALYSIS_HIGH / CONFLICT_ON_RESET_POINT

### modeAfterReset
- CZ周期は200G/400Gで、通常時の全モード移行表に相当する朝一専用モード振り分けはNONE_CONFIRMED_AFTER_RESEARCH。
- 設定変更専用の200G/400G振り分け公開値は確認できず。
信頼度: UNVERIFIED_AFTER_RESEARCH

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: CARRY_OVER。
- 電源OFF→ONのみ: CARRY_OVER（ちょんぼりすた）。
- 設定変更後の通常/高確/超高確の具体的初期振り分け率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / UNVERIFIED_NUMERIC

### advantageousSectionReset
- 設定変更: RESET（なな徹）。
- 据え置き: CARRY_OVER（なな徹）。
- 電源OFF→ONのみ: UNVERIFIED_AFTER_RESEARCH。
- 有利区間ランプによる設定変更/据え置き判別は不可。
信頼度: ANALYSIS_HIGH / PARTIAL_POWER_CYCLE

### resetBenefits
- 設定変更後の内部状態RESET以外に、固定短縮天井・朝一専用ART・専用初当たり優遇率などの定量的恩恵は今回確認できず。
- 周期ゲーム数の設定変更時処理がCONFLICTのため、「前日周期を引き継ぐこと自体が恩恵/不利」とは断定しない。
信頼度: CONFLICT / UNVERIFIED

### resetPenalties
- 設定変更により内部高確/超高確等の前日状態を失う可能性はあるが、朝一専用の定量的ペナルティ率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH（内部状態RESET） / UNVERIFIED（定量値）

### resetDetection
- 設定変更/電源OFF→ONとも昼ステージ開始とする解析があり、開始ステージ単独では変更判別困難。
- 有利区間ランプによる設定変更/据え置き判別不可。
- CZ周期の設定変更時処理が資料競合のため、中途半端なゲーム数でCZへ入ったことだけを据え置き確定材料にはしない。
- 本機固有のリールガックン条件・発生率は表記揺れ/型式を含め再探索したが、高信頼固定情報を確認できずUNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / CONFLICT / UNVERIFIED_GACKUN

### numericResetData
- 通常CZ周期: 200G or 400G。
- 設定変更時専用の200G/400G振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 朝一○G以内当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- リセット恩恵発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 固定短縮天井: NONE_CONFIRMED。
- 設定変更専用モード振り分け: NONE_CONFIRMED。
- 朝一当選率/期待度: NONE_CONFIRMED。

## conflicts
1. 設定変更時のCZ周期/天井ゲーム数: なな徹はRESET、ちょんぼりすたはCARRY_OVER。直接競合のため `CONFLICT` とし、平均化・推測補完しない。
2. 通常攻略時機械割: フィールズ発表系・なな徹 `96.5/97.6/99.7/101.6/103.4/105.3%` に対し、一部二次資料は各設定ほぼ1.0pt低い値。前者をcanonical、後者をCONFLICT_SECONDARY_VALUEとして保持。

## missingFields
- 設定変更時CZ周期/ゲーム数処理の競合解消となる一次または独立高信頼資料。
- 純電源OFF→ON時の有利区間そのものの機種固有契約。
- 設定変更時の内部状態初期振り分け率。
- 本機固有ガックン条件/発生率。
- 公開朝一当選率・リセット恩恵率。

## sources
取得日: 2026-09-13
1. フィールズ発表 / 一撃リリース情報 — L ひぐらしのなく頃に 業
   - https://1geki.jp/repo/20230929fields/
   - 導入時期、ボーナス合算、通常/完全攻略機械割、A+ART、純増
   - reliability: INDUSTRY
2. グリーンべると — 技術介入A＋ARTタイプのスマスロとなって登場
   - https://web-greenbelt.jp/post-77700/
   - 2023-11-06、ディ・ライト、A+ART、純増約0.9枚/G、各ボーナス獲得枚数
   - reliability: INDUSTRY_HIGH
3. グリーンべると — 検定通過
   - https://web-greenbelt.jp/post-75870/
   - 正式型式 `Lパチスロひぐらしのなく頃に業SS`
   - reliability: INDUSTRY_HIGH
4. HAZUSE DATA
   - https://data.hazuse.com/?detail_id=216144&genre=201&machine_code=3S0262
   - 検定系コード3S0262、導入日、基本仕様
   - reliability: OLD_DB_HIGH
5. P-WORLD
   - https://www.p-world.co.jp/machine/database/9927
   - BIG/REG/合算、200G/400G周期、CZ/ART構造
   - reliability: ANALYSIS_HIGH
6. パチ＆スロ必勝本
   - https://p.hisshobon.jp/vpage/2577/2
   - 導入日、ベース約34G/50枚、純増約0.9枚/G、ボーナス獲得枚数
   - reliability: ANALYSIS_HIGH
7. なな徹 — 朝一・設定変更時の挙動/有利区間
   - https://nana-press.com/kaiseki/machine/636/17515/
   - 設定変更: 有利区間/天井/内部状態RESET、据え置きCARRY_OVER、有利区間ランプ判別不可
   - reliability: ANALYSIS_HIGH
8. ちょんぼりすた — スマスロ ひぐらしのなく頃に業
   - https://chonborista.com/slot/d-light/196615/
   - 設定変更/電源OFF→ON時の天井CARRY_OVER、設定変更時内部状態RESET、電断時内部状態CARRY_OVER、昼ステージ
   - reliability: ANALYSIS_HIGH
9. なな徹 — 技術介入要素紹介
   - https://nana-press.com/post/1599234
   - 通常/完全攻略機械割
   - reliability: ANALYSIS_HIGH

## status
COMPLETE_CORE
