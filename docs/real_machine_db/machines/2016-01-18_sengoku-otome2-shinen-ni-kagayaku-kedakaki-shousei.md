# 戦国乙女2～深淵に輝く気高き将星～

machineName: 戦国乙女2～深淵に輝く気高き将星～
manufacturer: オリンピア
releaseDate: 2016-01-18
releaseDatePrecision: exact_hall_start_multi_source
recordNumber: 946
generation: 5号機 / 新基準AT機
systemType: AT / 疑似ボーナス連鎖型 / 天下ポイントCZ
formalModelName: 戦国乙女2深淵に輝く気高き将星／D2
inspectionNumber: 5S1043
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_RESEARCHED

## identity
- HAZUSEは型式名 **戦国乙女2深淵に輝く気高き将星／D2**、検定番号 **5S1043**、導入開始日 **2016-01-18**、メーカー **オリンピア** と記録。
- K-Naviもホール導入開始 **2016年1月18日** とする。
- P-Summaの2016-01-29記事は「2016年1月18日に全国のホールに導入」と記載。
- 平和/オリンピアの打-WIN告知でも2016-01-18の本機稼働時期と整合する。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.4% |
| 3 | 100.5% |
| 4 | 104.7% |
| 5 | 107.4% |
| 6 | 110.5% |

- HAZUSE、一撃、ちょんぼりすたで一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
主要初当たりとして疑似ボーナス初当たりを保存する。連チャン分を含むボーナス合算は定義を分離して併記。

| 設定 | ボーナス初当たり | ボーナス合算 |
|---:|---:|---:|
| 1 | 1/384.9 | 1/156.9 |
| 2 | 1/332.1 | 1/147.5 |
| 3 | 1/354.4 | 1/139.4 |
| 4 | 1/295.2 | 1/120.1 |
| 5 | 1/323.4 | 1/110.0 |
| 6 | 1/247.0 | 1/99.9 |

- HAZUSE、K-Navi、一撃、ちょんぼりすたで同系列を確認。
- 奇偶で初当たり傾向が単調増加しないため、設定順を取り違えず原値を保持する。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約46.2G/50枚**。
- すろぱちくえすと、ちょんぼりすた等で一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- 疑似ボーナスAT: **約2.9枚/G**。
- HAZUSE、一撃、すろぱちくえすと等で一致。
- reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- 乙女BONUS（赤7）: **30G**、純増約2.9枚/G。解析上の獲得目安 **約87枚**。
- 真乙女BONUS（白7）: **70G**、純増約2.9枚/G。解析上の獲得目安 **約203枚**。
- 獲得枚数はG数×純増からの単純推定ではなく、当時解析資料が示す目安値を採用。

## modeSpecificMinimumData
- ボーナス間 **999G（前兆込み）** で天井到達、疑似ボーナス当選。
- 天下ポイント **10000pt** 到達でCZ「天下統一モード」へ移行。
- 天下ポイントは通常時のゲーム数消化・レア役等で加算され、ボーナスを挟んでも持ち越す。
- 本DBでは通常時の全ポイント加算振り分け・全状態移行テーブルは実機完全再現用詳細として収集対象外。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_DIRECT_RESET_TABLE_MULTI_SOURCE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 天井ゲーム数: **RESET**。
- 天下ポイント: 前日値を破棄して **RESELECT**。液晶表示は0ptだが、内部的に設定変更専用の初期ポイントを所持する。
- 液晶ステージ: **RESELECT**。
- 内部状態: **RESELECT**。
- 一撃の設定変更表、HAZUSEの設定変更時天下pt表、期待値見える化の朝一比較表で整合。

### carryOverBehavior
- 据え置きでは天井ゲーム数、天下ポイント、内部状態を **CARRYOVER** と扱う。
- 電源OFF→ONで天下ポイント表示は0ptへ見えるが、内部ポイントは継続する。
- 前日最終天下ポイント＋当日獲得分がちょうど10000ptで天下統一モードへ到達した場合は据え置き推測材料になると当時解析が説明。

