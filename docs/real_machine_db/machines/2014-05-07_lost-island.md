# パチスロ ロストアイランド

machineName: パチスロ ロストアイランド
formalModelName: UNVERIFIED_AFTER_RESEARCH
manufacturer: Sammy / サミー
releaseDate: 2014-05-07
releaseDatePrecision: exact_nationwide_start
generation: 5号機
systemType: AT / ゲーム数解除+自力解除 / BR非搭載
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL

## identity

- K-Navi 2014年5月全国一斉導入カレンダーと複数解析資料で **2014-05-07** 導入を確認。
- P-WORLDでもSammy製5号機AT・BR非搭載・天井搭載・約3.0枚/G仕様を確認。
- 正式型式名/検定番号は今回、表記揺れ・型式語・検定語・Sammy名を変えて再探索したが高信頼資料で固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_HIGH_EXACT_DATE + MULTI_SOURCE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.3% |
| 3 | 100.9% |
| 4 | 103.6% |
| 5 | 107.3% |
| 6 | 117.1% |

- パチスロ解析ガイド、man-soft系解析、当時スペック記事で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/198.8 |
| 2 | 1/192.3 |
| 3 | 1/185.0 |
| 4 | 1/171.9 |
| 5 | 1/158.9 |
| 6 | 1/124.5 |

- 複数解析資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約23G/50枚（1000円あたり約23G）**。
- 2014-03-15の当時新台スペック速報で確認。
- 他系統で同じ基準値の完全照合はできていないため単一当時資料値として保持。
- confidence: ANALYSIS_SINGLE_PERIOD_SOURCE

## netIncrease

- AT「ハイビスカスRUSH」: **約3.0枚/G**。
- P-WORLD、パチマガスロマガ、パチスロ解析ガイドで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 赤ハイビスカス揃い: 1ラインにつき **30G**、最大8ライン=240G。
- 金ハイビスカス揃い/HYPERハイビスカスRUSH: 1ラインにつき **100G**、最大8ライン=800G。
- 通常ATの基本単位は30G、HYPERは100G。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時はゲーム数解除と自力解除を併用。
- 当時スペック資料では自力:ゲーム数解除がおおむね3:7。
- 設定1通常時のゲーム数解除振り分け解析は、1～33G 33.4%、34～111G 12.0%、222G 10.0%、333G 10.0%、444G 10.0%、555G 8.2%、666G 8.2%、777G 8.2%。
- これは通常時の比較補助値であり、resetBehaviorのモーニング専用振り分けと混同しない。

## ceiling

- 通常時最大 **777G** でAT当選。
- 777G天井は **200G以上のAT** が確定すると複数解析資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_WITH_STRONG_MORNING_MODE_DATA
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- **設定変更後はモーニングモードへ移行**する当時解析を確認。
- モーニングモードでは通常時と異なるゲーム数解除契約が適用され、天井が大幅に浅くなる。
- 設定変更時の低確/高確等、ゲーム数モード以外の内部状態初期化契約は十分再探索後も **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 据え置き時は前日分を含む内部ゲーム数で本前兆/当選が成立する実戦・当時解析記録があり、**宵越しゲーム数が機能することを確認**。
- 一方、ガセ前兆の発生タイミングは設定変更/据え置きに関係なく **当日ゲーム数依存** と解析されており、見た目の前兆と内部天井進捗が一致しない場合がある。
- ゲーム数以外の内部状態・自力解除状態等の据え置き契約は **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_SINGLE_PERIOD + PRACTICE_CORROBORATION

### powerCycleBehavior

- 設定変更を伴わない純粋な電源OFF→ONについて、天井ゲーム数・モード・内部状態を直接比較した本機固有資料は十分再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き営業の宵越し挙動を、そのまま純電断契約へ自動転記しない。

### gameCounterReset

- 設定変更時: **RESET_CONFIRMED_BY_MORNING_MODE_CONTRACT**。通常の規定Gテーブルではなく設定変更専用モーニングモードへ移る。
- 据え置き時: **CARRY_OVER_CONFIRMED_FOR_INTERNAL_GAME_COUNT**。

### ceilingAfterReset

- 設定変更後はモーニングモードとなり、当時解析では **ほぼ555G以内**。
- **777G選択が1%**残るため、「555G固定天井」とはしない。
- 通常最大777Gに対し、99%側で555G以内となる強い朝一短縮恩恵。
- 555G到達時のATが通常777G天井と同じ200G以上恩恵を持つかは解析未確定のため転記しない。
- confidence: ANALYSIS_HIGH_PERIOD

### modeAfterReset

- **モーニングモード確定**。
- モーニングモードの全ゲーム数振り分け表は今回の資料では安全に完全復元できないため、公開確認できた「777G 1% / それ以外はほぼ555G以内」の契約まで保存。
- confidence: ANALYSIS_HIGH_PERIOD

### stateAfterReset

- 設定変更時の低確/高確等の内部状態振り分けは、検索語・資料系統変更後も直接数値を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- モーニングモード確定。
- 規定ゲーム数が大幅優遇され、解析上 **99%が555G以内**。
- モーニングモードのゲーム数直当たり確率 **1/283.79**。
- ゲーム数直当たり時は **金ハイビスカス2ライン以上**が確定とする当時解析あり。
- 設定1・リセット後の期待値解析として、0～33G +625円、0～111G +624円、AT当選まで +1997円という当時算出値があるが、市場条件依存のため物差し性能コアには採用せず参考値としてのみ保持。

### resetPenalties

