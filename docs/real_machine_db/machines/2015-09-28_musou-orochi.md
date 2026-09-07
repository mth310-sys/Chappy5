# パチスロ無双OROCHI

machineName: パチスロ無双OROCHI
manufacturer: 山佐 / YAMASA
releaseDate: 2015-09-28
releaseDatePrecision: exact_nationwide_start_day_with_month-level_official-derived_conflict
releaseDateNote: パチ＆スロ必勝本、パチセブン、複数当時解析は2015-09-28導入で一致。山佐発表文を転載した2015-12-03の4Gamer/Gamer記事は「2015年10月にホールデビュー」と月単位で記載するためCONFLICTを保持し、具体日付き複数当時資料の2015-09-28をcanonicalとする。
generation: 5号機
systemType: AT / 差枚数管理 / CZ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- canonical導入日: **2015-09-28**。
- メーカー: **山佐**。
- 5号機AT機。AT「OROCHI CHAIN」は差枚数管理型。
- 型式名・検定番号は、今回の検索で本機を直接特定できる高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: OFFICIAL_DERIVED_FOR_MANUFACTURER / ANALYSIS_HIGH_MULTI_SOURCE_FOR_EXACT_RELEASE_DATE / CONFLICT_FOR_OFFICIAL_DERIVED_MONTH_DESCRIPTION

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.7% |
| 3 | 101.4% |
| 4 | 106.9% |
| 5 | 111.8% |
| 6 | 119.1% |

- パチ＆スロ必勝本、ちょんぼりすた、pacnkで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | AT初当たり | CZ突入率 |
|---:|---:|---:|
| 1 | 1/398.1 | 1/213.4前後 |
| 2 | 1/389.3 | 1/209.1前後 |
| 3 | 1/364.2 | 1/184.7前後 |
| 4 | 1/300.6 | 1/160.1前後 |
| 5 | 1/262.3 | 1/128.1前後 |
| 6 | 1/204.4 | 1/115.2前後 |

- 必勝本のAT初当たりは1/398.1～1/204.4。
- CZは当時解析間で丸め差のみ。ちょんぼりすたは1/213～1/115、pacnkは1/213.40～1/115.20。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約47G/50枚**。
- ちょんぼりすた、当時紹介系資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「OROCHI CHAIN」: **約2.5枚/G**。
- パチマガスロマガ、必勝本、ちょんぼりすた、山佐発表文転載資料で一致。
- confidence: INDUSTRY_DERIVED_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「OROCHI CHAIN」: **1セット100枚または250枚+α**。
- パチマガスロマガは100or250枚+α、必勝本は1セット100枚(+α)を基本説明として掲載。
- 期待枚数は当時解析で設定1ベース約363～370枚程度の記載があるが、物差し必須値ではないためcanonical性能コアには混入しない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- AT初当たりの主経路はCZ「古志城の刻」「復活ノ儀」等。
- 「古志城の刻」AT期待度: 約36%。
- 「復活ノ儀」AT期待度: 約53%。
- 通常天井: **AT終了後1190GでAT確定となる古志城の刻へ突入**。
- AT終了後には引き戻し状態が存在し、引き戻し確変状態が128G続いた場合はAT+遠呂智バトル確定という別契約がある。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- **天井までのゲーム数はリセット**。
- **内部状態は高確A・高確Bへの移行抽選**を行う。
- 中OROCHI高確移行抽選に関係する**規定8枚斬回数は56回または168回へ再振り分け**。
- 液晶ステージは実戦上、荒野 / 森 / 岩山 / 城外のいずれか。
- 必勝本「天井&設定変更」で設定変更と電源OFF→ONを明確に分離しているため、この契約をcanonicalとする。

### carryOverBehavior

- 設定据え置き単独表記の資料は今回限定的だが、必勝本が**電源OFF→ONでは天井G・状態・規定8枚斬回数を引き継ぐ**と明示。
- 営業上の据え置きは通常この純電断契約と整合するが、DBでは「設定据え置き」と「純電断」を完全同義にはせず、据え置きについては `CARRYOVER_SUPPORTED_BY_POWER_CYCLE_CONTRACT` として保持する。

### powerCycleBehavior

