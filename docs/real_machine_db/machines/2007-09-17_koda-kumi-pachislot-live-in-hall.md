# KODA KUMI PACHISLOT LIVE IN HALL

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: KODA KUMI PACHISLOT LIVE IN HALL
manufacturer: SANKYO
formalModelName: 倖田來未Z4
releaseDate: 2007-09-17
generation: 5号機
systemType: ボーナス + RT / チャンスゾーン

## releaseDate evidence

- グリーンべると2007-07-27記事で「納品は9月17日から」と明記。
- SANKYOオンライン博物館は導入年月を2007.09とする。
- Pachibeeは導入日2007-09-18表記。納品開始日と実ホール導入日の1日差として両方保持し、本DBの時系列キーは当時業界記事の納品開始日2007-09-17を採用。

信頼度: OFFICIAL / INDUSTRY_HIGH

## payoutRateBySetting

CONFLICT

### パチマガスロマガ（修正後シミュレート値）

| 設定 | PAYOUT |
|---|---:|
| 1 | 97.75% |
| 2 | 100.22% |
| 3 | 103.46% |
| 4 | 105.35% |
| 5 | 107.84% |
| 6 | 113.49% |

同ページには旧シミュレータ不具合により10/21以前の誌面値が約1.5%低く算出されていた旨の訂正注記あり。

### 当時業界記事

- 設定1: 97.6%
- 設定6: 111%
- 中間設定の詳細値は記事では非掲載。

### 5号機クロニクル（二次整理）

- 97.9 / 99.9 / 102.6 / 104.0 / 106.4 / 111.0%

ただし同ページの本機ゲーム性・ボーナス構成にはSANKYO公式/当時記事と明確に整合しない記述が含まれるため、機械割の補助比較以外には採用しない。

設定6で111%系と113.49%が競合するため平均せずCONFLICT保持。

信頼度: CONFLICT / ANALYSIS_HIGH + INDUSTRY_HIGH

## initialHitBySetting

SANKYO公式とパチマガスロマガの詳細値が一致。

| 設定 | BIG合成 | LIVE BONUS | REG | ボーナス合成 |
|---|---:|---:|---:|---:|
| 1 | 1/528.52 | 1/1424.70 | 1/704.69 | 1/249.19 |
| 2 | 1/504.12 | 1/1394.38 | 1/682.67 | 1/240.06 |
| 3 | 1/489.07 | 1/1285.02 | 1/648.87 | 1/229.15 |
| 4 | 1/474.90 | 1/1285.02 | 1/636.27 | 1/224.44 |
| 5 | 1/448.88 | 1/1285.02 | 1/636.27 | 1/218.45 |
| 6 | 1/404.54 | 1/1285.02 | 1/528.52 | 1/194.47 |

SANKYO公式は丸めてBIG 1/528→1/404、LIVE BONUS 1/1424→1/1285、REG 1/704→1/528、合算1/249→1/194と掲載。

信頼度: OFFICIAL + ANALYSIS_HIGH

## baseGamesPer50

- 通常時1000円あたり約40G。
- 2007-07-27グリーンべると当時記事のメーカー発表値。
- 設定別差の公開値は今回確認できず。

信頼度: INDUSTRY_HIGH

## netIncrease

RT「LIVE TIME」:
- 1セット100G
- 約+0.4枚/G
- LIVE BONUS後は必ず突入
- RT中に特殊リプレイ「バタフライ」が揃うと、その地点から再度100G RTがスタート

SANKYO公式のRT構造と当時グリーンべるとの純増値を照合。

信頼度: OFFICIAL + INDUSTRY_HIGH

## basicPayout

- BIG: 規定465枚超払い出し / 純増約326〜330枚
- LIVE BONUS: 規定285枚超払い出し / 純増約200枚
- REG: 12Gまたは8回入賞で終了 / 純増約60枚

SANKYO公式・パチマガスロマガ・当時業界記事・回顧資料で大枠一致。

信頼度: OFFICIAL + ANALYSIS_HIGH + INDUSTRY_HIGH

## modeSpecificMinimumData

### ボーナス後状態

- LIVE BONUS後: 100G RT「LIVE TIME」へ必ず突入。
- BIG / REG後: 50G「CHANCE TIME」。この50G中に特殊リプレイ「バタフライ」が成立/入賞すると100G LIVE TIMEへ移行。
- LIVE TIME中のバタフライ成立で、その時点から100Gを再スタートできる。
- 通常時ゲーム数天井は今回確認されず。

### 物差し上の位置づけ

- 2007年のボーナス+RT型。
- ボーナス後CZと100G RTの連結が出玉性能の中心。
- 詳細内部同時当選率やバタフライ抽選テーブル等の実機完全再現用内部抽選は本DB対象外。

## resetBehavior

resetBehaviorQA: PARTIAL

