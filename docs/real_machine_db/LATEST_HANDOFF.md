更新日: 2026-09-14

## 現在地点
- recordCount: **1635**
- latestRecordAdded: **スマート沖スロ ドラゴンハナハナ～閃光～ — No.1635**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-03-18_smart-oki-slot-dragon-hanahana-senko.md`
- chronologicalFrontier: **2024-03-18**
- frontierLatestMachine: **スマート沖スロ ドラゴンハナハナ～閃光～ — No.1635**
- schema: **resetBehavior v0.7**
- status: **2024-03-18_BOUNDARY_OPEN_1_OF_4_KNOWN_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1634 `パチスロ ブラックミクちゃん` を確認して開始。
- INDEXは旧版表示のためREADME規定どおり `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- No.1634まで既処理を確認し、指定キューどおりNo.1635候補 `スマート沖スロ ドラゴンハナハナ～閃光～` から継続。
- 2023-12の30φメダル版、2024-03の25φメダル版と基本性能が共通でも、本機は別型式 `Lドラゴンハナハナ～閃光～JP` のスマスロ版なので独立レコード化。
- resetBehaviorはスマスロ専用資料を優先し、メダル版のガックン/BGM等を自動転記しない。

## No.1635 — スマート沖スロ ドラゴンハナハナ～閃光～
- path: `docs/real_machine_db/machines/2024-03-18_smart-oki-slot-dragon-hanahana-senko.md`
- manufacturer: **ピーセカンド（製造元） / パイオニア（販売・ブランド）**
- formalModel: **Lドラゴンハナハナ～閃光～JP**
- inspectionCode: **3S1450**
- releaseDate: **2024-03-18**
- generation: **6号機 / スマスロ**
- systemType: **ノーマルAタイプ / ボーナス主体 / 完全告知**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.0 / 99.0 / 101.0 / 104.0 / 107.0 / 110.0%**
- BIG: **1/256 / 1/246 / 1/235 / 1/224 / 1/212 / 1/199**
- REG: **1/642 / 1/585 / 1/537 / 1/489 / 1/442 / 1/399**
- 合算: **1/183 / 1/173 / 1/163 / 1/153 / 1/143 / 1/133**
- base: **約39.9G/50枚（全設定共通掲載）**
- BIG **最大252枚** / REG **最大96枚**
- 天井: **非搭載**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1635 resetBehavior v0.7
- setting change: **ノーマルAタイプにつき短縮天井・朝一AT/CZモード・規定周期はN/A。コンプリート機能の打ち止め状態は設定変更で解除。BGM変化条件/リールガックンはスマスロ専用資料で確定できずUNVERIFIED_AFTER_RESEARCH。**
- carry over: **ゲーム数天井・AT/CZモード・規定周期はN/A。据え置き固有BGM/リール初動契約はUNVERIFIED_AFTER_RESEARCH。**
- power OFF→ON: **天井/モード/周期はN/A。必勝本の機種専用資料ではBGM変化条件・リールガックンとも調査中。後年再探索でも確定契約を固定できずUNVERIFIED_AFTER_RESEARCH。**
- game/ceiling: **天井非搭載。短縮天井N/A。**
- mode/state: **朝一狙いに関わる通常/天国モード、AT/CZ内部状態はミッション粒度でN/A。**
- advantageous section: **スマスロであることは確認できるが、設定変更/据え置き/純電断別の本機固有RESET/CARRY_OVER直接資料を固定できずUNVERIFIED_AFTER_RESEARCH。ノーマルAというゲーム性だけから推測しない。**
- morning benefit: **天井短縮・専用モード・CZ/AT優遇等はN/A。比較可能な朝一専用数値は確認されない。**
- reset detection: **スマスロ版本機固有のガックン/BGM条件・発生率は十分な再探索後もUNVERIFIED_AFTER_RESEARCH。メダル版の推測情報は筐体差のため転記しない。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_MACHINE_SPECIFIC_POWER_CARRYOVER_GACKUN_BGM_AND_ADVANTAGEOUS_SECTION_CONTRACT**

