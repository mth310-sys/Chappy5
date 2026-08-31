# お庭でドン

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: お庭でドン
manufacturer: バルテック
releaseDate: 2006-04-16
generation: 5号機初期
systemType: ボーナス + BIG後RT

## payoutRateBySetting

UNVERIFIED

「お庭でドン」「お庭deドン」「オニワデドン」「機械割」「出玉率」「設定1」「設定6」等で当時資料・古い機種DBを横断したが、今回設定別機械割を確定できる公開値は確認できなかった。

## initialHitBySetting

設定別BIG確率: UNVERIFIED

2006年3月31日のグリーンべると記事ではBIG確率は未発表と明記。パチマガスロマガでも「ボーナス確率・PAYOUT→特にナシ」で、後続資料を検索語・資料系統変更して再探索したが、今回設定別確率を確定できる比較可能な数値は確認できなかった。

## baseGamesPer50

UNVERIFIED

「50枚」「1000円」「ベース」「コイン持ち」等へ検索語を変えて再探索したが、今回比較可能な公開値は確認できなかった。

## netIncrease

姫BIG後に100G RT「お祭りタイム」へ必ず突入。

- 継続: 最大100G
- RT中にBIG成立で終了
- 100G完走時: 約80枚純増見込み

100G完走時約80枚から単純換算した約0.8枚/Gは記事記載値そのものではなく計算値になるため、物差し元データの `netIncrease` としては採用せず、参考構造としてのみ保持する。

信頼度: INDUSTRY

## basicPayout

3種類のBIGを搭載。

- 姫BIG（赤7）: 約312枚（グリーンべると約310枚）
- 爺様BIG（青7）: 約264枚（グリーンべると約260枚）
- 婆様BIG（白7）: 約202枚（グリーンべると約200枚）

パチマガスロマガでは規定払い出し/純増を赤7 464枚超/約312枚、青7 380枚超/約264枚、白7 300枚超/約202枚と掲載。当時グリーンべるとの丸め値と整合する。

信頼度: ANALYSIS_HIGH / INDUSTRY

## modeSpecificMinimumData

### BIG振り分け

- 3種類のBIG振り分けに設定差あり
- 姫BIG比率は約70%と当時業界記事に記載
- 設定別の詳細振り分け数値は今回UNVERIFIED

### RT構造

- 姫BIG終了後は100G RT「お祭りタイム」へ必ず突入
- RT中のBIG成立でRT終了
- 100G完走で約80枚純増見込み
- パチマガスロマガでも赤7BIG後100G RT突入を確認

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 設定変更時に100G RT「お祭りタイム」の残りGや内部RT状態がどう処理されるかを確定できる高信頼公開資料は、機種名表記揺れ・型式名・RT名と「設定変更/リセット/朝一」を組み替えて再探索後もUNVERIFIED。
- 通常時ゲーム数天井、朝一専用ゲーム数モード、設定変更専用の短縮天井/初当たり優遇はNONE_CONFIRMED。

carryOverBehavior:
- 通常時ゲーム数天井の据え置き引継ぎはNOT_APPLICABLE / NONE_CONFIRMED。
- 前日RT中の据え置き時に残りG・内部RT状態を保持するかはUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみでRT残りG・内部状態を維持するかはUNVERIFIED。
- 電断で通常時ゲーム数天井が変化する構造はNONE_CONFIRMED。

gameCounterReset:
- 通常時ゲーム数天井は確認されず、天井カウンタとしてはNOT_APPLICABLE / NONE_CONFIRMED。

ceilingAfterReset:
- 通常時天井・リセット短縮天井はNONE_CONFIRMED。

modeAfterReset:
- 通常時ゲーム数管理モード、朝一専用モード、設定変更時モード再抽選はNONE_CONFIRMED。

stateAfterReset:
- 姫BIG後100G RTの設定変更/据え置き/電断時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更専用の短縮天井、朝一初当たり優遇、RT/CZ優遇、公開朝一恩恵数値はNONE_CONFIRMED。

resetPenalties:
- 設定変更固有の主要不利要素はNONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、表示、RT挙動等による設定変更/据え置き判別は、「お庭でドン / お庭deドン / オニワデドン / バルテック」と「ガックン/設定変更/朝一/据え置き」を組み替えて十分再探索したがUNVERIFIED。

numericResetData:
- 短縮天井: NONE_CONFIRMED / NOT_APPLICABLE
- 設定変更時モード振り分け/朝一当選率/リセット恩恵発生率: 比較可能な公開数値は今回未確認

## sources

取得日: 2026-08-31

1. グリーンべると — バルテックから5号機第2弾『お庭でドン』
   - https://web-greenbelt.jp/00004571/
   - 2006-03-31公開、納品開始2006-04-16、型式名オニワデドン、3種類BIG、各獲得枚数、姫BIG後100G RT、100G完走時約80枚、姫BIG比率約70%、BIG確率未発表
   - reliability: INDUSTRY
2. 攻略情報館NEWS — 2006年5月6日更新
   - https://www.bitway.ne.jp/ex/p-kj/muryo/whats_new.html
   - バルテック5号機第2弾「お庭deドン（オニワデドン）」として登場を確認
   - reliability: ANALYSIS_SINGLE
3. Q&A（検定通過記録メモ）— バルテックの検定通過機種
   - https://q-and-a.hatenablog.com/entry/%E3%83%90%E3%83%AB%E3%83%86%E3%83%83%E3%82%AF%E3%81%AE%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E
   - 2006-01-23に「オニワデドン」検定通過記録
   - reliability: ANALYSIS_SINGLE
4. パチマガスロマガ — お庭deドン! 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/45/a.php
   - RT、赤7BIG後100G RT、赤7約312枚/青7約264枚/白7約202枚の純増と規定払い出し。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — お庭deドン! 機種メニュー
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/45/baltech_slot_45.php
   - 「ボーナス確率・PAYOUT→特にナシ」を確認。攻め時・ヤメ時等の解析メニューが現存。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — お庭deドン! RT演出
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/45/h.php
   - RT「お祭りタイム」中の演出・成立役ナビを確認。
   - reliability: ANALYSIS_HIGH

## missingFields

- 設定別機械割 / 出玉率
- 設定別BIG確率
- 50枚あたりゲーム数 / ベース
- 設定別BIG振り分け詳細
- RTの公式/解析上の1Gあたり純増値
- 設定変更時のRT残G・内部状態処理
- 据え置き時のRT残G・内部状態引継ぎ
- 電源OFF→ONのみのRT状態処理
- 本機固有のガックン/朝一変更判別
- 公開朝一専用数値

## conflicts

- 現時点で主要性能値の数値競合は確認なし。
- 表記は「お庭でドン」「お庭deドン」「オニワデドン」が混在するため、正式機種名表記として本レコードは「お庭でドン」、型式名は「オニワデドン」として区別する。
