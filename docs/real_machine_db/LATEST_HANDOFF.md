更新日: 2026-09-13

## 現在地点
- recordCount: **1576**
- latestRecordAdded: **パチスロ からくりサーカス — No.1576**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-07-03_karakuri-circus.md`
- chronologicalFrontier: **2023-07-03**
- frontierLatestMachine: **パチスロ からくりサーカス — No.1576**
- schema: **resetBehavior v0.7**
- status: **2023-07-03_GROUP_CLOSED_4_OF_4_CANONICAL_PROCESSED / NEXT_NO1577_ODA_NOBUNA_ZENKOKUBAN_2023-07-18**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1575 `ゴーゴージャグラー3` を確認して開始。
- INDEXは旧表示（19件）のためREADME規定どおり、LATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 2023-07-03群の4機目として No.1576 `パチスロ からくりサーカス` を性能コア + resetBehavior v0.7で追加。
- 欠損項目は `パチスロ からくりサーカス / スマスロからくりサーカス / からサー / LからくりサーカスG / SANKYO` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 通常C / 特殊モード / ガックン / 有利区間 / 前兆引き継ぎ` を組み替え、SANKYO公式・業界記事・検定記事・なな徹・一撃・パチマガスロマガ・必勝本等を横断して再探索。
- 設定変更専用の通常C具体振り分け率と本機固有ガックンは十分な再探索後も直接値を固定できず、推測補完していない。
- 2023-07-03群はパチマガスロマガの「7月3日導入4機種」集計と複数導入一覧で4機が一致し、PB・別型式・地域先行・延期/段階導入の追加独立機を今回の横断監査で固定できなかったため **CLOSED 4/4** とした。

