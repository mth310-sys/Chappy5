# ぱちすろ おり姫は告知がお好き

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: ぱちすろ おり姫は告知がお好き
manufacturer: 銀座
releaseDate: 2007-09-16
generation: 5号機
systemType: ノーマル / ボーナス主体 / 準完全告知

## releaseDate evidence

- グリーンべると2007-08-10当時記事が「納品は9月16日からスタートする予定」と明記。
- K-Navi 2007-08-08展示発表会記事も「ホール導入日は9月16日以降が予定」とする。
- 既存キューでは9月後半まで未処理のまま残っていたため、163件地点からの9月漏れ監査で遡及差し込み。

信頼度: INDUSTRY_HIGH

## payoutRateBySetting

CONFLICT / 丸め差を含むが設定4は単純丸めでは一致しないため平均せず保持。

### パチマガスロマガ（シミュレート値）

| 設定 | PAYOUT |
|---|---:|
| 1 | 97.98% |
| 2 | 99.39% |
| 3 | 102.25% |
| 4 | 104.88% |
| 5 | 107.33% |
| 6 | 110.23% |

### pacnk 旧機種整理

| 設定 | PAYOUT |
|---|---:|
| 1 | 98.00% |
| 2 | 99.00% |
| 3 | 102.00% |
| 4 | 104.00% |
| 5 | 107.00% |
| 6 | 110.00% |

信頼度: CONFLICT

## initialHitBySetting

パチマガスロマガ解析値。

| 設定 | BIG | REG | ボーナス合成 |
|---|---:|---:|---:|
| 1 | 1/296.54 | 1/546.13 | 1/192.19 |
| 2 | 1/309.13 | 1/468.11 | 1/186.18 |
| 3 | 1/276.52 | 1/512.00 | 1/179.55 |
| 4 | 1/277.69 | 1/417.43 | 1/166.76 |
| 5 | 1/267.49 | 1/327.68 | 1/147.27 |
| 6 | 1/259.04 | 1/316.60 | 1/142.47 |

- P-WORLD、HAZUSE、グリーンべると、K-Naviのボーナス合成丸め値 `1/192.2 → 1/142.5` と整合。

信頼度: ANALYSIS_HIGH + INDUSTRY_CROSSCHECK

## baseGamesPer50

パチマガスロマガ解析値（1000円あたり）:

| 設定 | G/50枚 |
|---|---:|
| 1 | 38.37G |
| 2 | 40.01G |
| 3 | 39.58G |
| 4 | 40.76G |
| 5 | 39.58G |
| 6 | 40.76G |

信頼度: ANALYSIS_HIGH

## netIncrease

- NOT_APPLICABLE。
- HAZUSE当時解析で「RTなどの付加機能は無し」。ボーナス主体のノーマル機。

## basicPayout

- BIG: 345枚超払い出し終了 / 純増約312枚。
- REG: 105枚超払い出し終了 / 純増約104枚。
- パチマガスロマガ、HAZUSE、グリーンべるとで一致。

信頼度: INDUSTRY_HIGH + ANALYSIS_HIGH

## modeSpecificMinimumData

- 21種類の告知パターンをプレイヤー操作で選択可能。
- グリーンべると当時記事では告知モードはボーナス当選時または遊技待機状態入りでリセットされる。
- これは演出選択状態のリセットであり、設定変更時の内部状態・朝一リセット挙動とは区別する。
- RT/CZ/ART/AT、ゲーム数モード、天井は確認されない。

## resetBehavior

resetBehaviorQA: PARTIAL

