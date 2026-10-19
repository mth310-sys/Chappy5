machineName: ハイパーリノ
manufacturer: 山佐
releaseDate: 2017-06-19
recordNumber: 1096
generation: 5号機
systemType: ノーマル / Aタイプ / BIG+REG / 1段階設定 / 技術介入
formalModelName: ハイパーリノ／CC
certificationNumber: 7S0309
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 山佐公式現行アーカイブで「ハイパーリノ」、稼働時期2017年6月を確認。
- P-WORLDで型式 `ハイパーリノ／CC`、検定番号 `7S0309`、山佐、2017年06月導入を確認。
- パチビー、K-Navi、一撃、ちょんぼりすた、すろぱちくえすと、必勝本で2017-06-19導入を照合。
- グリーンべるとは2017-06-18を「納品開始」と記載しており、ホール導入開始2017-06-19とは定義差として扱う。
reliability: OFFICIAL_AND_MULTI_SOURCE_ANALYSIS

## payoutRateBySetting
### 設定Y（1段階設定）
- 完全攻略時: **101.00%**。
- 通常時フリー + ボーナス中MAX手順: **97.80%**。
- 通常時フリー + ボーナス中市場想定: **97.01%**。
- 通常時フリー + ボーナス中中押しフリー: **95.37%**。
- 通常時フリー + ボーナス中左押しフリー: **94.07%**。
- 必勝本・ちょんぼりすたは完全技術介入時101%を掲載。打ち方別の値はすろぱちくえすと掲載値として定義別に保持し、平均しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_FULL攻略 / ANALYSIS_SINGLE_FOR_PROCEDURE_SPLIT

## initialHitBySetting
### 設定Y
- BIG: **1/199**。
- REG: **1/199**。
- ボーナス合算: **約1/99〜1/99.5**。
- すろぱちくえすとは合算1/99.5、必勝本・山佐発表/業界記事系は約1/99表記。丸め精度差として保持。
reliability: INDUSTRY_AND_MULTI_SOURCE_ANALYSIS

## baseGamesPer50
- **約25G/50枚**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- NOT_APPLICABLE_NORMAL_TYPE_NO_AT_ART_RT_NET_INCREASE_METRIC。

## basicPayout
- BIG: **最大307枚**。
- REG: **最大90枚**。
- いずれもボーナス中に技術介入を1回成功させることで最大枚数を獲得可能。
reliability: OFFICIAL_INDUSTRY_AND_MULTI_SOURCE_ANALYSIS

## modeSpecificMinimumData
- 天井: **NOT_APPLICABLE_NO_CEILING**。
- AT/ART/CZ、ゲーム数解除モード、周期天井: **NOT_APPLICABLE**。
- 設定: **設定Yのみの1段階**。
reliability: OFFICIAL_AND_MULTI_SOURCE_ANALYSIS

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_SINGLE_SETTING_NO_CEILING_NO_RESET_ADVANTAGE_CONFIRMED
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 本機は**設定Yのみの1段階設定**であり、ホールの設定1〜6変更に相当する設定変更運用は `NOT_APPLICABLE_SINGLE_SETTING_MACHINE`。
- 天井、ゲーム数解除モード、AT/ART内部モードを持たないため、設定変更による天井短縮・モード優遇は `NOT_APPLICABLE`。
- 設定キー操作等による同一設定の初期化について、本機固有の客側に意味のある公開リセット契約は、機種名/型式/メーカー/シリーズ名と「設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン」を組み替えて再探索したが固定できなかった。
reliability: OFFICIAL_FOR_SINGLE_SETTING_AND_ANALYSIS_HIGH_FOR_NO_CEILING; UNVERIFIED_FOR_SAME_SETTING_INITIALIZATION

### carryOverBehavior
- 設定差・天井・ゲーム数解除モードがないため、前日ゲーム数を宵越して狙う天井恩恵は `NOT_APPLICABLE`。
- ボーナス後/通常時に翌朝の期待値を変える公開された専用モード・ポイント残量の引継ぎ契約は確認なし。
- ボーナス成立を跨ぐ等の実機内部詳細は物差しDBの対象外。
reliability: ANALYSIS_HIGH_FOR_NO_CEILING; NONE_CONFIRMED_AFTER_RESEARCH_FOR_MORNING_CARRYOVER_BENEFIT

