更新日: 2026-09-14

## 現在地点
- recordCount: **1695**
- latestRecordAdded: **スマスロ 一方通行 とある魔術の禁書目録 — No.1695**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-12-16_accelerator-toaru-index.md`
- chronologicalFrontier: **2024-12-16**
- schema: **resetBehavior v0.7**
- status: **2024-12-16_BOUNDARY_OPEN_2_OF_3_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1694を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1695 `スマスロ 一方通行 とある魔術の禁書目録`（通称/検索名: Lとある科学の一方通行）を追加し、性能コア + resetBehavior v0.7を収録。
- 2024-12-16群は `Lパチスロ ダンベル何キロ持てる？` / `スマスロ 一方通行 とある魔術の禁書目録` / `Lスーパービンゴネオ` の3機をknown canonicalとして維持。現時点2/3処理済み。

## No.1695 — スマスロ 一方通行 とある魔術の禁書目録
- path: `docs/real_machine_db/machines/2024-12-16_accelerator-toaru-index.md`
- manufacturer: **オレンジ（製造） / 藤商事（販売・シリーズ）**
- formalModel: **Lとある魔術の禁書目録 一方通行RZ**
- inspectionCode: **430460**
- releaseDate: **2024-12-16**
- payoutRate: **97.9 / 98.9 / 100.9 / 105.2 / 110.1 / 114.5%**
- CZ: **1/142.6 → 1/105.9**
- AT: **1/320.7 → 1/231.9**
- base: **約30.6G/50枚**
- netIncrease: **AT約2.5枚/G / BIG約4.5枚/G**
- normalAT: **1セット40G+α / ボーナス当選で40G再セット**
- BIG: **リアルボーナス / 約150枚**
- reset: **天井・内部モード・帯電シナリオ・内部状態・黒羽ポイント・有利区間RESET/再抽選**
- resetCeiling: **1000G+α → 必ず100G以上短縮 / 最大900G+α以内 / 平均約600G**
- internalGameAdd: **設定変更時ランダム加算あり / 具体的範囲・振り分け未固定**
- resetBenefit: **黒羽ポイント初期値 + 初回CZ/AT終了時獲得量優遇**
- carryOver: **天井進行・内部モード/状態・黒羽ポイント・有利区間CARRY_OVER**
- powerCycle: **後年複数解析では天井・内部モード/状態・黒羽ポイント・有利区間CARRY_OVER。導入当時必勝本の一部項目は調査中だったためSOURCE_MATURITY_NOTE保持。**
- resetDetection: **朝一実消化900G+α超過で天井契機なしなら据え置き濃厚材料。内部Gランダム加算のため高確移行位置だけでは判別困難。**
- missing: **内部Gランダム加算の具体的範囲/振り分け、朝一G数モード具体的振り分け、黒羽ポイント具体的振り分け、本機固有ガックンは十分な再探索後も未固定。**
- conflict: **数値CONFLICTなし。電断項目は当時資料の未確定→後年複数解析一致という情報公開時点差のみ。**

## 2024-12-16境界 — OPEN 2/3 known canonical
1. Lパチスロ ダンベル何キロ持てる？ — No.1694 DONE
2. スマスロ 一方通行 とある魔術の禁書目録 — No.1695 DONE
3. Lスーパービンゴネオ — NEXT
- 3機処理後、PB・地域先行・別型式・延期/段階導入を再監査してCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1695と本handoffを確認。
- **No.1696候補 `Lスーパービンゴネオ`（型式候補: LスーパービンゴネオSB5 / 2024-12-16）** から再開。
- No.1696処理後、2024-12-16境界をPB・地域先行・別型式・延期/段階導入まで再監査し、漏れがなければCLOSED判定して次の日付群へ進む。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を止めず、QAリレー時に同カーソル直後の最初のresetBehavior欠損レコードを確定して遡及更新する。

## 今回の主要ソース
取得日: 2026-09-14
### スマスロ 一方通行 とある魔術の禁書目録
- 藤商事公式: https://www.fujimarukun.co.jp/products/accelerator/
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-67434/
- グリーンべると検定: https://web-greenbelt.jp/post-88495/
- Amusement Japan/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/29298/amusement
- HAZUSE: https://hazuse.com/machine/pachislot/SX0093/
- P-WORLD: https://www.p-world.co.jp/machine/database/10147
- 必勝本 設定変更時: https://hisshobon.com/machineinfo/85318/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/85308/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/849/26146/
- ちょんぼりすた: https://chonborista.com/slot/fuji-slot/222136/
- Altema 朝一: https://altema.jp/pachimo/lacceleratorreset
- スロパチクエスト: https://www.slopachi-quest.com/article/accelerator-tenjou/
- ぽこすろっと: https://www.nankaikoya.jp/accelerator-kitaichi/

### 境界監査（前回から継続）
- 12月16日導入開始予定機種: https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/12%E6%9C%8816
- パチマガスロマガFREE 2024-12-20新台分析: https://pachimaga.com/free/article/20241220/056282.php
