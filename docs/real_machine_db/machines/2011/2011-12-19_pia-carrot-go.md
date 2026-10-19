# Piaキャロットへようこそ!!G.O.

machineName: Piaキャロットへようこそ!!G.O.
aliases: Piaキャロットへようこそ!!G.O. / PiaキャロットへようこそG.O. / PiaキャロットへようこそGO-S
manufacturer: タイヨー
formalModelName: PiaキャロットへようこそGO-S
approvalNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2011-12-19
releaseDateStatus: CONFIRMED_MULTI_SOURCE_WITH_SHIPMENT_PREVIOUS_DAY

generation: 5号機
systemType: ボーナス+ART
coreStatus: COMPLETE_CORE_EXCEPT_APPROVAL_NUMBER
resetQaStatus: PARTIAL_RESET_CONFIRMED_STATE_NUMERIC_GAME_COUNTER_OPERATIONAL_SOURCE

## chronologyNote

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「ハイパー娘」を再取得して開始。
- 開始時正本は recordCount 627 / chronologicalFrontier 2011-12-19。INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFFを進捗正本として使用。
- GitHub code searchで「PiaキャロットへようこそG.O.」未検出を確認し628件目として追加。
- パチビーが導入日2011-12-19、当時グリーンべるとは2011-12-18から納品開始予定と記載。日付定義を混ぜず、ホール導入日の2011-12-19を時系列キーとして採用。
- 2011-11-07東京都公安委員会検定通過情報に型式名「PiaキャロットへようこそGO-S」を確認。

## payoutRateBySetting

- 設定1: CONFLICT — 95.5%（パチマガスロマガ / p-ken） / 95.6%（P-WORLD）
- 設定2: 96.9%
- 設定3: 99.9%
- 設定4: 102.6%
- 設定5: 105.9%
- 設定6: 109.7%

設定2〜6は複数資料一致。設定1のみ0.1pt差を平均せずCONFLICTとして保持。
confidence: ANALYSIS_HIGH_CROSSCHECKED_WITH_MINOR_CONFLICT_SETTING1

## initialHitBySetting

### BIG合成
- 設定1: 1/399.6
- 設定2: 1/385.5
- 設定3: 1/374.5
- 設定4: 1/356.2
- 設定5: 1/344.9
- 設定6: 1/334.4

### REG
- 設定1: 1/697.2
- 設定2: 1/662.0
- 設定3: 1/642.5
- 設定4: 1/606.8
- 設定5: 1/574.9
- 設定6: 1/512.0

### ボーナス合成
- 設定1: 1/254.0
- 設定2: 1/243.6
- 設定3: 1/236.6
- 設定4: 1/224.4
- 設定5: 1/215.6
- 設定6: 1/202.3

### ART初当たり
- 設定1: 1/521.5
- 設定2: 1/453.5
- 設定3: 1/470.3
- 設定4: 1/419.0
- 設定5: 1/451.6
- 設定6: 1/383.4

パチマガスロマガ、P-WORLD、当時解析系で主要値を照合。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

- 設定1: 33.34G/50枚
- 設定2: 33.34G/50枚
- 設定3: 33.35G/50枚
- 設定4: 33.36G/50枚
- 設定5: 33.37G/50枚
- 設定6: 33.38G/50枚

K-Navi「1000円あたりの平均ゲーム数」自社調べの直接値。
confidence: ANALYSIS_SINGLE_DIRECT_TABLE

## netIncrease

- ART「Piaキャロットタイム」: 約+1.4枚/G。
- 1セット50G+α。

当時グリーンべると、P-WORLD、パチビー、K-Naviで一致。
confidence: INDUSTRY_ANALYSIS_HIGH_CROSSCHECKED

## basicPayout

- BIG: 約200枚
- REG: 約60枚

当時グリーンべると、P-WORLD、複数解析資料で一致。
confidence: INDUSTRY_ANALYSIS_HIGH_CROSSCHECKED

## modeSpecificMinimumData

- ART「Piaキャロットタイム」は1セット50G、ゲーム数上乗せ+セットストック方式。
- 上乗せ状態「スーパーPiaキャロットタイム」を搭載。
- 通常時内部状態は低確 / 高確 / 超高確の3状態。
- 通常天井はボーナス間1400G。到達でARTが確定し、P-WORLDは平均5セット、当時解析資料は3ストック以上確定と記載。両者は矛盾せず、最低保証と平均値の定義差として保持。

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED**。P-WORLDおよび同内容を保持する旧実機DBに「設定変更後は高確移行抽選」と明記。当時解析資料では設定変更後の内部状態振り分けを低確91.5% / 高確6.1% / 超高確2.3%と公開。

carryOverBehavior: **PARTIAL_OPERATIONAL_SOURCE_ONLY**。当時天井狙い資料が本機を「宵越し×」と記載しており、設定変更を伴う宵越し狙いは不可とする運用情報を確認。ただし据え置き時にボーナス間ゲーム数が保持されることを本機固有の直接解析文で明示した資料は確定できず、一般的挙動から補完しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみのボーナス間ゲーム数、内部状態、ART権利等の処理を本機固有資料で直接確定できない。

gameCounterReset: **PARTIAL_CONFIRMED_OPERATIONAL_SETTING_CHANGE_RESET**。当時天井狙い資料が「宵越し×」かつ「設定変更で内部モード再セット」としているため設定変更時は前日1400G進捗を利用できない運用根拠を確認。ただし「天井ゲーム数を0Gへリセット」と直接表現した別系統解析は今回確定できず、信頼度をANALYSIS_SINGLE_OPERATIONALに制限。

