machineName: シンデレラブレイド3
manufacturer: ネット（NET）
releaseDate: 2017-09-19
recordNumber: 1141
generation: 5号機（5.5号機世代）
systemType: A+ART / リアルボーナス + ゲーム数上乗せ・継続抽選型ART
formalModelName: シンデレラ×ブレイド3／NI
certificationNumber: 7S0870
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- NET「シンデレラブレイド」シリーズ第3作。
- NETの2017-07-07発売発表は2017年9月中旬から全国導入予定。HAZUSE、ちょんぼりすた、P-WORLD、パチビーではホール導入日2017-09-19で一致するためcanonicalを2017-09-19とする。
- HAZUSEで型式 `シンデレラ×ブレイド3／NI`、検定番号 `7S0870` を直接確認。
reliability: OFFICIAL_RELEASE_PLUS_ANALYSIS_MULTI_SOURCE

## payoutRateBySetting
- 設定1: **97.0%**
- 設定2: **98.5%**
- 設定3: **100.0%**
- 設定4: **104.0%**
- 設定5: **110.0%**
- 設定6: **117.1%**
- HAZUSEとちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「真魂聖勝」初当たり
- 設定1: **1/307**
- 設定2: **1/285**
- 設定3: **1/270**
- 設定4: **1/223**
- 設定5: **1/181**
- 設定6: **1/159**

### 武闘会BONUS
- 設定1: **1/199**
- 設定2: **1/195**
- 設定3: **1/195**
- 設定4: **1/186**
- 設定5: **1/184**
- 設定6: **1/159**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約31.4G/50枚**。
- HAZUSE、ちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART単体: **約1.5枚/G**。
- ボーナス込み: **約2.0枚/G**。
- P-WORLD、ちょんぼりすたは定義を分けて掲載。HAZUSE/パチビーには約2.0枚/G表記があるため、本DBでは混同せず両定義を保持する。
reliability: DATABASE_PLUS_ANALYSIS_MULTI_SOURCE

## basicPayout
- 武闘会BONUS: **獲得102枚**。
- 連続おしりペンペンBONUS: **獲得102枚**。
- ART「真魂聖勝」: **初期40G**。ゲーム数上乗せ + ハートによる継続抽選型。
- 上乗せ特化「おしりペンペンタイム」: 平均上乗せ約100Gは比較補助値として保持。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はゲーム数テーブルに連動する低確/通常/高確/超高確があり、CZ抽選・CZポイント抽選に影響。
- 通常天井は **ART間777G+α相当**。777G到達後に当選したCZまたはボーナスでART濃厚となる特殊天井で、777G到達時点で即ARTではない。
- ボーナスでは天井ゲーム数がリセットされない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_PUBLIC_RESET_CEILING_DISTRIBUTION_AND_CURSE_POINT_TABLE
resetQaLastUpdated: 2026-09-10

### settingChangeBehavior
- 設定変更時は通常天井進捗をRESETし、**天井短縮抽選**を行う。
- 設定変更時に **呪いポイントを2〜9ptの範囲で再設定**する公開振り分けあり。
- 設定変更時の通常内部状態（低確/通常/高確/超高確）と液晶開始ステージは、HAZUSE・ちょんぼりすた・表記揺れ検索・型式検索まで再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_CEILING_AND_CURSE_POINTS / UNVERIFIED_FOR_START_STATE_AND_STAGE

### carryOverBehavior
- 据え置き時は設定変更を行わないため天井進捗を引き継ぐ契約として扱う。純電源OFF→ONの直接比較でも天井引継ぎが明記される。
- 内部状態、CZポイント、呪いポイントについて「据え置き」と明記した本機固有の独立契約は再探索後も直接固定できず、純電断契約から推測転記しない。
reliability: ANALYSIS_HIGH_FOR_CEILING / UNVERIFIED_AFTER_RESEARCH_FOR_OTHER_INTERNAL_VALUES

### powerCycleBehavior
- 純電源OFF→ON: **天井ゲーム数CARRYOVER**。
- 内部状態と液晶ステージは当時解析で「調査中」のまま残っており、後続資料・表記揺れ検索でも直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_CEILING / UNVERIFIED_FOR_STATE_AND_STAGE

### gameCounterReset
- settingChange: **RESET + SHORTENING_RESELECT**。
- stay setting: **CARRYOVER**。
- pure power OFF→ON: **CARRYOVER**。
- 通常天井はART間管理。ボーナス当選だけでは天井進捗をクリアしない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- normalCeiling: **777G到達後に当選したCZまたはボーナスでART濃厚**。
- 設定変更時の公開短縮量振り分け（全設定共通）:
  - 0G短縮: **4.7%**
  - 128G短縮: **45.3%**
  - 256G短縮: **29.7%**
  - 384G短縮: **14.8%**
  - 640G短縮: **5.5%**
- これは「天井G数そのもの」の振り分けではなく、777Gから差し引く短縮量。例: 256G短縮なら内部天井到達は約521G。
- HAZUSEは同数値を設定変更時天井G数振り分けと表記するが、ちょんぼりすたは短縮量と明示。数値自体は一致し、定義については後者をcanonicalとする。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_DEFINITION_CLARIFICATION

### modeAfterReset
- 通常時のゲーム数テーブルは存在するが、設定変更専用モード振り分けは直接確認できず **UNVERIFIED_AFTER_RESEARCH**。
- 天井短縮によって朝一の内部到達位置が変化し、結果として通常より早い天井到達が発生する。
reliability: UNVERIFIED_FOR_RESET_MODE / ANALYSIS_HIGH_FOR_SHORTENING

