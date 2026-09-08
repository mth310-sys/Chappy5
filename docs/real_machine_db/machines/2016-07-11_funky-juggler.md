machineName: ファンキージャグラー
manufacturer: 北電子
releaseDate: 2016-07-11
recordNumber: 994
generation: 5号機 / ノーマルタイプ期
systemType: ノーマル / 完全告知 / BIG+REG
formalModelName: ファンキージャグラー／KK
certificationNumber: 5S1422
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEは型式 `ファンキージャグラー／KK`、検定番号 `5S1422`、導入開始日2016-07-11を掲載。
- パチセブンも導入日2016-07-11、北電子、ノーマルタイプで一致。
- K-Navi、ちょんぼりすた等には2016-07-04表記があり、P-Summaにも7/4大量導入との回顧記述がある。一方、2016-05-23付グリーンべるとは納品7/10開始、2016-07-11付グリーンべるとは同日より導入開始した機種として扱う。実導入の時系列正本では2016-07-11をcanonicalとし、2016-07-04を `CONFLICT_RELEASE_DATE_0704_VS_0711` として保持する。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.2% |
| 3 | 99.8% |
| 4 | 102.0% |
| 5 | 104.3% |
| 6 | 109.0% |
- グリーンべると当時業界記事は設定1〜6レンジ97.0〜109.0%、HAZUSE/ちょんぼりすたは全設定表で一致。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/275.4 | 1/452.0 | 1/171.1 |
| 2 | 1/271.9 | 1/407.1 | 1/163.0 |
| 3 | 1/267.5 | 1/372.4 | 1/155.7 |
| 4 | 1/260.1 | 1/336.1 | 1/146.6 |
| 5 | 1/253.0 | 1/302.0 | 1/137.7 |
| 6 | 1/232.4 | 1/275.4 | 1/126.0 |
- K-Navi、HAZUSE、複数解析資料で一致。グリーンべると当時記事も合算1/171.1〜1/126.0を確認。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 代表値: **約35G/50枚**。
- 設定別解析値: **35.0 / 35.0 / 35.2 / 35.4 / 35.7 / 35.9G/50枚**（設定1〜6）。
- 物差し比較では市場代表値約35Gを使用し、設定別計算値は補助として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- NOT_APPLICABLE_NORMAL_BONUS_MACHINE。
- AT/ARTによる継続純増は非搭載。

## basicPayout
- BIG: **約312枚**。
- REG: **約104枚**。
- P-WORLD、HAZUSE、グリーンべるとで一致。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 天井: **非搭載**。
- AT/ART、CZ、通常A/B・天国等のゲーム数管理モード: **非搭載**。
- 完全告知ノーマルタイプで、GOGO!ランプ点灯でボーナス確定。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_PARTIAL_POWER_CONTRACT
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- ゲーム数天井・長期ゲーム数モードを持たないため、天井進捗やモードの設定変更契約は **NOT_APPLICABLE**。
- 複数ジャグラー系解析で、設定変更後の朝一1G目にリール始動時の微小な「ガックン」が発生することを本機固有動画/解説付きで確認。
- 一部解析は設定変更で特殊BGMの成立条件カウンタがリセットされるとするが、一次/当時系で十分な独立照合を固定できないため補助情報扱い。

### carryOverBehavior
- 天井・長期モードがないため、それらの据え置き恩恵/不利は **NOT_APPLICABLE**。
- ガックン判別資料では「朝一1G目ガックン→設定変更濃厚」とされ、据え置き実機との比較動画も存在する。ただしホールが事前に1G回す、リール清掃等の物理操作で判別が崩れるため、非ガックンを据え置き確定とはしない。

### powerCycleBehavior
- 純電源OFF→ONだけで天井・ゲーム数モードへ影響する要素は **NOT_APPLICABLE**。
- 「純電源OFF→ONのみ」でガックンが発生する/しないことを本機固有の高信頼資料で独立固定できず **UNVERIFIED_AFTER_RESEARCH**。設定変更時ガックンと純電断を同一視しない。
- ボーナス成立済み等の瞬間的内部状態を跨ぐ電断契約は物差し用途外かつ直接資料未固定のため推測しない。

### gameCounterReset
- **NOT_APPLICABLE_NO_GAME_CEILING**。

### ceilingAfterReset
- **NOT_APPLICABLE_NO_CEILING**。
- リセット専用短縮天井なし。

### modeAfterReset
- **NOT_APPLICABLE_NO_GAME_NUMBER_MODE_SYSTEM**。
- 朝一専用モードなし。

### stateAfterReset
- 朝一客AIに必要な高確/低確等の長期内部状態は **NOT_APPLICABLE / NONE_CONFIRMED**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の天井短縮・高確移行・CZ優遇・特定G以内当選率上昇は **NONE_CONFIRMED / NOT_APPLICABLE**。
- 設定変更そのものの出玉恩恵は確認されず、主な朝一価値はガックンによる変更推測。

### resetPenalties
- 前日天井進捗消失等は **NOT_APPLICABLE**。
- 公開された設定変更固有の主要な出玉不利は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- **朝一1G目のガックンが設定変更推測に利用可能**。
- 本機は従来ジャグラーよりブレが小さく、等速目視では判別しづらくスロー撮影で確認しやすいとの実機比較資料あり。
- ガックンなし＝据え置き確定ではない。店側の1G回し対策、リール手回し/清掃等で偽陰性・偽陽性が生じ得る。
- 特殊BGM条件リセットを変更判別に使えるとする二次資料はあるが、確定判別器には格上げしない。

