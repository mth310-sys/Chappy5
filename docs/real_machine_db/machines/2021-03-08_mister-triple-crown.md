# ミスタートリプルクラウン

No: 1400
machineName: ミスタートリプルクラウン
machineNameVariants: ミスタートリプルクラウン / ミスター トリプルクラウン / Sミスタートリプルクラウン / SトリプルクラウンDX-30 / トリクラ
manufacturer: 清龍ゲームジャパン
releaseDate: 2021-03-08
formalModelName: SトリプルクラウンDX-30
certificationNumber: 0S1341

generation: 6号機 / 30Φ
systemType: ノーマルAタイプ / 完全告知 / リアルボーナス

## identity / release
- HAZUSEで型式 `SトリプルクラウンDX-30`、検定番号 `0S1341`、清龍ゲームジャパン、導入開始日2021-03-08を確認。
- パチマガスロマガは清龍ゲームジャパンの2021年3月機として掲載し、6号機ノーマル・5ライン・BIG/REGのリアルボーナス機であることを確認。
- P-WORLDの設置店表示および後年の岡崎産業公式発表から、トリプルクラウンシリーズが当時ほぼ沖縄地域限定で流通していたことを確認。本機も沖縄地域流通機として扱う。
- 後年の回顧リストに2021-03-11表記があるため導入日はCONFLICT保持。複数の機種DBが2021-03-08で一致するため、本DBの時系列canonicalは2021-03-08とする。
- manufacturer表記は一部業界記事に「清瀧ゲームジャパン」があるが、法人名・岡崎産業公式・HAZUSE等の `清龍ゲームジャパン株式会社` をcanonicalとする。
- reliability: ANALYSIS_HIGH / INDUSTRY / OFFICIAL_LATER_CORROBORATION / CONFLICT_DATE

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.9% |
| 3 | 100.6% |
| 4 | 102.7% |
| 5 | 104.8% |
| 6 | 107.3% |
- HAZUSE、P-WORLD、でちゃう、グリーンべると系業界記事で一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/284.94 | 1/397.19 | 1/165.91 |
| 2 | 1/273.07 | 1/378.82 | 1/158.68 |
| 3 | 1/262.14 | 1/360.09 | 1/151.70 |
| 4 | 1/252.02 | 1/336.08 | 1/144.03 |
| 5 | 1/242.73 | 1/327.68 | 1/139.44 |
| 6 | 1/234.06 | 1/312.08 | 1/133.75 |
- HAZUSE、P-WORLD、でちゃうで設定別値を照合。グリーンべるとは設定1/6レンジを照合。
- reliability: INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 約45.5G/50枚〜。
- 現存資料では「でちゃう」の機種ページで確認。別系統の同一数値を固定できなかったため数値自体の信頼度は `ANALYSIS_SINGLE` とする。
- reliability: ANALYSIS_SINGLE

## netIncrease
- `NOT_APPLICABLE`（リアルボーナスのみで出玉を増やすノーマルタイプ。AT/ART純増/Gなし）。

## basicPayout
- BIG BONUS: 最大229枚。
- REG BONUS / BONUS GAME: 最大89枚。
- HAZUSE、P-WORLD、パチマガスロマガ、グリーンべると系業界記事で一致。
- HAZUSEの配当表ではBIGは285枚超の払い出しで終了、REGは103枚超の払い出しで終了。実獲得最大枚数と払い出し終了条件は定義を分けて保持する。
- ボーナス中は一度の逆押し技術介入で最大獲得を狙える。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 天井機能非搭載。
- 通常時はリール右上のバットランプ点灯でボーナス当選告知となる完全告知型。
- AT/CZ/周期/規定G数モードは `NOT_APPLICABLE`。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED_NO_RESET_SPECIFIC_PUBLIC_CONTRACT
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 本機固有の設定変更時挙動を直接説明した公開解析は、機種名・型式名・メーカー名・シリーズ名に「設定変更」「リセット」「朝一」「ガックン」「据え置き」「電源ON/OFF」を組み合わせて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井・周期・AT/CZ・通常モードを持たないノーマル機のため、それらの設定変更RESETは `NOT_APPLICABLE`。
- 設定変更時の成立ボーナス内部状態など、実機完全再現に近いハードウェア挙動は公開機種固有資料を確認できず推測しない。

