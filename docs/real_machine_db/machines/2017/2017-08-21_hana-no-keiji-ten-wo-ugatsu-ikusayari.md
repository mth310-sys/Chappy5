machineName: 戦国パチスロ花の慶次～天を穿つ戦槍～
manufacturer: EXCITE（エキサイト）
releaseDate: 2017-08-21
recordNumber: 1121
generation: 5号機
systemType: ART / CZ / 周期抽選 / ボーナス非搭載
formalModelName: 花の慶次～天を穿つ戦槍～T
certificationNumber: 7S0422
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 2017-06-07のニューギンプレス発表会をグリーンべると/PiDEA Xが報道。開発・販売文脈ではニューギン名義が前面に出る一方、型式上の製造者はEXCITE。
- P-WORLDは本機のメーカーをエキサイトと記載。
- ホール導入日はちょんぼりすた、2017年8月7日付週刊アミューズメントジャパン、PiDEA Xの納品8/20～記述から **2017-08-21** をcanonicalとする。
- p-mediaの検定通過記事で型式名 **花の慶次～天を穿つ戦槍～T** を確認。
- 鹿児島県公安委員会告示第59号（2017-05-30）で回胴式遊技機 **花の慶次～天を穿つ戦槍～T / 株式会社EXCITE / 検定番号7S0422** を直接確認。
reliability: OFFICIAL_PUBLIC_NOTICE_FOR_MODEL_AND_CERTIFICATION / INDUSTRY_HIGH_FOR_RELEASE_AND_PRODUCT_IDENTITY

## payoutRateBySetting
- 設定1: **98.5%**
- 設定2: **99.2%**
- 設定3: **100.7%**
- 設定4: **103.3%**
- 設定5: **107.0%**
- 設定6: **110.1%**
- PiDEA X、ちょんぼりすた、後年整理資料で一致。
reliability: INDUSTRY_HIGH / ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART初当たり
- 設定1: **1/431.3**
- 設定2: **1/419.7**
- 設定3: **1/398.7**
- 設定4: **1/357.3**
- 設定5: **1/330.1**
- 設定6: **1/306.3**
- PiDEA X掲載値（整数丸め 1/431, 420, 399, 357, 330, 306）とちょんぼりすた精密値は丸め差として整合。

### CZ「皆朱の刻」突入率
- 設定1: **1/671.7**
- 設定2: **1/598.4**
- 設定3: **1/671.1**
- 設定4: **1/605.1**
- 設定5: **1/683.1**
- 設定6: **1/611.2**
- ART期待度: **44.5 / 44.6 / 44.9 / 45.0 / 45.3 / 45.5%**。
reliability: ANALYSIS_HIGH_FOR_ART / ANALYSIS_SINGLE_HIGH_FOR_CZ_TABLE

## baseGamesPer50
- **約47G/50枚**。
- PiDEA X、ちょんぼりすた、期待値見える化で一致。
reliability: INDUSTRY_HIGH / ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「大合戦BONUS」: **約2.0枚/G**。
reliability: INDUSTRY_HIGH / ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ART「大合戦BONUS」: **1セット平均約50G、最大100G**。
- セット継続＋ストック型。ボーナス非搭載。
reliability: INDUSTRY_HIGH / ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はゲーム数下2桁87Gを軸とする花周期抽選。
- 通常天井: **12周期目到達（液晶1187G）後の前兆でART**。
- 天井恩恵: **ART初当たり＋ストック1個**。
- CZ「皆朱の刻」: 10G、ART期待度約45%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_RESET_TABLE_AND_NUMERIC_MODE_DISTRIBUTION
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- **天井ゲーム数RESET**。
- **内部モード再抽選**。
- **内部状態RESET / 再セット**。
- 液晶は **桜並木ステージ**。
reliability: ANALYSIS_HIGH_DIRECT_TABLE

### carryOverBehavior
- 据え置き独立表は直接固定できなかったため、純電源OFF→ON表を機械的に「据え置き契約」とは転記しない。
- explicit stay-setting contract: **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior
- 純電源OFF→ONでは **天井ゲーム数CARRYOVER / モードCARRYOVER / 状態CARRYOVER**。
- 液晶は **桜並木ステージ**。
reliability: ANALYSIS_HIGH_DIRECT_TABLE

### gameCounterReset
- 設定変更: **RESET**。
- 純電源OFF→ON: **CARRYOVER**。
reliability: ANALYSIS_HIGH_DIRECT_TABLE

### ceilingAfterReset
- 通常の12周期/液晶1187G天井は設定変更でリセット。
- 「固定○G短縮天井」ではない。
- ただし設定変更時は天国25%が選択されるため、1周期目でART確定となるケースが存在。
- 実戦集計ではリセット後の初回周期到達が通常より約30～40G早く、**70～100G前後に集中 / 平均約50G前後で周期到達**との観測がある。これは実戦値・推定を含むため `OBSERVATIONAL_RESET_CYCLE_OFFSET` として解析確定値と分離する。
reliability: ANALYSIS_HIGH_FOR_MODE_EFFECT / OBSERVATIONAL_FOR_CYCLE_OFFSET

