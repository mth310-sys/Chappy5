# パチスロサイバーブルー

machineName: パチスロサイバーブルー
manufacturer: 三洋物産
releaseDate: 2015-03-02
releaseDatePrecision: exact_hall_start_multi_source
releaseDateNote: K-Naviとパチ7が2015-03-02導入を明記。2015-01-20のSANYO内覧会記事は発表日として分離。
generation: 5号機
systemType: AT / 擬似ボーナス / バトル継続・ゲーム数上乗せ
modelName: パチスロサイバーブルーTA
modelNameConfidence: ANALYSIS_SINGLE_PLUS_USED_MACHINE_MULTI_LISTING
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_AND_RESET_BEHAVIOR_V0_7

## identity

- 原哲夫作画のSF漫画「CYBERブルー」タイアップ。
- P-WORLD、K-Navi、パチ7、パチマガスロマガ、当時業界記事で三洋物産の2015年AT機として照合。
- 型式名 `パチスロサイバーブルーTA` は中古実機専門店と同型式表記の複数流通資料で確認。ただし公的検定資料を今回直接固定できなかったため信頼度は `ANALYSIS_SINGLE_PLUS_USED_MACHINE_MULTI_LISTING`。
- 検定番号は `サイバーブルー / CYBER BLUE / パチスロサイバーブルーTA / 三洋 / SANYO / 型式 / 検定 / 検定通過` を組み替えて再探索したが安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.4% |
| 3 | 100.5% |
| 4 | 103.6% |
| 5 | 106.9% |
| 6 | 112.1% |

- P-WORLDとK-Naviで一致。別解析の精密表記 96.92 / 98.37 / 100.51 / 103.62 / 106.89 / 112.13% は丸め精度差として別定義保持し、CONFLICTとはしない。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### CYBER BONUS

| 設定 | 初当たり |
|---:|---:|
| 1 | 1/537.9 |
| 2 | 1/517.1 |
| 3 | 1/497.7 |
| 4 | 1/462.9 |
| 5 | 1/433.1 |
| 6 | 1/381.8 |

### BIO BONUS

| 設定 | 初当たり |
|---:|---:|
| 1 | 1/609.7 |
| 2 | 1/598.3 |
| 3 | 1/589.1 |
| 4 | 1/573.7 |
| 5 | 1/540.1 |
| 6 | 1/504.4 |

### BONUS合算

| 設定 | 合算 |
|---:|---:|
| 1 | 1/285.8 |
| 2 | 1/277.4 |
| 3 | 1/269.8 |
| 4 | 1/256.2 |
| 5 | 1/240.4 |
| 6 | 1/217.3 |

- P-WORLDとK-Naviで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`。
- `50枚 / 1000円 / 千円 / ベース / コイン持ち / 通常時 / サイバーブルーTA / 三洋` を組み替え、P-WORLD、K-Navi、パチマガスロマガ、当時解析、後年回顧、中古実機資料を横断したが、比較可能な明示G数を安全に固定できなかった。
- 天井期待値や体感コイン持ちはベース値へ転用しない。

## netIncrease

- 擬似ボーナスAT: **約2.5枚/G**。
- P-WORLD、パチ7、パチマガスロマガ、2015-01-20内覧会記事で一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE

## basicPayout

- BIO BONUS: **1セット基本15G、最低2セット、平均約90枚**。
- CYBER BONUS: **初期40～150G、平均約235枚**。
- 融合BONUS: ブルー強化ゾーン + ブルー死闘ゾーンのバトルAT。固定獲得枚数ではなく平均約10ループと案内されるため、物差しでは固定枚数を捏造しない。
- confidence: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時約1/118でサイバースコープ演出（赤7押し順チャレンジ）。
- ゲーム数天井1: **ボーナス間900G消化後、次回サイバースコープ演出で完全ナビ**。900G到達即発動ではない。
- 天井2: **融合BONUS後、赤7成立20回目で完全ナビ + 融合BONUS確定**。
- 赤7ナビモードとして低確 / 高確 / 超高確が存在。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_DIRECT_RESET_STATE_NUMERIC_EVIDENCE_CARRYOVER_POWER_CYCLE_PARTIAL
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **内部状態を再抽選**。
- 必勝本の設定変更判別特集で、設定変更時は **50%で高確スタート**と明記。
- K-Naviで赤7ナビモードの主な移行契機に **設定変更時** を確認。
- 天井カウンタ（900G系 / 融合BONUS間赤7回数）の設定変更時クリア/引継ぎを直接断定する本機固有資料は今回固定できず、一般的5号機慣例から推定しない。
- confidence: ANALYSIS_HIGH_DIRECT_FOR_STATE / ANALYSIS_HIGH_FOR_RED7_MODE_RELOTTERY

### carryOverBehavior

- 据え置き時の900G天井進捗、融合BONUS間赤7成立回数、赤7ナビモード、内部状態の包括的引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。
- 宵越し一般論や別SANYO機の契約は転記しない。

### powerCycleBehavior

- 設定変更なし **電源OFF→ONのみ**の場合の900G天井進捗、融合BONUS間赤7回数、赤7ナビモード、内部状態について、本機固有の直接資料を再探索したが `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 通常天井はボーナス間900G経過後のサイバースコープ完全ナビ、および融合BONUS間赤7成立20回の2系統。
- 設定変更 / 据え置き / 純電断それぞれでのカウンタRESET/CARRY_OVERは直接契約を安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 通常天井の公開値は **900G経過後の次回サイバースコープ演出**、および **融合BONUS間赤7成立20回**。
- 設定変更専用の固定短縮天井・延長天井は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset

