# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **619**
- latestMachineAdded: **巨人の星V～汗と涙と根性編～**（アリストクラートテクノロジーズ）
- latestRecord: `docs/real_machine_db/machines/2011-11-21_kyojin-no-hoshi-v.md`
- chronologicalFrontier: **2011-11-21**
- frontierLatestExactDateMachine: **巨人の星V～汗と涙と根性編～**
- schema: **resetBehavior v0.7**
- status: **CONTINUE_2011-11-21_SAME_DAY_GROUP**

## 今回の本線追加 — 巨人の星V～汗と涙と根性編～

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「浮浪雲」を再取得して開始。
- 開始時正本は **recordCount 618 / chronologicalFrontier 2011-11-14**。INDEXは旧19件地点のためREADME規定どおりINDEXより新しいLATEST_HANDOFFを進捗正本として使用。
- 2011-11-14同日群を再監査し、浮浪雲以外の未登録5号機を確定できず同日群を閉鎖。
- HAZUSEカレンダー上の **2011-11-18 → 11-19** を順に追加監査。検索語・資料系統を変えた今回の探索では、本DB対象となる具体的未登録パチスロ機を確定できず、11/21群へ進行。
- K-Naviで **巨人の星V～汗と涙と根性編～ 2011-11-21ホール導入開始**を確認。repo code searchで「巨人の星V」未検出を確認し619件目として追加。

### 性能コア

- 5号機 / ボーナス+ART / ゲーム数上乗せART。
- メーカー: **アリストクラートテクノロジーズ**。
- ホール導入: **2011-11-21**。
- 機械割: **96.4 / 98.5 / 101.1 / 105.3 / 110.1 / 114.8%**。
- BIG: **1/414.8 / 1/385.5 / 1/399.6 / 1/385.5 / 1/399.6 / 1/364.1**。
- REG: **1/712.4 / 1/668.7 / 1/697.2 / 1/668.7 / 1/697.2 / 1/642.5**。
- ボーナス合算: **1/262.1 / 1/244.5 / 1/254.0 / 1/244.5 / 1/254.0 / 1/232.4**。
- ART初当り（回顧整理値）: **約1/606 / 1/549 / 1/560 / 1/469 / 1/487 / 1/401**。
- 50枚ベース: **約34G/50枚**（回顧整理資料単独のためANALYSIS_SINGLE_RETROSPECTIVE）。
- ART「激闘TIME」: **約+1.5枚/G**。
- REG約**56枚**。
- BIG純増は **P-WORLD 約201枚 / パチマガスロマガ・回顧DB 約210枚**でCONFLICT。
- 通常天井: **ボーナス後800 / 1000 / 1200 / 1400Gのいずれか → ARTストック/天井ART確定**。
- coreStatus: **COMPLETE_CORE_WITH_BASIC_PAYOUT_CONFLICT**。

### resetBehavior v0.7

- K-Navi本機ページに「設定変更後の挙動」「天井ゲーム数振り分け」の専用解析項目が存在することまでは確認。
- ただし今回の取得経路では具体本文を安全に回収できず、設定変更時の天井進捗CLEAR/RETAIN、設定変更後天井振り分け、内部状態処理を断定しない。
- 設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックンを機種名表記揺れ・シリーズ名・メーカー名と組み替え、K-Navi、P-WORLD、パチマガスロマガ、旧天井DB、当時業界記事、回顧DBまで再探索。
- settingChangeBehavior / carryOverBehavior / powerCycleBehavior / gameCounterReset / ceilingAfterReset / modeAfterReset / stateAfterReset / resetDetection は、直接確定できない部分を **UNVERIFIED_AFTER_RESEARCH** とした。
- 設定変更専用短縮天井、朝一高確保証、朝一特定G以内当選率等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- resetQaStatus: **PARTIAL_RESET_BEHAVIOR_AFTER_RESEARCH**。

### CONFLICT / 表記差

1. **BIG純増**: P-WORLD約201枚、パチマガスロマガ/回顧整理DB約210枚。平均せずCONFLICT保持。
2. **メーカー後年表記**: 当時資料はアリストクラートテクノロジーズ。一部後年DBはクロスアルファ表記。本DBは2011年当時発売主体を採用。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 619 / chronologicalFrontier 2011-11-21**から開始。
2. **2011-11-21同日群を閉じずに継続**する。
3. repo未登録を確認してから、同日候補 **赤ドン雅（エレコ）** を620件目の第一候補として性能コア＋resetBehavior v0.7を処理する。
4. 赤ドン雅はパチビー/HAZUSE/当時業界資料で **2011-11-21導入**を確認済み。先行調査では通常天井1400G、設定変更しても天井ゲーム数を引き継ぐとの旧解析資料も見つかっているため、必ず別系統で再照合してからCONFIRMED化する。
5. 同日候補 **ミラクルジャグラー（北電子）** も2011-11-21導入資料を確認済み。赤ドン雅処理後、repo重複確認して同日群で続ける。
6. 11/21同日群には他候補が残る可能性があるため、赤ドン雅/ミラクルジャグラーだけで閉じず、K-Navi、HAZUSE、メーカー別一覧、当時業界記事で最終監査する。
7. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間を組み替えて再探索。
8. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-05

### 巨人の星V～汗と涙と根性編～
- K-Navi: `https://p-kn.com/slot/1524/`
- K-Navi 機械割: `https://p-kn.com/slot/1524/34185/`
- K-Navi 特訓・猛特訓: `https://p-kn.com/slot/1524/34199/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6534`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/45/a.php`
- グリーンべると: `https://web-greenbelt.jp/00002345/`
- アリストクラート公式アプリ紹介/ドラス: `https://www.value-press.com/pressrelease/96282`
- みんスロ: `https://minslo.com/%E5%B7%A8%E4%BA%BA%E3%81%AE%E6%98%9Fv/`
- 旧天井DB: `https://crankyseven.com/sp/tenjo-5ka.htm`
- HAZUSE新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`

### 次回候補確認
- 赤ドン雅 / パチビー: `https://www.pachibee.jp/machines/index/211090007`
- 赤ドン雅 / HAZUSE DATA: `https://data.hazuse.com/?genre=202&machine_code=1S0702`
- ミラクルジャグラー / アタリ7: `https://www.atari7.com/slot/miracle-juggler.php`

### 次回順序確認
- **2011-11-21同日群を継続。第一候補は赤ドン雅、その後ミラクルジャグラー。同日最終監査後に次の日付へ進む。**
