# シスタークエスト2 ～魔剣の騎士と白銀の巫女～

machineName: シスタークエスト2 ～魔剣の騎士と白銀の巫女～
manufacturer: SNKプレイモア
formalModelName: シスタークエスト2D
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
aliases: シスタークエスト2 / シスクエ2 / シスタークエスト2D
generation: 5号機
releaseDate: 2011-01-11
releaseDateStatus: HIGH_CONFIDENCE
systemType: ノーマルA / ボーナス主体 / 天井RT
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、直前540「じゃりン子チエ 雷蔵伝説」を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount 540 / chronologicalFrontier 2011-01-24。
- LATEST_HANDOFFに「外部一覧で2011-01-11導入表記、未登録なら時系列遡及漏れとして先に補完」と明示されていた本機をrepo検索し、未登録を確認。
- K-Naviがホール導入開始を2011-01-11と直接掲載。2010年11月の業界/一般記事は2011年1月中旬または2011年1月全国導入予定としており整合する。
- 2011年1月11日導入の同日機を扱う後年回顧資料でも、ハーレムエース2と本機が同日導入開始と整理されている。
- 541件目としてBACKFILL追加。chronologicalFrontierは2011-01-24を維持する。

## payoutRateBySetting

K-Navi掲載値（自社調べ）:
- 設定1: **96.7%**
- 設定2: **98.3%**
- 設定3: **100.2%**
- 設定4: **104.5%**
- 設定5: **108.4%**
- 設定6: **112.2%**

confidence: ANALYSIS_SINGLE

## initialHitBySetting

### BIG合算
- 設定1: **1/268.5**
- 設定2: **1/268.5**
- 設定3: **1/262.1**
- 設定4: **1/253.0**
- 設定5: **1/238.3**
- 設定6: **1/228.3**

### REG合算
- 設定1: **1/455.1**
- 設定2: **1/420.1**
- 設定3: **1/390.1**
- 設定4: **1/346.7**
- 設定5: **1/316.6**
- 設定6: **1/291.2**

### ボーナス合算
- 設定1: **1/168.9**
- 設定2: **1/163.8**
- 設定3: **1/156.7**
- 設定4: **1/146.2**
- 設定5: **1/135.9**
- 設定6: **1/128.0**

K-Naviの基本スペック値を採用。2010年当時の業界記事もボーナス合算を設定1約1/168～設定6約1/128と紹介しておりレンジ整合。
confidence: ANALYSIS_HIGH_RANGE_CROSSCHECK

## baseGamesPer50

パチマガスロマガ保存ページ掲載値:
- 設定1: **34.26G / 1000円**
- 設定2: **34.81G / 1000円**
- 設定3: **35.55G / 1000円**
- 設定4: **35.98G / 1000円**
- 設定5: **36.37G / 1000円**
- 設定6: **36.91G / 1000円**

50枚=1000円等価表記の通常時ベースとして保持。
confidence: ANALYSIS_SINGLE_ARCHIVE

## netIncrease

- 天井到達後RT: **次回ボーナスまで継続する現状維持型RT**
- 比較可能な純増枚数/Gの直接公開値は、表記揺れ・型式名・「RT純増/現状維持/増加枚数」等で再探索したが今回確定できず。

netIncreaseNumeric: **UNVERIFIED_AFTER_RESEARCH**
confidence: ANALYSIS_HIGH for current-maintenance RT structure

## basicPayout

- BIG: **約312枚**
- REG: **約104枚**
- K-Naviの払い出し終了条件: BIG **345枚超払い出し** / REG **105枚超払い出し**

P-WORLD系保存機種情報でもBIG約312枚・REG約104枚を確認。
confidence: ANALYSIS_HIGH

## modeSpecificMinimumData

- ボーナス主体のノーマルAタイプ。
- 通常時のAT/ART/CZ初当たり構造は非該当。
- 天井RTはボーナス種別で開始ゲーム数が異なる。
  - **BIG終了後999G**消化で天井RT
  - **REG終了後777G**消化で天井RT
- 天井RTは**次回ボーナスまで**継続する現状維持型。
- 天国/通常等の長期ゲーム数モードは確認されず、本DB目的上は `NO_DEDICATED_GAME_MODE_CONFIRMED`。

confidence: ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **VERIFIED_PARTIAL**。P-WORLD旧機種情報が「設定変更しても天井までの消化ゲーム数はリセットされない」と直接掲載。中古機DBの保存情報でも同内容を確認。設定変更時の液晶/リール初期状態や別の内部状態再抽選については直接資料を確定できず。

carryOverBehavior: **CEILING_GAME_COUNTER_CARRYOVER_VERIFIED**。P-WORLDは設定変更後でも前日の大ハマリ台について「宵越し天井RT狙いが可能」と説明しており、日跨ぎでBIG後999G/REG後777Gの天井進捗が保持されることを直接示す。その他の表示状態等はUNVERIFIED_AFTER_RESEARCH。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。機種名/型式名/メーカー名＋「電源OFF ON / 電断 / 電源入切 / 朝一 / 据え置き」で検索したが、設定変更を伴わない単純電源OFF→ON時の処理を本機固有の直接本文で確定できず。設定変更でも天井進捗保持という事実から自動推定はしない。

gameCounterReset: **RETAIN_ON_SETTING_CHANGE / VERIFIED_CROSS_ARCHIVE**。設定変更でも天井までの消化ゲーム数はリセットされない。