ceilingAfterReset: **NO_SHORTENED_RESET_CEILING_CONFIRMED_AFTER_RESEARCH**。通常天井はボーナス間1400G。設定変更専用の短縮天井数値は検索語・資料系統変更後も確認できない。

modeAfterReset: **CONFIRMED_INTERNAL_STATE_RELOTTERY**。設定変更後は低確91.5% / 高確6.1% / 超高確2.3%へ振り分け。P-WORLDも設定変更後に高確移行抽選が行われることを独立確認。

stateAfterReset: **CONFIRMED_NUMERIC**。設定変更後の内部状態振り分けは低確91.5% / 高確6.1% / 超高確2.3%。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **CONFIRMED_SMALL_HIGH_STATE_CHANCE**。設定変更時に高確6.1%・超高確2.3%、合計8.4%で低確以外から開始する公開値あり。ただし朝一専用短縮天井やART確定等は確認できない。

resetPenalties: **PARTIAL_CONFIRMED_CEILING_CARRYOVER_NOT_USABLE_AFTER_CHANGE**。設定変更を伴う場合、当時天井狙い資料は宵越し不可としているため前日の天井進捗を利用できない。その他の不利要素は確認できない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶ステージ、ランプ等で変更/据え置きを判別できる本機固有の直接資料を、表記揺れ・型式名を含む再探索後も確定できない。

numericResetData:
- 通常天井: ボーナス間1400G
- 設定変更時内部状態: 低確91.5% / 高確6.1% / 超高確2.3%
- 設定変更時の低確以外開始合計: 8.4%
- リセット専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH
- 朝一特定G以内当選率/期待度: NONE_CONFIRMED_AFTER_RESEARCH
- ガックン: UNVERIFIED_AFTER_RESEARCH

resetBehaviorConfidence: ANALYSIS_HIGH_FOR_STATE_RELOTTERY_NUMERIC_ANALYSIS_SINGLE_OPERATIONAL_FOR_GAME_COUNTER_OTHERWISE_UNVERIFIED_AFTER_RESEARCH

## conflicts

### 設定1機械割
- パチマガスロマガ / p-ken: 95.5%
- P-WORLD: 95.6%
- 設定2〜6は一致しているが、設定1の0.1pt差は丸めと断定せずCONFLICTとして保持。

## missingFields

- approvalNumber / 検定番号
- 据え置き時のボーナス間ゲーム数・内部状態・ART権利の直接明示
- 単純電源OFF→ON時の挙動
- 設定変更時ゲームカウンタの「0Gリセット」を明記する別系統資料
- ガックン等の変更判別
- 朝一特定G以内当選率

## sources

取得日: **2026-09-05**

1. パチビー「Piaキャロットへようこそ!!G.O.」 — https://www.pachibee.jp/machines/about/211100003
   - 導入日2011-12-19、5号機ART、天井あり、ART純増約1.4枚/G。
2. グリーンべると/P-WORLD業界ニュース「『Piaキャロ』の魅力とART上乗せ機能が満載」 — https://news.p-world.co.jp/articles/5013/greenbelt
   - 2011-11-16、12/18納品開始予定、ボーナス+ART、ART50G・純増1.4枚/G、BIG約200枚、REG約60枚、BIG/REG確率レンジ。
3. P-WORLD「PiaキャロットへようこそG.O.」 — https://www.p-world.co.jp/machine/database/6541
   - 設定別BIG/REG、機械割、ART仕様、天井1400G、設定変更後の高確移行抽選。
4. パチマガスロマガ「Piaキャロットへようこそ!!G.O. ボーナス確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/74/h.php
   - 設定別赤BIG/青BIG/BIG合成/REG/ボーナス合成/ART初当たり/機械割。
5. K-Navi「通常時小役確率」 — https://p-kn.com/slot/1532/34687/
   - 設定別1000円あたり平均ゲーム数33.34〜33.38G。
6. K-Navi「Piaキャロットタイム」 — https://p-kn.com/slot/1532/34663/
   - ART1セット50G+α、純増約1.4枚/G、上乗せ仕様。
7. crankyseven「Piaキャロットへようこそ!!G.O.」 — https://crankyseven.com/piacarrot-pc.htm
   - 設定別ボーナス/ART、通常時3状態、設定変更後状態振り分け 91.5% / 6.1% / 2.3%、天井1400G・ART3ストック以上。
8. 天井ハイエナ生活「天井ハイエナ期待値リスト は行」 — https://macerate.seesaa.net/article/226312110.html
   - PiaキャロットGOを「宵越し×」、1400G天井ART3セット以上、設定変更で内部モード再セットと記載。
9. 中一商事「タイヨー PiaキャロットへようこそG.O.」 — https://www.nakaiti.com/html/sTaiyo009.html
   - 型式名PiaキャロットへようこそGO-S、BIG/REG、ART、天井、設定変更後高確移行抽選を旧実機情報として照合。
10. Pマンズ/遊技通信・プレイグラフ転載「遊技機検定情報（11月7日）」 — https://p-mans.blogspot.com/2011/11/
    - 2011-11-07東京都公安委員会検定通過、回胴式「PiaキャロットへようこそGO-S」を確認。
11. p-ken「Piaキャロットへようこそ!!G.O.」 — https://p-ken.jp/model/detail2?id=619
    - 機械割95.5〜109.7%の別系統照合。

## nextQaNotes

- gameCounterResetは「宵越し×」という当時運用資料を根拠にしており、設定変更で1400Gカウンタが0Gクリアと直接明記した別系統解析が見つかれば信頼度を引き上げる。
- 据え置き・単純電断・変更判別は一般的5号機挙動から補完しない。
- approvalNumberは正式型式「PiaキャロットへようこそGO-S」で公示/旧型式DB再探索余地あり。
