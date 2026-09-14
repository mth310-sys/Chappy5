更新日: 2026-09-14

## 現在地点
- recordCount: **1716**
- latestRecordAdded: **スマート沖スロ アメイジングライブ — No.1716**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-04-07_amazing-live.md`
- chronologicalFrontier: **2025-04-07**
- schema: **resetBehavior v0.7**
- status: **2025-04-07_BOUNDARY_OPEN_1_OF_4_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、No.1715既存レコードを再同期。
- INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1715で2025-03-03群が6/6 CLOSED済みであることを確認し、次キューNo.1716 `スマート沖スロ アメイジングライブ` を処理。
- 型式・検定番号、性能コア、設定変更/据え置き/純電断、天井、モード/状態、有利区間、朝一恩恵、変更判別、公開朝一数値を収集。
- 数値競合2件を平均化せずCONFLICTとして保持。

## No.1716 — スマート沖スロ アメイジングライブ
- path: `docs/real_machine_db/machines/2025-04-07_amazing-live.md`
- manufacturer: **パイオニア**
- formalModel: **LアメイジングライブPD**
- inspectionCode: **4S1425**
- releaseDate: **2025-04-07**
- payoutRate: **98.1 / 99.7 / 103.6 / 106.9 / 110.0%**（設定1/2/4/5/6）
- bonusInitial: **1/274.0 / 1/259.6 / 1/229.3 / 1/206.9 / 1/189.9**
- BIG: **1/213.0 / 1/202.5 / 1/181.6 / 1/165.7 / 1/153.4**
- REG canonical: **1/370.0 / 1/349.5 / 1/310.2 / 1/280.7 / 1/258.0**
- base: **約34G/50枚**
- netIncrease: **約3.3枚/G**
- basicPayout: **BIG約200枚 / REG約66枚 / AC約40枚×最大10セット**
- reset: **有利区間・天井・内部モード・内部状態・周期をRESET/再抽選。固定短縮天井は確認できず、通常最大999G+α。**
- resetBenefit: **有利区間移行時は約75%で天国モード、天国B以上の振り分けも高い。**
- carry/power: **据え置きは主要内部値継続。純電断は有利区間・天井・内部モード・内部状態・周期を引継ぎ。**
- detection: **朝一33G以内当選はリセット推測材料だが確定ではない。固定短縮天井がなく深いG数での確定判別不可。ガックンUNVERIFIED_AFTER_RESEARCH。**

## conflicts
- `CONFLICT_PAYOUT_SETTING1_98_1_VS_97_1`: 必勝本・ちょんぼりすた・すろぱちくえすと・G-net等は98.1%、P-WORLDのみ97.1%。98.1%をcanonical。
- `CONFLICT_REG_SETTING5_1_280_7_VS_1_260_7`: 必勝本・P-WORLD・ちょんぼりすた等は1/280.7、G-netのみ1/260.7。1/280.7をcanonical。

## 2025-04-07境界 — OPEN 1/4 known canonical
1. スマート沖スロ アメイジングライブ — No.1716 DONE
2. Lゴジラ — NEXT
3. Lうしおととら白面決戦VH
4. スマスロ マギアレコード 魔法少女まどか☆マギカ外伝

## 次回再開地点
- 最新mainを再同期しNo.1716と本handoffを確認。
- **No.1717候補 `Lゴジラ` — 2025-04-07** から再開する。
- その後 `Lうしおととら白面決戦VH` → `スマスロ マギアレコード 魔法少女まどか☆マギカ外伝` を同じキューで処理。
- 4機処理後、PB・地域先行・別型式・延期/段階導入を再監査して2025-04-07境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回は新規収集を優先。既存旧レコードを推測更新していない。
- 次回も新規収集を止めず、実体レコード順から最初のresetBehavior欠損レコードを確定して遡及更新する。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- パイオニア公式 2025年製品一覧: https://www.slot-pioneer.co.jp/products/2025.html
- パイオニア公式 更新履歴: https://www.slot-pioneer.co.jp/news.html
- 遊技日本 型式/概要: https://yugi-nippon.com/pachinko-new-machine/post-69270/
- G-net 販売概要: https://g-net-ps.com/info/s0191/
- G-net 検定通過: https://g-net-ps.com/industry/%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E6%83%85%E5%A0%B1%EF%BC%88%E4%BB%A4%E5%92%8C6%E5%B9%B412%E6%9C%8827%E6%97%A5%E5%85%AC%E7%A4%BA%E5%88%86%EF%BC%89/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/86167/
- 必勝本 天井/設定変更: https://p.hisshobon.jp/vpage/2691/2
- 1geki 朝一/設定変更: https://1geki.jp/slot/l_amazinglive/3/
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/232027/
- すろぱちくえすと: https://www.slopachi-quest.com/article/amazinglive-tenjou/
- P-WORLD: https://www.p-world.co.jp/machine/database/10215