### modeAfterReset
- 設定変更時モード振り分け:
  - 通常A: **33%**
  - 通常B: **25%**
  - 天国準備: **17%**
  - 天国: **25%**
- 天国選択時は **1周期目でART確定**。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_TABLE

### stateAfterReset
- 設定変更: **状態RESET**。
- 純電源OFF→ON: **状態CARRYOVER**。
- 高確/低確等の設定変更専用数値振り分けは、表記揺れ・型式・メーカー・朝一/リセット/状態語で再探索したが今回直接固定できず **UNVERIFIED_AFTER_RESEARCH_FOR_NUMERIC_STATE_DISTRIBUTION**。
reliability: ANALYSIS_HIGH_FOR_RESET_VS_CARRYOVER / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- **天国25%**により1周期目ART確定の朝一恩恵。
- **天国準備17%**も通常A/Bとは異なる上位モードとして再抽選される。
- 実戦値では初回周期が通常時より前倒しされる傾向を確認するが、固定短縮値としては扱わない。
reliability: ANALYSIS_HIGH_FOR_MODE_DISTRIBUTION / OBSERVATIONAL_FOR_CYCLE_OFFSET

### resetPenalties
- 設定変更専用の主要不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 設定変更・純電断の双方で液晶が **桜並木ステージ** となるため、朝一ステージ単独では判別困難。
- ガックンは実機動画/観測上わずかなブレが指摘されるが、解析では **非常に難しい** とされ、確定判別契約にはしない。
- 前日最終ゲーム数を把握している場合、周期到達位置のズレが変更推測材料になりうるが、実戦値依存で確定判別ではない。
reliability: ANALYSIS_HIGH_FOR_STAGE / OBSERVATIONAL_FOR_GAKKUN_AND_CYCLE_POSITION

### numericResetData
- resetModeDistribution: **通常A33% / 通常B25% / 天国準備17% / 天国25%**
- resetHeavenOccurrenceRate: **25%**
- resetHeavenEffect: **1周期目ART確定**
- observedFirstCycleAfterReset: **70～100G前後に集中、平均約50G前後で周期到達との実戦観測**
- resetStateNumericDistribution: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- manufacturerLabel: 業界発表ではニューギン表記も多いが、公安委員会型式告示の製造者は **株式会社EXCITE**。DB manufacturer canonicalは型式上のEXCITEとし、ニューギンは販売/ブランド文脈として保持。
- ART初当たりの整数値と小数値は丸め精度差でありCONFLICTではない。
- reset cycle offsetは解析確定振り分けではなく実戦観測。固定短縮天井として扱わない。

## missingFields
- explicit stay-setting direct contract separate from pure power cycle: UNVERIFIED_AFTER_RESEARCH。
- setting-change internal-state numeric distribution: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific gakkun contract: UNVERIFIED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
- 鹿児島県公安委員会告示第59号（県公報 2017-05-30）: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1705/documents/59374_20170529164319-1.pdf
- パチマガスロマガ 遊技機検定情報(5/25): https://cs62.cs-plaza.com/g/pachi/column/detail.php?mcl_cd=0098&mwr_cd=009&tac_cd=00039297&type=1
- p-media 検定通過記事: https://p-media.info/%E3%81%9B%E3%82%93%E3%81%9D%E3%81%86%EF%BC%9F%E3%81%84%E3%81%8F%E3%81%95%E3%82%84%E3%82%8A%EF%BC%9F%E3%82%A8%E3%82%AD%E3%82%B5%E3%82%A4%E3%83%88%E3%81%8B%E3%82%89%E3%80%8C%E8%8A%B1%E3%81%AE%E6%85%B6/
- グリーンべると/P-WORLD 発表会: https://news.p-world.co.jp/articles/9347/greenbelt
- PiDEA X 発表会: https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%80%8C%E6%85%B6%E6%AC%A1%E3%80%8D%E6%9C%80%E6%96%B0%E4%BD%9C%E3%81%AF%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%82%BA%E3%81%8C%E5%8D%94%E5%8A%9B%EF%BC%8F%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%AE%E3%83%B3
- PiDEA X 機械選定/納品日・スペック: https://pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E8%8A%B1%E3%81%AE%E6%85%B6%E6%AC%A1%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- 週刊アミューズメントジャパン 2017-08-07号: https://www.niraku.co.jp/news/assets/672e550adb59a8b13acc9b7d7a0d1f9b045c7b45.pdf
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/8436
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/41213/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_hananokeiji_ten/3/
- 一撃 モード移行抽選: https://1geki.jp/slot/s_hananokeiji_ten/42/
- 一撃 CZ「皆朱の刻」: https://1geki.jp/slot/s_hananokeiji_ten/43/
- 期待値見える化 リセット挙動/実戦値: https://slotjin.com/slot/keiji4-reset/
- 期待値見える化 天井: https://slotjin.com/zone/keiji4/
- すろぱちくえすと リセット解析: https://www.slopachi-quest.com/article/hananokeiji-ikusayari/
