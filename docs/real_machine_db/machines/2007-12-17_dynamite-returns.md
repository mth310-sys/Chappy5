# ダイナマイトリターンズ

machineName: ダイナマイトリターンズ
manufacturer: IGTジャパン
releaseDate: 2007-12-17
generation: 5号機
systemType: ノーマル / ボーナス主体 / 高技術介入
coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL

## identification

- 2007-11-09付グリーンべるとで、IGTジャパンが2007-11-05に発表し、納品は2007-12-16から開始予定と確認。
- 2007-11-06付K-Navi内覧会記事でホール導入予定日を2007-12-17と確認。本DBはホール導入基準で `2007-12-17` を採用し、納品開始12/16を併記する。
- P-WORLDは設定構成を `1 / 3 / 5 / F` の4段階と記載。
- 5号機クロニクルは最高設定を表中で「6」と記載するが、他資料は「F」。最高設定ラベルは `CONFLICT_SETTING_LABEL` として補正しない。

## payoutRateBySetting

### パチマガスロマガ シミュレート値（通常時・ボーナス中ともMAX獲得手順）

| 設定 | PAYOUT |
|---|---:|
| 1 | 99.78% |
| 3 | 102.75% |
| 5 | 106.72% |
| F | 109.70% |

信頼度: `ANALYSIS_HIGH`。

### 後年回顧資料の技術介入レンジ

| 設定 | 出玉率レンジ |
|---|---:|
| 1 | 94.8〜99.5% |
| 3 | 97.6〜103.1% |
| 5 | 101.3〜107.2% |
| F | 104.1〜110.0% |

通常時/ボーナス中の目押し精度差を反映したレンジとして掲載されている。パチマガのMAX獲得シミュレート値と定義が完全一致しないため平均せず併記する。

### 5号機クロニクル

`99.0 / 101.8 / 105.6 / 108.5%`。最高設定ラベルは表中「6」。パチマガMAX獲得値とも差があるため `CONFLICT_PAYOUT_DEFINITION` として保持する。

## initialHitBySetting

パチマガスロマガ掲載値。5号機クロニクルでも丸め値が一致。

| 設定 | 赤7BIG | 白7BIG | BIG合成 | REG | ボーナス合成 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/595.78 | 1/642.51 | 1/309.13 | 1/512.00 | 1/192.75 |
| 3 | 1/574.88 | 1/618.26 | 1/297.89 | 1/468.11 | 1/182.04 |
| 5 | 1/555.39 | 1/595.78 | 1/287.44 | 1/399.61 | 1/167.18 |
| F | 1/537.18 | 1/574.88 | 1/277.69 | 1/364.09 | 1/157.54 |

信頼度: `ANALYSIS_HIGH`。

## baseGamesPer50

パチマガスロマガ掲載の1000円あたりゲーム数。通常時ダイナマイト役の取得枚数で変動するため両条件を保持する。

| 設定 | ダイナマイト5枚取得 | ダイナマイト10枚取得 |
|---|---:|---:|
| 1 | 36.69G | 37.77G |
| 3 | 37.43G | 38.56G |
| 5 | 38.42G | 39.61G |
| F | 39.01G | 40.23G |

技術介入機のため、単一ベースへ平均せず取得条件付きで保存する。

信頼度: `ANALYSIS_HIGH`。

## netIncrease

`NOT_APPLICABLE`。

グリーンべるとは「リプレイタイムなどを搭載しないノーマルタイプ」と明記。RT/ART/AT純増は物差し対象外。

## basicPayout

- BIG: 規定345枚超払い出し終了。完全技術介入時の最大獲得 `336枚`。
- REG: 規定119枚超払い出し終了。技術介入時の最大獲得 `121枚`。
- グリーンべると、K-Navi、パチマガスロマガで技術介入による最大獲得を照合。

信頼度: `INDUSTRY` / `ANALYSIS_HIGH`。

## modeSpecificMinimumData

- 通常時4ライン、ボーナス中5ライン。
- BB2種類 + RBの3ボーナス。
- RT/ART/ATなし。
- BIG/REG中の目押し精度により獲得枚数および実質出玉率が変動する技術介入機。
- 実機完全再現用の小役別同時当選率・停止形詳細は収録対象外。

## resetBehavior

### settingChangeBehavior

`UNVERIFIED_AFTER_RESEARCH`。

`ダイナマイトリターンズ / IGT / 設定変更 / リセット / 朝一 / 据え置き / ガックン / 初期出目 / RAM` を組み替え、当時業界記事、K-Navi、P-WORLD、パチマガスロマガ、5号機DB、回顧資料まで再探索したが、本機固有の設定変更時挙動を直接説明する資料を確定できなかった。

ノーマルタイプで通常時のRT/ART/AT・天井・公開モード管理は確認されないが、設定変更時のリール初期挙動等を推測しない。

### carryOverBehavior

