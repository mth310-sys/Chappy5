# 平成カツヲ伝説

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: 平成カツヲ伝説
manufacturer: ヤーマ
releaseDate: 2006-02-19
generation: 5号機初期
systemType: ボーナス主体 / BIG + CB（第二種ボーナス）
formalModelName: ヘイセイバクトデンA

## payoutRateBySetting

5号機クロニクルとpacnkで一致。

| 設定 | 機械割 |
|---|---:|
| 1 | 95.0% |
| 2 | 97.5% |
| 3 | 100.0% |
| 4 | 102.5% |
| 5 | 104.5% |
| 6 | 105.5% |

信頼度: ANALYSIS_HIGH

## initialHitBySetting

| 設定 | BIG | CB |
|---|---:|---:|
| 1 | 1/327.00 | 1/712.00 |
| 2 | 1/315.00 | 1/655.00 |
| 3 | 1/297.00 | 1/606.00 |
| 4 | 1/292.00 | 1/585.00 |
| 5 | 1/282.00 | 1/565.00 |
| 6 | 1/277.00 | 1/565.00 |

設定別確率はpacnkとHAZUSEで一致。2006年当時のグリーンべると記事でも、BB:CB比率が概ね2:1、設定3では合算1/200を上回る高ボーナス確率と説明され、構造面も整合する。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED

「平成カツヲ伝説」「ヘイセイバクトデンA」「50枚」「1000円」「ベース」「コイン持ち」等で複数検索したが、比較可能な50枚あたりゲーム数は今回確定できず。

## netIncrease

- 通常の持続型RT/ARTは非搭載。
- HAZUSEでは特殊リプレイ成立時に3GのRTへ突入する内部仕様を確認。ただし物差し上の主要出玉契機ではないため補助情報扱い。

## basicPayout

- BIG: 360枚（当時業界発表） / HAZUSE実獲得目安約300枚
- CB: 255枚（当時業界発表） / HAZUSE実獲得目安約200枚

払い出し条件と実獲得目安を定義分離して保持する。

信頼度: INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData

- BIG + チャレンジボーナス（第二種ボーナス）
- BB:CB比率は約2:1と業界発表
- 全小役・リプレイにボーナス同時当選の可能性あり
- 特殊リプレイ成立時は3G RT
- 2006年2月19日より納品開始予定と当時業界記事で確認
- 有利区間制度導入前

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 「平成カツヲ伝説 / ヘイセイバクトデンA / ヤーマ」と「設定変更 / リセット / 朝一 / ガックン / 状態」を組み替え、公式・当時業界記事・HAZUSE・後年DBを再探索したが、本機固有の設定変更時挙動を明記した高信頼資料は確認できずUNVERIFIED。

carryOverBehavior:
- 通常時ゲーム数天井・長期モード管理・ART/ATストックはNONE_CONFIRMED。
- 特殊リプレイ由来3G RT中の据え置き時残G処理はUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみで朝一専用モード・天井短縮・初当たり優遇が生じる根拠はNONE_CONFIRMED。
- 3G RT中の電断時残G処理はUNVERIFIED。

gameCounterReset:
- 通常時ゲーム数天井はNONE_CONFIRMED / NOT_APPLICABLE相当。

ceilingAfterReset:
- NONE_CONFIRMED。

modeAfterReset:
- 朝一専用モードやゲーム数モード管理はNONE_CONFIRMED。

stateAfterReset:
- 通常時の主要内部状態再抽選はNONE_CONFIRMED。
- 特殊リプレイ成立後3G RTの設定変更/据え置き/電断処理のみUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更時限定の天井短縮・モード優遇・初当たり優遇はNONE_CONFIRMED。

resetPenalties:
- NONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、液晶表示、ゲーム数挙動による変更判別は十分な再探索後もUNVERIFIED。

numericResetData:
- 設定変更時モード振り分け: NONE_CONFIRMED
- 短縮天井: NONE_CONFIRMED
- 朝一当選率/恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. グリーンべると — ヤーマが5号機「平成カツヲ伝説」を発表
   - https://web-greenbelt.jp/00004506/
   - 公開日: 2006-01-20
   - 型式名ヘイセイバクトデンA、BIG360枚、CB255枚、BB:CB=2:1、2月19日納品開始予定
   - reliability: INDUSTRY
2. BELLCO / ヤーマ公式製品一覧 — 平成カツヲ伝説
   - https://www.s-bellco.co.jp/products/slot/yama_katsuwo/
   - 2006年2月登場、5号機、ノーマル
   - reliability: OFFICIAL
3. 5号機クロニクル — ヤーマ5号機全機種一覧
   - https://5goki.com/yama
   - 2006年2月、設定別機械割95.0〜105.5%
   - reliability: ANALYSIS_SINGLE
4. pacnk — 平成カツヲ伝説 設定判別ツール
   - https://pacnk.com/slot/tools/sh_heiwakatsuodensetsu.html
   - 設定別BIG/CB確率、設定別機械割
   - reliability: ANALYSIS_SINGLE
5. HAZUSE — 平成カツヲ伝説 解析・機種情報
   - https://www.hazuse.com/i/det2/heisei_k/top.htm
   - 設定別BIG/CT確率を再照合。BIG約300枚/CT約200枚の実獲得目安、特殊リプレイ後3G RTを確認。
   - reliability: ANALYSIS_HIGH

## missingFields

- 50枚あたりゲーム数 / ベース
- 設定変更/据え置き/電源OFF→ON時の3G RT状態処理
- 本機固有の設定変更判別

## conflicts

- 現時点で主要設定別確率・機械割の明確なCONFLICTなし。
- BIG360枚/CB255枚（業界発表）とHAZUSE約300枚/約200枚は払い出し/獲得の定義差として分離し、競合扱いしない。

## QA note

- HAZUSE追加照合により設定別BIG/CT確率はpacnk単一依存から複数資料一致へ改善。
- resetBehaviorは通常時天井・朝一専用モード等はNONE_CONFIRMED、3G RTの変更/据え置き/電断処理とガックンのみUNVERIFIEDとして分離。
