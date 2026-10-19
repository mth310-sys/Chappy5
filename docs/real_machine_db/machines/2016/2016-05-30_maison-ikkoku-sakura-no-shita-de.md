machineName: めぞん一刻 桜の下で
manufacturer: オリンピア
releaseDate: 2016-05-30
recordNumber: 981
generation: 5号機
systemType: ノーマルA / A+RT / 技術介入
formalModelName: めぞん一刻桜の下でN／F4
certificationNumber: 5S1452
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- 平和公式の2016年パチスロ一覧でオリンピア「めぞん一刻 桜の下で」を確認。公式一覧の「登場年月」は2016年03月だが、これは製品登場/発表側の年月で、ホール導入日とは分離する。
- グリーンべると2016-03-30記事は納品を2016-05-29予定と報道。
- ちょんぼりすた、期待値見える化、当時攻略資料が全国導入日を2016-05-30として一致。本DBのreleaseDate canonicalは2016-05-30。
- 型式 `めぞん一刻桜の下でN／F4`、検定番号 `5S1452` は機種DBで確認。
reliability: OFFICIAL_IDENTITY_PLUS_INDUSTRY_ANALYSIS_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.0% |
| 2 | 99.6% |
| 3 | 101.5% |
| 4 | 103.2% |
| 5 | 107.3% |
| 6 | 112.2% |

- PiDEAの導入前試打評価、複数当時解析、後年機種DBで同一系列を照合。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/344.9 | 1/532.8 | 1/209.4 |
| 2 | 1/336.1 | 1/512.0 | 1/202.9 |
| 3 | 1/326.0 | 1/496.5 | 1/196.8 |
| 4 | 1/318.1 | 1/481.9 | 1/191.6 |
| 5 | 1/296.5 | 1/445.8 | 1/178.1 |
| 6 | 1/273.1 | 1/409.6 | 1/163.8 |

- PiDEAは整数丸め（例: 1/345, 1/533）で掲載。精密値系列と矛盾せず丸め差として扱う。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 設定別解析値: **34.5 / 34.8 / 35.3 / 35.8 / 36.5 / 37.3G/50枚**（設定1→6）。
- 業界試打資料の代表値は **約35G/50枚**。
- canonical comparison value: **設定1 約34.5G/50枚**。一般概算として約35G/50枚も併記。
reliability: INDUSTRY_ANALYSIS_MULTI_SOURCE

## netIncrease
- RT「ドラマチックTIME」: **現状維持型**。
- PiDEA: **0枚/G**、別解析: **約0.1枚/G**。定義/丸め差があるため、物差し上は `APPROX_BREAK_EVEN_RT` とし、厳密純増値を平均しない。
reliability: CONFLICT_MINOR_DEFINITION_ROUNDING

## basicPayout
- BIG BONUS: **最大311枚**。
- REGULAR BONUS: **最大155枚**。
- 全ボーナス終了後に **30G** のRT「ドラマチックTIME」へ突入。
- RTは非完走型。ボーナス成立で終了する。
reliability: OFFICIAL_INDUSTRY_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 天井: **非搭載**。
- 通常時のゲーム数モード/ゾーン管理: **NOT_APPLICABLE**。
- ボーナス+30G RTが性能骨格。AT/ARTの初当たり管理機ではない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_RT_POWER_STATE_UNVERIFIED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 本機はゲーム数天井・朝一ゲーム数モードを持たないため、設定変更による天井短縮/ゲーム数再抽選は **NOT_APPLICABLE**。
- 設定変更後に最初に成立する赤7BIGでは、SPエピソード選択率に専用振り分けが存在することを当時解析で確認。
- したがって「設定変更」が内部のエピソード選択条件へ影響すること自体は公開解析で確認できる。
- ただし、設定変更時に30G RT残ゲーム数/RT内部状態がどう処理されるかを本機固有資料で直接固定できず、一般論から推定しない。
reliability: ANALYSIS_HIGH_FOR_EPISODE_RESET_TABLE / UNVERIFIED_FOR_RT_STATE_RESET

