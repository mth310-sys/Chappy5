# みんなのジャグラー

machineName: みんなのジャグラー
manufacturer: 北電子
releaseDate: 2013-07-01
releaseDatePrecision: exact_day
generation: 5号機
systemType: ノーマルAタイプ / 完全告知
recordStatus: COMPLETE_CORE_RESET_RESEARCHED

## identity

- ホール導入開始: **2013-07-01**。パチビー、HAZUSEで具体日を確認。グリーンべると当時業界記事では **2013-06-30より納品開始** とあり整合。
- manufacturer: **北電子**。
- 型式名: **みんなのジャグラーC**。
- 検定番号: **2S1401**。
- confidence: MULTI_SOURCE_EXACT_DAY_HIGH

## payoutRateBySetting

メーカー公表系列:

| 設定 | 機械割 |
|---|---:|
| 1 | 97.2% |
| 2 | 98.1% |
| 3 | 99.2% |
| 4 | 101.6% |
| 5 | 104.6% |
| 6 | 109.8% |

- 北電子公式、HAZUSE、グリーンべると当時業界記事で整合。
- 北電子公式は工場データから算出した予測値と明記。
- confidence: OFFICIAL_MULTI_SOURCE_HIGH

完全攻略系列（チェリー・ベル・ピエロ獲得条件）:

| 設定 | フル攻略機械割 |
|---|---:|
| 1 | 98.26% |
| 2 | 99.25% |
| 3 | 100.43% |
| 4 | 103.19% |
| 5 | 106.54% |
| 6 | 112.11% |

- メーカー公表値とは条件が異なるため平均・統合しない。
- confidence: ANALYSIS_MULTI_SOURCE

## initialHitBySetting

ボーナス確率:

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/264.3 | 1/455.1 | 1/167.2 |
| 2 | 1/264.3 | 1/409.6 | 1/160.6 |
| 3 | 1/260.1 | 1/390.1 | 1/156.0 |
| 4 | 1/256.0 | 1/343.1 | 1/146.6 |
| 5 | 1/248.2 | 1/283.7 | 1/132.4 |
| 6 | 1/231.6 | 1/244.5 | 1/118.9 |

- 北電子公式、HAZUSE、パチスロ解析ガイドで一致。
- confidence: OFFICIAL_MULTI_SOURCE_HIGH

## baseGamesPer50

チェリー狙い時:

| 設定 | 50枚あたり |
|---|---:|
| 1 | 34.81G |
| 2 | 34.94G |
| 3 | 35.07G |
| 4 | 35.61G |
| 5 | 35.61G |
| 6 | 36.30G |

完全小役獲得時:

| 設定 | 50枚あたり |
|---|---:|
| 1 | 35.32G |
| 2 | 35.46G |
| 3 | 35.59G |
| 4 | 36.14G |
| 5 | 36.14G |
| 6 | 36.85G |

- 別整理資料でも概ね約35～37G/50枚と整合。
- 打ち方条件を混ぜず保持。
- confidence: ANALYSIS_MULTI_SOURCE

## netIncrease

- **NOT_APPLICABLE_NORMAL_TYPE**。ART/AT/RT非搭載のボーナス主体ノーマルタイプ。

## basicPayout

- BIG: **約300枚**。
- REG: **約108枚**を本線採用。
- 北電子公式配当はBIG **336枚を超える払い出しで終了**、REG **112枚を超える払い出しで終了**。
- HAZUSEはREGを「平均約112枚獲得」と表記する一方、グリーンべると当時記事・解析ガイドは約108枚。実獲得の表記競合として平均せず保持。

## modeSpecificMinimumData

