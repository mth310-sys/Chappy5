# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **819**
- latestRecordAdded: **ハイサイ蝶特急ターボ**（タイヨー）— 2014-05-19
- latestRecord: `docs/real_machine_db/machines/2014-05-19_haisai-cho-tokkyu-turbo.md`
- chronologicalFrontier: **2014-05-19**
- frontierLatestMachine: **ハイサイ蝶特急ターボ**
- schema: **resetBehavior v0.7**
- status: **2014-05-19_GROUP_CLOSED / 05-20_TO_05-25_BOUNDARY_CLOSED**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、直前レコード `docs/real_machine_db/machines/2014-05-19_maidol-knight.md` を再読して正本化。
- INDEXは旧19件集約のままなのでREADME規定に従い、より新しいLATEST_HANDOFFと実レコードを進捗正本として継続。
- 作業開始時の正本は **818件 / 2014-05-19 / 05-19_GROUP_OPEN**。
- handoff指定の次の未処理 **ハイサイ蝶特急ターボ（タイヨー）— 2014-05-19** を819件目として追加。

## 今回追加 — ハイサイ蝶特急ターボ

### identity / 性能コア

- manufacturer: **タイヨー**。
- formalModelName: **ハイサイ蝶特急ターボA**。
- inspectionNumber: **4S0120**。
- hall start: **2014-05-19**。K-Navi、HAZUSEで一致。
- generation/system: **5号機 / AT / ハイサイチャンス+蝶特急モード / 規定ゲーム数管理**。
- payoutRateBySetting: **94.4 / 97.5 / 99.5 / 104.3 / 106.6 / 112.6%**。K-Navi、P-WORLD、HAZUSE一致。
- main AT initial hit（解析系列）: **約1/689 / 576 / 501 / 472 / 474 / 446**。後年回顧の約1/688.9〜1/446.2とレンジ一致。
- published 蝶特急MODE rate: **1/147.9 / 130.3 / 107.5 / 100.3 / 95.4 / 91.1**。K-Navi/P-WORLD/HAZUSE一致するがAT初当たり解析系列と定義が一致しないため **DEFINITION_CONFLICT** として平均せず併記。
- ハイサイチャンス: 約 **1/50**。
- baseGamesPer50: **32.41G/50枚**（パチマガスロマガ）。crankyseven約32G/千円と整合。
- netIncrease: **約3.0枚/G**。
- ハイサイチャンス: **5G固定**。
- 蝶特急モード: **初期20〜300G**。
- 通常ゲーム数天井: **77G** → 超確変。業界発表でも前作128G→本機77Gを確認。
- 回数天井: 蝶特急モード非当選HC **最大24回**。
- coreStatus: **COMPLETE_CORE_WITH_DEFINITION_CONFLICT_SAFEGUARD**。

### resetBehavior v0.7

- settingChangeBehavior: **設定変更で77G天井到達までのゲーム数CLEAR**。複数解析資料で一致。
- HCスルー回数: 当時P-WORLD掲示板のスロマガ2014年7月号解析引用で **設定変更時RESET / 据え置き時翌日CARRYOVER**。独立原本本文を取得できていないため信頼度はPERIOD_ANALYSIS_CITATION_SINGLE。
- powerCycleBehavior: 設定変更なし電源OFF→ONだけの77G内部G、HC回数、モード/状態契約は **UNVERIFIED_AFTER_RESEARCH**。
- modeAfterReset: 公開解析レンジ **通常91.96〜85.96% / チャンス8〜14% / 超確変0.04%**（設定1〜6レンジとして掲載）。全設定別完全表は未復元のため中間値を推定しない。
- ceilingAfterReset: リセット専用別天井G数は確認なし。通常77G天井は本来のゲーム性で、リセット短縮天井ではない。
- stateAfterReset: 究極状態等の設定変更/据え置き/純電断契約は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 設定変更時モード再選択で超確変モード **0.04%** の公開値あり。ただし「朝一77G到達率0.04%」ではない。
- resetPenalties: 設定変更で前日77G天井進捗を失う。スロマガ解析引用に基づけばHCスルー回数進捗も失う。
- resetDetection: 本機固有ガックン/初期出目/ランプ等の直接契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: 上記設定変更時モード移行レンジを保存。
- resetBehaviorQA: **PARTIAL_DIRECT_SETTING_CHANGE_WITH_CARRYOVER_OBSERVATION**。

## conflicts / safeguards

- 「蝶特急MODE確率 1/147.9〜1/91.1」と「AT初当たり 約1/689〜1/446」は定義が一致しないため平均しない。
- 77Gは通常最大天井であり、設定変更専用短縮天井ではない。
- 設定変更時超確変モード0.04%を朝一77G到達率へ変換しない。
- HC回数RESET/CARRYOVERは当時スロマガ解析の掲示板引用であり、メーカー直接契約扱いしない。
- 前作ハイサイ蝶特急2の128G天井/resetBehaviorを混入しない。

## 2014-05-19群 / 境界監査

K-Navi全国一斉導入カレンダー掲載パチスロ:
1. **メイドルナイト**（JIN）— No.818 / 処理済み
2. **ハイサイ蝶特急ターボ**（タイヨー）— No.819 / 処理済み

- K-Navi月間カレンダーと追加の具体日検索で05-19の他パチスロ未登録候補を固定できず、**2014-05-19_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 同カレンダーでは次のパチスロ具体日が2014-05-26。05-20〜05-25も今回具体日付き未登録機を固定できず、**05-20_TO_05-25_BOUNDARY_CLOSED_FOR_CURRENT_RESEARCH**。

## 次回再開地点

1. **recordCount 819 / chronologicalFrontier 2014-05-19 / 05-19_GROUP_CLOSED / 05-20〜05-25境界CLOSED** から開始。
2. 次の具体日群は **2014-05-26_GROUP_OPEN**。
3. K-Navi掲載順の未処理候補:
   - **B-MAX**（アクロス）— 2014-05-26
   - **麻雀格闘倶楽部**（KPE）— 2014-05-26
   - **パチスロ御伽屋HANZO**（タイヨーエレック）— 2014-05-26
4. まずB-MAXの既存登録有無を最新mainで再確認し、未登録ならNo.820候補として処理。既登録なら次の未処理へ進む。
5. 05-26群処理後は全メーカー横断再監査してCLOSED判定。
6. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-04_pachislot-abarenbo-shogun.md` を維持。
7. 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 主要出典 — 取得日 2026-09-07

### 境界 / 導入日
- K-Navi 2014年5月全国一斉導入カレンダー: `https://p-kn.com/calendar/201405/`

### ハイサイ蝶特急ターボ
- K-Navi: `https://p-kn.com/slot/2053/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7373`
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0120/`
- パチマガスロマガ 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/80/a.php`
- パチマガスロマガ 小役/50枚: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/80/c.php`
- グリーンべると 2014-04-22発表会記事: `https://web-greenbelt.jp/00006182/`
- crankyseven: `https://crankyseven.com/haisaityoutokkyu-turbo-pc.htm`
- 設定変更時モード移行率: `https://ameblo.jp/mpkhb1311/entry-11884275964.html`
- 天井解析: `https://ameblo.jp/mpkhb1311/entry-11884258572.html`
- 2-9伝説: `https://2-9densetsu.com/haisaichotokkyu/`
- P-WORLD当時掲示板（スロマガ解析引用）: `https://www.p-world.co.jp/sp/search_kisyubbs.cgi?group_id=4264&mode=thread_list`
- パチ7回顧: `https://pachiseven.jp/articles/detail/11044`
