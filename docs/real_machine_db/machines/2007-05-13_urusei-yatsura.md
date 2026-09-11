# うる星やつら

status: PARTIAL
qaResetBehavior: PARTIAL_RESEARCH_EXHAUSTED

machineName: うる星やつら
manufacturer: 銀座（Sammy系）
releaseDate: 2007-05-13（グリーンべると当時記事の納品開始予定日）
generation: 5号機初期
systemType: ノーマル / ボーナス主体 + 演出用プチRT
formalModel: ウルセイヤツラS

## 性能コア

payoutRateBySetting:
- 設定1: 96.3%
- 設定2: 98.2%
- 設定3: 100.0%
- 設定4: 102.3%
- 設定5: 105.2%
- 設定6: 108.3%

confidence: ANALYSIS_HIGH（複数後年資料一致。業界一次記事では合算のみ確認）

initialHitBySetting:
- HBB
  - 設定1: 1/2048.0
  - 設定2: 1/2048.0
  - 設定3: 1/2048.0
  - 設定4: 1/1724.6
  - 設定5: 1/1724.6
  - 設定6: 1/1724.6
- BIG
  - 設定1: 1/636.6
  - 設定2: 1/595.8
  - 設定3: 1/565.0
  - 設定4: 1/555.4
  - 設定5: 1/504.1
  - 設定6: 1/448.9
- REG
  - 設定1: 1/720.2
  - 設定2: 1/675.6
  - 設定3: 1/618.3
  - 設定4: 1/601.3
  - 設定5: 1/555.4
  - 設定6: 1/555.4
- ボーナス合算
  - 設定1: 約1/290
  - 設定2: 約1/274
  - 設定3: 約1/258
  - 設定4: 約1/247
  - 設定5: 約1/229
  - 設定6: 約1/217

confidence: ANALYSIS_HIGH。合算の設定1〜6レンジは当時業界一次記事でも一致。

baseGamesPer50:
- 約46.6〜49.5G/50枚（設定レンジ表記）

confidence: ANALYSIS_SINGLE

netIncrease:
- 出玉増加用RTは非搭載。
- 特殊リプレイ成立後に10Gの「ガールハントタイム」へ移行するが、ボーナス期待を演出するプチRTとして扱い、出玉用純増値は設定しない。

basicPayout:
- HBB: 448枚
- BIG: 351枚
- REG: 104枚

confidence: INDUSTRY（当時グリーンべるとで3種の純増枚数を確認）

modeSpecificMinimumData:
- 6段階設定。
- 1枚役/チェリー/スイカ等との同時抽選を採用。
- 1枚役またはその取りこぼし目に相当する特殊リプレイ成立後、10Gの「ガールハントタイム」に突入。
- 通常時ゲーム数天井は非搭載とする後年資料あり。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-12

settingChangeBehavior:
- 「うる星やつら / ウルセイヤツラS / 銀座 / Sammy / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / ガックン / ガールハントタイム / プチRT」を組み替え、当時業界記事、P-WORLD、メーカー系情報、旧攻略/解析、後年回顧資料を再探索した。
- 本機固有の設定変更時に、成立中の10GプチRT「ガールハントタイム」残りGや内部RT状態をどう処理するかを直接明記した高信頼資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機ノーマル/RT機の挙動から推測補完しない。

carryOverBehavior:
- 通常時ゲーム数天井は非搭載のため、天井ゲーム数引継ぎは `NOT_APPLICABLE`。
- 10GプチRT中の閉店→据え置き翌日について、残りRT G数/内部RT状態を持ち越すかは本機固有資料で確定できず `UNVERIFIED_AFTER_RESEARCH`。

powerCycleBehavior:
- 純電源OFF→ONのみと設定変更を区別した、本機固有のプチRT残りG/内部RT状態/成立済みボーナス状態の処理は `UNVERIFIED_AFTER_RESEARCH`。

gameCounterReset:
- `NOT_APPLICABLE_TO_NORMAL_CEILING`。通常時ゲーム数天井は非搭載。
- プチRTの残りGは通常天井カウンタと定義が異なるため、この欄へ推測転記しない。

ceilingAfterReset:
- `NONE`。通常時ゲーム数天井自体が非搭載のため、設定変更時短縮天井も該当なし。

modeAfterReset:
- ゲーム数管理モード/朝一専用モードは確認できない。
- 設定変更専用のモード振り分け数値も確認できない。

