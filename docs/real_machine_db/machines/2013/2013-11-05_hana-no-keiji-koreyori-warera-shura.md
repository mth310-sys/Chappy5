# 戦国パチスロ 花の慶次～これより我ら修羅に入る～

machineName: 戦国パチスロ 花の慶次～これより我ら修羅に入る～
aliases: 花の慶次2 修羅 / 花の慶次 修羅
manufacturer: ニューギン
releaseDate: 2013-11-05
releaseDatePrecision: exact_day
modelName: 花の慶次～これより我ら修羅に入る～Y
inspectionNumber: 3S0615

generation: 5号機
systemType: AT / 擬似ボーナス / CZ / ゲーム数・モード管理 / 保留玉抽選
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_WITH_CONFLICTS

## identity

- HAZUSEで型式名「花の慶次～これより我ら修羅に入る～Y」、検定番号3S0615、導入開始日2013-11-05、メーカー・ニューギンを確認。
- K-Naviでもホール導入開始2013-11-05を確認。
- パチマガスロマガ公式系アーカイブではニューギン/2013年11月、AT機として確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

### 主系列（当時K-Navi掲載）

| 設定 | 機械割 |
|---|---:|
| 1 | 97% |
| 2 | 99% |
| 3 | 101% |
| 4 | 104% |
| 5 | 107% |
| 6 | 112% |

### 競合系列（後年解析整理）

| 設定 | 機械割 |
|---|---:|
| 1 | 96.82% |
| 2 | 99.54% |
| 3 | 100.87% |
| 4 | 102.79% |
| 5 | 105.73% |
| 6 | 109.71% |

- 設定4～6で単純な丸め差を超える差があるため平均せずCONFLICTとして両系列を保持。
- confidence: CONFLICT

## initialHitBySetting

### AT初当たり

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/298（精密値1/297.53の資料あり） |
| 2 | 1/282（1/282.27） |
| 3 | 1/269（1/268.74） |
| 4 | 1/252（1/252.03） |
| 5 | 1/238（1/237.71） |
| 6 | 1/205（1/205.01） |

- K-Navi / HAZUSEの丸め値と解析整理資料の精密値は整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 50枚あたりの比較可能なベース値は、機種名・型式・「50枚」「1000円」「コイン持ち」「ベース」等で資料系統を変えて再探索したが、安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 2023年スマスロ「佐渡攻めの章」の33.5G/50枚は別機種のため混入させない。

## netIncrease

- AT「黎明の刻」: **純増約2.8枚/G**。
- 1セット初期ゲーム数: **20～100G以上**。戦鬼 / 修羅の2モード。
- パチマガスロマガ / P-WORLDで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 擬似ボーナス「大攻城戦BONUS」: **約100枚**。
- P-WORLDでは34G継続・純増約2.8枚/Gの擬似ボーナスとして整理。
- AT「黎明の刻」: 1セット20～100G以上 / 純増約2.8枚/G。
- confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時モード: **通常 / チャンス / 天国**。
- 天国モードは**128G以内のAT当選確定**。
- 通常時はゲーム数解除、保留玉解除、CZ「傾奇ブレイク」からATを目指す。
- 通常モード全移行テーブルは完全再現用のため収集対象外。
- confidence: ANALYSIS_HIGH

## ceiling

- 通常時最大 **1400G** でAT当選。
- 1400G到達時は **修羅100G確定**。
- 別解析ではチャンス1280G / 天国128Gのモード別天井記載あり。
- 設定変更後は天井までのゲーム数がリセットされる。
- confidence: ANALYSIS_HIGH

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__RESET_GAMECOUNT_AND_HOLD_RESELECTION_CONFIRMED__POWER_CYCLE_GAMECOUNT_CONFIRMED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は**天井までのゲーム数をリセット**。
- **保留玉を再抽選**。
- 設定変更時の保留玉は「設定」と「初回規定ゲーム数が128G以内か129G以上か」を参照して振り分け。
- 設定変更時のモード自体は当時必勝本資料で「調査中」。モード再抽選の具体契約は今回固定せず **UNVERIFIED_AFTER_RESEARCH**。

