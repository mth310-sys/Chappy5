# パチスロ超時空要塞マクロス

machineName: パチスロ超時空要塞マクロス
manufacturer: SANKYO
releaseDate: 2010-11-15
releaseDateStatus: HALL_INTRODUCTION_DATE
releaseDateNote: K-Naviがホール導入開始2010-11-15と明記。SANKYO公式オンライン博物館は導入年月2010.11として整合する。
generation: 5号機
systemType: A+ART / セットストック型ART
formalModelName: 超時空要塞マクロスZG
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
coreStatus: PARTIAL_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前524「月面兎兵器ミーナ」を再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 524 / chronologicalFrontier 2010-11-14。
- handoff指定の2010-11-15同日群を監査し、repo code searchで本機名の既存レコードがないことを確認。
- K-Naviのホール導入開始2010-11-15とSANKYO公式の導入年月2010.11を照合し、525件目として追加。

## payoutRateBySetting

- 設定1: **96.8%**
- 設定2: **98.3%**
- 設定3: **100.1%**
- 設定4: **103.9%**
- 設定5: **107.7%**
- 設定6: **112.0%**

K-Navi、pacnkで完全一致。SANKYO公式オンライン博物館は機械割を掲載していないため、解析複数一致を主系列とする。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG合算
- 設定1: **1/428**（精密値 1/428.34）
- 設定2: **1/420**（1/420.10）
- 設定3: **1/412**（1/412.18）
- 設定4: **1/404**（1/404.54）
- 設定5: **1/399**（1/399.61）
- 設定6: **1/394**（1/394.80）

### ATTACK BONUS / REG相当
- 設定1: **1/648**（精密値 1/648.87）
- 設定2: **1/630**（1/630.15）
- 設定3: **1/612**（1/612.49）
- 設定4: **1/590**（1/590.41）
- 設定5: **1/560**（1/560.14）
- 設定6: **1/508**（1/508.03）

### ボーナス合算
- 設定1: **1/258**
- 設定2: **1/252**
- 設定3: **1/246**
- 設定4: **1/240**
- 設定5: **1/233**
- 設定6: **1/222**

### ボーナス＋ART合算
- 設定1: **1/111**
- 設定2: **1/107**
- 設定3: **1/103**
- 設定4: **1/96**
- 設定5: **1/91**
- 設定6: **1/83**

SANKYO公式オンライン博物館とK-NaviでBIG/RB相当・ボーナス合算・ボーナスART合算の系列一致。pacnkでBIG/REG精密値を照合。
ART単独初当たりの直接表は今回の高信頼資料から回収できず、合算値から逆算して作らない。
confidence: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

「パチスロ超時空要塞マクロス / 超時空要塞マクロスZG / SANKYO」と「50枚 / 1000円 / ベース / コイン持ち / 千円G数」を組み替え、メーカー公式、P-WORLD、K-Navi、パチマガスロマガ、pacnk、5号機回顧DB、当時実戦系を横断したが、比較可能な直接G/50枚値を確定できなかった。レビューの「コイン持ちが悪い」は定性情報のため数値化しない。
confidence: UNVERIFIED

## netIncrease

- ART「バルキリータイム」: **1セット50G**
- 純増: **約+1.5枚/G**
- 継続: セットストック型
- 「超時空モード」: **基本50G**、ARTストック高確率状態。終了後ARTへ突入。

SANKYO公式、P-WORLD、K-Navi、パチマガスロマガで整合。
confidence: OFFICIAL + MULTI_SOURCE_HIGH

## basicPayout

- PREMIUM BONUS（白7）: **約304枚**（360枚超払い出しで終了）
- 赤7 BIG: **約304枚**（360枚超払い出しで終了）
- 青7 BIG: **約206枚**（240枚超払い出しで終了）
- ATTACK BONUS: **約32枚**（4回入賞または4G消化で終了）

P-WORLD、パチマガスロマガで一致。SANKYO公式は「獲得枚数などの異なる5種類のボーナス」と説明。
confidence: ANALYSIS_HIGH_MULTI_SOURCE / OFFICIAL_SYSTEM_CONFIRMATION

## modeSpecificMinimumData

