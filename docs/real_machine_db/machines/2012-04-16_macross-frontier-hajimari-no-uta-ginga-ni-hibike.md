# パチスロ マクロスフロンティア はじまりの歌、銀河に響け！

machineName: パチスロ マクロスフロンティア はじまりの歌、銀河に響け！
manufacturer: SANKYO
releaseDate: 2012-04-16
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviで2012-04-16ホール導入開始。SANKYO公式オンライン博物館は2012.04、当時グリーンべるとは4月15日納品開始とし整合。
generation: 5号機
systemType: ボーナス+ART / ゲーム数上乗せ+セットストック式ART / CZ搭載
formalModelName: パチスロ マクロスフロンティア はじまりの歌、銀河に響け！A
approvalNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_CONFLICT

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.4% |
| 2 | 98.5% |
| 3 | 100.8% |
| 4 | 104.6% |
| 5 | 108.8% |
| 6 | 113.1% |

reliability: OFFICIAL_CROSSCHECKED
notes: P-WORLD、5号機クロニクル、後年攻略PDFでも一致。

## initialHitBySetting

### SANKYO公式 / P-WORLD一致系列（主値）

| 設定 | BIG合算 | REG | BONUS合算 | ART初当り | BONUS+ART合算 |
|---|---:|---:|---:|---:|---:|
| 1 | 1/496 | 1/744 | 1/297 | 1/430 | 1/175 |
| 2 | 1/448 | 1/675 | 1/269 | 1/341 | 1/150 |
| 3 | 1/481 | 1/728 | 1/289 | 1/385 | 1/165 |
| 4 | 1/425 | 1/655 | 1/258 | 1/301 | 1/138 |
| 5 | 1/468 | 1/712 | 1/282 | 1/332 | 1/152 |
| 6 | 1/404 | 1/636 | 1/247 | 1/245 | 1/123 |

reliability: OFFICIAL
notes: SANKYOオンライン博物館の公開スペックを主値とし、P-WORLDおよび八通屋の後年攻略PDFで一致確認。

### CONFLICT — 5号機クロニクル系列

5号機クロニクルは同機種について、設定1例で BIG合算1/399.6・REG1/712.4・ボーナス合算1/256.0・ART初当り1/359.1 と、SANKYO公式系列と無視できない別数値を掲載。定義差または資料差を安全に解消できないため平均化せずCONFLICTとして保持する。

reliability: CONFLICT

## baseGamesPer50

value: UNVERIFIED_AFTER_RESEARCH
reliability: UNVERIFIED
notes: 「50枚あたり / 1000円あたり / ベース / コイン持ち」を正式機種名・略称・型式名・SANKYOと組み替え、公式、P-WORLD、K-Navi、パチマガスロマガ索引、5号機クロニクル、後年攻略PDFを再探索したが、比較可能な直接数値を確定できず。小役確率からの逆算は行わない。

## netIncrease

value: ART約+1.5枚/G
reliability: OFFICIAL_CROSSCHECKED
notes: 当時グリーンべると、K-Navi、P-WORLD、後年攻略PDFで一致。

## basicPayout

- 超時空BONUS: 約252枚
- アルトBIG: 約252枚
- ランカBIG: 約204枚
- シェリルBIG: 約204枚
- REG: 約45枚
- ART「バルキリータイム」: 基本1セット40G+α、約+1.5枚/G

reliability: ANALYSIS_HIGH / OFFICIAL_FOR_SYSTEM
notes: P-WORLDで各純増枚数を直接確認。SANKYO公式は4種類のボーナスとART搭載を確認。当時グリーンべるとはART純増約1.5枚/Gを公表。

## modeSpecificMinimumData

