# パチスロ交響詩篇エウレカセブン3 HI-EVOLUTION ZERO

recordNo: 1324
machineName: パチスロ交響詩篇エウレカセブン3 HI-EVOLUTION ZERO
machineNameVariants: エウレカセブン3 / エウレカ3 / Sエウレカセブン3 HIEVO ZR
manufacturer: サミー
formalModel: Sエウレカセブン3 HIEVO ZR
certificationNumber: 9S1265
releaseDate: 2019-12-09
releaseDateNote: HAZUSE・日刊スポーツ導入カレンダー・すろぱちくえすと等は2019-12-09。一方、複数の当時解析・ぱちガブ系資料には2019-12-16表記があり、地域/導入開始定義差としてCONFLICT保持。
generation: 6号機
systemType: AT / 疑似ボーナス+ST型AT

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 98.0% |
| 2 | 98.8% |
| 3 | 100.5% |
| 4 | 104.3% |
| 5 | 107.1% |
| 6 | 111.2% |

HAZUSE、P-WORLD、複数解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BONUS合算

| 設定 | BONUS |
|---|---:|
| 1 | 1/257.5 |
| 2 | 1/247.1 |
| 3 | 1/231.9 |
| 4 | 1/204.2 |
| 5 | 1/189.0 |
| 6 | 1/165.4 |

### AT「コーラリアンモード」出現率

| 設定 | AT |
|---|---:|
| 1 | 1/365.7 |
| 2 | 1/342.6 |
| 3 | 1/330.2 |
| 4 | 1/282.3 |
| 5 | 1/265.5 |
| 6 | 1/220.3 |

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約50.5～51G/50枚**。
- すろぬー約50.5G、当時解析約50.59G、ぱちんこキュレーション約51G。定義/丸め差として同一レンジで保持。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT/CHANCE GAME系: **約1.8枚/G**。
- JAC・REG・SPEC3系: **約4.5枚/G**。

信頼度: INDUSTRY_DB + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG BONUS: **平均約170枚**。
- HYPER BIG BONUS: **平均約255枚**。
- REG BONUS: **20G+押し順当て5回**、解析目安では平均約36枚。
- AT「コーラリアンモード」: **1セット30G、約1.8枚/G**。
- SPEC3 MODE: **1セット10G、約4.5枚/G**。
- HI-EVO MODE: **100G、約1.8枚/G**。

P-WORLD・当時解析で照合。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- ゲーム数天井は有利区間移行後 **707G+前兆**。到達でBIG当選、ATレベル2以上。
- **303G**到達時にもBIG抽選があり、設定別当選率は5.0%～27.5%。これは確定天井ではなく中間抽選として分離。
- 周期天井は **10周期到達でBONUS+AT濃厚**。
- 通常時はコンパクカウンターを用いた周期管理。細かな周期別抽選や通常モード全移行表は本DB対象外。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_MORNING_DETECTION_AND_NUMERIC_SAMPLE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 設定変更時は **天井までの内部ゲーム数RESET**。
- コンパクカウンターは **0から開始**。
- 有利区間は **RESETされ非有利区間経由**、有利区間ランプは消灯。
- 有利区間移行時は **必ずコンパクカウントチャンス（KCC）へ突入**し、初期ATレベル抽選・KCC高確抽選を行う。
- 有利区間移行直後は最大100GのKCC高確へ移行する解析がある。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior

- 据え置き時は **内部天井Gを引き継ぐ**。
- コンパクカウンターも内部的に引き継ぐが、見た目は0表示から始まる。
- 有利区間・有利区間ランプも引き継ぐ。
- 朝一に0/1000表示からハズレ/リプレイで数字が大きく加算される挙動は据え置き推測材料。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### powerCycleBehavior

- 純電源OFF→ONでは **天井G・コンパクカウンター内部値・有利区間をCARRY_OVER**。
- 液晶ゲーム数は「---」表示へ戻り、コンパクカウンターも見た目上は初期表示になるため、表示リセットと内部リセットを分離。
- ステージは原則ユカタンへ。ただしKCC・BONUS・AT中の電断は状態引継ぎとする当時解析あり。

信頼度: ANALYSIS_HIGH_CONTEMPORARY

### gameCounterReset

- 設定変更: **RESET**。
- 据え置き/純電断: **CARRY_OVER**。
- 表面カウンターの見た目は据え置きでも初期化されるため、内部値とは別管理。

### ceilingAfterReset

- 設定変更専用の短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常の確定ゲーム数天井は有利区間移行後707G+前兆、周期天井は10周期。

### modeAfterReset

- 有利区間移行時に初期ATレベルを再抽選。
- 設定変更専用の別モード振り分けとして公表された固定テーブルは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 有利区間移行時の初期ATレベル抽選そのものは確認済みだが、通常時全移行テーブルは対象外。

### stateAfterReset

- 有利区間移行時はKCC突入、KCC高確へ移行。
- DMM解析では有利区間移行時に「必ず高確からスタート」と明記。

### advantageousSectionReset

- 設定変更: **RESET / 非有利区間へ / ランプ消灯**。
- 据え置き・純電断: **CARRY_OVER / ランプ引継ぎ**。

### resetBenefits