- **天井までのゲーム数: 引き継ぐ**。
- **内部状態: 引き継ぐ**。
- **規定8枚斬回数: 引き継ぐ**。
- 液晶ステージ: 実戦上、荒野 / 森 / 岩山 / 城外のいずれか。
- confidence: ANALYSIS_HIGH_DIRECT_COMPARATIVE_SOURCE

### gameCounterReset

- 設定変更: **RESET**。
- 電源OFF→ON: **CARRYOVER**。
- 据え置き: `CARRYOVER_SUPPORTED_BY_POWER_CYCLE_CONTRACT`。

### ceilingAfterReset

- 通常天井: **1190G**。
- 設定変更専用の短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 必勝本は変更後も「天井までのゲーム数リセット」とのみ記載し、短縮G数を設けていない。

### modeAfterReset

- 規定8枚斬回数は設定変更時に**56回または168回**へ再抽選。
- AT終了後の引き戻しシナリオ/モードについて、設定変更時専用の公開振り分けは今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ゲーム数解除型の通常モードとしては扱わない。

### stateAfterReset

- 設定変更時、高確A・高確Bをそれぞれ抽選。
- 両方当選時は**超高確**へ移行。
- 公開振り分け:
  - 高確A: 設定1 30.0% / 設定2 20.0% / 設定3 40.0% / 設定4 20.0% / 設定5 50.0% / 設定6 10.0%。
  - 高確B: 設定1 20.0% / 設定2 30.0% / 設定3 20.0% / 設定4 50.0% / 設定5 20.0% / 設定6 20.0%。
- 電源OFF→ON時は内部状態を引き継ぐ。
- confidence: ANALYSIS_HIGH_DIRECT_NUMERIC

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更時、8枚斬規定回数が**56回**を選択する可能性があり、通常の168回より中OROCHI高確抽選到達が早まる。
- 56回振り分け:
  - 設定1 70.3%
  - 設定2 50.0%
  - 設定3 75.4%
  - 設定4 50.0%
  - 設定5 80.1%
  - 設定6 50.0%
- 168回振り分け:
  - 設定1 29.7%
  - 設定2 50.0%
  - 設定3 24.6%
  - 設定4 50.0%
  - 設定5 19.9%
  - 設定6 50.0%
- 規定回数到達時の中OROCHI高確移行率は**全設定共通31.0%**。
- 設定変更時の高確A/B抽選も朝一挙動へ影響する。

### resetPenalties

- 前日のAT間天井進捗は設定変更で消失。
- 前日の内部状態・規定8枚斬回数は設定変更で再抽選となり、据え置き時の蓄積を失う場合がある。
- その他、設定変更時のみ発生する出玉上の主要不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 必勝本の直接比較資料では、変更時/電断時とも液晶ステージは複数候補からのスタートで、**ステージだけでの確定判別は困難**。
- 本機固有のリールガックン発生率・確定契約、表示リセットによる確定判別は、機種名/略称/山佐/型式候補と「ガックン」「朝一」「設定変更判別」「据え置き」を変えて再探索しても固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 56回規定選択や高確挙動は設定変更推測材料になり得るが、単発挙動での確定判別とはしない。

### numericResetData

- 設定変更時8枚斬規定回数56回選択率: **70.3 / 50.0 / 75.4 / 50.0 / 80.1 / 50.0%**（設定1～6）。
- 168回選択率: **29.7 / 50.0 / 24.6 / 50.0 / 19.9 / 50.0%**。
- 規定回数到達時の中OROCHI高確移行率: **31.0%（全設定共通）**。
- 設定変更時高確A移行率: **30 / 20 / 40 / 20 / 50 / 10%**。
- 設定変更時高確B移行率: **20 / 30 / 20 / 50 / 20 / 20%**。
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts

1. `CONFLICT_RELEASE_DATE_EXACT_2015_09_28_VS_OFFICIAL_DERIVED_2015_10_MONTH_DESCRIPTION`
   - 必勝本・パチセブン・複数当時解析: 2015-09-28。
   - 2015-12-03山佐発表文転載の4Gamer/Gamer: 「2015年10月にホールデビュー」。
   - 具体日付き当時資料の一致を優先し2015-09-28をcanonical、公式発表文由来の月表現はCONFLICT保持。

## missingFields

