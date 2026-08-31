# キューティーハニー

status: PARTIAL
qaResetBehavior: PARTIAL

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

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 「キューティーハニー / キューティーハニー3 / エレコ」に「設定変更 / リセット / 朝一 / ガックン / RT / キューティーゲーム」を組み合わせ、メーカー公式・HAZUSE・パチマガスロマガ・後年資料を再探索したが、設定変更時にRT残G数や内部RT状態をどう処理するかを明記した高信頼資料は確認できずUNVERIFIED。
- 設定変更専用の朝一モード、短縮天井、初当たり優遇はNONE_CONFIRMED。

carryOverBehavior:
- 通常時ゲーム数天井・モードストックはNONE_CONFIRMED。
- BIG後RT「キューティーゲーム」途中の残G数/状態を据え置き時に維持するかは、本機固有の高信頼資料で未確認のためUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみの場合にRT残G数/内部状態を維持・初期化するかはUNVERIFIED。
- 電源投入だけで朝一専用モード・短縮天井・当選優遇が発生する根拠はNONE_CONFIRMED。

gameCounterReset:
- 通常時ゲーム数天井はNONE_CONFIRMED / NOT_APPLICABLE相当。
- RTは最大500Gだが、これはBIG後に開始するRT継続上限であり、通常時天井とは区別する。

ceilingAfterReset:
- 通常時天井およびリセット後短縮天井はNONE_CONFIRMED。

modeAfterReset:
- 通常時モード管理、朝一専用モード振り分けはNONE_CONFIRMED。

stateAfterReset:
- 本機の主要状態はBIG後RT「キューティーゲーム」。設定変更/電断時にRT途中状態・残G数・チェリー成立前状態をどう扱うかはUNVERIFIED。
- 成立済みBIGの特殊状態処理もUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 朝一/設定変更専用の天井短縮・モード優遇・初当たり優遇はNONE_CONFIRMED。

resetPenalties:
- NONE_CONFIRMED。

resetDetection:
- 「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン」を表記揺れと組み合わせて再探索したが、本機固有のリールガックン・表示等による変更判別を高信頼資料で確認できずUNVERIFIED。

numericResetData:
- 設定変更時モード振り分け: NONE_CONFIRMED
- 短縮天井: NONE_CONFIRMED
- 朝一当選率/恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. ユニバーサルエンターテインメント公式 — キューティーハニー
   - https://www.universal-777.com/product/slot/cutie_honey/
   - エレコ、5号機、2006年2月、ボーナス+RT、BIG約300枚、440枚超払い出し終了、RT約0.5枚/G、最大500G
   - reset QAではRT仕様と通常時天井/朝一専用数値の掲載有無も確認。
   - reliability: OFFICIAL
2. HAZUSE — キューティーハニー3 解析・機種情報
   - https://www.hazuse.com/i/det2/cutiehoney/top.htm
   - 2006年2月、設定1/6の2段階、BIG 1/385.5・1/334.1、機械割97%・105%、BIG純増310枚、RT約0.5枚/G
   - 当時更新日表記: 2006-02-16ほか
   - reset関連語へ展開したが設定変更/据え置き時RT処理の明示は確認できず。
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
- 設定変更/据え置き/電源OFF→ON時のRT残G数・内部RT状態の処理
- 本機固有の設定変更判別（ガックン等）

## conflicts

- 機械割: HAZUSE 97.0% / 105.0% に対し、5号機クロニクル 96.9% / 102.8%。平均化しない。
- ボーナス構成: メーカー公式はBIG中心の説明、HAZUSE/パチマガスロマガはBIGのみと記載する一方、5号機クロニクルはREG約104枚を記載。現時点では当時解析資料を優先して「BIGのみ」を本線とし、REG記載はCONFLICTとして保持する。
- BIG獲得枚数: 公式約300枚、パチマガスロマガ約307枚、HAZUSE約310枚。払い出し終了条件と実獲得の丸め・攻略差があるため同一値へ平均化しない。

## QA note

- v0.7 resetBehavior遡及QAを実施。
- 本機の朝一客行動に関係しうるRT残G数/状態の設定変更・据え置き・電断処理を重点探索したが確定資料なし。推測せずUNVERIFIED。
- 通常時天井、朝一専用モード、設定変更専用短縮天井/当選優遇はNONE_CONFIRMED。有利区間はNOT_APPLICABLE。
