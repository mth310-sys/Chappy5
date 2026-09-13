更新日: 2026-09-14

## 現在地点
- recordCount: **1646**
- latestRecordAdded: **沖シーサー-30 — No.1646**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-05-07_oki-seesaa-30.md`
- chronologicalFrontier: **2024-05-07**
- frontierLatestMachine: **沖シーサー-30 — No.1646**
- schema: **resetBehavior v0.7**
- status: **2024-05-07_BOUNDARY_OPEN_1_OF_5_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1645 `パチスロ ダンジョンに出会いを求めるのは間違っているだろうか2` を確認して開始。
- README規定どおり、INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- 前handoffの2024-05-06〜05-07境界候補を再監査。
- `沖シーサー-30` はベルコ公式が「2024年5月登場」、業界発表が「5月導入予定」までの月粒度。一撃・HAZUSE・ちょんぼりすた・パチマニア等の機種別資料が **2024-05-07** で一致したため、旧候補の5/6表記は採用せず5/7をcanonical確定。
- No.1646 `沖シーサー-30` を性能コア + resetBehavior v0.7で新規登録。
- 2024-05-07同日群は現時点で5機をcanonical候補として固定。残り4機を順次処理後、PB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## No.1646 — 沖シーサー-30
- path: `docs/real_machine_db/machines/2024-05-07_oki-seesaa-30.md`
- manufacturer: **ヤーマ（ベルコ公式掲載）**
- formalModel: **S沖シーサーKY1-30**
- inspectionCode: **3S1888**
- releaseDate: **2024-05-07**
- generation: **6.5号機 / 30Φメダル機**
- systemType: **ノーマル(A) / 完全告知ボーナス機**
- 機械割 setting1-6: **97.5 / 99.0 / 101.0 / 103.0 / 105.0 / 107.0%**
- BIG setting1-6: **1/312.1 / 1/309.1 / 1/303.4 / 1/299.3 / 1/297.9 / 1/295.2**
- REG setting1-6: **1/468.1 / 1/428.3 / 1/387.8 / 1/352.3 / 1/322.8 / 1/295.2**
- 合算 setting1-6: **1/187.2 / 1/179.6 / 1/170.2 / 1/161.8 / 1/154.9 / 1/147.6**
- base: **約41.8G/50枚（設定1）**
- basicPayout: **BIG約280枚 / REG約104枚**
- coreConfidence: **OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1646 resetBehavior v0.7
- setting change: **天井非搭載のノーマル機。天井/ゲーム数モード/CZ等のreset対象なし。設定変更専用朝一恩恵・状態優遇は再探索後NONE_CONFIRMED。**
- carry over: **客側の朝一立ち回りに影響する天井・モード等のCARRY_OVER軸なし。**
- power OFF→ON: **天井ゲーム数引継ぎはNOT_APPLICABLE。機種別必勝本ではガックンのみ「現在調査中」。**
- game/ceiling: **天井非搭載。短縮天井NOT_APPLICABLE。**
- mode/state: **通常A/B・天国等のゲーム数モード、高確/低確等のAT/CZ状態を持つ公開仕様は確認できず。朝一専用モード/状態優遇もNONE_CONFIRMED_AFTER_RESEARCH。**
- advantageous section: **ノーマルAタイプとして客側の朝一判断へ影響する機種固有の有利区間RESET/CARRY_OVER資料なし。AT機一般論は流用せず、player-facing reset axisとして非該当扱い。**
- reset detection: **設定変更/電断双方のリールガックンは必勝本で調査中。本機固有ガックン条件・発生率、表示/ランプ確定判別は十分な再探索後UNVERIFIED。**
- resetQaStatus: **COMPLETE_RESEARCHED**

### 公開朝一数値 — No.1646
- 設定変更時短縮天井: **NOT_APPLICABLE（天井非搭載）**
- 設定変更専用モード振り分け: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / NO_DISCRETE_MODE_CONFIRMED**
- 朝一当選率優遇: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- 設定変更恩恵発生率: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- ガックン発生率: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**

## conflicts / quality notes
### No.1646
- releaseDate: 旧境界候補に5/6表記があったが、複数の機種別資料は2024-05-07で一致。5/7をcanonical採用。
- ベース: 約41G表記と約41.8G（設定1）の差は丸め差として扱い、精密値約41.8G/50枚をcanonical採用。
- resetBehavior: 公開差分が少ないノーマル機のため、一般的な6号機/AT機挙動を補完せず、機種固有で確認できない項目のみUNVERIFIED。

## 2024-05-07境界 — OPEN 1/5 known canonical candidates
1. 沖シーサー-30 — No.1646 DONE
2. Lパチスロ 炎炎ノ消防隊 — NEXT / No.1647 candidate
3. L ウルトラマンティガ — pending
4. スマスロ交響詩篇エウレカセブン4 HI-EVOLUTION — pending
5. ニューパルサーSP4 with 太鼓の達人 — pending

境界監査メモ:
- `沖シーサー-30`、`Lパチスロ 炎炎ノ消防隊`、`L ウルトラマンティガ`、`スマスロ交響詩篇エウレカセブン4 HI-EVOLUTION`、`ニューパルサーSP4 with 太鼓の達人` は複数の機種別資料で2024-05-07導入を確認。
- エウレカ4の前handoff上の5/13候補は、サミー公式動画が「2024年5月7日より順次導入」、必勝本も5/7導入としており、canonicalは5/7へ補正。
- 全5機処理後、`2024年5月7日 / 2024-05-07 / パチスロ新台 / 導入 / 型式 / PB / 地域先行 / 段階導入` 等を再検索し、追加漏れがないことを確認してCLOSED判定する。

## 次回再開地点
1. 最新mainを再同期し、No.1646と本handoffを再取得確認。
2. **No.1647候補 `Lパチスロ 炎炎ノ消防隊`（2024-05-07）** を性能コア + resetBehavior v0.7で処理。
3. 次点は `L ウルトラマンティガ` → `スマスロ交響詩篇エウレカセブン4 HI-EVOLUTION` → `ニューパルサーSP4 with 太鼓の達人`。
4. 5機完了後に同日群をPB・別型式・地域先行・延期/段階導入まで再監査してCLOSED判定。
5. 遡及QAは前handoffどおり `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理。
6. 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1646 沖シーサー-30
- ベルコ公式: https://www.s-bellco.co.jp/products/slot/yamaokiseesaa-30/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004196/
- グリーンべると 発売記事: https://web-greenbelt.jp/post-81174/
- グリーンべると 検定通過: https://web-greenbelt.jp/post-81369/
- HAZUSE: https://hazuse.com/machine/pachislot/3S1888/
- 一撃: https://1geki.jp/slot/s_okiseesaa30/39/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/83408/
- 必勝本 通常時解説: https://hisshobon.com/machineinfo/83410/
- ちょんぼりすた: https://chonborista.com/slot/ya-ma/209352/
- パチマニア: https://ps-mania.jp/slot/okishisa-30/

### 2024-05-07境界補助
- 必勝本 エウレカ4基本スペック: https://p.hisshobon.jp/vpage/2611/2
- サミー公式YouTube エウレカ4: https://www.youtube.com/watch?v=QHVa_VgYYts
- HAZUSE L炎炎ノ消防隊: https://hazuse.com/hd/330569-2/
- 必勝本 Lウルトラマンティガ基本スペック: https://hisshobon.com/machineinfo/83710/
- パチビー ニューパルサーSP4 with 太鼓の達人: https://www.pachibee.jp/machines/about/224040002
