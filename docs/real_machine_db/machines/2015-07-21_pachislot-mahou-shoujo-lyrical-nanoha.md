# パチスロ魔法少女リリカルなのは

machineName: パチスロ魔法少女リリカルなのは
manufacturer: 三洋物産
releaseDate: 2015-07-21
releaseDatePrecision: exact_nationwide_hall_start
releaseDateNote: K-Naviは全国一斉導入開始日として2015-07-21、HAZUSEも導入開始日2015-07-21で一致。2015-06-11付グリーンべると業界記事はホール納品を2015-07-05開始、ALL7/パチビー/パチ7は2015-07-13の導入予定・導入日表記。納品開始/予定日/地域差と全国一斉導入開始を分離し、本DB canonical は2015-07-21。
generation: 5号機
systemType: ART / CZ-ART + ST-ART + BONUS-ART / 疑似ボーナス
formalModelName: パチスロリリカルなのはKE
inspectionNumber: 5S0161
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.8% |
| 2 | 98.5% |
| 3 | 99.6% |
| 4 | 104.4% |
| 5 | 107.4% |
| 6 | 111.2% |

- K-Navi、ちょんぼりすた、pacnk系で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

主要比較値としてART初当たりを採用。

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/120.9 |
| 2 | 1/120.7 |
| 3 | 1/120.5 |
| 4 | 1/118.5 |
| 5 | 1/115.2 |
| 6 | 1/112.1 |

- K-Navi、ちょんぼりすた、pacnk系で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約34.9〜35.0G / 50枚**。
- パチマガスロマガに34.9〜35.0G、ちょんぼりすたに約35G。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- CZ-ART「次元航行艦アースラ」「セットアップチャンス」、ST-ART「闇の書ZONE」、BONUS-ARTはいずれも **約2.0枚/G**。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH

## basicPayout

- 次元航行艦アースラ: 平均44.5G。
- セットアップチャンス: 6G。
- 闇の書ZONE: 1セット40G、初回は+10Gで50G。
- なのはボーナス: 約78枚 / 約111枚 / 約222枚。
- フェイトボーナス: 約78枚 / 約111枚 / 約333枚。
- はやてボーナス: 最大約666枚。
- パチビー、K-Navi、HAZUSE、パチマガスロマガ等で構造を照合。
- confidence: INDUSTRY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は通常A・通常B・高確・超高確の内部状態を持ち、CZ種類に影響。
- CZ間ゲーム数天井: **708G以降**。以降のCZ当選は上位CZ「セットアップチャンス」以上。
- CZスルー回数天井: 通常は最大11回連続スルー後、以降ART当選までCZがセットアップチャンス化。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- CZ間天井までのゲーム数: **リセット**。
- CZスルー回数天井: **再抽選、最大8回**。
- (超)高確: **再抽選**。
- RT状態: **リセット**。
- 液晶ステージ: **学校**。
- confidence: ANALYSIS_HIGH_DIRECT_MACHINE_SPECIFIC

### carryOverBehavior

- 設定据え置きは、設定変更時にのみリセット/再抽選されるCZ間天井・CZスルー天井・内部状態について前日状態を継続する挙動として扱う。
- 朝一MB判別でも2枚掛け継続が据え置き濃厚とされる。
- confidence: ANALYSIS_HIGH_MACHINE_SPECIFIC

### powerCycleBehavior

- 設定変更を伴わない電源OFF→ON:
  - 天井までのゲーム数: **引継ぎ**。
  - (超)高確: **引継ぎ**。
  - RT状態: **引継ぎ**。
  - 液晶ステージ: **学校**。ただしCZ・ART中はその状態を引き継ぐ。
- confidence: ANALYSIS_HIGH_DIRECT_MACHINE_SPECIFIC

### gameCounterReset

- 設定変更: **CZ間708G天井のゲーム数をリセット**。
- 据え置き/純電断: **引継ぎ**。

### ceilingAfterReset

- CZ間G数天井そのものは708Gで、設定変更により消化分をリセット。
- CZスルー回数天井は通常最大11回に対し、**設定変更時は最大8回**へ短縮。
- 朝一狙い上の主要リセット恩恵。

### modeAfterReset

- 規定Gモードではなく、CZスルー回数天井を設定変更時に再抽選。
- 設定変更時CZスルー天井振り分けは下記numericResetDataを参照。

### stateAfterReset

設定変更時の内部状態振り分け:

| 設定 | 通常B | 高確 | 超高確 |
|---:|---:|---:|---:|
| 1 | 79.00% | 20.00% | 1.00% |
| 2 | 79.00% | 20.00% | 1.00% |
| 3 | 79.00% | 20.00% | 1.00% |
| 4 | 69.00% | 30.00% | 1.00% |
| 5 | 65.89% | 33.11% | 1.00% |
| 6 | 58.00% | 40.00% | 2.00% |

- 設定変更で通常Aへの振り分けは公開表上なし。
- 高確/超高確保証G数は通常時状態管理の詳細に属するため本レコードでは全表転記しない。
- confidence: ANALYSIS_HIGH_DIRECT_TABLE

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- CZスルー回数天井が通常最大11回から**設定変更時最大8回**へ短縮。
- 設定変更時は高確20〜40%、超高確1〜2%から開始する公開振り分けあり。
- CZ間708Gの消化分はリセットされるため、前日ハマリG数の宵越し狙いは不利。

### resetPenalties

- 前日CZ間ハマリG数を設定変更で失う。
- 前日CZスルー回数も設定変更で再抽選されるため、前日深いスルー回数の宵越し狙いは無効化される。