### powerCycleBehavior
- 天井ゲーム数: **CARRYOVER**。
- 天下ポイント: **CARRYOVER**（液晶上は0pt）。
- 液晶ステージ: **RESELECT**。
- 内部状態: **CARRYOVER**。
- 一撃の「電源OFF/ON」表で直接確認。期待値見える化でも同内容を照合。

### gameCounterReset
- normalBonusCeiling: **999G（前兆込み）**。
- settingChangeGameCounter: **RESET**。
- carryOverGameCounter: **CARRYOVER**。
- purePowerCycleGameCounter: **CARRYOVER**。
- settingChangeTenkaPoint: **RESELECT**。
- carryOverTenkaPoint: **CARRYOVER**。
- purePowerCycleTenkaPoint: **CARRYOVER**。

### ceilingAfterReset
- 設定変更で通常999G天井の進捗は0から再スタート。
- 設定変更専用の短縮G数天井は、今回の再探索で直接確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただし天下ポイントに設定変更専用の内部初期値が与えられるため、CZ「天下統一モード」到達までの実質距離は大幅に短くなり得る。これはゲーム数天井短縮とは別契約として保存する。

### modeAfterReset
- 通常時の全モード移行表は物差しDB対象外。
- 設定変更時の天下ポイントは専用初期値へ再抽選。
- 朝一専用の独立したG数モード/固定当選率は今回の再探索では **NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
設定変更時の内部状態振り分け（%）:

| 設定 | 通常A | 通常B | 高確A | 高確B |
|---:|---:|---:|---:|---:|
| 1・2 | 39.84 | 19.92 | 30.08 | 10.16 |
| 3 | 34.77 | 25.00 | 30.08 | 10.16 |
| 4 | 34.77 | 19.92 | 35.16 | 10.16 |
| 5 | 29.69 | 25.00 | 35.16 | 10.16 |
| 6 | 30.08 | 19.92 | 39.84 | 10.16 |

- 一撃の設定変更時詳細表をcanonicalとする。
- 設定1・2は同一行。
- 設定変更時は設定1・2でも高確A+B合計約40.24%、設定6は50.00%で、高確スタートが朝一挙動へ影響する。
- purePowerCycleInternalState: **CARRYOVER**。
- carryOverInternalState: **CARRYOVER**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時の天下ポイントは3500～8000ptから再抽選され、**6000pt以上が69.92%**（6000pt 50.00% + 8000pt 19.92%）。
- そのため10000pt到達の天下統一モードまでの内部距離が据え置き0pt相当より短い状態で始まり得る。
- 内部状態も設定変更時に再抽選され、高確A/Bスタートの公開振り分けが存在する。

### resetPenalties
- 前日の天井G数進捗は設定変更で **RESET**。
- 前日の天下ポイントも設定変更で引き継がず、専用初期値へ再抽選。
- 前日の内部状態も設定変更で引き継がない。

### resetDetection
- 本機では天下ポイントの内部引継ぎが主要な変更推測材料。
- 据え置きなら前日ポイント＋当日ポイントの累積10000ptで天下統一モードへ到達するため、前日値と当日加算を把握できる場合は据え置き推測が可能。
- 設定変更では内部ポイントが専用値へ再抽選されるため、朝一の天下統一モード到達タイミングが変更推測材料になる。
- 液晶上の天下ポイントは電源OFF→ONでも0ptになるため、表示0pt単独では変更判別不可。
- 期待値見える化は朝一比較でガックンを **なし濃厚 / なし** と整理しており、本機固有の確定ガックン契約は採用しない。

### numericResetData
設定変更時の内部初期天下ポイント:

| 内部天下pt | 振り分け |
|---:|---:|
| 3500pt | 15.24%（HAZUSE 15.23%） |
| 4000pt | 14.84% |
| 6000pt | 50.00% |
| 8000pt | 19.92% |

