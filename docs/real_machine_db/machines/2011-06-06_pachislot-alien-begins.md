# パチスロ エイリヤンビギンズ

machineName: パチスロ エイリヤンビギンズ
manufacturer: サミー
modelName: エイリヤンビギンズA
certificationNumber: 1S0002
releaseDate: 2011-06-06
releaseDateStatus: HALL_INTRODUCTION_EXACT_DATE

generation: 5号機
systemType: ノーマルAタイプ / ボーナス主体 + 天井RT / 技術介入
coreStatus: PARTIAL_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 574件目「キングハイビ-30」（2011-06-05納品開始予定）から継続し、2011-06-05同日群を再監査後、06-06群へ前進。
- K-Naviとパチビーがともに **2011-06-06ホール導入開始/導入日**を掲載するため、06-06を時系列キーに採用。
- P-WORLD機種情報末尾には「導入開始: 2011年05月」の月粒度表記があるため、日付情報差として保持するが、複数の当時機種DBの具体日06-06を優先。

## payoutRateBySetting

- 設定1: **97.0%**
- 設定2: **98.7%**
- 設定3: **100.7%**
- 設定4: **104.3%**
- 設定5: **108.2%**
- 設定6: **113.2%**

pacnkの全設定表と当時系二次資料で一致を確認。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG
- 設定1: **1/249.2**
- 設定2: **1/248.2**
- 設定3: **1/244.5**
- 設定4: **1/239.2**
- 設定5: **1/226.0**
- 設定6: **1/210.1**（資料により1/210.0表記あり）

### MID
- 設定1: **1/374.5**
- 設定2: **1/343.1**
- 設定3: **1/324.4**
- 設定4: **1/281.3**
- 設定5: **1/265.3**
- 設定6: **1/237.5**（資料により1/237.4表記あり）

### ボーナス合算
- 設定1: **1/149.6**
- 設定2: **1/144.0**
- 設定3: **1/139.4**
- 設定4: **1/129.3**
- 設定5: **1/122.0**
- 設定6: **1/111.5**

K-Navi、P-WORLD、パチビー、pacnkで照合。設定6のBIG/MIDは丸め精度差として保持。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

「エイリヤンビギンズ / エイリやんビギンズ / エイリヤンビギンズA / サミー」と「50枚 / 1000円 / ベース / コイン持ち / 千円 / 32G〜36G」を組み替え、P-WORLD、K-Navi、パチビー、パチマガスロマガ現存ページ、pacnk、旧攻略ブログを横断したが、初代2011年機固有の比較可能な50枚ベースを直接確定できず。2017年A-SLOTエイリヤンエボリューションの約37Gは別機種のため流用しない。
confidence: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- 天井RT: **約+0.3枚/G**
- BIG後777GまたはMID後555Gで突入し、ボーナス成立まで継続。

P-WORLD、パチビー、旧攻略資料で整合。
confidence: HIGH_CROSSCHECKED

## basicPayout

- BIG: **最大311枚**
- MID: **約91枚**
- 規定払い出し: BIG **344枚超で終了** / MID **90枚超で終了**

P-WORLD、K-Navi、パチビーで整合。
confidence: HIGH_CROSSCHECKED

## modeSpecificMinimumData

- 基本はボーナスのみで増やすノーマルAタイプ。
- BIG後 **777G**、MID後 **555G** 消化でハマリ救済の天井RTへ突入。
- 天井RTはボーナス成立まで継続し、純増は約 **+0.3枚/G**。
- BIG中に1回だけ14枚役を取る獲得枚数アップ技術介入あり。
- AT/ART/CZや長期ゲーム数モードは非搭載。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。K-Naviの本機ページに専用項目「設定変更後の挙動」、パチマガスロマガ現存インデックスに「朝イチ・設定変更」が存在することまでは直接確認したが、現存取得可能本文から具体挙動を回収できず。一般的な5号機RT機の挙動で補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。宵越し/据え置き/777G/555Gを組み合わせて再探索したが、本機固有の天井カウンタ引継ぎを直接確定する資料を回収できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の777G/555G天井カウンタ、RT状態、出目/ランプ挙動を直接示す本機固有資料を確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井はBIG後777G / MID後555Gと直接確認できるが、設定変更でCLEAR/RETAINのどちらかを示す本文を回収できず。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井や変更後専用ゲーム数は確認できず。ただし通常天井カウンタそのもののCLEAR/RETAINは未確定。

modeAfterReset: **NOT_APPLICABLE_NO_LONG_TERM_MODE_CONFIRMED**。通常時の長期モード管理型ではないノーマルAタイプ。