- 設定変更後、有利区間移行時は **KCC突入確定**。
- 初回KCCは通常KCCよりポイント獲得が優遇される解析あり。
- 非有利区間中のレア役はBONUS抽選。
- 有利区間移行時は高確スタート。

### resetPenalties

- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 朝一有利区間ランプ **点灯なら据え置き濃厚 / 消灯なら設定変更濃厚**。前日閉店状態やホール側対策に依存するため「確定」扱いしない。
- 朝一KCC突入なら設定変更濃厚、非突入なら据え置き濃厚とする当時解析あり。
- 据え置き時はコンパクカウンターが見た目0から始まり、ハズレ/リプレイで内部引継ぎ分が一気に加算されることがある。
- 本機固有のリールガックン発生条件/発生率は検索語変更後も固定できず `PUBLIC_GAKKUN_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers

- 新台初日/1回目初当たりサンプル1295件の攻略集計:
  - 10G以内 0.23%
  - 11～20G 0.23%
  - 21～30G 0.77%
  - 31～40G 2.16%
  - 41～50G 2.01%
- これはメーカー公表値ではなく、攻略サイトが引用した実戦サンプルとして分離保存。
- 設定変更専用の初期ATレベル振り分け固定値: `PUBLIC_VALUE_NOT_FIXED_AS_RESET_ONLY_TABLE`。

### resetBehavior 再探索メモ

2026-09-11に `エウレカセブン3 / パチスロ交響詩篇エウレカセブン3 HI-EVOLUTION ZERO / Sエウレカセブン3 HIEVO ZR / 9S1265 / Sammy` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 303G / 707G / 10周期 / モード / 状態 / コンパクカウンター / KCC / 有利区間 / 有利区間ランプ / ガックン / 変更判別` を組み替えて、HAZUSE、グリーンべると、P-WORLD、DMM、必勝本、当時解析・攻略サイトを横断。主要resetBehaviorは複数資料一致。ガックンのみ本機固有公開契約を固定できなかったためUNVERIFIEDとした。

## conflicts

### releaseDate
- **2019-12-09**: HAZUSE、日刊スポーツ導入カレンダー、すろぱちくえすと等。
- **2019-12-16**: ちょんぼりすた、複数当時解析、ぱちガブ系資料。
- 本DBでは12/09をchronological canonicalとし、12/16を地域/全国導入定義差のCONFLICTとして保持。

## sources

取得日: 2026-09-11

1. HAZUSE — パチスロ交響詩篇エウレカセブン3 HI-EVOLUTION ZERO
   - https://hazuse.com/en/machine/pachislot/9S1265/
   - 型式、検定番号、2019-12-09、出玉率、純増
   - reliability: ANALYSIS_HIGH_DB
2. グリーンべると — 東京都検定情報～11月18日公示
   - https://web-greenbelt.jp/00011640/
   - 型式Sエウレカセブン3 HIEVO ZR、検定番号9S1265
   - reliability: INDUSTRY
3. 日刊スポーツ — パチンコ・パチスロ導入カレンダー 2019-11-22
   - https://www.nikkansports.com/amusement/pachislot/news/201911220000268.html
   - 2019-12-09群にS沖っ娘と本機を掲載
   - reliability: INDUSTRY_MEDIA_CONTEMPORARY
4. P-WORLD — パチスロ交響詩篇エウレカセブン3 HI-EVOLUTION ZERO
   - https://www.p-world.co.jp/machine/database/9084
   - BONUS/CM確率、基本獲得性能、天井・AT構造
   - reliability: ANALYSIS_HIGH_DB
5. パチ＆スロ必勝本 — 天井＆設定変更
   - https://p.hisshobon.jp/machine/3432/1/76238
   - 設定変更/電源OFF ON時の天井、液晶、コンパクカウンター、ステージ、有利区間ランプ
   - reliability: ANALYSIS_HIGH_CONTEMPORARY
6. すろぱちくえすと — エウレカセブン3 天井解析
   - https://www.slopachi-quest.com/article/eurekaseven3-tennjou/
   - 朝一挙動、KCC、変更判別、実戦サンプル
   - reliability: ANALYSIS_HIGH
7. DMMぱちタウン — システム解説
   - https://p-town.dmm.com/machines/3591/directing/329
   - 有利区間移行時KCC、初期ATレベル、高確スタート
   - reliability: ANALYSIS_HIGH
8. NANA PRESS — 天井/ヤメ時
   - https://nana-press.com/kaiseki/machine/10/113/
   - 303G抽選、707G天井、10周期天井
   - reliability: ANALYSIS_HIGH
9. おスロおパチおいでやす — エウレカセブン3 天井・朝一
   - https://oslo-opachi.com/2019/12/13/eurekaseven3_tennjyou/
   - 基本獲得枚数、朝一リセット、有利区間
   - reliability: ANALYSIS_SECONDARY_CONTEMPORARY
10. ぱちんこキュレーション — エウレカセブン3
   - https://www.pachinko-curation.com/1591/
   - 型式、スペック、導入日表記差
   - reliability: ANALYSIS_SECONDARY

## missingFields

- 本機固有のガックン条件/発生率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更専用として切り出された初期ATレベル完全振り分け: `PUBLIC_RESET_ONLY_TABLE_NOT_FIXED`。

coreStatus: COMPLETE_CORE
