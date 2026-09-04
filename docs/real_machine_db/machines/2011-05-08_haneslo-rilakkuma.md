# ハネスロ リラックマ

machineName: ハネスロ リラックマ
manufacturer: オーイズミ
formalModelName: ハネスロRK
releaseDate: 2011-05-08
releaseDateStatus: DELIVERY_START_EXACT_DATE / HALL_INTRODUCTION_2011-05-09

generation: 5号機
systemType: ボーナス主体 + 天井無限RT / 2リール+倍倍リール
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 569件目「ドラゴンギャル ～ルーと伝説の黄金龍～」（2011-05-06）から継続。
- グリーンべるとが、震災影響により本機の納品日を当初2011-04-17から**2011-05-08**へ延期したと明記。K-Navi/パチビーはホール導入開始を**2011-05-09**とする。
- 納品開始日とホール導入日を分離して保持し、本DB時系列キーは従来のdelivery-start exact date採用例に合わせ2011-05-08とした。

## payoutRateBySetting

- 設定1: **95.6%**
- 設定2: **97.8%**
- 設定3: **100.0%**
- 設定4: **104.2%**
- 設定5: **108.3%**
- 設定6: **113.0%**

中一商事の型式ハネスロRK機種概要と後年ハネスロシリーズ整理資料で一致。
confidence: ANALYSIS_SINGLE_CROSSCHECKED_SECONDARY

## initialHitBySetting

### ボーナス合算
- 設定1: **1/96**
- 設定2: **1/93**
- 設定3: **1/89**
- 設定4: **1/82**
- 設定5: **1/77**
- 設定6: **1/72**

中一商事の型式ハネスロRK資料。グリーンべると、K-Naviが設定1約1/96〜設定6約1/72の端値を照合。
confidence: INDUSTRY_ENDPOINTS_CROSSCHECKED / SECONDARY_FULL_TABLE

### ボーナス種別
K-Naviに1倍・2倍等の設定別確率表が存在するが、現存検索抜粋では全設定・全4種を一括して安全に取得できないため、物差しコアは比較可能な合算を主値として保存。細かな種別抽選は完全再現目的ではないため無理に補完しない。

## baseGamesPer50

- **32.30G〜35.87G / 1000円**

パチマガスロマガ本機専用解析。
confidence: ANALYSIS_HIGH

## netIncrease

- 天井/4倍BONUS後RT「リラックマタイム」: **約+0.4枚/G**
- 次回ボーナスまで継続する無限RT。

グリーンべると、P-WORLD、パチビーで一致。
confidence: INDUSTRY_HIGH_CROSSCHECKED

## basicPayout

- 1倍ボーナス: **60枚**
- 2倍ボーナス: **120枚**
- 3倍ボーナス: **180枚**
- 4倍ボーナス+RT: **240枚**

グリーンべると、P-WORLD、パチビーで一致。
confidence: INDUSTRY_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 2リール＋倍倍リール、通常時・ボーナス時とも目押し不要を特徴とするハネスロシリーズ第4弾。
- 通常ゲーム**222G**消化で天井無限RT「リラックマタイム」へ突入。
- RTは**約+0.4枚/G**、次回ボーナスまで継続。
- 4倍ボーナス終了後も同RTへ突入。
- 液晶に天井までの残りゲーム数を表示する「天井カウンタ」を搭載。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。本機名、型式ハネスロRK、オーイズミ、ハネスロシリーズと「設定変更 / リセット / 朝一 / 朝イチ / 天井 / 天井カウンタ」を組み替え、K-Navi、P-WORLD、パチマガスロマガ、業界記事、旧資料を再探索したが、設定変更時の222G天井進捗・天井カウンタ表示を直接説明する本機固有解析本文を確定できず。一般的なノーマル+RT機挙動から推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の222G天井ゲーム数/液晶カウンタが前日値を引き継ぐか、朝一表示上どのように扱うかを直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ON時の天井ゲーム数・液晶天井カウンタ・RT状態の扱いを本機固有資料で確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。天井そのものはボーナス後222Gと高信頼で確認済みだが、設定変更/据え置き/電源OFF→ON別のカウンタ処理は未確定。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH / BASE_CEILING_222G**。設定変更専用の短縮天井は確認されない。ただし通常の天井は222Gと極めて浅い。

modeAfterReset: **NOT_APPLICABLE_NO_LONG_TERM_MODE_CONFIRMED**。通常時の長期ゲーム数解除モードや朝一専用モードは確認されない。

stateAfterReset: **PARTIAL_NOT_APPLICABLE_FOR_NORMAL_PLAY / RT_STATE_POWER_RESET_UNVERIFIED**。通常時にホールAI向け長期内部状態は確認されないが、閉店時にRT中だった場合の設定変更/電源断後のRT扱いは直接資料未確定。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の天井短縮、高確スタート、当選率優遇は確認されない。