- ART「バルキリータイム」はゲーム数上乗せ+セットストック方式。基本1セット40G+α。
- ART初当り時は準備状態を経由し、「トライアングルチャンス」で初期ゲーム数を決定。
- CZ「歌姫ステージ」を搭載。
- 通常時は低確・通常・高確に加えて、前兆/CZ/テーブル解除に関わる状態を持つ。
- 消化ゲーム数約50〜150GごとにART当選期待度が高いゾーンを持つテーブル解除方式。
- 通常のテーブル用消化ゲーム数はボーナス当選でリセットされ、ART当選のみではカウント継続。
- 天井: ボーナス間1499G消化で「超時空ライブ」確定（ART突入確定系救済）。

reliability: ANALYSIS_HIGH / OFFICIAL_FOR_MAJOR_SYSTEM

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。パチマガスロマガの本機索引に「朝イチ・設定変更」専用攻略項目が存在することは確認したが、現存検索取得可能な本文から設定変更時の具体処理を直接回収できず。後継マクロスフロンティア2/Bonus Live/スマスロ4の仕様は別機種のため流用しない。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時のボーナス間天井1499G、テーブル用ゲーム数、内部状態、ARTストックの保持条件を本機固有の確定資料で回収できず。K-Naviユーザー実戦ログに宵越しを示唆する投稿はあるが、解析根拠ではないためCONFIRMEDには使わない。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。単純電源OFF→ON時の天井/テーブルゲーム数、内部状態、液晶ゲーム数、ステージ、リール挙動を本機固有資料で確定できず。
gameCounterReset: UNVERIFIED_AFTER_RESEARCH。通常遊技中のテーブル用ゲーム数が「ボーナス当選のみでリセット、ART当選では継続」することはP-WORLDで確認済み。ただし設定変更時にボーナス間1499G天井およびテーブル用ゲーム数がCLEAR/RETAINのどちらかは直接確認できないため推測しない。
ceilingAfterReset: UNVERIFIED_AFTER_RESEARCH。設定変更専用の天井短縮・延長数値は確認できず。
modeAfterReset: UNVERIFIED_AFTER_RESEARCH。通常時に複数内部状態/テーブルを持つことは確認済みだが、設定変更時の再抽選・固定開始・振り分けは直接確認できず。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH。低確/通常/高確等の設定変更時処理を直接確認できず。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。朝一専用短縮天井、専用CZ/ART優遇、公開当選率等は本機固有の確定資料で確認できず。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。天井進捗消失などは設定変更時カウンタ処理未確定のため推測しない。
resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、液晶ステージ、前兆ゲーム数等による本機固有の確定判別法を確認できず。
publicMorningNumbers: NONE_CONFIRMED_AFTER_RESEARCH
numericResetData: normalCeiling=BONUS_INTERVAL_1499G_THEN_CHOJIKU_LIVE; tableGameCounterResetDuringPlay=RESET_ON_BONUS_ONLY_AND_CONTINUES_THROUGH_ART; settingChangeCounterHandling=UNVERIFIED; resetShortenedCeiling=UNVERIFIED; resetModeDistribution=UNVERIFIED

notes:
- 「パチスロ マクロスフロンティア / はじまりの歌、銀河に響け / マクロスF / 型式A / SANKYO」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 1499G / 高確 / モード / テーブル / ガックン / 50枚 / コイン持ち」を組み替えて再探索。
- 公式、当時業界記事、K-Navi、P-WORLD、パチマガスロマガ索引、5号機クロニクル、後年攻略PDFまで確認。
- 後継「マクロスフロンティア2」「Bonus Live ver.」「マクロスフロンティア4」の朝一仕様は別機種なので流用していない。

resetQaReliability: ANALYSIS_HIGH_FOR_NORMAL_CEILING_AND_IN_PLAY_TABLE_COUNTER_RULE__UNVERIFIED_FOR_SETTING_CHANGE_CARRYOVER_POWER_CYCLE_RESET_NUMBERS_AND_DETECTION

## conflicts

