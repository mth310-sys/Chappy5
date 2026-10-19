# アクアビーナス

machineName: アクアビーナス
manufacturer: 平和
releaseDate: 2006-12
generation: 5号機初期
systemType: ノーマル / 完全告知
coreStatus: `COMPLETE_CORE_ORIGINAL_STATUS_PRESERVED`
resetQaStatus: `PARTIAL_RESEARCH_EXHAUSTED`
resetQaUpdatedAt: 2026-09-11

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 99.2% |
| 2 | 100.9% |
| 3 | 102.7% |
| 4 | 104.8% |
| 5 | 106.9% |
| 6 | 111.1% |

P-WORLDと5号機クロニクルで一致。既存性能値はQAで変更しない。

reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | BIG | REG |
|---:|---:|---:|
| 1 | 1/300.5 | 1/600.4 |
| 2 | 1/292.0 | 1/573.3 |
| 3 | 1/285.9 | 1/550.0 |
| 4 | 1/275.0 | 1/528.6 |
| 5 | 1/269.0 | 1/472.9 |
| 6 | 1/257.9 | 1/367.2 |

reliability: ANALYSIS_HIGH

## baseGamesPer50
UNVERIFIED

既存欠損を維持。今回QAはresetBehaviorを主対象とし、性能完了判定を不用意に崩さない。

## netIncrease
RT等の付加出玉機能は持たない純Aタイプとして扱う。

## basicPayout
P-WORLD掲載:
- BIG: 約312枚
- REG: 約143枚

5号機クロニクルの約360枚/約104枚は定義差の可能性があるためCONFLICT候補として維持。

## modeSpecificMinimumData
- 完全告知タイプ。
- 単独ボーナスは成立ゲーム告知。
- リプレイ重複では次ゲーム以降のリプレイ非成立ゲームで告知される構造。
- ボーナス成立後にリプレイ確率が上がり、リプレイ連続がボーナス期待感につながるゲーム性。

## resetBehavior
### settingChangeBehavior
- `UNVERIFIED_AFTER_RESEARCH`。
- 「アクアビーナス / アクアビーナスK / 平和 / 設定変更 / リセット / 朝一 / 初期出目 / リプレイ状態」等へ検索語を変え、当時攻略・後年回顧・中古実機/機種DBまで再探索したが、設定変更時の本機固有内部契約を直接固定できる資料は得られず。

### carryOverBehavior
- `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 据え置きを純電源OFF→ONと同義にせず独立条件として探索したが、本機固有資料を固定できず。

### powerCycleBehavior
- `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- 電源OFF→ONのみで、ボーナス成立後の高リプレイ状態/告知待ち状態等がどう処理されるかを直接示す資料は固定できず。

### gameCounterReset
- 通常ゲーム数天井を持つことを示す高信頼資料なし。
- `NOT_CONFIRMED_AS_APPLICABLE / NO_PUBLIC_CEILING_FOUND_AFTER_RESEARCH`。

### ceilingAfterReset
- 公開天井なし。短縮天井も `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 朝一専用の内部モード再抽選やモード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 本機の特徴であるボーナス成立後のリプレイ確率上昇/告知待ち状態について、設定変更・据え置き・純電断別の直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機ノーマル機の仕様から推定転記しない。

### advantageousSectionReset
- `NOT_APPLICABLE`（2006年の5号機初期。有利区間制度前）。

### resetBenefits
- 設定変更時固有の朝一恩恵、短縮天井、専用当選率は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更時固有の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン、初期出目、表示、朝一リプレイ挙動による変更判別を高信頼で固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetShortenedCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetSpecificMorningHitRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- resetBenefitRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

### resetQaResearchNotes
- 再探索系統: P-WORLD系DB / 5号機回顧 / パチマガスロマガ回顧 / 個人保存データ / 中古実機情報 / アプリ紹介 / 当時機種解説。
- パチマガスロマガFREE回顧および複数後年資料で、リプレイ連を軸にしたゲーム性は再確認できたが、朝一契約を固定できる一次/当時解析値は発見できず。
- よって推測補完せず `PARTIAL_RESEARCH_EXHAUSTED`。

## sources
取得日: 2026-09-11
1. P-WORLD — https://www.p-world.co.jp/machine/database/4492 — 設定別BIG/REG、出玉率、型式名、獲得枚数 — reliability: `ANALYSIS_HIGH`
2. 5号機クロニクル — https://5goki.com/heiwa-olympia — 導入月、設定別機械割照合、純Aタイプ — reliability: `RETROSPECTIVE_DATABASE`
3. グリーンべると — https://web-greenbelt.jp/00004935/ — 2006年11月発表 — reliability: `INDUSTRY`
4. パチマガスロマガFREE — https://pachimaga.com/free/special/c8e934bc667b6ad09cfc1125474f943e7dc41e52.php — 2024年回顧、リプレイ連を軸にしたゲーム性再確認 — reliability: `RETROSPECTIVE_ANALYSIS`
5. APPLION/平和公式アプリ紹介転載 — https://applion.jp/パチスロ-アクアビーナス/android-jp.heiwa.dx.googleplay.pachislo.aqb/ — 実機シミュレータ由来のゲーム性補助確認 — reliability: `SECONDARY_APP_ARCHIVE`

## missingFields
- 50枚あたりゲーム数。
- 設定変更/据え置き/純電源OFF→ONの本機固有直接契約。
- 朝一公開数値・変更判別情報。

## conflicts
basicPayout:
- P-WORLD: BIG約312枚 / REG約143枚
- 5号機クロニクル: BIG約360枚 / REG約104枚

平均化せず既存CONFLICTを保持。
