# コクッチーマスターズ

machineName: コクッチーマスターズ
manufacturer: タイヨー
releaseDate: 2015-03-16
releaseDatePrecision: exact_hall_start
releaseDateNote: K-Navi機種ページと2015-02-03プレス発表会記事が2015-03-16ホール導入予定で一致。PiDEAは3月中旬〜4月中旬納品予定と幅を持たせているが、具体日資料をcanonicalとする。
generation: 5号機
systemType: ノーマル / 完全告知
modelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS

## identity

- メーカー: **タイヨー**。
- 導入開始: **2015-03-16**。
- P-WORLDは5号機・ノーマルタイプ・完全告知として掲載。
- 型式名/検定番号は、機種名・メーカー名・検定・型式・4S系検索、P-WORLD、K-Navi、業界記事、旧DBを横断したが今回安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 95.3% |
| 2 | 96.6% |
| 3 | 99.6% |
| 4 | 103.8% |
| 5 | 107.5% |
| 6 | 109.4% |

- K-Navi、すろぱちくえすと、pacnkで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/291.3 | 1/434.0 | 1/174.3 |
| 2 | 1/283.7 | 1/417.4 | 1/168.9 |
| 3 | 1/271.9 | 1/366.1 | 1/156.0 |
| 4 | 1/257.0 | 1/339.6 | 1/146.3 |
| 5 | 1/243.6 | 1/299.3 | 1/134.3 |
| 6 | 1/236.6 | 1/288.7 | 1/130.0 |

- K-Navi、すろぱちくえすと、pacnk、2-9伝説で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

パチマガスロマガ理論値:

| 設定 | 50枚あたりG数 |
|---:|---:|
| 1 | 34.98G |
| 2 | 34.98G |
| 3 | 34.99G |
| 4 | 35.72G |
| 5 | 35.74G |
| 6 | 35.89G |

- 設定別理論値として保存。市場実戦値と混同しない。
- confidence: ANALYSIS_SINGLE_HIGH_DETAIL

## netIncrease

- `NOT_APPLICABLE_NORMAL_TYPE`。

## basicPayout

- BIG: **最大312枚**。
- REG: **最大104枚**。
- P-WORLD、K-Navi、PiDEA、パチマガスロマガで一致。
- K-NaviはBIG345枚超払い出し終了、REG105枚超払い出し終了と掲載。純増枚数と払い出し終了条件を分離して保持。

## modeSpecificMinimumData

- 天井: **非搭載**。
- AT/ART/CZ: **非搭載**。
- 規定ゲーム数モード: **非該当**。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 本機は天井・AT/ART/CZ・規定G数モードを持たないノーマルタイプのため、これらの設定変更処理は `NOT_APPLICABLE`。
- 設定変更時の本機固有リール初期挙動、出目、告知ランプ初期化仕様については、検索語・資料系統を変えた再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 天井・モード・AT/ART状態の引き継ぎは `NOT_APPLICABLE`。
- ノーマル機としてのリール/表示/ランプ等の朝一挙動について、本機固有の据え置き契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 設定変更なしの純電源OFF→ONについて、本機固有のリール/告知ランプ/出目復帰挙動を直接記した資料は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 他タイヨー機・コクッチーブラックの挙動は転記しない。

### gameCounterReset

- `NOT_APPLICABLE_NO_CEILING_OR_GAME_NUMBER_MODE`。

### ceilingAfterReset

- `NOT_APPLICABLE_NO_CEILING`。

### modeAfterReset

- `NOT_APPLICABLE_NO_GAME_NUMBER_MODE`。

### stateAfterReset

- `NOT_APPLICABLE_NO_AT_ART_CZ_INTERNAL_STATE_FOR_MORNING_MODEL`。
- ボーナス成立状態など実機完全再現用の内部フラグ詳細は本DB対象外。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 朝一短縮天井、専用モード、CZ/AT優遇等は構造上非該当。
- 本機固有の設定変更専用ボーナス優遇や朝一恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties

- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- `コクッチーマスターズ / コクッチマスターズ / タイヨー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 変更判別 / 出目` を組み替え、P-WORLD、K-Navi、当時解析、旧ブログ、後年回顧、アプリ資料まで再探索したが、本機固有のガックンや表示による設定変更判別契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

- 比較可能な設定変更専用数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts

- 導入時期は、PiDEAの「3月中旬〜4月中旬納品予定」という幅のある予定と、K-Navi/プレス発表会の「3月16日ホール導入予定」が併存する。定義上は競合ではなく、canonicalは具体日資料の2015-03-16。

## missingFields

- modelName: `UNVERIFIED_AFTER_RESEARCH`
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior exact reel/display contract: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior exact reel/display contract: `UNVERIFIED_AFTER_RESEARCH`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`

## sources

取得日: 2026-09-07

1. K-Navi「コクッチーマスターズ」— https://p-kn.com/slot/2220/
   - 2015-03-16導入、設定別BIG/REG/合算、機械割、BIG312枚/REG104枚、ノーマル完全告知。
2. K-Navi「パチスロ新機種『コクッチーマスターズ』プレス発表会」— https://p-kn.com/topics/exhibition/1326/
   - 2015-02-03発表会、ホール導入2015-03-16予定、ノーマル完全告知、BIG312枚/REG104枚。
3. PiDEA「タイヨー『コクッチー』は告知ランプ8種類」— https://www.pidea.jp/articles/%E3%82%BF%E3%82%A4%E3%83%A8%E3%83%BC%E3%80%8C%E3%82%B3%E3%82%AF%E3%83%83%E3%83%81%E3%83%BC%E3%80%8D%E3%81%AF%E5%91%8A%E7%9F%A5%E3%83%A9%E3%83%B3%E3%83%978%E7%A8%AE%E9%A1%9E
   - 2015-02-02記事。ノーマルタイプ、BIG312枚/REG104枚、納品3月中旬〜4月中旬予定。
4. P-WORLD「コクッチーマスターズ」— https://www.p-world.co.jp/machine/database/7654
   - タイヨー、5号機ノーマル完全告知、BIG最大312枚、REG最大104枚、AT/ART非搭載。
5. パチマガスロマガ「コクッチーマスターズ」— https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/82/a.php
   - BIG/REG純増と規定払い出し枚数。
6. パチマガスロマガ「小役確率」— https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/82/c.php
   - 設定別50枚あたり理論ゲーム数34.98〜35.89G。
7. 2-9伝説「コクッチーマスターズ スペック解析・設定差」— https://2-9densetsu.com/kokucchi-masters/
   - 天井なし、BIG/REG確率、設定1機械割95.3%、払い出し終了条件。
8. すろぱちくえすと「コクッチーマスターズ スペック・設定判別・設定差・打ち方」— https://www.slopachi-quest.com/article/kokutti/
   - 2015-03-16導入、設定別BIG/REG/合算/機械割、天井・ゾーンなし、312/104枚。
9. pacnk「コクッチーマスターズ 設定判別ツール」— https://pacnk.com/slot/tools/sh_kokucchi.html
   - 設定別BIG/REG/機械割のクロスチェック。
