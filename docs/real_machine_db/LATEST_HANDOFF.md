更新日: 2026-09-14

## 現在地点
- recordCount: **1653**
- latestRecordAdded: **アオハル♪操 A-LIVE — No.1653**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-06-03_aoharu-misao-a-live.md`
- chronologicalFrontier: **2024-06-03**
- frontierLatestMachine: **アオハル♪操 A-LIVE — No.1653**
- schema: **resetBehavior v0.7**
- status: **2024-06-03_BOUNDARY_OPEN_3_OF_5_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1652 `L ToLOVEるダークネス` を確認して開始。
- README規定どおり、INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- 2024-06-03境界5候補を継続し、No.1653 `アオハル♪操 A-LIVE` を性能コア + resetBehavior v0.7で新規登録。
- 天井非搭載機だが設定変更時BBモード抽選があるため、resetBehaviorをN/A一括処理せず朝一モード・有利区間・電断差を個別収集。

## No.1653 — アオハル♪操 A-LIVE
- path: `docs/real_machine_db/machines/2024-06-03_aoharu-misao-a-live.md`
- manufacturer: **大都技研**
- formalModel: **Sアオハル♪操 A-LIVE A2** / inspectionCode: **330628**
- releaseDate: **2024-06-03**
- generation: **6.5号機 / メダル機**
- systemType: **AT / A400-AT・疑似ボーナス主体 / 技術介入**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 通常機械割: **98.0 / 99.0 / 100.3 / 102.1 / 104.0 / 106.6%**
- 完全攻略時機械割: **100.1 / 101.0 / 102.3 / 104.2 / 106.3 / 109.0%**
- BIG: **1/286.1 → 1/241.1**
- REG: **1/419.6 → 1/359.2**
- BONUS合算: **1/169.9 → 1/144.1**
- base: **約33G/50枚**
- netIncrease: **疑似ボーナス約7.0枚/G**
- basicPayout: **BIG平均約400枚 / REG約50枚 / 絶頂LIVE 500～2000枚**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1653 resetBehavior v0.7
- setting change: **有利区間RESET。内部モード再抽選。設定変更後はBBモードスタートのチャンスで、高設定ほど選択率優遇の解析あり。内部状態RESET。**
- carry over: **据え置きは有利区間・内部モードCARRY_OVER。**
- power OFF→ON: **機種別比較表では内部状態RESET。BBモードそのもの・有利区間そのものの純電断直接契約はUNVERIFIED_AFTER_RESEARCH。**
- ceiling: **ゲーム数天井非搭載。設定変更後短縮天井なし。CZ間/CZスルー天井も公開上なし。**
- mode: **BBモードあり。滞在中ボーナス当選でBIG濃厚。設定変更時に移行抽選、高設定ほど優遇。設定別選択率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。一般BBモード平均滞在は約150Gとする解析あり。**
- state: **設定変更RESET / 純電断RESETとする比較表あり。据え置き時内部モードは引継ぎ。内部状態とBBモードを同一視しない。**
- advantageous section: **設定変更RESET / 据え置きCARRY_OVER。有利区間ランプで変更判別不可。純電断単独は直接資料不足。**
- detection: **天井非搭載のためG数による変更確定不可。有利区間ランプ判別不可。BBモード示唆も通常ボーナス後に移行し得るため変更確定材料ではない。本機固有ガックン/確定開始ステージ差はUNVERIFIED_AFTER_RESEARCH。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_PARTIAL_POWER_CYCLE_AND_NUMERIC_BB_MODE_UNVERIFIED**

### 公開朝一数値 — No.1653
- 設定変更時BBモード選択率: **高設定ほど優遇 / 具体的設定別数値 PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- BBモード平均滞在G数: **約150G**（通常BBモード一般値。設定変更専用固定値ではない）
- 通常天井: **非搭載**
- リセット後短縮天井: **非搭載**

## conflicts / quality notes
- No.1653: 通常機械割と完全攻略時機械割は別定義であり平均化せず両方保持。
- No.1653: 実導入日は複数業界/機種DBで2024-06-03一致。一部初期遊技通信記事に「6月下旬予定」があり、告知時期差としてレコード内に保持。
- No.1653: 純電断については内部状態RESETの機種別比較表があるが、BBモード/有利区間の直接契約は固定できず一般据え置き挙動から推定していない。
- No.1653: 設定変更時BBモード選択率は存在・高設定優遇まで複数解析で確認したが、設定別固定率は再探索後も未取得。

## 2024-06-03境界 — OPEN 3/5 canonical processed
1. L聖闘士星矢 海皇覚醒 CUSTOM EDITION — No.1651 DONE
2. L ToLOVEるダークネス — No.1652 DONE
3. アオハル♪操 A-LIVE — No.1653 DONE
4. **スマスロ痛いのは嫌なので防御力に極振りしたいと思います。 — NEXT / No.1654 candidate**
5. スマスロ ストリートファイターV 挑戦者の道 — pending

境界監査メモ:
- 必勝本NEWS 2024-06-02公開の6/3導入一覧とP-Summa 2024-06-01は上記5機を同日導入として列挙。
- K-Navi月間カレンダー、各機種導入日、業界記事でも6/3導入を照合。
- Amusement Japan 2024-07-22記事は「6月導入新機種6機種」と記載。上記5機との差分があるため、5機処理完了後に月内追加機・地域先行・PB・別型式・延期/段階導入を再監査して解消する。

## 次回再開地点
1. 最新mainを再同期し、No.1653実レコードと本handoffを再取得確認。
2. **No.1654候補 `スマスロ痛いのは嫌なので防御力に極振りしたいと思います。`（2024-06-03）** を性能コア + resetBehavior v0.7で処理。
3. 次点は `スマスロ ストリートファイターV 挑戦者の道`。
4. 同日群5機完了後、2024年6月の「5機/6機」掲載差を、PB・別型式・地域先行・月内別日導入・延期/段階導入まで再監査して解消しCLOSED判定。
5. 遡及QAカーソルは `2007-07-09_genju-haou-t.md` まで完了。次QA対象はmain machines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理。
6. 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1653 アオハル♪操 A-LIVE
- P-WORLD NEWS / グリーンべると: https://news.p-world.co.jp/articles/27644/greenbelt
- P-WORLD NEWS / Amusement Japan: https://news.p-world.co.jp/articles/27642/amusement
- P-WORLD NEWS / 遊技日本（型式/スペック）: https://news.p-world.co.jp/articles/27650/nippon
- P-WORLD NEWS / 遊技日本（検定通過）: https://news.p-world.co.jp/articles/27320/nippon
- HAZUSE: https://hazuse.com/hd/330628-2/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/761/21282/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/761/21945/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/761/21946/
- なな徹 天井/リセット狙い: https://nana-press.com/kaiseki/machine/761/21943/
- 一撃: https://1geki.jp/slot/s_aoharu_misao/
- 一撃 BBモード: https://1geki.jp/slot/s_aoharu_misao/43/
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/210195/comment-page-2/