ceilingAfterReset: **NO_RESET_RESTART / NO_SHORTENED_RESET_CEILING_CONFIRMED**。設定変更でカウンタを0に戻さず、直前ボーナス種別に応じた通常天井（BIG後999G / REG後777G）の残り進捗を保持。設定変更専用短縮天井は確認されない。

modeAfterReset: **NOT_APPLICABLE_AS_LONG_GAME_MODE / NO_DEDICATED_MODE_CONFIRMED**。ノーマルA＋天井RT機で、朝一専用モードや長期ゲーム数モードの公開情報は確認されず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時に天井ゲーム数が保持されることは確認できるが、液晶演出状態や内部状態等の別パラメータ処理は本機固有資料を確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）。

resetBenefits:
- 客側: **設定変更されても前日天井進捗が消えないため宵越し天井狙いが成立**。
- 設定変更専用の高確スタート、短縮天井、ボーナス優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。

resetPenalties:
- 客側の設定変更固有の不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
- ホール側から見ると、設定変更だけでは深い天井進捗を消去できない点が運用上の制約になる。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。機種名/型式名＋「ガックン / リールガックン / 朝一出目 / 初期出目 / 設定変更判別 / 据え置き判別」で再探索したが、本機固有の確定的な変更判別要素を確認できず。天井進捗自体が変更でも保持されるため、ゲーム数だけで設定変更/据え置きを判別できるとはしない。

numericResetData:
- bigCeiling: **BIG終了後999G -> 次回ボーナスまで現状維持型RT**
- regCeiling: **REG終了後777G -> 次回ボーナスまで現状維持型RT**
- settingChangeGameCounter: **RETAIN**
- overnightCeilingCounter: **RETAIN / 宵越し可能**
- resetDedicatedShortCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **NOT_APPLICABLE / NONE_CONFIRMED**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleCounter: **UNVERIFIED_AFTER_RESEARCH**
- resetDetectionNumeric: **NONE_CONFIRMED**
- advantageousSection: **NOT_APPLICABLE**

resetBehaviorQA: **RESEARCHED_WITH_DIRECT_CEILING_CARRYOVER_EVIDENCE**

## conflicts

- 今回、同一定義の主要性能値またはresetBehaviorで平均化が必要な競合は確認していない。
- 現行スマスロ「Sister Quest / シスタークエスト」（2025年導入）の検索結果が多数混入するため、2011年SNKプレイモア5号機「シスタークエスト2D」と型式/導入年を照合し、別機種情報は除外した。

## missingFields

- inspectionNumber: **UNVERIFIED_AFTER_RESEARCH**
- netIncreaseNumeric: **UNVERIFIED_AFTER_RESEARCH**（天井RTが現状維持型であることは確認）
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## sources

取得日: **2026-09-04**

1. K-Navi — シスタークエスト2 基本・スペック・導入日
   - https://p-kn.com/slot/1321/
   - 2011-01-11ホール導入開始、BIG/REG/合算、払い出し終了条件、天井項目を確認。
   - confidence: ANALYSIS_HIGH

2. K-Navi — 機械割&期待収支
   - https://p-kn.com/slot/1321/28815/
   - 設定別機械割96.7～112.2%。自社調べ表記。
   - confidence: ANALYSIS_SINGLE

3. パチマガスロマガ保存ページ — 通常時1000円あたりゲーム数
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/32/c.php
   - 設定別34.26～36.91G/1000円。
   - confidence: ANALYSIS_SINGLE_ARCHIVE

4. P-WORLD — 旧シスタークエスト2機種DB
   - https://www.p-world.co.jp/machine/database/6169
   - BIG約312枚/REG約104枚、BIG後999G/REG後777G天井RT、設定変更でも天井消化G数非リセット、宵越し可能を確認。
   - confidence: ANALYSIS_HIGH

5. 中一商事 中古機保存ページ — シスタークエスト2D
   - https://www.nakaiti.com/html/sSNK078.html
   - 型式名シスタークエスト2D、5号機ノーマルA、基本獲得、天井、設定変更後も天井G非リセットを照合。
   - confidence: ARCHIVE_SECONDARY

6. P-Mans / PlayGraph転載 — SNKプレイモア新機種発表
   - https://p-mans.blogspot.com/2010/11/
   - 2010-11-15発表、2011年1月中旬市場導入予定、Aタイプ＋天井RT、ボーナス合算レンジを確認。
   - confidence: INDUSTRY_ARCHIVE

7. アニメ！アニメ！ — 2010-11-14製品紹介
   - https://animeanime.jp/article/2010/11/14/7181.html
   - SNKプレイモア発売、2011年1月全国導入予定の時期確認。
   - confidence: SECONDARY

8. パチ7 回顧記事 — 2011年1月導入機振り返り
   - https://pachiseven.jp/articles/detail/18844
   - ハーレムエース2とシスタークエスト2が同日導入開始との時系列照合。
   - confidence: RETROSPECTIVE_SECONDARY

## DB用途メモ

- ノーマルタイプの設定別機械割・ボーナス確率・ベースを持つ比較サンプルとして有用。
- resetBehaviorでは「**設定変更しても天井ゲーム数を保持する5号機**」の明確な物差し例。
- ホール経営AIでは、前日深いハマリを設定変更だけで消せないため、朝一客が宵越し天井を狙う動機を再現できる。
- 細かなボーナス同時当選役、設定判別演出、通常小役確率等は実機完全再現用のため本ミッションでは収集しない。
