# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **968**
- latestRecordAdded: **パチスロ 機動警察パトレイバー**（北電子）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-04-04_kidou-keisatsu-patlabor.md`
- chronologicalFrontier: **2016-04-04**
- frontierLatestMachine: **パチスロ 機動警察パトレイバー**
- schema: **resetBehavior v0.7**
- status: **2016-04-04_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（ミッションv0.7）、`INDEX.md`、`LATEST_HANDOFF.md`、No.967 `2016-03-28_nangoku-monogatari.md` を再取得。
- INDEXは19件時点の旧集約なのでREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 開始時正本は recordCount **967** / chronologicalFrontier **2016-03-28** / 03-28群CLOSED。
- 2016-03-29〜04-03の日付別検索を実施し、全国導入日をこの帯に固定できる未登録機を今回確認できず、04/04群へ前進。
- 04/04群の先頭未登録候補 **パチスロ 機動警察パトレイバー** をNo.968として追加。

## No.968 — パチスロ 機動警察パトレイバー
- record: `docs/real_machine_db/machines/2016-04-04_kidou-keisatsu-patlabor.md`
- manufacturer: **北電子**
- releaseDate canonical: **2016-04-04**
- formalModelName: **機動警察パトレイバー／KH**
- certificationNumber: **5S1199**
- generation/system: **5号機 / AT / ゲーム数上乗せ+セットストック / ガチャガチャンス**

### performanceCore
- 機械割: **97.3 / 99.2 / 100.7 / 104.2 / 107.4 / 110.1%**。
- AT初当たり（ガチャ獲得後すぐ使用条件）: **1/222.1 / 212.5 / 203.9 / 187.5 / 175.5 / 164.9**。整数表記は丸め差。
- ガチャ不使用時AT初当たりは別定義で **1/430 / 394 / 365 / 313 / 279 / 252**。
- ベース: **約37G/50枚**。
- AT純増: **約2.1枚/G**。
- AT「バベルモード」: **1セット50G+α**。
- AT専用疑似ボーナス: **20G固定**。
- 北電子公式、HAZUSE、パチマガスロマガ、P-WORLD、当時解析で系列を照合。

### resetBehavior v0.7
- 設定変更時の内部状態公開振り分け:
  - 設定1・3・5: **低確50.0% / 高確50.0%**。
  - 設定2・4・6: **低確66.4% / 高確33.6%**。
- HAZUSEとすろぱちくえすとで同一表を確認。朝一高確率が奇偶で異なるため客AI向け公開朝一数値として保存。
- 本機はAT間天井ではなく **ガチャ間天井**。最大を496Gとする本文/資料と、振り分け表の498G表記があるため `GACHA_CEILING_COUNT_PRESENTATION_CONFLICT_496_VS_498` として保持。
- 後年天井DBには設定変更時ガチャ間カウンタ **リセット** と明記。ただし当時直接表を固定できなかったため `RETROSPECTIVE_ANALYSIS_SINGLE` として信頼度を分離。
- 設定変更専用の短縮ガチャ天井・専用天井振り分けは **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き時のガチャ間カウンタ/ガチャストック/内部状態は、独立条件の直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON時もガチャ間カウンタ/ガチャストック/内部状態の引継ぎ契約を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ガックン・初期出目・ランプ・朝一ステージ等の本機固有確定変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### conflict / caution
- **GACHA_CEILING_COUNT_PRESENTATION_CONFLICT_496_VS_498**: P-Summa・解析本文は最大496G、ちょんぼりすた振り分け表は98/198/298/398/498G。平均せず双方保存。
- AT間天井がある機種として扱わない。天井恩恵はガチャガチャンス権利獲得であり、AT確定ではない。
- 設定変更RESETを根拠に据え置き/純電断のCARRYOVERを自動認定しない。

## 2016-03-29〜04-03境界監査
- 「2016年3月29日〜4月3日 パチスロ導入」を日付別・表記別に検索。
- 今回、全国導入日を03/29〜04/03へ直接固定できる新規未登録機を確認できず、04/04群へ進行。
- 04/18導入の「トータル・イクリプス」は4月頭という事前情報があるが、当時記事/解析では全国導入2016-04-18のため04/04群へ混入させない。

## 2016-04-04群 — OPEN
- No.968 **パチスロ 機動警察パトレイバー** 登録済み。
- 次の強い未処理候補:
  1. **キングパルサー～DOT PULSAR～**（山佐） — K-Navi/HAZUSE/当時解析で2016-04-04を確認。型式 `ドットパルサーKPV／CC`、検定5S1153。
  2. **探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌**（DAXEL） — K-Navi/複数解析で2016-04-04を確認。型式候補 `ミルキィホームズ／DE` は次回一次/当時DBで再固定する。
- 候補外も含め04/04同日全メーカー監査を継続し、漏れがないことを確認してからCLOSEDにする。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_new-oasis.md**（変更なし）
- retroQaNextInspection: **2006-02_nurse-witch-komugi-chan-magicalte.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は時系列本線No.968と04/04境界を優先し、遡及QAは進めていない。

## 次回再開地点
1. **recordCount 968 / chronologicalFrontier 2016-04-04 / 04-04群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.968をmainから再取得。
3. **キングパルサー～DOT PULSAR～** を最初の未処理機として、identity→性能コア→resetBehavior v0.7を収集する。
4. 続いて **探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌**、さらに04/04群全メーカー残存監査を行う。
5. PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
6. 競合は平均せずCONFLICT/variant差/定義差として双方保存。
7. 遡及QAは **`2006-02_nurse-witch-komugi-chan-magicalte.md`** から継続。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 全国導入日と納品予定日・地域先行日を混同しない。
- 後年設置期限・検定期限一覧の日付を導入日へ転記しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 設定変更RESETを根拠に据え置き/純電断を自動でCARRYOVER認定しない。
- 前作/後継機・同名別機種のresetBehaviorを流用しない。

## 主要出典 — 取得日 2026-09-08
### No.968 パチスロ 機動警察パトレイバー
- 北電子公式: https://www.kitadenshi.co.jp/slot/patlabor/
- HAZUSE: https://hazuse.com/machine/pachislot/5S1199/
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/17087/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/99/a.php
- P-WORLD: https://www.p-world.co.jp/machine/database/7971
- P-Summa: https://psumma.jp/pachislo/21724/
- すろぱちくえすと: https://www.slopachi-quest.com/article/patlabor-settei/
- 2ndsight天井一覧: https://2ndsight.xyz/1768

### 04/04次候補
- K-Navi キングパルサー: https://p-kn.com/slot/2449/
- HAZUSE キングパルサー: https://hazuse.com/machine/pachislot/5S1153/
- ちょんぼりすた キングパルサー: https://chonborista.com/slot/yamasa-slot/17100/
- K-Navi ミルキィホームズ: https://p-kn.com/slot/2466/
- P-Summa トータル・イクリプス導入日確認: https://psumma.jp/pachislo/20481/

## confidence
- No.968 identity/formalModel/certification/releaseDate: **OFFICIAL_PLUS_PERIOD_DATABASE_HIGH**
- No.968 performanceCore: **ANALYSIS_HIGH_MULTI_SOURCE**
- No.968 reset state numeric table: **ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_TABLE**
- No.968 setting-change gacha counter reset: **RETROSPECTIVE_ANALYSIS_SINGLE**
- No.968 carryOver/powerCycle: **UNVERIFIED_AFTER_RESEARCH**
- No.968 resetDetection: **NEGATIVE_FINDING_AFTER_MULTI_QUERY_RESEARCH**
- 2016-03-29〜04-03 boundary: **NO_NEW_MACHINE_FIXED_IN_CURRENT_RESEARCH**
- 2016-04-04 group: **OPEN**
