# 大逆転

machineName: 大逆転
manufacturer: ラスター（開発・発表: ウィンネットテクノロジー）
releaseDate: 2011-06-27
releaseDateStatus: INDUSTRY_EXACT_DATE; K-Navi当時展示会資料が「ホールへの導入は6月27日からを予定」と明記。後年DBみんスロも2011-06-27で一致。
generation: 5号機
systemType: ボーナス非搭載 / 押し順ART特化 / CZ
coreStatus: COMPLETE_CORE_WITH_NET_INCREASE_CONFLICT_AND_RESET_BEHAVIOR_UNVERIFIED

## chronologyNote

- 最新mainの recordCount 583 / chronologicalFrontier 2011-06-27 から継続。
- 2011-06-27同日群を監査し、直前HANDOFF最優先候補「大逆転」が未登録であることを確認。
- 「パチスロ 笑ゥせぇるすまん」は2011年6月導入までは確認したが、今回の再探索でも6月27日以前と確定できる具体日を得られなかったため、時系列を推測して先行挿入しない。
- K-Navi当時展示会資料が大逆転のホール導入を2011-06-27からと明記するため584件目として追加。

## settingConfiguration

- **設定1 / 設定3 / 設定4 / 設定6 の4段階**。
- P-WORLD、パチマガスロマガ、当時実践資料で一致。
- 後年みんスロは同じ4スペックを1/2/3/4と連番表記しているため、本DBでは設定番号ソースとして採用しない。

## payoutRateBySetting

- 設定1: **92.0%**
- 設定3: **96.0%**
- 設定4: **100.0%**
- 設定6: **106.6%**

P-WORLD、パチマガスロマガ、当時実践資料で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### ART 555G
- 設定1: **1/937**
- 設定3: **1/807**
- 設定4: **1/699**
- 設定6: **1/553**

### ART 1300G
- 設定1: **1/2175**
- 設定3: **1/1876**
- 設定4: **1/1625**
- 設定6: **1/1289**

P-WORLD、パチマガスロマガ、当時実践資料で照合。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **約32G / 50枚**

後年DBみんスロの直接掲載値。今回、別系統の直接数値は確定できなかったため単一二次資料扱い。小役確率から逆算しない。
confidence: ANALYSIS_SINGLE

## netIncrease — CONFLICT

- P-WORLD: **約+1.9枚/G**
- パチマガスロマガ: **約+1.9枚/G**
- 当時実践資料: **約+1.8〜1.9枚/G**
- 後年DBみんスロ: **約+1.8枚/G**

平均化せず、主系列は複数資料一致の約+1.9枚/G、1.8枚/G系をCONFLICTとして保持。
confidence: CONFLICT_MINOR_RANGE

## basicPayout

- 順押しART: **555G / 約1000枚**
- 逆押しART: **1300G / 約2500枚**
- ボーナス: **非搭載**
- ART中のゲーム数上乗せ・セット上乗せ: **なし**

業界発表、P-WORLD、K-Navi、パチマガスロマガで整合。
confidence: INDUSTRY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData

- 「大・逆・転」リプレイ入賞でARTへ突入。
- 順押し入賞なら555G、逆押し入賞なら1300G。
- 通常時に1玉リプレイ入賞でCZへ、CZ中に2玉リプレイ入賞で超CZへ移行。
- CZ / 超CZは8枚役取りこぼしで通常へ転落。
- K-Navi解析の超CZ中ART期待度: 順押し約20%、逆押し約8%。
- 天井: **非搭載を確認**。後年DBでもゲーム数天井非搭載。
- 長期ゲーム数解除モード: **確認されず**。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名、ラスター、ウィンネット、大逆転、設定変更、リセット、朝一、据え置き、電源OFF/ON、CZ、RT/ART状態、ガックン等へ検索語を変更し、業界記事、P-WORLD、K-Navi、パチマガスロマガ、旧実践/回顧資料を横断したが、設定変更時のCZ/超CZ・内部RT状態等の専用処理を直接説明する本機固有資料を確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のCZ/超CZ・内部RT状態保持について本機固有の直接資料を確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ON時のCZ/超CZ・内部RT状態処理を直接確定できず。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING**。本機はゲーム数天井非搭載で、ART当選を目的とする規定ゲーム数カウンタも確認されないため、ホール経営上の「前日天井進捗」リセット/引継ぎ問題は非該当。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING**。通常天井自体が非搭載。設定変更専用短縮天井も非該当。

modeAfterReset: **NO_LONG_TERM_GAME_COUNT_MODE_CONFIRMED; CZ/RT_STATE_RESET_BEHAVIOR_UNVERIFIED_AFTER_RESEARCH**。規定ゲーム数モードは確認されない。一方、遊技状態としてCZ/超CZ/RT状態が存在するため、その設定変更時処理は推測しない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。CZ / 超CZ / RT状態の設定変更時処理を直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。天井非搭載で、設定変更専用の短縮・朝一優遇数値も確認できず。ただし「恩恵が存在しない」と一般則から断定せず、公開確認できた主要恩恵なしとして扱う。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。前日天井進捗消失は天井非搭載のため非該当。CZ/RT状態消失等は未確認のため断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、ランプ、CZ状態等による設定変更/据え置き判別を本機固有資料で確定できず。

