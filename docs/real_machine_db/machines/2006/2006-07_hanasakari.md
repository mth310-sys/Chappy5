# 花盛

machineName: 花盛
manufacturer: SNKプレイモア
releaseDate: 2006-07
generation: 5号機初期
systemType: ボーナス+RT / 2種BIG + チャレンジボーナス
coreStatus: PARTIAL
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED
qaResetBehaviorUpdatedAt: 2026-09-10

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.7% |
| 2 | 97.5% |
| 3 | 99.2% |
| 4 | 101.0% |
| 5 | 102.7% |
| 6 | 104.4% |

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

| 設定 | BIG① | BIG② | REG/CB | 合成 |
|---|---:|---:|---:|---:|
| 1 | 1/799.2 | 1/799.2 | 1/595.8 | 1/239.2 |
| 2 | 1/753.3 | 1/753.3 | 1/565.0 | 1/226.0 |
| 3 | 1/712.4 | 1/712.4 | 1/537.2 | 1/214.2 |
| 4 | 1/675.6 | 1/675.6 | 1/512.0 | 1/203.5 |
| 5 | 1/642.5 | 1/642.5 | 1/489.1 | 1/193.9 |
| 6 | 1/612.5 | 1/612.5 | 1/468.1 | 1/185.1 |

信頼度: ANALYSIS_SINGLE

## baseGamesPer50

UNVERIFIED_AFTER_RESEARCH

## netIncrease

- RT「さくらタイム」搭載。
- BIG終了後に50GのRTへ突入。
- 通常時にも15枚図柄「小判・小判・スイカ」入賞（当時業界記事では1/496.5）からRTへ突入。
- RT純増/Gは公開資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。

## basicPayout

- BIG: 規定345枚を超える払い出しで終了、純増約275枚（パチマガスロマガ）。
- CB: 規定119枚を超える払い出しで終了、純増約100枚（パチマガスロマガ）。
- 当時グリーンべると記事ではCBの技術介入による実獲得96～107枚と説明。定義差として併記する。

## modeSpecificMinimumData

- 2種類のBIG図柄系統とチャレンジボーナスを持つボーナス+RT機として整理。
- BIG終了後は50G RT「さくらタイム」。通常時の15枚役「小判・小判・スイカ」入賞からもさくらタイムへ突入。
- CBは技術介入により獲得枚数に差が生じる。
- 5号機クロニクル、SNKプレイモア機種年表系資料、当時業界記事で2006年7月導入/7月下旬納品予定を確認。

## resetBehavior

resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED

### settingChangeBehavior
- `花盛 / SNKプレイモア / エスエヌケイPK` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / RT / さくらタイム` を組み替え、当時グリーンべると/P-WORLD業界記事、パチマガスロマガ現存攻略ページ、5号機クロニクル、旧機種年表、実機販売資料、検索残存資料・回顧資料を再探索。
- 設定変更時の本機固有のボーナス成立状態、RT「さくらタイム」残G、内部状態処理を直接説明する資料は確認できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時のRT残G・ボーナス成立状態を独立条件で示す本機固有資料は確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常時ゲーム数天井やゲーム数モードの存在は確認できず、天井G数/モード引継ぎは `NONE_CONFIRMED_AFTER_RESEARCH`。

### powerCycleBehavior
- 電源OFF→ONのみの場合のRT残G、ボーナス成立状態、表示/出目挙動を示す本機固有資料は確認できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 通常時ゲーム数天井の本機固有公開値は確認できず、天井カウンタは `NONE_CONFIRMED_AFTER_RESEARCH`。
- RTは50G固定契約が確認できるが、設定変更/据え置き/純電断による残G処理は直接資料不足のため推定しない。

### ceilingAfterReset
- 設定変更時の短縮天井・朝一天井は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 朝一専用モード、ゲーム数モード、設定変更専用モードは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 本機はRT「さくらタイム」を搭載することを当時業界記事で確認。
- 設定変更/据え置き/純電断時のRT残G・RT状態処理は、資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用高確等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

### resetBenefits
- 朝一/設定変更時の天井短縮、専用モード、確定ボーナス、高確移行等の主要恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のリールガックン、出目、ランプ/表示等による設定変更・据え置き判別は、検索語・資料系統変更後も `UNVERIFIED_AFTER_RESEARCH`。
- SNKプレイモア他機種の朝一挙動は花盛へ流用しない。

### numericResetData
- 設定変更時モード振り分け、朝一特定G以内当選率、短縮天井G数、リセット恩恵発生率などの公開朝一数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

## morningRelatedPublicNumbers
- `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources

