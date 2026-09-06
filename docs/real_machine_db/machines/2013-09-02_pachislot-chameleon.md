# パチスロ カメレオン

machineName: パチスロ カメレオン
manufacturer: タイヨーエレック
releaseDate: 2013-09-02
releaseDatePrecision: exact_day_relay_chronology__contemporary_delivery_start_2013-09-01
releaseDateStatus: CONFLICT_RELEASE_PERIOD_2013_08_VS_2013_09_02_CHRONOLOGY

generation: 5号機
systemType: A+ART / ゲーム数上乗せ
recordStatus: PARTIAL_CORE_AFTER_RESEARCH_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL

## identity

- タイヨーエレックの5号機「パチスロ カメレオン」。同名の2004年ニイガタ電子機やパチンコ機と混同しない。
- 当時業界記事では **2013-09-01納品開始予定**。最新mainの同日群監査ではホール導入時系列を **2013-09-02** として処理する。
- 後年の5号機クロニクル等には **2013/8** とする整理もあるため、月表記差は平均化せず `CONFLICT_RELEASE_PERIOD_2013_08_VS_2013_09_02_CHRONOLOGY` として保持する。
- confidence: INDUSTRY + ANALYSIS_HIGH

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.2% |
| 2 | 99.5% |
| 3 | 101.4% |
| 4 | 104.0% |
| 5 | 107.9% |
| 6 | 111.5% |

- パチマガスロマガ系の精密表と5号機クロニクルの掲載系列が一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ボーナス合算

| 設定 | ボーナス合算 |
|---|---:|
| 1 | 1/244.5 |
| 2 | 1/240.9 |
| 3 | 1/230.8 |
| 4 | 1/227.6 |
| 5 | 1/212.8 |
| 6 | 1/210.1 |

### BIG

| 設定 | BIG |
|---|---:|
| 1 | 1/399.6 |
| 2 | 1/399.6 |
| 3 | 1/381.1 |
| 4 | 1/381.1 |
| 5 | 1/348.6 |
| 6 | 1/348.6 |

### REG

| 設定 | REG |
|---|---:|
| 1 | 1/630.2 |
| 2 | 1/606.8 |
| 3 | 1/585.2 |
| 4 | 1/565.0 |
| 5 | 1/546.2 |
| 6 | 1/528.5 |

### ART初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/495.7 |
| 2 | 1/423.2 |
| 3 | 1/437.7 |
| 4 | 1/377.5 |
| 5 | 1/380.1 |
| 6 | 1/331.0 |

- 当時業界記事の「ボーナス+ART初当たり 1/163.7（設定1）〜1/128.5（設定6）」は合成定義が異なるため、ART単独初当たり表へ混ぜない。
- confidence: ANALYSIS_HIGH + INDUSTRY

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「50枚」「1000円」「1K」「コイン持ち」「ベース」を機種名・メーカー名・表記揺れと組み合わせ、当時解析・機種DB・後年整理を横断したが、2013年タイヨーエレック版を明示する比較可能な直接値を今回固定できなかった。
- 推定値は入れない。

## netIncrease

- ART「爆走YAZAWA猛怒」: **1セット50G+α / 純増約1.6枚/G**。
- ゲーム数上乗せ型。上乗せ特化ゾーン「ヤザワ菩薩降臨」は1セット5Gまたは10G、最大継続率75%と当時業界記事・解析で確認。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **純増約200枚**。
- REG: **純増約42枚**。
- confidence: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時にART前兆/高確に関わる状態・モード系情報が公開されていたことは当時解析インデックスで確認。
- K-Naviでは高確挙動として夜背景等を扱うが、設定変更時の初期モード/状態と同義には扱わない。
- 通常時の全モード移行テーブルは本ミッションの取得対象外。

## ceiling

- **ボーナス間1200G消化でART突入確定**。
- confidence: ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__RESET_CARRYOVER_POWER_CYCLE_MODE_STATE_DETECTION_UNVERIFIED_AFTER_MULTI_QUERY_RESEARCH
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- **UNVERIFIED_AFTER_RESEARCH**。
- パチマガスロマガ系の本機インデックスに「朝イチ・設定変更」専用項目が存在することまでは確認したが、今回取得できた現存ページ/検索キャッシュから本文の具体契約を回収できなかった。
- 機種名・型式相当表記・メーカー名と「設定変更」「リセット」「朝一」「天井」「モード」「ガックン」等を組み替えて再探索したが、設定変更時の天井G・モード・状態の直接値は固定しない。