### resetDetection

- **MB仕込み判別**: 前日MB入賞状態で閉店し、翌日1G目が3枚掛けなら設定変更濃厚、2枚掛けなら据え置き濃厚（ホールが対策していないことが条件）。
- **CZ天井判別**: 前日CZスルー天井到達後に閉店し、翌日1回目CZがART非当選かつセットアップチャンスでなければ設定変更濃厚。
- ガックン単独の本機固有確定契約は今回の再探索で主要根拠を固定できず、判別軸として採用しない。

### numericResetData

設定変更時CZスルー天井振り分け（規定回数。必勝本表の0/2/4/5/6/8回を、実際に何回スルー後から上位CZ固定になるかの公開定義に合わせそのまま保持）:

| 規定回数 | 設定1 | 設定2 | 設定3 | 設定4 | 設定5 | 設定6 |
|---:|---:|---:|---:|---:|---:|---:|
| 0回 | 0.06% | 5.00% | 0.20% | 7.05% | 3.02% | 10.00% |
| 2回 | 20.00% | 10.00% | 40.00% | 12.50% | 50.00% | 15.05% |
| 4回 | 0% | 0% | 0.50% | 0.50% | 0.50% | 1.00% |
| 5回 | 10.00% | 40.00% | 10.00% | 50.00% | 10.00% | 50.00% |
| 6回 | 0% | 0% | 0% | 0.50% | 0.50% | 1.00% |
| 8回 | 69.94% | 45.00% | 49.30% | 29.44% | 35.97% | 22.96% |

- 設定変更時内部状態振り分けはstateAfterResetに記載。
- 公開朝一特定G以内当選率の独立表は `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts

1. `RELEASE_EVENT_DATE_DEFINITION_DIFFERENCE`
   - グリーンべると2015-06-11記事: ホール納品は**2015-07-05から**。
   - ALL7 / パチビー / パチ7: **2015-07-13**の導入予定・導入日表記。
   - K-Navi: 全国一斉導入開始日 **2015-07-21**。
   - HAZUSE: 導入開始日 **2015-07-21**。
   - 全国一斉導入を明示する日付をcanonicalとし、納品開始・予定日を平均/統合しない。
2. `CZ_SLIP_COUNT_LABEL_OFF_BY_ONE_RISK`
   - 必勝本は「規定回数」を0/2/4/5/6/8回と表記し、例として「8回スルーなら9回目CZから固定」と説明。
   - 一部攻略サイトは利用者向けに1/3/5/6/7/9回と表示するため、数値そのものを平均せず、意味を分離して保持する。

## missingFields

- ガックン単独による本機固有変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更専用の朝一特定G以内当選率: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources

取得日: 2026-09-07

1. グリーンべると / P-WORLD業界ニュース「ST採用『大海BLACK』が7月より導入」 — https://news.p-world.co.jp/articles/7537/greenbelt
   - 2015-06-11、三洋物産発表内覧会、なのはは1G純増2.0枚ART、ホール納品7月5日開始。
   - confidence: INDUSTRY
2. K-Navi「パチスロ魔法少女リリカルなのは」 — https://p-kn.com/slot/2285/
   - 全国ホール導入2015-07-21、ART初当たり、機械割、約2.0枚/G。
   - confidence: ANALYSIS_HIGH
3. K-Navi 2015年7月導入カレンダー — https://p-kn.com/calendar/201507/
   - 全国一斉導入開始日として07-21掲載。
   - confidence: INDUSTRY_DB
4. HAZUSE — https://hazuse.com/machine/pachislot/5S0161/
   - 型式パチスロリリカルなのはKE、検定5S0161、導入開始日2015-07-21。
   - confidence: ANALYSIS_HIGH/OLD_DB
5. ALL7 — https://www.all7.jp/plans/index/2015/07
   - 導入予定2015-07-13。
   - confidence: INDUSTRY_DB
6. パチビー — https://www.pachibee.jp/machines/index/215060003
   - 導入日2015-07-13、基本ART/ボーナス性能。
   - confidence: INDUSTRY_DB
7. パチ＆スロ必勝本「天井&設定変更」 — https://p.hisshobon.jp/machine/2594/1/53044
   - 設定変更/純電断のG数・状態・RT・液晶契約。
   - confidence: ANALYSIS_HIGH_DIRECT
8. パチ＆スロ必勝本「CZスルー回数天井振り分け」 — https://p.hisshobon.jp/machine/2594/1/53394
   - 設定変更時最大8回、設定別振り分け。
   - confidence: ANALYSIS_HIGH_DIRECT
9. パチ＆スロ必勝本「状態移行抽選」 — https://p.hisshobon.jp/machine/2594/1/53086
   - 設定変更時内部状態振り分け。
   - confidence: ANALYSIS_HIGH_DIRECT
10. パチ＆スロ必勝本「朝イチ判別手順」 — https://p.hisshobon.jp/machine/2594/1/53135
    - MB仕込み/CZ天井による変更判別。
    - confidence: ANALYSIS_HIGH_DIRECT
11. パチマガスロマガ「小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/25/c.php
    - 50枚34.9〜35.0G。
    - confidence: ANALYSIS_HIGH
12. ちょんぼりすた — https://chonborista.com/slot/sanyo-slot/8922/
    - 導入日2015-07-21、機械割、ART初当たり、約35G/50枚、天井/リセット恩恵。
    - confidence: ANALYSIS_HIGH