- ボーナスのみで出玉を増やすノーマルAタイプ / 完全告知。
- ART/AT/RT: **非搭載**。
- ゲーム数天井: **非搭載**。当時解析資料で明記。
- ゲーム数解除モード/CZ/AT状態: **NOT_APPLICABLE**。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__NORMAL_TYPE_NO_CEILING_OR_GAME_NUMBER_MODE__GAKKUN_AND_POWER_CYCLE_BGM_CARRYOVER_CONFIRMED__OTHER_MACHINE_SPECIFIC_STATE_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- ノーマルAタイプでゲーム数解除・AT/ARTモード・CZ・天井を持たないため、それらの設定変更リセット契約は **NOT_APPLICABLE**。
- 当時解析では、設定変更後に店側が1G回していない場合、朝一1G目にリールガックンが発生するとされる。
- 設定変更時は1G連/ゾロ目ゲーム連のBGM変化条件に使うゲーム数履歴がクリアされ、変更後の1G目やゾロ目Gでは据え置き由来BGM変化が起きないとする当時解析を確認。
- 上記以外の本機固有内部状態の変更契約は、公式・業界・当時解析・後年解析を表記揺れと検索語を変えて再探索しても比較可能な直接資料を確認できず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 天井/ゲーム数解除/AT・ARTモードがないため、それらの宵越し恩恵・不利は **NOT_APPLICABLE**。
- 当時解析では、設定変更を伴わない据え置き/電源ON-OFFのみの場合、1G連・ゾロ目連チャン時のBGM変化判定に用いるゲーム数履歴が引き継がれるとされる。
- その他の本機固有表示状態・内部状態については **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 当時解析で、**設定変更なしの電源OFF→ONのみでは1G連/ゾロ目連チャン時のBGM変化判定が引き継がれる**と確認。
- 天井・ゲーム数解除モードは非搭載のため **NOT_APPLICABLE**。
- リール初期位置等、上記以外の純電断固有挙動は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- generalCeiling: **NOT_APPLICABLE_NO_CEILING**。
- gameNumberMode: **NOT_APPLICABLE**。
- settingChange: **NOT_APPLICABLE_FOR_CEILING_GAME_COUNTER**。
- carryOver: **NOT_APPLICABLE_FOR_CEILING_GAME_COUNTER**。
- powerCycleOnly: **NOT_APPLICABLE_FOR_CEILING_GAME_COUNTER**。
- bonusMusicGameHistory: 設定変更でクリア、設定変更なしの電源OFF→ONでは引継ぎとする当時解析あり。

### ceilingAfterReset

- **NOT_APPLICABLE_NO_CEILING**。
- 設定変更専用短縮天井: **NONE / NOT_APPLICABLE**。

### modeAfterReset

- ゲーム数解除モード、AT/ARTモード、朝一専用モード: **NOT_APPLICABLE**。

### stateAfterReset

- AT/ART用の高確/低確状態: **NOT_APPLICABLE**。
- ホール経営・朝一客AI用に比較すべきその他の公開内部状態: **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 天井短縮、朝一CZ/AT優遇、モード優遇: **NONE / NOT_APPLICABLE**。
- 設定変更専用の初当たり優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 天井進捗消失: **NOT_APPLICABLE_NO_CEILING**。
- 据え置き時には残るBGM変化用ゲーム数履歴が設定変更でクリアされるため、客側の据え置き判別材料は失われる。
- その他の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- **ガックンチェック有効**。設定変更後に店側が1G回していなければ朝一1G目にリールがガクッと動くとする本機固有解析を複数系統で確認。
- ただし店側の変更後1G回しで容易に対策可能。個体差やリール停止位置でも見え方が変わるため、設定変更確定演出とは扱わない。
- **BGM据え置き判別**: 設定変更を行わず電源ON/OFFのみなら1G連/ゾロ目連BGM条件が引き継がれるため、朝一最初のBIGで条件該当BGMが流れれば据え置き判断材料になる。当時解析では逆回転フリーズBIGはゲーム数に関係なくBGMが変化する例外として除外。

### publicMorningNumbers

- settingChangeFixedShortenedCeiling: **NOT_APPLICABLE**。
- settingChangeModeDistribution: **NOT_APPLICABLE**。
- settingChangeStateDistribution: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetSpecificHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- firstGameGakkun: **設定変更後・店側未消化なら朝一1G目**（解析情報。対策可能で確定判別ではない）。

### numericResetData

- normalCeiling: NONE
- resetSpecificShortenedCeiling: NONE
- resetModeDistribution: NOT_APPLICABLE
- resetSpecificHitRate: NONE_CONFIRMED_AFTER_RESEARCH
- resetDetectionGame: 1G目（条件付きガックン）

