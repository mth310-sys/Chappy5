# 茉莉花の剣

machineName: 茉莉花の剣
manufacturer: ネット（NET）
releaseDate: 2010-09-27
releaseDateStatus: EXACT_DAY_CONFIRMED
releaseDateNote: K-Naviがホール導入開始2010年9月27日と明記。P-WORLD/5号機クロニクルも2010年9月導入として整合。
generation: 5号機
systemType: A+ART / CZ搭載 / ゲーム数・セット数上乗せART
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
coreStatus: COMPLETE_CORE_WITH_BASE_AND_RESET_LOW_LEVEL_UNVERIFIED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、511「沖楽」を再取得。
- INDEXは旧19件地点のためREADME規定どおりLATEST_HANDOFF＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount 511 / chronologicalFrontier 2010-09-21。
- 9/21同日群と9/7〜20境界を再監査し、既知候補「茉莉花の剣」をrepo検索して未登録を確認。
- K-Naviで2010-09-27導入を直接確認したため、512件目として追加しchronologicalFrontierを2010-09-27へ前進する。

## payoutRateBySetting

- 設定1: **96.5%**
- 設定2: **98.0%**
- 設定3: **100.0%**
- 設定4: **102.5%**
- 設定5: **105.0%**
- 設定6: **110.0%**

P-WORLDの設定別機械割を主値として採用。5号機クロニクルでも設定1〜5は96.5/98.0/100.0/102.5/105.0%で整合するが、同ページの設定6欄は取得表示上欠落しているため設定6はP-WORLD直接値。
confidence: ANALYSIS_HIGH / PARTIAL_MULTI_SOURCE_CONFIRMATION

## initialHitBySetting

### BIG合算
- 設定1: **1/378**
- 設定2: **1/381**
- 設定3: **1/376**
- 設定4: **1/378**
- 設定5: **1/374**
- 設定6: **1/376**

### REG
- 設定1: **1/420**
- 設定2: **1/412**
- 設定3: **1/404**
- 設定4: **1/397**
- 設定5: **1/387**
- 設定6: **1/378**

### ボーナス合算
- 設定1: **1/199**
- 設定2: **1/197**
- 設定3: **1/195**
- 設定4: **1/193**
- 設定5: **1/190**
- 設定6: **1/188**

P-WORLD掲載値。K-Naviはボーナス+ART合成を設定1 **1/101**、設定6 **1/80**と掲載するが、設定2〜5は未発表。これは「ボーナス合算」と定義が異なるため混ぜずに別系列で保持する。
confidence: ANALYSIS_HIGH

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

「茉莉花の剣 / まりかのけん / NET / ネット」と「50枚 / 1000円 / ベース / コイン持ち / 通常時小役」を組み替え、P-WORLD、K-Navi、5号機回顧DB、当時ブログ/攻略索引まで横断したが、物差し比較に使える直接値を確定できなかった。通常時小役確率からの逆算は行わない。
confidence: UNVERIFIED

## netIncrease

- ART「試練の刻」: **約+1.3枚/G**
- 基本1セット: **40G+α**

P-WORLDとK-Naviで約1.3枚/Gを確認。P-WORLDは1セット40G+αを直接掲載。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## basicPayout

- 赤7BIG: **約275枚**
- 青7BIG: **約208枚**
- REG: **約70枚**

P-WORLD直接値。当時2010年実戦/紹介記事でも同獲得目安を確認。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- ART「試練の刻」は押し順ARTで、1セット40G+α、約+1.3枚/G。
- ARTはセット数上乗せとゲーム数上乗せの双方を持つ。
- 通常時には20G固定のCZがあり、2択リプレイの押し順正解からART抽選を受ける構造をK-Naviで確認。
- 天井は**ボーナスおよびART間899G**消化で前兆を経てARTへ突入。P-WORLD直接値と2010年当時資料で一致。
- K-Navi掲載のボーナス+ART合成は設定1 1/101、設定6 1/80。設定2〜5は未発表のため補間しない。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL / DIRECT_DETAIL_UNAVAILABLE_AFTER_RESEARCH**。K-Naviの本機ページに「設定変更後の挙動」という専用解析項目が存在することは確認できたが、現行取得環境では当該個別ページ本文が取得不能。設定変更時の天井カウンタ、CZ/ART状態、内部状態を一般論から補完しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。899G天井が存在するため据え置き時のゲーム数持越しは朝一価値に直結するが、本機固有の「据え置き時は899G進捗を引き継ぐ」と直接読める本文を今回確定できなかった。推測しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONだけの場合の899G進捗、CZ/ART/RT内部状態、表示状態の処理を本機固有資料から確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井条件「ボーナスおよびART間899G」は確定。ただし設定変更時に進捗がクリア/引継ぎのどちらかは専用解析本文を取得できず固定しない。

ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH / BASE_CEILING_899G_CONFIRMED**。リセット専用の短縮天井値は、検索語と資料系統を変えた再探索でも直接確認できず。通常天井899Gと混同しない。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。本機の通常時CZ/ART抽選に関係する内部状態・モードの設定変更時処理を直接確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ARTストック、CZ/RT状態、内部高確等の設定変更/電源断時処理について、ホール経営・朝一判断に必要な粒度の直接資料を確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、ART付与、CZ確定、初当たり率優遇等の数値恩恵は今回確定できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更で天井進捗やARTストック等を失うと直接明記する高信頼本文は今回確定できず。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。「茉莉花の剣 / NET」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ガックン / 初期出目」を組み替えて再探索したが、本機固有のガックン確率・初期出目・表示による変更判別を確定できず。

