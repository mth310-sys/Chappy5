machineName: パチスロ ロボットガールズZ
manufacturer: バルテック
releaseDate: 2017-08-21
recordNumber: 1119
generation: 5号機
systemType: ART / CZ搭載 / BR非搭載 / ゲーム数天井解析あり
formalModelName: パチスロロボットガールズZ/AB
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_CEILING_CONFLICT

## identity
- バルテック公式製品ページで「パチスロ ロボットガールズZ」を確認。
- パチビーの2017-07-04プレス発表会記事は **2017-08-21から導入予定** と明記。ちょんぼりすた、すろぱちくえすと、2017年導入日一覧も2017-08-21で一致。
- 型式名は検定通過記事・検定通過一覧・中古実機資料で **パチスロロボットガールズZ/AB** を複数照合。
- 検定番号は「パチスロロボットガールズZ/AB」「バルテック」「検定」「7S0」等へ検索語を変え、検定通過記事・古い機種DB・中古実機資料を横断したが番号そのものを直接固定できず、推定しない。
reliability: OFFICIAL_FOR_PRODUCT / INDUSTRY_HIGH_FOR_RELEASE / ANALYSIS_HIGH_MULTI_SOURCE_FOR_FORMAL_MODEL / UNVERIFIED_FOR_CERTIFICATION_NUMBER

## payoutRateBySetting
- 設定1: **97.5%**
- 設定3: **100.0%**
- 設定5: **105.5%**
- 設定7: **112.7%**
- P-WORLD、ちょんぼりすた、すろぱちくえすとで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「フルボッコRUSH」初当たり
- 設定1: **1/354.1**
- 設定3: **1/317.7**
- 設定5: **1/278.1**
- 設定7: **1/232.1**
- P-WORLD、ちょんぼりすた、すろぱちくえすとで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約46.6G/50枚**（資料により46.7G表記）。
- 46.6Gはちょんぼりすた・すろぱちくえすとで一致し、46.7Gは丸め差として別資料に存在。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_ROUNDING_DIFFERENCE

## netIncrease
- ART「フルボッコRUSH」: **約2.0枚/G**。
- バルテック発表会を報じたパチビー、ニッカンアミューズメント、P-WORLD、複数解析で一致。
reliability: INDUSTRY_HIGH_MULTI_SOURCE

## basicPayout
- ART「フルボッコRUSH」: **初期40G以上（40G+α）**。
- 解析資料では平均初期ゲーム数 **約55G** の記載もあるが、基本値と平均値を混同せず補助値として保持。
reliability: INDUSTRY_HIGH_FOR_40G_PLUS / ANALYSIS_SINGLE_FOR_AVERAGE_55G

## modeSpecificMinimumData
- 通常時はCZ「Z ZONE」等を経由してARTを目指すART機。
- 公開解析上の天井候補は **ART間777Gまたは1000G**、振り分け **777G 33.59〜33.6% / 1000G 66.40〜66.41%**。
- ただし当時/後年解析には **1000Gを超えてもARTへ入らない実戦例（1216G）** が明示され、「1000GでART確定」解析との競合がある。天井到達で確定CZ化する可能性も示唆されるが確定契約としては扱わない。
- よってDB上は `CONFLICT_CEILING_EFFECT_ART_DIRECT_VS_POSSIBLE_GUARANTEED_CZ_OR_ANALYSIS_ERROR` として保持し、朝一客AIで「1000G ART確定」を無条件の確定仕様にはしない。
reliability: CONFLICT_FOR_CEILING_EFFECT / ANALYSIS_HIGH_FOR_PUBLISHED_777_1000_DISTRIBUTION

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_NUMERIC_RESET_CEILING_AND_INTERNAL_STATE_DISTRIBUTION_CEILING_EFFECT_CONFLICT
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- **天井ゲーム数RESET / 再セット**。
- **内部状態RESELECT**。
- 設定変更後の開始ステージは **光子力研究所** とする解析あり。
- 天井再セット時も777G/1000Gの振り分けが行われるとする複数解析あり。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 「設定据え置き」と明記し、天井・内部状態・ステージを個別に説明する本機固有の独立資料は、機種名/型式名/メーカー名と「据え置き/朝一/天井/内部状態/電源」を組み替えて再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ONの引継ぎ情報を据え置き契約へ機械的に転記しない。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_EXPLICIT_STAY_SETTING_CONTRACT

### powerCycleBehavior
- 設定変更を伴わない **電源OFF→ONでは天井CARRYOVER / 内部状態CARRYOVER** とする解析表あり。
- 電断時の液晶ステージ復帰契約は直接固定できず推測補完しない。
reliability: ANALYSIS_HIGH_FOR_CEILING_AND_STATE / UNVERIFIED_FOR_STAGE

### gameCounterReset
- 設定変更: **RESET / 天井再セット**。
- 電源OFF→ON: **CARRYOVER**。
- 据え置き独立契約: **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### ceilingAfterReset
- 設定変更時の公開振り分け:
  - **777G: 33.59〜33.6%**
  - **1000G: 66.40〜66.41%**
