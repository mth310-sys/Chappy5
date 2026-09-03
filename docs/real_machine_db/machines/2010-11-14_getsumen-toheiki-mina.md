# 月面兎兵器ミーナ

machineName: 月面兎兵器ミーナ
manufacturer: スパイキー
releaseDate: 2010-11-14
releaseDateStatus: DELIVERY_START_DATE
releaseDateNote: 2010-10-12グリーンべるとが「納品は11月14日よりスタートする予定」と報道。K-Navi発表会記事・アニメ！アニメ！は11月中旬以降/11月中旬から全国導入と記載するため、11/14はホール全国一斉導入日ではなく最古の具体的な納品開始日として時系列主値に採用。導入定義差を保持する。
generation: 5号機
systemType: A+ART / セットストックART + 無限ART
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: 0S0800（HAZUSE DATA machine_code。型式正式表記との同一性は追加照合待ち）
coreStatus: PARTIAL_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新main README、ミッションv0.7、INDEX、LATEST_HANDOFF、直前523「エニィバー」を再取得。
- 開始時正本: recordCount 523 / chronologicalFrontier 2010-11-12 / READY_TO_CONTINUE。
- 2010-11-13〜14境界を監査し、未登録の本機を確認。グリーンべるとが11/14納品開始予定、複数資料が11月中旬導入として整合。
- repo code searchで機種名一致レコードなしを確認して524件目として追加。

## payoutRateBySetting

- 設定1: **97.3%**
- 設定2: **98.8%**
- 設定3: **100.6%**
- 設定4: **104.5%**
- 設定5: **108.5%**
- 設定6: **113.0%**

パチマガスロマガ、pacnk、後年保存DBで系列一致。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### BIG合成
- 設定1: **1/397.19**
- 設定2: **1/378.82**
- 設定3: **1/368.18**
- 設定4: **1/358.12**
- 設定5: **1/346.75**
- 設定6: **1/343.12**

### REG
- 設定1: **1/397.19**
- 設定2: **1/385.51**
- 設定3: **1/378.82**
- 設定4: **1/372.36**
- 設定5: **1/366.12**
- 設定6: **1/360.09**

### ボーナス合成
- 設定1: **1/198.59**
- 設定2: **1/191.07**
- 設定3: **1/186.71**
- 設定4: **1/182.55**
- 設定5: **1/178.09**
- 設定6: **1/175.70**

### ART初当たり
- 設定1: **1/274**
- 設定2: **1/268**
- 設定3: **1/251**
- 設定4: **1/213**
- 設定5: **1/183**
- 設定6: **1/167**

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

「月面兎兵器ミーナ / スパイキー / 0S0800」と「50枚 / 1000円 / ベース / コイン持ち / 小役」を組み替え、P-WORLD、パチマガスロマガ、HAZUSE DATA、後年DBを横断したが比較可能な直接値を確定できず。小役から逆算しない。
confidence: UNVERIFIED

## netIncrease

- ART「汁実TIME」: **1セット50G / 約+1.1枚/G**
- 無限ART「汁実RUSH」: **次回ボーナスまで / 約+1.1枚/G**

業界発表、K-Navi、P-WORLD、パチマガスロマガで一致。
confidence: INDUSTRY + ANALYSIS_HIGH

## basicPayout

- 同色/S・BIG: **約250枚**（351枚払い出し）
- 異色BIG: **約200枚**（277枚払い出し）
- REG: **最大81枚**（96枚払い出し）

confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常ART「汁実TIME」はセットストック式、1セット50G。
- 無限ART「汁実RUSH」は次回ボーナスまで継続。
- ボーナス間 **1317G** 消化で無限ARTへ突入する天井をP-WORLD、パチマガスロマガ、K-Navi、後年天井DBで確認。
- ART中には上乗せ期待度の異なる通常/高確/超高確の内部状態が存在するが、通常時を含む全内部移行テーブルは本ミッション対象外。
confidence: MULTI_SOURCE_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL / LOW_CONFIDENCE_DIRECT_SECONDARY**。後年の天井狙い整理資料が本機を「宵越し×」「リセット高確率有り」と記載。設定変更で前日天井進捗を狙えないこと、およびリセット後に高確系恩恵があることを示すが、当時解析本文の具体処理・振り分けを回収できていないため強断定しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時1317G天井進捗の内部保持を本機固有の直接高信頼資料で確定できず。「宵越し×」のみから据え置き/変更判別まで推測しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ON時の天井進捗、ARTストック、内部状態を確定できる資料を回収できず。

