更新日: 2026-09-13

## 現在地点
- recordCount: **1575**
- latestRecordAdded: **ゴーゴージャグラー3 — No.1575**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-07-03_go-go-juggler3.md`
- chronologicalFrontier: **2023-07-03**
- frontierLatestMachine: **ゴーゴージャグラー3 — No.1575**
- schema: **resetBehavior v0.7**
- status: **2023-07-03_GROUP_OPEN_3_OF_4_CANONICAL_PROCESSED / NEXT_NO1576_KARAKURI_CIRCUS**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1574 `パチスロ 蛇喰夢子という女` を確認して開始。
- INDEXは旧表示（19件）のためREADME規定どおり、LATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 2023-07-03群のcanonical 4機を維持し、3機目として No.1575 `ゴーゴージャグラー3` を性能コア + resetBehavior v0.7で追加。
- 欠損項目は `ゴーゴージャグラー3 / ゴージャグ3 / Sゴーゴージャグラー3KA / 北電子` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 1G目 / リール / BGM / 天井 / モード / 状態 / 有利区間` を組み替え、メーカー公式・業界記事・公安委員会系検定資料・当時解析・ジャグラー専門/実戦資料を横断して再探索。
- 本機は天井・規定Gモード・CZ/AT・朝一専用高確等を持たないノーマル機のため、該当しないreset項目は推測で埋めず `NOT_APPLICABLE` とした。変更判別については設定変更後1G目ガックンを機種個別の専門記事で確認。

## No.1575 — ゴーゴージャグラー3
- path: `docs/real_machine_db/machines/2023-07-03_go-go-juggler3.md`
- manufacturer: **北電子**
- formalModel: **Sゴーゴージャグラー3KA**
- inspectionCode: **2S0743**（大阪府公安委員会公示を掲載するG-net、東京都公安委員会検定情報を掲載する遊技通信で一致）
- releaseDate: **2023-07-03**
- generation/system: **6号機 / 6.5号機時代 / メダル / ノーマルAタイプ / 完全後告知**
- payoutRate: **97.2 / 98.2 / 99.4 / 101.6 / 103.8 / 106.5%**（設定1～6）
- BIG: **1/259.0 / 1/258.0 / 1/257.0 / 1/254.0 / 1/247.3 / 1/234.9**
- REG: **1/354.2 / 1/332.7 / 1/306.2 / 1/268.6 / 1/247.3 / 1/234.9**
- 合算: **1/149.6 / 1/145.3 / 1/139.7 / 1/130.5 / 1/123.7 / 1/117.4**
- base: **約40G/50枚（代表値・設定1基準表記）**
- basic: **BIG約240枚 / REG約96枚**
- ceiling: **非搭載**。救済機能・規定ゲーム数モードもなし。
- reset: 設定変更による天井短縮・モード優遇・朝一当選率上昇は `NOT_APPLICABLE / NONE_CONFIRMED`。据え置き/純電断側も引き継ぐべき天井・モード・有利区間は存在しない。
- reset detection: **設定変更後1G目のリールガックン**をパチマガスロマガのゴージャグ3個別記事で確認。店側が事前に1G回す対策等があり得るため「ガックンなし＝据え置き確定」とはしない。朝一BIGでスペシャルBGM変化なら据え置きの可能性が極めて高いという6号機ジャグラー共通知見も同記事にあり、公式値ではないため `ANALYSIS_EXPERT` として保存。
- powerCycle: 純電源OFF→ON時のゲーム性上の朝一恩恵/不利はなし。純電断時のガックン有無だけは機種固有の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- public morning numeric values: **なし / NOT_APPLICABLE**。ガックン発生率の公開固定値も `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_APPLICABLE_FIELDS**

## 2023-07-03群 — OPEN 3/4 canonical processed
1. パチスロナイツ — No.1573 **DONE**
2. パチスロ 蛇喰夢子という女 — No.1574 **DONE**
3. ゴーゴージャグラー3 — No.1575 **DONE**
4. パチスロ からくりサーカス — **NEXT / No.1576候補**

### 群監査
- パチマガスロマガの2023-07-10新台集計が「7月3日導入の4機種」として `パチスロナイツ / パチスロ 蛇喰夢子という女 / ゴーゴージャグラー3 / パチスロ からくりサーカス` を列挙。
- 各機の個別導入資料でも2023-07-03を確認。
- 残りは `パチスロ からくりサーカス` 1機。処理後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## 次回再開地点
- **No.1576候補: パチスロ からくりサーカス**
- 同じ2023-07-03群の4機目として性能コア + resetBehavior v0.7を収集する。
- 処理後、2023-07-03群の漏れ監査を行いCLOSED判定へ進む。

## 継続CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8・6/5系の事前スケジュール表記 vs 実導入側資料の日付差。**2023-08-07境界へdefer**しCONFLICT保持。
- `Lパチスロベルセルク無双`: 6/5複数導入・稼働資料 vs Amusement Japan 6/19予定表記。**6/5 canonical / 6/19 conflict保持**。
- `ウルトラちゃぶ台返し`: 設定3初当り **1/231.2（ベルコ公式・なな徹） vs 1/234.2（G-net）**。平均せず保持。
- `パチスロナイツ`: 設定2ボーナス合算 **1/167.1 vs 1/167.2** の丸め差。複数当時資料一致の1/167.1をcanonical。
- `パチスロ 蛇喰夢子という女`: 設定変更後**650G短縮**は攻略資料明記あり。ただし高信頼朝一解析が調査中、別解析は導入初週実戦からの推測表記を含むため `PROVISIONAL_PUBLIC_VALUE` を維持。有利区間約2500G天井説も噂/推測としてcanonical不採用。
- `ゴーゴージャグラー3`: 主要スペックに実質的CONFLICTなし。世代表現の「6号機 / 6.5号機」は数値競合ではなく、ノーマル6号機を本体分類、6.5号機時代を時代タグとして併記。

## resetBehavior 遡及QA
### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 既存性能値はやり直さず、追加一次 / 当時資料がなければ `PARTIAL_RESEARCH_EXHAUSTED` 正式化を検討。

## 今回の主要資料
### 2023-07-03群
- パチマガスロマガ 7月3日導入4機種集計: https://p.hisshobon.jp/vpage/2499/33

### No.1575 ゴーゴージャグラー3
- 北電子公式: https://www.kitadenshi.co.jp/products/2023/ggj3/
- 遊技日本 / P-WORLD（型式・設定別スペック）: https://news.p-world.co.jp/articles/24080/nippon
- グリーンべると / P-WORLD（7月3日稼働・獲得枚数）: https://news.p-world.co.jp/articles/24637/greenbelt
- G-net 大阪府公安委員会公示（検定番号2S0743）: https://g-net-ps.com/industry/certif-2023-0210/
- 遊技通信 東京都公安委員会検定情報: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%E3%80%802023%E5%B9%B42%E6%9C%88%E3%81%BE%E3%81%A8%E3%82%81%EF%BC%882/
- K-Navi: https://p-kn.com/slot/3972/
- なな徹: https://nana-press.com/kaiseki/machine/565/15595/
- 一撃: https://1geki.jp/slot/s_gogojuggler3/61/
- ちょんぼりすた: https://chonborista.com/slot/kitadenshi/187825/
- パチマガスロマガ 立ち回り＆小ネタ（ガックン・朝一BGM）: https://p.hisshobon.jp/vpage/2490/22
