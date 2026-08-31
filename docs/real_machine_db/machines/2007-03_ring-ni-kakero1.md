# リングにかけろ1

machineName: リングにかけろ1
manufacturer: 銀座
releaseDate: 2007-03-05
generation: 5号機初期
systemType: ボーナス+RT（A+RT）

## payoutRateBySetting

後年整理資料で以下を確認。

- 設定1: 98.0%
- 設定2: 100.5%
- 設定3: 103.0%
- 設定4: 108.1%
- 設定5: 113.1%
- 設定6: 119.5%

別系統のシリーズ回顧資料でも設定1 98.0%〜設定6 119.5%を確認し、端点は一致。

信頼度: ANALYSIS_HIGH

## initialHitBySetting

### BIG合算
- 設定1: 1/462
- 設定2: 1/431
- 設定3: 1/410
- 設定4: 1/372
- 設定5: 1/338
- 設定6: 1/301

### MID
- 設定1: 1/1008
- 設定2: 1/950
- 設定3: 1/898
- 設定4: 1/771
- 設定5: 1/676
- 設定6: 1/624

### ボーナス合成
- 設定1: 1/317
- 設定2: 1/297
- 設定3: 1/281
- 設定4: 1/251
- 設定5: 1/225
- 設定6: 1/203

2007年当時の業界記事ではBB 1/461（設定1）〜1/300（設定6）、MB 1/1008〜1/624、合成1/316〜1/202と記載。後年整理値と設定1/6で丸め差の範囲にあるため、平均せず双方の定義/丸めを保持する。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

「リングにかけろ1」「リングにかけろ」「銀座」「2007」に「50枚」「1000円」「ベース」「コイン持ち」「通常時回転数」を組み合わせ、P-WORLD、当時業界記事、解析サイト、古いまとめ、後年回顧資料を横断したが、本機固有の比較可能な50枚あたりゲーム数は確認できず。

信頼度: UNVERIFIED

## netIncrease

- RT「ブーメランラッシュ」: 約0.4枚/G
- 同色BIG後: RT 200G
- 異色BIG後: RT 100G
- MID後: RT 100G
- RTにはパンク回避要素があり、告知時に指定チェリーを回避して継続する仕様。

P-WORLDと2007年当時の業界記事でRT純増約0.4枚/Gを照合。

信頼度: ANALYSIS_HIGH / INDUSTRY

## basicPayout

後年解析資料の実獲得目安:
- 同色BIG: 約312枚 + RT200G
- 異色BIG: 約312枚 + RT100G
- MID: 約104枚 + RT100G

2007年当時の業界記事ではBB1/BB2約300枚、MB約90枚と丸めた紹介値。実獲得目安の精密値312/312/104枚とは定義・丸め精度差として双方保持する。

信頼度: ANALYSIS_HIGH / INDUSTRY

## modeSpecificMinimumData

- 全ボーナス後にRTへ突入する5号機初期のA+RT機。
- 同色BIG後は200G、異色BIG/MID後は100GのRT。
- RT純増は約0.4枚/G。
- 通常時ゲーム数天井は後年資料で「非搭載」と整理されている。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 本機固有の設定変更時内部処理を明記した高信頼資料を確認できず UNVERIFIED
- carryOverBehavior: 通常時ゲーム数天井は非搭載。通常モード管理の公開仕様も確認できず、天井ゲーム数/モード引継ぎは物差し上非該当。本機固有のRT内部状態据え置き処理は未確認
- powerCycleBehavior: 電源OFF→ONのみの本機固有挙動を示す高信頼資料を確認できず UNVERIFIED
- gameCounterReset: 通常時ゲーム数天井非搭載のため、天井用ゲーム数カウンタは物差し上非該当
- ceilingAfterReset: 通常時天井非搭載のため非該当
- modeAfterReset: 朝一専用モード/通常時モード再抽選の公開情報を確認できず
- stateAfterReset: 設定変更時のRT等内部状態再抽選・引継ぎを直接示す高信頼資料は未確認
- advantageousSectionReset: 非該当（有利区間制度導入前）
- resetBenefits: 朝一/設定変更固有の主要な出玉恩恵は確認できず
- resetPenalties: 設定変更固有の主要な不利要素は確認できず
- resetDetection: 「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」「変更判別」まで検索語を変えて再探索したが、本機固有の高信頼な変更判別情報を確定できず UNVERIFIED
- numericResetData: 公開朝一専用数値は確認できず

### resetBehavior 再探索メモ

「リングにかけろ1」「リングにかけろ」「銀座」「Sammy」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / ガックン / 変更判別」を組み合わせ、P-WORLD、当時業界記事、解析サイト、古いまとめ、後年回顧資料を横断。RT/ボーナス仕様と通常時天井非搭載は確認できたが、2007年機固有の設定変更・電断・朝一判別挙動を裏付ける資料は確定できなかったため推測で埋めない。

## sources

取得日: 2026-08-31

1. P-WORLD機種DB — リングにかけろ
   - https://www.p-world.co.jp/machine/database/4578
   - 銀座、5号機RT、RT純増約0.4枚/G、同色BIG約312枚+RT200G、異色BIG約312枚+RT100G、MID約104枚+RT100Gを確認
   - reliability: ANALYSIS_HIGH
2. P-WORLD業界ニュース / グリーンべると転載 — 銀座がパチンコ・パチスロ2機種を発表
   - https://news.p-world.co.jp/articles/2058/greenbelt
   - 2007年当時資料。RT純増0.4枚/G、BB約300枚、MB約90枚、BB/MB/合成の設定1〜6端点を確認
   - reliability: INDUSTRY
3. みんスロ — リングにかけろ
   - https://minslo.com/リングにかけろ/
   - 導入日2007-03-05、設定別BIG/MID/合成/機械割、RT純増0.4枚、天井非搭載、BIG312枚/MID104枚を確認
   - reliability: ANALYSIS_SINGLE
4. けんのスロットシミュレーション — リングにかけろ1
   - https://kenslo65536.com/model/ring-ni-kakero.html
   - 2007年3月、銀座、5号機/RT、各ボーナス獲得枚数とRTゲーム数を確認
   - reliability: ANALYSIS_SINGLE
5. atwiki — パチスロ リングにかけろ1 まとめ
   - https://w.atwiki.jp/rinkake/
   - 同色/異色BIG約312枚、MIDDLE約104枚、RTゲーム数を当時系統の資料として照合
   - reliability: ANALYSIS_SINGLE
6. パチスロ歴代機械割回顧 — リングにかけろシリーズ
   - https://www.marimo0925.net/pachisuro-rekidai-ranking-ringkakero/
   - 2007年、銀座、設定1 98.0%〜設定6 119.5%、RT純増0.4枚/G、合算設定1約1/317〜設定6約1/203を照合
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数/ベース
- 本機固有の設定変更時内部処理
- 電源OFF→ONのみの本機固有挙動
- 本機固有の変更判別/ガックン情報
- 公開朝一専用数値

## conflicts

- ボーナス端点は後年整理値 BIG 1/462→1/301・合成1/317→1/203、2007年当時業界記事はBB 1/461→1/300・合成1/316→1/202。丸め差とみられるが平均せず双方保持。
- 基本獲得枚数は解析資料の実獲得目安312/312/104枚に対し、当時業界記事は約300/約300/約90枚。紹介時の丸め/定義差として平均せず双方保持。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