### powerCycleBehavior
- 天井・ゲーム数解除モード・AT/ART状態は非搭載のため、それらの電源OFF→ON引継ぎは `NOT_APPLICABLE`。
- 純電源OFF→ONのみで朝一専用恩恵/不利が発生する本機固有の公開情報は、検索語・資料系統を変えた再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_NOT_APPLICABLE_SYSTEMS; UNVERIFIED_FOR_ANY_NON_PUBLIC_INTERNAL_STATE

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更/朝一専用の短縮天井なし。

### modeAfterReset
- ゲーム数解除モード/ATモード: **NOT_APPLICABLE**。
- 朝一専用モード、設定変更専用当選率優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- classic AT/ARTの低確/高確状態: **NOT_APPLICABLE**。
- 朝一客行動に影響する公開された設定変更専用内部状態は **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 天井短縮、朝一高確、CZ優遇、モード優遇、設定変更専用初当たり優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 1段階設定機のため「高設定へ変更された可能性」を狙う朝一行動自体が成立しない。

### resetPenalties
- 公開された設定変更/朝一専用の不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有の「朝一ガックン＝設定変更/据え置き判別」とする高信頼直接資料は、表記揺れ・型式 `ハイパーリノ/CC`・山佐・リノシリーズと検索語を変更して再探索しても固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- そもそも設定Yのみの1段階設定であるため、通常の設定変更判別による高低設定推測の実益は `NOT_APPLICABLE_SINGLE_SETTING_MACHINE`。
reliability: UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_GAKKUN_CONTRACT

### numericResetData
- resetShortCeiling: NOT_APPLICABLE。
- resetModeDistribution: NOT_APPLICABLE / NONE_CONFIRMED。
- resetStateDistribution: NOT_APPLICABLE / NONE_CONFIRMED。
- publicFirstNGameHitRateAfterReset: NONE_CONFIRMED。
- publicResetBenefitRate: NONE_CONFIRMED。

## conflicts
- payoutRateDefinition: 完全攻略101.00%に対し、打ち方別で97.80 / 97.01 / 95.37 / 94.07%が存在するが、これは攻略手順差による**定義差**であり数値CONFLICTではない。平均せず別系列で保持。
- bonusCombined: 約1/99と1/99.5は丸め精度差。BIG/REG各1/199からの概算と整合。
- releaseDate: 2017-06-18はグリーンべるとの納品開始、2017-06-19は複数資料の導入開始。イベント定義差のためCONFLICT扱いしない。
- MATERIAL_NUMERIC_CONFLICT: NONE_CONFIRMED_AFTER_MULTI_SOURCE_COMPARISON。

## missingFields
- manufacturer-official exact payout rate by play procedure: UNVERIFIED_AFTER_RESEARCH; detailed procedure rates rely on analysis source.
- manufacturer-official resetBehavior document: UNVERIFIED_AFTER_RESEARCH。
- same-setting initialization behavior from setting-key operation: UNVERIFIED_AFTER_RESEARCH_AND_NOT_MATERIAL_FOR_SETTING_SELECTION_GAMEPLAY。
- deterministic machine-specific reset detection: NONE_CONFIRMED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
1. 山佐ネクスト公式 ハイパーリノ — https://yamasa-next.co.jp/model_hrn/
2. P-WORLD ハイパーリノ（型式・検定番号・基本仕様） — https://www.p-world.co.jp/machine/database/8402
3. パチビー ハイパーリノ — https://www.pachibee.jp/machines/index/217060000
4. グリーンべると / P-WORLD業界ニュース「新リノスペック、『ハイパーリノ』登場」 — https://news.p-world.co.jp/articles/9394/greenbelt
5. パチ＆スロ必勝本 基本スペック — https://p.hisshobon.jp/machine/2987/1/64206
6. すろぱちくえすと ハイパーリノ — https://www.slopachi-quest.com/article/hyper-rino-yamasa/
7. ちょんぼりすた ハイパーリノ — https://chonborista.com/slot/yamasa-slot/40600/
8. K-Navi ハイパーリノ — https://p-kn.com/slot/2826/
9. 一撃 ハイパーリノ — https://1geki.jp/slot/s_hyperrino/
10. イニシャルP ハイパーリノ中古実機（型式照合補助） — https://initialp.cart.fc2.com/ca19/2623/
11. すろぱちくえすと 2017年導入日順一覧 — https://www.slopachi-quest.com/article/2017-sindai/