### numericResetData
- 短縮天井: **NOT_APPLICABLE**。
- リセット時モード振り分け: **NOT_APPLICABLE**。
- 朝一特定G以内の専用当選率: **NONE / NOT_APPLICABLE**。
- 設定変更専用の公開出玉数値: **NONE_CONFIRMED_AFTER_RESEARCH**。

## dataQualityNotes
- 導入日は資料競合を平均せず保持。7/4を掲載する攻略DBが複数ある一方、HAZUSE/パチセブンは7/11、当時グリーンべるとは7/10納品開始予定および7/11導入開始と報じるため、本DBの実導入canonicalを7/11とした。
- 設定4 REGを1/366.1とする単一ページがあるが、K-Navi/HAZUSE/主要解析の1/336.1と整合せず、転記誤りとみられる。ただし原値はconflictsに残し平均しない。
- ガックンは本機固有の実機比較/動画解説があるため変更推測として採用。ただし純電源OFF→ON契約は直接固定できないため別項目でUNVERIFIED。
- 特殊BGMは設定示唆/演出条件と変更判別を混同しない。

## sources
取得日: 2026-09-08

1. グリーンべると / P-WORLD業界ニュース — 2016-05-23
   - https://news.p-world.co.jp/articles/8390/greenbelt
   - 型式ファンキージャグラーKK、合算1/171.1〜1/126.0、出玉率97.0〜109.0%、BB312枚/RB104枚、7/10納品開始予定。
   - reliability: INDUSTRY
2. グリーンべると — 2016-07-11
   - https://web-greenbelt.jp/00008789/
   - 7/11より導入開始した機種としてキャンペーン開始を報道。
   - reliability: INDUSTRY
3. HAZUSE — ファンキージャグラー
   - https://hazuse.com/machine/pachislot/5S1422/
   - 導入開始2016-07-11、型式ファンキージャグラー／KK、検定番号5S1422、機械割、配当/獲得枚数。
   - reliability: PERIOD_ANALYSIS_HIGH
4. HAZUSE — 設定推測
   - https://hazuse.com/machine/pachislot/5S1422/genre/208/
   - BIG/REG設定別確率、型式/検定番号/導入日。
   - reliability: PERIOD_ANALYSIS_HIGH
5. P-WORLD — ファンキージャグラー
   - https://www.p-world.co.jp/machine/database/8053
   - 北電子、5号機ノーマル、完全告知、BIG約312枚/REG約104枚。
   - reliability: INDUSTRY_DATABASE
6. K-Navi — ファンキージャグラー
   - https://p-kn.com/slot/2518/
   - 2016-07-04表記、設定別BIG/REG等。導入日CONFLICT側として保持。
   - reliability: PERIOD_ANALYSIS
7. ちょんぼりすた — 全ジャグラーシリーズまとめ
   - https://chonborista.com/slot/kitadenshi/9698/comment-page-4/
   - 7/4表記、機械割、BIG/REG/合算、約35G/50枚、312/104枚。
   - reliability: ANALYSIS_HIGH
8. ジャグラー解析攻略 — ファンキージャグラー
   - https://juggler7.com/funky/
   - 本機の朝一ガックン、設定変更判別、設定別ベース35.0〜35.9G。特殊BGM条件リセットは補助情報。
   - reliability: ANALYSIS_SINGLE
9. スロパチクエスト — ファンキージャグラー設定差まとめ
   - https://www.slopachi-quest.com/article/funkyjuggler-settei/
   - 据え置き/設定変更の実機比較動画を基に、本機でもガックンすることを確認。
   - reliability: ANALYSIS_SINGLE_WITH_EMPIRICAL_VIDEO
10. パチセブン — ファンキージャグラー 本機の特徴
   - https://pachiseven.jp/machines/4856/cutout/2
   - 導入日2016-07-11、北電子、ノーマル、天井機能なし。
   - reliability: PERIOD_ANALYSIS

## missingFields
- 純電源OFF→ONのみの本機固有ガックン契約: UNVERIFIED_AFTER_RESEARCH
- 純電断時の瞬間的ボーナス内部状態契約: OUT_OF_SCOPE_OR_UNVERIFIED

## conflicts
- `CONFLICT_RELEASE_DATE_0704_VS_0711`: K-Navi/ちょんぼりすた等は2016-07-04、HAZUSE/パチセブン/当時グリーンべるとは2016-07-11側。canonical=2016-07-11。
- `CONFLICT_REG_SETTING4_TYPO_336_1_VS_366_1`: 主要複数資料1/336.1に対し一部二次ページ1/366.1。平均せず主要一致値1/336.1をcanonical。

## QA note
- 新規時点からresetBehavior v0.7を収録。
- 性能コアは業界記事・業界DB・当時解析を横断して複数照合。
- ノーマル機なので天井/モード/有利区間項目を無理に埋めずNOT_APPLICABLEを明記。
- 朝一ガックンは出玉恩恵ではなく変更判別情報として保存し、純電断と分離した。
