machineName: パチスロニュースモモチャンEX
manufacturer: ニューギン
releaseDate: 2016-12-19
recordNumber: 1031
generation: 5号機 / 5.5号機期
systemType: ノーマルA / 完全告知 / 25Φ
formalModelName: ニュースモモチャンEX
certificationNumber: 6S0257
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_BASE_PENDING

## identity
- 鹿児島県公安委員会告示で型式名「ニュースモモチャンEX」、製造者ニューギン、検定番号6S0257を直接確認。
- HAZUSEは導入日2016-12-19、ALL7も同日導入予定。2016-10-22の遊技業界記事はEX / EX-30の2仕様を同時発表と報道。
reliability: OFFICIAL_PUBLIC_RECORD_PLUS_INDUSTRY_HIGH

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.3% |
| 2 | 98.27% |
| 3 | 100.62% |
| 4 | 103.03% |
| 5 | 105.36% |
| 6 | 108.06% |

- P-WORLD精密値をcanonical。5号機クロニクルの97.3 / 98.3 / 100.6 / 103.0 / 105.4 / 108.1%は同系列の丸め値。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/287.4 | 1/455.1 | 1/176.2 |
| 2 | 1/282.5 | 1/442.8 | 1/172.5 |
| 3 | 1/282.5 | 1/348.6 | 1/156.0 |
| 4 | 1/273.1 | 1/321.3 | 1/147.6 |
| 5 | 1/273.1 | 1/268.6 | 1/135.4 |
| 6 | 1/268.6 | 1/268.6 | 1/134.3 |

- P-WORLDと5号機クロニクルで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- `UNVERIFIED_AFTER_RESEARCH`。
- 機種名/型式名に「50枚」「1000円」「ベース」「コイン持ち」「通常時」を組み合わせ、P-WORLD、パチマガスロマガ、旧DB、回顧資料を再探索したが比較可能な直接値を固定できず、推測しない。
reliability: UNVERIFIED

## netIncrease
- `NOT_APPLICABLE_NORMAL_A_TYPE`。

## basicPayout
- BIG CHANCE: 最大325枚（336枚超払い出しで終了）。
- BONUS GAME / REG: 最大104枚（98枚超払い出しで終了）。
- 遊技業界記事もBB純増325枚、RB純増104枚と一致。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- AT/ART/CZ/ゲーム数モードなしの完全告知ノーマルAタイプ。
- 通常ゲーム数天井は確認されず、P-WORLD/HAZUSEの機種構造上も天井狙い要素なし。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_TRANSIENT_STATE_UNVERIFIED
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 長期ゲーム数、天井、AT/ART/CZモードを持たないため、ホール経営/朝一客AI上のリセット対象となるマクロ内部進捗は `NOT_APPLICABLE`。
- 設定変更時の本機固有の一時内部状態/成立済みボーナス等の直接契約は再探索後も `UNVERIFIED_AFTER_RESEARCH`。一般的Aタイプ挙動から補完しない。

### carryOverBehavior
- 天井/モード/周期/ポイントは `NOT_APPLICABLE`。
- 据え置き時の本機固有一時状態について直接資料は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 天井/モード/周期/ポイントは `NOT_APPLICABLE`。
- 純電源OFF→ON時の本機固有一時状態について直接資料は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset
- `NOT_APPLICABLE_NO_LONG_TERM_MODE`。

### stateAfterReset
- 朝一客行動へ影響する高確/CZ/ART状態は `NOT_APPLICABLE`。
- 一時的な成立状態の直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更専用の短縮天井、高確スタート、特定G以内当選優遇等は検索語/資料系統変更後も `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 消去される天井/周期/ポイント価値は `NOT_APPLICABLE`。
- その他の本機固有リセット不利は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン、初期出目、ランプ、表示による設定変更/据え置き判別契約は再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- スモモランプは通常のボーナス告知ランプであり変更判別要素として扱わない。

### numericResetData
- 公開された設定変更時モード振り分け、短縮天井、朝一特定G以内当選率、リセット恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。

## dataQualityNotes
- 25Φと30Φはボーナス確率が同一だが機械割が異なる。公安委員会でも別型式/別検定番号のため独立レコードとする。
- 25Φの機械割は30Φの95.9〜105.2%を混入させない。
- 朝一/設定変更は「ニュースモモチャンEX」「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」「天井」を組み替え、P-WORLD、HAZUSE、パチマガスロマガ、業界記事、旧機種DB、実機販売資料まで再探索したうえで欠損判定。

## conflicts
- NONE_CONFIRMED.

## missingFields
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- 設定変更/据え置き/純電断時の一時内部状態直接契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有変更判別: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. 鹿児島県公報 第3220号（公安委員会告示）
   - https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1606/documents/52430_20160613103640-1.pdf
2. HAZUSE — パチスロニュースモモチャンEX
   - https://hazuse.com/en/machine/pachislot/6S0257/
3. P-WORLD — パチスロニュースモモチャンEX
   - https://www.p-world.co.jp/machine/database/8203
4. 長崎県遊技業協同組合 / 遊技通信web転載 — ニューギンがオリジナルキャラでノーマル機を発表
   - https://nagasaki-yukyo.or.jp/information/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%AE%E3%83%B3%E3%81%8C%E3%80%81%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%8A%E3%83%AB%E3%82%AD%E3%83%A3%E3%83%A9%E3%81%A7%E3%83%8E%E3%83%BC%E3%83%9E%E3%83%AB%E6%A9%9F%E3%82%92/
5. P-MEDIA JAPAN — ニュースモモチャン25Φ＋沖スロ30Φ検定通過
   - https://p-media.info/%E3%83%8E%E3%83%BC%E3%83%9E%E3%83%AB%E3%82%B9%E3%83%9A%E3%83%83%E3%82%AF%E3%81%AE%E3%83%AA%E3%83%90%E3%82%A4%E3%83%90%E3%83%AB%E6%B4%BB%E7%99%BA%EF%BC%8F%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9%E3%83%A2/
6. 5号機クロニクル — ニューギン＆エキサイト5号機一覧
   - https://5goki.com/newgin-excite
7. ALL7 — 2016年12月導入予定一覧
   - https://www.all7.jp/plans/index/2016/12