- 赤7ナビモード（低確 / 高確 / 超高確）は **設定変更時が移行契機**。
- 設定変更時の全モード振り分け数値は、今回取得可能な資料から安全に固定できず `FULL_NUMERIC_TABLE_UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更時は状態再抽選。
- **50%で高確スタート**。
- 朝一すぐに高確以上確定の「エクストラ」ステージへ移行した場合、設定変更の可能性が高まる。
- confidence: ANALYSIS_HIGH_DIRECT_NUMERIC

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更時 **50%高確スタート**が明確な朝一恩恵。
- 赤7ナビモードも設定変更を契機に再抽選される。
- 設定変更専用の天井短縮は確認できない。

### resetPenalties

- 設定変更時専用の主要な不利契約: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- **液晶ステージ / 高確挙動**が主要判別材料。
- 設定変更時50%で高確スタートのため、朝一早期に「エクストラ」ステージへ移行すれば変更期待度が上がる。
- 本機固有のリールガックン確定契約は `ガックン / リール / 設定変更判別 / 朝一 / サイバーブルーTA` で再探索したが `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- 設定変更時の高確スタート率: **50%**。
- 赤7ナビモード: 設定変更時に移行抽選あり。全数値テーブルは未固定。
- 設定変更専用の天井短縮G / 朝一特定G以内当選率 / リセットCZ発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- **設定変更時50%で高確スタート**。
- 朝一エクストラステージ移行は設定変更推測材料。

## resetBehavior 再探索メモ

取得日: 2026-09-07

- 表記揺れ: `パチスロサイバーブルー / サイバーブルー / CYBER BLUE / サイバーブルーTA / 三洋 / 三洋物産 / SANYO`。
- 検索語: `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電源 / 天井 / 900G / 融合ボーナス間 / 赤7 / ナビモード / 状態 / 高確 / エクストラ / ガックン / 50枚 / 1000円 / ベース / コイン持ち / 型式 / 検定`。
- 資料系統: P-WORLD、K-Navi、パチ7、パチマガスロマガ、PiDEA/P-WORLD業界ニュース、パチ&スロ必勝本、当時天井解析、後年回顧、中古実機型式資料。
- 900G天井について当時ユーザー投稿には訂正履歴があるため、canonicalは解析記事と複数整理資料が一致する **900G経過後の次回サイバースコープ演出で完全ナビ** とした。

## conflicts

- 機械割の96.9等と96.92等は丸め精度差であり実質同系列。平均しない。
- 900G到達即赤7ナビと誤読できる古い記述に対し、後続資料では **900G経過後の次回約1/118サイバースコープ時**と訂正されている。訂正版をcanonical。
- release monthのみを2015年2月とする後年一覧があるが、K-Navi/パチ7/当時導入記事の具体日2015-03-02をホール導入canonicalとする。

## sources

取得日: 2026-09-07

1. K-Navi 基本/スペック/導入日 — https://p-kn.com/slot/2215/
2. K-Navi 赤7ナビモード概要 — https://p-kn.com/slot/2215/53389/
3. P-WORLD 機種DB — https://www.p-world.co.jp/machine/database/7648
4. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/23/a.php
5. パチ7 ボーナス情報 — https://pachiseven.jp/machines/4422/cutout/4
6. P-WORLD/PiDEA 業界ニュース（2015-01-23、1/20内覧会） — https://news.p-world.co.jp/articles/7144
7. パチ&スロ必勝本 設定変更判別特集 — https://p.hisshobon.jp/vpage/1272/1
8. すろぱちくえすと 天井・スペック解析 — https://www.slopachi-quest.com/article/cyber-blue/
9. slotnews777 当時解析整理 — https://slotnews777.blog.fc2.com/blog-entry-2156.html
10. 中一商事 型式資料 — https://www.nakaiti.com/html/sayo0003.html

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- settingChange/carryOver/powerCycle ceiling-counter contract: UNVERIFIED_AFTER_RESEARCH
- full reset red7 navigation mode distribution: UNVERIFIED_AFTER_RESEARCH