### carryOverBehavior

- 据え置き時は後年備忘録で「保留玉再抽選」の実戦整理あり。
- また前日+当日ゲーム数位置で前兆発生との実戦観測があるが、メーカー/高信頼解析による天井G完全保持契約としては今回固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き内部モードの完全保持契約も **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更なしの電源OFF→ONでは、必勝本解析で**天井までのゲーム数を引き継ぐ**ことを確認。
- モードは当時資料で「調査中」。
- 保留玉は**実戦上、引き継ぐ**と記載。
- よって power OFF→ON only の game count は KEEP_CONFIRMED、hold state は KEEP_OBSERVED、mode は UNVERIFIED。

### gameCounterReset

- setting change: **RESET_CONFIRMED**。
- carry-over: **UNVERIFIED_AFTER_RESEARCH**（実戦上の宵越し示唆あり）。
- power OFF→ON only: **KEEP_CONFIRMED**。

### ceilingAfterReset

- 設定変更後は通常1400G天井そのものではなく、後年攻略整理で**1280G天井**とする資料あり。
- 必勝本は設定変更時の天井Gリセットまでは直接確認できるが、1280G短縮の明示は今回取得資料で単一系統。
- したがって reset-specific ceiling shortening は **1280G_ANALYSIS_SINGLE** として保持。
- 通常最大1400G到達時の修羅100G確定とは定義を分離。

### modeAfterReset

- 設定変更時モード: **UNVERIFIED_AFTER_RESEARCH**。
- 必勝本当時資料では「現在調査中」。
- 天国モード通常仕様は128G以内当選確定だが、設定変更時の天国選択率は今回安全に固定できず未収録。

### stateAfterReset

- 本機で朝一客行動へ直結する「保留玉」は設定変更時に再抽選。
- その他の内部高低状態に相当する初期状態契約は **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 設定変更時は保留玉が専用振り分けで再抽選され、初回規定G数に応じて朝一の保留構成が決まる。
- 後年攻略整理では設定変更後天井1280Gとして通常最大1400Gより短縮される扱い。
- 朝一保留色から設定変更/設定期待を推測できる余地がある。

### resetPenalties

- 前日の天井進捗は設定変更で失われる。
- それ以外の設定変更固有の明確な不利数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 朝一画面の保留玉表示を利用した0G判別法が当時攻略資料で紹介されている。
- ただし設定変更時に店側が数ゲーム回した場合などは判別性が落ちるため確定判別ではない。
- 「白→白→白→黄」は設定変更時の設定差があり、設定1～6で1～6%。高設定ほど出やすい。
- 本機固有ガックンの高信頼資料は今回固定できず **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

設定変更時保留玉振り分け:

#### 初回規定ゲーム数128G以内

| 保留構成 | 設1 | 設2 | 設3 | 設4 | 設5 | 設6 |
|---|---:|---:|---:|---:|---:|---:|
| 白→白→白→白 | 63.0% | 62.0% | 61.0% | 60.0% | 59.0% | 58.0% |
| 青→白→白→白 | 20.0% | 20.0% | 20.0% | 20.0% | 20.0% | 20.0% |
| 青→青→白→白 | 10.0% | 10.0% | 10.0% | 10.0% | 10.0% | 10.0% |
| 青→青→青→白 | 4.0% | 4.0% | 4.0% | 4.0% | 4.0% | 4.0% |
| 青→青→青→黄 | 2.0% | 2.0% | 2.0% | 2.0% | 2.0% | 2.0% |
| 白→白→白→黄 | 1.0% | 2.0% | 3.0% | 4.0% | 5.0% | 6.0% |

#### 初回規定ゲーム数129G以上