`KODA KUMI PACHISLOT LIVE IN HALL / 倖田來未Z4 / 倖田來未 / SANKYO` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT / LIVE TIME / CHANCE TIME / ガックン / 天井` を組み替え、公式・当時業界記事・当時解析・旧DB・回顧資料を再探索。

### settingChangeBehavior

- 設定変更時にLIVE TIME/CHANCE TIMEの残G・内部RT状態・バタフライ成立後のRT状態をどう処理するか: UNVERIFIED。
- 設定変更専用の通常時ゲーム数モード/朝一専用モード: NONE_CONFIRMED。

### carryOverBehavior

- 据え置き時に前日のLIVE TIME/CHANCE TIME残G・内部RT状態をそのまま維持するか: UNVERIFIED。
- 通常時ゲーム数天井の据え置き引継ぎ: NOT_APPLICABLE / NONE_CONFIRMED。

### powerCycleBehavior

- 電源OFF→ONのみでLIVE TIME/CHANCE TIME残G・内部RT状態を維持するか: UNVERIFIED。
- 設定変更挙動から電断挙動を推定転記しない。

### gameCounterReset

- 通常時ゲーム数天井はNONE_CONFIRMEDのため、天井用通常時ゲームカウンタはNOT_APPLICABLE / NONE_CONFIRMED。
- RT/CZの表示・内部残Gが設定変更で初期化されるかはUNVERIFIED。

### ceilingAfterReset

- 通常時天井: NONE_CONFIRMED。
- リセット専用短縮天井: NONE_CONFIRMED。

### modeAfterReset

- 通常時ゲーム数管理モード、朝一専用モード、設定変更時モード再抽選: NONE_CONFIRMED。
- ボーナス後CZ/RT状態の設定変更時処理: UNVERIFIED。

### stateAfterReset

- LIVE TIME / CHANCE TIMEの設定変更・据え置き・電断時の状態処理: UNVERIFIED。

### advantageousSectionReset

- NOT_APPLICABLE（5号機・有利区間制度導入前）。

### resetBenefits

- 設定変更専用短縮天井、朝一初当たり優遇、朝一RT/CZ優遇、設定変更専用ボーナス確率優遇: NONE_CONFIRMED。

### resetPenalties

- 設定変更固有の公開不利要素: NONE_CONFIRMED。

### resetDetection

- 本機固有のガックン、リール出目、液晶、RT/CZ状態等による設定変更/据え置き判別法: 十分再探索後もUNVERIFIED。

### numericResetData

- 設定変更時モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- リセット後短縮天井G数: NONE_CONFIRMED / NOT_APPLICABLE

## sources

取得日: 2026-09-01

1. SANKYOオンライン博物館 — KODA KUMI PACHISLOT LIVE IN HALL
   - https://www.sankyo-fever.jp/collection/526/
   - 2007.09、型式名「倖田來未Z4」、設定別BIG/LIVE BONUS/REG/合算、LIVE BONUS後100G LIVE TIME、BIG/REG後50G CHANCE TIME→特殊リプレイでRT。
   - reliability: OFFICIAL
2. グリーンべると — 倖田來未がパチンコに続きパチスロに（2007-07-27）
   - https://web-greenbelt.jp/00004229/
   - 9月17日納品開始、BIG約330枚/REG約60枚/LB約200枚、RT約+0.4枚/G、設定1〜6確率両端、出玉率97.6〜111%、通常時約40G/1000円。
   - reliability: INDUSTRY_HIGH
3. パチマガスロマガ — ボーナス抽選確率/PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/11/h.php
   - 設定別詳細確率、修正後シミュレートPAYOUT 97.75〜113.49%、旧シミュレータ不具合の訂正注記。
   - reliability: ANALYSIS_HIGH
4. パチマガスロマガ — 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/11/a.php
   - RT/同時成立/CZ、BIG約330枚、LIVE BONUS約200枚、REG約60枚。
   - reliability: ANALYSIS_HIGH
5. P-WORLD — KODA KUMI PACHISLOT LIVE IN HALL
   - https://www.p-world.co.jp/machine/database/4858
   - 型式名「倖田來未Z4」、BIG 466枚以上、LIVE BONUS 286枚以上、REG終了条件。
   - reliability: INDUSTRY_DB
6. パチ7 — 蜃気楼～攻略の手応え～
   - https://pachiseven.jp/articles/detail/11003
   - 2007年回顧。BIG約326枚/LB約200枚/REG約60枚、LB後100G LIVE TIME、BIG/REG後50G CHANCE TIME、RT中バタフライで100G再スタート。
   - reliability: RETROSPECTIVE_HIGH
7. Pachibee — 機種ページ
   - 導入日2007-09-18表記。
   - reliability: INDUSTRY_DB
8. 5号機クロニクル — SANKYO
   - https://5goki.com/sankyo
   - 機械割97.9〜111.0%を補助比較。ただし本機のゲーム性/ボーナス構成に公式・当時資料と整合しない記述があるため、コア根拠には不採用。
   - reliability: SECONDARY_CONFLICTING

## missingFields

- 設定変更時のLIVE TIME/CHANCE TIME残G・内部状態処理
- 据え置き時のRT/CZ残G・内部状態引継ぎ
- 電源OFF→ONのみのRT/CZ状態処理
- 本機固有の設定変更判別（ガックン/出目/液晶等）
- 公開朝一専用数値
- 機械割CONFLICTの算出条件差の完全解消

## conflicts

- 機械割: パチマガスロマガ修正後シミュレート97.75〜113.49% vs 当時グリーンべると97.6〜111% vs 5号機クロニクル97.9〜111.0%。平均せずCONFLICT。
- 導入日: 当時グリーンべると「9月17日から納品」 vs Pachibee「2007-09-18導入」。納品開始とホール導入の基準差として両記録を保持。
- 5号機クロニクルの本機説明にはSANKYO公式・当時解析と明確に異なるART/CZ・ボーナス値が含まれるため、その部分は採用しない。
