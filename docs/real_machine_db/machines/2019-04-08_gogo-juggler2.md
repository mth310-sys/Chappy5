# No.1276 ゴーゴージャグラー2

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: ゴーゴージャグラー2
- manufacturer: 北電子
- releaseDateCanonical: 2019-04-08
- generation: 5.9号機
- systemType: ノーマルAタイプ / 完全告知
- formalModelNameCanonical: `ゴーゴージャグラー2／KD`
- certificationNumber: `7S1147`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting / initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 | 機械割 |
|---:|---:|---:|---:|---:|
| 1 | 1/269.7 | 1/364.1 | 1/154.9 | 97.0% |
| 2 | 1/268.6 | 1/336.1 | 1/149.3 | 98.2% |
| 3 | 1/266.4 | 1/318.1 | 1/145.0 | 99.2% |
| 4 | 1/260.1 | 1/283.7 | 1/135.7 | 101.6% |
| 5 | 1/255.0 | 1/255.0 | 1/127.5 | 103.8% |
| 6 | 1/242.7 | 1/242.7 | 1/121.4 | 106.5% |

- K-Navi、HAZUSE、NANA PRESS、当時解析で設定別BIG/REG/合算/機械割が一致。
- 機械割はメーカー発表値として扱う資料を優先。

### baseGamesPer50
設定別の解析値:

| 設定 | 50枚あたり |
|---:|---:|
| 1 | 33.27G |
| 2 | 33.47G |
| 3 | 33.67G |
| 4 | 33.87G |
| 5 | 34.07G |
| 6 | 34.27G |

- 別の当時概要資料には約34.5G/50枚表記があるため、定義/丸め差としてqualityNotesに保持する。

### netIncrease / basicPayout
- BIG: **約312枚**（345枚超の払い出しで終了）。
- REG: **約104枚**（105枚超の払い出しで終了）。
- RT/ART/ATは非搭載。出玉増加はリアルボーナスのみ。

## modeSpecificMinimumData
- 通常ゲーム数天井: **非搭載**。
- 規定Gゾーン、CZ、AT/ARTモード: `NOT_APPLICABLE`。
- ボーナスは単独またはチェリー同時当選を中心とするノーマルAタイプ。

## resetBehavior
### settingChangeBehavior
- 本機固有資料で、**設定変更後でも朝一1G目のリールガックンは発生しない**とされる。
- 天井/規定G/ATモードを持たないため、それらの設定変更リセットは `NOT_APPLICABLE`。
- 設定変更時の成立済みボーナスフラグ等、特殊な電断境界状態の直接契約は資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 天井ゲーム数・モード・CZ状態など、据え置きで客が狙える蓄積要素は `NOT_APPLICABLE`。
- 成立済みボーナス等の特殊境界状態について据え置き固有の直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ON時に引き継ぎ対象となる天井/モード/有利区間は本機の通常ゲームフロー上 `NOT_APPLICABLE`。
- ボーナス成立中など特殊状態での電源OFF→ON契約は、機種名/型式/北電子/設定変更/据え置き/電源OFF ON/朝一を変えて再探索しても本機固有資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常ゲーム数天井非搭載のため `NOT_APPLICABLE`。

### ceilingAfterReset
- 天井非搭載。リセット短縮天井なし。`NOT_APPLICABLE`。

