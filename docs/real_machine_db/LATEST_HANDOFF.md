更新日: 2026-09-13

## 現在地点
- recordCount: **1605**
- latestRecordAdded: **Lラブ嬢3～Wご指名はいかがですか？～ — No.1605**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-12-04_l-lovejou3-w-goshimei.md`
- chronologicalFrontier: **2023-12-04**
- frontierLatestMachine: **Lラブ嬢3～Wご指名はいかがですか？～ — No.1605**
- schema: **resetBehavior v0.7**
- status: **2023-12-04_GROUP_OPEN_1_OF_7_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新main `de0a9038c0f2338951fb520e5d0b535efe78cb8b` を起点にREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1604 `推しスロ アイドルVer.` を確認して開始。
- INDEXは旧表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 時系列本線は2023-12-04群へ進み、先頭canonical候補 `Lラブ嬢3～Wご指名はいかがですか？～` をNo.1605として性能コア + resetBehavior v0.7で追加。
- グリーンべると、一撃、解析DBで2023-12-04導入を照合。
- 2023-12-04群は少なくとも7機のcanonical強候補が複数資料で一致するため、現時点でOPEN 1/7とした。
- `パチスロ琉神－30 スイカバージョン` は12/4表記DBと「12月一部地域テスト」「12/6一部地域テスト」の業界資料差があるため通常全国導入群へ混入せず `CONFLICT_REGIONAL_TEST_RELEASE_BOUNDARY` を継続。

## No.1605 — Lラブ嬢3～Wご指名はいかがですか？～
- path: `docs/real_machine_db/machines/2023-12-04_l-lovejou3-w-goshimei.md`
- manufacturer: **アムテックス（平和）**
- formalModel: **Lラブ嬢3M4**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2023-12-04**
- generation/system: **6.5号機 / スマスロAT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.5 / 98.3 / 100.5 / 104.4 / 108.4 / 112.1%**
- AT初当り: **1/285.2 / 1/278.0 / 1/263.4 / 1/242.7 / 1/224.9 / 1/210.4**
- base: **約32.4G/50枚**
- 純増: **約2.7枚/G**
- normal ceiling: **最大750G+α**
- reset: **有利区間・天井・内部状態・モードRESET、キャバポイント0pt**
- carry: **有利区間・天井・内部状態・モード・キャバポイントCARRY_OVER**
- pure power: **UNVERIFIED_AFTER_RESEARCH**
- reset ceiling: **通常C以上確定のため最大500G+α。天国A/Bなら100G+α**
- reset mode values: 設定1 `通常C75.0 / 天国A23.8 / 天国B1.2%` → 設定6 `55.5 / 39.1 / 5.5%`
- reset state values: 設定1 `通常78.5 / 高確19.5 / 超高確A1.6 / B0.4%` → 設定6 `57.0 / 39.1 / 3.5 / 0.4%`
- public morning: 天国A+Bは設定1 **25.0%** ～ 設定6 **44.6%**、高確以上は設定1 **21.5%** ～ 設定6 **43.0%**
- reset detection: 設定変更/据え置きとも開始ステージ・液晶出目は同じ。キャバポイントも据え置き時は見た目0pt。本機固有ガックンは `UNVERIFIED_AFTER_RESEARCH`。
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_POWER_CYCLE_UNVERIFIED**
- record commit: **9625e034b2e3138cd814b3f86cf78fa40b8c44d8**

## 2023-12-04群 — OPEN 1/7 canonical
1. Lラブ嬢3～Wご指名はいかがですか？～ — No.1605 **DONE**
2. L リングにかけろ1 V — **NEXT**
3. ニューシオサイ — PENDING
4. L花の慶次～佐渡攻めの章 — PENDING
5. LモンキーターンV — PENDING
6. Lマジカルハロウィン8 — PENDING
7. Sクランキークレスト — PENDING

監査注記:
- グリーンべると12/3更新一覧だけでは12/4パチスロを4機掲載する一方、他の当時カレンダー/ホール実導入/PDF市場資料はモンキーターンV・マジカルハロウィン8・クランキークレストも12/4とするため、単一一覧で群件数を固定しない。
- `パチスロ琉神－30 スイカバージョン` は地域テスト導入境界として別監査継続。

## resetBehavior 遡及QA進捗
- 今回は時系列本線No.1605の追加を優先し、遡及QAカーソルは変更なし。
- 直前完了: `2007-07-08_marvel-heroes.md` マーベルヒーローズ — **PARTIAL_RESEARCH_EXHAUSTED**（既存COMPLETE_CORE維持）。
- 次カーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T候補。最新mainで存在/順序を再確認してから処理）。

## 次回再開地点
1. 最新mainを再同期し、No.1605と本handoffの反映を再取得確認。
2. 時系列本線は **No.1606候補 `L リングにかけろ1 V`** から継続。
3. 性能コア + resetBehavior v0.7を同時収集する。
4. その後 `ニューシオサイ → L花の慶次～佐渡攻めの章 → LモンキーターンV → Lマジカルハロウィン8 → Sクランキークレスト` の順で処理し、12/4群のPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
5. `パチスロ琉神－30 スイカバージョン` は12/4通常全国導入扱いに即断せず、12月一部地域テスト/12/6テスト表記の差をメーカー・業界・ホール実導入資料で確定する。
6. 遡及QAを併行する場合は `2007-07-09_genju-haou-t.md` 候補から継続。

## 今回参照した主要ソース
取得日: 2026-09-13
- 遊技日本 / P-WORLDニュース: https://news.p-world.co.jp/articles/25625/nippon
- グリーンべると / P-WORLDニュース: https://news.p-world.co.jp/articles/25715/greenbelt
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9928
- なな徹 AT確率/機械割/ベース: https://nana-press.com/kaiseki/machine/651/17435/
- なな徹 朝一・設定変更挙動: https://nana-press.com/kaiseki/machine/651/18114/
- なな徹 天井: https://nana-press.com/kaiseki/machine/651/18112/
- なな徹 W LOVE RUSH: https://nana-press.com/kaiseki/machine/651/18123/
- 一撃 メーカーリリース: https://1geki.jp/repo/20231003amtex/
- 一撃 天井/設定変更モード: https://1geki.jp/slot/l_lovejou3/3/
- 一撃 小役/ベース: https://1geki.jp/slot/l_lovejou3/4/
- ちょんぼりすた: https://chonborista.com/slot/amute/198299/

## リレー継続ルール
- 最新mainを再取得し、README → 最新ミッション → INDEX → LATEST_HANDOFF → 直前実レコードを確認する。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 既存COMPLETE_COREは性能完了を示し、reset QA状態は別管理する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変更し、公式・業界・解析・旧DB・アーカイブを横断した後だけUNVERIFIED/RESEARCH_EXHAUSTEDとする。
- 競合値は平均化せずCONFLICTとして保持する。
- 実機完全再現用の細かな内部抽選は収集しない。
