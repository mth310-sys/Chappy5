machineName: パチスロ ゼクスイグニッション
manufacturer: オリンピア
releaseDate: 2017-03-06
recordNumber: 1055
generation: 5号機 / 5.5号機期
systemType: ART / ゲーム数管理型ART / ボーナス非搭載
formalModelName: パチスロ ゼクスイグニッション／Z1
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_POWER_CONTRACT_CERT_UNVERIFIED

## identity
- 平和/オリンピアの業界発表でART特化型『パチスロ ゼクスイグニッション』を確認。複数当時解析・K-Naviでホール導入開始2017-03-06が一致するためcanonical releaseDateは2017-03-06。
- 当時解析系資料に型式表記 `パチスロゼクスイグニッション（Z/X IGNITION）/Z1` があり、formalModelNameは `パチスロ ゼクスイグニッション／Z1` とする。
- 検定番号は機種名/Z1/6S/検定/認定/オリンピア/平和、HAZUSE系・型式DB系へ検索語を変えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: INDUSTRY_FOR_PRODUCT; ANALYSIS_HIGH_MULTI_SOURCE_FOR_DATE_AND_PERFORMANCE; SECONDARY_ANALYSIS_FOR_FORMAL_MODEL; UNVERIFIED_FOR_CERTIFICATION

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.7% |
| 2 | 97.9% |
| 3 | 100.1% |
| 4 | 103.7% |
| 5 | 105.5% |
| 6 | 110.2% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/493.5 |
| 2 | 1/471.8 |
| 3 | 1/442.4 |
| 4 | 1/390.2 |
| 5 | 1/368.1 |
| 6 | 1/311.8 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約46G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「イグニッション・フェイズ」純増: 約2.0枚/G。
reliability: INDUSTRY_AND_MACHINE_DB_MULTI_SOURCE

## basicPayout
- ボーナス非搭載のART特化型。
- ART「イグニッション・フェイズ」はゲーム数上乗せ型、初当たり時は「神竜大戦」へ入り、初回最低40G保証。
- P-WORLDではARTを1セット40G以上+αとして整理。
reliability: INDUSTRY_AND_MACHINE_DB_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はモードA / モードBを持ち、規定ゲーム数とレア役でARTを抽選。
- モードA代表天井: 999G+前兆。
- モードB代表天井: 500G+前兆。当時資料には実消化上の表現として600G天井とする整理もあり、500G+前兆と600G表記の定義差を保持する。
- 通常時には通常/高確の内部状態が存在するが、設定変更時の高確開始率を示す直接数値は今回確認できていない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_SETTING_CHANGE_MODE_NUMERIC_WITH_POWER_CYCLE_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は通常時ゲーム数天井をRESETする資料系統が一致。
- 設定変更時はモードA/Bを再抽選し、高設定ほどモードB開始率が高い。
- 設定変更時の内部通常/高確状態の直接初期化契約は、十分再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_GAME_COUNTER_RESET_AND_MODE_RESELECT; UNVERIFIED_AFTER_RESEARCH_FOR_INTERNAL_STATE

### carryOverBehavior
- 設定据え置きについては、一般的な宵越し立ち回り資料から天井継続を示唆する記述はあるものの、本機固有の据え置き比較表を直接固定できなかったため、ゲーム数・モード・内部状態を一括でCARRYOVERとは断定せず `UNVERIFIED_AFTER_RESEARCH` を保持。
- 設定変更挙動から据え置き契約を逆算しない。
reliability: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior
- 純電源OFF→ONのみの場合のゲーム数天井、モードA/B、内部通常/高確の保持契約を直接記載した本機固有資料は、検索語・資料系統を変えた再探索でも固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時RESETから純電断時挙動を推定しない。
reliability: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- 設定変更: `RESET`。ART間の天井進捗は0G側から再開始。
- 据え置き: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE; UNVERIFIED_AFTER_RESEARCH_FOR_OTHERS

