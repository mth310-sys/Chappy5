# GETだ!BILLY

machineName: GETだ!BILLY
manufacturer: エレコ
formalModelName: GETだ！BILLY-B
inspectionNumber: 0S1131
releaseDate: 2011-03-22
releaseDateStatus: CONFLICT_EXACT_DATE_2011-03-22_VS_2011-03-18
releaseDateAlternates:
- 2011-03-22: パチ＆スロ必勝本（導入日）
- 2011-03-18: HAZUSE DATA（導入開始日）
generation: 5号機
systemType: ノーマルAタイプ / 完全告知 / 技術介入要素あり
coreStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_RESET_NOT_APPLICABLE_OR_UNVERIFIED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、561レコード「G-SPIN」を再取得して開始。
- 開始時正本は recordCount 561 / chronologicalFrontier 2011-03-22。
- LATEST_HANDOFF指定の2011-03-22同日群「G-SPIN / GETだ!BILLY / アイムジャグラーAPEX」を継続し、repo検索でGETだ!BILLY未登録を確認。
- パチ＆スロ必勝本は2011-03-22導入、HAZUSE DATAは2011-03-18導入開始と掲載。日付定義差を断定できないため平均化せずCONFLICTとして双方保持し、時系列本線では前リレーの2011-03-22同日群アンカーに従う。
- P-WORLDおよび必勝本は本機をボーナスのみで出玉を増やすノーマルタイプと明記。後年5号機クロニクルにある「BILLY RUSH」「ART純増約1.4枚/G」記述は同名機の実スペックと明確に矛盾するため性能コアから除外し、SOURCE_ERROR_OR_SERIES_CONTAMINATIONとして隔離する。

## payoutRateBySetting

- 設定1: **97.4%**
- 設定2: **99.5%**
- 設定3: **102.3%**
- 設定4: **105.6%**
- 設定5: **110.0%**
- 設定6: **115.1%**

P-WORLD、パチ＆スロ必勝本、HAZUSE DATAで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG
- 設定1: **1/278.9**
- 設定2: **1/269.7**
- 設定3: **1/257.0**
- 設定4: **1/243.6**
- 設定5: **1/225.2**
- 設定6: **1/206.7**

### REG
- 設定1: **1/428.3**
- 設定2: **1/402.1**
- 設定3: **1/374.5**
- 設定4: **1/346.8**
- 設定5: **1/319.7**
- 設定6: **1/293.6〜1/293.9**

REG設定6は必勝本/HAZUSEが1/293.6、P-WORLDが1/293.9。丸め/転記差の可能性があるため精密値を平均せず範囲保持。

### ボーナス合算
- 設定1: **1/168.9**
- 設定2: **1/161.4**
- 設定3: **1/152.4**
- 設定4: **1/143.1**
- 設定5: **1/132.1**
- 設定6: **1/121.4**

confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

「GETだ!BILLY / GETだ！BILLY-B / 0S1131 / エレコ」と「50枚 / G/50枚 / 1000円 / 千円あたり / ベース / コイン持ち」を組み替え、P-WORLD、必勝本、HAZUSE、K-Navi系検索、旧DB・回顧資料を横断したが、比較可能な直接値を確定できず。小役確率からの逆算は行わない。
confidence: UNVERIFIED

## netIncrease

- **NOT_APPLICABLE** — ノーマルAタイプ。ART/AT/RT純増を物差し項目として持たない。
- P-WORLDおよびパチ＆スロ必勝本が「ボーナスのみで出玉を増やすノーマルタイプ」と明記。

## basicPayout

- BIG: **最大311枚**（P-WORLD）
- REG: **最大104枚**（P-WORLD）
- HAZUSE配当表はBIG「344枚を超える払い出しで終了」、REG「105枚を超える払い出しで終了」と掲載しており、上記実獲得上限と定義を分けて保持。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 完全告知ノーマルAタイプ。
- ボーナスのみで出玉を増やす構成。
- 主要比較値は設定別BIG / REG / 合算 / 機械割。
- 有利区間制度導入前の5号機。

## resetBehavior — v0.7

settingChangeBehavior: **NO_SPECIAL_RESET_FEATURE_CONFIRMED / OTHERWISE_UNVERIFIED**。純ノーマル機として設定変更専用モード、CZ、ART、天井短縮等は確認されていない。設定変更そのもののRAM内部処理・成立役処理など実機完全再現用情報は収集対象外かつ直接資料未確認。