- 設定変更で前日までの通常ゲーム数進捗を失う点は、深い前日ハマリ台では据え置き宵越しに比べ不利となり得る。
- ただしモーニングモード優遇が強いため、単純な「リセット不利」とは評価しない。
- その他設定変更専用の不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- ガセ前兆は設定変更/据え置きに関係なく **当日ゲーム数基準**で出るため、通常ゾーンのガセ前兆だけでは変更判別できない。
- 当時実戦記事に「筐体上部リールでガックンチェックが効くよう」との記述があるが、解析確定表現ではなく単一実戦系のため **POSSIBLE_GAKKUN_LOW_CONFIDENCE / NOT_CONFIRMED** として扱う。
- 宵越し時に当日ゾーン外で本前兆が発生する挙動は据え置き推測材料になるが、100%判別契約とはしない。

### numericResetData

- モーニングモード: **設定変更後確定**。
- 解除ゲーム数: **99%が555G以内 / 777G 1%**。
- モーニングモードのゲーム数直当たり: **1/283.79**。
- 直当たり時: **2ライン以上確定**。

### publicMorningNumbers

- **99%が555G以内、777G 1%**。
- **ゲーム数直当たり1/283.79**。
- 当時の期待値算出ではリセット0～33G +625円、0～111G +624円、AT当選まで +1997円（設定1・AT後33Gヤメ条件）。期待値はホール経営物差しの必須性能値ではないため補足扱い。

## resetBehavior 再探索メモ

「ロストアイランド / LOST ISLAND / Sammy / サミー」に「設定変更 / リセット / 朝一 / モーニング / 据え置き / 宵越し / 電源OFF ON / 天井 / 555G / 777G / モード / ガックン / 前兆」を組み合わせ、P-WORLD、パチマガスロマガ旧攻略、当時解析ブログ、古い解析DB、後年回顧ページを横断。設定変更後モーニングモード、99%が555G以内、777G 1%、直当たり1/283.79、据え置き宵越しゲーム数機能、当日G依存ガセ前兆までは固定できた。純電源OFF→ON契約、設定変更時の内部高確状態、ガックン確定性は固定できなかったためUNVERIFIED/低信頼のまま残す。

## conflicts / safeguards

- 「リセット後555G天井」と断言する古い記事があるが、2014-06-24訂正で **777G振り分け1%** が確認されているため、本DBでは「99%が555G以内 / 777G 1%」を採用し555G固定とはしない。
- 通常777G天井の200G以上AT恩恵を、リセット555G側へ根拠なく転記しない。
- 2016年の「ビッグドリーム in ロストアイランド2」等、後継別機種のリセット情報を混入しない。
- ガセ前兆が当日G依存であることと、内部ゲーム数が据え置きで宵越しすることを分離して保存する。

## sources

取得日: 2026-09-07

1. K-Navi — 2014年5月新台導入カレンダー
   - https://p-kn.com/calendar/201405/
   - 2014-05-07全国一斉導入、同日マクロスフロンティア2
   - reliability: ANALYSIS_HIGH_EXACT_DATE
2. P-WORLD — パチスロ ロストアイランド
   - https://www.p-world.co.jp/machine/database/7354
   - Sammy、5号機AT、BR非搭載、約3.0枚/G、30～800G AT仕様
   - reliability: INDUSTRY_DATABASE
3. パチマガスロマガ旧攻略 — パチスロ ロストアイランド
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/142/a.php
   - 2014年5月、AT初当たり設定1約1/198、純増約3.0枚/G
   - reliability: ANALYSIS_HIGH_PERIOD
4. パチスロ解析ガイド — ロストアイランド
   - https://pachislot-guide.net/2014/lost-island/
   - 2014-05-07、設定別AT初当たり、機械割、AT30/100G、純増3.0枚/G、777G天井
   - reliability: ANALYSIS_HIGH
5. man-soft解析 — ロストアイランド
   - https://smaslo.man-soft.com/slot-kaiseki/lostisland.html
   - 設定別機械割・AT初当たり、777G天井、200G以上AT
   - reliability: ANALYSIS_HIGH
6. すろぱちくえすと — ロストアイランド ゾーン期待値・設定変更恩恵期待値解析（2014-06-22/24）
   - https://www.slopachi-quest.com/article/lostisland-zone/
   - モーニングモード確定、99%が555G以内/777G 1%、直当たり1/283.79、2ライン以上、当日G依存ガセ前兆
   - reliability: ANALYSIS_HIGH_PERIOD
7. 真パチスロ備忘録 — ロストアイランド 宵越777G 最大天井到達！（2014-08-16）
   - https://sin-surobi.com/lostiland/5320/
   - 宵越し実戦、当日G依存フェイク前兆、ガックン言及
   - reliability: PRACTICE_SINGLE_PERIOD
8. パチンコ・パチスロ.com — 当時スペック速報（2014-03-15）
   - https://pachinkopachisro.com/archives/36967059.html
   - 約23G/1000円、純増3.0枚/G、初当たり/機械割、ゲーム数解除概要
   - reliability: PERIOD_SECONDARY
9. P-Summa — 朝一リセット回顧
   - https://psumma.jp/trend/17593/
   - 設定変更後99%が555G以内という後年回顧照合
   - reliability: SECONDARY_REVIEW

## missingFields

- 正式型式名 / 検定番号
- 純電源OFF→ON時の天井G・モード・内部状態契約
- 設定変更時の低確/高確等内部状態振り分け
- ガックン判別の解析確定性
- baseGamesPer50の別系統照合

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## conflicts

- RESET_CEILING_WORDING: 旧記事の「555G天井」断言 vs 訂正後「777G 1%」。訂正後を採用し、固定555Gとはしない。