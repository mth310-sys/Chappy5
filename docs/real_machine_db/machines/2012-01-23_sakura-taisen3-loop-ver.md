# パチスロ サクラ大戦3 ～Loop ver.～

machineName: パチスロ サクラ大戦3 ～Loop ver.～
manufacturer: サミー
releaseDate: 2012-01-23
releaseDatePrecision: EXACT_HALL_INTRODUCTION_DATE
releaseDateNotes: K-Navi・パチビーが2012-01-23をホール導入日として掲載。当時グリーンべるとは2011-12-13記事で「2012年1月下旬納品開始予定」と掲載。
modelName: サクラ大戦3RR
inspectionNumber: 1S0215
generation: 5号機
systemType: A+ART
recordStatus: COMPLETE_CORE

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.40% |
| 2 | 98.30% |
| 3 | 100.98% |
| 4 | 104.24% |
| 5 | 110.00% |
| 6 | 114.39% |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

パチスロ解析ガイドの精密値を主値とし、後年整理資料の97.4 / 98.3 / 101.0 / 104.2 / 110.0 / 114.4%は丸め差として整合確認。

## initialHitBySetting

| 設定 | BIG合算 | REG | ボーナス合算 | ボーナス+ART初当たり合算 |
|---:|---:|---:|---:|---:|
| 1 | 1/414.78 | 1/624.15 | 1/249.2 | 1/121.4 |
| 2 | 1/407.06 | 1/590.41 | 1/240.9 | 1/117.1 |
| 3 | 1/394.80 | 1/560.14 | 1/231.6 | 1/109.5 |
| 4 | 1/381.02 | 1/532.81 | 1/222.2 | 1/101.5 |
| 5 | 1/370.26 | 1/500.27 | 1/212.8 | 1/90.2 |
| 6 | 1/362.08 | 1/474.90 | 1/205.4 | 1/83.1 |

reliability: ANALYSIS_HIGH_MULTI_SOURCE

ボーナス+ART合算はK-Navi・グリーンべるとで端点を照合。BIG/REG/ボーナス合算はパチスロ解析ガイド掲載値。

## baseGamesPer50

- UNVERIFIED_AFTER_RESEARCH

reliability: UNVERIFIED

機種名表記揺れ、型式名「サクラ大戦3RR」、メーカー名と「50枚/1000円/ベース/コイン持ち/回転数」を組み替え、K-Navi、P-WORLD、パチビー、パチマガスロマガ、当時業界記事、後年解析資料を再探索したが、Loop ver.固有の比較可能な50枚ベース直接値を確定できなかった。前作のコイン持ちは流用しない。

## netIncrease

- ART「光武モード」: 約+1.4枚/G
- ART「デートタイム」: 約+1.4枚/G
- プレミアムデートタイム: 約+1.4枚/G

reliability: INDUSTRY_AND_ANALYSIS_CORROBORATED

## basicPayout

- 赤7BIG: 約300枚（360枚超払い出しで終了）
- 白7BIG: 約200枚（240枚超払い出しで終了）
- REG: 約30～50枚（5Gまたは5回入賞で終了）
- ART「光武モード」: 1セット50G、約+1.4枚/G
- ART「デートタイム」: 1セット50G、約+1.4枚/G、ループ率50% / 66% / 80%の公開記述あり

reliability: INDUSTRY_AND_ANALYSIS_HIGH

## modeSpecificMinimumData

- A+ARTタイプ。
- 前作の基本ゲーム性を踏襲しつつ「デートタイム」をループART化。最大ループ率80%。
- 「光武モード」はセットストック型、「デートタイム」はループ抽選型。いずれも1セット50G、純増約+1.4枚/G。
- STOCK by STOCKを継承し、当選時はARTストック10個獲得の公開解析あり。
- 天井は複数系統あり、P-WORLDでは①ボーナス間901～1200GでART初当たり約1.8倍、1201～1500Gで約3倍、1501G以降約6倍、②ボーナス&ART間900Gで天井ART、③ボーナス後の初SIN成立が100Gを超えればARTストック、と整理。
- パチスロ解析ガイドでは通常時900Gハマリで3セット以上のART、901～1200GでSINこぼし時5.01%、1201～1500Gで13.01%、1501G以降33.43%のART抽選を掲載。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_RESET_QA_AFTER_MULTI_SOURCE_RESEARCH
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH

gameCounterReset: UNVERIFIED_AFTER_RESEARCH
ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH
modeAfterReset: UNVERIFIED_AFTER_RESEARCH
stateAfterReset: UNVERIFIED_AFTER_RESEARCH
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH
resetDetection: UNVERIFIED_AFTER_RESEARCH
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH

