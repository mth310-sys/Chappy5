更新日: 2026-09-13

## 現在地点
- recordCount: **1618**
- latestRecordAdded: **Lパチスロ マクロスフロンティア4 — No.1618**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-01-09_macross-frontier-4.md`
- chronologicalFrontier: **2024-01-09**
- frontierLatestMachine: **Lパチスロ マクロスフロンティア4 — No.1618**
- schema: **resetBehavior v0.7**
- status: **2024-01-09_GROUP_OPEN_3_OF_5_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1617 `スマスロ バイオハザード™ ヴィレッジ` を確認して開始。
- INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 2024-01-09 canonical群5機の3機目、No.1618 `Lパチスロ マクロスフロンティア4` を性能コア + resetBehavior v0.7で追加。
- SANKYO公式で型式 `Lマクロスフロンティア4bA`、導入月、設定別歌姫BONUS/AT確率を確認。検定番号 `330403` はハズセ掲載値で公的検定原典照合待ち。

## No.1618 — Lパチスロ マクロスフロンティア4
- path: `docs/real_machine_db/machines/2024-01-09_macross-frontier-4.md`
- manufacturer: **SANKYO**
- formalModel: **Lマクロスフロンティア4bA**
- inspectionCode: **330403（ハズセ掲載。公的検定原典の番号照合待ち）**
- releaseDate: **2024-01-09**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.7 / 98.7 / 101.2 / 105.5 / 110.1 / 114.9%**
- 歌姫BONUS: **1/276 / 1/271 / 1/258 / 1/237 / 1/216 / 1/204**
- AT初当たり: **1/507 / 1/495 / 1/461 / 1/407 / 1/359 / 1/331**
- base: **約32G/50枚**
- 純増: **通常AT約1.5枚/G / 疑似ボーナス・上位AT約5.0枚/G**
- basic payout: **AT初当たり時トライアングルチャンスで初期G数決定 / AT中ボーナス20G or 50G / 上位ATは5G ST＋20G以上のもってけボーナス約90%ループ**
- normal ceiling: **液晶1500G+α or 実ゲーム1000G+α / ボーナス最大10スルー後11回目でAT濃厚**
- setting change: **有利区間・天井・BONUSスルー・モード・状態RESET / バルキリータイムA・強チャンス・天国Aのみへ移行 / 最大液晶天井800G**
- carry over: **有利区間・天井進行・BONUSスルー回数・モード・内部状態CARRY_OVER**
- power OFF→ON: **天井・BONUSスルー回数・モード・内部状態・有利区間CARRY_OVER**
- public morning numeric: **モード約25% / 50% / 25%、最大液晶天井800G、設定1条件付き朝一機械割約102%、開始ステージ1:1**
- reset detection: **液晶/メニューは朝一リセット表示で開始ステージも共通。歌姫チャージ・歌前兆・AT中など通常時以外開始なら据え置き濃厚。朝一液晶800G超も据え置き濃厚材料**
- gackun: **UNVERIFIED_AFTER_RESEARCH**
- hidden reset game-count shortening distribution: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- record commit: **366c68f8af9c7db1e60a202aa05307f71f9bbfc6**

## resetBehavior要点
- 設定変更モード振り分け: **バルキリータイムA 約25% / 強チャンス 約50% / 天国A 約25%**。
- 各液晶天井: **800G / 600G / 100G**。
- バルキリータイムAの800G天井到達までの平均実ゲーム数は約530G前後、強チャンス約400G前後、天国A約70G前後。
- 設定変更時には上記モード優遇とは別に表示されない内部G数短縮/加算抽選があり、その詳細振り分けは公開固定値を確認できず推測しない。
- 設定変更以外の有利区間RESET時に付随する「最終決戦」は設定変更時には発生しないため、朝一恩恵へ混入しない。

## 2024-01-09群 — OPEN 3/5 canonical
1. 吉宗RISING — No.1616 DONE
2. スマスロ バイオハザード ヴィレッジ — No.1617 DONE
3. Lパチスロ マクロスフロンティア4 — No.1618 DONE
4. L 仮面ライダー 7RIDERS — NEXT
5. パチスロ武装神姫 — PENDING

境界監査:
- グリーンべると2024-01-09新台スケジュールで吉宗RISING / バイオハザード ヴィレッジ / マクロスフロンティア4 / 仮面ライダー 7RIDERSの4機を確認済み。
- コナミアミューズメント公式が `パチスロ武装神姫` のホール稼働開始を2024-01-09と明記するため5機目としてcanonical群へ追加済み。
- PB・別型式・地域先行・延期/段階導入は群CLOSED時に再監査する。

## 次回再開地点
1. 最新mainを再同期し、No.1618と本handoffの反映を再取得確認。
2. **No.1619候補 `L 仮面ライダー 7RIDERS`** から継続。
3. 続いて `パチスロ武装神姫` を同日群として処理。
4. 5機処理後、PB・別型式・地域先行・延期/段階導入を再監査して2024-01-09群をCLOSED判定する。
5. 新規機種は性能コア + resetBehavior v0.7を同時収集する。
6. 遡及QAカーソルは変更なし。次候補 `2007-07-09_genju-haou-t.md`（幻獣覇王T候補）は、時系列本線と並行する場合のみ最新mainで順序確認後に処理。

## 今回の主要ソース
取得日: 2026-09-13
- SANKYOオンライン博物館 型式/導入月/公式スペック: https://www.sankyo-fever.jp/collection/955/
- パチ＆スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/82319/
- パチ＆スロ必勝本 天井・設定変更・電源OFF→ON: https://p.hisshobon.jp/machine/4202/1/98752
- パチ＆スロ必勝本 朝イチ挙動: https://hisshobon.com/machineinfo/82251/
- なな徹 朝一・設定変更・有利区間: https://nana-press.com/kaiseki/machine/272/18641/
- なな徹 天井・スルー回数: https://nana-press.com/kaiseki/machine/272/18639/
- ちょんぼりすた 総合解析/朝一/モード: https://chonborista.com/slot/sankyo-slot/200279/
- ハズセ 型式/検定番号/導入日/ベース: https://hazuse.com/hd/sx0062/
- ハズセ 設定別初当たり/ベース: https://hazuse.com/machine/pachislot/SX0062/
- P-WORLD 機種DB/AT中ボーナス: https://www.p-world.co.jp/machine/database/9935
- パチスロメソッド 電源OFF→ON/天井/状態: https://slotmethod.jp/archives/18425/

## リレー継続ルール
- 毎回、最新mainの README → ミッションv0.7 → INDEX → LATEST_HANDOFF → 直前実レコードの順で確認。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。
- 競合は平均化せずCONFLICT。
- 実機完全再現用の細かな内部抽選は収集しない。