# 餓狼伝説PREMIUM

machineName: 餓狼伝説PREMIUM
formalModelName: ガロウデンセツプレミアムBB
inspectionNumber: 4S0203
manufacturer: SNKプレイモア
releaseDate: 2014-06-02
releaseDatePrecision: exact_start
generation: 5号機
systemType: AT特化 / 規定ゲーム数 + CZ + レア役解除 / 継続率・セット数・ゲーム数上乗せ
recordStatus: COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7

## identity

- ホール導入開始 **2014-06-02**。K-Navi、HAZUSE、パチ＆スロ必勝本で一致。
- HAZUSEで型式名 **ガロウデンセツプレミアムBB**、検定番号 **4S0203**、メーカー **SNKプレイモア** を確認。
- 旧作「餓狼伝説」「餓狼伝説スペシャル」等とは別機種として分離。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

### 系列A — HAZUSE

| 設定 | 出玉率 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.6% |
| 3 | 99.9% |
| 4 | 103.8% |
| 5 | 108.4% |
| 6 | 113.5% |

### 系列B — パチ＆スロ必勝本

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.2% |
| 2 | 98.9% |
| 3 | 100.3% |
| 4 | 104.2% |
| 5 | 108.9% |
| 6 | 114.0% |

- 両系列は全設定で0.3～0.5pt程度ずれ、単なる表示丸めだけでは説明しきれないため平均せず **CONFLICT_PAYOUT_RATE** として双方を保持。
- confidence: CONFLICT / ANALYSIS_HIGH

## initialHitBySetting

### AT「餓狼RUSH」初当たり

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/298.9 |
| 2 | 1/290.0～1/290.1 |
| 3 | 1/273.4 |
| 4 | 1/255.4 |
| 5 | 1/226.8 |
| 6 | 1/205.5 |

- K-Navi、パチ＆スロ必勝本でほぼ完全一致。HAZUSEは1/299.0、1/290.0、1/273.0、1/255.0、1/227.0、1/206.0の丸め表示。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約30G / 50枚**。
- パチマガスロマガ旧攻略に「50枚あたりのゲーム数 約30G」と明記。
- 導入前後の当時スペック整理にも約30G/50枚の記録があるが、主根拠はパチマガスロマガとする。
- confidence: ANALYSIS_HIGH

## netIncrease

- AT「餓狼RUSH」: **約2.8枚/G**。
- グリーンべると当時業界発表、K-Navi、パチマガスロマガ、パチ＆スロ必勝本で一致。
- confidence: INDUSTRY / ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「餓狼RUSH」: **1セット30G / 50G / 100G + 継続バトル**。
- AT継続率: **50%～90%**。
- 純増約2.8枚/Gのため、上乗せを除くセット本体の理論純増目安は30Gなら約84枚、50Gなら約140枚、100Gなら約280枚。ただしこれは単純積であり公称「獲得枚数」ではないため基本獲得枚数として固定しない。
- T.O.P.: 3G保証+継続抽選、平均上乗せ約120Gとする解析。
- レジェンド絵柄/レジェンドフリーズ系では最大1000G上乗せ契機あり。
- confidence: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

- AT初当たり契機は規定ゲーム数、CZ「餓狼CHANCE」、レア役直撃等。
- CZは主に3系統: バトルモード（AT期待度約30%）、ノックアウトモード（約50%）、帝王モード（約60%）。
- 規定ゲーム数候補は **333G / 555G / 777G / 990～993G**。天国/超天国では **90～93G**。
- 通常モードは通常A / 通常B / 通常C、短期連チャン側に天国 / 超天国を持つ。
- 完全再現用の全ゾーン振り分け・全状態移行抽選は本DB対象外。ただし設定変更時のモード振り分けは朝一行動へ直結するためresetBehaviorへ保存。

## ceiling

- 最大天井は **AT間993G + 前兆**。
- HAZUSEではAT間993G消化で前兆経由AT、最深部到達時は次回天国モード以上濃厚。
- 当時解析では333/555/777/993Gにも規定ゲーム数振り分けがある。
- 990G以降のAT当選時は次回 **天国80% / 超天国20%** とする解析値あり。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **AT間天井までのゲーム数をリセット**。
- 設定変更時専用のモード移行抽選があり、通常A/Bではなく **通常Cまたは天国**へ振り分けられる解析を確認。
- HAZUSE公開値:
  - 設定1～3: 通常C **90.0%** / 天国 **10.0%**
  - 設定4: 通常C **87.5%** / 天国 **12.5%**
  - 設定5: 通常C **85.0%** / 天国 **15.0%**
  - 設定6: 通常C **80.0%** / 天国 **20.0%**