resetPenalties: **UNVERIFIED_DEPENDS_ON_CEILING_COUNTER_CLEAR_RETAIN**。222G天井が浅く朝一狙いへの影響が大きいため、設定変更で前日進捗が消えるなら不利だが、そのCLEAR/RETAIN自体を本機固有資料で確定できていないため推定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。液晶天井カウンタは通常時の残りGを表示する重要要素だが、設定変更/据え置きで表示がどう変化するか、ガックン・初期出目等による変更判別は直接根拠未確定。

numericResetData:
- 通常天井: **222G**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **NOT_APPLICABLE / NONE_CONFIRMED**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH_FOR_CHANGE_CARRYOVER_POWER_CYCLE / INDUSTRY_HIGH_FOR_BASE_CEILING_STRUCTURE**

## conflicts

- 導入時期は定義差あり。グリーンべると: 納品日を2011-05-08へ延期。K-Navi/パチビー: ホール導入開始2011-05-09。平均せず両方保持。
- 主要性能値の明確な数値CONFLICTは今回確認なし。

## missingFields

- settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset by reset condition: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

欠損判定前に「ハネスロ リラックマ / ハネスロリラックマ / ハネスロRK / オーイズミ / ハネスロシリーズ」と「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 222G / 天井短縮 / 天井カウンタ / ガックン / 50枚 / 1000円 / ベース」を組み替え、グリーンべると/P-WORLD業界ニュース、P-WORLD機種DB、K-Navi、パチビー、パチマガスロマガ、娯楽産業、旧実機DB/販売資料、後年回顧資料を横断。222G天井が浅くresetBehaviorの価値が高い機種なので特に再探索したが、CLEAR/RETAINを推測では埋めていない。

## sources — 取得日 2026-09-04

1. グリーンべると「オーイズミ『ハネスロ・リラックマ』が納品延期」
   - https://web-greenbelt.jp/00001917/
   - 当初2011-04-17から2011-05-08へ納品延期
   - confidence: INDUSTRY
2. P-WORLD業界ニュース転載「オーイズミ『ハネスロ・リラックマ』が納品延期」
   - https://news.p-world.co.jp/articles/4538/greenbelt
   - 納品延期の独立現存経路
   - confidence: INDUSTRY_REPRINT
3. グリーンべると/P-WORLD「国民的キャラ『リラックマ』がハネスロで登場」
   - https://news.p-world.co.jp/articles/4417/greenbelt
   - ボーナス合算端値、222G天井、RT約+0.4枚/G、60/120/180/240枚、天井カウンタ
   - confidence: INDUSTRY
4. P-WORLD「ハネスロ リラックマ」
   - https://www.p-world.co.jp/machine/database/6288
   - 5号機/ノーマル+RT構造、222G天井、RT約+0.4枚/G、各ボーナス獲得枚数
   - confidence: INDUSTRY_DATABASE
5. K-Navi「ハネスロリラックマ」
   - https://p-kn.com/slot/1389/
   - ホール導入開始2011-05-09、合算端値、222G天井、機種構造
   - confidence: ANALYSIS_HIGH
6. パチビー「ハネスロ リラックマ」
   - https://www.pachibee.jp/machines/index/211020007
   - 導入日2011-05-09、RT純増、各ボーナス獲得枚数
   - confidence: ANALYSIS_HIGH
7. パチマガスロマガ「1000円あたりのゲーム数」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/25/c.php
   - 32.30G〜35.87G/1000円
   - confidence: ANALYSIS_HIGH
8. 娯楽産業「オーイズミ パチスロ新機種『ハネスロRK』プレス発表会」
   - https://www.goraku-sangyo.com/%E3%82%AA%E3%83%BC%E3%82%A4%E3%82%BA%E3%83%9F%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%8F%E3%83%8D%E3%82%B9%E3%83%ADrk%E3%80%8D%E3%83%97%E3%83%AC%E3%82%B9/
   - 型式ハネスロRK、222G天井、RT約+0.4枚/G、設定6合算1/72、最高240枚
   - confidence: INDUSTRY
9. 中一商事「オーイズミ ハネスロ リラックマ」
   - https://www.nakaiti.com/html/sono0062.html
   - 型式ハネスロRK、設定別合算1/96〜1/72、機械割95.6〜113.0%、ボーナス仕様
   - confidence: SECONDARY_DATABASE

## status

- recordNumber: **570**
- chronologicalFrontier: **2011-05-08**
- frontierHallIntroductionDate: **2011-05-09**
- relayStatus: **READY_TO_CONTINUE**