numericResetData:
- normalCeiling: **899G（ボーナスおよびART間）**
- resetDedicatedCeiling: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDedicatedModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetDedicatedInitialHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- gakkunExactProbability: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: RESEARCHED_WITH_KNAVI_RESET_SECTION_EXISTENCE_CONFIRMED_BUT_DETAIL_BODY_UNAVAILABLE

## conflicts

- 現時点で採用した性能コアの明確な数値CONFLICTはなし。
- 5号機クロニクルの茉莉花の剣節には、P-WORLD/K-Naviと異なるART名称・セットG数等を含む後年回顧記述が混在するため、ART基本性能はP-WORLD/K-Naviの直接機種ページを優先し、その回顧記述を主値へ採用しない。
- K-Naviの「ボーナス+ART合成」1/101（設定1）・1/80（設定6）はP-WORLDの「ボーナス合算」1/199〜1/188とは定義が異なる。CONFLICTではなく別指標として保持。

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の899G天井進捗処理: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- mode/stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: **2026-09-04**

1. K-Navi「茉莉花の剣」 — ホール導入2010-09-27、ART約+1.3枚/G、20G CZ、ボーナス+ART合成、天井/設定変更後の挙動の専用解析項目存在
   - https://p-kn.com/slot/1269/
   - confidence: ANALYSIS_HIGH
2. P-WORLD「茉莉花の剣」 — メーカー/5号機A+ART、設定別BIG/REG/ボーナス合算/機械割、赤7BIG約275枚・青7BIG約208枚・REG約70枚、ART40G+α/約+1.3枚/G、ボーナスおよびART間899G天井
   - https://www.p-world.co.jp/_machine/hoollst.cgi?ken=all&kisyu=%EF%BF%BD%EF%BF%BD%E8%BD%B2%D6%A4%CE%B7%EF%BF%BD&kisyukind=&mno=p6074
   - confidence: ANALYSIS_HIGH
3. 5号機クロニクル「ネット」一覧 — 2010年9月、機械割設定1〜5の照合に使用。ARTゲーム性の後年記述には他資料との不整合があるため補助扱い
   - https://5goki.com/net
   - confidence: ANALYSIS_SINGLE_WITH_CONTENT_CAUTION
4. 2010-10-08 当時実戦/紹介記録 — 赤BIG約275枚、青BIG約208枚、REG約70枚、ART40G、ボーナス/ART後899G天井を当時記録として照合
   - https://plaza.rakuten.co.jp/gaebulggaebolga/diaryall/
   - confidence: CONTEMPORARY_SECONDARY

## sourceResearchNote

- 導入日: 「茉莉花の剣 2010 9月27日 / 導入日 / ホール導入」でK-Naviを確認。
- 性能: 「機械割 / BIG / REG / ボーナス / ART / 純増 / 50枚 / 1000円 / コイン持ち」を組み替え、P-WORLD/K-Navi/回顧DB/当時記録を横断。
- resetBehavior: 「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / ガックン」を機種名・メーカーと組み合わせて再探索。K-Naviに本機専用「設定変更後の挙動」項目が現存することは確認したが、個別本文URLは取得環境でcache missとなり詳細値を読めなかったため、一般論で補完せずUNVERIFIEDを維持。
- 型式/検定: 「型式 / 型式名 / 検定 / 検定番号 / NET」を追加して再探索したが安全に固定できる直接資料を確定できず。