### carryOverBehavior
- 通常ゲーム数天井/モード: **NOT_APPLICABLE**。
- 前日RT中閉店時に、据え置き翌朝でRT残ゲーム数/内部RT状態がどうなるかについて、本機固有の直接資料は検索語・資料系統変更後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ボーナス成立状態を含む個別制御も推測で埋めない。
reliability: UNVERIFIED_AFTER_RESEARCH

### powerCycleBehavior
- 純電源OFF→ONのみの場合の30G RT残ゲーム数/内部RT状態、成立済みボーナス状態、液晶表示の復帰契約は本機固有資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更と純電断を同義扱いしない。
reliability: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- 通常ゲーム数天井: **NOT_APPLICABLE / NONE**。
- 天井ゲーム数カウンタ: **NOT_APPLICABLE**。
- RTはボーナス後30Gの有限RTであり、通常時天井ゲーム数とは分離。

### ceilingAfterReset
- **NOT_APPLICABLE**。天井非搭載。
- 設定変更専用短縮天井: **NONE**。

### modeAfterReset
- 朝一ゲーム数モード/天国モード等: **NOT_APPLICABLE / NONE_CONFIRMED**。
- 設定変更後専用の初当たり優遇モードは確認されていない。

### stateAfterReset
- 通常時高確/低確のようなAT/ART内部状態: **NOT_APPLICABLE**。
- 30G RT内部状態の設定変更時処理は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更後の赤7BIG時SPエピソード選択条件は別項目として公開数値を保持する。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 天井短縮、朝一高確、専用CZ等の主要な初当たり恩恵は **NONE / NOT_APPLICABLE**。
- 設定変更後の赤7BIG時にSPエピソード選択率が通常エピソード後より高く設定されるが、これは主に設定推測/演出選択上の差であり、初当たり出玉恩恵として扱わない。

### resetPenalties
- 前日天井進捗喪失: **NOT_APPLICABLE**。
- 設定変更専用の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 公開された「設定変更後の赤7BIG時SPエピソード選択率」は、変更後であることを前提に設定推測へ使う数値であり、単独で朝一即座に設定変更/据え置きを確定する判別器とは扱わない。
- 本機固有のガックン、初期出目、ランプ等による確定的な変更判別は、機種名/型式/オリンピア/設定変更/リセット/朝一/据え置き/電源OFF ON/RT/ガックンを組み替えた再探索でも **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
- **赤7BIG時 SPエピソード選択率（設定変更後）**
  - 設定1〜4: **10.0%**
  - 設定5: **25.0%**
  - 設定6: **12.5%**
- 比較参考として通常エピソード後は設定1〜4 **0.5%**、設定5 **2.5%**（設定6の表は取得HTML上で列崩れ/省略があり、この欄では推定補完しない）。
- リセット専用短縮天井: **NOT_APPLICABLE**。
- リセット専用初当たり/CZ率: **NONE_CONFIRMED**。
reliability: ANALYSIS_HIGH_PERIOD_FOR_RESET_EPISODE_TABLE

## dataQualityNotes
- 平和公式の年別一覧は「登場年月: 2016年03月」、業界記事は3/29展示会・5/29納品予定、複数攻略資料は5/30導入。これらは発表/製品登場とホール導入の定義差として扱い、releaseDate canonicalは2016-05-30。
- RT純増はPiDEAの0枚/Gと別解析の約0.1枚/Gがあるため平均せず `CONFLICT_MINOR_DEFINITION_ROUNDING`。どちらも現状維持型という定性的評価は一致。
- resetBehaviorは天井非搭載のノーマルA+RTという構造上、ゲーム数リセット恩恵は非該当。一方、設定変更後専用のSPエピソード選択率は公開数値として収録した。
- RT状態の設定変更/据え置き/純電断処理は、本機固有資料が固定できないため標準的5号機挙動から推定していない。

