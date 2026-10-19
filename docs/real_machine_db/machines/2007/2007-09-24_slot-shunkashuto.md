# スロット春夏秋冬

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: スロット春夏秋冬
manufacturer: 西陣 / ソフィア
releaseDate: 2007-09-24
generation: 5号機初期
systemType: ボーナス + 固定G数RT

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.41% |
| 2 | 98.64% |
| 3 | 100.93% |
| 4 | 102.90% |
| 5 | 105.54% |
| 6 | 106.91% |

K-Navi、P-WORLD、5号機クロニクル（丸め値）で整合。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/381.02 | 1/630.15 | 1/237.45 |
| 2 | 1/360.09 | 1/618.26 | 1/227.56 |
| 3 | 1/344.93 | 1/606.81 | 1/219.92 |
| 4 | 1/327.68 | 1/585.14 | 1/210.05 |
| 5 | 1/315.08 | 1/574.88 | 1/203.53 |
| 6 | 1/300.62 | 1/555.39 | 1/195.05 |

※BIG欄は赤7/そよか/祭の3種BIGを合算した公開値。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED

`スロット春夏秋冬 / 春夏秋冬AR1 / 西陣 / ソフィア` と `50枚 / 1000円 / ベース / コイン持ち / 通常時` を組み替え、K-Navi、P-WORLD、旧攻略DB、検索保存資料まで再探索したが、今回の取得範囲では比較可能な通常時50枚ベースを確定できず。

## netIncrease

RT: 約+0.7枚/G。

- 赤7 BIG後: 100G RT
- そよかBIG後: 50G RT
- 祭BIG後: 50G RT

グリーンべると当時記事では赤7後100G、他2種BIG後50G、RT純増約+0.7枚/Gと記載。

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout

資料間で「ボーナス単体」と「BB+RT込み」の表記が混在するため分離。

- グリーンべると当時記事: 赤7BIG 純増平均約324枚、そよかBIG/祭BIG 純増平均約270枚。
- P-WORLD: 赤7 `BB+RT100G` 約394枚、そよか `BB+RT50G` 約305枚、祭BIG 約270枚、REG 約70枚。

P-WORLDの赤7/そよかはRT込み表記であり、ボーナス単体獲得枚数と混同しない。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData

### RT構造

- 赤7 BIG終了後: 100G固定RT
- そよかBIG終了後: 50G固定RT
- 祭BIG終了後: 50G固定RT
- RT純増: 約+0.7枚/G
- ボーナス同時抽選対象: リプレイ / スイカ / チェリー（当時業界記事）

## resetBehavior

resetBehaviorQA: PARTIAL

`スロット春夏秋冬 / 春夏秋冬AR1 / 西陣 / ソフィア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / 残りゲーム / ガックン / 変更判別 / 天井` を組み替え、業界記事、K-Navi、P-WORLD、旧DB、回顧資料を再探索。

### settingChangeBehavior

- 設定変更時の100G/50G RT残G・内部RT状態の具体的処理: UNVERIFIED。
- 設定変更専用の短縮天井・専用モード・公開恩恵: NONE_CONFIRMED。

### carryOverBehavior

- 据え置き時のRT残G/内部RT状態の引継ぎ: UNVERIFIED。
- 通常時ゲーム数天井の引継ぎ: NOT_APPLICABLE / NONE_CONFIRMED。

### powerCycleBehavior

- 電源OFF→ONのみの場合のRT残G/内部状態処理: UNVERIFIED。
- 設定変更時挙動から電断挙動を推定しない。

### gameCounterReset

- 通常時ゲーム数天井: NONE_CONFIRMED。
- 100G/50Gはボーナス後RTの固定継続G数であり、通常時ハマリ天井ではない。

### ceilingAfterReset

- 通常時天井: NONE_CONFIRMED。
- リセット時短縮天井: NONE_CONFIRMED。

### modeAfterReset

- 朝一専用モード / 設定変更時モード振り分け: NONE_CONFIRMED。

### stateAfterReset

- 設定変更/据え置き/電断時のRT状態処理: UNVERIFIED。

### advantageousSectionReset

- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

### resetBenefits

- 朝一/設定変更専用の公開恩恵: NONE_CONFIRMED。

### resetPenalties

- 設定変更固有の公開不利要素: NONE_CONFIRMED。

### resetDetection

- 本機固有のリールガックン、初期出目、液晶/ランプ等による設定変更判別: UNVERIFIED。

### numericResetData

- リセット後短縮天井G数: NONE_CONFIRMED / NOT_APPLICABLE
- 設定変更時専用モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-09-01

1. グリーンべると / P-WORLD業界ニュース — 『スロット春夏秋冬』、和風スロットの本領広げる（2007-08-24）
   - https://news.p-world.co.jp/articles/2347/greenbelt
   - 2007-09-24納品予定、3種類BIG、赤7後100G RT、他2BIG後50G RT、RT約+0.7枚/G、合算設定1 1/237.45〜設定6 1/195.05、ボーナス単体純増目安
   - reliability: INDUSTRY
2. K-Navi — スロット春夏秋冬 ワッショイ!そよか祭タイプ
   - https://p-kn.com/slot/643/
   - 設定別BIG/REG/合算、設定別機械割、RTゲーム数
   - reliability: ANALYSIS_HIGH
3. P-WORLD — 春夏秋冬
   - https://www.p-world.co.jp/machine/database/4889
   - 型式名 `スロット春夏秋冬AR1`、設定別BIG/REG/合算/出玉率、BB+RT込み獲得目安
   - reliability: ANALYSIS_HIGH
4. 5号機クロニクル — 西陣5号機全機種一覧
   - https://5goki.com/nishijin
   - 2007/9導入、機械割96.4〜106.9%（K-Navi/P-WORLDの丸め値と一致）
   - reliability: ANALYSIS_SINGLE
5. Pマンズ保存記事 — 遊技機検定情報（2007-07-30東京都公安委員会告示第266号）
   - https://p-mans.blogspot.com/2007/
   - 型式 `スロット春夏秋冬AR1`、申請主体ソフィアの同定補助
   - reliability: INDUSTRY_ARCHIVE

## missingFields

- 50枚あたりゲーム数 / 1000円ベース
- 設定変更時のRT残G・内部RT状態処理
- 据え置き時のRT残G・内部RT状態引継ぎ
- 電源OFF→ON時のRT状態処理
- 本機固有の設定変更判別（ガックン等）

## conflicts

- ボーナス獲得枚数は、グリーンべるとがボーナス単体の平均純増として赤7約324枚・他2BIG約270枚を記載する一方、P-WORLDは赤7約394枚/そよか約305枚を `BB+RT` 込みで掲載。算定範囲が異なるため数値を平均せず、定義差として分離保存。
