# パチスロ モンキーターンIV

No: 1352
machineName: パチスロ モンキーターンIV
machineNameVariants: パチスロ モンキーターンIV / パチスロ モンキーターンⅣ / モンキーターン4 / Sモンキーターン4ZDD
manufacturer: 山佐
releaseDate: 2020-05-11
formalModelName: Sモンキーターン4ZDD
certificationNumber: 9S1729
generation: 6号機
systemType: AT / 規定ゲーム数・シナリオ管理

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 98.4% |
| 2 | 99.6% |
| 3 | 101.0% |
| 4 | 104.1% |
| 5 | 107.1% |
| 6 | 110.3% |

- 複数解析資料で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | AT「SG RUSH」初当り |
|---|---:|
| 1 | 1/381.7 |
| 2 | 1/318.8 |
| 3 | 1/315.8 |
| 4 | 1/239.2 |
| 5 | 1/210.7 |
| 6 | 1/160.4 |

- 1geki、スロ確、複数解析資料で一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約40G/50枚。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT「SG RUSH」: 約2.7枚/G。
- reliability: ANALYSIS_HIGH

## basicPayout
- AT「SG RUSH」: 1セット40G+α（周回パート30G+α + SGレース10G）。
- 初当りはAT直撃型。基本獲得を固定枚数で表す機種ではないため、物差し上は1セットG数と純増を採用。
- reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は通常A / 通常B / 引き戻し / 天国の4モード。
- モード別最大天井（液晶上の内部G数）: 通常A 1000G / 通常B 600G / 引き戻し 300G / 天国 100G。
- 最大1000G到達でAT「SG RUSH」当選。
- 勝負駆けチャレンジによるゲーム数加算があるため、データカウンタの実回転数と液晶内部G数は一致しない場合がある。
- 深いG数でのAT当選にはシナリオ優遇があり、600G以上でシナリオランク2以上、900G以上でランク3以上とする解析資料あり。これは通常天井狙い関連値であり、リセット専用恩恵ではない。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は天井までの内部ゲーム数をRESETし、0Gから再カウント。
- 有利区間もRESETされ、朝一は非有利区間から開始する。
- 新たな有利区間移行時に次回モードを抽選する。
- 朝一リセット時の天国移行率は全設定共通25%と複数解析で確認。

### carryOverBehavior
- 据え置き時は内部天井ゲーム数・有利区間を引き継ぐ扱い。
- 通常時から有利区間ランプが点灯する機種のため、前日有利区間中に終了した据え置き台では朝一ランプ点灯が主要な推測材料になる。
- 前日0Gヤメ等の条件ではランプのみで確定判別できないため「濃厚」扱いに留める。

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ONでは天井をCARRY_OVER。
- 有利区間もCARRY_OVERし、有利区間ランプは基本的に点灯状態を維持するとの解析資料あり。
- 設定変更と純電断で挙動が明確に異なる。

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電断: CARRY_OVER。
- 天井判定はデータカウンタではなく液晶右側の内部G数基準。勝負駆けチャレンジで加算されたゲーム数も天井へ反映される。

### ceilingAfterReset
- リセット専用の一律短縮天井は確認されていない。
- 設定変更後も選択モードに応じ100 / 300 / 600 / 1000Gが最大天井。
- ただしリセット時は全設定共通25%で天国が選択されるため、その場合は100G以内のAT当選が確定する。

### modeAfterReset
- 設定変更後は有利区間移行時に通常A / 通常B / 引き戻し / 天国を再抽選。
- 天国選択率は全設定共通25%。残る通常A/B/引き戻しの完全な設定変更専用振り分けは、今回確認した公開資料では固定値として掲載されていないため推測しない。
- 有利区間移行ゲームで弱レア役成立なら通常B以上、強チェリーまたは強チャンス目なら引き戻しor天国となる解析がある。

### stateAfterReset
- 設定変更で旧有利区間のゲーム数・モード状態を持ち越さず、非有利区間から新しい有利区間へ移行する。
- ゲーム数管理モード以外の朝一専用高確状態や独立した設定変更専用内部状態の公開固定値は確認されていない。

### advantageousSectionReset
- 設定変更: RESET / 非有利区間へ移行。
- 据え置き / 純電断: CARRY_OVER。

### resetBenefits
- 朝一リセット時の天国移行率は全設定共通25%。天国なら100G以内AT当選。
- 非有利区間→有利区間移行ゲームのレア役は上位モード選択を優遇。弱レア役で通常B以上、強チェリー/強チャンス目で引き戻しor天国とする解析あり。
- 「設定変更専用の天井短縮」はなし。

### resetPenalties
- 設定変更固有の主要な不利要素は、今回の再探索で公開固定情報を確認できずNONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 通常時から有利区間ランプ点灯タイプ。
- 朝一ランプ点灯: 据え置き濃厚。
- 朝一ランプ消灯: 設定変更濃厚。
- 前日0Gヤメ等ではランプ判別に例外があるため確定扱いにしない。
- 本機固有のリールガックン発生条件・発生率・確定性は、機種名/型式/山佐/設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンを組み替えて再探索したが高信頼の直接契約を確認できず、推測で補完していない。