- formalModelName: `UNVERIFIED_AFTER_RESEARCH`。
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の引き戻しシナリオ/モード専用振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有のガックン確定契約/発生率: `UNVERIFIED_AFTER_RESEARCH`。

## boundaryAudit

- 前handoffの2015-09-14群CLOSED後、HAZUSE新台カレンダーを中心に2015-09-15～09-27を日付別に再監査。
- HAZUSEの2015年9月導入日群は **09-07 / 09-14 / 09-28** と整理され、09-15～09-27に独立した導入日群を確認できない。
- 別検索でもこの境界に全国実ホール導入日を具体日付きで固定できる未登録5号機を発見できず、**2015-09-15_TO_09-27_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH** とする。
- 2015-09-28群は本機を処理。次の既知未処理機は **アスラズ ラース（エンターライズ）**。HAZUSE/K-Naviで2015-09-28導入を確認済みのため群はOPENを維持する。

## sources

取得日: 2026-09-07

1. パチ＆スロ必勝本 基本スペック — https://p.hisshobon.jp/machine/2635/1/54033
   - 2015-09-28導入、AT初当たり、機械割、純増約2.5枚/G、AT基本100枚+α。
2. パチ＆スロ必勝本 天井&設定変更 — https://p.hisshobon.jp/machine/2635/1/54714
   - 天井1190G、設定変更時天井RESET、高確A/B抽選、規定8枚斬56/168、電源OFF→ON時の天井/状態/規定回数引継ぎ。
3. パチ＆スロ必勝本 中OROCHI抽選 — https://p.hisshobon.jp/machine/2635/1/54715
   - 設定変更時8枚斬56/168回の設定別振り分け、規定到達時中OROCHI高確31.0%。
4. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/205/a.php
   - 山佐/2015年9月、純増約2.5枚/G、AT100or250枚+α。
5. パチマガスロマガ ATフロー — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/205/l.php
   - CZ期待度、AT純増、AT1セット100枚+α。
6. ちょんぼりすた — https://chonborista.com/slot/yamasa-slot/11263/
   - 2015-09-28、機械割、AT/CZ確率、約47G/50枚、天井1190G、純増2.5枚/G、AT100/250枚+α。
7. pacnk — https://pacnk.com/slot/tools/sh_musouorochi.html
   - AT初当たり・CZ・PAYOUTの精密値。
8. パチセブン — https://pachiseven.jp/machines/4611/cutout/4
   - 導入日2015-09-28、メーカー山佐。
9. 期待値見える化 — https://slotjin.com/zone/musouorochi/
   - AT間1190G、設定変更で天井ゲーム数RESET、引き戻し天井128G+α。
10. 4Gamer 2015-12-03 — https://www.4gamer.net/games/326/G032647/20151203089/
   - 山佐発表文転載。「2015年10月にホールデビュー」とする月単位表現。
11. Gamer 2015-12-03 — https://www.gamer.ne.jp/news/201512030060/
   - 山佐アプリ発表、「2015年10月にホールデビュー」。
12. HAZUSE 新台カレンダー — https://hazuse.com/new-machine-calendar/newmachine-calendar/
   - 2015年9月の導入日群09-07 / 09-14 / 09-28。
13. HAZUSE アスラズ ラース — https://hazuse.com/machine/pachislot/5S0457/
   - 次機種候補、2015-09-28導入。
14. K-Navi アスラズ ラース — https://p-kn.com/slot/2351/
   - 次機種候補、2015-09-28ホール導入開始。

## confidence

- identity/manufacturer: OFFICIAL_DERIVED_PLUS_ANALYSIS_HIGH
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE_WITH_OFFICIAL_DERIVED_MONTH_CONFLICT
- payoutRateBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- initialHitBySetting: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- netIncrease/basicPayout: INDUSTRY_DERIVED_PLUS_ANALYSIS_HIGH_MULTI_SOURCE
- ceiling: ANALYSIS_HIGH_MULTI_SOURCE
- resetGameCounter: ANALYSIS_HIGH_DIRECT
- powerCycleBehavior: ANALYSIS_HIGH_DIRECT_COMPARATIVE
- resetStateNumeric: ANALYSIS_HIGH_DIRECT_NUMERIC
- reset8MaiGiriNumeric: ANALYSIS_HIGH_DIRECT_NUMERIC
- resetDetection: UNVERIFIED_AFTER_RESEARCH
