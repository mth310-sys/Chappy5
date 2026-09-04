# パチスロ「モンキーターン」

machineName: パチスロ「モンキーターン」
manufacturer: 山佐
formalModelName: モンキーターン
inspectionNumber: 0S1073
releaseDate: 2011-03-07
releaseDateStatus: EXACT_HALL_INTRODUCTION_DATE_WITH_EARLIER_SOURCE_SEPARATED
releaseDateNote: K-Navi/パチビーはホール導入開始2011-03-07。HAZUSEは導入開始2011-03-04。当時記事には3月6日導入開始表記もある。平均せずSOURCE_DATE_DIFFERENCEとして保持し、本DB主値は複数機種DBで一致する2011-03-07。
generation: 5号機
systemType: ART専用 / ボーナス非搭載 / 規定ゲーム数モード + 自力CZ
coreStatus: COMPLETE_CORE_WITH_BASE_UNVERIFIED_AND_PAYOUT_CONFLICT_RESET_BEHAVIOR_HIGH

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、559レコード「テンションブースター」を再取得して開始。
- 開始時正本は recordCount 559 / chronologicalFrontier 2011-03-07。
- LATEST_HANDOFF最優先候補「パチスロ『モンキーターン』」をrepo突合し、未登録として2011-03-07同日群へ追加。
- HAZUSE=2011-03-04、当時記事=2011-03-06、K-Navi/パチビー=2011-03-07は日付定義差として分離し、平均しない。

## payoutRateBySetting

### 系列A — pacnk / みんスロ系
- 設定1: **96.9%**
- 設定2: **98.4%**
- 設定3: **100.5%**
- 設定4: **103.7%**
- 設定5: **107.8%**
- 設定6: **112.0%**

### 系列B — K-Navi
- 設定1: **97.9%**
- 設定2: **98.4%**
- 設定3: **100.5%**
- 設定4: **105.1%**
- 設定5: **108.2%**
- 設定6: **112.0%**

### 系列C — 後年回顧資料
- 設定1: **97.8%**
- 設定2: **98.4%**
- 設定3: **100.5%**
- 設定4: **105.1%**
- 設定5: **108.2%**
- 設定6: **112.0%**

設定1/4/5に明確な資料差があるため平均せずCONFLICTとして全系列を保存。
confidence: CONFLICT_HIGH_DOCUMENTED

## initialHitBySetting

### SG RUSH（ART）初当たり
- 設定1: **1/281.0**
- 設定2: **1/271.7**
- 設定3: **1/257.5**
- 設定4: **1/231.1**
- 設定5: **1/211.0〜1/211.1**
- 設定6: **1/188.2〜1/188.3**

pacnk、実機販売資料、後年整理資料で概ね一致。設定5/6の末尾差は丸め精度差として扱う。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

「50枚」「1000円」「1k」「ベース」「コイン持ち」「平均投資」と機種名/初代/山佐/型式名を組み替え、K-Navi、パチビー、HAZUSE、pacnk、後年解析、実機販売資料を横断したが、初代専用の比較可能な直接値を確定できず。シリーズ後継機の31G/32G/40G等は転用しない。小役確率から逆算しない。
confidence: UNVERIFIED

## netIncrease

- ART「SG RUSH」: **約+2.0枚/G（2.0枚以上表記あり）**
- 基本1セット: **50G+α**
- ゲーム数上乗せ型。1回の上乗せ最大300G。
- 全速モード: 上乗せ特化状態。K-Naviは10G or 20G継続を解析。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- ボーナス非搭載。
- 基本出玉単位はART「SG RUSH」1セット **50G+α × 約2.0枚/G**。
- 単純計算上の50G区間増加期待は約100枚だが、これは純増×G数からの計算値であり、実機公表の固定獲得枚数としては扱わない。

confidence: ANALYSIS_HIGH_FOR_ART_STRUCTURE

## modeSpecificMinimumData

- 通常時は規定ゲーム数管理の4モード。
- 通常A: 最大 **1280G**
- 通常B: 最大 **768G**
- 天国: 最大 **128G**
- 超天国: 最大 **32G**
- 規定ゲーム数到達でART「SG RUSH」へ。
- 自力CZ「超抜チャレンジ」もART突入経路として存在。
- 通常時のレア役からCZ抽選。
- 有利区間制度導入前の5号機。

## resetBehavior — v0.7

settingChangeBehavior: **CONFIRMED_MODE_RESELECTION_AND_ART_GAME_RESET**。設定変更後はART発動規定ゲーム数がリセットされ、通常A・通常B・天国のいずれかへモード再抽選。超天国へは設定変更から移行しない。

carryOverBehavior: **PARTIAL / GAME_PROGRESS_RETAINED_IN_PRACTICE_BUT_DIRECT_TABLE_NOT_RECOVERED**。当時のK-Navi実戦記事では朝一のゾーン挙動から設定変更/据え置きを推測する立ち回りが具体的に記され、据え置き時は前日ゲーム数・前日ゾーン位置を踏まえた判断が成立している。ただし、据え置き時の全内部状態・CZ状態までを直接列挙した仕様表は今回回収できていないため、ゲーム数/モード以外を断定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみで規定ゲーム数、モード、CZ/前兆状態がどこまで保持されるかを初代固有の直接資料で確定できず。設定変更挙動を電源OFF→ONへ流用しない。

gameCounterReset: **CLEAR_ON_SETTING_CHANGE**。後年解析整理資料で「設定変更でART発動G数リセット」を確認。設定変更後は新たなモード抽選に基づく規定ゲーム数管理へ移る。

ceilingAfterReset: **NO_FIXED_RESET_SHORTENED_CEILING; MODE_DEPENDENT**。設定変更専用512G等の固定短縮天井は初代では確認されない。設定変更後のモード抽選により、天国選択なら128G以内、通常Bなら最大768G、通常Aなら最大1280G。超天国32Gは設定変更から選択されない。