## No.1576 — パチスロ からくりサーカス
- path: `docs/real_machine_db/machines/2023-07-03_karakuri-circus.md`
- manufacturer: **SANKYO（三共）**
- formalModel: **LからくりサーカスG**
- inspectionCode: **2S1798**
- releaseDate: **2023-07-03**
- generation/system: **6.5号機 / スマスロ / 差枚数管理AT / 上位AT搭載**
- payoutRate: **97.5 / 98.7 / 103.0 / 108.1 / 114.9%**（設定1/2/4/5/6）
- CZ: **1/333 / 1/320 / 1/292 / 1/277 / 1/275**
- AT: **1/564 / 1/543 / 1/469 / 1/451 / 1/447**
- base: **約32.9G/50枚（約33G表記は丸め差）**
- netIncrease: **基本AT 約2.8枚/G / 上位AT 約7.6枚/G**
- basic: **基本AT初期150枚**。上位AT突入時の極限無双は平均上乗せ約850枚（公式/解析で確認）。
- ceiling: 液晶ゲーム数は通常A/C 1200G、通常B 800G、天国100G。CZ4連続失敗後の5回目はAT直撃。AT間2500G+αでAT+成功確定激情ジャッジ。
- reset: **設定変更 = 有利区間 / 天井 / 内部状態 / モードRESET**、**据え置き・純電断 = CARRY_OVER**。液晶表示/メニューは据え置きでもリセットされ得るため見た目0Gだけでは判別不可。
- reset benefit: **通常C選択率優遇**。設定変更後の有利区間移行1G目で特殊モード抽選があり、強チェリー/チャンス目は特殊モード濃厚。特殊モード当選時は通常B以上 + **天国期待度約50%**。
- reset detection: 開始ステージは設定変更/据え置きとも勝or鳴海を**1:1**で選択。前日からくりエピソード終了→朝一同前兆スタートなら据え置き濃厚。機種固有ガックンは `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSection: 設定変更でリセット。遊技中はエンディング終了後 / 運命の一劇突入時の一部でもリセット。設定変更以外の有利区間リセットでは運命の一劇突入恩恵があるが、設定変更時は対象外。
- public morning numeric values: 勝/鳴海開始 **1:1**、特殊モード当選時の天国期待度 **約50%**。設定変更時の通常C具体優遇率は公開固定値を確認できず。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**

## 2023-07-03群 — CLOSED 4/4 canonical processed
1. パチスロナイツ — No.1573 **DONE**
2. パチスロ 蛇喰夢子という女 — No.1574 **DONE**
3. ゴーゴージャグラー3 — No.1575 **DONE**
4. パチスロ からくりサーカス — No.1576 **DONE**

### 群監査
- パチマガスロマガの2023-07-10新台集計が「7月3日導入の4機種」として `パチスロナイツ / パチスロ 蛇喰夢子という女 / ゴーゴージャグラー3 / パチスロ からくりサーカス` を列挙。
- 一撃2023年7月新台カレンダー、2023年導入機種一覧でも同日のパチスロ4機を確認。
- PB・別型式・地域先行・延期/段階導入を含め追加独立機を固定できなかったため **CLOSED**。

## 次回再開地点
- **No.1577候補: S 織田信奈の野望 全国版**
- canonical導入候補日: **2023-07-18**
- 同日known候補: **S 織田信奈の野望 全国版 / パチスロ 戦国†恋姫** の2機。
- まず各機の正式型式・実導入日を個別資料で固定し、No.1577から性能コア + resetBehavior v0.7を収集する。
- 2023-07-18群処理後、PB・別型式・地域先行・延期/段階導入を横断監査してCLOSED可否を判定する。
- 次のknown境界は **2023-07-24 スマスロ バイオハザード:ヴェンデッタ**。

## 継続CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8・6/5系の事前スケジュール表記 vs 実導入側資料の日付差。**2023-08-07境界へdefer**しCONFLICT保持。
- `Lパチスロベルセルク無双`: 6/5複数導入・稼働資料 vs Amusement Japan 6/19予定表記。**6/5 canonical / 6/19 conflict保持**。
- `ウルトラちゃぶ台返し`: 設定3初当り **1/231.2（ベルコ公式・なな徹） vs 1/234.2（G-net）**。平均せず保持。
- `パチスロナイツ`: 設定2ボーナス合算 **1/167.1 vs 1/167.2** の丸め差。複数当時資料一致の1/167.1をcanonical。
- `パチスロ 蛇喰夢子という女`: 設定変更後**650G短縮**は攻略資料明記あり。ただし高信頼朝一解析が調査中、別解析は導入初週実戦からの推測表記を含むため `PROVISIONAL_PUBLIC_VALUE` を維持。有利区間約2500G天井説も噂/推測としてcanonical不採用。
- `ゴーゴージャグラー3`: 主要スペックに実質的CONFLICTなし。世代表現の「6号機 / 6.5号機」は数値競合ではなく、ノーマル6号機を本体分類、6.5号機時代を時代タグとして併記。
- `パチスロ からくりサーカス`: ベース32.9G/50枚 vs 約33G/50枚は丸め差。設定変更時の通常C優遇は複数解析で確認できるが、具体的な設定変更専用振り分け率は公開固定値未確認。

## resetBehavior 遡及QA
### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 既存性能値はやり直さず、追加一次 / 当時資料がなければ `PARTIAL_RESEARCH_EXHAUSTED` 正式化を検討。

## 今回の主要資料
### 2023-07-03群
- パチマガスロマガ 7月3日導入4機種集計: https://p.hisshobon.jp/vpage/2499/33
- 2023年導入機種一覧（7/3の4機、次群7/18の2機）: https://www.slopachi-quest.com/article/2023-dounyuukisyu/
- 一撃 2023年7月新台カレンダー: https://1geki.jp/newmachinecalender/202307/

### No.1576 パチスロ からくりサーカス
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/946/
- 遊技日本 / P-WORLD（型式・スペック）: https://news.p-world.co.jp/articles/23971
- 遊技日本 / P-WORLD（検定通過）: https://news.p-world.co.jp/articles/23987/nippon
- Ativo（検定番号2S1798）: https://ativo.jp/2023/05/16/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%81%8B%E3%82%89%E3%81%8F%E3%82%8A%E3%82%B5%E3%83%BC%E3%82%AB%E3%82%B9/
- 一撃 機種TOP: https://1geki.jp/slot/l_karakuri/
- 一撃 天井/朝一: https://1geki.jp/slot/l_karakuri/3/
- なな徹 CZ/AT確率・機械割: https://nana-press.com/kaiseki/machine/571/14946/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/571/15693/
- なな徹 天井: https://nana-press.com/kaiseki/machine/571/21225/
- なな徹 狙い目/リセット: https://nana-press.com/kaiseki/machine/571/22673/
- パチマガスロマガ 朝イチ・設定変更: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sankyo_slot/59/kr01.php
- パチ＆スロ必勝本 規定ゲーム数&モード: https://p.hisshobon.jp/machine/4098/1/96515