- 通常時にはART抽選期待度の異なる **通常 / 高確 / 超高確** の3内部モードが存在。
- ART「バルキリータイム」はセット間・通常からの突入時に数Gの潜伏を伴う場合がある。
- 天井: **ボーナス間またはART間888G消化で天井状態へ突入**。
- 天井状態では **ART大量ストック**。P-WORLDで直接確認。
- ペナルティにより888Gを超える場合がある。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名/型式名/SANKYOと「設定変更・リセット・朝一・設定変更時・RAMクリア」を組み替え、メーカー公式、P-WORLD、K-Navi、パチマガスロマガ、pacnk、当時/後年天井系資料まで再探索したが、本機固有の設定変更時処理を直接確定できる本文を回収できず。一般的5号機挙動から補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時にボーナス/ART間888Gカウンタ、通常/高確/超高確、ARTストック・潜伏を保持するかを直接確定できず。「宵越し可能」を裏づける本機固有高信頼資料を回収できなかった。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ON時の888G進捗、内部モード、ARTストック/潜伏の処理を直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井の基準「ボーナス間またはART間888G」は確定しているが、設定変更時のCLEAR/RETAINは十分な再探索後も確定できず。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH / STANDARD_COUNTER_BEHAVIOR_UNVERIFIED**。通常天井888Gは確定。設定変更専用の短縮天井・変更後専用G数は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常/高確/超高確3モードは存在するが、設定変更後の再抽選/固定モード/振り分け数値は確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ARTストック、潜伏、準備状態、超時空モード等の設定変更時処理を本機固有資料で確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の高確スタート、ARTストック、短縮天井、朝一当選優遇等の比較可能な公開恩恵を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更固有の公開不利数値を確認できず。888G進捗消失の有無自体が未確定なので不利と断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、ランプ、ゲーム数挙動等による本機固有の設定変更/据え置き判別を確定できず。

numericResetData:
- standardCeiling: **888G between bonus or ART -> ceiling state / ART large stock**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetHighStateProbability: **UNVERIFIED_AFTER_RESEARCH**
- morningHitProbability: **UNVERIFIED_AFTER_RESEARCH**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**

## conflicts

1. 後年「5号機クロニクル」の本機欄には、公式/K-Navi/pacnkと大きく異なるBIG/REG/ART初当たり系列や「超時空ライブ」「デカルチャンス」など後続マクロス系を混同したように見える記述が含まれる。公式SANKYOの2010機ページおよび当時K-Navi/P-WORLDと一致しないため、性能値の主系列には採用せず **CONFLICT / POSSIBLE_SERIES_CONTAMINATION** として隔離する。
2. 2026年の一部自動生成系回顧ページには本機を「6号機」と誤記する箇所がある一方、同ページ内で5号機とも記述している。P-WORLD・SANKYO公式年月・当時資料に従い本機は5号機として扱う。

## missingFields

- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- ART単独初当たり直接表: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset on setting change: UNVERIFIED_AFTER_RESEARCH
- mode/state after reset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- 公開朝一専用数値: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. SANKYOオンライン博物館「パチスロ 超時空要塞マクロス」 — 公式。導入年月2010.11、型式「超時空要塞マクロスZG」、設定別BIG/RB相当/ボーナス合算/ボーナスART合算、50G ARTの説明。
   - https://www.sankyo-fever.jp/collection/537/
   - confidence: OFFICIAL
2. K-Navi「パチスロ超時空要塞マクロス」 — ホール導入開始2010-11-15、設定別BIG/REG/合算/ボーナス+ART合算/機械割、ART概要。
   - https://p-kn.com/slot/1290/
   - confidence: ANALYSIS_HIGH
3. P-WORLD機種DB ID 6116 — 5号機/A+ART、獲得枚数、ART 50G/+1.5枚、3内部モード、ボーナス間またはART間888G天井とART大量ストック。
   - https://www.p-world.co.jp/machine/database/6116
   - confidence: ANALYSIS_HIGH
4. パチマガスロマガ「超時空要塞マクロス」基本システム — ART +1.5枚/G、ボーナス獲得枚数。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/22/a.php
   - confidence: ANALYSIS_HIGH
5. pacnk「パチスロ 超時空要塞マクロス 設定判別ツール」 — BIG/REG精密値、PAYOUT 96.8〜112.0%、888G天井の補助照合。
   - https://pacnk.com/slot/tools/sh_macross.html
   - confidence: ANALYSIS_SECONDARY
6. 5号機クロニクル SANKYO一覧 — 機械割のみ主系列と一致するが、確率/ゲーム性記述に後続機種混入疑義があるためCONFLICT検出用に限定。
   - https://5goki.com/sankyo
   - confidence: RETROSPECTIVE_LOW_FOR_THIS_RECORD
