更新日: 2026-09-13

## 現在地点
- recordCount: **1608**
- latestRecordAdded: **L花の慶次～佐渡攻めの章 — No.1608**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-12-04_l-hana-no-keiji-sado.md`
- chronologicalFrontier: **2023-12-04**
- frontierLatestMachine: **L花の慶次～佐渡攻めの章 — No.1608**
- schema: **resetBehavior v0.7**
- status: **2023-12-04_GROUP_OPEN_4_OF_7_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1606 `L リングにかけろ1 V` を確認して開始。
- INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 前handoff指定どおり2023-12-04群の3機目 `ニューシオサイ` をNo.1607、4機目 `L花の慶次～佐渡攻めの章` をNo.1608として性能コア + resetBehavior v0.7で追加。
- ニューシオサイはパイオニア公式、遊技日本、グリーンべると、遊技通信、必勝本、一撃、なな徹、P-WORLD等で型式・検定番号・導入日・性能を照合。
- ニューシオサイは天井非搭載A+RT。設定変更/電断時RT内部状態、BGM変化、リールガックンは機種固有資料で固定できず、必勝本の当時比較表も「現在調査中」のため一般論で補完せず `UNVERIFIED_AFTER_RESEARCH` とした。
- 花の慶次は遊技日本、グリーンべると、K-Navi、P-WORLD、なな徹、必勝本、パチマガスロマガ等で性能とresetBehaviorを照合。
- 花の慶次は設定変更で有利区間/天井/ATスルー/モードRESET、チャンスor天国へ移行、最大500G+αへ短縮。内部状態は通常62.5% / 高確31.3% / 超高確6.3%で再抽選。純電断は内部G/天井・ATスルー・モード・状態・有利区間を引継ぎ。
- 2023-12-04群はOPEN 4/7。次は `LモンキーターンV`。
- `パチスロ琉神－30 スイカバージョン` の地域テスト導入境界CONFLICTは継続。

## No.1607 — ニューシオサイ
- path: `docs/real_machine_db/machines/2023-12-04_new-shiosai.md`
- manufacturer: **ピーセカンド（製造元） / パイオニア**
- formalModel: **SニューシオサイSA**
- inspectionCode: **3S0331**
- releaseDate: **2023-12-04**
- generation/system: **6.5号機 / 25φメダル / A+RT**
- 機械割: **98.5 / 99.6 / 101.5 / 103.6 / 106.5 / 110.0%**
- BIG: **1/280.1 / 1/274.2 / 1/264.3 / 1/253.0 / 1/237.4 / 1/222.9**
- REG: **1/546.1 / 1/537.2 / 1/500.3 / 1/474.9 / 1/442.8 / 1/409.6**
- base: **約36.2G/50枚**
- RT: **BIG後40G / 約0.3枚/G**
- payout: **BIG最大239枚 / REG最大95枚**
- ceiling/reset ceiling/morning mode: **NOT_APPLICABLE**
- RT-state on setting change / carry / pure power: **UNVERIFIED_AFTER_RESEARCH**
- gackun/BGM change: **当時資料で現在調査中、再探索後も未固定**
- resetQaStatus: **PARTIAL_RESEARCH_EXHAUSTED_FOR_RT_STATE_AND_GACKUN**
- record commit: **19b5e07475e4ad5d83b9aabc2c66b82a19f59bc0**

## No.1608 — L花の慶次～佐渡攻めの章
- path: `docs/real_machine_db/machines/2023-12-04_l-hana-no-keiji-sado.md`
- manufacturer: **EXCITE（ニューギングループ）**
- formalModel: **Lパチスロ花の慶次～佐渡攻めの章～ER**
- inspectionCode: **330269**（番号単独は二次資料、正式型式は公安委員会/業界記事で固定）
- releaseDate: **2023-12-04**
- generation/system: **6.5号機 / スマスロAT / 疑似ボーナス+ゲーム数上乗せAT**
- 機械割: **97.4 / 98.8 / 101.2 / 104.9 / 109.9 / 114.0%**
- 初当り: **1/260.7 / 1/253.7 / 1/247.0 / 1/231.5 / 1/222.1 / 1/211.5**
- AT: **1/474.7 / 1/460.1 / 1/438.0 / 1/398.7 / 1/364.0 / 1/335.8**
- base: **約33.5G/50枚**
- 純増: **約2.6枚/G**
- normal ceiling: **通常A/B 1000G+α、チャンス500G+α、天国100G+α、AT4スルー後の次回初当りでAT**
- reset: **有利区間・内部G/天井・ATスルー・モードRESET、状態再抽選**
- pure power: **内部G/天井・ATスルー・モード・状態・有利区間CARRY_OVER**
- reset mode: **チャンスor天国濃厚**
- reset ceiling: **最大500G+α、天国なら100G+α**
- reset state: **通常62.5% / 高確31.3% / 超高確6.3%**
- reset detection: **設定変更/純電断とも佐渡街道開始。朝一500G+α超の非当選は据え置き推測材料。ガックンはUNVERIFIED_AFTER_RESEARCH**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_GACKUN_UNVERIFIED**
- record commit: **8f71d10da7df0b11085a17b2998b285339a4f45e**

## 2023-12-04群 — OPEN 4/7 canonical
1. Lラブ嬢3～Wご指名はいかがですか？～ — No.1605 **DONE**
2. L リングにかけろ1 V — No.1606 **DONE**
3. ニューシオサイ — No.1607 **DONE**
4. L花の慶次～佐渡攻めの章 — No.1608 **DONE**
5. LモンキーターンV — **NEXT**
6. Lマジカルハロウィン8 — PENDING
7. Sクランキークレスト — PENDING

監査注記:
- 前handoffの同日7機canonical監査を継続。
- グリーンべると12/3更新一覧単独では4機掲載だが、他の当時カレンダー/実導入資料でモンキーターンV・マジカルハロウィン8・クランキークレストも12/4を確認しているため単一一覧で群件数を固定しない。
- `パチスロ琉神－30 スイカバージョン` は12/4表記DBと「12月一部地域テスト」「12/6一部地域テスト」の業界資料差があり、通常全国導入群へ混入せず `CONFLICT_REGIONAL_TEST_RELEASE_BOUNDARY` を継続。

## resetBehavior 遡及QA進捗
- 今回は時系列本線No.1607〜1608追加を優先し、遡及QAカーソルは変更なし。
- 直前完了: `2007-07-08_marvel-heroes.md` マーベルヒーローズ — **PARTIAL_RESEARCH_EXHAUSTED**（既存COMPLETE_CORE維持）。
- 次カーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T候補。最新mainで存在/順序を再確認してから処理）。

## 次回再開地点
1. 最新mainを再同期し、No.1608と本handoffの反映を再取得確認。
2. 時系列本線は **No.1609候補 `LモンキーターンV`** から継続。
3. 性能コア + resetBehavior v0.7を同時収集する。
4. その後 `Lマジカルハロウィン8 → Sクランキークレスト` の順で処理し、12/4群のPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
5. `パチスロ琉神－30 スイカバージョン` は12/4通常全国導入扱いに即断せず、12月一部地域テスト/12/6テスト表記の差をメーカー・業界・ホール実導入資料で確定する。
6. 遡及QAを併行する場合は `2007-07-09_genju-haou-t.md` 候補から継続。

## 今回参照した主要ソース
取得日: 2026-09-13

### ニューシオサイ
- パイオニア公式: https://www.slot-pioneer.co.jp/products/siosai.html
- 遊技日本: https://news.p-world.co.jp/articles/26070/nippon
- グリーンべると: https://web-greenbelt.jp/post-78388/
- 遊技通信 検定: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%889%E6%9C%8825%E6%97%A5%EF%BC%89/
- 一撃: https://1geki.jp/slot/s_newsiosai_sa/
- 必勝本 基本: https://hisshobon.com/machineinfo/82715/
- 必勝本 設定変更: https://hisshobon.com/machineinfo/82713/
- なな徹: https://nana-press.com/kaiseki/machine/680/18133/
- P-WORLD: https://www.p-world.co.jp/machine/database/9950

### L花の慶次～佐渡攻めの章
- 遊技日本 販売発表: https://news.p-world.co.jp/articles/25626/nippon
- 遊技日本 検定: https://news.p-world.co.jp/articles/25186/nippon
- グリーンべると 検定: https://web-greenbelt.jp/post-75734/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10003838/
- K-Navi: https://p-kn.com/slot/4045/
- P-WORLD: https://www.p-world.co.jp/machine/database/9929
- ぽこすろっと: https://www.nankaikoya.jp/keiji-sado-kitaichi/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/653/18225/
- 必勝本 モード: https://hisshobon.com/machineinfo/82217/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/17/tj04.php

## リレー継続ルール
- 最新mainを再取得し、README → 最新ミッション → INDEX → LATEST_HANDOFF → 直前実レコードを確認する。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時に収集する。
- 既存COMPLETE_COREは性能完了を示し、reset QA状態は別管理する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変更し、公式・業界・解析・旧DB・アーカイブを横断した後だけUNVERIFIED/RESEARCH_EXHAUSTEDとする。
- 競合値は平均化せずCONFLICTとして保持する。
- 実機完全再現用の細かな内部抽選は収集しない。