carryOverBehavior: **NO_PERSISTENT_MODE_OR_CEILING_CONFIRMED / OTHERWISE_UNVERIFIED**。本機に通常時モード・ART状態・ゲーム数天井は確認されず、ホール経営上の据え置き差を生む主要内部状態は確認できない。個別バックアップRAM挙動は断定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONにより客側の朝一狙いへ影響する本機固有挙動を確定できる資料なし。

gameCounterReset: **NOT_APPLICABLE_NO_CONFIRMED_GAME_COUNT_CEILING**。複数旧資料/天井DBで本機は天井なしとして扱われ、P-WORLD/必勝本の基本仕様にも天井機能を確認できない。前日ハマリG数を利用する天井狙い要素なし。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。設定変更専用短縮天井なし。

modeAfterReset: **NOT_APPLICABLE_NO_MODE_SYSTEM_CONFIRMED**。朝一専用モード、通常時モード移行システムは確認されず。

stateAfterReset: **NO_RESET_SENSITIVE_INTERNAL_STATE_CONFIRMED / OTHERWISE_UNVERIFIED**。高確/超高確/CZ/ART等の朝一収益へ影響する状態は確認されず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。リセット専用短縮天井、高確スタート、CZ優遇、朝一当選率等なし。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。前日天井進捗消失等の主要不利要素は、そもそも天井非搭載のため確認されない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、ランプ等によるGETだ!BILLY固有の設定変更判別法を、検索語・資料系統を変えても確定できず。

numericResetData: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **ANALYSIS_HIGH_FOR_NO_CEILING_AND_NO_MODE_FEATURE / UNVERIFIED_FOR_POWER_CYCLE_AND_DETECTION**

## conflicts

- releaseDate: **CONFLICT** — パチ＆スロ必勝本 2011-03-22 vs HAZUSE DATA 2011-03-18。平均化しない。
- REG設定6: **CONFLICT_ROUNDING** — 1/293.6（必勝本/HAZUSE）vs 1/293.9（P-WORLD）。
- systemType: **SOURCE_ERROR_OR_SERIES_CONTAMINATION** — P-WORLD/必勝本は純ノーマルAタイプ。5号機クロニクルの「BILLY RUSH」「ART純増約1.4枚/G」記述は本機の一次的スペック群と矛盾するため採用しない。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**
- 公開朝一数値: **NONE_CONFIRMED_AFTER_RESEARCH**

## sources — 取得日 2026-09-04

1. P-WORLD「GETだ!BILLY」
   - https://www.p-world.co.jp/machine/database/6247
   - 5号機ノーマル/完全告知/技術介入、型式GETだ！BILLY-B、検定0S1131、BIG/REG/合算、機械割、BIG最大311枚、REG最大104枚
   - confidence: INDUSTRY_DATABASE
2. パチ＆スロ必勝本「GETだ!BILLY 基本スペック」
   - https://p.hisshobon.jp/machine/1787/1/28368
   - 2011-03-22導入、設定別BIG/REG/合算、機械割、ボーナスのみのノーマルタイプ
   - confidence: ANALYSIS_HIGH
3. HAZUSE DATA「GETだ!BILLY」
   - https://data.hazuse.com/?machine_code=0S1432
   - 2011-03-18導入開始、設定別BIG/REG、機械割、配当終了条件
   - confidence: ANALYSIS_HIGH
4. パチスロ天井パラダイス 2011年導入機種一覧
   - https://sloten7.com/years/y2011/
   - GETだ!BILLY「天井なし」整理
   - confidence: SECONDARY_DATABASE
5. 樂都機種紹介PDF「GET!BILLY / GETだ!BILLY」
   - https://slotto.com.tw/data/attachment/product/202308/go3b589xd4.pdf
   - 導入年月2011/03、純A TYPE、天井非搭載の整理
   - confidence: SECONDARY_MACHINE_REFERENCE
6. 5号機クロニクル ユニバーサル系一覧
   - https://5goki.com/universal
   - 本機にART「BILLY RUSH」を記すが、P-WORLD/必勝本の純ノーマル仕様と矛盾。SOURCE_ERROR_OR_SERIES_CONTAMINATION確認用
   - confidence: RETROSPECTIVE_DATABASE_CONFLICT_ONLY

## status

- recordNumber: **562**
- chronologicalFrontier: **2011-03-22**
- relayStatus: **READY_TO_CONTINUE**
