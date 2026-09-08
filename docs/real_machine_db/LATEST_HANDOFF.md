# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **972**
- latestRecordAdded: **パチスロ マブラヴ オルタネイティヴ トータル・イクリプス**（SANKYO）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-04-11_total-eclipse.md`
- chronologicalFrontier: **2016-04-11**
- frontierLatestMachine: **パチスロ マブラヴ オルタネイティヴ トータル・イクリプス**
- schema: **resetBehavior v0.7**
- status: **2016-04-11_GROUP_OPEN_RELEASE_DATE_AUDIT_PENDING**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直近コミットと実レコードを再取得。
- INDEXは19件時点の旧集約のため、README規定どおり **LATEST_HANDOFF + 実レコード + 最新mainコミット** を進捗正本として使用。
- mainは旧handoffのNo.970より先に進んでおり、No.971 `2016-04-11_petit-mermaid.md` が実レコードとして存在する一方、handoff更新が未反映だった。今回これを正本進捗へ統合した。
- No.972としてトータル・イクリプスを追加し、handoffを実レコード件数へ同期。

## 2016-04-04群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- No.968 **パチスロ 機動警察パトレイバー**（北電子）
- No.969 **キングパルサー～DOT PULSAR～**（山佐）
- No.970 **探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌**（DAXEL）

- 当時2016年導入日順一覧では4/4群が上記3機種で一致。
- 直前handoffで実施済みの同日検索に加え、今回も4月導入日一覧/HAZUSE日付カレンダー境界を確認し、4/4追加本線候補を固定できなかった。
- よって現調査範囲では **2016-04-04_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。

## No.971 — プチマーメイド
- record: `docs/real_machine_db/machines/2016-04-11_petit-mermaid.md`
- manufacturer: **北電子**
- releaseDate: **2016-04-11**
- system: **5号機 / ノーマルA / 完全告知 / 技術介入BIG**
- main実レコードを確認。旧handoffに未反映だったため今回recordCountへ統合。
- performance core: 機械割 **97.6 / 98.6 / 99.8 / 102.0 / 104.5 / 108.4%**、BIG **1/288.7→1/254.0**、REG **1/409.6→1/263.2**、約34G/50枚、BIG最大335枚、REG約104枚。
- 天井なし。resetBehaviorはノーマル機として主要天井/モード/ART進捗NOT_APPLICABLE。特殊状態の設定変更/据え置き/純電断契約、固有ガックン契約は再探索後UNVERIFIED/NONE_CONFIRMED。

## No.972 — パチスロ マブラヴ オルタネイティヴ トータル・イクリプス
- record: `docs/real_machine_db/machines/2016-04-11_total-eclipse.md`
- manufacturer: **SANKYO**
- releaseDate canonical: **2016-04-11**
- formalModelName: **パチスロ トータル・イクリプス R**
- certificationNumber: **5S1337**
- generation/system: **5号機 / A+ART / ST型ART**

### performanceCore
- 機械割: **96.5 / 97.8 / 99.7 / 102.9 / 106.2 / 110.2%**。
- 純ボーナス: SBB+BB **1/417**、アルゴスBONUS **1/512**、合算 **約1/230**（全設定共通）。
- ART初当たり: 公式系 **1/625 / 597 / 562 / 508 / 469 / 425**。攻略系の設定1=626、設定4=509は丸め/表示精度差として保持。
- ベース: **約33.0G/50枚**。
- ART「RED SHIFT TIME」: **約1.5枚/G、1セット30G**。
- ボーナス基本獲得: **300 / 180 / 60枚**。

### resetBehavior v0.7
- 設定変更時: **ボーナス間天井G数RESET / CZ・引き戻し失敗回数RESET / 内部状態RESELECT / ユーコン基地 / 液晶0G**。
- 純電源OFF→ON: **内部天井G数CARRYOVER / CZ・引き戻し失敗回数CARRYOVER / 状態CARRYOVER**。液晶表示は0Gになるが内部は引継ぎ。
- 設定変更時内部状態（全設定共通）: **通常20.0 / 高確75.3 / 超高確4.7%**。高確以上合計 **80.0%**。
- 通常天井: **ボーナス間999G**。ARTを挟んでもボーナス間カウントは継続。
- 別系統救済: **CZ/引き戻し7連続失敗 → 次回成功確定**。
- リセット専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット恩恵: 高確以上80.0%開始。
- リセット不利: 前日ボーナス間天井進捗、CZ/引戻し連続失敗回数を失う。
- 変更判別: 設定変更・純電断とも原則ユーコン基地/0G表示のため画面単独判別不可。朝一高確示唆は弱い推測材料。本機固有ガックン確定契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflict / caution
- 導入日は **2016-04-11 vs 2016-04-18** の明確な資料競合。
  - 4/11: HAZUSE、すろぱちくえすと当時導入日一覧、時給2000円生活。
  - 4/18: K-Navi、一撃、ちょんぼりすた、複数後年整理。
  - グリーンべると業界記事は最速 **4/10納品予定**。
- 本DBは漏れ防止のため4/11をcanonical位置に置くが、4/18側を削除せず **CONFLICT_RELEASE_DATE_2016_04_11_VS_2016_04_18** として保存。
- ART純増約1.5枚/Gとボーナス込み約2.0枚/Gは定義差。

## 2016-04-11群 — OPEN
登録済み:
- No.971 **プチマーメイド**（北電子）
- No.972 **パチスロ マブラヴ オルタネイティヴ トータル・イクリプス**（SANKYO、4/11 vs 4/18 CONFLICT）

監査上の重要候補:
- **スーパーストリートファイターIV パチスロエディション**（エンターライズ）
  - すろぱちくえすと2016導入日一覧は4/11群に掲載。
  - HAZUSEは **2016-04-18**、型式 **スーパーストリートファイターIV／ZY**、検定 **5S1463**。
  - エンターライズ公式特設は2016-03-22開設、3/28スペック更新、4/11演出更新、4/18スペシャル更新で、ページ更新日を導入日へ誤転記しないこと。
  - 次回は当時業界記事/納品予定/ホール導入DBを追加照合して4/11 vs 4/18を固定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_new-oasis.md**（変更なし）
- retroQaNextInspection: **2006-02_nurse-witch-komugi-chan-magicalte.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は時系列本線No.972とhandoff同期を優先し、遡及QAは進めていない。

## 次回再開地点
1. **recordCount 972 / chronologicalFrontier 2016-04-11 / 04-11群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.971 / No.972をmainから再取得。
3. **04/11同日群の全メーカー横断監査を完了**する。
4. 最優先で **スーパーストリートファイターIV パチスロエディションの4/11 vs 4/18境界**を追加照合する。
5. 4/11に固定できる別未処理機があればNo.973として処理。追加なしなら `2016-04-11_GROUP_CLOSED_FOR_CURRENT_RESEARCH` とする。
6. その後 **2016-04-18群**へ進み、スーパーストリートファイターIV、アステカ 太陽の紋章、ニューチバリヨ等を当時日付DBで再監査する。トータル・イクリプスは既登録No.972なので重複登録しない。
7. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
8. 競合は平均せずCONFLICT/variant差/定義差として双方保存。
9. 遡及QAは `2006-02_nurse-witch-komugi-chan-magicalte.md` から継続。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコード + 最新mainコミットを優先。
- 全国導入日と記事公開日・公式ページ更新日・発表日・納品予定日・地域先行日を混同しない。
- 後年設置期限・検定期限一覧の日付を導入日へ転記しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 設定変更RESETを根拠に据え置き/純電断を自動でCARRYOVER認定しない。
- 前作/後継機・同名別機種のresetBehaviorを流用しない。

## 主要出典 — 取得日 2026-09-08
### No.971 プチマーメイド
- 北電子公式: https://www.kitadenshi.co.jp/slot/petitmermaid/
- K-Navi: https://p-kn.com/slot/2444/
- グリーンべると: https://web-greenbelt.jp/00008385/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/100/a.php
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/17073/

### No.972 トータル・イクリプス
- SANKYO公式オンライン博物館: https://www.sankyo-fever.jp/collection/669/
- グリーンべると: https://web-greenbelt.jp/00008513/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1337/
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/5S1337/genre/209/
- 一撃: https://1geki.jp/slot/s_totaleclipse/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_totaleclipse/3/
- K-Navi: https://p-kn.com/slot/2469/
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/18506/
- すろぱちくえすと 2016導入日一覧: https://www.slopachi-quest.com/article/%E3%80%90%E5%B0%8E%E5%85%A5%E6%97%A5%E9%A0%86%E3%80%912016%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E4%B8%80%E8%A6%A7%E3%81%BE%E3%81%A8%E3%82%81/
- 時給2000円生活: https://jikyu2000.com/matome/totaleclipse/

## confidence
- No.971: **OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE_CORE / RESET_SPECIAL_STATE_PARTLY_UNVERIFIED**
- No.972 identity/model/certification: **OFFICIAL_PLUS_PERIOD_DATABASE_HIGH**
- No.972 releaseDate: **CONFLICT_HIGH_MULTI_SOURCE_2016_04_11_VS_2016_04_18**
- No.972 performanceCore: **OFFICIAL_PLUS_INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE**
- No.972 settingChange/powerCycle: **ANALYSIS_HIGH_DIRECT_RESET_TABLE**
- No.972 numeric reset state: **ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE**
- No.972 resetDetection: **WEAK_INDICATOR_NO_CONFIRMED_GAKKUN**
- 2016-04-04 group: **CLOSED_FOR_CURRENT_RESEARCH**
- 2016-04-11 group: **OPEN_RELEASE_DATE_AUDIT_PENDING**