stateAfterReset: **PARTIAL_UNVERIFIED_FOR_RT_STATE**。AT/ART/CZ状態は非搭載。天井RT中の設定変更/電源再投入時処理は本機固有本文を回収できず未確認。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。朝一専用高確、短縮天井、特定G数優遇、専用ボーナス当選率などの公開数値は確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更で前日天井進捗が消えるか自体を確定できないため、不利要素を推測で記載しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、パトUFO/LED、ゲーム数表示等による設定変更判別を本機固有資料で直接確定できず。

numericResetData:
- 通常天井: **BIG後777G / MID後555G**
- 天井RT純増: **約+0.3枚/G**
- 設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時モード振り分け: **NOT_APPLICABLE_NO_LONG_TERM_MODE_CONFIRMED**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 公開朝一恩恵数値: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL; RESET-SPECIFIC PAGE EXISTENCE CONFIRMED, DETAIL UNVERIFIED_AFTER_RESEARCH**

## conflicts

- releaseDate: K-Navi/パチビー **2011-06-06** / P-WORLD末尾 **2011年05月**。具体日を持つ複数当時DBの06-06を時系列キーに採用し、P-WORLD月表記も保持。
- 設定6 BIG: **1/210.1**（K-Navi/P-WORLD等） / **1/210.0**（pacnk）。丸め差として保持。
- 設定6 MID: **1/237.5**（K-Navi/P-WORLD等） / **1/237.4**（pacnk）。丸め差として保持。
- 主要合算値・機械割には実質的な大幅CONFLICTなし。

## missingFields

- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior detail: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset on setting change: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

「パチスロ エイリヤンビギンズ / エイリヤンビギンズ / エイリやんビギンズ / エイリヤンビギンズA / Sammy / サミー」と「設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 宵越し / 電源OFF ON / 天井 / 777 / 555 / 天井RT / ガックン / 50枚 / 1000円 / ベース / コイン持ち / 型式 / 検定番号」を組み替え、K-Navi、P-WORLD、パチビー、パチマガスロマガ現存ページ、pacnk、旧攻略ブログ、後年回顧資料を横断。K-Naviとパチマガスロマガ双方で本機専用の朝一/設定変更解析項目の存在は確認できたが、具体本文は現存取得経路から回収できなかった。欠損を一般論で補完しない。

## sources — 取得日 2026-09-04

1. K-Navi「パチスロエイリヤンビギンズ」
   - https://p-kn.com/slot/1428/
   - 2011-06-06ホール導入開始、BIG/MID/合算全設定、規定払い出し、専用「設定変更後の挙動」項目の存在
   - confidence: CONTEMPORARY_ANALYSIS_DATABASE
2. P-WORLD「パチスロエイリヤンビギンズ」
   - https://www.p-world.co.jp/machine/database/6363
   - サミー、5号機ノーマル/RT、BIG最大311枚、MID約91枚、BIG後777G/MID後555Gの天井RT、約+0.3枚/G、型式名エイリヤンビギンズA、検定番号1S0002
   - confidence: INDUSTRY_DATABASE_HIGH
3. パチビー「パチスロ エイリヤンビギンズ」
   - https://www.pachibee.jp/machines/about/211040007
   - 2011-06-06導入、ノーマルタイプ、天井RT仕様
   - confidence: CONTEMPORARY_DATABASE
4. パチビー「基本スペック」
   - https://www.pachibee.jp/machines/index/211040007
   - BIG最大311枚、MID約91枚、777G/555G天井RT、合算全設定
   - confidence: CONTEMPORARY_DATABASE
5. パチマガスロマガ公式保存ページ「エイリヤンビギンズ」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/129/sammy_slot_129.php
   - 「ボーナス確率・PAYOUT」「RTについて」「天井」「朝イチ・設定変更」解析項目の存在
   - confidence: CONTEMPORARY_ANALYSIS_INDEX
6. pacnk「パチスロ エイリヤンビギンズ 設定判別ツール」
   - https://pacnk.com/slot/tools/sh_alien.html
   - 機械割97.0〜113.2%、BIG/MID全設定の照合
   - confidence: LATER_ANALYSIS_DATABASE
7. 旧攻略ブログ「エイリヤンビギンズ・ボーナス確率と天井詳細」
   - https://ab01.seesaa.net/article/275489928.html
   - 機械割97.0〜113.2%、BIG/MID/合算、777G/555G天井、RT純増0.3枚/Gの照合
   - confidence: OLD_SECONDARY_ANALYSIS

## resetQaState

resetQaStatus: **PARTIAL_RESET_QA**
resetQaConfidence: **HIGH_FOR_NORMAL_CEILING_SPEC / LOW_FOR_SETTING_CHANGE_CARRYOVER_POWER_DETAILS**
resetQaNotes: **通常天井数値は複数資料で確定。設定変更/据え置き/電源OFF→ON別の天井カウンタ処理は、専用解析項目の存在まで確認したが本文未回収のため未確認。**

## status

- recordNumber: **575**
- chronologicalFrontier: **2011-06-06**
- relayStatus: **READY_TO_CONTINUE**
