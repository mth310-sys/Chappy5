# ハナハナホウオウ-30

machineName: ハナハナホウオウ-30
manufacturer: パイオニア / PIONEER
releaseDate: 2015-09-14
releaseDatePrecision: exact_nationwide_start_day_with_source_conflict
releaseDateNote: K-Naviは2015-09-14ホール導入開始、イチカツも9月14日全国導入開始。当時PiDEAは納品日2015-09-13予定と報道し、翌14日稼働開始と整合する。一方HAZUSEは2015-09-07導入開始としているためCONFLICTを保持し、全国実ホール導入の工程根拠が強い2015-09-14をcanonicalとする。
generation: 5号機
systemType: ノーマル / Aタイプ / 30Φ / 完全告知
formalModelName: ハナハナホウオウEX-30
inspectionNumber: 5S0623
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- canonical導入日: **2015-09-14**。
- 型式名: **ハナハナホウオウEX-30**。
- 検定番号: **5S0623**。
- メーカー: **パイオニア**。
- 30Φノーマル機。2022年の6号機「ハナハナホウオウ～天翔～-30」と混同しない。
- HAZUSEのメーカー欄には「バイオニア」と誤記があるため、メーカー名はパイオニア公式・業界記事を優先する。
- confidence: OFFICIAL_FOR_MANUFACTURER_AND_PRODUCT_IDENTITY / ANALYSIS_HIGH_FOR_MODEL_AND_INSPECTION / CONFLICT_FOR_EXACT_RELEASE_DATE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96% |
| 2 | 98% |
| 3 | 101% |
| 4 | 104% |
| 5 | 107% |
| 6 | 112% |

- K-Navi、HAZUSE、なな徹、イチカツ等で同系列を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/299 | 1/496 | 1/186 |
| 2 | 1/290 | 1/468 | 1/179 |
| 3 | 1/277 | 1/434 | 1/169 |
| 4 | 1/264 | 1/399 | 1/159 |
| 5 | 1/250 | 1/368 | 1/148 |
| 6 | 1/233 | 1/332 | 1/137 |

- K-Navi、なな徹、イチカツ、ジャグラーズネットで一致。
- すろぱちくえすとの設定1 REG「1/469」は他の多数資料と不一致で、同記事内の合算1/186とも整合しにくいため source-specific anomaly としてcanonicalには採用しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約36.5G/50枚**。
- なな徹、イチカツ、みんスロで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- `NOT_APPLICABLE_NORMAL_TYPE`。
- AT/ART非搭載のノーマルタイプ。

## basicPayout

- BIG CHANCE: **最大312枚**。
- REG CHANCE: **最大130枚**。
- 2015年当時PiDEA・グリーンべると、HAZUSE、イチカツ等で一致。
- confidence: INDUSTRY_PLUS_MULTI_SOURCE

## modeSpecificMinimumData

- AT / ART / CZ: **非搭載**。
- ゲーム数天井: **非搭載**。
- 通常時はハイビスカス点灯でボーナス告知する完全告知ノーマルタイプ。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA_WITH_CONFLICT_NOTES
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- ゲーム数天井・AT/ART/CZモード非搭載のため、**天井短縮・AT/ARTモード再抽選はNOT_APPLICABLE**。
- 設定変更すると、前日ボーナスからの**87G以内連チャンBGM判定用の継続状態はリセット**されると当時解析で確認。
- 設定変更後の**初回BIG時は全設定共通50%でパネルフラッシュが発生**するという公開解析値を確認。通常BIG後の設定差付きフラッシュとは別契約として保持する。

### carryOverBehavior

- ゲーム数天井はないため、**天井進捗の据え置き契約はNOT_APPLICABLE**。
- 据え置き時は前日ボーナスからの87G以内連チャンBGM条件が継続し、朝一に条件を満たして連チャンBGMが発生すれば据え置きの強い判別材料になると当時解析で確認。
- AT/ART/CZモードは非搭載。

### powerCycleBehavior

- 設定変更なしの純粋な電源OFF→ONだけを独立条件として、87G BGM状態・パネル状態等の保持/初期化を直接比較した本機固有資料は、機種名・型式名・シリーズ名と「電源OFF ON / 電断 / 据え置き / 朝一」を変えて再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き情報を純電断契約へ自動転記しない。

