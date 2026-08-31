# うる星やつら

status: PARTIAL
qaResetBehavior: PARTIAL

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

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 「うる星やつら / ウルセイヤツラS / 銀座 / Sammy / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / ガールハントタイム」を組み合わせ、当時業界記事・P-WORLD・解析/回顧資料を横断したが、本機固有の設定変更時内部処理を明記した高信頼資料は今回確認できずUNVERIFIED。

carryOverBehavior:
- 通常時ゲーム数天井は非搭載のため天井ゲーム数引継ぎはNOT_APPLICABLE。
- 10GプチRT中の閉店→据え置き翌日状態持越しは本機固有資料で確定できずUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみと設定変更を区別した本機固有のプチRT/内部状態処理はUNVERIFIED。

gameCounterReset:
- NOT_APPLICABLE_TO_NORMAL_CEILING。通常時ゲーム数天井は非搭載。

ceilingAfterReset:
- NONE。通常時ゲーム数天井自体が非搭載のため、設定変更時短縮天井も該当なし。

modeAfterReset:
- ゲーム数管理モード/朝一専用モードは確認できない。

stateAfterReset:
- ガールハントタイム中の設定変更/電断時処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- NONE_CONFIRMED。

resetPenalties:
- NONE_CONFIRMED。

resetDetection:
- UNVERIFIED。ガックン、表示、ゲーム数挙動等の本機固有の変更判別は資料系統変更後も確定できない。

numericResetData:
- 通常時天井: 非搭載
- リセット時短縮天井: NOT_APPLICABLE
- 朝一専用モード数値: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. グリーンべると / P-WORLD「『うる星やつら』、5号機MAXの純増枚数を実現」2007-04-06
   - https://news.p-world.co.jp/articles/2133/greenbelt
   - https://web-greenbelt.jp/00004122/
   - 型式名ウルセイヤツラS、HBB448枚/BIG351枚/RB104枚、10Gガールハントタイム、6段階、合算1/290〜1/217、2007-05-13納品開始予定を確認。
   - reliability: INDUSTRY

2. P-WORLD 機種DB「うる星やつら（2007年）」
   - https://www.p-world.co.jp/machine/database/4675
   - 合算1/290〜1/217、各ボーナス獲得枚数、型式名を確認。
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

## missingFields

- 50枚ベースの設定別内訳と別系統照合
- 設定変更/据え置き/電源OFF→ON時のプチRT状態処理
- 本機固有の設定変更判別

## conflicts

- 納品開始予定は当時グリーンべると2007-05-13、後年みんスロの導入日は2007-05-14。週開始日差とみなし平均化せず双方を保持し、本DB releaseDateは一次性の高い当時納品予定日を採用。
- 性能コアに明確な数値競合は現時点で確認していない。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