### stateAfterReset
- settingChange: **UNVERIFIED_AFTER_RESEARCH**。
- pure power OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。
- 低確/通常/高確/超高確の存在自体は確認済みだが、設定変更・純電断時の開始状態を推測で固定しない。
reliability: UNVERIFIED_AFTER_RESEARCH

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時は天井が短縮され、短縮量128G以上が **95.3%**、256G以上が **50.0%**、384G以上が **20.3%**、640G短縮が **5.5%**。
- 640G短縮選択時は内部天井到達が約137G相当となる。
- 設定変更時は呪いポイントを **2〜9pt**から均等に再設定し、各 **12.5%**。平均 **5.5pt**。呪いポイントは10pt到達で呪いOPTへつながるため明確な朝一恩恵。
reliability: ANALYSIS_HIGH_WITH_PUBLIC_NUMERIC_TABLES

### resetPenalties
- 前日の天井進捗は設定変更で失われる。
- 前日内部状態/CZポイント/呪いポイントがどう扱われるかは、呪いポイントについては設定変更時に新規2〜9pt再設定が確認できるため前日値は保持されない。
- その他の内部値について固定的な追加不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_CEILING_AND_CURSE_POINTS

### resetDetection
- 本機固有の確定的なガックン契約、変更後専用開始ステージ、表示リセットによる確定判別は、`シンデレラブレイド3 / シンデレラ×ブレイド3／NI / NET / 設定変更 / リセット / 据え置き / 電源OFF ON / 朝一 / ガックン / リールガックン / ステージ` を組み合わせて再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 朝一の短縮天井挙動は変更推測材料になり得るが、短縮量0Gが4.7%あり、CZ/ボーナス待ちで発動する特殊天井でもあるため deterministic な変更判別には用いない。
reliability: UNVERIFIED_FOR_DETERMINISTIC_DETECTION

### numericResetData
- normalCeilingBase: **777G**
- resetCeilingShortening: **0G=4.7% / 128G=45.3% / 256G=29.7% / 384G=14.8% / 640G=5.5%**
- resetShorteningAtLeast128G: **95.3%**
- resetShorteningAtLeast256G: **50.0%**
- resetShorteningAtLeast384G: **20.3%**
- resetCursePoints: **2pt〜9pt each 12.5%, average 5.5pt**
- purePowerCycleCeiling: **CARRYOVER**
- resetStartState: **UNVERIFIED_AFTER_RESEARCH**
- resetStartStage: **UNVERIFIED_AFTER_RESEARCH**
- gakkun: **UNVERIFIED_AFTER_RESEARCH**

## missingFields
- 設定変更時の低確/通常/高確/超高確開始状態の直接契約。
- 純電源OFF→ON時の内部状態・CZポイント・呪いポイント・液晶ステージの直接契約。
- 本機固有ガックン発生条件/発生率/対策時挙動。
- 据え置き時の内部状態/CZポイント/呪いポイントを明記した独立資料。

## conflicts
- 重大な性能数値CONFLICTなし。
- ART純増は `ART単体約1.5枚/G` と `ボーナス込み約2.0枚/G` の定義差。平均せず分離保存。
- HAZUSEの設定変更天井表は短縮値を「天井G数振り分け」と読める表現だが、ちょんぼりすたは同数値を777Gから差し引く「短縮ゲーム数」と明示。実用契約は短縮量として保存。

## sources
取得日: 2026-09-10
- NETプレスリリース（Dream News、発売発表/9月中旬導入予定/102枚BONUS）: https://www.dreamnews.jp/press/0000156198
- PiDEA X（2017-07-07業界記事/A+ART/純増約2.0枚/G/102枚BONUS）: https://www.pidea.jp/articles/%E6%96%B0%E5%9F%BA%E6%BA%96%E6%A9%9F%E3%81%A7%E3%82%82%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%E6%9C%80%E5%BC%B7%E3%80%8C%E3%82%B7%E3%83%B3%E3%83%87%E3%83%AC%E3%83%A9%E3%83%96%E3%83%AC%E3%82%A4%E3%83%893%E3%80%8D%EF%BC%8F%E3%83%8D%E3%83%83%E3%83%88
- グリーンべると（2017-07-11発表/CZ約30%等）: https://web-greenbelt.jp/00009750/
- HAZUSE（型式/検定番号/導入日/性能コア/ベース/設定変更短縮表）: https://hazuse.com/machine/pachislot/7S0870/
- HAZUSE フリーズ・天井: https://hazuse.com/machine/pachislot/7S0870/genre/206/
- HAZUSE ART: https://hazuse.com/machine/pachislot/7S0870/genre/209/
- ちょんぼりすた（性能コア/天井/設定変更vs電源OFF→ON/短縮量/呪いpt）: https://chonborista.com/slot/net-slot/44428/
- P-WORLD（ART初期40G/ボーナス込純増2.0枚/G/102枚BONUS）: https://www.p-world.co.jp/machine/database/8457
- パチビー（導入日/5号機ART/ボーナス込純増2.0枚/G）: https://www.pachibee.jp/movies/index/14062
- 期待値見える化（ART単体純増1.5枚/G・初期40G補助照合）: https://slotjin.com/zone/cinderella3/
