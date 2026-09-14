更新日: 2026-09-14

## 現在地点
- recordCount: **1707**
- latestRecordAdded: **スマスロ スーパーブラックジャック — No.1707**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-02-03_super-blackjack.md`
- chronologicalFrontier: **2025-02-03**
- schema: **resetBehavior v0.7**
- status: **2025-02-03_GROUP_OPEN_2_OF_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、No.1706既存レコードを再同期。
- INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- mainはNo.1706 `Lパチスロ ありふれた職業で世界最強` まで進行済みだったため、重複せず次の未処理No.1707 `スマスロ スーパーブラックジャック` から継続。
- No.1707を追加し、性能コア + resetBehavior v0.7を収録。
- 2025-02-03群は既知canonical 4件中2件処理済み。残り2件を処理後、PB/別型式/地域先行/延期・段階導入を再監査してCLOSED判定する。

## No.1707 — スマスロ スーパーブラックジャック
- path: `docs/real_machine_db/machines/2025-02-03_super-blackjack.md`
- manufacturer: **セブンリーグ（製造） / 山佐ネクスト（販売・ブランド）**
- formalModel: **LスーパーブラックジャックSLDC**
- inspectionCode: **4S1230**
- releaseDate: **2025-02-03**
- payoutRate: **97.8 / 98.7 / 100.1 / 105.7 / 110.0 / 112.7%**
- initialHit: **1/241.7 / 1/238.8 / 1/235.9 / 1/201.8 / 1/194.9 / 1/181.3**
- base: **約31.4G/50枚（設定1）**
- netIncrease: **ST約0.4枚/G / SST・擬似ボーナス約5.1枚/G**
- normalCeiling: **999G+α**
- resetCeiling: **666G+α**
- reset: **有利区間・天井・内部状態をRESET。スイカ規定回数を朝一専用振り分けで再抽選。**
- carryOver: **据え置きは有利区間・天井・内部状態を引継ぎ。**
- powerCycle: **天井・内部状態の引継ぎを機種別比較表で直接確認。有利区間/スイカ規定回数/REGスルー回数は純電断単独の直接契約を固定できずUNVERIFIED_AFTER_RESEARCH。**
- publicMorningNumbers: **スイカ規定回数=10:6.6 / 15:3.1 / 20:5.9 / 25:3.1 / 30:12.5 / 35:7.8 / 40:22.7 / 45:7.8 / 50:22.7 / 100:7.8%。50回以下合計92.2%。**
- resetDetection: **666G+α超過で天井未発動なら据え置き濃厚材料。外観判別は困難。本機固有ガックンは十分な再探索後もUNVERIFIED。**
- importantRule: **エンディング後など通常の有利区間リセットで付くジョーカーモード恩恵は設定変更時を除外。**

## 2025-02-03境界 — OPEN 2/4 canonical
1. Lパチスロ ありふれた職業で世界最強 — No.1706 DONE
2. スマスロ スーパーブラックジャック — No.1707 DONE
3. スマスロ シャーマンキング — No.1708 NEXT
4. L 東京喰種 — pending

## 次回再開地点
- 最新mainを再同期しNo.1707と本handoffを確認。
- **No.1708候補 `スマスロ シャーマンキング` — 2025-02-03** から再開する。
- その後 `L 東京喰種` を処理する。
- 4件処理後にPB・地域先行・別型式・延期/段階導入を再監査して2025-02-03群をCLOSED判定する。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を止めず、QAリレー時に同カーソル直後の最初のresetBehavior欠損レコードを確定して遡及更新する。

## 今回の主要ソース
取得日: 2026-09-14
### スマスロ スーパーブラックジャック
- HAZUSE 型式/検定/導入: https://hazuse.com/machine/pachislot/4S1230/
- 1geki 型式/検定/解析: https://1geki.jp/slot/l_sbj/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004631/
- P-WORLD / Amusement Japan: https://news.p-world.co.jp/articles/29536/amusement
- 日刊スポーツ: https://www.nikkansports.com/amusement/pachislot/news/202411250001229.html
- マルっとWAVE スペック: https://marutto-w.com/industry_news/20250203
- ちょんぼりすた 基本/天井/AT: https://chonborista.com/slot/yamasa-slot/226245/
- なな徹 朝一・設定変更/スイカ規定回数/有利区間: https://nana-press.com/kaiseki/machine/876/27141/
- なな徹 初当りBIG・REG: https://nana-press.com/kaiseki/machine/876/27146/
- Altema 設定変更/電源OFF ON: https://altema.jp/pachimo/lsbjreset
- スロベース: https://slobase.jp/machines/super-blackjack

### 2025-02-03境界
- パチマガスロマガ 2/3新台4機確認: https://pachimaga.com/free/article/20250205/056485.php
- 6号機一覧/導入日一覧: https://sulocale.sulopachinews.com/archives/43927