`ぱちすろ おり姫は告知がお好き / おり姫 / 銀座 / GINZA` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT / ガックン / 出目 / 告知モード` を組み替え、当時業界記事・旧攻略サイト・旧機種DB・後年整理を横断して再探索。

### settingChangeBehavior

- 通常時ゲーム数天井、RT/CZ/ART、通常時モード管理: NONE_CONFIRMED / NOT_APPLICABLE。
- 設定変更時の本機固有リール始動・出目・演出状態処理: 十分再探索後もUNVERIFIED。
- 告知モードが「ボーナス当選時または遊技待機状態」でリセットされることは当時記事で確認できるが、設定変更時の処理とは断定しない。

### carryOverBehavior

- 天井ゲーム数、RT/CZ/ART残G、通常時モードの据え置き引継ぎ: NOT_APPLICABLE / NONE_CONFIRMED。
- 本機固有の演出選択状態が据え置きでどう扱われるか: UNVERIFIED。

### powerCycleBehavior

- 電源OFF→ONのみの場合の本機固有リール/告知モード/液晶状態: UNVERIFIED。
- 設定変更挙動から電断挙動を推定転記しない。

### gameCounterReset

- 通常時ゲーム数天井: NONE_CONFIRMED。
- 天井用内部ゲームカウンタ: NOT_APPLICABLE / NONE_CONFIRMED。

### ceilingAfterReset

- 天井機能: NONE_CONFIRMED。pacnk現行整理でも「天井機能は非搭載」。
- リセット専用短縮天井: NOT_APPLICABLE / NONE_CONFIRMED。

### modeAfterReset

- 朝一専用モード、設定変更専用モード: NONE_CONFIRMED。
- 通常時モード管理自体を確認できず。

### stateAfterReset

- RT/CZ/ART等の出玉状態: NOT_APPLICABLE。
- 告知演出選択状態の設定変更/据え置き/電断時処理: UNVERIFIED。

### advantageousSectionReset

- NOT_APPLICABLE（5号機・有利区間制度導入前）。

### resetBenefits

- 設定変更専用天井短縮、朝一RT/CZ、初当たり優遇等: NONE_CONFIRMED。

### resetPenalties

- 設定変更固有の公開不利要素: NONE_CONFIRMED。

### resetDetection

- 本機固有のガックン、出目、ランプ、液晶等による設定変更/据え置き判別: 検索語と資料系統を変えて再探索したがUNVERIFIED。
- ボーナス合算や小役差は通常の設定推測材料であり、リセット判別とは分離。

### numericResetData

- 設定変更時モード振り分け: NONE_CONFIRMED / NOT_APPLICABLE
- 朝一特定G以内当選率: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- リセット後短縮天井G数: NOT_APPLICABLE / NONE_CONFIRMED

## sources

取得日: 2026-09-01

1. グリーンべると — 銀座初の完全告知は“セクスィ”生ボイス！（2007-08-10）
   - https://web-greenbelt.jp/00004302/
   - 納品9月16日開始予定、BIG約312枚、RB約104枚、合成1/192.2〜1/142.5、告知モードの演出上のリセット条件。
   - reliability: INDUSTRY_HIGH
2. K-Navi — 新機種『ぱちすろ おり姫は告知がお好き』展示発表会（2007-08-08）
   - https://p-kn.com/topics/news/305/
   - ホール導入9月16日以降予定、告知システム。
   - reliability: INDUSTRY_HIGH
3. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/05/a.php
   - ノーマル/完全告知/同時成立、BIG/REG規定払い出し・純増。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 1000円あたりのゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/05/c.php
   - 設定別38.37〜40.76G。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — ボーナス抽選確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ginza_slot/05/h-1.php
   - 設定別BIG/REG/合成、シミュレートPAYOUT。
   - reliability: ANALYSIS_HIGH
6. HAZUSE — ぱちすろおり姫は告知がお好き解析・機種情報
   - https://hazuse.com/i/data/padhisuroorihimehakokutigaosuki/top.htm
   - 2007年当時整理、RT等の付加機能なし、合算、BIG/REG獲得性能。
   - reliability: OLD_ANALYSIS
7. P-WORLD — ぱちすろおり姫は告知がお好き
   - https://www.p-world.co.jp/machine/database/4869
   - 種別・ボーナス合成値の照合。
   - reliability: INDUSTRY_DB
8. pacnk — 設定判別ツール/旧機種整理
   - https://pacnk.com/slot/tools/sh_orihimehakokuchigaosuki.html
   - 合成値、PAYOUT丸め値、天井非搭載の補助確認。
   - reliability: RETROSPECTIVE_SECONDARY

## missingFields

- 本機固有の設定変更時リール/出目/告知演出状態処理
- 据え置き時の告知演出選択状態の引継ぎ
- 電源OFF→ONのみのリール/告知状態処理
- 本機固有のガックン等による設定変更判別
- 公開朝一専用数値

## conflicts

- 機械割: パチマガスロマガのシミュレート `97.98 / 99.39 / 102.25 / 104.88 / 107.33 / 110.23%` とpacnk整理 `98 / 99 / 102 / 104 / 107 / 110%`。多くは丸め近似だが設定4は104.88%→104%で単純丸めと一致しないため、平均せずCONFLICTとして保持。
