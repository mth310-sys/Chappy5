machineName: TVアニメーション 弱虫ペダル
manufacturer: オリンピア / 平和
releaseDate: 2017-01-03
recordNumber: 1036
generation: 5号機 / 5.5号機期
systemType: A+ART / ボーナス規定回数モード / 複数天井
formalModelName: TVアニメーション弱虫ペダル／Y1
certificationNumber: 6S0856
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT

## identity
- オリンピア製「TVアニメーション 弱虫ペダル」。同時期の平和製パチンコ版とは分離する。
- HAZUSE・K-Navi・一撃はホール導入開始/導入予定を2017-01-03とする。平和公式打-WINも同機の遊技データ保存サービスを2017-01-03から利用可能と告知しており、実遊技開始日との整合を支持する。
- 一方、2016-11-17のグリーンべると業界記事は「1月9日の納品開始予定」、後年解析複数は2017-01-10導入とする。日付差は平均せずCONFLICT保持。本DBでは複数の導入開始DB＋メーカーサービス開始日の一致を優先し2017-01-03をcanonicalとする。
- HAZUSEで型式名「TVアニメーション弱虫ペダル／Y1」、検定番号「6S0856」を確認。
reliability: CONFLICT_RELEASE_DATE / ANALYSIS_HIGH_PLUS_OFFICIAL_CONTEXT_FOR_CANONICAL

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.5% |
| 2 | 97.9% |
| 3 | 100.7% |
| 4 | 104.6% |
| 5 | 105.0% |
| 6 | 110.2% |

- 一撃・期待値見える化・当時解析で上記系列が一致。
- ちょんぼりすたのみ設定4を104.8%とするため `CONFLICT_SETTING4_PAYOUT_104_6_VS_104_8` を保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_CONFLICT_SETTING4

## initialHitBySetting
### ボーナス合算
| 設定 | ボーナス合算 |
|---:|---:|
| 1 | 1/147.60 |
| 2 | 1/146.94 |
| 3 | 1/146.29 |
| 4 | 1/133.75 |
| 5 | 1/133.20 |
| 6 | 1/127.50 |

### ART「ハイケイデンスロード」初当たり
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/399.7 |
| 2 | 1/370.4 |
| 3 | 1/391.8 |
| 4 | 1/305.9 |
| 5 | 1/342.1 |
| 6 | 1/251.5 |

- HAZUSE・一撃・K-Navi・期待値見える化で同系列を照合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約33.8〜34G / 50枚。
- 期待値見える化は約33.8G、ちょんぼりすた・当時解析は約34Gで、丸め差として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_ROUNDING

## netIncrease
- ART「ハイケイデンスロード」単体: 約1.6枚/G。
- ボーナス込みART純増: 約1.9枚/G。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG BONUS: 約204枚。成立時点でART確定。
- REG相当「総北チャンス」: 約60枚。
- ART「ハイケイデンスロード」: 1セット40G+α。
- グリーンべると業界発表と一撃・解析資料で一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はリアルボーナスからARTを目指すA+ART機。ART非当選ボーナスの規定回数はモードA〜D＋設定変更時特殊モードで管理。
- ボーナス間500Gを超えて次回ボーナス成立でART確定。
- 別系統のゲーム数天井として最大777G到達時、通常滞在なら前兆後ART当選。
- ART非当選ボーナス規定回数天井は通常最大10スルー後の11回目ボーナスでART当選（モードにより短縮）。
- 詳細な通常時全モード移行テーブルは実機完全再現用のため本レコードでは収集しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時はボーナス間ゲーム数をRESET。
- 通常ボーナス規定回数をRESELECT。
- 設定変更後1回のみ有効な特殊ボーナス規定回数をRESELECT。
- 内部状態をRESELECT。
- RT状態は設定変更でもCARRYOVER。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE_MULTI_SOURCE

### carryOverBehavior
- 据え置き時は前日のボーナス間ゲーム数、通常/特殊ボーナス規定回数、内部状態を継続する契約として当時朝一攻略で扱われる。
- 純電源OFF→ONについては同項目の引継ぎが直接比較表で確認できる。
reliability: ANALYSIS_HIGH_FOR_POWER_CYCLE_AND_CARRYOVER_CONTEXT

