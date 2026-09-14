更新日: 2026-09-14

## 現在地点
- recordCount: **1724**
- latestRecordAdded: **スマスロ ようこそ実力至上主義の教室へ — No.1724**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-05-07_smart-slot-classroom-of-the-elite.md`
- chronologicalFrontier: **2025-05-07**
- schema: **resetBehavior v0.7**
- status: **2025-05-07_GROUP_OPEN_2_OF_3_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコードNo.1723を再同期。
- INDEXは旧表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- mainは前回会話時点より進んでおり、No.1723 `Lパチスロ 機動戦士ガンダムSEED` まで完了していたため、古い再開地点へ戻らず次の未処理No.1724から継続。
- No.1724 `スマスロ ようこそ実力至上主義の教室へ`（2025-05-07）を追加し、性能コア + resetBehavior v0.7を保存。

## No.1724 — スマスロ ようこそ実力至上主義の教室へ
- path: `docs/real_machine_db/machines/2025-05-07_smart-slot-classroom-of-the-elite.md`
- manufacturer: **DAXEL / 発売元サミー**
- formalModel: **Lようこそ実力至上主義の教室へDE**
- inspectionCode: **4S1658**
- releaseDate: **2025-05-07**
- payoutRate: **97.7 / 98.7 / 101.3 / 104.8 / 109.3 / 114.0%**
- CZ: **1/148.6 / 1/143.8 / 1/138.0 / 1/130.3 / 1/121.8 / 1/115.5**
- AT: **1/329.9 / 1/317.9 / 1/302.8 / 1/281.5 / 1/260.0 / 1/243.3**
- base: **約33.9G/50枚（資料の約34Gは丸め差）**
- netIncrease: **AT約2.0〜3.3枚/G / 擬似BONUS約3.3枚/G**

## No.1724 resetBehavior v0.7
- settingChange: **有利区間・AT間天井をRESET。よう実ポイント/CZモード/クラスランク/穢れを再抽選、プライベートポイントRESET。AT間980G+α→630G+α短縮。**
- carryOver: **据え置き単独列の直接記述は固定できず。純電断比較表で天井・よう実ポイント・CZモード・クラスランク・穢れの引継ぎを確認し、据え置きも基本CARRY_OVERとして管理しつつ `DIRECT_UNTOUCHED_WORDING_NOT_FOUND_AFTER_RESEARCH` を保持。**
- powerCycle: **天井・よう実ポイント・CZモード・クラスランク・穢れ・内部状態を引継ぎ。プライベートポイントと純電断時有利区間の独立直接記述は未固定。**
- mode: **設定変更時CZモード2/3/4 = 50.0 / 25.0 / 25.0%。モード1非選択。**
- whitePoint: **設定変更時0/30/50/70pt = 9.8 / 30.1 / 30.1 / 30.1%。約60%で50pt以上。**
- ceilingBenefit: **AT天井到達時 ATのみ50% / AT+赤7 25% / AT+白7 12.5% / AT+白7+DRAGON BURST 12.5%。630G短縮天井でも有効。**
- advantageousSection: **設定変更時RESETを直接確認。通常の区間リセット後フリーズ高確恩恵は設定変更時を除くため朝一へ自動転記しない。**
- detection: **朝一630G+α超えAT非当選は据え置き推測の強材料。固有ガックンは再探索後もUNVERIFIED_AFTER_RESEARCH。**
- conflict: **Altema一部本文の通常AT天井930G+α vs 必勝本/1geki/なな徹/ちょんぼりすた等980G+α。複数一致980Gをcanonical、930GをCONFLICT保持。**

## 2025-05-07境界 — OPEN 2/3 known canonical
1. Lパチスロ 機動戦士ガンダムSEED — No.1723 DONE
2. スマスロ ようこそ実力至上主義の教室へ — No.1724 DONE
3. スマスロ 緑ドン VIVA!情熱南米編 REVIVAL — NEXT

## 次回再開地点
- 最新mainを再同期しNo.1724と本handoffを確認。
- **No.1725候補 `スマスロ 緑ドン VIVA!情熱南米編 REVIVAL` — 2025-05-07** から再開する。
- 処理後、PB・地域先行・別型式・延期/段階導入を再監査して2025-05-07境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を止めず、実体レコード順から最初のresetBehavior欠損レコードを安全に確定できた時点で遡及更新する。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- ダイコク電機IR/DAXEL新製品: https://www.daikoku.co.jp/ir/news/post-2796/
- Amusement Japan: https://www.amusement-japan.co.jp/article/detail/10004747/
- HAZUSE: https://hazuse.com/machine/pachislot/4S1658/
- ちょんぼりすた: https://chonborista.com/slot/daxel-slot/232429/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/86700/
- 必勝本 設定変更時の恩恵: https://hisshobon.com/machineinfo/86681/
- 1geki 天井・朝一: https://1geki.jp/slot/l_youjitsu/3/
- なな徹 朝一・有利区間: https://nana-press.com/kaiseki/machine/935/29490/
- なな徹 天井: https://nana-press.com/kaiseki/machine/935/29486/
- 情報島 導入一覧: https://p-johojima.jp/machine_spec/post-2074/
- HAZUSE 2025年5月導入一覧: https://hazuse.com/new-machine/202505-2/
