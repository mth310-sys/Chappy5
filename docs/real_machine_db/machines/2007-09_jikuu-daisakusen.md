# 時空大作戦

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: 時空大作戦
manufacturer: 岡崎産業
releaseDate: 2007-09（具体日UNVERIFIED）
generation: 5号機
systemType: ボーナス + ART / リプパン延命型

## releaseDate evidence

- 5号機クロニクル岡崎産業一覧は導入時期を `2007/9` と掲載。
- パチンコFANの2007年度機種一覧も2007年9月機として整理。
- 岡崎産業の後年公式系リリースでは『時空大作戦』を大型液晶搭載機第1弾として回顧できるが、今回、2007年9月内の具体的な全国納品/ホール導入日を一次・当時業界・旧DBで確定できなかった。
- `9月25日以前/26〜30日` のどちらへ日単位で置くかは推測せず、月精度の遡及レコードとして保持する。

信頼度: ANALYSIS_HIGH（導入月） / UNVERIFIED（具体日）

## payoutRateBySetting

pacnk整理値:

| 設定 | PAYOUT |
|---|---:|
| 1 | 94.84% |
| 2 | 96.88% |
| 3 | 100.67% |
| 4 | 103.71% |
| 5 | 106.92% |
| 6 | 112.88% |

5号機クロニクル:

| 設定 | 機械割 |
|---|---:|
| 1 | 94.8% |
| 2 | 96.9% |
| 3 | 100.7% |
| 4 | 103.7% |
| 5 | 106.9% |
| 6 | 112.9% |

両者は精密値と小数1桁丸めとして整合する。パチマガスロマガ現存ページではPAYOUTが「現在調査中」となっており、独立した精密値照合には使わない。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

パチマガスロマガ解析値:

| 設定 | BIG合成 | REG合成 | 全ボーナス合成 |
|---|---:|---:|---:|
| 1 | 1/489.07 | 1/1191.56 | 1/346.75 |
| 2 | 1/468.11 | 1/1149.75 | 1/332.67 |
| 3 | 1/425.56 | 1/1040.25 | 1/302.01 |
| 4 | 1/390.10 | 1/1008.25 | 1/281.27 |
| 5 | 1/372.36 | 1/897.75 | 1/263.20 |
| 6 | 1/337.81 | 1/789.59 | 1/236.59 |

pacnkのBIG/REG値は `1/489.10→1/337.80` / `1/1191.60→1/789.60` で丸め差の範囲で一致。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

パチマガスロマガ:
- 全設定共通 `42.56G / 1000円（50枚）`

信頼度: ANALYSIS_HIGH

## netIncrease

- ART中リプレイ確率: 全設定共通 `1/1.68`
- ART純増: 全設定共通 `+0.51枚/G`
- 業界初の「ねじナビ」を用い、ARTパンク契機となる色チェリー取りこぼしを回避するリプパン延命型。

信頼度: ANALYSIS_HIGH

## basicPayout

パチマガスロマガ:
- BIG: 412枚超払い出し終了 / 純増約308枚
- REG: 8回入賞または12G消化で終了 / 純増約70枚

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

### ART / ねじナビ

- ボーナス+ART機。
- ARTの終了条件に規定G数消化・ボーナス・チェリー取りこぼしがあることを後年回顧資料でも確認。
- ナビストックがある場合でも、チェリーナビ表示には右リール停止ボタン長押し（ねじナビ操作）が関わる特殊仕様。
- ART純増 `+0.51枚/G` は比較用コア値として採用。
- ARTの全継続G数振り分け、全ナビストック抽選は完全再現用詳細のため本DBでは収集対象外。

### 天井

- pacnk現存整理は天井を「約1173G」と表示する。
- ただし、今回この1173G値を当時一次/別系統解析で再照合できていないため `ANALYSIS_SINGLE` とし、天井恩恵・起算条件・設定変更時処理は推定しない。

## resetBehavior

resetBehaviorQA: PARTIAL