### carryOverBehavior
- 天井G数・周期・AT/CZ状態・モードの引継ぎは `NOT_APPLICABLE`。
- 据え置き時に本機固有で持ち越される朝一狙い対象の内部状態・蓄積値は公開資料から確認できず `NO_PUBLIC_MACHINE_SPECIFIC_CARRYOVER_TARGET_FOUND_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ON時の本機固有契約を直接記載した資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井/周期/モード等の比較対象はない。成立ボーナス等の内部状態については機種固有資料なしのため一般論から転記しない。

### gameCounterReset
- 天井内部G数: `NOT_APPLICABLE`（天井非搭載）。
- 周期/規定G数: `NOT_APPLICABLE`。
- 外部データカウンター表示の挙動は実機内部性能ではないため本DB対象外。

### ceilingAfterReset
- `NOT_APPLICABLE`。
- HAZUSE・でちゃうで天井なし/天井機能非搭載を確認。
- リセット専用短縮天井も成立しない。

### modeAfterReset
- AT/CZの通常モードや規定G数モードは `NOT_APPLICABLE`。
- 設定変更専用の朝一モード・ボーナス高確モード・専用状態の公開情報は、検索語・資料系統を変えた再探索後も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 通常時の高確/低確等、朝一客行動に影響する状態システムは公開ゲームフローで確認できない。
- 設定変更専用の内部状態再抽選/優遇を示す本機固有資料も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 本機はリアルボーナスのみで出玉を増やす6号機ノーマルタイプで、公開ゲームフローにAT/CZ・有利区間を用いる遊技構造は確認できない。
- 朝一の有利区間ランプ点灯/消灯を変更判別に使う本機固有資料も確認できず、ホール経営/朝一AI用の公開契約としては `NOT_APPLICABLE_AS_PUBLIC_GAMEPLAY_CONTRACT`。

### resetBenefits
- 設定変更専用の短縮天井、朝一高確、専用モード、ボーナス当選率優遇、その他定量恩恵は確認できず `NO_PUBLIC_RESET_SPECIFIC_BENEFIT_FOUND_AFTER_RESEARCH`。
- 通常ボーナス確率は設定差を持つが、これは設定変更時だけの恩恵ではない。

### resetPenalties
- 設定変更専用の定量的不利要素は確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetDetection
- 本機固有のリールガックン条件・発生率、設定変更時の初期出目、ランプ状態、その他朝一判別契約は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- バットランプは通常時のボーナス告知ランプであり、公開資料上は設定変更判別用ではないため混同しない。

### numericResetData
- 短縮天井G数: `NOT_APPLICABLE`。
- 設定変更時モード振り分け: `NOT_APPLICABLE / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 朝一特定G以内当選率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- リセット恩恵発生率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有ガックン発生率: `UNVERIFIED_AFTER_RESEARCH`。

## sources
取得日: 2026-09-12

1. HAZUSE「ミスタートリプルクラウン」
   - https://hazuse.com/machine/pachislot/1S0376/
   - 型式、検定番号、導入日、メーカー、6号機ノーマル、設定別BIG/REG/合算/機械割、最大獲得、天井非搭載。
   - reliability: ANALYSIS_HIGH
2. HAZUSE「ミスタートリプルクラウン｜基本スペック」
   - https://hazuse.com/machine/pachislot/1S0376/genre/201/
   - 設定別ボーナス、機械割、払い出し終了条件、基本仕様、天井非搭載。
   - reliability: ANALYSIS_HIGH
