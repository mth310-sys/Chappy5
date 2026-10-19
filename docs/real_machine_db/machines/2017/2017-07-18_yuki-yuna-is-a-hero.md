machineName: パチスロ 結城友奈は勇者である
manufacturer: DAXEL
releaseDate: 2017-07-18
recordNumber: 1108
generation: 5号機（5.5号機）
systemType: A+ART / 差枚数管理型ART / CZ・周期管理
formalModelName: 結城友奈は勇者である／DE
certificationNumber: 6S1145
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで型式 `結城友奈は勇者である／DE`、検定番号 `6S1145`、メーカーDAXEL、導入開始日2017-07-18を確認。
- パチビー、K-Navi、一撃も2017-07-18導入で一致し、当時解析・導入情報をcanonicalなホール導入日として採用する。
- 現行DAXEL公式機種一覧には `2017.11` 表記があるため削除せず `CONFLICT_RELEASE_DATE_CATALOG` として保持。公式一覧の月表記が発売月・掲載月等の別基準かは確認できず、2017-07-18の複数当時資料と競合する。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE / CONFLICT_FOR_OFFICIAL_CURRENT_CATALOG_MONTH

## payoutRateBySetting
- 設定1: **97.5%**
- 設定2: **99.4%**
- 設定3: **100.3%**
- 設定4: **103.6%**
- 設定5: **106.7%**
- 設定6: **110.5%**
- 一撃、K-Navi、複数解析で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### 勇者RUSH（ART）
- 設定1: **1/365.3**
- 設定2: **1/342.7**
- 設定3: **1/319.6**
- 設定4: **1/305.9**
- 設定5: **1/289.0**
- 設定6: **1/256.6**

### 勇者ボーナス（リアルボーナス）
- 全設定共通: **1/16384**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 一撃解析: **約47.0～49.1G/50枚**（設定1～6）。
- ちょんぼりすた代表値: **約47G/50枚**。
- 物差し比較では設定差を含む47.0～49.1Gを保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- 勇者RUSH: **約2.0枚/G**（ボーナス込み表記の資料あり）。
- パチビー・一撃・ちょんぼりすたで概ね一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- 勇者RUSH: **初期50枚以上+α**の差枚数管理型ART。
- 勇者ボーナス: 実獲得目安 **約154枚**。主配当表では210枚超の払い出しで終了。
- 「払い出し終了条件」と「実獲得枚数」は定義を分けて保持する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ゲーム数天井: **ART間999G+αでART**。
- 周期天井: 通常時 **最大10周期**。ゲーム数天井より先に10周期へ到達すると7揃い勇者RUSH濃厚。
- 設定変更時は周期天井が **最大7周期へ短縮**。
- 周期間の救済ゲーム数は最大255G。
- 通常時の全モード移行・全内部状態移行は実機完全再現用のため収集対象外。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_NUMERIC_MORNING_DATA
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- **天井ゲーム数RESET**。
- **周期天井を最大7周期へ短縮**。
- **モードRESET / 状態RESET / 満開スルー回数RESET**。
- 紡ぎの種ポイントは設定変更時専用振り分けで再抽選。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き専用と明記した独立表は再探索後も固定できず **UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH**。
- ただし一撃の純電源OFF→ON表では天井ゲーム数・モード・状態・満開スルー回数の引継ぎを明記しているため、設定変更なしの電断では内部値を保持する。
reliability: UNVERIFIED_FOR_SEPARATE_STAY_SAME_TABLE / ANALYSIS_HIGH_FOR_POWER_CYCLE_CARRYOVER

### powerCycleBehavior
- 純電源OFF→ON: **天井ゲーム数CARRYOVER / モードCARRYOVER / 状態CARRYOVER / 満開スルー回数CARRYOVER**。
- 紡ぎの種ポイントの純電断時契約は同表に明記がなく、推測せず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_LISTED_ITEMS / UNVERIFIED_FOR_TSUMUGI_POINT_POWER_CYCLE

### gameCounterReset
- 設定変更: **RESET**。
- 純電断: **CARRYOVER**。
- 据え置き専用直接契約: **UNVERIFIED_DIRECT_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### ceilingAfterReset
- ゲーム数天井は通常同様 **ART間999G+α**。
- 周期天井のみ設定変更時 **10周期→最大7周期**へ短縮。
- 設定変更時の周期天井振り分け:
  - 1周期 **37.9%**
  - 2周期 **2.0%**
  - 3周期 **12.5%**
  - 4周期 **2.0%**
  - 5周期 **12.5%**
  - 6周期 **2.0%**
  - 7周期 **31.3%**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 設定変更: **RESET / RESELECT**。
