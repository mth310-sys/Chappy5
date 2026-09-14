更新日: 2026-09-14

## 現在地点
- recordCount: **1706**
- latestRecordAdded: **Lパチスロ ありふれた職業で世界最強 — No.1706**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-02-03_arifureta-shokugyou-de-sekai-saikyou.md`
- chronologicalFrontier: **2025-02-03**
- schema: **resetBehavior v0.7**
- status: **2025-02-03_GROUP_OPEN_1_OF_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、No.1705既存レコードを再同期。
- INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- 直前mainはNo.1705 `七つの魔剣が支配する` まで進行済み、2025-01-20群CLOSED。次の未処理No.1706 `Lパチスロ ありふれた職業で世界最強` から継続。
- No.1706を追加し、性能コア + resetBehavior v0.7を収録。
- 2025-02-03群は既知canonical 4件中1件処理済み。残り3件を順に処理後、PB/別型式/地域先行/延期・段階導入を再監査してCLOSED判定する。

## No.1706 — Lパチスロ ありふれた職業で世界最強
- path: `docs/real_machine_db/machines/2025-02-03_arifureta-shokugyou-de-sekai-saikyou.md`
- manufacturer: **SANKYO（販売・ブランド） / ジェイビー（製造）**
- formalModel: **Lありふれた職業で世界最強jA**
- inspectionCode: **4S1365**
- releaseDate: **2025-02-03**
- payoutRate: **97.7 / 99.0 / 101.3 / 105.8 / 110.6 / 114.9%**
- myuBonusInitialHit: **1/523 / 1/513 / 1/497 / 1/471 / 1/455 / 1/420**
- ATInitialHit: **1/395 / 1/382 / 1/360 / 1/323 / 1/301 / 1/268**
- base: **約33.3G/50枚**
- netIncrease: **約2.7 / 5.0枚/G**
- normalCeiling: **968G+最大32G前兆（一般表記 最大1000G）**
- resetCeiling: **668G+最大32G前兆（一般表記 最大700G）**
- reset: **有利区間・天井・内部状態・内部モード・CZモードをRESET/再抽選。液晶0Gだが内部G加算抽選あり。**
- carryOver: **据え置きは天井・内部状態・有利区間・内部モード・CZモード・内部Gを引継ぎ。液晶は0G表示。**
- powerCycle: **天井・内部状態の引継ぎを機種別比較表で直接確認。内部モード/CZモード/有利区間と開始ステージは純電断単独の直接契約を固定できずUNVERIFIED_AFTER_RESEARCH。**
- publicMorningNumbers: **天国移行率15/16/19/20/21/22%、CZモードA/B/C=約25/45/30%（B以上約75%）、高確13/14/16/18/21/23%、設定変更後1G目の弱レアAT昇格約34%・強レア100%。**
- resetDetection: **据え置き時は朝一10G+α（1G目除く）で強レア役からフェイク前兆へ移行しないため、早いG数で強レア→前兆なら設定変更濃厚材料。ガックンはUNVERIFIED。**
- importantRule: **通常遊技由来の有利区間リセット後の覚醒チャレンジ恩恵は設定変更時を除外。**

## 2025-02-03境界 — OPEN 1/4 canonical
1. Lパチスロ ありふれた職業で世界最強 — No.1706 DONE
2. スマスロ スーパーブラックジャック — No.1707 NEXT
3. スマスロ シャーマンキング — pending
4. L 東京喰種 — pending

## 次回再開地点
- 最新mainを再同期しNo.1706と本handoffを確認。
- **No.1707候補 `スマスロ スーパーブラックジャック` — 2025-02-03** から再開する。
- その後 `スマスロ シャーマンキング` → `L 東京喰種` を処理する。
- 4件処理後にPB・地域先行・別型式・延期/段階導入を再監査して2025-02-03群をCLOSED判定する。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を止めず、QAリレー時に同カーソル直後の最初のresetBehavior欠損レコードを確定して遡及更新する。

## 今回の主要ソース
取得日: 2026-09-14
### Lパチスロ ありふれた職業で世界最強
- SANKYO公式機種サイト: https://www.sankyo-fever.jp/products/machine_list/sbq/
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/975/
- P-WORLD / Amusement Japan 発表記事: https://news.p-world.co.jp/articles/29576/amusement
- HAZUSE 型式/検定/導入: https://hazuse.com/machine/pachislot/4S1365/
- 6確 基本スペック/天井: https://www.kaku6.jp/slot/arifureta/
- 1geki 基本スペック/解析: https://1geki.jp/slot/l_arifureta/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/885/27308/
- なな徹 天井: https://nana-press.com/kaiseki/machine/885/27305/
- なな徹 CZモード: https://nana-press.com/kaiseki/machine/885/27312/
- なな徹 AT: https://nana-press.com/kaiseki/machine/885/27317/
- ちょんぼりすた 設定変更/電源OFF ON比較: https://chonborista.com/slot/sankyo-slot/226112/
- 必勝本 通常時/天井: https://hisshobon.com/machineinfo/85633/
- 必勝本 有利区間: https://hisshobon.com/machineinfo/85649/
- 必勝本 狙いドコロ: https://hisshobon.com/machineinfo/85609/

### 2025-02-03境界
- パチマガスロマガ 2/3新台4機確認: https://pachimaga.com/free/article/20250205/056485.php
- 6号機一覧/導入日一覧: https://sulocale.sulopachinews.com/archives/43927
