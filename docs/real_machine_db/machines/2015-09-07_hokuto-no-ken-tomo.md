# パチスロ北斗の拳 強敵

machineName: パチスロ北斗の拳 強敵
manufacturer: サミー
releaseDate: 2015-09-07
releaseDatePrecision: exact_nationwide_start_day
releaseDateNote: サミー公式マイスロが2015-09-07を「本日ホール導入日」と明記。K-Navi、当時業界記事も同日導入開始で一致。一部地域差は公式注記どおり分離する。
generation: 5号機
systemType: AT / 差枚数管理型AT
formalModelName: パチスロ北斗の拳 強敵ZA
inspectionNumber: 5S0225
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- canonical導入日: **2015-09-07**。
- 型式名: **パチスロ北斗の拳 強敵ZA**。
- 検定番号: **5S0225**。
- サミー公式マイスロ、K-Navi、グリーンべると系当時記事で09-07ホール導入開始を照合。
- confidence: OFFICIAL_INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.6% |
| 2 | 98.7% |
| 3 | 101.4% |
| 4 | 103.4% |
| 5 | 107.2% |
| 6 | 113.1% |

- 複数解析資料で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | AT「激闘乱舞」初当たり |
|---:|---:|
| 1 | 1/432.8 |
| 2 | 1/411.7 |
| 3 | 1/386.0 |
| 4 | 1/361.1 |
| 5 | 1/326.2 |
| 6 | 1/291.6 |

- K-Navi、ちょんぼりすた、当時解析で照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約44.4～44.5G/50枚**（パチマガスロマガ精密表記）。
- 他解析では約44G/50枚の丸め表記で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT「激闘乱舞」: **約2.8枚/G**。
- K-Navi、P-WORLD、当時解析で一致。
- confidence: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「激闘乱舞」: **初期100枚以上**の差枚数管理型。
- 継続率は**50%以上**。
- 「北斗乱舞」は1セット7Gの差枚上乗せ特化ゾーン。
- 物差し用途上、詳細上乗せ振り分けは収集しない。

## modeSpecificMinimumData

- 通常時内部モード: **低確 / 通常 / 高確 / 前兆**。
- 通常天井: **AT間1568G消化 + 最大32G前兆 = 最大1600G**。
- 天井恩恵: **AT当選**。特別な上位AT等の追加恩恵は確認しない。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は**AT間天井G数をクリア**し、1568Gから再カウントする。
- **内部モードをリセットして再抽選**。
- 朝一は高確以上選択が設定1でも25%以上あり、設定差を伴う。
- ステージはラオウステージ以外へリセットされるとする当時対照表あり。

### carryOverBehavior

- 設定据え置きでは、当時攻略上**AT間天井G数を引き継ぐ**前提で宵越し対象となる。
- 内部モードも設定変更を伴わない場合は引継ぎ扱いの資料系統と整合する。
- ただし「据え置き営業日跨ぎ」を純電断と独立して全文契約化した一次資料は確認できないため、電源OFF→ONとの同一性は資料定義を分離して記録する。

### powerCycleBehavior

- 設定変更を伴わない**電源OFF→ON**では、当時対照表により**天井G数を引き継ぎ、内部モードも引き継ぐ**。
- confidence: ANALYSIS_HIGH（リセット/電源ON-OFF対照表の直接記載）。

### gameCounterReset

- 設定変更: **RESET**。
- 据え置き: **CARRYOVER**。
- 電源OFF→ONのみ: **CARRYOVER**。

### ceilingAfterReset

- 設定変更後も天井そのものは**1568G + 最大32G前兆（最大1600G）**。
- 固定のリセット専用短縮天井は確認されない。
- 天井ATに特別な追加恩恵は確認されない。

### modeAfterReset

- 設定変更時に低確/通常/高確/前兆を再抽選。
- 公開値として高確・前兆の選択率を取得。低確/通常を含む完全テーブルは物差し用途に不要なため、公開朝一比較値を優先保持する。

### stateAfterReset

- 本機では通常時状態を低確/通常/高確/前兆モードとして扱うため `modeAfterReset` に統合。
- 設定変更時は再抽選、電源OFF→ONのみは引継ぎ。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更後は**高確以上が設定1でも25%以上**で選択され、朝一高確狙い・変更推測要素になる。
- ごく一部で前兆スタートもあり、朝一小役なしの早いAT当選が変更推測要素になり得る。

### resetPenalties

- 設定変更により前日のAT間天井ハマリ進捗を消失するため、宵越し天井価値を失う。
- 天井短縮は確認されず、最大天井は通常時と同じ。

### resetDetection

