machineName: トロピカルKISS ビターVer.
manufacturer: ハイライツ・エンタテインメント
releaseDate: 2017-09-19
recordNumber: 1144
generation: 5号機（5.5号機世代）
systemType: A+SRT / ボーナス+ART系SRT
formalModelName: トロピカルキス ビター／HA
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- ハイライツ・エンタテインメントが2017-07-25に発表した「トロピカルKISS」のビター仕様。スウィートVer.とは同時期に投入された別スペックのため独立レコード化する。
- ちょんぼりすた、K-Navi、パチ7、複数解析資料でホール導入 **2017-09-19** が一致。
- 検定通過資料には `トロピカルキス ビター／HA` と `トロピカルキス ビター／HC` の2型式が確認できる。後年の実機流通資料で実機を `／HA` と直接表記しているため、本レコードの市場流通型式は **`／HA`** をcanonicalとし、`／HC` は **APPROVED_VARIANT_NOT_CONFIRMED_AS_MARKETED_SPEC** として分離保持する。
- 検定番号は機種名表記揺れ、`／HA`、`／HC`、ハイライツ、アイゲート、検定、7S、公安委員会等で再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。推測しない。
- メーカー表記は業界発表・K-Navi・パチ7・検定通過資料が **ハイライツ・エンタテインメント**。P-WORLDは **アイゲート** と掲載するため、メーカー/製造・販売主体の役割差を含む表記競合として保持する。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## payoutRateBySetting
- 設定1: **97.8%**
- 設定2: **98.7%**
- 設定3: **100.6%**
- 設定4: **104.5%**
- 設定5: **107.6%**
- 設定6: **112.6%**
- ちょんぼりすた、すろぱちくえすと等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### SUPER BIG BONUS
- 設定1: **1/689.9**
- 設定2: **1/668.7**
- 設定3: **1/624.2**
- 設定4: **1/560.1**
- 設定5: **1/512.0**
- 設定6: **1/461.5**

### BIG BONUS
- 設定1: **1/936.2**
- 設定2: **1/910.2**
- 設定3: **1/885.6**
- 設定4: **1/819.2**
- 設定5: **1/771.0**
- 設定6: **1/753.3**

### ALOHA BONUS / REG
- 設定1: **1/1236.5**
- 設定2: **1/1191.6**
- 設定3: **1/1129.9**
- 設定4: **1/1057.0**
- 設定5: **1/1057.0**
- 設定6: **1/1040.3**

### ボーナス合算
- 設定1: **1/300.6**
- 設定2: **1/291.3**
- 設定3: **1/276.5**
- 設定4: **1/253.0**
- 設定5: **1/238.3**
- 設定6: **1/224.4**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約32G/50枚**。
- ちょんぼりすた、すろぱちくえすとで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- SRT「トロピカルTIME」: **約0.3枚/G**。
- 2017年当時の業界発表、P-WORLD、解析資料で一致。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## basicPayout
- SUPER BIG BONUS: **300枚**
- BIG BONUS: **207枚**
- ALOHA BONUS: **108枚**
- SRT初期ゲーム数: **50G / 100G / 150G / 200G / 300G / 500G**、無限SRTあり。
- 業界発表はSRTを50〜500G+∞、P-WORLD・K-Navi・解析資料は各ボーナス獲得枚数を一致して掲載。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## modeSpecificMinimumData
- ボーナスとSRT「トロピカルTIME」で出玉を構成するA+SRT機。
- 通常時はアロハ館内→事務所→プラネタリウムの順に高確期待度が上昇する内部状態管理を持つ。
- 通常天井は **ボーナス&SRT間999G**。到達でSRTへ突入。
- SRT純増は約0.3枚/G。通常のRT的な維持性能に加え、ナビを用いるART的構造を「SRT」として訴求した機種。
reliability: INDUSTRY_PLUS_DATABASE_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_TABLE_CONFIRMED; DISTINCT_STAY_SETTING_AND_GAKKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-10

### settingChangeBehavior
- 設定変更時は **天井リセット / 内部状態リセット / アロハ館内ステージ開始**。
- ちょんぼりすたの朝一リセット表で、設定変更時と純電源OFF→ON時を直接比較して確認。
- 状態のリセット先について、低確/通常/高確の具体的な初期振り分け数値は公開資料から固定できていない。一般値から推測しない。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### carryOverBehavior
- 「設定変更なしの据え置き」を純電源OFF→ONと別条件で本機固有に明記した公開資料は、`据え置き / 朝一 / リセット / 天井引継ぎ / 状態引継ぎ`等へ検索語を変えて再探索しても固定できず **UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH**。
- ただし純電源OFF→ONについては、天井・状態・ステージの引継ぎが直接確認できる。これを独立した「据え置き」契約へ無条件転記しない。
reliability: UNVERIFIED_FOR_DISTINCT_STAY_SETTING / ANALYSIS_HIGH_FOR_POWER_CYCLE

