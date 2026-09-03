# パチスロ戦国無双～猛将伝～

machineName: パチスロ戦国無双～猛将伝～
manufacturer: 山佐
releaseDate: 2010-11-15
releaseDateStatus: HALL_INTRODUCTION_DATE
releaseDateNote: K-Naviがホール導入開始2010-11-15と明記。山佐ネクスト公式は稼働時期2010年11月、2010-10-05のグリーンべると発表記事は11月中旬納品予定として整合。
generation: 5号機
systemType: A+ART / ARTストック方式
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前525「パチスロ超時空要塞マクロス」を再取得。
- INDEXは旧19件地点のため、README規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 525 / chronologicalFrontier 2010-11-15。
- LATEST_HANDOFF指定の2010-11-15同日群を継続し、repo code searchで「戦国無双 猛将伝」の既存レコードがないことを確認。
- K-Naviのホール導入開始2010-11-15、山佐公式2010年11月、グリーンべると11月中旬納品予定を照合し526件目として追加。

## payoutRateBySetting

### 市場掲載系列（P-WORLD / 後年回顧）
- 設定1: **97.5%**
- 設定2: **99.5%**
- 設定3: **101.5%**
- 設定4: **104.5%**
- 設定5: **108.5%**
- 設定6: **115.5%**

### パチマガスロマガ シミュレート値
- 設定1: **98.20%**
- 設定2: **99.97%**
- 設定3: **102.18%**
- 設定4: **105.50%**
- 設定5: **108.76%**
- 設定6: **116.23%**

定義/算出条件が異なる2系列として平均せずCONFLICT保持。
confidence: CONFLICT

## initialHitBySetting

### BIG
- 設定1: **1/420.10**
- 設定2: **1/414.79**
- 設定3: **1/409.60**
- 設定4: **1/404.54**
- 設定5: **1/399.61**
- 設定6: **1/394.80**

### REG / BATTLE GAME
- 設定1: **1/630.15**
- 設定2: **1/606.82**
- 設定3: **1/585.14**
- 設定4: **1/564.97**
- 設定5: **1/546.13**
- 設定6: **1/528.52**

### ボーナス合算
- 設定1: **1/252.06**
- 設定2: **1/246.38**
- 設定3: **1/240.94**
- 設定4: **1/235.74**
- 設定5: **1/230.76**
- 設定6: **1/225.99**

### ART初当たり
- 設定1: **1/215.7**
- 設定2: **1/203.9**
- 設定3: **1/191.1**
- 設定4: **1/173.7**
- 設定5: **1/159.3**
- 設定6: **1/134.3**

P-WORLDとパチマガスロマガでBIG/BG系列が一致。ART初当たりは当時パチマガスロマガの直接表を採用。
confidence: ANALYSIS_HIGH_MULTI_SOURCE / ART_ANALYSIS_SINGLE

## baseGamesPer50

- 設定1: **33.39G / 1000円（50枚）**
- 設定2: **33.43G**
- 設定3: **33.47G**
- 設定4: **33.52G**
- 設定5: **33.56G**
- 設定6: **33.60G**

当時パチマガスロマガ通常時小役ページの直接値。
confidence: ANALYSIS_SINGLE_DIRECT

## netIncrease

- ART「戦国RUSH」: **約+1.1枚/G**
- 真田幸村: **10G / 20G / 30G**を1セットとして継続率抽選、最低50%以上
- 服部半蔵: **20G固定**、ミッションクリアで継続
- 前田慶次: 2択押し順を規定回数成功で**無限ART**
- 「真・戦国RUSH」: 次回ボーナスまで継続する無限ART系で、ARTストック上乗せ期待度が高い

山佐公式、P-WORLD、K-Navi、パチマガスロマガでシステムと純増を照合。
confidence: OFFICIAL + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- BIG: **MAX217枚**（308枚超払い出しで終了）
- BATTLE GAME / REG: **56枚**（8Gで終了）

P-WORLD、K-Navi、パチマガスロマガで整合。
confidence: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時はART期待度に関係する内部モード/状態を持ち、K-Naviにはノーマル・ミドル・ハイ各モードの移行解析項目が現存。
- 「戦国チャンス」はART高期待ゾーン。山佐公式でも本多忠勝とのバトル勝利でARTまたはボーナスへ繋がる高確率モードとして説明。
- 天井機能搭載自体はP-WORLD・K-Navi・パチマガスロマガで確認。
- ただし今回アクセス可能な本文/検索インデックスから、通常天井の正確なゲーム数・基準・恩恵を複数ソースで安全に確定できなかったため数値は推定しない。
confidence: SYSTEM_HIGH / CEILING_DETAIL_UNVERIFIED

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL / DIRECT_DETAIL_UNVERIFIED_AFTER_RESEARCH**。K-Navi本機ページに専用の「設定変更後の挙動」「モード移行率(設定変更)」解析項目が現存することは確認した。しかし検索インデックスから本文数値/条件を安全に取得できず、一般的山佐5号機や後継機の挙動を流用しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の天井進捗、内部モード、ARTストック/潜伏の保持を本機固有の直接本文で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない単純電源OFF→ON時の天井進捗、内部モード、ARTストック/潜伏処理を直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。天井機能の存在は確定しているが、設定変更時の内部天井カウンタCLEAR/RETAINを直接本文で確定できず。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用短縮天井/変更後専用G数の直接値を取得できず。