### powerCycleBehavior
- 純電源OFF→ON: ボーナス間ゲーム数CARRYOVER。
- 通常ボーナス規定回数CARRYOVER。
- 特殊ボーナス規定回数CARRYOVER。
- 内部状態CARRYOVER。
- RT状態CARRYOVER。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE_MULTI_SOURCE

### gameCounterReset
- 設定変更: ボーナス間ゲーム数RESET。
- 純電源OFF→ON / 据え置き: ボーナス間ゲーム数CARRYOVER。
- ART非当選ボーナスのスルー回数/規定回数も設定変更で再抽選、電断では引継ぎ。
reliability: ANALYSIS_HIGH_DIRECT

### ceilingAfterReset
- ゲーム数系天井の前日進捗は設定変更で消える。
- 通常のボーナス間500G超後ボーナスART確定・最大777G規定G天井は、設定変更後は0G側から開始。
- 設定変更時は通常ボーナス規定回数モードAが選択されないため、設定1〜3なら最大5回目の総北チャンスまでにARTへ到達する朝一短縮性がある。
- 設定4〜6は特殊モードE（6〜10回）が50%で選ばれるため、5回超スルーが起こり得る。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_RESET_DATA

### modeAfterReset
設定変更時の通常ボーナス規定回数モード:
| モード | 設定1〜3 | 設定4〜6 | 規定回数 |
|---|---:|---:|---|
| A | 0% | 0% | 5〜10回 |
| B | 64.84% | 14.84% | 1〜5回 |
| C | 25.00% | 25.00% | 1〜3回 |
| D | 10.16% | 10.16% | 1回 |
| E/特殊 | 0% | 50.00% | 6〜10回 |

- モードAが設定変更時に選ばれないことが主要朝一恩恵。
reliability: ANALYSIS_HIGH_DIRECT_TABLE_MULTI_SOURCE

### stateAfterReset
設定変更時の内部状態:
| 設定 | 低確 | 高確 | 超高確 |
|---:|---:|---:|---:|
| 1〜3 | 79.7% | 18.8% | 1.6% |
| 4〜5 | 64.8% | 30.5% | 4.7% |
| 6 | 59.8% | 34.0% | 6.3% |

- 設定変更時は再抽選。純電源OFF→ONでは引継ぎ。
- RT状態のみ設定変更でも引継ぎ。
reliability: ANALYSIS_HIGH_DIRECT_TABLE

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更時はモードAを選ばないため、設定1〜3ではボーナス5回以内のART到達が保証される契約。
- 設定変更時のみ1回有効な特殊ボーナス規定回数あり。設定1〜3は20回目、設定4〜6は15回目または20回目のボーナスでART当選。
- 設定変更時の高確以上スタートは設定1〜3で20.4%、設定4〜5で35.2%、設定6で40.3%（公開値の単純合算）。
reliability: ANALYSIS_HIGH_DIRECT_NUMERIC_RESET_DATA

### resetPenalties
- 前日のゲーム数天井進捗、スルー/規定回数進捗、内部状態は設定変更で失われる。
- RT状態は引き継ぐため、RT状態そのものをリセット恩恵として扱わない。
reliability: ANALYSIS_HIGH_DIRECT

### resetDetection
- 当時実機ガックン動画/攻略では、この筐体のガックン判別は実用困難とされる。
- 客AI上は `GACKUN_NOT_PRACTICALLY_USABLE`。メーカー保証の確定変更判別ではない。
- 朝一ステージ単独での確定変更判別値は十分な再探索後も固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_SINGLE_DIRECT_VIDEO_PLUS_RESEARCH

### numericResetData
- 設定変更時モード: B/C/D/E = 設定1〜3で64.84/25.00/10.16/0%、設定4〜6で14.84/25.00/10.16/50.00%。Aは全設定0%。
- 設定変更時状態: 低確/高確/超高確 = 設定1〜3 79.7/18.8/1.6%、設定4〜5 64.8/30.5/4.7%、設定6 59.8/34.0/6.3%。
- 設定変更時特殊ボーナス規定回数: 設定1〜3は20回目、設定4〜6は15回目or20回目。
- 設定変更後、設定1〜3は通常ボーナス規定回数最大5回。

