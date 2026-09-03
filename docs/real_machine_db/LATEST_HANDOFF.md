# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **486**
- latestMachineAdded: **メタルスラッグSV-001**（SNKプレイモア / 2010-06-07）
- latestRecord: `docs/real_machine_db/machines/2010-06-07_metal-slug-sv-001.md`
- chronologicalFrontier: **2010-06-07**
- frontierLatestMachine: **メタルスラッグSV-001**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前485「サンサンオアシス キュイーンVer.」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **485** / chronologicalFrontier **2010-06-07**。
- 2010-06-07同日群候補「メタルスラッグSV-001」をrepo未登録確認後に486件目として追加。
- パチビー機種ページ/同月導入スケジュールで **2010-06-07導入**を確認し、5号機クロニクルの2010年6月とも整合。
- chronologicalFrontierは **2010-06-07** のまま同日群を継続する。

## 486 — メタルスラッグSV-001 要約

- メーカー: **SNKプレイモア**
- 型式名: **メタルスラッグSV-001Y**（中古実機DB）
- 導入: **2010-06-07**
- 世代/タイプ: **5号機 / A+ART / チャンスゾーン / パンク回避 / 波形管理ART**
- 機械割: **96.7 / 98.9 / 100.2 / 105.6 / 110.3 / 115.0%**
- BIG: **1/496.5 / 1/489.1 / 1/481.9 / 1/474.9 / 1/468.1 / 1/431.2**
- REG: **1/744.7 / 1/728.2 / 1/712.3 / 1/697.2 / 1/655.4 / 1/528.5**
- MB: **全設定1/1489.5**
- 合算: **1/248.2 / 1/244.5 / 1/240.9 / 1/237.4 / 1/230.8 / 1/204.8**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- BIG約**301枚** / REG約**70枚** / MB約**28枚**
- ART純増: **約+1.2枚/G**
- 天井: ボーナス間 **111 / 333 / 555 / 777 / 999 / 1111G** の奇数ゾロ目で段階的に突入抽選
- coreStatus: **PARTIAL_CORE_BASE_UNVERIFIED_RESET_DIRECT_EVIDENCE_PARTIAL**

## resetBehavior v0.7 — メタルスラッグSV-001

- **設定変更**: 高信頼な本機専用解析で「設定変更時に天井ゲーム数をリセット」と直接書かれた本文は今回取得できず `UNVERIFIED_AFTER_RESEARCH`。後年の天井狙い整理資料に **「宵越し×」** があり、天井進捗を利用できない可能性を低信頼補助情報として保持。
- **据え置き**: 同じく「宵越し×」の低信頼情報はあるが、設定変更/単純電源OFFとの条件分離が不足するため `LOW_CONFIDENCE_EVIDENCE_SUGGESTS_NO_CARRYOVER` に留める。
- **電源OFF→ON**: 天井、高確/超高確、ART残G・無敵ラッシュストックの処理を直接確認できず `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数・天井**: 通常天井ポイント自体はP-WORLD等で確定。設定変更時のリセット/引継ぎは未確定。
- **モード・状態**: 通常時の高確/超高確は存在確認。設定変更時の振り分け/引継ぎは未確認。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: リセット専用短縮天井・高確スタート数値等は `NONE_CONFIRMED_AFTER_RESEARCH`。天井進捗消失は低信頼補助情報のみ。
- **変更判別**: ガックン、初期出目、液晶状態等の本機固有変更判別は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: リセット時モード振り分け、朝一当選率、恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetBehaviorQA: **CEILING_EXISTENCE_CONFIRMED_RESET_DIRECT_EVIDENCE_INSUFFICIENT_LOW_CONFIDENCE_NO_CARRYOVER_INDICATION_POWER_CYCLE_MODE_STATE_DETECTION_UNVERIFIED**

## resetBehavior 遡及QA — 継続地点

- CSスロ原人（2006-11-22）まで補完済み。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QAしない。
- 次の2006-11月精度レコード群から最初のresetBehavior欠損実ファイルを探して補完する。
- 既存 `COMPLETE_CORE` の性能完了判定は不用意に崩さず、resetBehavior QA状態を別管理する。

## 主要出典（取得日 2026-09-03）

### メタルスラッグSV-001
- パチビー機種ページ: `https://www.pachibee.jp/machines/index/210030010`
- パチビー2010年6月導入スケジュール: `https://www.pachibee.jp/machines/schedule/2010-06`
- グリーンべると: `https://web-greenbelt.jp/00002662/`
- 娯楽産業: `https://www.goraku-sangyo.com/snk%E3%83%97%E3%83%AC%E3%82%A4%E3%83%A2%E3%82%A2%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%A1%E3%82%BF%E3%83%AB%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B0sv-001/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5924`
- K-Navi機械割: `https://p-kn.com/slot/1197/19099/`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/29/a.php`
- 5号機クロニクル: `https://5goki.com/snkplaymore`
- 中一商事: `https://www.nakaiti.com/html/sSNK073.html`
- 天井ハイエナ生活（低信頼補助）: `https://macerate.seesaa.net/article/268277971.html`

## 次回再開地点

1. **recordCount 486 / chronologicalFrontier 2010-06-07**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-06-07同日群を継続**。未処理候補: **ガメラ / ニューパルサーV2 / マジックライアン / とんでも戦士ムテキング**。各repo重複確認後、最古未処理を次に追加する。
3. **南国育ちスペシャル-30**は既登録か別型式確認を再実施し、同日群を閉じる前に重複/漏れを監査する。
4. **ゴッドハンターV**はK-Naviが2010-06-07、パチビー月間スケジュールが2010-06-08で日付競合。6/7同日群を閉じる前後で別系統資料を追加照合し、推測せずCONFLICT/定義差を判定する。
5. メタルスラッグSV-001の50枚ベース、approvalNumber、設定変更時の天井リセット直接根拠、電源OFF→ON、モード/状態、ガックン等変更判別は追加探索余地あり。ただし新規収集を止めない。
6. 競合値は平均化しない。後年低信頼資料だけでresetBehaviorを確定しない。