- `CONFLICT_INITIAL_HIT_SERIES`: SANKYO公式/P-WORLD/八通屋攻略PDFの設定1 BIG1/496・REG1/744・BONUS合算1/297・ART1/430系列に対し、5号機クロニクルは設定1 BIG1/399.6・REG1/712.4・BONUS合算1/256.0・ART1/359.1系列を掲載。機械割自体は一致。定義差を確定できないため公式系列を主値とし、別系列を保持。
- `CONFLICT_BASIC_BIG_SUMMARY`: 5号機クロニクルは基本スペック欄で超BIG約250枚/BIG約180枚/REG約40枚と概略記載する一方、P-WORLDは超時空/アルト252枚、ランカ/シェリル204枚、REG45枚とボーナス種別ごとの実純増を掲載。比較定義が異なるためP-WORLDの種別値を基本獲得枚数主値に採用し、概略値とは混同しない。

## missingFields

- approvalNumber
- baseGamesPer50
- settingChangeBehavior exact handling
- carryOverBehavior exact handling
- powerCycleBehavior exact handling
- setting-change gameCounterReset
- ceilingAfterReset
- modeAfterReset/stateAfterReset distributions
- resetDetection
- publicMorningNumbers

## sources

取得日: 2026-09-05

1. SANKYOオンライン博物館「パチスロ マクロスフロンティア」 https://www.sankyo-fever.jp/collection/543/
   - 2012.04、正式販売名/型式名、ボーナス+ART概要、設定別BIG/RB/BONUS合算/ART初当り/BONUS+ART合算。
   - reliability: OFFICIAL
2. グリーンべると / P-WORLD業界ニュース「アツくなれるゾーン満載、『パチスロ マクロスF』」 https://news.p-world.co.jp/articles/5230/greenbelt
   - 2012-04-04掲載、4月15日納品開始、ART純増約1.5枚/G、主要ART構造。
   - reliability: INDUSTRY
3. K-Navi「パチスロ マクロスフロンティア はじまりの歌、銀河に響け！」 https://p-kn.com/slot/1610/
   - 2012-04-16ホール導入開始、ART約+1.5枚/G、攻略/解析索引。
   - reliability: ANALYSIS_HIGH
4. P-WORLD「パチスロ マクロスフロンティア はじまりの歌、銀河に響け!」 https://www.p-world.co.jp/machine/database/6675
   - 設定別機械割、公式系列の主要確率、各ボーナス純増、ART40G+α/約+1.5枚/G、1499G天井、通常時ゲーム数テーブルとボーナス時リセット規則。
   - reliability: ANALYSIS_HIGH / OLD_DATABASE
5. パチマガスロマガ「パチスロ マクロスフロンティア はじまりの歌、銀河に響け!」 https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/27/sankyo_slot_27.php
   - 当時解析ページ索引。「朝イチ・設定変更」専用項目の存在、解析項目群を確認。本文未回収のためリセット具体値には使用しない。
   - reliability: ANALYSIS_HIGH_FOR_INDEX_EXISTENCE_ONLY
6. 5号機クロニクル「SANKYO（三共）＆ジェイビー 5号機全機種一覧」 https://5goki.com/sankyo
   - 2012年4月、機械割96.4〜113.1%。主要初当りについて公式系列と異なる別系列がありCONFLICTとして保存。
   - reliability: ANALYSIS_HIGH / RETROSPECTIVE_DATABASE
7. 八通屋「マクロスフロンティア はじまりの歌、銀河に響け」攻略PDF https://www.8tw.com.tw/rwd1540/store/F2/S0054%E3%80%90%E8%B6%85%E6%99%82%E7%A9%BA%E8%A6%81%E5%A1%9E%E3%80%91%20%E6%9C%80%E5%88%9D%E4%B9%8B%E6%AD%8C%E3%80%81%E9%9C%87%E9%9F%BF%E9%8A%80%E6%B2%B3%E7%B0%A1%E6%98%93%E7%89%88%E6%94%BB%E7%95%A5.compressed.pdf
   - 機械割、BIG/REG/BONUS合算/ART初当り、ART最低40G/約+1.5枚/G、1499G天井を再照合。
   - reliability: RETROSPECTIVE_SECONDARY