- **ガックンチェックが実用判別要素**とする当時解析・全リセ店実測動画資料あり。強敵は比較的はっきりガックンするとされる。
- 朝一高確示唆の出現頻度も複数台単位では変更推測材料となる。
- ただしガックン単独を設定変更確定とするメーカー公式契約ではないため、`ANALYSIS_SINGLE_PRACTICAL_DETECTION` として扱う。

### numericResetData

設定変更時の朝一モード選択率（公開比較値）:

| 設定 | 高確 | 前兆 |
|---:|---:|---:|
| 1 | 25.0% | 0.4% |
| 2 | 26.6% | 0.8% |
| 3 | 28.1% | CONFLICT: 1.2% / 1.5% |
| 4 | 29.7% | 1.6% |
| 5 | 31.3% | 2.0% |
| 6 | 32.8% | 2.3% |

- 高確率は複数解析で一致。
- 設定3の前兆率のみ、man-soft系解析 **1.2%** とちょんぼりすた **1.5%** が競合。平均せず双方保持。

## conflicts

1. `RESET_FOREGROUND_MODE_SETTING3_CONFLICT`
   - man-soft系当時解析: 設定3の設定変更時前兆 **1.2%**。
   - ちょんぼりすた: 設定3の設定変更時前兆 **1.5%**。
   - 他設定値と高確選択率は一致するため、設定3前兆のみCONFLICTとして保持。

## missingFields

- メーカー公式によるガックン変更判別保証: `UNVERIFIED_AFTER_RESEARCH`。実戦解析としてのみ保持。
- 設定変更時の低確/通常を含む完全初期モード振り分け: 物差し用途外の詳細に踏み込むため未収集。高確/前兆の公開朝一数値を保持。

## boundaryAudit

- 前レコード2015-08-24群CLOSED後、**2015-08-25～2015-09-06**を導入日一覧、メーカー/業界記事、当時解析、後年機種年表で横断再探索。
- 2015-08-31は主にパチンコ新台導入が確認され、現時点で全国導入日を具体日付きで固定できる未登録5号機は追加発見できず。
- よって境界を `2015-08-25_TO_2015-09-06_CLOSED_FOR_CURRENT_RESEARCH` とする。
- 2015-09-07群はOPEN。少なくとも本機と「パチスロ聖闘士星矢-女神聖戦-」を同日候補として確認し、後者は次回未処理候補。

## sources

取得日: 2026-09-07

1. サミー公式 マイスロお知らせ — https://www.sammy.co.jp/japanese/myslot/news/index_12.html
   - 2015-09-07を「パチスロ 北斗の拳 強敵」のホール導入日と公式明記。
2. サミー公式 2015年パチスロ製品一覧 — https://www.sammy.co.jp/japanese/products/pachislot/2015/index.html
   - 2015年製品として本機を確認。
3. サミーネットワークス / PR TIMES（2015-09-01） — https://prtimes.jp/main/html/rd/p/000000545.000002703.html
   - ホール導入前オンライン試打会告知。
4. グリーンべると（2015-09-08） — https://web-greenbelt.jp/00008057/
   - 2015-09-07からホール導入開始と確認。
5. K-Navi — https://p-kn.com/slot/2316/
   - ホール導入開始2015-09-07、AT純増約2.8枚/G、初期100枚以上等。
6. P-WORLD — https://www.p-world.co.jp/machine/database/7792
   - 5号機AT、純増約2.8枚/G、初期100枚以上等。
7. HAZUSE — https://hazuse.com/machine/pachislot/5S0225/
   - 検定番号系統、解析情報を確認。
8. パチマガスロマガ 50枚あたりG数 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/145/c.php
   - 約44.4～44.5G/50枚。
9. パチマガスロマガ ゲーム性 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/145/l.php
   - 低確/通常/高確/前兆、1600G天井等。
10. ちょんぼりすた — https://chonborista.com/slot/sammy-slot/10113/
   - 設定別AT初当たり/機械割、1568G+最大32G、設定変更時天井RESET、朝一モード値。
11. パチスロ収支アップ（man-soft） — https://smaslo.man-soft.com/slot-kaiseki/hokutonokentomo.html
   - リセット/電源ON-OFF対照表、設定変更時高確/前兆選択率、スペック。
12. すろぱちくえすと 朝一リセット — https://www.slopachi-quest.com/article/hokuto-tomo-reset/
   - 朝一高確/前兆、ガックン実測資料。
13. pacnk — https://pacnk.com/slot/tools/sh_hokutotomo.html
   - 設定変更後も天井短縮なし、1568G再カウントを照合。

## confidence

- identity/release: OFFICIAL_INDUSTRY_HIGH
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- resetBehavior: ANALYSIS_HIGH_MULTI_SOURCE
- resetDetectionGakkun: ANALYSIS_SINGLE_PRACTICAL
- numericResetData setting3 foreground: CONFLICT