modeAfterReset: **KNOWN_TO_HAVE_RESET_MODE_LOTTERY / NUMERIC_DETAIL_UNVERIFIED**。K-Naviに「モード移行率(設定変更)」の本機専用解析項目が存在するため、設定変更時にモード移行抽選が解析対象となっていることは確認。移行先/振り分け数値は本文未回収のため推定しない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常/ミドル/ハイ等の内部状態・ART権利/ストック/潜伏が設定変更でどう処理されるかの直接本文を回収できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits: **POSSIBLE_MODE_RELOTTERY_CONFIRMED_AS_ANALYSIS_TOPIC / BENEFIT_VALUE_UNVERIFIED**。設定変更時モード移行率という専用解析があることまでは確認できるが、朝一高モード選択率・ART優遇等の具体数値を回収できず、恩恵と断定して数値化しない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井進捗消失等を直接確定できないため不利要素と断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、ゲーム数挙動等による本機固有の設定変更/据え置き判別を確定できず。

numericResetData:
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH（K-Navi専用項目存在のみ確認）**
- resetDedicatedShortCeiling: **UNVERIFIED_AFTER_RESEARCH**
- resetHighStateProbability: **UNVERIFIED_AFTER_RESEARCH**
- morningHitProbability: **UNVERIFIED_AFTER_RESEARCH**
- gakkunExactBehavior: **UNVERIFIED_AFTER_RESEARCH**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **PARTIAL_AFTER_MULTI_SOURCE_RESEARCH**

## conflicts

1. 機械割はP-WORLD等の市場掲載系列 **97.5 / 99.5 / 101.5 / 104.5 / 108.5 / 115.5%** と、パチマガスロマガのシミュレート値 **98.20 / 99.97 / 102.18 / 105.50 / 108.76 / 116.23%** が競合。定義差の可能性があるため平均せず双方保持。
2. 後年5号機クロニクルの山佐ページには初代戦国無双/後続AT機等の記述混在が見られ、本機性能の主系列には採用しない。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- 通常天井の正確なゲーム数/基準/恩恵: UNVERIFIED_AFTER_RESEARCH
- settingChangeBehavior詳細本文: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- gameCounterReset: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset数値: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- 公開朝一専用数値: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. 山佐ネクスト公式「パチスロ戦国無双～猛将伝～」 — 5号機/A+ART、稼働時期2010年11月、ARTストック方式、戦国RUSH/真・戦国RUSH、戦国チャンス。
   - https://yamasa-next.co.jp/model_sgx/
   - confidence: OFFICIAL
2. K-Navi「パチスロ戦国無双～猛将伝～」 — ホール導入開始2010-11-15、天井機能・設定変更後の挙動・設定変更時モード移行率の専用解析項目、ART概要。
   - https://p-kn.com/slot/1296/
   - confidence: ANALYSIS_HIGH
3. P-WORLD機種DB ID 6128 — 5号機/A+ART、BIG/BG確率、機械割97.5〜115.5%、BIG MAX217枚/BG56枚、ART +1.1枚/G、各キャラART仕様、天井搭載。
   - https://www.p-world.co.jp/machine/database/6128
   - confidence: ANALYSIS_HIGH
4. パチマガスロマガ 基本システム — ART +1.1枚/G、BIG最大217枚/REG56枚、ART方式。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/175/a.php
   - confidence: ANALYSIS_HIGH
5. パチマガスロマガ 通常時小役 — 1000円あたり33.39〜33.60Gの直接値。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/175/c.php
   - confidence: ANALYSIS_HIGH_SINGLE_DIRECT
6. パチマガスロマガ ボーナス/ART確率・PAYOUT — BIG/REG/合算、ART初当たり、シミュレート機械割98.20〜116.23%。
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/175/h.php
   - confidence: ANALYSIS_HIGH
7. グリーンべると / P-WORLD業界ニュース 2010-10-05 — 2010-10-02発表会、11月中旬納品予定。
   - https://news.p-world.co.jp/articles/4189/greenbelt
   - confidence: INDUSTRY
8. 777TOWN機種紹介 — 2010年発売、3タイプART/後継機の補助確認。
   - https://www.777town.net/explanation/slot_sengokumousyou.jsp
   - confidence: SECONDARY

## researchNotes

- 欠損項目は「パチスロ戦国無双～猛将伝～ / 戦国無双猛将伝 / 山佐」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / モード移行率 / ガックン / 50枚 / 1000円 / 型式 / 検定番号」を組み替え、公式、K-Navi、P-WORLD、当時パチマガスロマガ、業界記事、古い天井系、後年回顧資料まで横断した。
- K-Naviの専用resetページ本文は検索インデックスから安全に値を回収できず、ページ項目の存在を超えて具体値を推定しない。
- 後継「戦国無双2」「戦国無双3」、初代2007年「パチスロ戦国無双」の天井/reset値は本機へ流用していない。