- 純電断: **CARRYOVER**。
- 設定変更直後の通常A/通常B/神樹等の具体的モード振り分けは、検索語・資料系統を変えて再探索したが直接表を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_NUMERIC_INITIAL_MODE_DISTRIBUTION

### stateAfterReset
- 設定変更: **RESET / RESELECT**。
- 純電断: **CARRYOVER**。
- 設定変更直後の通常/高確A/高確B/超高確等の具体的初期振り分けは **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_NUMERIC_INITIAL_STATE_DISTRIBUTION

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大周期天井が **10周期→7周期**へ短縮。
- 紡ぎの種ポイントが設定変更時に最低3pt以上で再抽選され、通常周期開始時の1pt中心振り分けより明確に優遇。
- 周期救済システムも設定変更時専用振り分けが公開されている。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 前日の天井進捗・モード・状態・満開スルー回数を設定変更で失う。
- 前日蓄積の紡ぎの種ポイントも設定変更時に専用値へ再抽選されるため、高ポイント蓄積時は消失し得る。
reliability: ANALYSIS_HIGH

### resetDetection
- 本機固有の確定的ガックン、初期出目、ランプ等による設定変更判別は「結城友奈 / ゆゆゆ / ガックン / 設定変更 / 据え置き / 朝一」等へ検索語を変え、当時解析・後年回顧も再探索したが高信頼な直接契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 周期天井が最大7周期へ短縮されることや紡ぎの種の朝一挙動は事後推測材料になり得るが、確定判別とはしない。
reliability: UNVERIFIED_FOR_DETERMINISTIC_CHANGE_DETECTION

### numericResetData
- 設定変更時周期天井: **1周期37.9 / 2周期2.0 / 3周期12.5 / 4周期2.0 / 5周期12.5 / 6周期2.0 / 7周期31.3%**。
- 設定変更時周期救済G数:
  - 33G **0.4%**
  - 70G **0.4%**
  - 107G **0.8%**
  - 144G **1.6%**
  - 181G **6.3%**
  - 218G **12.5%**
  - 255G **78.1%**
- 設定変更時紡ぎの種ポイント:
  - 3pt **56.64%**
  - 10pt **25.00%**
  - 17pt **12.50%**
  - 24pt **3.13%**
  - 31pt **1.56%**
  - 38pt **0.78%**
  - 45pt **0.39%**
- publishedMorningHitRate: 特定○G以内のART当選率として直接公開された比較可能値は **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts
- releaseDate: 当時のパチビー/K-Navi/一撃/HAZUSEは **2017-07-18**で一致。現行DAXEL公式機種一覧は **2017.11**。ホール導入日canonicalは2017-07-18とし、公式現行一覧月は `CONFLICT_RELEASE_DATE_CATALOG` として保持。
- ちょんぼりすた本文中に「2017年7月1日」表記が残る一方、同ページ冒頭・複数当時資料は2017-07-18。単独本文値はCONFLICTとしてcanonicalから除外。

## missingFields
- 据え置き専用の独立した直接契約: UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH。
- 純電断時の紡ぎの種ポイント: UNVERIFIED_AFTER_RESEARCH。
- 設定変更直後の具体的モード振り分け: UNVERIFIED_AFTER_RESEARCH。
- 設定変更直後の具体的内部状態振り分け: UNVERIFIED_AFTER_RESEARCH。
- deterministic machine-specific reset detection/gakkun: UNVERIFIED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09
- DAXEL公式機種一覧: https://www.daxel.co.jp/products/
- HAZUSE: https://hazuse.com/machine/pachislot/6S1145/
- HAZUSE 天井: https://hazuse.com/machine/pachislot/6S1145/genre/207/
- パチビー: https://www.pachibee.jp/machines/about/217050011
- K-Navi: https://p-kn.com/slot/2790/
- 一撃 機種トップ: https://1geki.jp/slot/s_yuukiyuuna/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_yuukiyuuna/3/
- 一撃 小役/50枚ベース: https://1geki.jp/slot/s_yuukiyuuna/4/
- 一撃 紡ぎの種: https://1geki.jp/slot/s_yuukiyuuna/45/
- 一撃 ART概要: https://1geki.jp/slot/s_yuukiyuuna/81/
- ちょんぼりすた: https://chonborista.com/slot/daxel-slot/37835/
- 期待値見える化: https://slotjin.com/zone/yuyuyu/
