# 一騎当千

- machineName: 一騎当千
- manufacturer: タイヨー
- releaseDate: 2008-05-12
- releaseDateDefinition: ホール導入日。業界記事上の納品開始は2008-05-11。
- releaseDateConfidence: OLD_MACHINE_DB_EXACT_DATE_WITH_INDUSTRY_DELIVERY_CROSSCHECK
- generation: 5号機初期
- systemType: ボーナス + CZ + RT/ARTループ
- coreStatus: PARTIAL_CORE_INDIVIDUAL_BONUS_AND_BASE_UNVERIFIED
- resetBehaviorQA: PARTIAL
- acquiredAt: 2026-09-01

## 性能コア

### payoutRateBySetting

- `CONFLICT_PAYOUT_RATE`。平均化しない。
- 5号機クロニクル系列: `96.9 / 98.3 / 99.8 / 102.4 / 104.9 / 107.4%`。
- 後年解析DBには `96.1 / 98.3 / 99.6 / 102.8 / 105.9 / 109.1%` 系列があり、兄弟機Aとの混同可能性もあるため別系列として保持。

### initialHitBySetting

- ボーナス合成確率は当時業界記事で設定1 `1/197.1` → 設定6 `1/153.1`。
- 設定4以外は兄弟機「一騎当千A」と同じと当時記事に明記。
- 設定別BIG/REG内訳は、表記揺れ・タイヨー・Dragon Destiny・青パネル・BIG/REG/合算を変え、当時業界・旧DB・後年DBを横断したが比較可能な全設定表を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### baseGamesPer50

- UNVERIFIED_AFTER_RESEARCH
- `一騎当千 / Dragon Destiny / タイヨー / 青パネル` と `50枚 / 1000円 / ベース / コイン持ち / 小役確率` を組み替えて再探索したが比較可能値を確定できず。

### netIncrease

- ボーナス後CZ中、リプレイ入賞で7G、スイカ入賞で77GのRT/ART「関羽雲長 千人斬り!!」へ移行。
- 規定G終了後はCZへ戻り、CZ中にベルが成立するまでループ。
- 当時業界記事: 7G主体のループ率約85%、1Gあたり純増約+1.0枚。

### basicPayout

- BIG: 約238枚。
- REG: 約90枚。
- 兄弟機AはBIG約300枚/REG約100枚であり、混同しない。

### modeSpecificMinimumData

- ボーナス終了後はART/RT抽選CZへ移行。
- CZ中リプレイ→7G、スイカ→77G、ベル→通常状態。
- 通常時1000G消化でCZへ入る天井系仕様は兄弟機Aで現存DBに明記され、初代2仕様が基本ゲーム性共通とされる。ただし青パネル側の独立一次記述を今回確定できなかったため、本レコードでは天井存在を `PARTIAL_CROSS_MODEL_COMMON_SYSTEM` として扱い、リセット時の扱いは推測しない。

## resetBehavior

- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset: UNVERIFIED_AFTER_RESEARCH_1000G_CZ_CEILING
- ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset: NOT_APPLICABLE_COMPLEX_INTERNAL_MODE_NONE_CONFIRMED
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH_CZ_RT_STATE
- advantageousSectionReset: NOT_APPLICABLE
- resetBenefits: NONE_CONFIRMED
- resetPenalties: NONE_CONFIRMED
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- numericResetData: NONE_CONFIRMED

### resetBehavior調査メモ

- `一騎当千 / 一騎当千 Dragon Destiny / タイヨー / 青パネル` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / 天井 / 1000G / CZ / RT / ART / ガックン / 初期出目` を組み替えて再探索。
- 現行スマスロ「真・一騎当千」のリセット情報が大量に混入するため、2008年・タイヨー・初代に限定し、後継機の数値は採用していない。
- 設定変更時に1000G系CZ天井カウンタがクリア/引継ぎ/短縮されるか、据え置き・電断でCZ/RT状態を保持するか、本機固有ガックン/初期出目は直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用モード・設定変更専用恩恵/不利・公開朝一数値は `NONE_CONFIRMED`。

## 導入時期

- グリーンべると/P-WORLD業界ニュース（2008-03-28）は『一騎当千』『一騎当千A』の納品を2008-05-11からと明記。
- 後年機種DBはホール導入日を2008-05-12とする。DB主日付は実ホール導入基準で5/12、納品開始5/11を別定義で保持。

## sources

取得日: 2026-09-01

1. グリーンべると / P-WORLD業界ニュース「タイヨー、ARTループの『一騎当千』発表」
   - https://news.p-world.co.jp/articles/2748/greenbelt
   - 2008-03-28、2仕様、ART/RT構造、純増、ループ率、獲得枚数、合算、納品5/11
   - confidence: INDUSTRY_PRIMARY
2. 5号機クロニクル「タイヨー5号機全機種一覧」
   - https://5goki.com/taiyo
   - 2008/5、一騎当千/一騎当千Aを別機種掲載、設定別機械割
   - confidence: RETROSPECTIVE_SPEC_DB
3. パチナビ「パチスロ 一騎当千（初代）」
   - https://pachinavi.net/machines/ikkitousen/
   - 導入日2008-05-12、初代識別、後年解析系列
   - confidence: RETROSPECTIVE_ANALYSIS_MEDIUM
4. A-SLOT 一騎当千A 実機資料
   - https://www.a-slot.com/SHOP/taiyo_elec4.html
   - 初代2仕様のCZ/RT共通構造の補助照合
   - confidence: RETROSPECTIVE_MACHINE_ARCHIVE

## missingFields

- 設定別BIG/REG全表: UNVERIFIED_AFTER_RESEARCH
- 50枚ベース: UNVERIFIED_AFTER_RESEARCH
- 設定変更/据え置き/電源OFF→ON時の1000G天井・CZ・RT状態処理: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## conflicts

- CONFLICT_PAYOUT_RATE
