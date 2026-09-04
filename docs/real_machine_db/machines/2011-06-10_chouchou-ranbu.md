# 蝶々乱舞

machineName: 蝶々乱舞
manufacturer: オリンピア
releaseDate: 2011-06-10
releaseDateStatus: CONFLICT; HAZUSEは導入開始2011-06-10、K-Naviはホール導入開始2011-06-13、当時グリーンべるとは納品開始予定2011-06-19。日付定義を平均せず全て保持し、時系列BACKFILLキーは「導入開始」と明記するHAZUSEの2011-06-10を採用。
generation: 5号機
systemType: A+ART / ボーナス + 周期CZ + セットストックART
coreStatus: COMPLETE_CORE_WITH_RELEASE_DATE_CONFLICT; RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainの recordCount 585 / chronologicalFrontier 2011-06-27 から継続。
- LATEST_HANDOFFの2011年6月漏れ監査指示に従い、repo検索で「蝶々乱舞」が未登録であることを確認。
- HAZUSE 2011-06-10、K-Navi 2011-06-13、グリーンべると納品予定2011-06-19の差をCONFLICTとして保持し、586件目としてBACKFILL。
- 遡及追加のため chronologicalFrontier は2011-06-27のまま維持。

## settingConfiguration

- 設定1〜6の6段階。

## payoutRateBySetting

- 設定1: **96.9%**
- 設定2: **98.5%**
- 設定3: **100.1%**
- 設定4: **104.1%**
- 設定5: **108.1%**
- 設定6: **112.2%**

K-Navi・HAZUSEで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## bonusProbabilityBySetting

### BIG
- 設定1: **1/434.0**
- 設定2: **1/422.8**
- 設定3: **1/412.2**
- 設定4: **1/385.5**
- 設定5: **1/362.1**
- 設定6: **1/341.3**

### REG
- 設定1: **1/532.8**
- 設定2: **1/520.1**
- 設定3: **1/504.1**
- 設定4: **1/485.5**
- 設定5: **1/468.1**
- 設定6: **1/445.8**

### ボーナス合算
- 設定1: **1/239.2**
- 設定2: **1/233.2**
- 設定3: **1/226.8**
- 設定4: **1/214.9**
- 設定5: **1/204.2**
- 設定6: **1/193.3**

K-Navi・HAZUSEで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### ART初当たり
- 設定1: **1/372.7**
- 設定2: **1/336.0**
- 設定3: **1/332.1**
- 設定4: **1/277.8**
- 設定5: **1/255.1**
- 設定6: **1/167.1**

pacnkの設定判別DBと2011年当時のスペック転載値で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- 全設定共通: **30.49G / 1000円（50枚）**

パチマガスロマガ小役解析ページの直接掲載値。
confidence: ANALYSIS_HIGH

## basicPayout

- BIG: **約204枚**
- REG: **約30枚**
- 規定払い出し終了条件: BIG **297枚超** / REG **36枚超**
- ART「乱舞チャンス」: **約+1.5枚/G**
- 1セット: **33〜333G**（13段階）

P-WORLD、HAZUSE、K-Navi、当時グリーンべるとで整合。
confidence: HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 通常時は**33Gごとの周期CZ**で内部モード移行抽選。
- 内部モードは3種類。5の倍数周期は上位モードへ移行しやすい。
- **21周期目（661G以降）でREG成立 → 蝶々ゾーン確定**。
- **30周期目（957〜990G） → 超高確**。
- **990G + 前兆5G → ART当選確定**。実質天井。
- ボーナス/ART後は3周期（約99G）が引き戻し区間として重要。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED**。設定変更後も周期G数はクリアされず、ボーナス後相当の状態から開始するとの解析記述を回収。K-Naviにも本機専用「設定変更後の挙動」および「モード移行率(設定変更時)」解析項目が存在する。専用ページの数値本文は今回取得できないため、モード振り分けを推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の周期G数・内部モード・引き戻し状態について、本機固有の直接記述を別系統で確定できず。設定変更でも周期G数非クリアという情報から据え置きを自動推定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の周期G数・内部モード・引き戻し状態を本機固有資料で確定できず。

gameCounterReset: **RETAIN_ON_SETTING_CHANGE_CONFIRMED_BY_ANALYSIS_SOURCE**。設定変更後も周期G数はクリアされないとの記述あり。通常の周期天井は21周期REG条件 / 30周期超高確 / 990G+前兆5G ART確定。

ceilingAfterReset: **NO_SHORTENING_CONFIRMED; COUNTER_RETAINED**。変更専用の短縮天井数値は確認されず、周期G数は非クリアとの解析。通常天井数値を変更専用値とは扱わない。

modeAfterReset: **RESET/START_STATE_PARTIAL_CONFIRMED; NUMERIC_DISTRIBUTION_UNVERIFIED**。設定変更時専用のモード移行抽選が存在することをK-Navi目次で確認し、別解析ではボーナス後相当状態から開始と記載。具体的な設定別モード振り分けは本文取得不能のためUNVERIFIED。

