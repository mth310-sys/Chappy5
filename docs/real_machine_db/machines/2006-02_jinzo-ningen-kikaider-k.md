# 人造人間キカイダーK

status: PARTIAL
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED

machineName: 人造人間キカイダーK
manufacturer: 平和
generation: 5号機初期
releaseDate: 2006-02
systemType: ボーナス + RT / BIG+2種CT

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 95.2% |
| 2 | 97.4% |
| 3 | 99.3% |
| 4 | 101.2% |
| 5 | 102.8% |
| 6 | 105.2% |

5号機クロニクル掲載値。現時点では別系統の設定別機械割表を確保できていないため単一二次資料値として保持。

信頼度: ANALYSIS_SINGLE

## initialHitBySetting

UNVERIFIED

「人造人間キカイダーK」「設定別」「BIG確率」「CT確率」「ボーナス合算」「設定1」「設定6」等へ検索語を変え、P-WORLD、パチマガスロマガ、5号機クロニクル、回顧資料を横断。2026-09-08再探索でパチマガスロマガのボーナス単独抽選確率表（BIG/青7CT/REG）を追加確認したが、小役同時成立を含む総ボーナス確率ではないため `initialHitBySetting` へ混入せず参考情報として保持。

## baseGamesPer50

UNVERIFIED

「50枚」「1000円」「ベース」「コイン持ち」を追加して再探索したが、比較可能な値は今回確定できず。

## netIncrease

BIG後50G RTを搭載。1Gあたり純増は今回未確認。

## basicPayout

パチマガスロマガ:
- BIG（赤7）: 規定払い出し345枚超 / 純増約280枚
- CT（青7）: 規定払い出し253枚超 / 純増約204枚
- CT（BAR）: 規定払い出し110枚超 / 純増約96枚

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

- BIG後に必ず50G RT
- 5ライン / 3枚掛け専用
- ボーナス成立後はリプレイ確率が約1/3へ上昇との当時解析記載
- 有利区間制度導入前

## resetBehavior

resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-08

settingChangeBehavior:
- 「人造人間キカイダーK / 平和 / キカイダーK」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / RT」を組み合わせ、当時解析・5号機DB・回顧資料を再探索。
- 2026-09-08にも検索語を再分解して再探索したが、設定変更時にBIG後50G RT残りゲーム数を引き継ぐか消去するかを明記した本機固有の一次/高信頼資料は追加確認できず **UNVERIFIED_AFTER_RESEARCH**。

carryOverBehavior:
- 据え置き時のBIG後RT残りゲーム数/状態引継ぎを明記した本機固有高信頼資料は再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 通常時ゲーム数天井・モード管理は主要仕様として確認されない。

powerCycleBehavior:
- 電源OFF→ONのみの場合のBIG後RT残りゲーム数/状態の扱いを明記した本機固有高信頼資料は **UNVERIFIED_AFTER_RESEARCH**。

gameCounterReset:
- 通常時ゲーム数天井は **NONE_CONFIRMED**。
- BIG後RTは固定50Gだが、設定変更/据え置き/電断を跨いだ残りRTゲーム数処理は **UNVERIFIED_AFTER_RESEARCH**。

ceilingAfterReset:
- 通常時ゲーム数天井・リセット短縮天井は **NONE_CONFIRMED**。

modeAfterReset:
- 通常時ゲーム数モード、朝一専用モード、設定変更専用モード振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。

stateAfterReset:
- BIG後50G RTというRESET_SENSITIVE候補状態を持つ。
- 設定変更時のRT消去/継続、据え置き時の残存、電源OFF→ON時の保持は資料未確定のため **UNVERIFIED_AFTER_RESEARCH**。

advantageousSectionReset:
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

resetBenefits:
- 設定変更/朝一専用の天井短縮、モード優遇、当選率優遇などは **NONE_CONFIRMED_AFTER_RESEARCH**。

resetPenalties:
- **NONE_CONFIRMED_AFTER_RESEARCH**。

resetDetection:
- 本機固有のガックン、表示、ランプ等による設定変更判別を高信頼で確認できず **UNVERIFIED_AFTER_RESEARCH**。

numericResetData:
- BIG後RT: 50G（通常仕様。リセット恩恵数値ではない）
- 設定変更時モード振り分け: NONE_CONFIRMED_AFTER_RESEARCH
- 朝一当選率/恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-08

1. パチマガスロマガ — 人造人間キカイダーK 基本システム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/28/a.php
   - 5号機、BIG後50P RT、BIG/青7CT/BAR CTの規定払い出しと純増、ボーナス成立後リプレイ確率上昇を確認。
   - reliability: ANALYSIS_HIGH
2. パチマガスロマガ — 人造人間キカイダーK ボーナス単独抽選確率
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/28/k.php
   - BIG/青7CT/REGの単独抽選確率を確認。ただし同時成立を含む総初当たりではないためperformance coreへ自動転記しない。
   - reliability: ANALYSIS_HIGH
3. 5号機クロニクル — 平和＆オリンピア5号機全機種一覧
   - https://5goki.com/heiwa-olympia
   - 2006年2月、平和、RT機、設定別機械割95.2〜105.2%、BIG約280枚/CT約200枚・100枚を確認。
   - reliability: ANALYSIS_SINGLE
4. P-WORLD — 人造人間キカイダーK
   - https://www.p-world.co.jp/machine/database/4083
   - 機種存在・種別の補助確認。
   - reliability: INDUSTRY

## missingFields

- 設定別総BIG/CT確率（同時成立込み）
- ボーナス合算
- 50枚あたりゲーム数
- RT純増/G
- 設定変更/据え置き/電源OFF→ON時のBIG後50G RT残りゲーム数・状態処理
- 本機固有の変更判別

## conflicts

現時点で重大な数値CONFLICTは確認していない。機械割は単一二次資料値のため将来照合対象。

## QA note

- v0.7 resetBehavior遡及QAを再実施。RTの存在自体は高信頼で確認できるが、設定変更/据え置き/電断時の残存RT処理は検索語・資料系統を変えた再探索でも本機固有根拠を固定できなかった。
- 性能側 `status: PARTIAL` は維持し、reset QAだけ `PARTIAL_RESEARCH_EXHAUSTED` として別管理。
- 次の遡及QAカーソルは `2006-02_crash-bandicoot-s.md`。
