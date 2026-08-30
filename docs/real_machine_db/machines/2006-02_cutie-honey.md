# キューティーハニー

machineName: キューティーハニー
manufacturer: エレコ
releaseDate: 2006-02
generation: 5号機初期
systemType: ボーナス + RT / 2段階設定（設定1・6）

aliases:
- キューティーハニー3（当時解析資料での表記）

## payoutRateBySetting

現時点では資料間に差があるため CONFLICT。

| 設定 | HAZUSE | 5号機クロニクル |
|---|---:|---:|
| 1 | 97.0% | 96.9% |
| 6 | 105.0% | 102.8% |

信頼度: CONFLICT

## initialHitBySetting

本機のボーナスはBIGのみとする当時解析資料を採用。

| 設定 | BIG |
|---|---:|
| 1 | 1/385.5 |
| 6 | 1/334.1 |

HAZUSEの当時解析値。別の後年資料でも設定1約1/386、設定6約1/334と丸め差の範囲で一致。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED

「キューティーハニー / キューティーハニー3」「50枚」「1000円」「ベース」「コイン持ち」等へ検索語を変え、公式・当時解析・後年資料を横断したが、比較可能な50枚あたりゲーム数は今回確定できず。

## netIncrease

RT「キューティーゲーム」: 約0.5枚/G

メーカー公式で確認。

信頼度: OFFICIAL

## basicPayout

- BIG: メーカー公式は約300枚獲得（440枚を超える払い出しで終了）
- 当時解析資料: 約307〜310枚

物差しではメーカー公式の「約300枚」を基本値として扱い、解析上の実獲得目安307〜310枚は定義差として併記する。

REG: 搭載なしとする当時解析資料あり。5号機クロニクルには「REG約104枚」の記載があるため、この点はCONFLICTとして別管理する。

## modeSpecificMinimumData

- BIG終了後にRT「キューティーゲーム」へ突入
- RT純増: 約0.5枚/G（OFFICIAL）
- 最大継続: 500G
- メーカー公式ではチェリー出現またはBIG当選まで継続、最大500G
- 当時解析資料では設定は1・6の2段階

## sources

取得日: 2026-08-31

1. ユニバーサルエンターテインメント公式 — キューティーハニー
   - https://www.universal-777.com/product/slot/cutie_honey/
   - エレコ、5号機、2006年2月、ボーナス+RT、BIG約300枚、440枚超払い出し終了、RT約0.5枚/G、最大500G
   - reliability: OFFICIAL
2. HAZUSE — キューティーハニー3 解析・機種情報
   - https://www.hazuse.com/i/det2/cutiehoney/top.htm
   - 2006年2月、設定1/6の2段階、BIG 1/385.5・1/334.1、機械割97%・105%、BIG純増310枚、RT約0.5枚/G
   - 当時更新日表記: 2006-02-16ほか
   - reliability: ANALYSIS_HIGH
3. パチマガスロマガ — キューティーハニー3
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/58/a.php
   - ボーナスは赤7/青7のBIGのみ、BIG約307枚、500G RT
   - reliability: ANALYSIS_HIGH
4. 5号機クロニクル — ユニバーサル系5号機全機種一覧
   - https://5goki.com/universal
   - 2006年2月、機械割96.9%/102.8%記載。REG約104枚記載は他資料と競合
   - reliability: ANALYSIS_SINGLE
5. 掘り出しモンみっけた!! — キューティーハニー3
   - https://plaza.rakuten.co.jp/horida/16003/
   - 設定1約1/386、設定6約1/334、2段階設定、RT約0.5枚/G
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数 / ベース
- 機械割の確定値（資料間CONFLICT解消待ち）

## conflicts

- 機械割: HAZUSE 97.0% / 105.0% に対し、5号機クロニクル 96.9% / 102.8%。平均化しない。
- ボーナス構成: メーカー公式はBIG中心の説明、HAZUSE/パチマガスロマガはBIGのみと記載する一方、5号機クロニクルはREG約104枚を記載。現時点では当時解析資料を優先して「BIGのみ」を本線とし、REG記載はCONFLICTとして保持する。
- BIG獲得枚数: 公式約300枚、パチマガスロマガ約307枚、HAZUSE約310枚。払い出し終了条件と実獲得の丸め・攻略差があるため同一値へ平均化しない。