gameCounterReset: **LIKELY_CLEAR_ON_SETTING_CHANGE / ANALYSIS_SINGLE_LOW**。「宵越し×」資料を根拠に設定変更時CLEARを示唆として保持。ただし一次/当時高信頼本文未回収のため確定値扱いにしない。

ceilingAfterReset: **NO_SHORTENED_CEILING_CONFIRMED_AFTER_RESEARCH**。通常天井1317Gは確認。リセット専用短縮天井の公開数値は確認できず。

modeAfterReset: **RESET_HIGH_PROBABILITY_STATE_REPORTED / DETAILS_UNVERIFIED**。後年資料に「リセット高確率有り」。高確の正確な名称・振り分け・継続G数は未確認。

stateAfterReset: **PARTIAL**。リセット高確系の報告はあるが、通常/高確/超高確の具体振り分け、ARTストック/潜伏中の設定変更処理はUNVERIFIED_AFTER_RESEARCH。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **RESET_HIGH_PROBABILITY_STATE_REPORTED**。朝一高確系の恩恵が報告されるが公開確率は未回収。

resetPenalties: **CEILING_PROGRESS_LOSS_LIKELY_ON_SETTING_CHANGE**。1317G天井の宵越し狙い不可とする資料あり。確度は単一二次資料相当。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶/ランプ、前兆挙動等の本機固有変更判別は確定できず。

numericResetData:
- standardCeiling: **1317G after bonus -> infinite ART**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetHighProbabilityState: **EXISTS_REPORTED / exact probability UNVERIFIED**
- morningHitProbability: **UNVERIFIED_AFTER_RESEARCH**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**

## conflicts

1. releaseDateは「11/14納品開始予定」（業界記事）と「11月中旬以降/11月中旬から全国導入」（K-Navi・アニメ！アニメ！）の定義差。11/14を全国一斉ホール導入日とは扱わない。
2. resetはパチマガスロマガに「朝イチ・設定変更」専用項目の存在を確認できるが、現存検索結果から本文詳細を回収できず。後年単一整理資料の「宵越し× / リセット高確率有り」を高信頼解析値へ昇格させない。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior詳細/高確振り分け: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- 公開朝一専用数値: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. グリーンべると / P-WORLD業界ニュース「スパイキーが新生第1弾『月面兎兵器ミーナ』発表」 — 2010-10-12、11/14納品開始予定、50G ART/無限ART、純増1.1枚/G。
   - https://news.p-world.co.jp/articles/4198/greenbelt
   - confidence: INDUSTRY
2. K-Navi「月面兎兵器ミーナ」プレス発表会 — 2010-10-07、11月中旬以降導入予定、50G・純増1.1枚/G。
   - https://p-kn.com/topics/exhibition/720/
   - confidence: INDUSTRY/ANALYSIS_HIGH
3. アニメ！アニメ！ — 2010-10-09、11月中旬から全国ホールへ順次導入。
   - https://animeanime.jp/article/2010/10/09/7043.html
   - confidence: CONTEMPORARY_NEWS
4. パチマガスロマガ「月面兎兵器ミーナ」基本システム — ART、天井1317G、獲得枚数。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/02/a.php
   - confidence: ANALYSIS_HIGH
5. パチマガスロマガ「ボーナス抽選確率」 — BIG/REG/合成、ART初当たり、PAYOUT。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/02/h.php
   - confidence: ANALYSIS_HIGH
6. P-WORLD機種DB — 天井1317G、ART 50G/+1.1枚、無限ART、基本獲得枚数。
   - https://www.p-world.co.jp/machine/database/6127
   - confidence: ANALYSIS_HIGH
7. pacnk設定判別ツール — ART初当たり、BIG/REG、PAYOUT系列の別ソース照合。
   - https://pacnk.com/slot/tools/sh_mina.html
   - confidence: ANALYSIS_SECONDARY
8. HAZUSE DATA パチスロ一覧 — 月面兎兵器ミーナ掲載、リンク先machine_code=0S0800を確認。
   - https://data.hazuse.com/?type=s
   - confidence: CONTEMPORARY_DATABASE_HIGH
9. 天井ハイエナ生活「天井ハイエナ期待値リスト か行」 — 本機を「宵越し×」「リセット高確率有り」と整理。resetBehaviorのみ補助使用。
   - https://macerate.seesaa.net/article/226196713.html
   - confidence: ANALYSIS_SINGLE_LOW
10. パチスロ立ち回り講座「か行の機種の天井情報(5号機版)」 — 1317G天井を別系統で確認、設定変更後詳細は空欄。
   - https://crankyseven.com/sp/tenjo-5ka.htm
   - confidence: ANALYSIS_SECONDARY
