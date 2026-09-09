machineName: パチスロ 世界でいちばん強くなりたい！
manufacturer: 藤商事
releaseDate: 2017-08-07
recordNumber: 1117
generation: 5号機
systemType: ART / BR非搭載 / 周期ポイント管理 / CZ搭載
formalModelName: 世界でいちばん強くなりたい！FSA
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT_2017_08_07_VS_2017_08_MID_OR_08_20_21

## identity
- 藤商事公式現存ページでパチスロ版「世界でいちばん強くなりたい！」の存在・メーカーを一次確認。
- K-Navi、ちょんぼりすた、パチスロデータ、パチ7はホール導入を **2017-08-07** と掲載するため、本DBのchronological canonicalは2017-08-07とする。
- 一方、PiDEA Xの2017-06-28当時業界記事は「8月中旬予定」、当時スペック紹介は「8月20日(日)～」、ALL7の後年カレンダーは「2017/08/21」とする。導入開始/納品/地域差の可能性を推測で統合せず、releaseDate CONFLICTとして全表記を保持する。
- 中古実機流通資料2系統で **世界でいちばん強くなりたい！FSA** の型式表記を確認。検定番号は「FSA / 世界でいちばん強くなりたい / 藤商事 / 7S / 検定番号」を組み替え、検定DB・業界記事・中古資料まで再探索したが直接固定できずUNVERIFIED_AFTER_RESEARCH。
reliability: OFFICIAL_FOR_MACHINE_EXISTENCE / ANALYSIS_HIGH_FOR_2017_08_07 / INDUSTRY_AND_CALENDAR_CONFLICT_FOR_LATER_AUGUST / ANALYSIS_MULTI_SOURCE_FOR_FORMAL_MODEL_SUFFIX

## payoutRateBySetting
- 設定1: **96.8%**
- 設定2: **98.2%**
- 設定3: **100.6%**
- 設定4: **103.8%**
- 設定5: **106.4%**
- 設定6: **110.2%**
- P-WORLD、ちょんぼりすた、すろぱちくえすと、当時スペック紹介で一致。
- 中古実機相場整理の「設定1=97.8%」は他の複数資料と競合するため平均せずCONFLICT_SECONDARY_SINGLE_97_8_PERCENTとして保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「悶ラッシュ」初当たり
- 設定1: **1/356.9**
- 設定2: **1/335.2**
- 設定3: **1/316.9**
- 設定4: **1/274.7**
- 設定5: **1/246.8**
- 設定6: **1/209.6**
- K-Navi、P-WORLD、ちょんぼりすた、すろぱちくえすと、パチスロデータで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約43G/50枚**（当時スペック紹介は約43.2G、ちょんぼりすた43G）。
- 周期100ptの平均消化ゲーム数71〜76Gは「50枚ベース」ではないため混同しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「悶ラッシュ」: **約1.7枚/G**。
- 藤商事内覧会を報じたPiDEA X、K-Navi、P-WORLD、複数解析で一致。
reliability: INDUSTRY_AND_ANALYSIS_HIGH

## basicPayout
- ARTはゲーム数固定獲得型ではなく「痛ぁ～い」ポイント管理。
- 基本1セットは **30G+α**。当時スペック紹介では1set平均獲得枚数約100枚、平均継続約4set、ART平均TY約400枚とする。
- K-Navi/PiDEA Xでは1セット30G+α、ART前半エピソード後に特化ゾーン→バトルという構成。
reliability: INDUSTRY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は悶ポイントによる周期抽選。平均100pt（約71〜76G）ごとにCZ/ART抽選。
- 通常モード天井: **1250pt**。解析上の平均ゲーム数目安は約900〜925G表記と、実践値約1100G前後表記があり、ポイント天井をcanonicalとしてゲーム数換算は参考値に分離。
- 250pt / 750ptはART抽選が優遇されるが、完全再現用の全周期抽選テーブルは収集対象外。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_NUMERIC_RESET_MODE_DISTRIBUTION_AND_POWER_CYCLE_CARRYOVER
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- **天井/悶ポイント進捗はリセット、内部モードは再抽選**。
- 設定変更後の内部モードは「通常 / リセット / 天国」の3種から抽選。
- リセットモード選択時は内部的に250pt加算された状態で始まり、規定pt天井は1000pt相当。
- 天国モード選択時は50ptでART当選となる。
- 朝一ステージは解析資料でテーマパークorトレーニングジム。期待値見える化は実戦上テーマパークを確認しているが、ステージ単独での確定変更判別にはしない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き専用表を独立して明記した資料は今回固定できないため、純電源OFF→ON表をそのまま据え置き契約へ推測転記しない。
- 前日の悶ポイント、内部モード、悶倍率等を設定据え置きのままどこまで保持するかの本機固有直接契約は **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_EXPLICIT_STAY_SETTING_CONTRACT

