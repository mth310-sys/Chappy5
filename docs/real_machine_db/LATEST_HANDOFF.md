更新日: 2026-09-10

## 現在地点
- recordCount: **1198**
- latestRecordAdded: **パチスロ 天元突破グレンラガン極**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-06-04_tengen-toppa-gurren-lagann-kiwami.md`
- chronologicalFrontier: **2018-06-04**
- frontierLatestMachine: **パチスロ 天元突破グレンラガン極 — No.1198**
- schema: **resetBehavior v0.7**
- status: **2018-06-04_GROUP_OPEN_3_OF_AT_LEAST_6_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1197を再取得して開始。
- `INDEX.md` は19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF + main実レコードを正本として採用。
- 開始時点は **1197件 / 2018-06-04群OPEN**。直前指定どおり `パチスロ 天元突破グレンラガン極` をNo.1198としてperformance core + resetBehavior v0.7収集。
- PiDEA X、HAZUSE、K-Navi、パチマガスロマガ、P-WORLD、当時解析を横断。導入日は2018-06-04で一致。
- 機械割 97.6 / 98.8 / 101.2 / 106.2 / 110.6 / 114.1%、BIG 1/455→1/366、REG 1/874→1/362、合算1/299→1/182を複数資料照合。
- 50枚ベースは約34.4～39.8G、RT純増は約0.25枚/G、BIG約308枚、REG約71枚、天井非搭載。
- 型式はHAZUSEの `パチスロ天元突破グレンラガン極／SA` / 検定`7S1387`をcanonical。二次資料に`パチスロ天元突破グレンラガンH`表記があるため型式表記差をCONFLICTとして保持。
- resetBehaviorは「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT状態 / ガックン / 有利区間」を機種名・型式・メーカー表記で再探索したが、本機固有の設定変更/据え置き/純電断時RT状態や判別契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。当時解析の朝一リセット恩恵欄も「調査中」のため一般論を転記しない。
- 通常ゲーム数天井は非搭載。短縮天井、朝一専用モード、設定変更専用初当たり優遇・公開朝一数値は確認なし。
- 同日群横断監査で、既存handoff未記載だった **シークレットハイビスカス（パイオニア）** を日刊スポーツ2018-05-25導入カレンダーの6月4日欄から発見。6/4群は少なくとも6機種としてOPEN継続。

## No.1198 — パチスロ 天元突破グレンラガン極
- path: `docs/real_machine_db/machines/2018-06-04_tengen-toppa-gurren-lagann-kiwami.md`
- manufacturer: **スパイキー（製造） / 七匠（開発）**
- releaseDateCanonical: **2018-06-04**
- formalModelName: `パチスロ天元突破グレンラガン極／SA`
- certificationNumber: `7S1387`
- generation/system: **5.9号機 / A+RT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payout: **97.6 / 98.8 / 101.2 / 106.2 / 110.6 / 114.1%**
- BIG: **1/455 / 1/428 / 1/407 / 1/370 / 1/368 / 1/366**
- REG: **1/874 / 1/874 / 1/874 / 1/762 / 1/546 / 1/362**
- bonus combined: **1/299 / 1/287 / 1/278 / 1/249 / 1/220 / 1/182**
- base: **約34.4～39.8G/50枚**
- RT純増: **約0.25枚/G**（約0.3枚/G表記は丸め差）
- basic payout: **BIG約308枚 / REG約71枚**
- RT: **100G / 200G / 次回ボーナスまで**
- ceiling: **非搭載**

### resetBehavior v0.7
- settingChange: `UNVERIFIED_AFTER_RESEARCH`（RT状態/開始ステージ/初期出目の本機固有直接資料なし）。
- carryOver: `UNVERIFIED_AFTER_RESEARCH`（純電断と独立した据え置き契約を固定できず）。
- powerOFF→ON: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- gameCounter/ceiling: `NOT_APPLICABLE_NO_CEILING`。
- advantageousSection: 本機固有の有利区間/ランプ挙動を固定できず `UNVERIFIED_AFTER_RESEARCH`。A+RT分類のみから推測しない。
- resetBenefit: 短縮天井 `NOT_APPLICABLE`、朝一専用モード/初当たり優遇/RT優遇の公開数値 `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ガックン/初期出目/ランプ等の本機固有判別契約 `UNVERIFIED_AFTER_RESEARCH`。