numericResetData:
- 通常時/ボーナス&ART間天井: 900G系の救済機能を確認。
- ボーナス間901～1200G: ART抽選率上昇（P-WORLD約1.8倍、解析ガイドSINこぼし時5.01%）。
- ボーナス間1201～1500G: ART抽選率上昇（P-WORLD約3倍、解析ガイド13.01%）。
- ボーナス間1501G以降: ART抽選率上昇（P-WORLD約6倍、解析ガイド33.43%）。
- SIN間救済: ボーナス後初SIN成立まで100G超でARTストックの公開情報あり。
- 設定変更時の900G/ボーナス間天井/SIN間救済カウンタCLEAR・RETAIN: UNVERIFIED_AFTER_RESEARCH。
- リセット専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH。
- 設定変更時モード/状態振り分け: NONE_CONFIRMED_AFTER_RESEARCH。
- 朝一特定G以内当選率・朝一専用恩恵: NONE_CONFIRMED_AFTER_RESEARCH。

notes:
- K-Naviの本機トップには「設定変更後の挙動」専用解析項目が存在することを確認したが、現在取得できる検索インデックス/本文経路では具体本文を安全に回収できなかった。
- 機種名、Loop/Loop Ver./～Loop ver.～、型式名サクラ大戦3RR、サミー、設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/900G/SIN/ガックンを組み替えて、K-Navi、P-WORLD、パチビー、パチマガスロマガ、当時業界記事、後年解析資料を横断した。
- 前作「サクラ大戦3～巴里は燃えているか～」の設定変更情報は別スペックのため流用しない。
- 据え置き、単純電源OFF→ON、設定変更時の天井ゲーム数/内部状態/ARTストック処理、ガックン・初期出目・液晶等の変更判別は本機固有の直接根拠を確定できずUNVERIFIED_AFTER_RESEARCH。
- 有利区間は5号機のため非該当。

resetQaReliability: PARTIAL_AFTER_MULTI_SOURCE_RESEARCH

## sources

取得日: 2026-09-05

1. グリーンべると — ループARTに進化した『サクラ大戦3』発表
   - https://web-greenbelt.jp/00002455/
   - 2011-12-13掲載。納品2012年1月下旬予定、ボーナス+ART合算端点、赤BB約300枚/白BB約200枚/RB約30～50枚、ART50G+α・約1.4枚/G、最大継続率80%を確認。
   - reliability: INDUSTRY
2. K-Navi — パチスロ サクラ大戦3 -Loop Ver.-
   - https://p-kn.com/slot/1551/
   - ホール導入開始2012-01-23、ボーナス+ART合算、基本仕様、「設定変更後の挙動」解析項目の存在を確認。
   - reliability: ANALYSIS_HIGH
3. パチビー — パチスロ サクラ大戦3 -Loop Ver.-
   - https://www.pachibee.jp/machines/lecture/211120004
   - 導入日2012-01-23、5号機ART、天井あり、純増約1.4枚/G、基本仕様を確認。
   - reliability: ANALYSIS_HIGH
4. P-WORLD — パチスロ サクラ大戦3 ～Loop ver.～
   - https://www.p-world.co.jp/machine/database/6586
   - 型式名サクラ大戦3RR、検定番号1S0215、ボーナス獲得枚数、ART各50G・約1.4枚/G、複数天井/救済仕様を確認。
   - reliability: DATABASE_HIGH
5. パチスロ解析ガイド — サクラ大戦3 Loop Ver.
   - https://pachislot-guide.net/2012/sakura3-loop/
   - 設定別BIG/REG/ボーナス合算、設定別機械割、ART仕様、900G系天井・SIN救済数値を確認。
   - reliability: RETROSPECTIVE_ANALYSIS
6. パチマガスロマガ — パチスロサクラ大戦3～Loop ver.～
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/132/a.php
   - 前作スペック違いであること、ART初当たり/通常時コイン持ちが前作より低下、ART50G・約1.4枚/G、ボーナス獲得枚数を再照合。
   - reliability: ANALYSIS_HIGH
7. 5号機クロニクル — サミー5号機一覧
   - https://5goki.com/sammy
   - 2012年1月導入、機械割丸め値97.4～114.4%を照合。ただしBIG約204枚/REG約48枚等は他の高信頼資料と整合しないため基本獲得枚数には採用しない。
   - reliability: RETROSPECTIVE_DATABASE

## missingFields

- Loop ver.固有の50枚あたりゲーム数/ベース直接値
- 設定変更時の900G系/ボーナス間/SIN間救済カウンタCLEAR/RETAIN
- 据え置き時の天井カウンタ/内部状態/ARTストックの直接挙動
- 単純電源OFF→ON時の直接挙動
- 設定変更時の内部モード/状態振り分け
- ガックン等の設定変更判別の直接根拠

## conflicts

1. `CONFLICT_RETROSPECTIVE_BASIC_PAYOUT`
   - グリーンべると / P-WORLD / パチマガスロマガ / パチスロ解析ガイド: 赤BIG約300枚、白BIG約200枚、REG約30～50枚。
   - 5号機クロニクル: BIG約204枚、REG約48枚と掲載。
   - 本機のボーナス構成に対する高信頼複数系統との不整合が大きいため、平均化せず後年DB側の混線/簡略化疑いとしてCONFLICT保持。