### powerCycleBehavior
- 純電源OFF→ONのみの場合は **天井引継ぎ / 内部状態引継ぎ / ステージ引継ぎ**。
- 設定変更時とは明確に異なる。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### gameCounterReset
- settingChange: **RESET**。ボーナス&SRT間999G天井の進行をリセット。
- stay setting: **UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH**。
- pure power OFF→ON: **CARRYOVER**。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### ceilingAfterReset
- normalCeiling: **999G**（ボーナス&SRT間）。
- settingChange: 天井カウンタをリセットして0G相当から再開。
- resetShortening: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井は確認できず、通常999G契約を維持する。
- pure power OFF→ON: 前日の天井進行を引き継ぐ。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 通常時の独立した「モード」再抽選テーブル、朝一専用モード、設定変更専用モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 公開資料で確認できるのは内部状態のリセット/引継ぎ契約であり、別のモード概念を推測追加しない。
reliability: ANALYSIS_HIGH_FOR_NO_SEPARATE_PUBLISHED_MODE_CONTRACT

### stateAfterReset
- settingChange: **RESET**。
- pure power OFF→ON: **CARRYOVER**。
- reset時の具体的な低確/高確/超高確振り分け数値: **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の天井短縮、朝一専用モード、高確確定、初当たり/CZ優遇率などの主要な数値恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更後はアロハ館内ステージ固定だが、これは状態リセットと表示契約であり、それ自体を出玉上の恩恵とは扱わない。
reliability: ANALYSIS_HIGH_FOR_RESET_TABLE / UNVERIFIED_NO_DEDICATED_BENEFIT_FOUND

### resetPenalties
- 設定変更で天井進行と内部状態がリセットされるため、前日までの天井進行や有利な内部状態を保持していた場合は失われる。
- ただし設定変更専用の固定的な追加不利抽選や数値ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_RESET_EFFECT / UNVERIFIED_NO_DEDICATED_PENALTY_RATE_FOUND

### resetDetection
- 設定変更時は **アロハ館内ステージ開始**、純電源OFF→ONは **前ステージ引継ぎ**。前日の終了ステージが把握できる場合は朝一の推測材料になり得るが、アロハ館内自体は通常ステージでもあるため確定判別とはしない。
- 本機固有の確定ガックン契約、ガックン発生率、初期出目/ランプによる確定判別は、`ガックン / 設定変更判別 / 朝一 / 据え置き / 電源OFF ON`等で再探索しても **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_STAGE_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
- normalCeiling: **999G**
- settingChangeCeilingCounter: **RESET_TO_START / normal max remains 999G**
- purePowerCycleCeilingCounter: **CARRYOVER**
- settingChangeStartStage: **アロハ館内ステージ**
- purePowerCycleStage: **CARRYOVER**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDedicatedModeDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- gakkun: **UNVERIFIED_AFTER_RESEARCH**

## missingFields
- 検定番号。
- `／HC`型式が実市場で独立流通したかどうかの確定資料。
- 純電源OFF→ONとは別条件として明記された「据え置き」契約。
- 設定変更時の具体的な内部状態振り分け。
- 本機固有の確定ガックン/初期出目/ランプ判別契約。

## conflicts
- manufacturer attribution: 業界発表・K-Navi・パチ7・検定通過資料は **ハイライツ・エンタテインメント**、P-WORLDはメーカー欄を **アイゲート** と掲載。製造/販売/ブランド主体の役割差の可能性があるため、平均・強制統合せず **MANUFACTURER_ATTRIBUTION_CONFLICT_OR_ROLE_SPLIT** として保持。
- formal model variants: `トロピカルキス ビター／HA` と `／HC` の双方が検定通過。実機流通資料で／HAを直接確認したため本市場レコードは／HAをcanonicalとし、／HCは **APPROVED_VARIANT_NOT_CONFIRMED_AS_MARKETED_SPEC** として保持。
- 性能コアの主要数値に重大な同一定義CONFLICTは確認されない。

## sources
取得日: 2026-09-10
- 遊技日本（2017-07-25業界発表 / ハイライツ・エンタテインメント / 2スペック / SRT約0.3枚/G / 50〜500G+∞）: https://yugi-nippon.com/pachinko-news/post-14018/
- パチビー（2017年発表記事 / 2スペック同時展開 / SRT）: https://www.pachibee.jp/pparticles/view/983
- K-Navi（導入2017-09-19 / ハイライツ / SBB300枚・BIG207枚・ALOHA約108枚）: https://p-kn.com/slot/2869/
- P-WORLD（ビターVer. / アイゲート表記 / SBB300・BIG207・ALOHA108枚 / SRT約0.3枚/G / 天井999G / 内部状態）: https://www.p-world.co.jp/machine/database/8472
- ちょんぼりすた（導入日 / 設定別ボーナス・機械割 / 32G/50枚 / 天井999G / 朝一設定変更・電源OFF→ON比較表）: https://chonborista.com/slot/high-enter/45615/
- すろぱちくえすと（導入日 / 設定別SBB・BIG・REG・合算・機械割 / 32G/50枚 / 0.3枚/G / 獲得枚数）: https://www.slopachi-quest.com/article/tropicalkiss-bitter/
- パチ7（導入2017-09-19 / ハイライツ / 天井999G）: https://pachiseven.jp/machines/5264/cutout/78
- 愛品館（中古実機流通資料 / `ハイライツ・エンタテインメント トロピカルキス ビター／HA` の実機表記）: https://www.aihin.co.jp/new/news-975352/
- パチ7ニュース（検定通過一覧 / `トロピカルキス ビター／HA`・`／HC` / ハイライツ）: https://pachiseven.jp/news/index/page%3A64
- ぱちんこドキュメント（2017-07-04検定通過回顧 / `／HA`・`／HC`）: https://pachinkolist.com/archives/51625030.html