- 通常時ゲーム数天井: `NONE_CONFIRMED`。
- RT/ART/AT残状態: `NOT_APPLICABLE`。
- 据え置き時に客側の朝一判断へ影響する本機固有の内部カウンタ/状態: `NONE_CONFIRMED`。
- 本機固有の据え置き判別挙動: `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

`UNVERIFIED_AFTER_RESEARCH`。

電源OFF→ONのみの場合の初期出目・ランプ・設定変更との判別差を直接説明する本機固有資料を確認できなかった。天井/RT/ART状態は非該当。

### gameCounterReset

通常時ゲーム数天井・周期CZなどの公開ゲーム数管理: `NONE_CONFIRMED`。

したがってホール経営シミュレーション上、朝一の天井残G狙いを生む公開カウンタは確認されない。

### ceilingAfterReset

- 通常時天井: `NONE_CONFIRMED`。
- 設定変更時短縮天井 / 朝一専用天井: `NONE_CONFIRMED`。

### modeAfterReset

通常時モード管理、朝一専用モード、設定変更専用モード振り分け: `NONE_CONFIRMED`。

### stateAfterReset

RT/ART/AT/CZ等の持続内部状態: `NOT_APPLICABLE / NONE_CONFIRMED`。

設定変更時のみの高確等、朝一客行動に影響する公開状態再抽選は確認されない。

### advantageousSectionReset

`NOT_APPLICABLE`（2007年5号機、有利区間制度前）。

### resetBenefits

設定変更時のみの天井短縮、朝一RT/ART、優遇モード等: `NONE_CONFIRMED`。

### resetPenalties

設定変更時のみの主要な不利要素: `NONE_CONFIRMED`。

### resetDetection

ガックン、初期出目、ランプ、ゲーム数挙動など本機固有の設定変更/据え置き判別法: `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData

設定変更時のみ適用される比較可能な朝一当選率、モード振り分け、短縮天井G数、恩恵発生率: `NONE_CONFIRMED`。

## sources

取得日: 2026-09-01

1. グリーンべると — IGT新機種はコアユーザーをターゲット
   - https://web-greenbelt.jp/00004424/
   - 2007-11-09掲載。納品2007-12-16開始予定、ノーマルタイプ、BB2種+RB、RT非搭載、BIG最大336枚、RB最大121枚。
   - reliability: INDUSTRY
2. K-Navi — 『ダイナマイトリターンズ』新機種発表内覧会
   - https://p-kn.com/topics/exhibition/206/
   - 2007-11-06掲載。ホール導入予定2007-12-17。
   - reliability: INDUSTRY
3. P-WORLD — ダイナマイトリターンズ
   - https://www.p-world.co.jp/machine/database/4985
   - BIG345枚超/RB119枚超払い出し終了、合成1/192.75〜1/157.54、設定1/3/5/F。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — ボーナス確率・PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/49/h.php
   - 設定別赤7BIG/白7BIG/BIG合成/REG/合成、MAX獲得手順シミュレートPAYOUT。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 小役確率・1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/49/c.php
   - ダイナマイト5枚/10枚取得条件別の設定別1000円ゲーム数。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/49/a.php
   - ノーマル/同時成立、BIG約336枚、REG約121枚。
   - reliability: ANALYSIS_HIGH
7. K-Navi — ボーナス中の打ち方
   - https://p-kn.com/slot/733/4421/
   - BIG最大336枚、REG技術介入手順。
   - reliability: ANALYSIS_HIGH
8. 5号機クロニクル — IGTジャパン5号機全機種一覧
   - https://5goki.com/igt
   - 丸めボーナス確率と機械割。最高設定を「6」と表記するためラベル競合を保持。
   - reliability: ANALYSIS_SINGLE
9. pachinko’s blog — IGT Japan「ダイナマイトリターンズ」の筺体＆スペック＆情報
   - https://pachinko.hatenablog.jp/entry/2007/12/dynamite-returns
   - 技術介入差を含む出玉率レンジ、設定別確率。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 正式型式名 / 検定型式
- 設定変更時の本機固有初期挙動
- 電源OFF→ONのみの場合の初期出目/ランプ挙動
- ガックン等の設定変更判別法

## conflicts

- `CONFLICT_PAYOUT_DEFINITION`: パチマガMAX獲得シミュレート `99.78 / 102.75 / 106.72 / 109.70%`、5号機クロニクル `99.0 / 101.8 / 105.6 / 108.5%`、回顧資料の技術介入レンジ `94.8〜99.5 / 97.6〜103.1 / 101.3〜107.2 / 104.1〜110.0%`。定義・攻略精度差を平均せず保持。
- `CONFLICT_SETTING_LABEL`: P-WORLD、パチマガ、当時回顧は最高設定 `F`、5号機クロニクルの機械割表は最高設定を `6` と表記。数値を勝手に移し替えない。
