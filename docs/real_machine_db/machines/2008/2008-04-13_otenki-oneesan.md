# お天気お姉さん

- machineName: お天気お姉さん
- manufacturer: バルテック（総発売元: トレード）
- releaseDate: 2008-04-13
- releaseDateConfidence: INDUSTRY_DELIVERY_START
- generation: 5号機初期
- systemType: ボーナス + RT（33G CZ経由 / 最大120G RT）
- coreStatus: PARTIAL
- resetBehaviorQA: PARTIAL
- acquiredAt: 2026-09-01

## 性能コア

### payoutRateBySetting

5号機クロニクル掲載値:

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.1% |
| 2 | 98.7% |
| 3 | 102.7% |
| 4 | 104.9% |
| 5 | 106.2% |
| 6 | 107.7% |

- confidence: ANALYSIS_SINGLE
- P-WORLDはBIG確率を「調査中」としており、別系列の設定別機械割表は今回確定できなかったため、単一整理資料値として扱う。

### initialHitBySetting

- BIG設定別確率: UNVERIFIED_AFTER_RESEARCH
- MIDDLE設定別確率: UNVERIFIED_AFTER_RESEARCH
- ボーナス合成設定別: UNVERIFIED_AFTER_RESEARCH
- `お天気お姉さん / バルテック / TRADE / トレード` と `BIG / BB / MIDDLE / MID / MB / ボーナス確率 / 合成 / 設定別` を組み替え、P-WORLD、K-Navi、当時業界記事、旧5号機DB、回顧資料を横断したが、信頼できる設定別確率表を確定できなかった。

### baseGamesPer50

- UNVERIFIED_AFTER_RESEARCH
- `50枚 / 1000円 / 千円 / ベース / コイン持ち` を含めて再探索したが比較可能な直接値を確定できなかった。

### netIncrease

- RT「ライブRT」: 約 +0.25枚/G
- 最大120G
- 120G間のボーナス当選期待度: 約45%
- confidence: INDUSTRY

### basicPayout

- BIG: 純増約260枚
- MIDDLE: 純増約190枚
- P-WORLD払い出し終了条件: BB 353枚以上 / MB 254枚以上
- confidence: INDUSTRY / OLD_DB

### modeSpecificMinimumData

- BIG / MIDDLE終了後は33Gのチャンスゾーンへ。
- CZ中に特殊リプレイ成立で最大120GのライブRTへ。
- RT突入期待度はBIG後約1/2、MIDDLE後約1/3。
- CZはスイカ入賞でも終了。
- RTは1Gあたり約+0.25枚。
- 詳細な小役別内部抽選・RT振り分けは物差しDB対象外。

## resetBehavior

- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED
- ceilingAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- advantageousSectionReset: NOT_APPLICABLE
- resetBenefits: NONE_CONFIRMED
- resetPenalties: NONE_CONFIRMED
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- numericResetData: NONE_CONFIRMED

### resetBehavior調査メモ

- `お天気お姉さん / バルテック / TRADE / トレード` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / 状態 / CZ / RT / ガックン / 初期出目` を組み替えて再探索。
- 通常時ゲーム数天井、設定変更時の短縮天井、朝一専用モード、公開された朝一恩恵/不利数値は確認できなかった。
- ボーナス後CZ/RT構造は一次業界資料で確認済みだが、設定変更・据え置き・電源OFF→ON時のCZ/RT残Gや内部状態処理を直接説明する本機固有資料は確定できず、一般的な5号機RT機の挙動を流用しない。
- 本機固有のガックン、初期出目等による変更判別も直接根拠を確定できなかった。

## 導入時期

- グリーンべると（2008-02-29）は「納品は4月13日より」と明記。
- K-Navi内覧会記事は「ホール導入日は4月中旬予定」。
- 5号機クロニクルは2008/4導入。
- 本DBでは日精度の業界一次資料を優先し `2008-04-13` を採用。

## sources

取得日: 2026-09-01

1. グリーンべると「『お天気お姉さん』は音ゲー付きRTが魅力」
   - https://web-greenbelt.jp/00003439/
   - 2008-02-29
   - BIG約260枚、MIDDLE約190枚、ボーナス後33G CZ、BIG後RT期待約1/2、MIDDLE後約1/3、最大120GライブRT、純増約+0.25枚/G、120Gボーナス期待約45%、4/13納品開始
   - confidence: INDUSTRY
2. K-Navi 内覧会
   - https://p-kn.com/topics/exhibition/266/
   - 2008-02-28
   - バルテック、4月中旬ホール導入予定、ゲーム性概要
   - confidence: INDUSTRY / ANALYSIS_HIGH
3. P-WORLD「お天気お姉さん」
   - https://www.p-world.co.jp/machine/database/5121
   - RT機、BB353枚以上/MB254枚以上払い出し終了、BIG確率調査中
   - confidence: OLD_DB
4. 5号機クロニクル バルテック一覧
   - https://5goki.com/baltec
   - 2008/4導入、機械割 97.1 / 98.7 / 102.7 / 104.9 / 106.2 / 107.7%
   - confidence: ANALYSIS_SINGLE

## missingFields

- 設定別BIG/MIDDLE/合算確率: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- 設定変更/据え置き/電源OFF→ON時のCZ・RT状態処理: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## conflicts

- 現時点で主要性能値の明確な競合は未確認。
- 機械割は単一整理資料系列のため別ソース照合待ち。