stateAfterReset: **BONUS-END_EQUIVALENT_START_REPORTED; DETAILS_UNVERIFIED**。設定変更後はボーナス後の状態から開始するとの解析記述。引き戻しランプ・RT/ART準備状態等の詳細処理は確定しない。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **BONUS-END_EQUIVALENT_START_REPORTED; NO_SEPARATE_NUMERIC_BENEFIT_CONFIRMED**。ボーナス/ART後は3周期（約99G）が引き戻し上重要だが、設定変更時に同一恩恵が完全適用されるかの詳細数値は未回収のため、朝一99G恩恵を断定しない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。少なくとも周期G数消去による天井進捗喪失は、回収資料上は否定される。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、アーチランプ、7セグ表示等による設定変更/据え置き判別を本機固有資料で確定できず。

numericResetData:
- 通常周期: **33G**
- 21周期目: **661G以降のREGで蝶々ゾーン確定**
- 30周期目: **957〜990Gで超高確**
- 実質天井: **990G + 前兆5GでART確定**
- 設定変更時周期G数: **クリアされない（RETAIN）**
- 設定変更後開始状態: **ボーナス後相当との解析記述**
- 設定変更時モード振り分け: **UNVERIFIED_AFTER_RESEARCH（専用解析項目の存在のみ確認）**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 据え置き時周期/モード: **UNVERIFIED_AFTER_RESEARCH**
- 単純電源OFF→ON時周期/モード: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL; SETTING-CHANGE COUNTER RETENTION CONFIRMED, MODE/POWER-CYCLE/DETECTION PARTLY UNVERIFIED**

## conflicts

- releaseDate: **CONFLICT**
  - HAZUSE: 導入開始 **2011-06-10**
  - K-Navi: ホール導入開始 **2011-06-13**
  - グリーンべると: 納品開始予定 **2011-06-19**
  - 「導入」「ホール導入」「納品予定」の定義差を保持し、平均化しない。
- 主要性能コアはK-Navi/HAZUSE/P-WORLD等で実質一致。

## missingFields

- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- 設定変更時モード振り分け数値: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

「蝶々乱舞 / 蝶蝶乱舞 / オリンピア / 1S0080」と「導入 / 納品 / 機械割 / BIG / REG / ART初当り / 50枚 / 1000円 / 千円 / ベース / コイン持ち / 天井 / 周期 / 設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / ガックン / モード移行率」を組み替え、K-Navi、P-WORLD、HAZUSE、パチマガスロマガ、グリーンべると、古い設定判別DB、当時スペック転載・回顧資料を横断。主要性能、ベース、天井構造は複数系統で照合。設定変更時の周期G数非クリアとボーナス後相当開始は解析DBで回収したが、据え置き/電断/変更判別および設定変更時モード振り分けの具体値は十分な再探索後も直接確定できず推定補完しない。

## sources — 取得日 2026-09-04

1. K-Navi「蝶々乱舞」
   - https://p-kn.com/slot/1427/
   - ホール導入2011-06-13、設定別BIG/REG/合算、機械割、ART約+1.5枚/G・33〜333G、設定変更後の挙動/設定変更時モード移行率の専用解析項目の存在。
2. HAZUSE「蝶々乱舞」
   - https://hazuse.com/machine/pachislot/1S0080/
   - 導入開始2011-06-10、型式/検定番号、設定別BIG/REG/合算/機械割、周期CZ、天井構造、ART仕様。
3. P-WORLD「蝶々乱舞」
   - https://www.p-world.co.jp/machine/database/6357
   - BIG約204枚、REG約30枚、ART約+1.5枚/G、661G以降REG/957〜990G/990G+前兆5Gの天井構造。
4. グリーンべると「蝶々が飛べばARTをストック！」2011-05-12
   - https://web-greenbelt.jp/00002092/
   - 2011-06-19納品開始予定、ART33〜333G・約+1.5枚/G。
5. パチマガスロマガ「蝶々乱舞 小役確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/97/c.php
   - 1000円あたりゲーム数 全設定共通30.49G。
6. pacnk「蝶々乱舞 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_chouchouranbu.html
   - ART初当り設定1〜6、天井、設定変更後は周期G数非クリア/ボーナス後相当開始、7セグ周期確認情報。
7. 2011年当時スペック転載（楽天ブログ、2011-09-26）
   - https://plaza.rakuten.co.jp/x3esibm1/
   - BIG/REG/機械割/ART初当たり、払い出し終了条件の照合。

## confidenceSummary

- 導入日: **CONFLICT**
- BIG/REG/機械割: **ANALYSIS_HIGH_CROSSCHECKED**
- ART初当たり: **ANALYSIS_HIGH_CROSSCHECKED**
- baseGamesPer50: **ANALYSIS_HIGH**
- ART/天井: **HIGH_CROSSCHECKED**
- settingChange gameCounter: **ANALYSIS_SINGLE_DIRECT + DEDICATED_KNAVI_SECTION_EXISTENCE**
- resetBehavior全体: **PARTIAL_UNVERIFIED_AFTER_RESEARCH**