### powerCycleBehavior
- 設定変更を伴わない **電源OFF→ONでは天井進捗を引き継ぎ、内部モードも引き継ぐ**。
- 複数解析の朝一比較表で一致。
- 悶倍率その他の内部状態について純電断時の個別契約までは直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_CEILING_AND_MODE / UNVERIFIED_FOR_OTHER_INTERNAL_STATES

### gameCounterReset
- 設定変更: **RESET**（悶ポイント/天井進捗）。
- 電源OFF→ON: **CARRYOVER**。
- 据え置き独立契約: **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### ceilingAfterReset
- 通常最大1250ptに対し、設定変更後はモード抽選で天井が変化。
- 通常モード: **1250pt**。
- リセットモード: **1000pt相当**（内部250pt加算）。
- 天国モード: **50pt**。
- よってリセット後は固定短縮天井1本ではなく、モード振り分けを伴う可変天井として扱う。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- **RESELECT**。
- 設定変更時モード振り分け: 通常37.6% / リセット37.6% / 天国24.8%。
- 電源OFF→ON: **CARRYOVER**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset
- 通常/リセット/天国という主要モードはmodeAfterResetへ記録。
- 悶倍率状態など別内部状態の設定変更時リセット/再抽選、純電断時引継ぎ契約は、表記揺れ・「悶倍率 設定変更 / 据え置き / 電源OFF」を再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_NON_MODE_INTERNAL_STATES

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時は **24.8%で天国モード（50pt天井）**。
- **37.6%でリセットモード（内部250pt加算、実質1000pt天井）**。
- 合計62.4%は通常1250ptより天井条件が有利なモードだが、両者を同一の期待値へ平均化しない。
- 朝一0Gからの期待値プラス可能性を述べる解析もあるが、期待値額は条件依存のため性能DBには採用しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- リセットモードでは内部250pt加算の仕様上、期待値見える化は「朝一50ptで周期抽選を受けられない点」に注意とする。これは天国選択時の50pt当選とは別挙動。
- 設定変更専用のその他の確定的な出玉不利は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_SINGLE_FOR_PRACTICAL_CAUTION / NONE_CONFIRMED_FOR_OTHER_PENALTIES

### resetDetection
- 期待値見える化は **ガックン判別不可** と整理。
- 朝一ステージはテーマパークorトレーニングジム表記があり、実戦上テーマパーク報告もあるが、電源OFF→ONとの差を含む100%確定契約ではないため補助シグナルに留める。
- 本機固有のランプ/出目等による確定変更判別は再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_SINGLE_FOR_GAKKUN_NOT_USABLE / ANALYSIS_HIGH_FOR_STAGE_START_BUT_NONDETERMINISTIC

### numericResetData
- resetModeDistribution:
  - 通常: **37.6%**
  - リセット: **37.6%**
  - 天国: **24.8%**
- resetCeilingByMode:
  - 通常: **1250pt**
  - リセット: **1000pt相当（内部250pt加算）**
  - 天国: **50pt**