| 保留構成 | 設1 | 設2 | 設3 | 設4 | 設5 | 設6 |
|---|---:|---:|---:|---:|---:|---:|
| 白→白→白→白 | 74.5% | 73.5% | 72.5% | 71.5% | 70.5% | 69.5% |
| 青→白→白→白 | 15.0% | 15.0% | 15.0% | 15.0% | 15.0% | 15.0% |
| 青→青→白→白 | 7.0% | 7.0% | 7.0% | 7.0% | 7.0% | 7.0% |
| 青→青→青→白 | 2.0% | 2.0% | 2.0% | 2.0% | 2.0% | 2.0% |
| 青→青→青→黄 | 0.5% | 0.5% | 0.5% | 0.5% | 0.5% | 0.5% |
| 白→白→白→黄 | 1.0% | 2.0% | 3.0% | 4.0% | 5.0% | 6.0% |

- confidence: ANALYSIS_HIGH for 必勝本公開表。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH。
- 設定変更時モードの具体振り分け: UNVERIFIED_AFTER_RESEARCH。
- 据え置き時の天井G / モード完全保持契約: UNVERIFIED_AFTER_RESEARCH。
- 本機固有ガックン: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts / safeguards

- 機械割は K-Navi 97/99/101/104/107/112% と、後年解析整理 96.82/99.54/100.87/102.79/105.73/109.71% が競合。平均しない。
- 通常最大天井1400Gと、設定変更後1280Gという後年解析値を分離。
- 2012年「天に愛されし漢」、2015年以降の別慶次、2023年スマスロ「佐渡攻めの章」の数値を混入させない。

## sources

取得日: **2026-09-06**

1. HAZUSE DATA「戦国パチスロ 花の慶次～これより我ら修羅に入る～」
   - https://hazuse.com/machine/pachislot/3S0615/
   - 型式/検定/導入日/AT初当たり。
   - confidence: ANALYSIS_HIGH_DATABASE

2. K-Navi「花の慶次～これより我ら修羅に入る～」
   - https://p-kn.com/slot/1936/
   - 導入日、AT初当たり、機械割主系列、ゲーム性。
   - confidence: ANALYSIS_HIGH

3. パチマガスロマガ公式サイト アーカイブ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newgin_slot/29/a.php
   - 純増約2.8枚/G、AT構造、2013年11月。
   - confidence: ANALYSIS_HIGH

4. P-WORLD 機種DB
   - https://www.p-world.co.jp/machine/database/7200
   - 5号機AT、純増約2.8枚/G、AT20～100G以上、大攻城戦BONUS約100枚。
   - confidence: INDUSTRY_DATABASE

5. パチ＆スロ必勝本「天井&設定変更」
   - https://p.hisshobon.jp/machine/2290/1/42582
   - 通常最大1400G、1400G到達時修羅100G、設定変更時天井Gリセット/保留玉再抽選、設定変更時保留玉振り分け、電源OFF→ON時天井G引継ぎ/保留玉実戦上引継ぎ。
   - confidence: ANALYSIS_HIGH

6. すろぱちくえすと 機種別解析まとめ
   - https://www.slopachi-quest.com/kisyubetsu/hananokeiji-syura/
   - 精密AT初当たり、競合機械割系列。
   - confidence: ANALYSIS_SINGLE

7. すろぱちくえすと「朝一設定変更・リセット0G判別法」
   - https://www.slopachi-quest.com/article/379668210-html/
   - 朝一保留玉を利用した設定変更推測、白白白黄の設定差。
   - confidence: ANALYSIS_SINGLE

8. 真パチスロ備忘録「花の慶次 これより我ら修羅に入る」
   - https://sin-surobi.com/notebook/2758/
   - 通常1400G / チャンス1280G / 天国128G、設定変更後1280G、設定変更/据え置き時保留玉再抽選、据え置き実戦観測。
   - confidence: ANALYSIS_SINGLE_RETROSPECTIVE