3. P-WORLD「ミスタートリプルクラウン」
   - https://www.p-world.co.jp/machine/database/9361
   - 設定別BIG/REG/合算/出玉率、BIG最大229枚/REG最大89枚。設置店表示は沖縄県内。
   - reliability: ANALYSIS_HIGH / MARKET_DB
4. パチマガスロマガ「ミスタートリプルクラウン」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/06/seiryu_slot_06.php
   - 清龍ゲームジャパン、2021年3月、6号機ノーマル、BIG/REG、技術介入。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ「ミスタートリプルクラウン｜基本スペック」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/06/kh01.php
   - 最大獲得枚数、6号機ノーマル、ゲーム性。
   - reliability: ANALYSIS_HIGH
6. P-WORLD業界ニュース / グリーンべると「シリーズ最高の当たりやすさを追求、パチスロトリクラ最新作が登場」
   - https://news.p-world.co.jp/articles/16072/greenbelt
   - 清龍ゲームジャパン、沖縄仕様ノーマル、設定1/6のBIG/REG/合算/出玉率、最大獲得枚数、技術介入。
   - reliability: INDUSTRY
7. でちゃう「ミスタートリプルクラウン」
   - https://www.dechau.com/machine/single.php?id=549
   - 導入日2021-03-08、約45.5G/50枚〜、天井なし、設定別ボーナス/出玉率。
   - reliability: ANALYSIS_SINGLE（baseGamesPer50） / ANALYSIS_HIGH（他値照合）
8. パチマガスロマガ業界コラム「『SトリプルクラウンDX-30』が検定通過!」
   - https://cs62.cs-plaza.com/g/pachi/column/detail.php?mcl_cd=0276&mwr_cd=113&tac_cd=00110785&type=1
   - 沖縄公安委員会12月14日付公示、清龍ゲームジャパン、型式SトリプルクラウンDX-30の検定通過。
   - reliability: INDUSTRY / PUBLIC_NOTICE_TRANSCRIPTION
9. 岡崎産業プレスリリース「LBトリプルクラウンセブン」
   - https://prtimes.jp/main/html/rd/p/000000006.000178173.html
   - 清龍ゲームジャパンとの提携、トリプルクラウンシリーズが長年沖縄県限定で導入されてきた旨の後年公式説明。
   - reliability: OFFICIAL_LATER_CORROBORATION
10. 札幌回胴式遊戯専門学校「6号機未実戦機種リスト」
   - https://ameblo.jp/sapporoslotschool/entry-12967102625.html
   - ミスタートリプルクラウンを2021-03-11・沖縄限定台として整理。導入日CONFLICTの補助資料。
   - reliability: RETROSPECTIVE_SINGLE

## missingFields
- 設定変更時の本機固有ハードウェア挙動（成立ボーナス等）の直接資料。
- 純電源OFF→ON時の本機固有内部状態契約。
- 本機固有ガックン条件/発生率・初期出目等の変更判別契約。
- 設定変更専用の定量恩恵/不利要素（公開なし）。
- baseGamesPer50の約45.5Gを独立別系統で照合する資料。

## conflicts
- releaseDate: HAZUSE・でちゃう等は2021-03-08。後年の回顧リストは2021-03-11。地域限定流通による導入日の地域差/実稼働差の可能性を残し、本DBcanonicalは複数機種DBが一致する2021-03-08。
- manufacturer表記: 一部業界記事に「清瀧ゲームジャパン」があるが、法人名・公式後年資料・複数機種DBは「清龍ゲームジャパン」。canonicalは清龍ゲームジャパン。

## notes
- 沖縄地域流通の30Φノーマル機。全国カレンダーで漏れやすいため、全機種方針上は独立レコードとして収録。
- 2021-03-08全国カレンダーの主要5機とは別に、地域流通機として境界監査から回収した。
- resetBehaviorは、天井/周期/AT/CZが存在しない項目を `NOT_APPLICABLE` とし、設定変更・純電断・ガックン等の本機固有契約だけを十分な再探索後に `UNVERIFIED_AFTER_RESEARCH` とした。一般的なノーマル機挙動を推測転記していない。