- publishedResetBenefitRate:
  - 天国選択: **24.8%**
  - リセットモード選択: **37.6%**
- publishedMorningHitRateWithinFixedGames: **NONE_CONFIRMED_AFTER_RESEARCH**（ポイント管理のため固定ゲーム数率へ換算しない）。

## conflicts
- releaseDate: K-Navi / ちょんぼりすた / パチスロデータ / パチ7は **2017-08-07**。PiDEA X当時記事は **8月中旬予定**、当時スペック紹介は **8月20日(日)～**、ALL7は **2017-08-21**。平均せず `CONFLICT_RELEASE_DATE_2017_08_07_VS_2017_08_MID_OR_08_20_21` として保持。chronological canonicalは複数機種個別DBが一致する2017-08-07。
- payoutRate setting1: 複数主要解析は **96.8%**、中古相場整理1系統のみ **97.8%**。canonicalは96.8%、97.8%は `CONFLICT_SECONDARY_SINGLE_PAYOUT_SETTING1_97_8`。
- netIncrease: 中古相場整理1系統に純増2.0枚/G表記があるが、藤商事内覧会を報じたPiDEA X、K-Navi、P-WORLD、複数当時解析が **約1.7枚/G** で一致するためcanonicalは1.7枚/G、2.0は `CONFLICT_SECONDARY_SINGLE_NET_INCREASE_2_0`。
- ceiling game-equivalent: 公式的な主値は1250pt。平均約900〜925Gと実践値約1100G前後があり定義/観測差なので、ゲーム数へ一本化しない。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH。
- explicit stay-setting contract distinct from pure power cycle: UNVERIFIED_AFTER_RESEARCH。
- non-mode internal state reset/carryover contract including 悶倍率: UNVERIFIED_AFTER_RESEARCH。
- deterministic reset detection signal: NONE_CONFIRMED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
- 藤商事公式: https://www.fujimarukun.co.jp/products/s_sekatsuyo/ — パチスロ版の公式機種ページ。
- PiDEA X 2017-06-28: https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%80%8C%E3%81%9B%E3%81%8B%E3%81%A4%E3%82%88%E3%80%8D%E3%81%AF%E7%97%9B%E3%81%81%EF%BD%9E%E3%81%84ART%EF%BC%8F%E8%97%A4%E5%95%86%E4%BA%8B — 内覧会、純増約1.7枚/G、1セット30G+α、8月中旬予定。
- K-Navi: https://p-kn.com/slot/2840/ — 8/7導入、ART初当たり、ART仕様、設定変更時ポイント抽選項目。
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/41739/ — 8/7、43G/50枚、機械割、ART初当たり、天井、設定変更/電断比較、リセットモード振り分け。
- P-WORLD: https://www.p-world.co.jp/machine/database/8442 — 5号機ART、純増約1.7枚/G、設定別ART確率/機械割。
- パチスロデータ: https://pachislo-data.com/fuji/47522 — 8/7、設定変更/電源ONOFF、モード振り分け、天井規定pt。
- 期待値見える化: https://slotjin.com/zone/sekatsuyo/ — 設定変更/電断比較、ガックン判別不可、実戦上朝一ステージ、天井実践値。
- すろぱちくえすと: https://www.slopachi-quest.com/article/sekaideichibantuyokunaritai/ — 設定別ART/機械割、1250pt天井。
- パチ7: https://pachiseven.jp/machines/5229/cutout/98 — 8/7導入、藤商事。
- 当時スペック紹介: https://pachinkopachisro.com/archives/50258654.html — 8/20納期表記、設定別ART/出率、43.2G/50枚、ART平均TY等。
- ALL7 2017年8月導入予定: https://www.all7.jp/plans/index/2017/08 — 8/21表記。
- 愛品館中古実機資料: https://www.aihin.co.jp/new/news-1002290/ — 型式末尾FSA表記。
- 中古相場整理: https://slot-kakaku.com/sekaide/ — 機械割設定1 97.8%、純増2.0枚/Gの競合値。
