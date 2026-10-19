# パチスロ蒼天の拳

machineName: パチスロ蒼天の拳
manufacturer: サミー
formalModelName: 蒼天の拳Z
approvalNumber: 9S1458
releaseDate: 2010-05-10
releaseDateStatus: CONFLICT
releaseDateNote: K-Navi/パチビーおよび2010年3月時点の当時新機種資料は2010-05-10導入開始。HAZUSEは2010-05-07を導入開始日としているため平均化せずCONFLICT保持。本DB時系列主値は複数資料が一致する2010-05-10を採用。
generation: 5号機
systemType: ボーナス＋ストック式ART / モード管理 / 天井
coreStatus: COMPLETE_CORE_EXCEPT_BASE_RESET_PARTIAL_RELEASEDATE_CONFLICT_PAYOUT_MINOR_CONFLICT

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線実レコードを再取得。
- 開始時正本は recordCount 479 / chronologicalFrontier 2010-04-19。旧INDEXの19件地点へ戻らずLATEST_HANDOFF＋main実レコードを正本として使用。
- 2010-04-19同日群、4/20〜30をK-Navi月間導入カレンダー・当時業界資料で境界監査。4/26候補ファニーサンタ2は479として処理済みで重複追加しない。
- 次の未登録具体日候補として初代「パチスロ蒼天の拳」をrepo検索し未登録確認。2010-05-07/05-10の日付競合を保持したまま480件目として追加。

## payoutRateBySetting

設定1〜6:
- 設定1: **96.5%**
- 設定2: **98.1〜98.2%**
- 設定3: **100.1〜100.2%**
- 設定4: **103.2〜103.3%**
- 設定5: **106.4%**
- 設定6: **113.1%**

当時2010年3月の新機種資料は 96.5 / 98.2 / 100.2 / 103.3 / 106.4 / 113.1%。後年初代整理資料は 96.5 / 98.1 / 100.1 / 103.2 / 106.4 / 113.1%。設定2〜4の0.1pt差は丸め/資料差として平均せず範囲保持。

confidence: ANALYSIS_MULTI_SOURCE_WITH_MINOR_CONFLICT

## initialHitBySetting

### BIG＋ART合成
- 設定1: **1/293.0**
- 設定2: **1/280.2**
- 設定3: **1/266.5**
- 設定4: **1/248.8**
- 設定5: **1/231.0**
- 設定6: **1/205.2**

HAZUSE・パチビーで一致。

### ART初当たり（パチビー）
- 設定1: **1/327**
- 設定2: **1/313**
- 設定3: **1/297**
- 設定4: **1/276**
- 設定5: **1/255**
- 設定6: **1/224**

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**
- 「初代 / 蒼天の拳Z / 9S1458 / 50枚 / 1000円 / ベース / コイン持ち」を組み替えて再探索したが、検索結果が後継「蒼天の拳2」「蒼天の拳4」と混在。初代固有の高信頼な比較可能値を確定できず、後継機の数値を流用しない。

confidence: UNVERIFIED_AFTER_RESEARCH

## netIncrease

- ART「死合の刻」「天授の儀」: **約+1.7枚/G**
- **1セット40G**
- 死合の刻: 平均連チャン約3〜3.5回
- 天授の儀: 平均8連超の上位ART

HAZUSE・パチビー・当時新機種資料で整合。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## basicPayout

- 蒼天BB: **約300枚**、終了後「天授の儀」突入確定
- 玉玲BB（白7BB）: **約300枚**、ボーナス中/終盤バトル等を経由してART抽選
- 規定上は408枚超の払い出しでBIG終了

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時内部モード: **低確 / 通常 / 高確 / 超高確**。
- レア役成立時の内部状態でART当選期待度が変化し、前兆は最大32G。
- ARTは「死合の刻」「天授の儀」の2種、ストック式。
- 通常天井: HAZUSEは **通常ゲーム1200Gハマリ後、最大32G前兆を経てART**。
- パチビーはより具体的に **BIG後1200G消化後 or ART後1160G消化後、最大32G前兆でART** と記載。
- 後年回顧に900G時点の救済抽選記述もあるが、今回高信頼資料で具体率まで再確認できず、1200G/1160Gの直接確認値を主値とする。