numericResetData:
- 通常ゲーム数天井: **NOT_APPLICABLE / 非搭載**
- リセット専用短縮天井: **NOT_APPLICABLE**
- 設定変更時モード振り分け: **NOT_APPLICABLE_NO_GAME_COUNT_MODE / CZ-RT STATE VALUES UNVERIFIED**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時CZ/RT状態: **UNVERIFIED_AFTER_RESEARCH**
- 据え置き時CZ/RT状態: **UNVERIFIED_AFTER_RESEARCH**
- 単純電源OFF→ON時CZ/RT状態: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL_BY_NON_APPLICABILITY; NO CEILING/GAME-COUNT MODE CONFIRMED, CZ/RT RESET/CARRYOVER/POWER-CYCLE/DETECTION UNVERIFIED_AFTER_RESEARCH**

## conflicts

1. **ART純増**
   - P-WORLD / パチマガスロマガ: 約+1.9枚/G
   - みんスロ: 約+1.8枚/G
   - 当時実践資料: 1.8〜1.9枚/G
   - `CONFLICT_MINOR_NET_INCREASE_RANGE`。平均化しない。
2. **後年みんスロの設定番号表記**
   - みんスロは4スペックを設定1/2/3/4と表記。
   - P-WORLD、パチマガスロマガ、当時実践資料は設定1/3/4/6。
   - 確率列の並び自体は概ね対応するため、本DBは複数当時系資料一致の1/3/4/6を採用し、みんスロの設定番号は採用しない。

## missingFields

- 型式名 / 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- baseGamesPer50の別系統照合: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior for CZ/RT state: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior for CZ/RT state: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

「大逆転 / 大逆転 ラスター / ウィンネット / WIN NET TECHNOLOGY」と「導入 / 型式 / 検定 / 機械割 / ART555 / ART1300 / 50枚 / 1000円 / ベース / 純増 / 天井 / 設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / CZ / RT / 状態 / ガックン」を組み替え、K-Navi、P-WORLD、パチマガスロマガ、当時業界記事、当時実践資料、後年DBを横断。性能コアは50枚ベースの複数照合と型式名を除き回収。純増は1.8枚/Gと1.9枚/G系があるためCONFLICT。resetBehaviorは天井・長期ゲーム数モード非搭載というホール経営上重要な非該当点を確定した一方、CZ/RT状態の設定変更・据え置き・単純電断処理は本機固有資料を確定できなかったため推測補完しない。

## sources — 取得日 2026-09-04

1. K-Navi「パチスロ新機種『大逆転』プレス発表会」
   - https://p-kn.com/topics/exhibition/792/image/
   - ホール導入2011-06-27予定、CZ/超CZ、555G/1300G ART、約2500枚等。
2. K-Navi「大逆転 チャンスゾーン(CZ)」
   - https://p-kn.com/slot/1424/31652/
   - CZ/超CZの突入・転落条件、超CZ中ART期待度（順約20% / 逆約8%）。
3. P-WORLD「大逆転」
   - https://www.p-world.co.jp/machine/database/6372
   - 5号機ART・ボーナス非搭載、純増約1.9枚/G、555G/1300G、約1000/2500枚、設定1/3/4/6のART確率・機械割。
4. パチマガスロマガ「大逆転 ボーナス抽選確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/12/h.php
   - 設定1/3/4/6のART555G・ART1300G確率、PAYOUT。
5. パチマガスロマガ「大逆転 基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/winnet_slot/12/a.php
   - 約1.9枚/G、555G/1300G、約1000/2500枚、上乗せなし、CZ構造。
6. 娯楽産業「ウィンネット パチスロ新機種『大逆転』発表」2011-05-10
   - https://www.goraku-sangyo.com/%E3%80%90%E5%8B%95%E7%94%BB%E3%81%82%E3%82%8A%E3%80%91%E3%82%A6%E3%82%A3%E3%83%B3%E3%83%8D%E3%83%83%E3%83%88%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E5%A4%A7/
   - ウィンネットテクノロジー発表、1000枚/2500枚、555G/1300G、一発逆転タイプ。
7. グリーンべると「ワンチャンス2500枚の『大逆転仕様』を実現」2011-05-11
   - https://web-greenbelt.jp/00002095/
   - ボーナス非搭載ART特化、555G約1000枚/1300G約2500枚。
8. みんスロ「大逆転」
   - https://minslo.com/%E5%A4%A7%E9%80%86%E8%BB%A2/
   - 2011-06-27、50枚32G、純増1.8枚/G、天井非搭載。ただし設定番号を1/2/3/4と連番化しており、設定番号は採用しない。
9. 槍のスロ日記「大逆転 実践レポ+スペック情報」
   - https://ameblo.jp/readfang/entry-10937643764.html
   - 当時実践資料。設定1/3/4/6、ART確率、PAYOUT、純増1.8〜1.9枚/Gを補助照合。

## quality

- coreDataConfidence: **ANALYSIS_HIGH_CROSSCHECKED; BASE_SINGLE; NET_INCREASE_CONFLICT_MINOR**
- resetBehaviorConfidence: **PARTIAL / NON-APPLICABLE GAME-COUNT CEILING CONFIRMED; CZ-RT RESET DETAILS UNVERIFIED_AFTER_RESEARCH**
- retrievedAt: **2026-09-04**
