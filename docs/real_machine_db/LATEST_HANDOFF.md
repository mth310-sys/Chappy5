更新日: 2026-09-14

## 現在地点
- recordCount: **1650**
- latestRecordAdded: **ニューパルサーSP4 with 太鼓の達人 — No.1650**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-05-07_new-pulsar-sp4-with-taiko-no-tatsujin.md`
- chronologicalFrontier: **2024-05-07**
- frontierLatestMachine: **ニューパルサーSP4 with 太鼓の達人 — No.1650**
- schema: **resetBehavior v0.7**
- status: **2024-05-07_BOUNDARY_CLOSED_5_OF_5_CANONICAL_PROCESSED / NEXT_2024-06-03_BOUNDARY_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1648 `L ウルトラマンティガ` を確認して開始。
- README規定どおり、INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- No.1649 `スマスロ交響詩篇エウレカセブン4 HI-EVOLUTION` と No.1650 `ニューパルサーSP4 with 太鼓の達人` を性能コア + resetBehavior v0.7で新規登録。
- 2024-05-07同日群の既知5機を全処理。月間/機種別/新台カレンダーを再監査し、2024年5月のパチスロ新台はこの5機で打ち止めと判断して同日群をCLOSED。
- 一部カレンダーの `沖シーサー-30=5/6`、`エウレカ4=5/13`、`ニューパルSP4=5月上旬` 表記は、地域/予定/ラベル差として保持。機種別の直接資料と複数の5/7一覧を優先しcanonicalを2024-05-07に維持。
- 次の本線は2024-06-03。同日パチスロ候補5機を複数月間資料で確認。

## No.1649 — スマスロ交響詩篇エウレカセブン4 HI-EVOLUTION
- path: `docs/real_machine_db/machines/2024-05-07_l-eureka-seven-4-hi-evolution.md`
- manufacturer: **銀座製造 / サミー販売**
- formalModel: **L エウレカセブン4 HIEVO KX** / inspectionCode: **3S1577**
- releaseDate: **2024-05-07**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 直AT・ゲーム数上乗せ型**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.9 / 98.9 / 100.8 / 105.3 / 110.0 / 113.1%**
- AT初当り: **1/366.5 / 1/358.6 / 1/345.4 / 1/308.3 / 1/282.8 / 1/270.9**
- base: **約34.6G/50枚**
- netIncrease: **C-MODE約2.1枚/G / 擬似BONUS・ANEMONE約4.5枚/G**
- basicPayout: **C-MODE初期50G+α / BONUS25G / HI-EVO MODE 10G+α・平均上乗せ約440G**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1649 resetBehavior v0.7
- setting change: **有利区間・実G天井進行・内部WAVEをRESET、モード/状態再抽選。**
- carry over: **据え置きは天井G・WAVE・モード・状態・有利区間CARRY_OVER。**
- power OFF→ON: **天井G・WAVE・モード・状態をCARRY_OVER。通常時は食堂ステージ、WAVE表示は朝一2G間 `---`。**
- ceiling: **通常最大1550WAVE → 設定変更後最大950WAVE（平均約475G）へ短縮。実G天井999G+αは進行RESET。**
- mode: **設定変更時モードA/B/C/天国を再抽選。専用具体振り分けはPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- state: **設定変更時 通常39.8% / 高確50.0% / 超高確10.2% = 高確以上60.2%。**
- advantageous section: **設定変更RESET、据え置き/電断CARRY_OVER。設定変更以外の有利区間リセット後EX LFO MODEは朝一恩恵と分離。**
- detection: **朝一950WAVE超でAT非当選なら据え置き濃厚材料。開始画面単独判別困難。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。**
- resetQaStatus: **COMPLETE_RESEARCHED**

### 公開朝一数値 — No.1649
- 設定変更後最大WAVE天井: **950WAVE（平均約475G）**
- 通常最大WAVE天井: **1550WAVE（平均約775G）**
- 実ゲーム数天井: **999G+α**
- 設定変更時内部状態: **通常39.8% / 高確50.0% / 超高確10.2%**
- 高確以上開始率: **60.2%**
- 設定変更後250WAVE以内AT当選率: **通常時よりUP。専用具体率PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**

## No.1650 — ニューパルサーSP4 with 太鼓の達人
- path: `docs/real_machine_db/machines/2024-05-07_new-pulsar-sp4-with-taiko-no-tatsujin.md`
- manufacturer: **セブンリーグ製造 / 山佐ネクスト販売**
- formalModel: **SニューパルサーSP4SLE8** / inspectionCode: **330606**
- releaseDate: **2024-05-07**
- generation: **6.5号機 / メダル機**
- systemType: **ノーマル / ボーナス主体**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.8 / 98.8 / 99.9 / 102.5 / 105.0 / 108.3%**
- BIG: **1/287.4 / 1/280.1 / 1/273.1 / 1/260.1 / 1/248.2 / 1/237.4**
- REG: **1/344.9 / 1/336.1 / 1/327.7 / 1/312.1 / 1/297.9 / 1/284.9**
- 合算: **1/156.8 / 1/152.8 / 1/148.9 / 1/141.9 / 1/135.4 / 1/129.5**
- base: **約38G/50枚（設定1）**
- basicPayout: **BIG280枚固定 / REG98枚固定**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1650 resetBehavior v0.7
- ノーマルタイプでAT/CZ・規定G・天井・朝一専用ATモードは **N/A**。
- setting change / 据え置き / power OFF→ONで朝一客AIに影響する天井進行・ATモード等の契約は非該当。
- 天井短縮・朝一CZ/AT優遇率・朝一モード振り分けはN/A。
- 本機固有リールガックン条件/発生率は、機種名・型式・メーカーと検索語を変更して主要解析/旧DBまで再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- ボーナス終了画面/ケロットトロフィーは設定示唆であり変更判別とは別物なのでresetDetectionへ流用しない。
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_NA_AND_UNVERIFIED**

## conflicts / quality notes
- No.1649: WAVEは通常1G=1WAVE加算だがセブンチャンス込み実質平均約2WAVE/G。定義差でCONFLICTではない。250WAVE以内40.5〜50.5%は通常の設定別期待度で、設定変更専用率として流用しない。
- No.1650: 世代表記に「6号機」「6.5号機」が混在。ゲーム性はノーマルで一致。必勝本はベース調査中だが、パチマガ/一撃系で約38G/50枚が一致するためcanonical採用。
- 2024-05-07 boundary: K-Navi等に5/6・5/13・5月上旬の表記差あり。マルっとWAVEの5/7一覧、機種別直接資料、実稼働/公式系資料を優先して5機を同一canonical群としてCLOSED。

## 2024-05-07境界 — CLOSED 5/5 canonical
1. 沖シーサー-30 — No.1646 DONE
2. Lパチスロ 炎炎ノ消防隊 — No.1647 DONE
3. L ウルトラマンティガ — No.1648 DONE
4. スマスロ交響詩篇エウレカセブン4 HI-EVOLUTION — No.1649 DONE
5. ニューパルサーSP4 with 太鼓の達人 — No.1650 DONE

境界監査メモ:
- HAZUSE新台カレンダーは2024年5月のスロット導入日を05月07日のみとしている。
- マルっとWAVEの2024-05-08公開スケジュールは5/7導入パチスロとして上記5機を列挙し、次回を6/3導入群としている。
- 一撃系月次集計でも2024年5月のパチスロ新台は5機。
- PB / 別型式 / 地域先行 / 5月中の追加通常導入候補を再検索したが、本線へ追加すべき独立機種は確認できずCLOSED。

## 次回境界 — 2024-06-03 OPEN / known 5 candidates
現時点の既知候補:
1. **L聖闘士星矢 海皇覚醒 CUSTOM EDITION — NEXT / No.1651 candidate**
2. L ToLOVEるダークネス — pending
3. アオハル♪操 A-LIVE — pending
4. スマスロ痛いのは嫌なので防御力に極振りしたいと思います。 — pending
5. スマスロ ストリートファイターV 挑戦者の道 — pending

- 複数月間資料で上記5機が2024-06-03導入群として一致。
- ただしNo.1651処理開始前に `2024-06-03 / 6月3日 / パチスロ新台 / 型式 / PB / 地域先行 / 段階導入` を再監査し、候補数を固定する。

## 次回再開地点
1. 最新mainを再同期し、No.1649 / No.1650 と本handoffを再取得確認。
2. 2024-06-03群の境界を再監査してcanonical候補数を固定。
3. **No.1651候補 `L聖闘士星矢 海皇覚醒 CUSTOM EDITION`（2024-06-03）** を性能コア + resetBehavior v0.7で処理。
4. 次点は `L ToLOVEるダークネス` → `アオハル♪操 A-LIVE` → `スマスロ痛いのは嫌なので防御力に極振りしたいと思います。` → `スマスロ ストリートファイターV 挑戦者の道`。
5. 同日群完了後、PB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定。
6. 遡及QAカーソルは `2007-07-09_genju-haou-t.md` まで完了。次QA対象はmain machines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理。
7. 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1649 スマスロ交響詩篇エウレカセブン4 HI-EVOLUTION
- サミー マイスロ新機種告知: https://new.sammy.co.jp/japanese/myslot/news/
- 遊技日本/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/26942/nippon
- グリーンべると機種発表: https://web-greenbelt.jp/post-80772/
- HAZUSE: https://hazuse.com/machine/pachislot/3S1577/
- P-WORLD: https://www.p-world.co.jp/machine/database/10011
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/83161/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/741/21206/
- なな徹 モード: https://nana-press.com/kaiseki/machine/741/21208/
- 一撃 天井・リセット: https://1geki.jp/slot/l_eureka4/3/

### No.1650 ニューパルサーSP4 with 太鼓の達人
- 山佐ネクスト機種発表（遊技日本/P-WORLD）: https://news.p-world.co.jp/articles/27022/nippon
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004153/
- 型式販売発表（遊技日本/P-WORLD）: https://news.p-world.co.jp/articles/27181/nippon
- HAZUSE: https://hazuse.com/machine/pachislot/SX0071/
- P-WORLD: https://www.p-world.co.jp/machine/database/10019
- パチビー: https://www.pachibee.jp/machines/about/224040002
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sevenleague_slot/06/tj02.php
- 一撃: https://1geki.jp/slot/s_newpulsar_with_tt/

### 2024-05 / 次境界監査
- マルっとWAVE 5/7以降スケジュール: https://marutto-w.com/industry_news/20240508
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- K-Navi 2024年5月: https://p-kn.com/calendar/202405/
- P-Summa 2024年6月パチスロ新台: https://psumma.jp/pachislo/61472/
- K-Navi 2024年6月: https://p-kn.com/calendar/202406/