## dataQualityNotes
- パチンコ版「CR TVアニメーション 弱虫ペダル」を混入させていない。
- HAZUSE/K-Navi/一撃の2017-01-03導入表記、平和公式打-WINの2017-01-03サービス開始と、グリーンべるとの2017-01-09納品開始予定、後年解析の2017-01-10導入表記に日付競合あり。地域差/納品日と稼働日の定義差の可能性があるため全て保持。
- 機械割設定4は104.6%系列が複数一致する一方104.8%表記あり。平均せずCONFLICT。
- resetBehaviorは一撃の設定変更/電源OFF ON直接比較表、すろぱちくえすとの朝一直接表、期待値見える化の朝一整理で相互照合した。

## conflicts
- `CONFLICT_RELEASE_DATE_2017_01_03_VS_DELIVERY_2017_01_09_VS_2017_01_10`
  - HAZUSE / K-Navi / 一撃: 2017-01-03導入開始/予定。
  - 平和公式打-WIN: 遊技データ保存サービスを2017-01-03より利用可能。
  - グリーンべると 2016-11-17: 2017-01-09納品開始予定。
  - ちょんぼりすた等後年解析: 2017-01-10導入。
  - canonicalは2017-01-03。ただし全国一斉導入日と納品定義の差を注記。
- `CONFLICT_SETTING4_PAYOUT_104_6_VS_104_8`
  - 一撃/期待値見える化/複数解析: 104.6%。
  - ちょんぼりすた: 104.8%。

## missingFields
- 設定4〜6の特殊ボーナス規定回数15回/20回の個別振り分け率: 十分な再探索後も今回固定せず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一ステージ単独での確定変更判別: NONE_CONFIRMED_AFTER_RESEARCH。

## sources
取得日: 2026-09-09

1. 平和 打-WIN お知らせ — パチスロ TVアニメーション弱虫ペダル（2016-12-26）
   - https://www.heiwanet.co.jp/da-win/news.html
2. グリーンべると — 旬の人気アニメ「弱虫ペダル」がパチスロで登場（2016-11-17）
   - https://web-greenbelt.jp/00009118/
3. HAZUSE — パチスロ TVアニメーション 弱虫ペダル
   - https://hazuse.com/machine/pachislot/6S0856/
4. HAZUSE — 基本スペック
   - https://hazuse.com/machine/pachislot/6S0856/genre/201/
5. HAZUSE — 天井
   - https://hazuse.com/machine/pachislot/6S0856/genre/207/
6. 一撃 — TVアニメーション 弱虫ペダル 機種トップ
   - https://1geki.jp/slot/s_yowamushipedal/
7. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_yowamushipedal/3/
8. 一撃 — ボーナス規定回数振り分け
   - https://1geki.jp/slot/s_yowamushipedal/43/
9. 一撃 — ART概要
   - https://1geki.jp/slot/s_yowamushipedal/81/
10. K-Navi — TVアニメーション 弱虫ペダル
   - https://p-kn.com/slot/2665/
11. 期待値見える化 — 弱虫ペダル 天井・スルー・朝一リセット解析
   - https://slotjin.com/zone/yowapeda/
12. すろぱちくえすと — 弱虫ペダル 朝一設定変更・リセット時の恩恵・挙動
   - https://www.slopachi-quest.com/article/yowamushi-pedal-reset/
13. ちょんぼりすた — 弱虫ペダル スロット新台
   - https://chonborista.com/slot/orinpia-slot/28557/
14. ピロ式パチスロ記 — 弱虫ペダル解析
   - https://piro-shiki.com/jakupeda-kaiseki/

## nextQaTargets
- releaseDateの1/3・1/9・1/10差について、地域別稼働開始/納品の一次資料が新たに得られた場合に再判定。
- 設定4〜6の特殊ボーナス規定回数15/20回の個別振り分け率。