取得日: 2026-09-10

1. P-WORLD業界ニュース / グリーンべると — SNKプレイモアから5号機第3弾『花盛』
   - https://news.p-world.co.jp/articles/1751/greenbelt
   - 2006-06-23掲載。型式`エスエヌケイPK`、BIG/CB構成、BIG後50G RT「さくらタイム」、通常時15枚役（1/496.5）からもRT、CB実獲得96～107枚、7月下旬納品予定。
   - reliability: `INDUSTRY`
2. パチマガスロマガ — 花盛 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/05/a.php
   - 5号機/5ライン/3枚掛け専用、BIG後・15枚役後RT、BIG規定345枚（純増約275枚）、CB規定119枚（純増約100枚）。
   - reliability: `ANALYSIS_HIGH`
3. パチマガスロマガ — 花盛 打ち方
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/05/d.php
   - 通常時打ち方、BIG2系統/CB成立の確認補助。
   - reliability: `ANALYSIS_HIGH`
4. 5号機クロニクル — SNKプレイモア全機種一覧
   - https://5goki.com/snkplaymore
   - 導入時期2006/7、設定別2種BIG・REG/CB・合成、機械割。
   - reliability: `ANALYSIS_SINGLE`
5. Home-Slot — SNKプレイモア 花盛 中古実機説明
   - https://home-slot.net/SHOP/s-snk10.html
   - 2種類のBIGと技術介入要素を盛り込んだチャレンジボーナスの構成説明。
   - reliability: `ANALYSIS_SINGLE`
6. SNKプレイモア機種年表系資料
   - https://wikippe.e-do-match.com/index.php/SNK%E3%83%97%E3%83%AC%E3%82%A4%E3%83%A2%E3%82%A2
   - 花盛 2006年7月。
   - reliability: `RETROSPECTIVE_SUPPORT`

## missingFields

- 50枚あたりゲーム数
- RT「さくらタイム」の純増/G
- 設定変更時の本機固有ボーナス成立状態・RT残G処理
- 据え置き時/電源OFF→ON時のRT残G・本機固有挙動
- 本機固有のガックン/設定変更判別
- 設定変更時の公開朝一数値

## conflicts

- 5号機クロニクルの表見出しは「BIG / BIG / REG」となっている一方、当時業界記事・パチマガスロマガ・実機販売資料では第3ボーナスを「チャレンジボーナス」と説明。本DBでは数値表を原文どおり保持しつつ、方式欄ではCB表記を併記する。
- CBの「約100枚」（パチマガスロマガ）は規定119枚超払い出し時の純増目安、「96～107枚」（グリーンべると）は技術介入による実獲得差として定義を分離し、数値競合として平均化しない。

## qaNotes

- 既存性能コア `PARTIAL` は変更していない。
- 2026-09-10 QAで当時業界一次系資料を追加し、既存で「詳細RT等は確認できず」としていた点を修正。BIG後50G RT「さくらタイム」、通常時15枚役からのRT、BIG/CB基本獲得性能を性能コアへ補完した。
- resetBehaviorは十分な再探索後も設定変更/据え置き/純電断のRT残G等を直接固定できなかったため、性能側とは別に `PARTIAL_RESEARCH_EXHAUSTED` とした。
- リセット情報欠損を「影響なし」と推定せず、本機固有資料で確認できた範囲だけ `NONE_CONFIRMED_AFTER_RESEARCH / UNVERIFIED_AFTER_RESEARCH` を分離して記録した。
- 次の追加順QAカーソルはGit履歴で花盛直後のcommit `959ef416...` を確認し、`2006-07_dengeki-franken.md`（電撃フランケン）とする。