## 2018-06-04群監査
### 処理済み
- No.1196 パチスロディスクアップ
- No.1197 パチスロ黄門ちゃまV
- No.1198 パチスロ 天元突破グレンラガン極

### 未処理候補
- **パチスロ 貞子vs伽椰子** — 藤商事
- **ちゃぶ台返し** — ベルコ
- **シークレットハイビスカス** — パイオニア（今回の横断監査で追加発見）

### 群判定
- `2018-06-04_GROUP_OPEN_3_OF_AT_LEAST_6_PROCESSED`
- 日刊スポーツ当時導入カレンダーで、6/4欄に `ちゃぶ台返し / シークレットハイビスカス / 黄門ちゃまV / 貞子vs伽椰子 / 天元突破グレンラガン極` を確認。ディスクアップは既存レコードで6/4 canonical（5/21資料CONFLICT保持済み）。
- 未処理3機種を処理し、さらに全メーカー/別スペックを横断監査してからのみCLOSEする。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-07_hanasakari.md**（花盛）。
- nextRetroQaCursor: `docs/real_machine_db/machines/2006-07_dengeki-franken.md`（電撃フランケン）。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回は前進レコードと同日群漏れ監査を優先し、QAカーソル自体は変更していない。

## 継続注意事項
- `INDEX.md`は旧スナップショット。LATEST_HANDOFF + main実レコードを優先する。
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- ディスクアップの導入日は2018-06-04 canonical、2018-05-21資料はCONFLICT保持済み。
- resetBehaviorで疑問符・「調査中」・一般論を確定契約へ昇格しない。
- 据え置きと純電断を同義扱いしない。直接資料がある場合のみ各契約へ記録する。
- 導入日・出玉率・型式等の競合は平均/統合せず`CONFLICT`として保持する。
- 6/4群は `貞子vs伽椰子` / `ちゃぶ台返し` / `シークレットハイビスカス` と追加漏れ監査を完了するまで閉じない。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1198を再取得。
2. **1198件 / chronologicalFrontier 2018-06-04 / 6/4群OPEN**を正本として継続。
3. **パチスロ 貞子vs伽椰子をNo.1199先頭候補**としてperformance core + resetBehavior v0.7を収集。
4. 続いて `ちゃぶ台返し` / `シークレットハイビスカス` を処理。
5. 同日群の全メーカー/別スペック監査後にのみ6/4群をCLOSEする。
6. 遡及QAは `2006-07_dengeki-franken.md`（電撃フランケン）から継続。

## 主要出典 — 取得日 2026-09-10
### No.1198 パチスロ 天元突破グレンラガン極
- PiDEA X: https://www.pidea.jp/articles/HYPER%20RT%E3%81%A7%E3%83%AB%E3%83%BC%E3%83%97%E6%9C%9F%E5%BE%85%E5%A4%A7%E3%80%8C%E3%82%B0%E3%83%AC%E3%83%B3%E3%83%A9%E3%82%AC%E3%83%B3%E6%A5%B5%E3%80%8D%EF%BC%8F%E3%82%B9%E3%83%91%E3%82%A4%E3%82%AD%E3%83%BC
- HAZUSE: https://hazuse.com/machine/pachislot/7S1387/
- K-Navi: https://p-kn.com/slot/3011/
- パチマガスロマガ 50枚ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/10/c.php
- パチマガスロマガ ゲーム性: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/10/l.php
- P-WORLD: https://www.p-world.co.jp/machine/database/8657
- ちょんぼりすた: https://chonborista.com/slot/spiky/56865/
- 日刊スポーツ 導入カレンダー: https://www.nikkansports.com/amusement/pachislot/news/201805250000665.html
- スロパチネット（型式表記差）: https://slopachi-net.com/post-1443

## 今回コミット
- No.1198追加: `83ae4bbc7aa860ad1ac928452a4f9ae4c6048ec2`
