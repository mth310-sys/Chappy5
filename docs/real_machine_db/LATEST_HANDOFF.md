更新日: 2026-09-14

## 現在地点
- recordCount: **1634**
- latestRecordAdded: **パチスロ ブラックミクちゃん — No.1634**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-03-09_black-miku-chan.md`
- chronologicalFrontier: **2024-03-09**
- frontierLatestMachine: **パチスロ ブラックミクちゃん — No.1634**
- schema: **resetBehavior v0.7**
- status: **2024-03-09_PB_BOUNDARY_CLOSED_1_OF_1_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1633 `パチスロ ガメラ2` を確認して開始。
- INDEXは旧版表示のためREADME規定どおりLATEST_HANDOFF + main実レコードを進捗正本として採用。
- mainはすでにNo.1633まで進んでいたため、既存No.1632/1633をやり直さずLATEST_HANDOFF指定どおりNo.1634候補 `パチスロ ブラックミクちゃん` から継続。
- 2024-03-09の2店舗テスト導入開始を実稼働開始のcanonical releaseDate、2024年4月のタツミコーポレーション全店展開を段階導入属性として分離保存。
- 次の時系列境界は2024-03-18。HAZUSE月間一覧と複数導入資料で、スマート沖スロ ドラゴンハナハナ～閃光～ / 忍魂参 ～奥義皆伝ノ章～ / SLOT忍者じゃじゃ丸くん / ドラゴンハナハナ～閃光～ の4機候補を確認。

## No.1634 — パチスロ ブラックミクちゃん
- path: `docs/real_machine_db/machines/2024-03-09_black-miku-chan.md`
- manufacturer: **DAXEL（製造元） / タツミコーポレーションPB**
- formalModel: **SブラックミクちゃんDA**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2024-03-09（2店舗テスト導入開始） / 2024-04（全店展開）**
- generation: **6.5号機 / メダル機**
- systemType: **ノーマルAタイプ / ボーナス主体**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **98.2 / 99.2 / 101.2 / 103.2 / 107.2 / 111.3%**
- BIG: **1/271.9 / 1/267.4 / 1/258.0 / 1/249.1 / 1/240.0 / 1/230.7**
- REG: **1/358.1 / 1/344.9 / 1/316.6 / 1/289.9 / 1/260.0 / 1/230.7**
- 合算: **1/154.5 / 1/150.6 / 1/142.1 / 1/134.0 / 1/124.8 / 1/115.3**
- base: **設定1～6 38.5G～41.5G/50枚（公開範囲）**
- BIG **259枚** / REG **103枚**
- 天井: **非搭載**

### No.1634 resetBehavior v0.7
- setting change: **ノーマルAタイプ。設定変更専用の短縮天井・朝一AT/CZモード・規定周期はN/A。機種固有のリール/表示契約はUNVERIFIED_AFTER_RESEARCH。**
- carry over: **ゲーム数天井・モード・周期・AT/CZスルー回数はN/A。据え置き固有表示はUNVERIFIED_AFTER_RESEARCH。**
- power OFF→ON: **天井/モード/周期引継ぎはN/A。ランプ/表示/リール挙動の直接契約はUNVERIFIED_AFTER_RESEARCH。**
- game/ceiling: **天井非搭載。短縮天井N/A。**
- mode/state: **朝一狙いに関わる通常/天国モード、AT/CZ内部状態はミッション粒度でN/A。実機完全再現向けのボーナス成立内部状態は収集対象外。**
- advantageous section: **ボーナス主体ノーマルAで、公開資料上朝一性能として有利区間を利用するゲーム性を確認せず `NOT_APPLICABLE_AT_MISSION_GRANULARITY`。規則上の内部実装は推測しない。**
- morning benefit: **天井短縮・専用モード・CZ/AT優遇等なし/N/A。比較可能な朝一専用数値は確認されない。**
- reset detection: **本機固有ガックン/変更判別表示は十分な再探索後もUNVERIFIED_AFTER_RESEARCH。宵越し天井判別は天井非搭載のためN/A。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_MACHINE_SPECIFIC_GACKUN_POWER_DISPLAY_AND_INSPECTION_CODE**

## conflicts — No.1634
- 導入時期: 業界一次系記事は2024-03-09の2店舗テスト導入開始、K-Navi等は2024年4月ホール導入開始。平均化せず、3/9を実稼働開始のcanonical releaseDate、4月を全店展開として段階導入属性に分離。

## 2024-03-09境界 — CLOSED 1/1 canonical
1. パチスロ ブラックミクちゃん — No.1634 DONE

境界監査メモ:
- HAZUSE 2024年3月一覧でも3/9パチスロはブラックミクちゃん1機。
- Amusement Japan、遊技日本/P-WORLD、P-BOMBで3/9から西明石13台・泉ヶ丘16台のテスト導入開始を確認。
- 4月全店展開は同一型式の段階導入であり、別レコード化しない。

## 次回再開地点
1. 最新mainを再同期し、No.1634と本handoffの反映を再取得確認。
2. **No.1635候補 `スマート沖スロ ドラゴンハナハナ～閃光～` — 2024-03-18** から性能コア + resetBehavior v0.7で処理する。
3. 2024-03-18 known候補は現時点4機: `スマート沖スロ ドラゴンハナハナ～閃光～` / `忍魂参 ～奥義皆伝ノ章～` / `SLOT忍者じゃじゃ丸くん` / `ドラゴンハナハナ～閃光～`。
4. `ドラゴンハナハナ～閃光～` 系は既存2023-12-18系レコードとの25φ/30φ/スマート沖スロ/段階導入・別型式関係をmain既存レコードで再監査してから新規No.を確定する。重複レコードを作らない。
5. HAZUSE月間一覧は上記4機を3/18群として掲載。別ソースでも忍魂参・じゃじゃ丸・スマート沖スロ版の3/18導入を確認済み。PB・別型式・地域先行・延期を再監査して群件数を固定する。
6. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。推測で固定しない。
7. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### パチスロ ブラックミクちゃん
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004209/
- 遊技日本 / P-WORLD: https://news.p-world.co.jp/articles/27215/nippon
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/27211/greenbelt
- P-BOMB: https://p-bomb.co.jp/industry/hall/9056/
- ぱちんこキュレーション: https://pachinko-curation.com/46586/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10027
- 一撃 設定判別/ボーナス確率: https://1geki.jp/slot/s_black_miku_chan/0/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_black_miku_chan/3/
- K-Navi: https://p-kn.com/slot/4130/

### 境界監査 / 次群
- HAZUSE 2024年3月導入一覧: https://hazuse.com/new-machine/202403-2/
- マルっとWAVE 3/18導入一覧: https://marutto-w.com/industry_news/20240307
- K-Navi SLOT忍者じゃじゃ丸くん: https://p-kn.com/slot/4097/
- K-Navi 忍魂参 ～奥義皆伝ノ章～: https://p-kn.com/slot/4110/