- すろぱちくえすとは「約1/3で223G短縮」と整理。
- ただし前述の通り1000G超え実戦例があり、`1000G到達=ART直撃確定` の恩恵定義は **CONFLICT**。数値振り分け自体と、到達時の最終恩恵を分離して保存する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_DISTRIBUTION / CONFLICT_FOR_EFFECT

### modeAfterReset
- 独立した「朝一専用モード」または通常モード体系の設定変更時振り分けは、検索語を変えて再探索したが直接固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 公開されているのは低確/高確/超高確の内部状態振り分けであり、別のモード振り分けとして水増ししない。
reliability: NONE_CONFIRMED_AFTER_RESEARCH

### stateAfterReset
- 設定変更時の内部状態振り分け（全設定共通）:
  - 低確: **79.69%（約79.7%）**
  - 高確: **19.53%（約19.5%）**
  - 超高確: **0.78%（約0.8%）**
- 電源OFF→ONでは内部状態CARRYOVER。
- 通常時の高確/超高確はCZまたはART当選まで転落しないとする解析あり。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時に約1/3で **777G天井側が選択される公開解析**があり、1000G側に対して223G短縮となる。
- ただし天井到達時の恩恵定義自体にCONFLICTがあるため、「777GでART確定」という強い確定恩恵としては扱わない。
- 高確以上スタート率は **20.31%**（高確19.53%+超高確0.78%）。
reliability: ANALYSIS_HIGH_WITH_CEILING_EFFECT_CONFLICT

### resetPenalties
- 設定変更専用の確定的な不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 設定変更後は光子力研究所開始とする解析があるが、純電断時のステージ契約を固定できないため、ステージ単独を確定変更判別には使わない。
- 本機固有のガックン、ランプ、初期出目による確定的な変更判別は「ロボットガールズZ/AB」「バルテック」「ガックン/リール/朝一/設定変更」で再探索後も直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: NONDETERMINISTIC_FOR_STAGE / UNVERIFIED_FOR_GAKKUN

### numericResetData
- resetCeilingDistribution:
  - 777G: **33.59〜33.6%**
  - 1000G: **66.40〜66.41%**
- resetInternalStateDistribution:
  - 低確: **79.69%**
  - 高確: **19.53%**
  - 超高確: **0.78%**
- resetHighOrSuperHighStartRate: **20.31%**
- publishedMorningHitRateWithinFixedGames: **NONE_CONFIRMED_AFTER_RESEARCH**

## conflicts
- ceilingEffect: 解析資料は **ART間777G/1000G到達でART当選** とする一方、すろぱちくえすとおよびちょんぼりすたは **1000Gを超えて1216Gまで通常時が継続した実戦例**を提示。`CONFLICT_CEILING_EFFECT_ART_DIRECT_VS_POSSIBLE_GUARANTEED_CZ_OR_ANALYSIS_ERROR` として平均化・断定しない。
- baseGamesPer50: **46.6G / 46.7G** は丸め差として保持し、実質競合扱いにはしない。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH。
- explicit stay-setting contract distinct from pure power cycle: UNVERIFIED_AFTER_RESEARCH。
- power-cycle start-stage contract: UNVERIFIED_AFTER_RESEARCH。
- deterministic reset detection / machine-specific gakkun: UNVERIFIED_AFTER_RESEARCH。
- separate morning-only mode distribution beyond low/high/super-high state: NONE_CONFIRMED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
- バルテック公式製品ページ: https://www.baltec.co.jp/product/nb2.html
- バルテック公式プレスリリース一覧: https://www.baltec.co.jp/press/press.html
- パチビー プレス発表会: https://www.pachibee.jp/pparticles/view/974
- ニッカンアミューズメント: https://www.nikkansports.com/amusement/pachinko/news/1853731.html
- グリーンべると: https://web-greenbelt.jp/00009739/
- P-WORLD: https://www.p-world.co.jp/machine/database/8447
- ちょんぼりすた: https://chonborista.com/slot/baltec/42647/
- すろぱちくえすと: https://www.slopachi-quest.com/article/robot-girls-z/
- 楽スロ 天井記事: https://rakuslo.com/robotgirl-tenjyo.html
- P-MEDIA 検定通過: https://p-media.info/%E3%83%9E%E3%82%B8%E3%83%B3%E3%82%AC%E3%83%BC%EF%BD%9A%E7%AD%89%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E3%81%9F%E3%81%A1%E3%81%8C%E7%BE%8E%E5%B0%91%E5%A5%B3%E3%81%AB/
- すろ・ぱち(解) 検定通過一覧: https://kaiseki.sulopachinews.com/archives/2352
- pachinko’s blog 型式整理: https://pachinko.hatenablog.jp/archive/category/%E3%83%90%E3%83%AB%E3%83%86%E3%83%83%E3%82%AF?orderBy=popular
- 中古実機型式補助: https://store.shopping.yahoo.co.jp/nakaiticom/20249.html