resetQaReliability: HIGH_FOR_NO_CEILING_NORMAL_TYPE_CLASSIFICATION__ANALYSIS_MULTI_SOURCE_FOR_GAKKUN__ANALYSIS_SINGLE_PERIOD_FOR_POWER_CYCLE_BGM_HISTORY__UNVERIFIED_FOR_OTHER_MACHINE_SPECIFIC_INTERNAL_STATE

## missingFields

- machineSpecificInternalStateResetOtherThanDocumentedMusicHistory: `UNVERIFIED_AFTER_RESEARCH`
- purePowerCyclePhysicalReelBehavior: `UNVERIFIED_AFTER_RESEARCH`
- officialBaseGamesPer50: `UNVERIFIED_AFTER_RESEARCH`

## conflicts

- payoutRate: **メーカー公表 97.2 / 98.1 / 99.2 / 101.6 / 104.6 / 109.8%** vs **フル攻略 98.26 / 99.25 / 100.43 / 103.19 / 106.54 / 112.11%**。条件差のため平均せず別系列保持。
- REG basic payout: **約108枚**（グリーンべると当時記事・解析ガイド） vs **平均約112枚**（HAZUSE）。平均せずCONFLICTとして保持。

## sources

取得日: 2026-09-06

- 北電子公式 みんなのジャグラー / 設定別BB・RB・合算・メーカー公表出玉率: https://www.kitadenshi.co.jp/slot/minnanojuggler/
- グリーンべると 2013-06-06当時業界記事 / 6月30日納品開始、Aタイプ完全告知、BB約300枚、RB約108枚、合算・出玉率レンジ: https://web-greenbelt.jp/00000978/
- P-WORLD転載グリーンべると / 同記事: https://news.p-world.co.jp/articles/5892/greenbelt
- パチビー / 2013-07-01導入、5号機ノーマル完全告知: https://www.pachibee.jp/movies/index/9535
- HAZUSE / 型式みんなのジャグラーC、検定2S1401、2013-07-01導入、設定別確率、メーカー公表機械割、配当: https://hazuse.com/machine/pachislot/2S1401/
- パチスロ解析ガイド / 2013-07-01導入、設定別確率・機械割、BIG約300枚、REG約108枚: https://pachislot-guide.net/2013/minnano-juggler/
- 激アツ 2016-07-26解析 / 50枚あたり設定別回転数、完全攻略系列、ガックンチェック: https://gekiatsu7.com/slot-analyze/2090/
- 元プロMGジャグラーシリーズ整理 / 50枚約35～37G、ガックン判別○、メーカー公表/フル攻略機械割の条件分離: https://www.pachislotblog.tokyo/juggler-series-specmatome/
- 2013年当時「天井ハイエナ生活」 / 天井非搭載、設定変更後1G目ガックン、変更なし電源ON/OFF時のBGMゲーム数履歴引継ぎ、変更後1G回し対策: https://macerate.seesaa.net/article/367972105.html
- 北電子公式アプリ / 実機同様のリール制御・告知パターン再現: https://www.kitadenshi.co.jp/fun/apps/minna-jugg/

## researchNotes

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「大漁II」を再読し、recordCount 744 / 2013-07-01同日群OPENから開始。
- GitHubコード検索で「みんなのジャグラー」既存レコードなしを確認してから追加。
- 性能コアは公式・業界当時記事・当時/後年解析で照合。メーカー公表機械割と完全攻略機械割は定義差として混ぜていない。
- resetBehaviorは「みんなのジャグラー / みんジャグ / みんなのジャグラーC」と「設定変更 / リセット / 朝一 / ガックン / 据え置き / 電源OFF ON / 電断 / 1G回し」を組み替え、公式・当時解析・後年解析・古いDBを横断。確認できなかった内部契約のみUNVERIFIED_AFTER_RESEARCHとした。
- 07-01同日監査で、前HANDOFF既知のNINJA BLADEに加え、当時資料から「忍魂弐」も2013-07-01導入候補として検出。repo検索で未登録を確認したため同日群はOPEN維持。