### gameCounterReset

- **NOT_APPLICABLE_NO_GAME_CEILING**。
- 87G連チャンBGM判定は天井ゲーム数ではなく、ボーナス間の演出/BGM条件として別管理する。

### ceilingAfterReset

- 通常天井: **NONE / 非搭載**。
- リセット専用短縮天井: **NOT_APPLICABLE**。

### modeAfterReset

- AT/ART/CZ朝一モード: **NOT_APPLICABLE**。
- 設定変更専用の解除モード・高確モード等: **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset

- 朝一客行動に影響する確認済み状態として、設定変更で**87G以内連チャンBGM判定の継続状態がリセット**。
- それ以外の本機固有の設定変更専用内部状態は **NONE_CONFIRMED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更後初回BIG時のパネルフラッシュ: **全設定共通50%**（当時解析、ANALYSIS_SINGLE）。
- 短縮天井・保証CZ・高確スタート: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 前日天井進捗消失: **NOT_APPLICABLE_NO_GAME_CEILING**。
- 前日ボーナスから87G以内の連チャンBGM継続条件は設定変更で消えるため、据え置き判別材料が失われる。
- その他の出玉上の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- **87G以内連チャンBGM**: 設定変更で判定状態がリセットされるため、前日の最終ボーナスから通算87G以内となる朝一ボーナスで連チャンBGMが発生すれば据え置きの強い材料。非発生だけでは設定変更確定ではない。
- **初回BIG後パネルフラッシュ**: 設定変更後初回BIGは全設定共通50%という解析値があり、朝一判別時は通常の設定別フラッシュ率と分離して扱う。
- **リールガックン**: 設定変更時にガックンしやすいという当時解析があるが、個体差・停止出目差が大きく、1G回し対策も可能。確定判別にはしない。
- **BETランプ**: 同記事には当初「変更で消灯/据え置きで点灯」とある一方、追記で「クイーンハナハナ以降はランプ判別不可能」と訂正され、当時コメントでも本機では消えない旨が指摘されている。よって本機では **CONFLICT / DO_NOT_USE_AS_CONFIRMED_DETECTION**。

### numericResetData

- 設定変更後初回BIGのパネルフラッシュ: **50%（全設定共通）**。
- 朝一専用当選率・短縮天井・モード振り分け: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。
- 87G以内ボーナス時のレトロサウンド通常抽選率には設定差（設定1 6.3%～設定6 12.5%）があるが、これは設定変更専用数値ではないため性能コアのreset専用値には混入させず、変更判別条件の説明にのみ使用する。

## conflicts

1. `CONFLICT_RELEASE_DATE_2015_09_07_VS_2015_09_14`
   - HAZUSE: 2015-09-07導入開始。
   - K-Navi: 2015-09-14ホール導入開始。
   - イチカツ: 2015-09-14全国導入開始。
   - PiDEA: 2015-09-13納品予定。工程上、09-14ホール導入と整合するためcanonicalは2015-09-14。
2. `CONFLICT_BET_LAMP_DETECTION`
   - すろぱちくえすと本文に旧来のBETランプ消灯判別を掲載する一方、追記でクイーンハナハナ以降は判別不可と訂正。後者を安全側で採用し、確定判別情報として使わない。
3. `SOURCE_ANOMALY_REG_SETTING1_1_469`
   - すろぱちくえすとの設定1 REG 1/469は、K-Navi・なな徹・イチカツ等の1/496と不一致。canonicalは複数一致の1/496。

## missingFields

- 本機固有の純電源OFF→ONのみの保持契約: `UNVERIFIED_AFTER_RESEARCH`。
- リールガックンの確定性/発生率: `UNVERIFIED_AS_DETERMINISTIC_DETECTION`。

## boundaryAudit

