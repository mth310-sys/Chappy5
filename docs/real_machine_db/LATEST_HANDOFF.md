更新日: 2026-09-13

## 現在地点
- recordCount: **1616**
- latestRecordAdded: **吉宗RISING — No.1616**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-01-09_yoshimune-rising.md`
- chronologicalFrontier: **2024-01-09**
- frontierLatestMachine: **吉宗RISING — No.1616**
- schema: **resetBehavior v0.7**
- status: **2024-01-09_GROUP_OPEN_1_OF_5_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1615 `パチスロ ファイヤードリフト` を確認して開始。
- INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 2023-12-18群がNo.1613～1615の3/3でCLOSED済みであることを確認。
- 次の時系列境界2024-01-09をALL7、グリーンべると、コナミ公式、個別機種DBで再監査。
- canonical群を5機（吉宗RISING / スマスロ バイオハザード ヴィレッジ / Lパチスロ マクロスフロンティア4 / L 仮面ライダー 7RIDERS / パチスロ武装神姫）として固定。
- No.1616 `吉宗RISING` を性能コア + resetBehavior v0.7で追加。

## No.1616 — 吉宗RISING
- path: `docs/real_machine_db/machines/2024-01-09_yoshimune-rising.md`
- manufacturer: **サボハニ（製造） / 大都技研**
- formalModel: **L吉宗ライジングSA2**
- inspectionCode: **3S0802（単一機種DB。公的検定原典照合待ち）**
- releaseDate: **2024-01-09**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.6 / 98.9 / 101.1 / 105.1 / 107.5 / 111.2%**
- 初当たり: **1/268.6 / 1/261.9 / 1/252.2 / 1/234.3 / 1/227.2 / 1/216.8**
- AT初当たり: **1/537.0 / 1/521.2 / 1/492.7 / 1/437.4 / 1/405.9 / 1/377.9**
- base: **約34G/50枚**
- 純増: **約4.0枚/G**
- basic payout: **将軍ボーナス10G / AT初期100枚以上 / AT後八代将軍チャレンジ15G・AT再突入期待度約80%**
- normal ceilings: **ボーナス間800G+α / AT間1200G / 将軍ボーナス4スルー後5回目でAT**
- setting change: **有利区間RESET / 天井進行RESET / 仲間同行RESET / AT間天井800Gへ短縮 / 城下町開始**
- carry over: **有利区間・天井進行・仲間同行をCARRY_OVER**
- power OFF→ON: **天井・将軍ボーナススルー・仲間同行・有利区間CARRY_OVER / 表示は城下町**
- public morning numeric: **AT間天井1200G→800G短縮**
- reset detection: **設定変更/据え置きとも城下町開始で見た目判別不可。800G天井もAT単発後の据え置きで同条件となり得る。朝一800G超でAT天井非発動なら据え置き濃厚材料**
- gackun: **UNVERIFIED_AFTER_RESEARCH**
- setting-change dedicated mode/game-zone distribution: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- record commit: **8479fe9a2d9f66439eb7050ff8e18c707cd53213**

## 2024-01-09群 — OPEN 1/5 canonical
1. 吉宗RISING — No.1616 DONE
2. スマスロ バイオハザード ヴィレッジ — NEXT
3. Lパチスロ マクロスフロンティア4 — PENDING
4. L 仮面ライダー 7RIDERS — PENDING
5. パチスロ武装神姫 — PENDING

境界監査:
- グリーンべると2024-01-09新台スケジュールで吉宗RISING / バイオハザード ヴィレッジ / マクロスフロンティア4 / 仮面ライダー 7RIDERSの4機を確認。
- コナミアミューズメント公式が `パチスロ武装神姫` のホール稼働開始を2024-01-09と明記するため5機目としてcanonical群へ追加。
- ALL7 2024年1月一覧とも照合。PB・別型式・地域先行・延期/段階導入は群CLOSED時に再監査する。

## 次回再開地点
1. 最新mainを再同期し、No.1616と本handoffの反映を再取得確認。
2. **No.1617候補 `スマスロ バイオハザード ヴィレッジ`** から継続。
3. 続いて `Lパチスロ マクロスフロンティア4` → `L 仮面ライダー 7RIDERS` → `パチスロ武装神姫` を同日群として処理。
4. 5機処理後、PB・別型式・地域先行・延期/段階導入を再監査して2024-01-09群をCLOSED判定する。
5. 新規機種は性能コア + resetBehavior v0.7を同時収集する。
6. 遡及QAカーソルは変更なし。次候補 `2007-07-09_genju-haou-t.md`（幻獣覇王T候補）は、時系列本線と並行する場合のみ最新mainで順序確認後に処理。

## 今回の主要ソース
取得日: 2026-09-13
- 遊技日本 吉宗RISING発売発表/型式/性能: https://news.p-world.co.jp/articles/26279/nippon
- 遊技通信 吉宗RISING新機種発表: https://news.p-world.co.jp/articles/26149
- 長崎県遊技業協同組合 型式情報: https://nagasaki-yukyo.or.jp/information/%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E3%81%A7%E6%96%B0%E3%81%9F%E3%81%AA%E5%90%89%E5%AE%97%E3%81%8C%E7%99%BB%E5%A0%B4%EF%BC%81%E3%80%8C%E5%90%89%E5%AE%97%EF%BD%92%EF%BD%89%EF%BD%93%EF%BD%89%EF%BD%8E/
- グリーンべると 2024-01-09新台スケジュール: https://news.p-world.co.jp/articles/26523/greenbelt
- なな徹 吉宗RISING解析まとめ: https://nana-press.com/kaiseki/machine/665/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/665/18493/
- なな徹 将軍ボーナス: https://nana-press.com/kaiseki/machine/665/18499/
- なな徹 ヤメ時/天井補助: https://nana-press.com/kaiseki/machine/665/18492/
- 一撃 天井/設定変更: https://1geki.jp/slot/l_ysmn_rising/3/
- ぽこすろっと 電源OFF→ON/スルー/仲間同行比較: https://www.nankaikoya.jp/yoshimune-rising-kitaichi/
- P-WORLD 吉宗RISING機種DB: https://www.p-world.co.jp/machine/database/9958
- Ativo 型式/検定番号: https://ativo.jp/2023/11/29/%EF%BD%8C%E5%90%89%E5%AE%97rising/
- ALL7 2024年1月一覧: https://www.all7.jp/plans/index/2024/01
- コナミ公式 武装神姫2024-01-09稼働開始: https://www.konami.com/amusement/corporate/ja/topics/20231225/

## リレー継続ルール
- 毎回、最新mainの README → ミッションv0.7 → INDEX → LATEST_HANDOFF → 直前実レコードの順で確認。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。
- 競合は平均化せずCONFLICT。
- 実機完全再現用の細かな内部抽選は収集しない。