### modeAfterReset
- AT/ART型の通常モード・朝一専用モードは `NOT_APPLICABLE`。
- 設定変更専用のボーナス当選優遇モードは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 高確/低確等で初当たりを管理する機種ではないため、通常時の内部状態再抽選は `NOT_APPLICABLE`。
- 成立済みボーナス等の特殊境界状態のみ `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 5.9号機ノーマルAタイプで、本DBの朝一出玉管理に用いる有利区間項目は `NOT_APPLICABLE`。

### resetBenefits
- 設定変更後のみ当たりやすくなる、天井短縮、朝一専用高確などの出玉恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更専用の出玉上の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- **リールガックン判別不可**。本機固有解析では設定変更後もガックンしない。
- 天井/有利区間ランプ/朝一モードによる変更判別は `NOT_APPLICABLE`。
- 通常のボーナス履歴・小役/REG確率からの設定推測は可能だが、これは設定変更そのものの確定判別ではないためresetDetectionの数値には含めない。

### numericResetData
- 設定変更時の朝一専用モード振り分け、当選率、短縮天井、リセット恩恵発生率: `PUBLIC_NUMERIC_VALUE_NOT_FOUND / NOT_APPLICABLE`。
- ガックン発生率: 本機は「設定変更後もガックンしない」とする解析を採用し、変更判別用途では実質0扱い。ただしメーカー公表率ではないため数値フィールドには確率値を作成しない。

## releaseDate / formalModel
- HAZUSEで型式 `ゴーゴージャグラー2／KD`、検定番号 `7S1147`、導入開始日2019-04-08、メーカー北電子を確認。
- K-Naviもホール導入開始2019-04-08。
- 2019-02-06の業界記事では北電子が本機とマイフラワー30を同時発表し、双方4/7納品予定と報道。ホール稼働日4/8と整合する。

## boundaryAudit
- LATEST_HANDOFF指定の2019-04-08群をOPENし、第一候補ゴーゴージャグラー2をNo.1276として登録。
- K-Navi/2019年導入一覧/当時記事で同日群に `マイフラワー-30`、`ワンダフルジャック` が存在することを確認。
- 義風堂々は既存No.1273で4/1 vs 4/8の導入日CONFLICTを保持済みのため重複登録しない。
- 4/8群は未処理機が残るため `OPEN` 継続。

## missingFields
- 設定変更/据え置き/純電断における、成立済みボーナス等の特殊境界状態の直接契約。
- メーカー公表としてのガックン発生率（解析上は設定変更後もガックンしない）。
- 設定変更専用の公開数値は該当なし/未確認。

## conflicts / qualityNotes
- 世代表記について、一部後年DBに「6号機」とする誤記があるが、HAZUSEおよび複数当時資料は5号機/5.9号機で一致するためcanonicalは5.9号機。
- ベースは設定別33.27〜34.27G/50枚の解析値に対し、当時概要に約34.5G/50枚表記もある。平均化せず設定別値をcanonical、34.5Gを定義/丸め差注記として保持。
- BIG設定2は資料により1/268.5と1/268.6の丸め差がある。複数高信頼資料一致の1/268.6をcanonical。

## sources
取得日: 2026-09-11
1. HAZUSE — https://hazuse.com/machine/pachislot/7S1147/genre/204/ — 型式、検定番号、導入日、メーカー、5号機ノーマル、出玉率端点 — reliability: `MACHINE_DB_HIGH`
2. K-Navi — https://p-kn.com/slot/3189/ — 導入日、設定別BIG/REG/合算/機械割、ノーマル/完全告知 — reliability: `MACHINE_DB_HIGH`
3. NANA PRESS — https://nana-press.com/kaiseki/machine/19/300/ — 設定別BIG/REG/合算/機械割照合 — reliability: `ANALYSIS_HIGH_CROSSCHECK`
4. PiDEA X — https://www.pidea.jp/articles/%E3%80%8C%E3%82%B4%E3%83%BC%E3%82%B8%E3%83%A3%E3%82%B02%E3%80%8D%EF%BC%86%E5%88%9D6%E5%8F%B7%E6%A9%9F%E3%80%8C%E3%83%9E%E3%82%A4%E3%83%95%E3%83%A9%E3%83%AF%E3%83%BC30%E3%80%8D%E7%99%BA%E5%A3%B2%EF%BC%8F%E5%8C%97%E9%9B%BB%E5%AD%90 — 2019-02-06当時記事、北電子発表、4/7納品予定、マイフラワー30同時期確認 — reliability: `INDUSTRY_CONTEMPORARY`
5. ちょんぼりすた — https://chonborista.com/slot/kitadenshi/78290/ — 2019-04-08、5.9号機ノーマル、312/104枚、天井なし、設定別性能照合 — reliability: `ANALYSIS_HIGH`
6. 元プロMGのパチスロブログ — https://www.pachislotblog.tokyo/gogojuggler2-kaiseki/ — BIG312枚/REG104枚、天井なし、設定変更後ガックンなし — reliability: `ANALYSIS_SINGLE_RESET_SPECIFIC`
7. おスロおパチおいでやす — https://oslo-opachi.com/2019/04/08/post-5542/ — 2019-04-08当時記事、5.9号機、設定別33.27〜34.27G/50枚、スペック照合 — reliability: `ANALYSIS_CONTEMPORARY`
8. すろぱちくえすと — https://www.slopachi-quest.com/article/2019-dounyuukishu/ — 2019-04-08群のゴーゴージャグラー2/ワンダフルジャック/マイフラワー確認 — reliability: `CHRONOLOGY_CROSSCHECK`