### ceilingAfterReset
- 設定変更後も通常のモード別天井契約を使用。
- モードA: 最大999G+前兆。
- モードB: 500G+前兆（資料によって600G天井表記）。
- 設定変更専用の固定短縮天井ではなく、リセット時モードB選択時に結果として浅い天井となる。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 設定変更時モードA/Bを再抽選。
- モードB振り分け: 設定1・2=25.0%、設定3・4=37.5%、設定5・6=50.0%。残りはモードA。
- これは公開朝一数値として保存し、内部高確状態振り分けとは混同しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_NUMERIC

### stateAfterReset
- 通常/高確の内部状態は存在する。
- 設定変更時の通常/高確初期振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き/純電源OFF→ON時の内部状態保持: `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_STATE_EXISTENCE; UNVERIFIED_AFTER_RESEARCH_FOR_RESET_CONTRACT

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更時はモードBが設定1/2でも25%、設定3/4で37.5%、設定5/6で50%選択され、モードBなら500G+前兆の浅い天井となる。
- 当時攻略マガジン由来の期待値引用では設定変更後100Gまでの設定1条件で期待収支+564円、機械割104.5%とする公開朝一参考値がある。ただし立ち回り期待値であり内部抽選率ではないため、性能コアとは分離する。
- 設定変更専用ART直撃確定、高確確定等: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更により前日ART間ゲーム数の天井進捗がRESETされるため、宵越し進捗は失われる。
- その他の設定変更専用主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 高設定ほど設定変更時モードB比率が高く、当選ゲーム数/前兆位置から変更・設定推測材料にはなるが確定判別ではない。
- 本機固有のリールガックン、初期出目、液晶表示、ランプ等による確定的設定変更判別は十分再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_MODE_BASED_INFERENCE; RESEARCH_EXHAUSTED_FOR_DETERMINISTIC_DETECTION

### numericResetData
- 設定変更時モードA/B:
  - 設定1: A 75.0% / B 25.0%
  - 設定2: A 75.0% / B 25.0%
  - 設定3: A 62.5% / B 37.5%
  - 設定4: A 62.5% / B 37.5%
  - 設定5: A 50.0% / B 50.0%
  - 設定6: A 50.0% / B 50.0%
- 設定変更後100Gまで打つ期待値（設定1・当時攻略マガジン引用条件）: +564.0円 / 機械割104.5%。内部当選率ではなく立ち回り参考値。
- リセット専用固定天井G数: `NONE`。モードB選択時の通常モード契約として500G+前兆。

## dataQualityNotes
- ART初当たり・機械割・50枚ベース・純増は独立した複数解析/機種DBで一致。
- モードB天井は「500G+前兆」と「600G」の表記差がある。前兆込みの到達表示差として平均化せず両方保持し、canonical説明は500G+前兆。
- 設定変更時モード振り分けは複数解析で一致する直接公開数値。
- 純電源OFF→ONおよび据え置きの本機固有契約は直接資料不足のため、5号機一般論から補完しない。
- formalModelName `/Z1` は当時解析系資料で確認できるが、検定番号は直接固定できずUNVERIFIED。

## conflicts
- `DEFINITION_DIFFERENCE_MODE_B_CEILING_500_PLUS_FOREWARNING_VS_600_DISPLAY`。
  - 500G+前兆: 当時解析資料。
  - 600G: 前兆込み/実消化上の整理をする資料。
  - 同一数値へ平均化しない。

## missingFields
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`。
- carryover / pure-power game-count, mode and internal-state contract: `UNVERIFIED_AFTER_RESEARCH`。
- setting-change internal normal/high distribution: `UNVERIFIED_AFTER_RESEARCH`。
- deterministic reset detection: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 実機完全再現用の全規定G振り分け/全高確移行/全ART上乗せ抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- INDUSTRY / グリーンべると via P-WORLD: https://news.p-world.co.jp/articles/8985/greenbelt
- MACHINE_DB / P-WORLD: https://www.p-world.co.jp/machine/database/8280
- ANALYSIS / ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/31673/comment-page-2/
- ANALYSIS / すろぱちくえすと: https://www.slopachi-quest.com/article/zxignition/
- ANALYSIS / スロットガーデン: https://xn--mckza4ard4ttb2d.com/zekusuigunissyon
- MACHINE_DB / K-Navi: https://p-kn.com/slot/2717/
- SECONDARY_FORMAL_MODEL / すろかい archive: https://slotkaiseki.hatenablog.com/archive/category/ART
