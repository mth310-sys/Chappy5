# 残機尽きるまで私は戦う

machineName: 残機尽きるまで私は戦う
manufacturer: トリビー
formalModelName: 残機尽きるまで私は戦うS
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: 残機尽きるまで私は戦う。 / 残機ちゃん
releaseDate: 2011-03-07
releaseDateStatus: EXACT_HALL_INTRODUCTION_DATE_WITH_DELIVERY_DATE_SEPARATED
releaseDateNote: 当時記事「パチンコ萬情報屋」はホール導入2011-03-07。グリーンべると/娯楽産業は納品開始予定2011-03-06。納品日とホール導入日を混同せず、DB主値を2011-03-07、deliveryDateを2011-03-06として保持する。
deliveryDate: 2011-03-06
generation: 5号機
systemType: A+ART / REG主体リアルボーナス + ナビ回数管理ART
coreStatus: COMPLETE_CORE_WITH_BASE_AND_ART_INITIAL_UNVERIFIED_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、557レコード「パチスロ創聖のアクエリオン」を再取得して開始。
- 開始時正本は recordCount 557 / chronologicalFrontier 2011-03-07。
- LATEST_HANDOFF記載の2011-03-07残存候補をrepo突合し、本機が未登録であることを確認。
- グリーンべるとは2011-03-06から納品開始予定、当時記事は2011-03-07ホール導入と記載。日付定義を分離して3/7を導入主値とした。

## payoutRateBySetting

- 設定1: **97.3%**
- 設定2: **98.7%**
- 設定3: **100.1%**
- 設定4: **102.4%**
- 設定5: **106.7%**
- 設定6: **109.3%**

P-WORLDと5号機クロニクルで全設定一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### ボーナス合算
- 全設定共通: **約1/327**

2011年当時の娯楽産業記事が「ボーナス（設定共通合算1/327）」と明記。4種類のREG系ボーナス個別確率は今回直接表を安全に回収できず、推測分解しない。

### ART初当たり
- **UNVERIFIED_AFTER_RESEARCH**

ボーナス後は100%ARTへ突入する一方、ART終了後CZ「リベンジゾーン」からの再突入もあるため、ボーナス合算1/327をART初当たり確率へ単純転記しない。

confidence: INDUSTRY_FOR_BONUS_COMBINED / UNVERIFIED_FOR_ART_INITIAL

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

「残機尽きるまで私は戦う」「残機尽きるまで私は戦う。」「残機ちゃん」「トリビー」と「50枚」「1000円」「千円」「1k」「ベース」「コイン持ち」「回転数」を組み合わせ、P-WORLD、パチマガスロマガ公式アーカイブ、パチ＆スロ必勝本、当時業界記事、5号機クロニクル、実機販売DB、回顧資料を横断したが、比較可能な直接値を確定できず。小役確率から逆算しない。

confidence: UNVERIFIED

## netIncrease

- ART「戦いは続く」: **約+1.9枚/G**（ボーナスを除く）
- 管理方式: **ベルナビ回数管理型**
- ボーナス後: **100% ART突入**
- ART終了後: CZ「リベンジゾーン」へ移行、リプレイを除く最大32G内のボス撃破でART再突入
- ナビ1回あたり: **純増約6枚見込み**（当時業界資料）

confidence: INDUSTRY_CROSSCHECKED_WITH_PWORLD

## basicPayout

- EXTRA BONUS: **約42枚**
- ATTACK BONUS: **約42枚**
- ボーナスは全4種類。P-WORLDの表示ではEX/AC系はいずれも8G消化または8回入賞で終了、純増約42枚。

confidence: ANALYSIS_HIGH_CROSSCHECKED_FOR_42_COINS / INDUSTRY_FOR_FOUR_BONUS_TYPES

## modeSpecificMinimumData

- ボーナス後100%ARTへ突入するA+ART機。
- ART「戦いは続く」はベルナビ個数を消化するまで継続し、チェリー/スイカ等でナビ上乗せ抽選。
- ART中ボーナスではナビ上乗せに加え「残機」1機追加。
- ART終了後はCZ「リベンジゾーン」。残機ストックがある限りCZ挑戦権を保持し、ボス撃破でARTへ再突入。
- 通常時には低確・高確・超高確の3状態が存在し、ボーナス成立時の内部状態がARTナビ獲得性能へ影響する。
- 通常ゲーム数天井については攻略サイトに「天井」「設定変更&天井情報」項目の存在を確認したが、今回取得可能な本文から起算点・正確G数・恩恵を確定できず、推測値を入れない。
- 有利区間制度導入前の5号機。

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。パチマガスロマガに本機専用「朝イチ・設定変更」、パチ＆スロ必勝本に「設定変更&天井情報」項目の存在までは確認したが、今回取得可能本文から具体挙動を安全に回収できなかった。一般的なトリビー/5号機挙動を流用しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時の内部状態、ARTナビ/残機、CZ状態、天井進捗の保持を本機固有資料で直接確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみでの内部状態、ARTナビ/残機、CZ、天井関連の保持を本機固有資料で直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。天井解析項目の存在は確認したが、設定変更時CLEAR/RETAINを本文で確定できず。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井の正確値と設定変更専用短縮/変更値を確定できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に低確/高確/超高確の3状態があることはP-WORLDで確認したが、設定変更時の再抽選/引継ぎおよび振り分け数値は直接回収できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更後の低確/高確/超高確振り分けを安全に確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用の高確優遇、ART/CZ優遇、天井短縮等の公開恩恵を今回直接確定できず。

