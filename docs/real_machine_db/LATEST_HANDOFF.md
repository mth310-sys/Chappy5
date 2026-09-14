更新日: 2026-09-14

## 現在地点
- recordCount: **1710**
- latestRecordAdded: **Sister Quest — No.1710**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-03-03_sister-quest.md`
- chronologicalFrontier: **2025-03-03**
- schema: **resetBehavior v0.7**
- status: **2025-03-03_GROUP_OPEN_1_OF_4_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、No.1709既存レコードを再同期。
- INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- mainはNo.1709 `L 東京喰種` まで進行済みで、2025-02-03群CLOSEDを確認。次の未処理No.1710 `Sister Quest` から継続。
- No.1710を追加し、性能コア + resetBehavior v0.7を収録。
- 2025-03-03群は既知canonical 4件中1件完了。残りは `回胴黙示録カイジ 狂宴` → `L 仮面ライダー電王` → `L少女☆歌劇 レヴュースタァライト-The SLOT-` の順で継続する。

## No.1710 — Sister Quest
- path: `docs/real_machine_db/machines/2025-03-03_sister-quest.md`
- manufacturer: **カルミナ**
- formalModel: **LシスタークエストCA**
- inspectionCode: **430730**
- releaseDate: **2025-03-03**
- payoutRate: **97.7 / 98.5 / 100.2 / 103.8 / 107.0 / 111.2%**
- CZ initialHit: **1/317.3 / 1/308.0 / 1/299.2 / 1/284.2 / 1/278.0 / 1/267.0**
- AT initialHit: **1/470.0 / 1/456.3 / 1/436.9 / 1/403.2 / 1/389.9 / 1/367.0**
- base: **約33.3G/50枚**
- netIncrease: **通常AT約3.0枚/G / 上位AT約5.0枚/G**
- normalCeiling: **CZ間最大1400EXP+α / CZ最大5スルー後6回目でAT / AT間最大2000G+α**
- resetCeiling: **CZ間最大500EXP+α / AT間999G+αへ短縮**
- reset: **有利区間・天井・内部状態・EXP RESET、モード再抽選。開始ステージ帝国街道。**
- carryOver: **据え置きは有利区間、天井、モード、内部状態、EXPを引継ぎ。**
- powerCycle: **内部状態・規定EXPを引継ぎ。液晶EXP表示はリセット。通常時ステージ滞在なら帝国街道へ。AT間実G天井・モード・有利区間・CZスルー回数の純電断時機種固有契約は再探索後もUNVERIFIED。**
- publicMorningNumbers: **設定変更時モードA 17.9% / B 69.5% / C 0.02% / D 0.02% / E 12.5%、B以上約82.04%。CZ間500EXP+α、AT間999G+α。**
- resetDetection: **液晶EXP表示や朝一ステージだけでは電源OFF→ONと設定変更を区別できない。500EXP+α / 999G+α超過は据え置き推測材料。本機固有ガックンは再探索後もUNVERIFIED。**
- importantRule: **設定変更以外の有利区間リセット後は上位AT「超冒険RUSH」へ移行するが、設定変更時は除外。**
- conflict: **導入台数は約4,000台 / 約5,000台で資料差。現ミッション必須外のため性能コアへ採用せずCONFLICT注記のみ。**

## 2025-03-03境界 — OPEN 1/4 known canonical
1. Sister Quest — No.1710 DONE
2. 回胴黙示録カイジ 狂宴 — No.1711 NEXT
3. L 仮面ライダー電王 — candidate
4. L少女☆歌劇 レヴュースタァライト-The SLOT- — candidate

## 次回再開地点
- 最新mainを再同期しNo.1710と本handoffを確認。
- **No.1711候補 `回胴黙示録カイジ 狂宴` — 2025-03-03** から再開する。
- 型式・検定番号、性能コア + resetBehavior v0.7を本調査する。
- 2025-03-03群4候補を処理後、PB・地域先行・別型式・延期/段階導入を再監査してCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を止めず、QAリレー時に同カーソル直後の最初のresetBehavior欠損レコードを確定して遡及更新する。

## 今回の主要ソース
取得日: 2026-09-14
### Sister Quest
- カルミナ公式製品ページ: https://carmina-gaming.co.jp/product/sister-quest/
- カルミナ発売プレスリリース転載: https://www.dreamnews.jp/press/0000312148
- HAZUSE 型式/検定/導入: https://hazuse.com/machine/pachislot/SX0097/
- 1geki 基本スペック: https://1geki.jp/slot/l_sisterquest/39/
- 1geki 天井/朝一/設定変更/電源ON-OFF: https://1geki.jp/slot/l_sisterquest/3/
- 1geki モード: https://1geki.jp/slot/l_sisterquest/43/
- 1geki AT: https://1geki.jp/slot/l_sisterquest/81/
- 1geki 上位AT: https://1geki.jp/slot/l_sisterquest/95/
- 1geki ベース: https://1geki.jp/slot/l_sisterquest/4/
- なな徹 朝一/設定変更/据え置き/有利区間: https://nana-press.com/kaiseki/machine/906/27933/
- なな徹 狙い目: https://nana-press.com/kaiseki/machine/906/27931/
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/86479/
- パチ&スロ必勝本 天井/狙いドコロ: https://hisshobon.com/machineinfo/86437/
- パチ&スロ必勝本 AT間天井振り分け: https://hisshobon.com/machineinfo/86438/
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/carmina_slot/07/kh01.php
- 情報島＋ 基本スペック: https://p-johojima.jp/new_machine/post-603/
- マルっとWAVE 導入/基本スペック: https://marutto-w.com/industry_news/20250304
- 6確 基本/朝一: https://www.kaku6.jp/slot/sisterquest/
- ぽこすろっと 有利区間補助: https://www.nankaikoya.jp/sisterquest-kitaichi/