- 設定変更後、天国非選択なら通常Cスタートとなるため、通常A/B開始より規定G数振り分けが若干優遇される。
- confidence: ANALYSIS_HIGH / PERIOD_ANALYSIS_MULTI_SOURCE

### carryOverBehavior

- 当時/後年実戦資料では、前日G数を加算して993G付近で当選した事例が据え置き天井として扱われており、**据え置き時のAT間天井G CARRYOVERを支持する観測**がある。
- ただしメーカー直接契約ではないため **PERIOD_OBSERVATIONAL_SUPPORT** として保持。
- 据え置き時の通常A/B/C・天国/超天国モードおよび内部高確状態の完全な保持契約は、安全な直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更を伴わない単純電源OFF→ON時のAT間G数・モード・内部状態を、本機固有の直接資料として十分固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 「据え置き宵越し」観測を純電断の内部契約へ自動転記しない。

### gameCounterReset

- 設定変更: **RESET**。
- 据え置き: **CARRYOVER_SUPPORTED_BY_PERIOD_OBSERVATION**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更後も最大天井の基本上限は通常系の **993G + 前兆**。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ただし設定変更時は通常C/天国へ振り分けられ、天国選択時は **90～93G**の規定ゲーム数となる。これは「固定短縮天井」ではなくモード振り分け恩恵として管理する。

### modeAfterReset

- 設定変更時のモード振り分け:
  - 設定1～3: 通常C 90.0% / 天国 10.0%
  - 設定4: 通常C 87.5% / 天国 12.5%
  - 設定5: 通常C 85.0% / 天国 15.0%
  - 設定6: 通常C 80.0% / 天国 20.0%
- 天国・超天国滞在時の規定ゲーム数は90～93G。
- confidence: ANALYSIS_HIGH

### stateAfterReset

- 通常A/B等のゲーム数モードとは別の通常/高確/超高確など内部状態について、設定変更時の開始状態振り分けを本機固有の安全な公開資料として今回固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更時は通常Cまたは天国へ再抽選され、通常A/Bスタートを回避する解析。
- 設定1でも天国スタート **10.0%**、設定6では **20.0%**。
- 天国なら90～93G以内の規定ゲーム数解除対象となる。
- 通常Cも通常A/Bより333/555/777G側の振り分けが相対的に高いとする解析があり、朝一の規定G数選択が若干優遇される。

### resetPenalties

- 設定変更時固有の主要不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 本機固有のガックン、液晶表示、ステージ等による高信頼な設定変更確定/濃厚判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 早い規定G当選は設定変更後の通常C/天国振り分けと整合し得るが、通常営業中にも同モードが存在するため単独の変更判別材料として確定扱いしない。

### numericResetData

- 設定変更時モード振り分け:
  - 設定1～3: 通常C 90.0% / 天国 10.0%
  - 設定4: 通常C 87.5% / 天国 12.5%
  - 設定5: 通常C 85.0% / 天国 15.0%
  - 設定6: 通常C 80.0% / 天国 20.0%
- 天国/超天国時の規定G: **90 / 91 / 92 / 93G 各25%**。
- 設定変更専用の固定短縮天井: **NONE_CONFIRMED**。

### publicMorningNumbers

- 天国スタート率: **10.0%（設定1～3） / 12.5%（設定4） / 15.0%（設定5） / 20.0%（設定6）**。
- 非天国時は通常C。
- 天国/超天国の規定ゲーム数: **90～93G（各25%）**。
- confidence: ANALYSIS_HIGH

## resetBehavior 再探索メモ