stateAfterReset:
- ガールハントタイム中の設定変更/据え置き/純電断時処理は `UNVERIFIED_AFTER_RESEARCH`。
- 成立済みボーナス/告知待ち等について本機固有の朝一契約も高信頼資料で固定できない。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機初期・有利区間制度導入前）。

resetBenefits:
- `NONE_CONFIRMED`。

resetPenalties:
- `NONE_CONFIRMED`。

resetDetection:
- `UNVERIFIED_AFTER_RESEARCH`。
- ガックン、初期出目、表示、ランプ等による本機固有の設定変更/据え置き判別は、検索語・資料系統変更後も固定できない。

numericResetData:
- 通常時天井: 非搭載
- リセット時短縮天井: `NOT_APPLICABLE`
- 朝一専用モード数値: `NONE_CONFIRMED`
- リセット恩恵発生率: `NONE_CONFIRMED`
- プチRT残りGの設定変更/据え置き/純電断処理: `UNVERIFIED_AFTER_RESEARCH`

### resetResearchExhaustion
- 2026-09-12に再探索を実施。
- 当時業界/P-WORLD、メーカー系、機種名・正式型式名、設定変更/リセット/朝一/据え置き/電断/ガックン/プチRT等の検索語を変更して再確認。
- 後継「うる星やつら2」や2024年スマスロ版のリセット仕様は初代へ転記しない。
- 直接契約を固定できない項目のみUNVERIFIEDを維持し、reset側QAを `PARTIAL_RESEARCH_EXHAUSTED` とする。

## sources

性能コア初回取得日: 2026-08-31
resetBehavior再探索日: 2026-09-12

1. グリーンべると / P-WORLD「『うる星やつら』、5号機MAXの純増枚数を実現」2007-04-06
   - https://news.p-world.co.jp/articles/2133/greenbelt
   - https://web-greenbelt.jp/00004122/
   - 型式名ウルセイヤツラS、HBB448枚/BIG351枚/RB104枚、10Gガールハントタイム、6段階、合算1/290〜1/217、2007-05-13納品開始予定を確認。
   - reliability: INDUSTRY

2. P-WORLD 機種DB「うる星やつら（2007年）」
   - https://www.p-world.co.jp/machine/database/4675
   - 合算1/290〜1/217、各ボーナス獲得枚数、型式名、ガールハントタイムがプチRTとして扱われる当時掲示情報を確認。
   - resetの直接契約は固定できず。
   - reliability: ANALYSIS_HIGH

3. みんスロ「うる星やつら」
   - https://minslo.com/%E3%81%86%E3%82%8B%E6%98%9F%E3%82%84%E3%81%A4%E3%82%89/
   - 導入日2007-05-14表記、50枚46.6〜49.5G、天井非搭載、設定別HBB/BIG/REG・合算・出玉率を確認。
   - reliability: ANALYSIS_SINGLE

4. 鬼アツ「週刊少年サンデー タイアップ機種一覧」うる星やつら節
   - https://oniatsu.com/sunday-2-4887
   - 設定別HBB/BIG/REG、合算、機械割、獲得枚数を別系統で照合。
   - reliability: ANALYSIS_SINGLE

5. サミー公式 2007年パチスロ製品一覧
   - https://www.sammy.co.jp/japanese/products/pachislot/2007/index.html
   - サミー/銀座系の「パチスロうる星やつら」製品掲載を確認。ページ内の日付表示は製品一覧上の管理表示と実納品日が一致しないため導入日根拠には使用しない。
   - reliability: OFFICIAL

6. グリーンべると「サミーから純Aタイプ第3弾『うる星やつら2』」2009-05-27
   - https://web-greenbelt.jp/00003110/
   - 2007年5月の初代が純Aタイプで、ガールハントタイムが前作由来であることを後年業界資料として補助確認。
   - 初代のreset契約を示す資料ではないため、設定変更/電断仕様の根拠には使用しない。
   - reliability: INDUSTRY

## missingFields
- 50枚ベースの設定別内訳と別系統照合。
- 設定変更/据え置き/電源OFF→ON時のプチRT残りG・内部RT状態処理。
- 成立済みボーナス/告知状態の電断・設定変更契約。
- 本機固有の設定変更判別。

## conflicts
- 納品開始予定は当時グリーンべると2007-05-13、後年みんスロの導入日は2007-05-14。週開始日差とみなし平均化せず双方を保持し、本DB releaseDateは一次性の高い当時納品予定日を採用。
- 性能コアに明確な数値競合は現時点で確認していない。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