- 2015-09-14群は、既存No.912 **キングジャック**と本機を確認。
- 「パチスロ / 2015年9月14日 / 導入 / 新台 / メーカー」を横断再監査。既存No.911「パチスロ聖闘士星矢～女神聖戦～」には必勝本で09-14導入表記が存在するが、既存レコードとして既処理のため重複追加しない。
- 今回の監査で、09-14を全国実ホール導入日として固定できる**新たな未登録5号機**を追加発見できず、`2015-09-14_GROUP_CLOSED_FOR_CURRENT_RESEARCH` とする。
- 次回は **2015-09-15以降の境界**を監査し、次の具体日付き未処理5号機へ進む。

## sources

取得日: 2026-09-07

1. パイオニア公式 更新履歴 — https://www.slot-pioneer.co.jp/news.html
   - 2015年8～9月のハナハナホウオウ-30製品情報更新、メーカー公式確認。
2. PiDEA X 2015-08-21 — https://www.pidea.jp/articles/%E3%83%91%E3%82%A4%E3%82%AA%E3%83%8B%E3%82%A2%E3%80%8C%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A%E3%80%8D%E3%82%AC%E3%83%BC%E3%82%B4%E3%82%A4%E3%83%AB%E3%81%A8%E3%82%B3%E3%83%A9%E3%83%9C
   - 2015モデル、ノーマル、BIG312枚/REG130枚、納品日09-13予定。
3. グリーンべると 2015-08-20 — https://web-greenbelt.jp/00008014/
   - ノーマルAタイプ、BIG312枚/REG130枚、合算1/186～1/137、出玉率96～112%。
4. K-Navi — https://p-kn.com/slot/2333/
   - 2015-09-14ホール導入開始、設定別BIG/REG。
5. HAZUSE — https://hazuse.com/machine/pachislot/5S0623/
   - 型式名ハナハナホウオウEX-30、検定番号5S0623、設定別確率/機械割/獲得枚数。導入日は09-07表記のためCONFLICT保持。
6. なな徹 ボーナス確率/機械割 — https://nana-press.com/kaiseki/machine/34/563/
   - 設定別BIG/REG/合算、機械割。
7. なな徹 小役確率 — https://nana-press.com/kaiseki/machine/34/570/
   - 50枚あたり約36.5G。
8. イチカツ — https://ichikatsu.com/hanahanahouoh/
   - 2015-09-14全国導入、設定別BIG/REG/合算/機械割、約36.5G/50枚、BIG312枚/REG130枚。
9. すろぱちくえすと 設定判別 — https://www.slopachi-quest.com/article/hanahana-houou-30-settei/
   - 設定変更判別、87G BGM状態リセット、初回BIGパネルフラッシュ50%、ガックン、BETランプ訂正・競合。
10. すろぱちくえすと ハナハナシリーズ朝一挙動 — https://www.slopachi-quest.com/article/hanahana-reset/
   - 据え置き時の連チャンBGMを用いた朝一判別のシリーズ整理。
11. ジャグラーズネット — https://jugglersnet.com/analysis-hana/hanahana-hou
   - 設定別BIG/REG/合算/機械割の独立照合。
12. みんスロ — https://minslo.com/%E3%83%8F%E3%83%8A%E3%83%8F%E3%83%8A%E3%83%9B%E3%82%A6%E3%82%AA%E3%82%A6%E2%80%9030/
   - 2015-09-14、約36.5G/50枚、天井非搭載、312枚/130枚の照合。
13. パチ＆スロ必勝本 聖闘士星矢～女神聖戦～ — https://p.hisshobon.jp/machine/2624/1/53776
   - 09-14群境界監査。既存登録機であることを確認するため使用。

## confidence

- identity/manufacturer: OFFICIAL_PLUS_INDUSTRY
- formalModelName/inspectionNumber: ANALYSIS_HIGH
- exactReleaseDate: CONFLICT_WITH_INDUSTRY_SCHEDULE_SUPPORT_FOR_2015_09_14
- performanceCore: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- resetBehavior applicability: HIGH_BY_SYSTEM_TYPE_AND_NO_CEILING
- reset87GBgmState: ANALYSIS_SINGLE_PLUS_SERIES_CROSSCHECK
- resetInitialBigPanelFlash50Percent: ANALYSIS_SINGLE
- purePowerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetectionGakkun: ANALYSIS_SINGLE_NON_DETERMINISTIC
- resetDetectionBetLamp: CONFLICT_DO_NOT_USE_AS_CONFIRMED