- 3500ptのみ一撃15.24% / HAZUSE15.23%の0.01pt差がある。平均せず、**ROUNDING_CONFLICT_MINOR** として双方保持。
- 6000pt以上合計: **69.92%**。
- 設定変更専用短縮G数天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 公開された固定「朝一○G以内当選率」: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- settingChangeTenkaPoint3500: 一撃 **15.24%** / HAZUSE **15.23%**。丸め精度差の可能性が高いが平均せず双方保持。
- ちょんぼりすたのページ本文には導入日を「2015年1月18日」とする誤記があるが、同ページの機種世代・他資料、HAZUSE/K-Navi/P-Summa/一撃がすべて **2016-01-18** で一致するため、releaseDate canonicalには採用しない。SOURCE_DATE_TYPO扱い。

## missingFields
- settingChange dedicated shortened game ceiling: NONE_CONFIRMED_AFTER_RESEARCH
- reset-only fixed morning hit probability: UNVERIFIED_AFTER_RESEARCH
- manufacturer-guaranteed gakkun/change-detection contract: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. HAZUSE — 戦国乙女2～深淵に輝く気高き将星～
   - https://hazuse.com/machine/pachislot/5S1043/
   - 型式、検定番号、2016-01-18導入、設定別機械割、初当たり/合算、純増、天井、設定変更時天下ポイント。
   - reliability: ANALYSIS_HIGH
2. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/sengokuotome2/3/
   - 天井999G、設定変更時の天井RESET/天下pt再抽選/ステージ再抽選/内部状態再抽選、設定別リセット状態振り分け、電源OFF→ON時の各引継ぎ。
   - reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE
3. 一撃 — 天下ポイント抽選
   - https://1geki.jp/slot/sengokuotome2/45/
   - 電源OFF→ON時の内部ポイント引継ぎ、設定変更時の専用ポイント振り分け、据え置き推測方法。
   - reliability: ANALYSIS_HIGH
4. 一撃 — 機種トップ
   - https://1geki.jp/slot/sengokuotome2/
   - 2016-01-18導入予定、AT純増約2.9枚/G、設定別スペック。
   - reliability: ANALYSIS_HIGH
5. 期待値見える化 — 戦国乙女2 天井・ゾーン・天下ポイント
   - https://slotjin.com/zone/sengoku-otome2/
   - 設定変更/電源OFF→ON比較表、天井/天下ポイント/内部状態、ガックン整理。
   - reliability: ANALYSIS_HIGH_CORROBORATING
6. すろぱちくえすと — 戦国乙女2解析
   - https://www.slopachi-quest.com/article/sengokuotome2/
   - 約46.2G/50枚、純増約2.9枚/G、乙女BONUS30G約87枚、真乙女BONUS70G約203枚。
   - reliability: ANALYSIS_HIGH
7. K-Navi — 戦国乙女2
   - https://p-kn.com/slot/2406/
   - ホール導入開始2016-01-18、初当たり確率。
   - reliability: ANALYSIS_HIGH
8. P-Summa — 2016-01-29記事
   - https://psumma.jp/pachislo/19211/
   - 2016-01-18全国ホール導入を当時記事で確認。
   - reliability: PERIOD_SECONDARY
9. 平和/オリンピア 打-WIN お知らせ
   - https://www.heiwanet.co.jp/da-win/news.html
   - 2016-01-18のサービス稼働時期を確認するメーカー系補助資料。
   - reliability: OFFICIAL_CONTEXT
10. ちょんぼりすた — 戦国乙女2解析
   - https://chonborista.com/slot/orinpia-slot/14773/
   - 機械割、初当たり、合算、46.2G/50枚、純増2.9枚/Gを照合。導入年のみ本文誤記があるため日付canonicalには不使用。
   - reliability: ANALYSIS_HIGH_CORE_WITH_DATE_TYPO

## confidence
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_PLUS_OFFICIAL_CONTEXT
- identity/formalModel/inspection: ANALYSIS_HIGH_OLD_DB
- payoutRateBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- initialHitBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- netIncrease/basicPayout: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: ANALYSIS_HIGH_DIRECT_RESET_TABLE
- powerCycleBehavior: ANALYSIS_HIGH_DIRECT_RESET_TABLE_MULTI_SOURCE
- numericResetData: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_ROUNDING_CONFLICT
- resetDetection: ANALYSIS_HIGH_FOR_POINT_BEHAVIOR / ANALYSIS_SINGLE_FOR_GAKKUN
