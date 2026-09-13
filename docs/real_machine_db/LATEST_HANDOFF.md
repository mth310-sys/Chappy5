更新日: 2026-09-14

## 現在地点
- recordCount: **1654**
- latestRecordAdded: **スマスロ痛いのは嫌なので防御力に極振りしたいと思います。 — No.1654**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-06-03_l-bofuri.md`
- chronologicalFrontier: **2024-06-03**
- frontierLatestMachine: **スマスロ痛いのは嫌なので防御力に極振りしたいと思います。 — No.1654**
- schema: **resetBehavior v0.7**
- status: **2024-06-03_BOUNDARY_OPEN_4_OF_5_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1653 `アオハル♪操 A-LIVE` を確認して開始。
- README規定どおり、INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- relay1がNo.1653まで先行していたため重複を避け、次の未処理No.1654 `スマスロ痛いのは嫌なので防御力に極振りしたいと思います。` を性能コア + resetBehavior v0.7で新規登録。
- 設定変更/据え置き/純電断の天井・モード/状態・防御状態・有利区間を複数解析で照合し、公開朝一数値まで保存。

## No.1654 — スマスロ痛いのは嫌なので防御力に極振りしたいと思います。
- path: `docs/real_machine_db/machines/2024-06-03_l-bofuri.md`
- manufacturer: **ロデオ製造 / サミー販売**
- formalModel: **L 防振り FN** / inspectionCode: **430072**
- releaseDate: **2024-06-03**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 疑似ボーナス連チャン型・CZ高確状態ループ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.9 / 98.8 / 100.5 / 105.9 / 109.5 / 113.0%**
- 初当たり: **1/319.0 / 1/309.8 / 1/307.3 / 1/266.8 / 1/257.1 / 1/229.7**
- base: **約33G/50枚**
- netIncrease: **疑似ボーナス約5.5枚/G**
- basicPayout: **REG約100枚 / BIG約150枚 or 約250枚 / EP約250枚（暴虐系約310枚）**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1654 resetBehavior v0.7
- setting change: **有利区間RESET。天井G RESET + 内部Gランダム加算。内部モード/状態・防御状態RESET。通常950G+α天井が450G+α or 650G+αへ短縮。設定変更時のみ極・直撃高確へ平均約8G滞在し、中段チェリー発生率も防御状態中のボーナス当選まで通常の約3倍。**
- carry over: **据え置きは有利区間・天井G・内部モード/状態・防御状態CARRY_OVER。**
- power OFF→ON: **有利区間・天井G・モード/内部状態・防御状態CARRY_OVERを機種別比較で確認。**
- ceiling: **通常950G+α / 設定変更後450G+α 70%・650G+α 30%。設定変更後初当たりが単発なら次回も短縮状態を継続。**
- mode/state: **設定変更で再抽選/RESET、据え置き・純電断で引継ぎ。通常/高確の内部状態が存在。極・直撃高確は設定変更専用。**
- advantageous section: **設定変更RESET / 据え置き・純電断CARRY_OVER。設定変更以外の有利区間RESET後には高防御レベル側の恩恵があるが、設定変更時には同じ恩恵を流用しない。**
- detection: **設定変更時は内部Gランダム加算でゾーン/前兆位置がズレるためリセット判別は難しい。開始ステージは主要資料で調査中。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_GAKKUN_AND_RANDOM_ADD_DISTRIBUTION_UNVERIFIED**

### 公開朝一数値 — No.1654
- 通常天井: **950G+α**
- 設定変更後天井: **450G+α 70% / 650G+α 30%**
- 極・直撃高確: **設定変更時のみ / 平均約8G**
- 中段チェリー: **設定変更後、防御状態中のボーナス当選まで通常の約3倍**
- 設定変更時中段チェリー出現率（解析値）: **設定1/2 約1/43690、設定3 約1/36974、設定4 約1/32768、設定5 約1/27306、設定6 約1/21845**
- 内部Gランダム加算の具体的振り分け: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**

## conflicts / quality notes
- No.1654: 初当たり設定3はサミー発表系/ちょんぼりすた `1/307.3`、一撃 `1/307.1`。多数一致の1/307.3をcanonicalとし `CONFLICT_INITIAL_HIT_SETTING3_307_3_VS_307_1` を保持。
- No.1654: 一部要約資料の「リセット時650G+α」は最大短縮天井表記。詳細解析では450G 70% / 650G 30%が複数一致しており、450G振り分けを欠落させない。
- No.1654: 開始ステージと本機固有ガックンは再探索後も固定できずUNVERIFIEDを維持。

## 2024-06-03境界 — OPEN 4/5 canonical processed
1. L聖闘士星矢 海皇覚醒 CUSTOM EDITION — No.1651 DONE
2. L ToLOVEるダークネス — No.1652 DONE
3. アオハル♪操 A-LIVE — No.1653 DONE
4. スマスロ痛いのは嫌なので防御力に極振りしたいと思います。 — No.1654 DONE
5. **スマスロ ストリートファイターV 挑戦者の道 — NEXT / No.1655 candidate**

境界監査メモ:
- 必勝本NEWS 2024-06-02公開の6/3導入一覧とP-Summa 2024-06-01は上記5機を同日導入として列挙。
- K-Navi月間カレンダー、各機種導入日、業界記事でも6/3導入を照合。
- Amusement Japan 2024-07-22記事は「6月導入新機種6機種」と記載。5機処理完了後に月内追加機・地域先行・PB・別型式・延期/段階導入を再監査して差分を解消する。

## 次回再開地点
1. 最新mainを再同期し、No.1654実レコードと本handoffを再取得確認。
2. **No.1655候補 `スマスロ ストリートファイターV 挑戦者の道`（2024-06-03）** を性能コア + resetBehavior v0.7で処理。
3. 同日群5機完了後、2024年6月の「5機/6機」掲載差を、PB・別型式・地域先行・月内別日導入・延期/段階導入まで再監査してCLOSED判定。
4. 遡及QAカーソルは `2007-07-09_genju-haou-t.md` まで完了。次QA対象はmain machines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理。
5. 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1654 スマスロ痛いのは嫌なので防御力に極振りしたいと思います。
- P-WORLD NEWS / 遊技日本: https://news.p-world.co.jp/articles/27378/nippon
- P-WORLD NEWS / 遊技日本 スペック: https://news.p-world.co.jp/articles/27398/nippon
- HAZUSE: https://hazuse.com/machine/pachislot/SX0074/
- P-WORLD: https://www.p-world.co.jp/machine/database/10036
- パチ&スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4306/1/102296
- パチ&スロ必勝本 有利区間: https://p.hisshobon.jp/machine/4306/1/105421
- パチ&スロ必勝本 モード: https://p.hisshobon.jp/machine/4306/1/103201
- なな徹 朝一: https://nana-press.com/kaiseki/machine/764/21886/
- なな徹 リセット狙い: https://nana-press.com/kaiseki/machine/764/22766/
- 一撃: https://1geki.jp/slot/l_bofuri/3/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/211149/