## sources
取得日: 2026-09-08

1. 株式会社平和 — 2016年パチスロ機種一覧
   - https://www.heiwanet.co.jp/products/pachislot/2016/
   - オリンピア製品、2016年製品一覧、公式上の登場年月2016年03月。
   - reliability: OFFICIAL
2. グリーンべると — 出玉感あるボーナスにRT追加で遊びやすさ追求！
   - https://web-greenbelt.jp/00008549/
   - 2016-03-29展示会、納品5/29予定、BIG最大311枚、REG最大155枚、全ボーナス後30G RT。
   - reliability: INDUSTRY
3. PiDEA X — 三木流、めぞん一刻の評価は？
   - https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E3%82%81%E3%81%9E%E3%82%93%E4%B8%80%E5%88%BB%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
   - 2016-04-08。納品5/29〜、設定別BIG/REG/合算/出玉率、約35G/50枚、天井なし、RT30G、RT純増0枚/G。
   - reliability: INDUSTRY_PERIOD
4. P-WORLD — めぞん一刻 桜の下で
   - https://www.p-world.co.jp/machine/database/8017
   - オリンピア、5号機RT/技術介入、BIG最大311枚、REG最大155枚、30G RT。
   - reliability: INDUSTRY_DATABASE
5. パチマガスロマガ — めぞん一刻 桜の下で
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/125/a.php
   - A+RT、全ボーナス後30G RT、技術介入。
   - reliability: ANALYSIS_HIGH
6. すろぱちくえすと — めぞん一刻 桜の下で 設定判別・コイン持ち・スペック解析
   - https://www.slopachi-quest.com/article/mezon-sakura/
   - 設定別コイン持ち、BIG/REG/合算/機械割、天井非搭載、設定変更後赤7BIG時SPエピソード選択率。
   - reliability: PERIOD_ANALYSIS_HIGH
7. ちょんぼりすた — めぞん一刻 -桜の下で-
   - https://chonborista.com/slot/orinpia-slot/18800/
   - 2016-05-30導入、A+RT、性能照合。
   - reliability: PERIOD_ANALYSIS
8. 期待値見える化 — めぞん一刻桜の下で 設定判別ツール＆スペック
   - https://slotjin.com/slot-tool/mezon-sakurano/
   - 5/30導入、設定別性能、約35G/50枚、天井なし。
   - reliability: PERIOD_ANALYSIS
9. Pachinavi — パチスロ めぞん一刻 ～桜の下で～
   - https://pachinavi.net/machines/maison-ikkoku-sakura/
   - 型式 `めぞん一刻桜の下でN／F4`、検定番号 `5S1452`、設定別精密性能値。
   - reliability: SECONDARY_DATABASE
10. 必勝期待値クマぱぱ — めぞん一刻～桜の下で～
   - https://xn--x9ja8p0go69l5jtgfm.com/mezon-sakura-2108
   - 2016-05-30導入、約35G/50枚、RT約0.1枚/G、天井非搭載。
   - reliability: PERIOD_ANALYSIS

## missingFields
- 設定変更時のRT残ゲーム数/RT内部状態の直接処理: UNVERIFIED_AFTER_RESEARCH
- 据え置き翌朝のRT残ゲーム数/RT内部状態: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時のRT残ゲーム数/内部RT/成立済みボーナス/液晶復帰契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有のガックン等による確定的設定変更判別: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts
- `RT_NET_INCREASE_MINOR`: **0枚/G**（PiDEA） vs **約0.1枚/G**（別解析）。平均せず両値保持。いずれも現状維持RT。
- `RELEASE_DATE_DEFINITION`: 公式年別一覧の「登場年月2016年03月」 vs 業界納品5/29予定/複数解析のホール導入5/30。発表/登場とホール導入の定義差としてcanonical 2016-05-30。
