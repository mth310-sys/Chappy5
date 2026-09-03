# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **532**
- latestMachineAdded: **スペシャルハナハナII-30**（パイオニア / 2010-12-06・遡及漏れ修復）
- latestRecord: `docs/real_machine_db/machines/2010-12-06_special-hanahana-ii-30.md`
- chronologicalFrontier: **2010-12-10**
- frontierLatestMachine: **緑ドン VIVA!情熱南米編**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線531「緑ドン VIVA!情熱南米編」を再取得。
- `INDEX.md` は旧19件地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- LATEST_HANDOFFが指定した最優先境界監査 `スペシャルハナハナII-30` をrepo内検索し、未登録を確認。
- パイオニア公式は2010年12月発売/12月上旬登場、グリーンべるとは納品12/05開始予定、当時プレイグラフ転載はホール導入予定12/06。日付定義を分離して12/06をホール導入予定主値とし、時系列漏れとして532件目に遡及追加。
- 遡及追加のため chronologicalFrontier は **2010-12-10** のまま維持。

## 532 — スペシャルハナハナII-30

- メーカー: **パイオニア**
- 世代/タイプ: **5号機 / ノーマル / 完全告知 / 沖スロ30φ**
- 導入主値: **2010-12-06 ホール導入予定**
- 導入関連: **2010-12-05納品開始予定 / 2010年12月発売**
- 機械割: **96 / 98 / 101 / 104 / 107 / 111%**
- BIG: **1/312 / 303 / 290 / 275 / 259 / 244**
- REG: **1/520 / 489 / 452 / 417 / 383 / 348**
- 合算: **1/195 / 187 / 176 / 165 / 154 / 143**
- 50枚ベース: **平均約38G/1000円**
- BIG約**312枚** / REG約**130枚**
- RT/ART/AT: **なし**
- 通常ゲーム数天井: **なし確認**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7

- 通常ゲーム数天井、RT/ART/AT、長期ゲーム数モードは対象なし。
- 有利区間: **NOT_APPLICABLE**。
- 設定変更専用の短縮天井、朝一専用モード、主要な初当たり優遇/不利: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の本機固有リール挙動、据え置きとの差、単純電源OFF→ON、ガックン/初期出目/ランプによる変更判別は、表記揺れ・メーカー・シリーズ名と朝一/リセット/据え置き/電源OFF ON/ガックン等を組み替えて再探索したが直接確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 一般的なハナハナ系挙動から補完していない。
- resetBehaviorQA: **VERIFIED_NON_APPLICABLE_CORE_WITH_DETECTION_POWER_CYCLE_GAPS**。

## CONFLICT / 注意

- 導入日は「納品12/05開始予定」「ホール導入予定12/06」「2010年12月発売」の定義差。平均せず全て保持。
- 後年整理資料には設定6 BIG 1/245・REG 1/349・合算1/144等の整数丸め差あり。P-WORLD＋パチマガスロマガ一致の **1/244・1/348・1/143** を主値。
- formalModelName / inspectionNumber は今回の型式・検定再探索でも安全に確定できず、推測せずUNVERIFIED_AFTER_RESEARCH。

## 主要出典 — 532（取得日 2026-09-04）

- パイオニア公式発売告知: `https://www.slot-pioneer.co.jp/information/sphana2.html`
- パイオニア公式更新履歴: `https://www.slot-pioneer.co.jp/news.html`
- グリーンべると: `https://web-greenbelt.jp/00002891/`
- Pマンズ/プレイグラフ転載: `https://p-mans.blogspot.com/2010/10/` / `https://p-mans.blogspot.com/2010/11/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6140`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/97/h.php`
- K-Navi: `https://p-kn.com/slot/1302/28304/`

## 今回のGitHub更新

- 532追加: `docs/real_machine_db/machines/2010-12-06_special-hanahana-ii-30.md`
- machine record commit: `b6d24d3a2f70463989073082021995f315fdadea`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- 新規収集を止めず、次回QA時に怪胴王直後の最初のresetBehavior欠損レコードを一意確定してから進める。

## 次回再開地点

1. **recordCount 532 / chronologicalFrontier 2010-12-10**。開始時は最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-12-10同日群を最終監査**し、12/11以降の最古未処理機種へ進む。12/06のスペシャルハナハナII-30は今回遡及修復済みなので性能コアをやり直さない。
3. 12/11〜12/12境界を当時導入カレンダー・メーカー別一覧・業界記事で監査し、未処理がなければ12/13以降へ前進。
4. `真・三國無双` は平和公式2010年12月登場表記と別資料の2011-02-21ホール導入が競合するため、日付定義を分離したまま早計に12月本線へ入れない。
5. 欠損は表記・型式・メーカー・項目語を変え、公式/業界/当時解析/古いDB/アーカイブ/回顧を横断後のみUNVERIFIED。競合は平均せずCONFLICT。