### numericResetData / publicMorningNumbers
- リセット時天国移行率: 25%（全設定共通）。
- 天国最大天井: 100G。
- 通常A/B/引き戻し/天国の最大天井: 1000 / 600 / 300 / 100G。
- 有利区間移行時の勝負駆けポイント初期値（設定変更専用ではなく有利区間移行時共通）: 0pt 50.00% / 1pt 39.45% / 3pt 6.25% / 5pt 3.13% / 15pt 1.17%。
- リセット専用の通常A/B/引き戻し全振り分け: PUBLIC_VALUE_NOT_FIXED_IN_RESEARCHED_SOURCES。

## resetBehavior 再探索メモ
2026-09-11に `パチスロ モンキーターンIV / モンキーターンⅣ / モンキーターン4 / Sモンキーターン4ZDD / 9S1729 / 山佐 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 天国 / 有利区間 / 有利区間ランプ / ガックン` を組み替え、1geki、HAZUSE、K-Navi、なな徹、SLOT HACK、スロットセブン、期待値見える化、スロ確、当時導入カレンダーを横断。天井RESET/電断CARRY_OVER、有利区間RESET/CARRY_OVER、ランプ判別、リセット時天国25%は別系統資料で照合できた。ガックンの本機固有条件とリセット時残り3モードの完全振り分けは固定できず、一般的山佐機挙動や後継スマスロの仕様から転記していない。

## conflicts
- 性能コアに重大CONFLICTなし。
- Roman numeral表記（IV / Ⅳ）と数字表記（4）は同一機種の表記揺れとして扱う。

## missingFields
- リセット時の通常A / 通常B / 引き戻しの完全振り分け（天国25%以外）。
- 本機固有ガックンの直接契約。

## coreStatus
- **COMPLETE_CORE**

## overallReliability
- **ANALYSIS_HIGH_WITH_TYPE_AND_DATE_CROSSCHECK**

## sources
取得日: 2026-09-11

1. HAZUSE「パチスロ モンキーターンIV」
   - https://hazuse.com/machine/pachislot/9S1729/
   - 型式Sモンキーターン4ZDD、検定番号9S1729、2020-05-11導入、純増約2.7枚/Gを確認。
   - reliability: ANALYSIS_HIGH
2. 1geki「モンキーターン4 解析攻略」
   - https://1geki.jp/slot/s_mkt4/
   - 設定別AT初当り・出玉率、導入日、純増、1セット40G+αを確認。
   - reliability: ANALYSIS_HIGH
3. 1geki「小役確率と通常時のベース」
   - https://1geki.jp/slot/s_mkt4/4/
   - 約40G/50枚を確認。
   - reliability: ANALYSIS_HIGH
4. 1geki「天井とやめどき」
   - https://1geki.jp/slot/s_mkt4/3/
   - モード別1000/600/300/100G天井とハマリ時シナリオ優遇を確認。
   - reliability: ANALYSIS_HIGH
5. 1geki「リセット100回検証実戦」
   - https://1geki.jp/slot/s_mkt4/92/
   - 朝一リセット時およびAT終了後の天国移行率が全設定共通25%であることを確認。
   - reliability: ANALYSIS_HIGH
6. 1geki「勝負駆けポイント」
   - https://1geki.jp/slot/s_mkt4/42/
   - 有利区間移行時の勝負駆けポイント初期値振り分けを確認。
   - reliability: ANALYSIS_HIGH
7. スロットセブン「モンキーターン4 朝一解析」
   - https://slot-seven.com/monkeyturn4-tenzyou/
   - 設定変更時の天井/有利区間RESET、純電断時CARRY_OVER、朝一ランプ挙動を確認。
   - reliability: ANALYSIS_SINGLE
8. 期待値見える化「モンキーターン4」
   - https://slotjin.com/tenjoukitaichi/monkeyturn4/
   - 通常時有利区間ランプ点灯型、朝一ランプ点灯=据え置き濃厚/消灯=リセット濃厚を別系統で照合。
   - reliability: ANALYSIS_HIGH
9. なな徹「モンキーターンIV モード別の規定ゲーム数」
   - https://nana-press.com/kaiseki/machine/46/793/
   - モード別天井、天国25%、モード特徴を照合。
   - reliability: ANALYSIS_HIGH
10. SLOT HACK「モンキーターン4 天井解析」
   - https://slothack.net/matome/7573/
   - 非有利区間中レア役による次回モード優遇、朝一解析を確認。
   - reliability: ANALYSIS_HIGH
11. K-Navi「パチスロ モンキーターンIV」
   - https://p-kn.com/slot/3420/
   - 2020-05-11導入を別系統で確認。
   - reliability: ANALYSIS_SINGLE
12. パチンコ・パチスロ.com「新台導入日カレンダー2020」
   - https://pachinkopachisro.com/archives/53951811.html
   - 2020-05-11群のSモンキーターン4、Sヤッターマン絶対正義、Sパチスロダイナマイトキング極を確認。
   - reliability: INDUSTRY_CALENDAR_SECONDARY
