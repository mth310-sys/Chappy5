# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **494**
- latestMachineAdded: **恐怖新聞～第二章～**（アリストクラートテクノロジーズ / 2010-06-21）
- latestRecord: `docs/real_machine_db/machines/2010-06-21_kyofu-shinbun-2.md`
- chronologicalFrontier: **2010-06-21**
- frontierLatestMachine: **恐怖新聞～第二章～**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコードを再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 本作業開始時に別リレーの進行を確認し、古い489地点へ戻らず recordCount **492** / chronologicalFrontier **2010-06-14** を正本として採用。
- 6/14同日群および6/15〜20を月間導入一覧で監査し、次の明確なパチスロ群は6/21「コード・ルージュ」「恐怖新聞～第二章～」と確認。
- 書き込み直前にmainを再取得したところ493「コード・ルージュ」が先行反映済みだったため、重複作成を中止し、未処理の「恐怖新聞～第二章～」を494件目として追加。

## 494 — 恐怖新聞～第二章～ 要約

- メーカー: **アリストクラートテクノロジーズ**
- 導入主値: **2010-06-21**（K-Navi / パチビー系導入日）。当時グリーンべるとは6/20納品開始と報道し、物流開始とホール導入を分離。
- 世代/タイプ: **5号機 / ボーナス+押し順ART / ストックART / 無限ART / ART高確あり**
- 機械割: **96.9 / 98.6 / 100.6 / 104.6 / 107.7 / 110.1%**。後年回顧2系統で照合、当時全設定表の現存直接本文は今回回収できず信頼度を抑制。
- 大除霊BONUS: **1/399.6 → 1/322.8**
- 除霊BONUS: **1/399.6 → 1/322.8**
- 50枚ベース: **35.38 / 35.39 / 35.40 / 35.42 / 35.44 / 35.44G/1000円**（当時パチマガスロマガ解析アーカイブ）
- ART「配達TIME」: **30G / 約+1.1枚/G**、ストック型。
- 無限配達TIME: **次回ボーナスまで継続**。
- 基本獲得: 大除霊BONUS **約210枚**、除霊BONUS **約53枚**。
- 通常時**1200G**で天井、到達時は次回ボーナスまでの無限ART。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

## resetBehavior v0.7 — 恐怖新聞～第二章～

- **設定変更**: 旧天井DBで、設定変更しても**天井到達までのゲーム数がクリアされない**ことを確認。ARTストック/高確/ART準備・潜伏等の処理は直接資料未確認。
- **据え置き**: K-Naviが**宵越アリ**を明示。通常1200G天井進捗は保持系。その他の内部状態は `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 単純電源OFF→ONのみを設定変更と区別して説明する本機固有高信頼資料は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 通常状態 **1200G**。設定変更でもカウンタ進捗をクリアしない。
- **リセット天井**: **1200Gのまま / 短縮なし確認**。設定変更専用短縮天井は確認されない。
- **モード/状態**: ART高確「ポルターガイストチャンス」は確認。設定変更時振り分け、ARTストック/無限ART/準備状態の保持・消去は `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵**: 前日ハマリが設定変更後も天井進捗として残り得るため、**宵越し天井狙いが成立し得る**。
- **朝一不利**: 天井進捗については設定変更で消えない。その他の既得ART/高確状態消失は直接根拠がなく断定しない。
- **変更判別**: ガックン/初期出目/ランプ等まで表記を変えて再探索したが、本機固有高信頼情報は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 通常天井 **1200G**、設定変更でもカウンタ非クリア。朝一専用当選率/モード振り分け等は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 493 コード・ルージュ QA追記候補

- 493レコードは `baseGamesPer50: UNVERIFIED_AFTER_RESEARCH` で保存されているが、今回の追加横断で当時グリーンべるとおよび当時パチマガスロマガの双方から **37.6G/1000円** を確認。
- 次回、最新mainを再取得して競合更新がないことを確認後、493の `baseGamesPer50` を **37.6G/1000円**（INDUSTRY_PRIMARY + CONTEMPORARY_ANALYSIS_ARCHIVE）へ補完する。既存性能値全体のやり直しは不要。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済みを維持。
- 次はmainのmachine tree / commit履歴 / 2006-11〜12実レコード群から「ジャックと豆の木」直後に実在する最初の `resetBehavior` 欠損ファイルをパスで確定してから補完する。
- `小野真弓のかわいい日本昔話` / `海童王` は実レコード存在・順序を確定するまで推測更新しない。

## 主要出典（取得日 2026-09-03）

### 恐怖新聞～第二章～
- グリーンべると 2010-05-20: `https://web-greenbelt.jp/00006575/`
- 娯楽産業 2010-05-13: `https://www.goraku-sangyo.com/%E3%82%A2%E3%83%AA%E3%82%B9%E3%83%88%E3%80%80%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E6%81%90%E6%80%96%E6%96%B0%E8%81%9E%E7%AC%AC%E4%BA%8C%E7%AB%A0%E3%80%8D%E7%99%BA/`
- K-Navi: `https://p-kn.com/slot/1219/`
- K-Navi発表会: `https://p-kn.com/topics/exhibition/661/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5969`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/42/a.php`
- パチマガスロマガ 小役/ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/arist_slot/42/c.php`
- 5号機天井DB: `https://crankyseven.com/sp/tenjo-5ka.htm`

### コード・ルージュ 追加QA
- グリーンべると 2010-05-21: `https://web-greenbelt.jp/00002696/` — 37.6G/1000円
- パチマガスロマガ 小役/ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/146/c.php` — 37.6G/1000円

## 今回のGitHub更新

- 494 恐怖新聞～第二章～追加: commit `191eb38b757ed4281289f51d63fecdfd9b34db87`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 494 / chronologicalFrontier 2010-06-21**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-06-21同日群は「コード・ルージュ」「恐怖新聞～第二章～」まで処理済み**。別系統導入一覧で最終漏れ監査を行う。
3. その後 **2010-06-22〜2010-06-27** を境界監査。パチビー月間一覧上の次の明確なパチスロ候補は **2010-06-28「アイムラッキーパレード」**。
4. 前進前に493「コード・ルージュ」の `baseGamesPer50` を今回新規確認した **37.6G/1000円**へピンポイント補完する（mainに他更新がないことを再確認してから）。
5. 恐怖新聞～第二章～の `formalModelName` / `approvalNumber` / ART初当たり全設定表 / powerCycleBehavior / ARTストック・高確状態の設定変更処理 / resetDetection は後続QA対象。一般論で補完しない。
6. 遡及QAは **ジャックと豆の木まで確定補完済み**。実ファイル順を確定してその直後の欠損レコードから続ける。
7. 競合値は平均化しない。直接根拠がないresetBehaviorを世代一般論だけで確定しない。