confidence: INDUSTRY_ANALYSIS_MULTI_SOURCE

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED**。パチビーの本機ページが「設定変更後は高設定ほど天国モードに移行しやすい」と明記。したがって設定変更時に通常時モードの再振り分けが行われること、および高設定ほど天国側が優遇されることは採用する。ただし設定別の具体振り分け率は今回公開本文から確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のBIG後1200G/ART後1160G進捗、内部モード、ARTストック等の保持を本機固有の直接資料で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時のゲーム数進捗・内部モード・ARTストック/前兆状態の保持または初期化を直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更時にBIG後1200G/ART後1160Gの天井進捗がclear/retainのどちらかを直接確定できず。通常天井仕様自体とは分離。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用の短縮天井数値は今回高信頼資料で確認できず。通常天井はBIG後1200G / ART後1160G＋最大32G前兆。

modeAfterReset: **PARTIAL_CONFIRMED**。設定変更時に天国モード移行抽選があり、高設定ほど天国に移行しやすい。具体振り分け率はUNVERIFIED_AFTER_RESEARCH。

stateAfterReset: **PARTIAL_CONFIRMED_MODE_ONLY**。通常時モード再振り分けは確認。ARTストック、前兆、その他内部状態の設定変更時処理はUNVERIFIED_AFTER_RESEARCH。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **CONFIRMED_CONDITIONAL**。設定変更後の天国モード移行が存在し、高設定ほど優遇。朝一に天国/前兆濃厚演出が出れば設定変更かつ高設定期待が上がるとパチビーが記載。設定変更だけで天国確定ではない。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。天井ゲーム数やARTストック消失を直接確認できていないため推測で不利認定しない。

resetDetection: **PARTIAL_PROBABILISTIC**。朝一の上部サイドランプ点灯矛盾、大オーラ、拳志郎が服を破る、キリン柄等の天国/前兆モード示唆が出れば設定変更かつ高設定期待度が高まる。ただし確定的な変更判別ではなく確率的示唆。

numericResetData:
- normalCeilingAfterBIG: **1200G + 最大32G前兆**
- normalCeilingAfterART: **1160G + 最大32G前兆**
- resetModeDistribution: **高設定ほど天国モードへ移行しやすい / 具体率UNVERIFIED_AFTER_RESEARCH**
- resetCeilingShortening: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetectionNumeric: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: SETTING_CHANGE_MODE_PARTIAL_CONFIRMED_CARRYOVER_POWER_CYCLE_GAME_COUNTER_UNVERIFIED_DETECTION_PROBABILISTIC

## conflicts

- **releaseDate CONFLICT**: HAZUSE 2010-05-07 vs K-Navi/パチビー/当時新機種資料 2010-05-10。主値は複数一致の2010-05-10。
- **PAYOUT MINOR CONFLICT**: 当時資料 96.5/98.2/100.2/103.3/106.4/113.1 vs 後年初代整理 96.5/98.1/100.1/103.2/106.4/113.1。平均せず範囲保持。
- **天井表現差**: HAZUSEは通常1200G、パチビーはBIG後1200G/ART後1160Gと具体化。矛盾ではなく起点定義の詳細差として両方保持。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- setting-change exact heaven-mode distribution: UNVERIFIED_AFTER_RESEARCH
- setting-change ceiling counter clear/retain: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- ART stock/前兆状態の設定変更・電断処理: UNVERIFIED_AFTER_RESEARCH
- public reset-specific morning numeric rate: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. HAZUSE「パチスロ蒼天の拳」 — https://hazuse.com/machine/pachislot/9S1458/ — 型式 蒼天の拳Z、検定9S1458、導入2010-05-07、BIG+ART合成、通常4モード、ART40G・約+1.7枚/G、通常1200G天井 — reliability: ANALYSIS_HIGH_DB
2. パチビー「パチスロ 蒼天の拳」 — https://www.pachibee.jp/machines/index/210030005 — 導入2010-05-10、ART40G・約+1.7枚/G、設定変更後の天国モード傾向、朝一判別示唆、BIG後1200G/ART後1160G天井、ART初当たり — reliability: INDUSTRY_MEDIA_DB
3. K-Navi「パチスロ蒼天の拳」 — https://p-kn.com/slot/1188/ — 2010-05-10ホール導入開始、BIG+ART合成 — reliability: ANALYSIS_DB
4. 2010年当時「パチスロ新機種『パチスロ蒼天の拳(サミー)』スペック詳細」 — https://ameblo.jp/pachimatome/entry-10468397859.html — 2010-05-10導入、型式、機械割系列、BIG+ART合成、約300枚BIG — reliability: CONTEMPORARY_SECONDARY
5. 初代蒼天の拳回顧整理 — https://pachislot.win/pachislot-souten-no-ken-shodai-guide/ — 機械割96.5/98.1/100.1/103.2/106.4/113.1、初代識別照合 — reliability: RETROSPECTIVE_SECONDARY