- `餓狼伝説PREMIUM / 餓狼伝説プレミアム / ガロウデンセツプレミアムBB / 4S0203 / SNKプレイモア` に `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / モード / モード移行 / 天国 / 93G / ガックン` を組み合わせて再探索。
- HAZUSE、K-Navi、パチマガスロマガ、パチ＆スロ必勝本、2014年当時の天井/ゾーン解析、後年実戦記事を横断。
- 初代/スペシャル等の旧餓狼シリーズや別メーカーの「牙狼」系パチスロを混入しない。
- 据え置き天井は実戦観測支持があるが、純電断時の直接契約、内部高確状態、ガックン判別は十分な再探索後も固定できないため推測しない。

## conflicts / safeguards

- 機械割はHAZUSE **96.9/98.6/99.9/103.8/108.4/113.5%** とパチ＆スロ必勝本 **97.2/98.9/100.3/104.2/108.9/114.0%** が競合。平均せず双方保持。
- AT初当たりの1/298.9等とHAZUSEの1/299.0等は丸め差として扱いCONFLICT化しない。
- 最大天井「993G」とモード別333/555/777/990～993Gは矛盾ではなく、規定ゲーム数振り分けと最深部の関係。
- 天国90～93Gは設定変更後固定天井ではなく、設定変更時に天国が選ばれた場合の規定ゲーム数。

## sources

取得日: 2026-09-07

1. HAZUSE — 餓狼伝説PREMIUM
   - https://hazuse.com/machine/pachislot/4S0203/
   - 型式名、検定番号、導入日、天井、AT初当たり、各解析への導線
   - reliability: ANALYSIS_HIGH
2. HAZUSE — 基本スペック
   - https://hazuse.com/machine/pachislot/4S0203/genre/201/
   - AT初当たり、機械割96.9～113.5%
   - reliability: ANALYSIS_HIGH
3. HAZUSE — AT/ART
   - https://hazuse.com/machine/pachislot/4S0203/genre/209/
   - 設定変更時モード振り分け、通常A/B/C・天国/超天国、規定G数振り分け
   - reliability: ANALYSIS_HIGH
4. K-Navi — 餓狼伝説PREMIUM
   - https://p-kn.com/slot/2049/
   - 2014-06-02導入、AT初当たり、AT30～100G、純増約2.8枚/G
   - reliability: ANALYSIS_HIGH
5. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/2406/1/46189
   - 2014-06-02導入、AT初当たり、機械割97.2～114.0%、AT仕様
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 基本
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/48/a.php
   - AT純増約2.8枚/G、1セット30～100G、継続率50～90%
   - reliability: ANALYSIS_HIGH
7. パチマガスロマガ — 小役/50枚ゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/48/c.php
   - 50枚あたり約30G
   - reliability: ANALYSIS_HIGH
8. パチマガスロマガ — AT突入フロー
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/48/l.php
   - 333/555/777/993G、天国・超天国97G以内、AT仕様
   - reliability: ANALYSIS_HIGH
9. グリーンべると — 最大1000GのG数上乗せ！『餓狼伝説PREMIUM』（2014-04-15）
   - https://web-greenbelt.jp/00006164/
   - 純増2.8枚/G、1セット30～100G、CZ概要、6月上旬納品
   - reliability: INDUSTRY
10. 期待値見える化 — 天井・ゾーン（2014-06-08）
   - https://slotjin.com/zone/garoudensetsu-premium/
   - 設定変更で天井Gリセット、通常993G/天国93G、ゾーン実践値
   - reliability: PERIOD_ANALYSIS
11. 期待値見える化 — 朝一設定変更後（2014-07-01）
   - https://slotjin.com/zone/garoudensetsu-premium-morning/
   - 設定変更後モードC/天国優遇の当時解析
   - reliability: PERIOD_ANALYSIS
12. K-Navi — 後年実戦記事内の据え置き天井観測
   - https://p-kn.com/slot/2165/
   - 前日165G+当日829G=994Gで据え置き天井の可能性を判断した実戦記述
   - reliability: PERIOD_OBSERVATIONAL

## missingFields

- 設定変更なし電源OFF→ON時のAT間G数・モード・内部状態の直接契約
- 据え置き時のモード/高確状態の完全な保持契約
- 設定変更時の通常/高確/超高確等の開始状態振り分け
- 本機固有の高信頼resetDetection（ガックン等）

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## conflicts

- payoutRateBySetting: HAZUSE 96.9/98.6/99.9/103.8/108.4/113.5% vs パチ＆スロ必勝本 97.2/98.9/100.3/104.2/108.9/114.0%。