resetPenalties: **UNVERIFIED_AFTER_RESEARCH**。設定変更による天井進捗消失等の不利要素を今回直接確定できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「ガックン」「設定変更判別」「朝一」「初期出目」「据え置き判別」「電源OFF ON」を表記揺れと併せて再探索したが、本機固有の確定根拠なし。

numericResetData:
- **NONE_RECOVERED_AFTER_RESEARCH**

resetBehaviorConfidence: **UNVERIFIED_AFTER_BROAD_RESEARCH_EXCEPT_ADVANTAGEOUS_SECTION_NOT_APPLICABLE**

## conflicts

- 数値性能の実質CONFLICTは今回確認なし。
- release chronologyはCONFLICTではなく定義分離: **2011-03-06 = 納品開始予定 / 2011-03-07 = ホール導入**。

## missingFields

- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- ART初当たり単独確率: **UNVERIFIED_AFTER_RESEARCH**
- 4種類ボーナス個別確率: **UNVERIFIED_AFTER_RESEARCH**
- 通常天井の正確値・起算点・恩恵: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior / carryOverBehavior / powerCycleBehavior詳細: **UNVERIFIED_AFTER_RESEARCH**
- gameCounterReset / ceilingAfterReset / modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection / numericResetData: **UNVERIFIED_AFTER_RESEARCH**

## sources — 取得日 2026-09-04

1. グリーンべると「トリビー、ARTメインの新機種を発表」
   - https://web-greenbelt.jp/00001800/
   - 2011-03-06納品開始予定、ボーナス後100%ART、約+1.9枚/G、ART/CZ構造
   - confidence: INDUSTRY
2. 娯楽産業「トリビー パチスロ新機種『残機尽きるまで私は戦う』発表」
   - https://www.goraku-sangyo.com/%E3%83%88%E3%83%AA%E3%83%93%E3%83%BC%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E6%AE%8B%E6%A9%9F%E5%B0%BD%E3%81%8D%E3%82%8B%E3%81%BE%E3%81%A7%E7%A7%81%E3%81%AF/
   - 全設定ボーナス合算1/327、約+1.9枚/G、ナビ1回約6枚、上乗せ/状態概要
   - confidence: INDUSTRY
3. P-WORLD 機種DB
   - https://www.p-world.co.jp/machine/database/6245
   - 機械割、約42枚ボーナス、ART/CZ、低確/高確/超高確
   - confidence: ANALYSIS_HIGH
4. 5号機クロニクル トリビー全機種一覧
   - https://5goki.com/trivy
   - 機械割97.3/98.7/100.1/102.4/106.7/109.3%、2011/3
   - confidence: ANALYSIS_HIGH
5. パチマガスロマガ公式アーカイブ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/trivy_slot/15/trivy_slot_15.php
   - ボーナス確率/PAYOUT、天井、朝イチ・設定変更の専用解析項目存在を確認
   - confidence: ANALYSIS_HIGH_FOR_PAGE_EXISTENCE; DETAILS_NOT_RECOVERED
6. パチ＆スロ必勝本
   - https://p.hisshobon.jp/machine/1782
   - 2011-03-06更新の基本スペック/ART概要、設定変更&天井情報項目存在を確認
   - confidence: ANALYSIS_HIGH_FOR_PAGE_EXISTENCE; DETAILS_NOT_RECOVERED
7. パチンコ萬情報屋 当時記事（楽天ブログ検索取得）
   - https://plaza.rakuten.co.jp/pachiwin/diaryall/
   - 2011-03-07ホール導入、4種類REG、全設定共通の重め合算、ART構造
   - confidence: PERIOD_SECONDARY
8. A-SLOT楽天 / パチスロわっしょい / ホームスロット
   - https://item.rakuten.co.jp/a-pachislo/trivy7-silver_set/
   - https://www.pachislowasshoi.jp/SHOP/trivy-slot0001.html
   - https://home-slot.net/SHOP/s-trivy7.html
   - 2011年3月設置、4ボーナス/ART概要、メーカー未発表扱い項目の補助確認
   - confidence: SECONDARY

## recordStatus

**COMPLETE_CORE_WITH_BASE_AND_ART_INITIAL_UNVERIFIED_RESET_BEHAVIOR_PARTIAL**

性能コアの比較に必要な機械割、設定共通ボーナス合算、ART純増、基本獲得枚数/ゲーム構造は確保。baseGamesPer50、ART初当たり単独、天井正確値、resetBehavior具体本文は表記・検索語・資料系統を変えて十分再探索したが回収できずUNVERIFIED。推測補完はしていない。
