更新日: 2026-09-13

## 現在地点
- recordCount: **1615**
- latestRecordAdded: **パチスロ ファイヤードリフト — No.1615**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-12-18_s-firem-drift.md`
- chronologicalFrontier: **2023-12-18**
- frontierLatestMachine: **パチスロ ファイヤードリフト — No.1615**
- schema: **resetBehavior v0.7**
- status: **2023-12-18_GROUP_CLOSED_3_OF_3_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1613 `スマスロバジリスク～甲賀忍法帖～絆2 天膳 BLACK EDITION` を確認して開始。
- INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 2023-12-18群の残り2機を性能コア + resetBehavior v0.7で処理。
- No.1614 `ドラゴンハナハナ～閃光～-30` を追加。
- No.1615 `パチスロ ファイヤードリフト` を追加。
- ALL7月間一覧、業界発表、複数機種DBを再監査し、2023-12-18 canonical群は3機でCLOSED。

## No.1614 — ドラゴンハナハナ～閃光～-30
- path: `docs/real_machine_db/machines/2023-12-18_dragon-hanahana-senko-30.md`
- manufacturer: **パイオニア**
- formalModel: **Sドラゴンハナハナ～閃光～SP-30**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2023-12-18**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97 / 99 / 101 / 104 / 107 / 110%**
- BIG: **1/256 / 1/246 / 1/235 / 1/224 / 1/212 / 1/199**
- REG: **1/642 / 1/585 / 1/537 / 1/489 / 1/442 / 1/399**
- base: **約39.9G/50枚**
- payout: **BIG最大252枚 / REG最大96枚**
- ceiling: **非搭載**
- setting change: **初回BIG後フェザー色変化率アップ。機種特化実戦資料では変更後1G目ガックンあり（個体差/対策可）**
- power OFF→ON: **内部累計Gカウントを維持する機種固有実戦報告あり**
- morning numeric: **設定変更確認台の初回BIG後フェザー色変化72.73%（112/154、単一実戦資料）**
- reset detection: **初回フェザー、ガックン、累計G依存REG後フェザーを推測材料として保持。確定判別扱いにしない**
- record commit: **b6cbe766c825fda18e850b95c8b53712f30f7cf7**

## No.1615 — パチスロ ファイヤードリフト
- path: `docs/real_machine_db/machines/2023-12-18_s-firem-drift.md`
- manufacturer: **ロデオ（製造） / サミー**
- formalModel: **S ファイヤードリフト FX**
- inspectionCode: **330219（単一機種DB。公的原典照合待ち）**
- releaseDate: **2023-12-18**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.8 / 98.6 / 101.5 / 105.4 / 108.6 / 111.1%**
- BONUS初当り: **1/249.7 / 1/245.6 / 1/228.4 / 1/207.3 / 1/193.4 / 1/183.1**
- base: **約33.1G/50枚**
- 純増: **約6.0枚/G（一部約4.7枚/G）**
- basic payout: **HBB約400枚 / BIG約245枚 / REG約87枚**
- normal ceiling: **900G+α**
- setting change: **有利区間RESET / 天井600G+αへ短縮 / 内部Gランダム加算 / MISSION高確G数再抽選 / MISSIONスルー回数RESET**
- power OFF→ON: **天井G・内部G・MISSION高確・MISSIONスルー回数・有利区間CARRY_OVER**
- display: **設定変更/純電断とも昼ステージ開始で見た目判別不可**
- public morning numeric: **天井900→600G+α、規定MISSION高確100/250/450/600G、高確中MISSION約1/12。リセット内部G加算率/高確G数振分は公開固定値なし**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNPUBLISHED_RESET_DISTRIBUTIONS**
- record commit: **89deab7b69ccd0960d85aaae35d5a05bc562ca7b**

## 2023-12-18群 — CLOSED 3/3 canonical
1. スマスロバジリスク～甲賀忍法帖～絆2 天膳 BLACK EDITION — No.1613 DONE
2. ドラゴンハナハナ～閃光～-30 — No.1614 DONE
3. パチスロ ファイヤードリフト — No.1615 DONE

境界監査:
- ALL7 2023年12月一覧と個別業界/解析DBで3機を確認。
- 25Φ `ドラゴンハナハナ～閃光～` は2024-03-18導入の別市場機であり12/18群へ混同しない。
- PB・別型式・地域先行・延期/段階導入を再監査し、現時点で12/18追加canonical新規機は確認できずCLOSED。

## 次回再開地点
1. 最新mainを再同期し、No.1614 / No.1615と本handoffの反映を再取得確認。
2. 次の時系列境界は **2024-01-09**。
3. 2024-01-09群は現時点で少なくとも **吉宗RISING / スマスロ バイオハザード ヴィレッジ / Lパチスロ マクロスフロンティア4 / L 仮面ライダー 7RIDERS / パチスロ武装神姫** の5機。ALL7・グリーンべると・一撃/K-Navi等で群件数とPB/地域差を冒頭再監査してから順序固定する。
4. No.1616候補は **吉宗RISING**。ただし群内のcanonical順は導入日同日なので、既存命名/前リレー規則に合わせ、冒頭監査後に確定する。
5. 性能コア + resetBehavior v0.7を同時収集する。
6. 遡及QAカーソルは変更なし。次候補 `2007-07-09_genju-haou-t.md`（幻獣覇王T候補）は、時系列本線と並行する場合のみ最新mainで順序確認後に処理。

## 今回の主要ソース
取得日: 2026-09-13
- 12月導入群監査: https://www.all7.jp/plans/index/2023/12
- ドラゴンハナハナ 遊技日本: https://news.p-world.co.jp/articles/25514/nippon
- ドラゴンハナハナ パチビー: https://www.pachibee.jp/machines/index/223110004
- ドラゴンハナハナ なな徹: https://nana-press.com/kaiseki/machine/656/17146/
- ドラゴンハナハナ ちょんぼりすた: https://chonborista.com/slot/pionia-slot/198883/
- ドラゴンハナハナ 機種特化長期実戦: https://ameblo.jp/datyo1062/entry-12840478937.html
- ファイヤードリフト 遊技日本: https://news.p-world.co.jp/articles/25434/nippon
- ファイヤードリフト グリーンべると: https://news.p-world.co.jp/articles/25440/greenbelt
- ファイヤードリフト パチビー: https://www.pachibee.jp/machines/index/223110003
- ファイヤードリフト なな徹朝一: https://nana-press.com/kaiseki/machine/648/18393/
- ファイヤードリフト なな徹MISSION高確: https://nana-press.com/kaiseki/machine/648/18395/
- ファイヤードリフト 一撃: https://1geki.jp/slot/s_firedrift/3/
- ファイヤードリフト 電断比較: https://www.nankaikoya.jp/firedrift-kitaichi/
- 2024年1月群監査: https://www.all7.jp/plans/index/2024/01
- 2024/01/09業界スケジュール: https://news.p-world.co.jp/articles/26523/greenbelt

## リレー継続ルール
- 毎回、最新mainの README → ミッションv0.7 → INDEX → LATEST_HANDOFF → 直前実レコードの順で確認。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。
- 競合は平均化せずCONFLICT。
- 実機完全再現用の細かな内部抽選は収集しない。
