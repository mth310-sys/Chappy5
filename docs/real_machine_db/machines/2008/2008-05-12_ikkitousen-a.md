# 一騎当千A

- machineName: 一騎当千A
- manufacturer: タイヨー
- modelName: 一騎当千A
- releaseDate: 2008-05-12
- releaseDateDefinition: ホール導入日。業界記事上の納品開始は2008-05-11。
- releaseDateConfidence: OLD_MACHINE_DB_EXACT_DATE_WITH_INDUSTRY_DELIVERY_CROSSCHECK
- generation: 5号機初期
- systemType: ボーナス + CZ + RTループ
- coreStatus: PARTIAL_CORE_INDIVIDUAL_BONUS_AND_BASE_UNVERIFIED
- resetBehaviorQA: PARTIAL
- acquiredAt: 2026-09-01

## 性能コア

### payoutRateBySetting

- `CONFLICT_PAYOUT_RATE`。平均化しない。
- 5号機クロニクル系列: `97.1 / 98.8 / 100.4 / 103.3 / 104.9 / 107.7%`。
- pacnk後年解析系列: `96.1 / 98.3 / 99.6 / 102.8 / 105.9 / 109.1%`。
- 差が設定1で1.0pt、設定6で1.4ptあり、丸め差とは扱わない。

### initialHitBySetting

- ボーナス合成: `1/197.4 / 1/190.5 / 1/184.1 / 1/172.5 / 1/162.2 / 1/153.1`（pacnk後年解析）。
- 当時業界記事は端数を丸めて設定1 `1/197.1` → 設定6 `1/153.1` と掲載。系列差は小さいが、設定1は定義/丸め差として併記。
- BIG/REG個別の全設定表は比較可能な旧資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。

### baseGamesPer50

- UNVERIFIED_AFTER_RESEARCH
- `一騎当千A / タイヨー / 赤パネル / Dragon Destiny` と `50枚 / 1000円 / ベース / コイン持ち / ベル確率` を変えて横断。ベル合成値は取得できたが、50枚ゲーム数へ逆算はせず直接値のみ採用する方針のため未確定。

### netIncrease

- RT「関羽雲長 千人斬り!!」は1セット7Gまたは77G。
- 1Gあたり約+0.4枚。グリーンべると当時記事は約+0.3〜0.4枚/G、P-WORLD/パチビーは約+0.4枚/G。
- 7G主体のループ率は当時記事で約80%。

### basicPayout

- BIG: 約300枚。中一商事実機資料では349枚超払い出し終了。
- REG: 約100枚。中一商事実機資料では153枚超払い出し終了。

### modeSpecificMinimumData

- 全ボーナス終了後にCZへ移行。
- CZ中リプレイ入賞→RT7G、スイカ入賞→RT77G、ベル入賞→通常状態。
- RT終了後もCZへ戻り、CZとRTをループ。
- 通常ゲーム1000G消化でCZへ突入する天井あり。P-WORLD、パチビー、中一商事で一致。
- P-WORLD/パチビーは複雑な内部モードなしと説明。

## resetBehavior

- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset: UNVERIFIED_AFTER_RESEARCH_1000G_CZ_CEILING
- ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH_NO_SHORTENING_VALUE_CONFIRMED
- modeAfterReset: NOT_APPLICABLE_COMPLEX_INTERNAL_MODE_NONE_CONFIRMED
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH_CZ_RT_STATE
- advantageousSectionReset: NOT_APPLICABLE
- resetBenefits: NONE_CONFIRMED
- resetPenalties: NONE_CONFIRMED
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- numericResetData: NORMAL_CEILING_1000G_TO_CZ_ONLY

### resetBehavior調査メモ

- `一騎当千A / 一騎当千A 赤パネル / タイヨー / 2008` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / 天井短縮 / 1000G / CZ / RT / ガックン / 初期出目` を組み替えて再探索。
- P-WORLD、パチビー、中古実機アーカイブ、当時グリーンべると、後年旧機種解析DBを横断し、通常時1000G→CZは複数ソースで確認。
- ただし設定変更時に1000Gカウンタがクリア/引継ぎされるか、リセット後短縮があるか、据え置き・電源OFF→ONでCZ/RT状態や残Gを保持するか、本機固有ガックン/初期出目等は直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- 現行スマスロ「真・一騎当千」の400Gリセット天井等は別機種のため一切流用しない。
- 朝一専用モード、設定変更専用恩恵/不利、1000G以外の公開朝一専用数値は `NONE_CONFIRMED`。

## 導入時期

- グリーンべると/P-WORLD業界ニュースは納品を2008-05-11からと明記。
- パチビーは導入日2008-05-12。
- 本DBは実ホール導入基準で `2008-05-12`、納品開始5/11を別定義で保持。

## sources

取得日: 2026-09-01

1. グリーンべると / P-WORLD業界ニュース「タイヨー、ARTループの『一騎当千』発表」
   - https://news.p-world.co.jp/articles/2748/greenbelt
   - RT/ART構造、A純増0.3〜0.4枚/G、ループ80%、BIG約300枚/REG約100枚、合算上下端、納品5/11
   - confidence: INDUSTRY_PRIMARY
2. パチビー「一騎当千A」
   - https://www.pachibee.jp/machines/about/211040011
   - 導入日2008-05-12、RT/CZ、約+0.4枚/G、1000GでCZ
   - confidence: OLD_MACHINE_DB
3. P-WORLD「一騎当千A」
   - https://www.p-world.co.jp/machine/database/5163
   - 5号機RT/CZ、BIG約300枚/REG約100枚、7/77G、約+0.4枚/G、1000G天井
   - confidence: OLD_MACHINE_DB
4. 5号機クロニクル「タイヨー5号機全機種一覧」
   - https://5goki.com/taiyo
   - 一騎当千Aを別掲載、2008/5、機械割97.1〜107.7%
   - confidence: RETROSPECTIVE_SPEC_DB
5. pacnk「一騎当千A 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_ikkitousena.html
   - 合算1/197.4〜1/153.1、機械割96.1〜109.1%、ベル関連解析
   - confidence: RETROSPECTIVE_ANALYSIS
6. 中一商事「タイヨー 一騎当千A」
   - https://www.nakaiti.com/html/sTaiyo005.html
   - 型式名、払い出し終了条件、RT構造、1000G天井
   - confidence: RETROSPECTIVE_MACHINE_ARCHIVE

## missingFields

- 設定別BIG/REG全表: UNVERIFIED_AFTER_RESEARCH
- 50枚ベース: UNVERIFIED_AFTER_RESEARCH
- 設定変更/据え置き/電源OFF→ON時の1000G天井・CZ・RT処理: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## conflicts

- CONFLICT_PAYOUT_RATE
- MINOR_COMBINED_PROBABILITY_SETTING1_1_OVER_197_1_VS_1_OVER_197_4