### carryOverBehavior

- 純据え置き時のボーナス間G数、天井進捗、内部モード/状態の保持契約は **UNVERIFIED_AFTER_RESEARCH**。
- 一般的な5号機挙動や設定変更側の推定から補完しない。

### powerCycleBehavior

- 設定変更を伴わない **電源OFF→ONのみ** のボーナス間G数、天井進捗、内部モード/状態、液晶初期状態は **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- setting change: **UNVERIFIED_AFTER_RESEARCH**。
- pure carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 通常時の天井: **ボーナス間1200G → ART確定**。
- 設定変更専用の短縮天井/変更後固定天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更で前日進捗が消えるかどうか自体は、直接根拠を固定できないため推定しない。

### modeAfterReset

- 通常時にモード/状態系解析が存在することは確認。
- 設定変更時の初期モード振り分け、朝一専用モード: **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset

- 設定変更時、純据え置き時、電源OFF→ONのみの場合の内部状態処理は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 朝一専用短縮天井、設定変更専用ART/CZ優遇、専用モード振り分け等の公開数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties

- 設定変更専用の不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 天井進捗消去を直接確認できていないため、宵越し不利とは断定しない。

### resetDetection

- 本機固有のガックン、初期出目、液晶ステージ、ランプ等を使った設定変更/据え置き判別は **UNVERIFIED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時のモード振り分け率、朝一特定G数以内の当選率、短縮天井G数、リセット恩恵発生率: **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- 導入時期は、当時業界記事の **2013-09-01納品開始予定** と最新mainの具体日キュー **2013-09-02** を本線に置く一方、後年整理の **2013/8** を削除せず期間CONFLICTとして保持する。
- 「ボーナス+ART初当たり」と「ART初当たり」は定義が異なるため混ぜない。
- resetBehaviorは本文を直接回収できなかった「朝イチ・設定変更」ページの存在だけから内容を推定しない。
- 2004年ニイガタ電子の「カメレオン」および同名パチンコ/作品情報を混入させない。

## sources

取得日: **2026-09-06**

1. グリーンべると「遊び易さと満足感を備えた『パチスロ カメレオン』」
   - https://web-greenbelt.jp/00000997/
   - 2013-07-25掲載。ボーナス+ART、ART 50G+α・約1.6枚/G、BIG約200枚、REG42枚、ボーナス+ART合成初当たり、2013-09-01納品開始予定。
   - confidence: INDUSTRY_HIGH

2. パチマガスロマガ系「パチスロ カメレオン ボーナス確率・PAYOUT」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/15/h-1.php
   - 設定別BIG/REG/ボーナス合算/ART初当たり/PAYOUT。
   - confidence: ANALYSIS_HIGH

3. パチマガスロマガ系「パチスロ カメレオン ART突入フロー」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/15/l.php
   - ART 50G+α・純増約1.6枚/G、ゲーム数上乗せ、ヤザワ菩薩降臨。
   - confidence: ANALYSIS_HIGH

4. パチマガスロマガ系「パチスロ カメレオン」インデックス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/15/taiyoelec_slot_15.php
   - 「モード移行率」「天井・ヤメ時」「朝イチ・設定変更」の解析項目が存在したことを確認。今回の取得系では朝一本文の具体値は回収できず、内容推定には使用しない。
   - confidence: ANALYSIS_HIGH_INDEX_ONLY

5. P-WORLD「パチスロ カメレオン」
   - https://www.p-world.co.jp/machine/database/7155
   - タイヨーエレック、5号機ART、BIG約200枚、REG約42枚、ART 50G+α・約1.6枚/G、ボーナス間1200G天井でART確定。
   - confidence: INDUSTRY_DATABASE_HIGH

6. 5号機クロニクル「タイヨーエレック 5号機全機種一覧」
   - https://5goki.com/yaiyoelec
   - 機械割系列の別ソース照合。導入時期を2013/8と整理しているため期間CONFLICTとして保持。
   - confidence: RETROSPECTIVE_ANALYSIS

7. K-Navi「パチスロ カメレオン」
   - https://p-kn.com/slot/1906/direct/
   - 2013-09-02時点のユーザー質問記録を含む当時運用痕跡、高確/ART関連の補助確認。
   - confidence: CONTEMPORARY_ANALYSIS_SUPPORT