## conflicts / quality notes — No.1635
- HAZUSE機種ページのメーカー表記に `バイオニア` があるが、メーカー公式系・複数業界資料はパイオニア、製造元ピーセカンドで一致するためcanonicalへ採用しない。
- 2023-12導入30φ版、2024-03導入25φメダル版、本スマスロ版は基本性能共通だが別型式/筐体。resetBehaviorの筐体依存情報は混在させない。
- ゼンリンは納品開始日2024-03-17、複数業界資料はホール導入2024-03-18。日付定義を分離し、canonical releaseDateは2024-03-18。

## 2024-03-18境界 — OPEN 1/4 known candidates
1. スマート沖スロ ドラゴンハナハナ～閃光～ — No.1635 DONE
2. 忍魂参 ～奥義皆伝ノ章～ — NEXT
3. SLOT忍者じゃじゃ丸くん — PENDING
4. ドラゴンハナハナ～閃光～ — PENDING / 25φ・30φ・既存レコード関係を再監査してから新規No.確定

境界監査メモ:
- 直前handoffでHAZUSE 2024年3月一覧と複数導入資料から上記4候補を確認済み。
- No.1635はAmusement Japan、グリーンべると、遊技日本/P-WORLD、HAZUSE等で3/18導入を照合。
- `ドラゴンハナハナ～閃光～` 系は性能共通でも別型式・25φ/30φ/スマスロ・段階導入があるため、既存2023-12-18系レコードとの重複監査を必須とする。

## 次回再開地点
1. 最新mainを再同期し、No.1635と本handoffの反映を再取得確認。
2. **No.1636候補 `忍魂参 ～奥義皆伝ノ章～` — 2024-03-18** から性能コア + resetBehavior v0.7で処理する。
3. 次に `SLOT忍者じゃじゃ丸くん` を処理。
4. `ドラゴンハナハナ～閃光～` は既存2023-12-18系レコード、正式型式、25φ/30φ/スマスロ差をmainで再監査し、独立新規機種か既存レコードの段階導入かを確定してからNo.を採番する。
5. PB・別型式・地域先行・延期/段階導入を再監査して2024-03-18群の件数を固定し、CLOSED判定へ進む。
6. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。推測で固定しない。
7. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### スマート沖スロ ドラゴンハナハナ～閃光～
- 遊技日本 / P-WORLD（型式・製造元・スペック）: https://news.p-world.co.jp/articles/26825/nippon
- 遊技日本 / P-WORLD（公式機種サイト公開）: https://news.p-world.co.jp/articles/26778/nippon
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004107/
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/26792/greenbelt
- P-BOMB: https://p-bomb.co.jp/industry/new-machine/8716/
- ゼンリン: https://zenrin-net.co.jp/9618/
- HAZUSE: https://hazuse.com/machine/pachislot/3S1450/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9998
- 一撃 オンライン遊技説明: https://1geki.jp/slot/l_drahana_senko/39/
- パチ&スロ必勝本 ボーナス解説: https://hisshobon.com/machineinfo/83061/
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/83057/
- ちょんぼりすた スマスロ版: https://chonborista.com/slot/pionia-slot/208458/
- ぽこすろっと（同シリーズ比較補助）: https://www.nankaikoya.jp/dragon-hanahana-senko/

### 境界監査 / 次群
- HAZUSE 2024年3月導入一覧: https://hazuse.com/new-machine/202403-2/
- マルっとWAVE 3/18導入一覧: https://marutto-w.com/industry_news/20240307
- K-Navi SLOT忍者じゃじゃ丸くん: https://p-kn.com/slot/4097/
- K-Navi 忍魂参 ～奥義皆伝ノ章～: https://p-kn.com/slot/4110/
