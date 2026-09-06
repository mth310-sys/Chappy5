# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **777**
- latestMachineAddedByChronology: **パチスロ タイガーマスク**（SANKYO）
- latestRecord: `docs/real_machine_db/machines/2013-11-18_tiger-mask.md`
- chronologicalFrontier: **2013-11-18**
- frontierLatestExactDateMachine: **パチスロ タイガーマスク**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-11-18_GROUP__TIGER_MASK_DONE__NEXT_MAGICAL_HALLOWEEN_4**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-11-18_tales-of-destiny.md` を再読してから継続。
- INDEXは旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を正本扱い。
- 作業開始時正本は **recordCount 776 / chronologicalFrontier 2013-11-18 / 11-18群OPEN / テイルズ オブ デスティニー済み / 次タイガーマスク**。
- GitHub検索で既存レコード不在を確認した **「パチスロ タイガーマスク」** を777件目として追加。
- 11-18群はまだOPEN。既知残存候補は **マジカルハロウィン4 / パチスロ スタードライバー**。次はマジカルハロウィン4から処理する。

## 今回追加 — パチスロ タイガーマスク

### identity / 性能コア

- manufacturer: **SANKYO**。
- modelName / official sales name: **パチスロ タイガーマスク**。
- releaseDate: DB本線 **2013-11-18**。HAZUSE / ALL7 / パチビーでexact day一致。一方SANKYO公式オンライン博物館は「導入年月 2013.10」とするため、月差をCONFLICT注記として保持。
- generation/system: **5号機 / ART / CZ / ゲーム数管理 / 天井**。
- 機械割: **96.5 / 98.3 / 100.1 / 105.0 / 107.7 / 112.8%**。HAZUSE / パチマガスロマガ / すろぱちくえすとで一致。
- ART初当たり: **1/276.9 / 261.6 / 245.3 / 234.1 / 212.8 / 178.0**。SANKYO公式 + 複数解析で一致。
- baseGamesPer50: 検索語・資料系統を変えても比較可能な直接値を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ART「タイガーRUSH」: **1セット30G+α / 純増約2.4枚/G**。赤7は30G以上、白7は100G以上、初期30〜300G。
- モード別最大規定G: 通常A **1000G** / 通常B **700G** / 天国 **100G**。
- ART間最大天井: **1000G**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### resetBehavior v0.7

- HAZUSEで **ART終了時・設定変更時にモード移行抽選**を確認。
- 設定変更時モードは全設定共通 **通常A 75.0% / 通常B 25.0% / 天国0%**。
- HAZUSEで設定変更時の高確A移行率 **25.0%（全設定共通）**を確認。
- すろぱちくえすとで **設定変更時は天井までのゲーム数リセット**を確認。
- setting change game counter: **CLEAR_CONFIRMED_ANALYSIS_SINGLE**。
- ceilingAfterReset: 朝一専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時モードから最大1000G。
- carry-over: 据え置き時のゲーム数 / モード / 状態完全保持契約は **UNVERIFIED_AFTER_RESEARCH**。設定変更時リセットの反対を自動推定しない。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。据え置きと同義扱いしない。
- stateAfterReset: 高確A 25%は確定。高確Bを含む完全初期状態契約はPARTIAL。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- reset benefit: 高確A 25%。ただし設定変更時天国は0%で、天国/短縮天井型リセット恩恵ではない。
- reset penalty / caution: 設定変更時天国0%。通常時ART終了後には天国移行が存在するため、前日状態次第では変更が必ず有利とは限らない。期待値への推定拡張はしない。
- resetDetection: ガックン / 初期出目 / 液晶 / ランプ等を再探索したが、本機固有の高信頼判別契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: **通常A75% / 通常B25% / 天国0% / 高確A25%**。

### conflicts / safeguards

- SANKYO公式の導入年月2013.10と、複数当時資料のホール導入2013-11-18を平均化しない。DB時系列はexact-day複数一致の11/18を採用し、公式月差を保持。
- 後年AI生成系ページに本機を6号機とする誤記があるため除外。本機は2013年の5号機ART。
- 通常時天国100Gを設定変更後天国扱いしない。設定変更時天国は0%。
- ART終了後の通常モード移行表を設定変更時テーブルへ流用しない。

## 遡及resetBehavior QA 進捗

- QAカーソルは引き続き `2007-01_karate-baka-ichidai.md` の次の実ファイル順。
- 今回は本線のタイガーマスク追加を優先し、QAカーソルは進めていない。
- 既存COMPLETE_CORE/PARTIAL等の性能側判定は変更していない。

## 次回再開地点

1. **recordCount 777 / chronologicalFrontier 2013-11-18 / 11-18群OPEN** から開始。
2. 次の未処理候補は **「マジカルハロウィン4」**。既存レコード不在確認後、性能コア + resetBehavior v0.7を収集。
3. 続いて **「パチスロ スタードライバー」**。
4. 2013-11-18同日全メーカー監査を行い、追加候補があれば日付内で処理してからCLOSED。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から継続。
6. PARTIAL / UNVERIFIED / reset欠損は公式・業界・当時解析・古いDB・アーカイブ・回顧資料へ検索系統を変えて再探索し、競合はCONFLICTのまま保持。

## 主要出典 — 取得日 2026-09-06

### パチスロ タイガーマスク

- SANKYOオンライン博物館: `https://www.sankyo-fever.jp/collection/549/` — 2013年機、公式販売名/型式名、ARTゲーム性、公式初当たり確率、導入年月2013.10。
- ALL7 2013年11月導入一覧: `https://www.all7.jp/plans/index/2013/11` — 2013-11-18導入予定。
- パチビー: `https://www.pachibee.jp/movies/index/10037` — 2013-11-18、5号機ART、純増約2.4枚/G。
- HAZUSE基本スペック: `https://data.hazuse.com/?genre=201&machine_code=3S0671` — 2013-11-18、ART初当たり、機械割。
- HAZUSE天井: `https://data.hazuse.com/?genre=207&machine_code=3S0671` — ART間最大1000G。
- HAZUSE解析: `https://data.hazuse.com/?genre=209&machine_code=3S0671` — 設定変更時モード通常A75%/通常B25%、設定変更時高確A25%、モード別規定G。
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/33/a.php` — 30G+α、純増約2.4枚/G、ゲーム数解除/CZ。
- パチマガスロマガ確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/33/h-1.php` — ART初当たり、PAYOUT。
- パチマガスロマガART: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/33/l.php` — 初期30〜300G、赤7 30G以上、白7 100G以上。
- すろぱちくえすと: `https://www.slopachi-quest.com/kisyubetsu/tiger-mask/` — モード別天井1000/700/100G、設定変更時天井Gリセット、スペック照合。
