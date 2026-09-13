更新日: 2026-09-14

## 現在地点
- recordCount: **1638**
- latestRecordAdded: **ドラゴンハナハナ～閃光～ — No.1638**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-03-18_dragon-hanahana-senko-25.md`
- chronologicalFrontier: **2024-03-18**
- frontierLatestMachine: **ドラゴンハナハナ～閃光～ — No.1638**
- schema: **resetBehavior v0.7**
- status: **2024-03-18_GROUP_CLOSED_4_OF_4_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、既存No.1614 30Φ版、No.1635スマート沖スロ版を確認して開始。
- README規定どおり、INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- No.1638候補 `ドラゴンハナハナ～閃光～` 25Φ版を正式型式レベルで再監査し、30Φ版・スマスロ版とは別型式/別市場機と確定したため独立登録。
- 2024-03-18群はHAZUSE月間一覧の4候補すべてを処理完了。追加の同日canonicalパチスロ候補は今回の再監査では確認できずCLOSED。

## No.1638 — ドラゴンハナハナ～閃光～（25Φ）
- path: `docs/real_machine_db/machines/2024-03-18_dragon-hanahana-senko-25.md`
- manufacturer: **パイオニア**
- formalModel: **Sドラゴンハナハナ～閃光～DX**
- inspectionCode: **3S1039**
- releaseDate: **2024-03-18**
- generation: **6号機 / 25Φメダル機**
- systemType: **ノーマルAタイプ / 完全告知**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.0 / 99.0 / 101.0 / 104.0 / 107.0 / 110.0%**
- BIG: **1/256 / 1/246 / 1/235 / 1/224 / 1/212 / 1/199**
- REG: **1/642 / 1/585 / 1/537 / 1/489 / 1/442 / 1/399**
- 合算: **1/183 / 1/173 / 1/163 / 1/153 / 1/143 / 1/133**
- base: **約39.9G/50枚**
- BIG: **最大252枚 / 20G**
- REG: **最大96枚 / 10G（スイカこぼし時を除く）**
- coreConfidence: **OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### 型式/派生監査
- No.1614: `Sドラゴンハナハナ～閃光～SP-30` / 30Φメダル / 2023-12-18。
- No.1635: `Lドラゴンハナハナ～閃光～JP` / スマスロ / 2024-03-18。
- No.1638: `Sドラゴンハナハナ～閃光～DX` / 25Φメダル / 2024-03-18。
- 業界資料は25Φ版と30Φ版についてスペック・ゲーム性同一、違いは使用メダル径と明記。ただし型式/筐体依存のresetBehaviorは自動転記しない。

### No.1638 resetBehavior v0.7
- setting change: **天井・AT/CZ・周期非搭載のため短縮天井/朝一モード等はN/A。朝一BIG後フェザー色変化はシリーズ資料でリセット示唆として扱われるが、25Φ DX単独の固定発生率は未確認。**
- carry over: **天井・AT/CZモード等はN/A。DX固有のBGM/フェザー用内部累計カウント等の据え置き契約はUNVERIFIED_AFTER_RESEARCH。**
- power OFF→ON: **天井/モード引継ぎはN/A。DX固有のBGM・リール初動・内部累計カウント契約はUNVERIFIED_AFTER_RESEARCH。**
- game/ceiling: **天井非搭載。設定変更専用短縮天井N/A。**
- mode/state: **AT/CZ型モード・通常/高確状態は本DB粒度でN/A。**
- advantageous section: **25ΦメダルのノーマルAタイプで、朝一客行動へ影響するAT型有利区間天井/モード管理はN/A at mission granularity。**
- morning benefit: **朝一初回BIG後フェザー色変化は変更推測材料。ただし25Φ専用発生率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- reset detection: **25Φ固有ガックン/BGM/表示契約は再探索後もUNVERIFIED_AFTER_RESEARCH。30Φ版No.1614の72.73%実戦値（n=154）やガックン報告は型式差を尊重して本レコードへcanonical転記しない。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_DX_SPECIFIC_POWER_CARRYOVER_AND_GACKUN_NUMERIC_CONTRACT**

## 2024-03-18境界 — CLOSED 4/4
1. スマート沖スロ ドラゴンハナハナ～閃光～ — No.1635 DONE
2. 忍魂参 ～奥義皆伝ノ章～ — No.1636 DONE
3. SLOT忍者じゃじゃ丸くん — No.1637 DONE
4. ドラゴンハナハナ～閃光～ 25Φ — No.1638 DONE

境界監査:
- HAZUSE 2024年3月導入一覧は3/18パチスロを上記4機として掲載。
- 25Φ/30Φ/スマスロのドラゴンハナハナ3市場機は正式型式を分離済み。
- PB・別型式・地域先行・延期/段階導入を再検索し、今回追加の3/18 canonical候補は確認できず、同日群をCLOSEDとする。

## 次回再開地点
1. 最新mainを再同期し、No.1638と本handoffを再取得確認。
2. 次の通常導入境界は **2024-04-08**（HAZUSEカレンダー上、3/18の次）。
3. 2024-04-08 known候補を開始時に再監査。現時点で業界スケジュールから確認できる主候補は **ジャグラーガールズSS / スマスロ ゴールデンカムイ / Lうる星やつら / ストライク・ザ・ブラッド**。
4. **No.1639候補 `ジャグラーガールズSS`** から時系列キューを再開し、正式型式・地域差・PB/別型式を確認してから登録する。
5. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。
6. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1638 ドラゴンハナハナ～閃光～ 25Φ
- パイオニア公式: https://www.slot-pioneer.co.jp/product/dragon_hanahana_senko/
- 遊技日本 / P-WORLD 発売・型式: https://news.p-world.co.jp/articles/26504/nippon
- 遊技日本 / P-WORLD 25Φ/30Φ比較: https://news.p-world.co.jp/articles/26520/nippon
- 遊技通信 / P-WORLD: https://news.p-world.co.jp/articles/26517/yugitsushin
- P-BOMB: https://p-bomb.co.jp/industry/new-machine/8580/
- HAZUSE 型式/検定番号: https://hazuse.com/machine/pachislot/3S1039/
- HAZUSE機種DB: https://hazuse.com/hd/3s1039/
- パチ7 25Φ専用: https://pachiseven.jp/machines_v2/6899
- K-Navi: https://p-kn.com/slot/4086/
- ぽこすろっと reset判別整理: https://www.nankaikoya.jp/dragon-hanahana-senko/
- Bellagio 朝一フェザー: https://bellagio.hatenablog.com/entry/2023/12/13/150425

### 境界 / 次回候補
- HAZUSE 2024年3月導入一覧: https://hazuse.com/new-machine/202403-2/
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- グリーンべると 2024-04-08導入スケジュール: https://news.p-world.co.jp/articles/27485/greenbelt