modeAfterReset: **CONFIRMED_WITH_NUMERIC_TABLE**。
- 設定1〜3: 通常A **37.50%** / 通常B **37.50%** / 天国 **25.00%**
- 設定4〜6: 通常A **33.33%** / 通常B **33.33%** / 天国 **33.34%**
- 超天国: **0%（設定変更からは移行しない）**
K-Navi自社調べ。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。CZ高確等を含む短期内部状態の設定変更時初期化/再抽選を、今回取得できた資料だけでは安全に確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits:
- **設定1〜3でも25%、設定4〜6では約33.34%で天国モードへ移行**し、天国なら128GまでにART発動。
- 前日深ハマりを引き継ぐ恩恵ではなく、設定変更によるモード再抽選で早い当選ゾーンを得る可能性がある。

resetPenalties:
- **前日のART発動規定ゲーム数進捗は設定変更で消失**。
- 前日が深いゲーム数まで進んでいた場合、宵越し天井狙いの価値を失う。

resetDetection: **ZONE_BEHAVIOR_BASED_INFERENCE_CONFIRMED / GACKUN_UNVERIFIED**。K-Naviの当時実戦記事では、朝一128Gまでの優出モード突入や、ゾーン外での優出モード挙動を用いて変更/据え置きを推測する立ち回りが記載されている。ただし確定判別ではなく推測要素。ガックン、初期出目、ランプによる初代固有の直接判別法は再探索後も確定できず。

numericResetData:
- 設定1〜3: 通常A 37.50% / 通常B 37.50% / 天国 25.00%
- 設定4〜6: 通常A 33.33% / 通常B 33.33% / 天国 33.34%
- 設定変更から超天国: 0%
- 天国最大: 128G
- 通常B最大: 768G
- 通常A最大: 1280G

resetBehaviorConfidence: **ANALYSIS_HIGH_FOR_MODE_RESELECTION_AND_GAME_RESET / PARTIAL_FOR_CARRYOVER / UNVERIFIED_FOR_POWER_CYCLE_AND_SHORT_STATE**

## conflicts

- release chronology: **SOURCE_DATE_DIFFERENCE**。HAZUSE=2011-03-04、当時記事=2011-03-06、K-Navi/パチビー=2011-03-07。平均せず全て保持。
- payoutRateBySetting: **CONFLICT**。設定1=96.9/97.8/97.9、設定4=103.7/105.1、設定5=107.8/108.2。設定2/3/6は主要資料で一致。平均化しない。
- ART純増は「約2.0枚/G」と「2.0枚以上/G」の表現差。固定精密値として扱わず約2.0枚/Gを物差し値とする。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- stateAfterReset詳細: **UNVERIFIED_AFTER_RESEARCH**
- resetDetectionのガックン/初期出目: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehaviorの全内部状態: **PARTIAL_AFTER_RESEARCH**

## sources — 取得日 2026-09-04

1. K-Navi「パチスロ『モンキーターン』」
   - https://p-kn.com/slot/1364/
   - ホール導入開始2011-03-07、ART約2枚/G、50G、攻略・朝一項目、当時のリセット/据え置き実戦記事
   - confidence: ANALYSIS_HIGH
2. K-Navi「モード移行率(設定変更後)」
   - https://p-kn.com/slot/1364/29944/
   - 設定変更後の通常A/B/天国振り分け、超天国非選択
   - confidence: ANALYSIS_HIGH_NUMERIC
3. K-Navi「機械割&期待収支」
   - https://p-kn.com/slot/1364/29717/
   - 機械割系列B
   - confidence: ANALYSIS_HIGH
4. pacnk「パチスロ『モンキーターン』」
   - https://pacnk.com/slot/2011/monkeyturn/top.php
   - ART初当たり、機械割系列A、通常A/B/天国/超天国最大G数
   - confidence: ANALYSIS_HIGH
5. パチビー 機種情報
   - https://www.pachibee.jp/machines/about/212050004
   - 導入日2011-03-07、ボーナス非搭載ART、約2.0枚/G、50G+α
   - confidence: INDUSTRY_DATABASE
6. HAZUSE
   - https://hazuse.com/machine/pachislot/0S1073/
   - 型式名モンキーターン、検定番号0S1073、導入開始2011-03-04
   - confidence: HISTORICAL_DATABASE
7. 2-9伝説「モンキーターン」
   - https://29den.com/monkeyturn/
   - モード別天井、設定変更でART発動G数リセット、機械割系列C
   - confidence: ANALYSIS_SECONDARY
8. みんスロ「モンキーターン」
   - https://minslo.com/%E3%83%A2%E3%83%B3%E3%82%AD%E3%83%BC%E3%82%BF%E3%83%BC%E3%83%B3/
   - 導入日、ART初当たり、機械割系列A、1280G天井、純増2.0枚
   - confidence: SECONDARY_DATABASE
9. パチスロわっしょい 実機販売資料
   - https://www.pachislowasshoi.jp/smp/item/yamasa-slot0015.html
   - ART初当たり、約2.0枚/G、50G+α、上乗せ構造
   - confidence: SECONDARY_CROSSCHECK
10. 当時パチスロ攻略ブログ（2011-02-01）
   - https://blog.livedoor.jp/pachisurohakase/archives/2375895.html
   - 3月6日導入開始表記、ART2.0枚超、50G、モード最大G数、CZ概要
   - confidence: PERIOD_SECONDARY

## recordStatus

**COMPLETE_CORE_WITH_BASE_UNVERIFIED_AND_PAYOUT_CONFLICT_RESET_BEHAVIOR_HIGH**