`時空大作戦 / 岡崎産業 / JIKUU DAISAKUSEN` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 1173G / ART / ねじナビ / ナビストック / ガックン` を組み替え、パチマガスロマガ、5号機クロニクル、pacnk、旧DB、後年回顧資料、当時業界系資料を横断して再探索。

### settingChangeBehavior

- 設定変更時の天井ゲーム数リセット/引継ぎ: UNVERIFIED。
- 設定変更時のART状態、ART残G、ナビストック処理: UNVERIFIED。
- 設定変更専用モード/朝一専用モード: NONE_CONFIRMED。

### carryOverBehavior

- 据え置き時の天井ゲーム数引継ぎ: UNVERIFIED。
- 据え置き時のART状態・残G・ナビストック引継ぎ: UNVERIFIED。

### powerCycleBehavior

- 電源OFF→ONのみの天井ゲーム数、ART状態・残G、ナビストック処理: UNVERIFIED。
- 設定変更挙動から電断挙動を推定転記しない。

### gameCounterReset

- 通常時天井: 約1173Gという二次整理値あり（ANALYSIS_SINGLE）。
- 設定変更/据え置き/電断時の天井カウンタ処理: UNVERIFIED。

### ceilingAfterReset

- リセット時の短縮天井: NONE_CONFIRMED。
- 設定変更時も1173Gか、別天井へ変化するか: UNVERIFIED。

### modeAfterReset

- 朝一専用モード、設定変更専用モード振り分け: NONE_CONFIRMED。
- 通常時モードの設定変更/据え置き/電断処理: UNVERIFIED。

### stateAfterReset

- ART状態、ART残G、ナビストックの設定変更時処理: UNVERIFIED。
- 据え置き/電断時処理もUNVERIFIED。

### advantageousSectionReset

- NOT_APPLICABLE（5号機・有利区間制度導入前）。

### resetBenefits

- 設定変更専用の短縮天井、朝一ART/CZ優遇、専用初当たり優遇: NONE_CONFIRMED。

### resetPenalties

- 設定変更固有の公開不利要素: NONE_CONFIRMED。

### resetDetection

- 本機固有のガックン、出目、液晶、ART/ナビ状態による設定変更/据え置き判別: 十分再探索後もUNVERIFIED。

### numericResetData

- 設定変更時モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- リセット後短縮天井G数: NONE_CONFIRMED
- 通常時天井候補: 約1173G（ANALYSIS_SINGLE。リセット専用値ではない）

## sources

取得日: 2026-09-01

1. パチマガスロマガ — 時空大作戦 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/52/a.php
   - ART/同時成立、ねじナビ、BIG約308枚、REG約70枚。
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ — 時空大作戦 小役/1000円ゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/52/c.php
   - 50枚42.56G、ART純増+0.51枚/G、ART中リプレイ1/1.68。
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — 時空大作戦 ボーナス確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/52/h.php
   - 設定別BIG/REG/合算。PAYOUTは現存ページでは調査中。
   - reliability: ANALYSIS_HIGH
4. pacnk — 時空大作戦 設定判別ツール
   - https://pacnk.com/slot/tools/sh_jikuudaisakusen.html
   - 2007年9月導入、BIG/REG、PAYOUT 94.84〜112.88%、天井約1173G表示。
   - reliability: ANALYSIS_SINGLE / RETROSPECTIVE_DB
5. 5号機クロニクル — 岡崎産業5号機一覧
   - https://5goki.com/okazaki
   - 2007/9導入、機械割94.8〜112.9%。
   - reliability: RETROSPECTIVE_DB
6. 岡崎産業後年リリース（DreamNews転載）
   - https://seotools.jp/news/id_0000005928.html
   - 『時空大作戦』を大型液晶ディスプレイ搭載機の先行機として回顧。
   - reliability: MANUFACTURER_RELEASE_RETROSPECTIVE
7. 「これはパチスロですか」岡崎産業回顧
   - https://blog.livedoor.jp/koresuro/archives/44199600.html
   - ART終了条件とねじナビ操作の回顧説明。
   - reliability: RETROSPECTIVE_SINGLE

## missingFields

- 2007年9月内の具体的全国納品/ホール導入日
- 天井約1173Gの当時一次/別系統照合、恩恵・正確な起算条件
- 設定変更時の天井ゲーム数リセット/引継ぎ
- 据え置き時の天井ゲーム数引継ぎ
- 電源OFF→ON時の天井ゲーム数処理
- 設定変更/据え置き/電断時のART状態・残G・ナビストック処理
- 本機固有の設定変更判別
- 公開朝一専用数値

## conflicts

- 機械割はpacnk精密値と5号機クロニクル小数1桁値が丸め関係で整合し、CONFLICTとは判定しない。
- パチマガスロマガPAYOUT欄が「現在調査中」であることは数値競合ではなく資料充足度差。
