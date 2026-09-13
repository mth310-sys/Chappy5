更新日: 2026-09-13

## 現在地点
- recordCount: **1613**
- latestRecordAdded: **スマスロバジリスク～甲賀忍法帖～絆2 天膳 BLACK EDITION — No.1613**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-12-18_l-basilisk-kizuna2-tenzen-black-edition.md`
- chronologicalFrontier: **2023-12-18**
- frontierLatestMachine: **スマスロバジリスク～甲賀忍法帖～絆2 天膳 BLACK EDITION — No.1613**
- schema: **resetBehavior v0.7**
- status: **2023-12-18_GROUP_OPEN_1_OF_3_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1612 `パチスロ琉神－30 スイカバージョン` を確認して開始。
- INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 直前handoffでは2023-12-04 canonical 7機がCLOSED、No.1612は2023-12-06一部地域テスト導入として独立処理済み。
- 2023-12-18群をALL7・業界検定記事・当時/主要解析DBで境界監査し、現時点のcanonical候補を3機に固定。
- No.1613として `スマスロバジリスク～甲賀忍法帖～絆2 天膳 BLACK EDITION` を性能コア + resetBehavior v0.7で追加。
- 設定変更/電源OFF→ON比較は必勝本の機種別表で天井G・BC回数、モード、状態、宿怨ポイントまで直接確認。
- 設定変更時はBCスルー天井が優遇。専用の16テーブル選択率/各スルー回数振り分けは十分な再探索後も固定公開値なしとして `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 通常有利区間RESET時の宿怨チャレンジ恩恵は、なな徹が設定変更時を除くと明記するため、朝一リセット恩恵へ流用しない。

## No.1612 — パチスロ琉神－30 スイカバージョン
- path: `docs/real_machine_db/machines/2023-12-06_s-ryujin30-suika-version.md`
- manufacturer: **オレンジ（製造） / 藤商事**
- formalModel: **S琉神RZ-30 スイカバージョン**
- inspectionCode: **330354**
- releaseDate: **2023-12-06 一部地域テスト導入**
- release conflict: **複数DBは2023-12-04表記。CONFLICT_REGIONAL_TEST_RELEASE_BOUNDARY**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- 機械割: **97.4 / 99.1 / 101.1 / 104.1 / 106.4%**（設定1/2/4/5/6）
- 合算: **1/231.0 / 1/224.3 / 1/217.2 / 1/206.9 / 1/199.5**
- base: **約32.2G/50枚**
- 純増: **約3.0枚/G**
- normal ceiling: **999G+α**
- setting change: **天井G RESET / モード再抽選 / 専用朝イチモード**
- morning benefit: **朝イチモードは通常より天国移行率優遇、天国突入まで同モードをループ**
- power OFF→ON: **天井G・モードCARRY_OVER**
- record commit: **ad4bb16d0e460ebea8cce414c7e986075933cc2c**

## No.1613 — スマスロバジリスク～甲賀忍法帖～絆2 天膳 BLACK EDITION
- path: `docs/real_machine_db/machines/2023-12-18_l-basilisk-kizuna2-tenzen-black-edition.md`
- manufacturer: **ミズホ / ユニバーサルエンターテインメント**
- formalModel: **L／バジリスク絆2～天膳～／ZN**
- alternateApprovedModel: **L／バジリスク絆2～天膳～／HZ（エレコ製）**
- inspectionCode: **330412（ZN）**
- releaseDate: **2023-12-18**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.4 / 98.5 / 102.0 / 106.2 / 110.5 / 114.9%**
- BC: **1/124.7 / 1/123.2 / 1/119.2 / 1/113.6 / 1/108.5 / 1/105.0**
- BT初当り: **1/418.1 / 1/405.0 / 1/362.4 / 1/311.2 / 1/278.5 / 1/247.3**
- base: **約32G/50枚**
- 純増: **約2.9枚/G**
- BT: **1セット平均約40G**
- normal ceiling: **BC間333G+α / 最大7スルー後8回目BCでBT**
- setting change: **天井G・BC回数RESET / モード・状態・宿怨ポイント再抽選 / 有利区間RESET**
- reset benefit: **BCスルー天井の規定回数優遇**
- power OFF→ON: **天井G・BC回数 / モード / 状態 / 宿怨ポイントCARRY_OVER**
- public morning numeric distribution: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- reset detection/gackun: **UNVERIFIED_AFTER_RESEARCH**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_NUMERIC_RESET_DISTRIBUTION_UNPUBLISHED**
- record commit: **7b5dcd2b612bce8230099da9c45642827f81482a**

## 2023-12-04群 — CLOSED 7/7 canonical
1. Lラブ嬢3～Wご指名はいかがですか？～ — No.1605 DONE
2. L リングにかけろ1 V — No.1606 DONE
3. ニューシオサイ — No.1607 DONE
4. L花の慶次～佐渡攻めの章 — No.1608 DONE
5. LモンキーターンV — No.1609 DONE
6. Lマジカルハロウィン8 — No.1610 DONE
7. Sクランキークレスト — No.1611 DONE

境界監査:
- 琉神-30は通常全国導入7機とは分離し、2023-12-06地域テスト導入レコードNo.1612として処理。12/4表記はCONFLICT保持。

## 2023-12-18群 — OPEN 1/3 canonical
1. スマスロバジリスク～甲賀忍法帖～絆2 天膳 BLACK EDITION — No.1613 DONE
2. ドラゴンハナハナ～閃光～-30 — NEXT
3. パチスロファイヤードリフト — PENDING

境界監査:
- ALL7の2023年12月一覧で12/18のパチスロは上記3機。
- 天膳BLACKは必勝本・HAZUSE・P-WORLD等でも12/18導入一致。
- 残る2機を処理後、PB・別型式・地域先行・延期/段階導入をメーカー/業界/実導入DBで再監査してCLOSED判定する。

## 次回再開地点
1. 最新mainを再同期し、No.1613と本handoffの反映を再取得確認。
2. 2023-12-18群の未処理先頭 **`ドラゴンハナハナ～閃光～-30`** を **No.1614候補**として処理する。
3. 次点は **`パチスロファイヤードリフト`**。
4. 性能コア + resetBehavior v0.7を同時収集する。
5. 2機完了後、2023-12-18群のPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。
6. 遡及QAカーソルは変更なし。次候補 `2007-07-09_genju-haou-t.md`（幻獣覇王T候補）は、時系列本線と並行する場合のみ最新mainで順序確認後に処理。

## 今回の主要ソース
取得日: 2026-09-13
- 12月導入群監査: https://www.all7.jp/plans/index/2023/12
- 遊技日本 ZN検定通過: https://news.p-world.co.jp/articles/25838/nippon
- グリーンべると HZ検定通過: https://news.p-world.co.jp/articles/25745/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/SX0060/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/82194/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/82192/
- 一撃 天井/朝一: https://1geki.jp/slot/l_b_kizuna2_tnzn/3/
- なな徹 朝一/設定変更/有利区間: https://nana-press.com/kaiseki/machine/666/18320/
- なな徹 天井: https://nana-press.com/kaiseki/machine/666/18317/
- P-WORLD: https://www.p-world.co.jp/machine/database/9944
- パチビー: https://www.pachibee.jp/machines/kouryaku/223110002
- ちょんぼりすた モードテーブル: https://chonborista.com/slot/universal-slot/kizunatenzen/203964/

## リレー継続ルール
- 毎回、最新mainの README → ミッションv0.7 → INDEX → LATEST_HANDOFF → 直前実レコードの順で確認。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。
- 競合は平均化せずCONFLICT。
- 実機完全再現用の細かな内部抽選は収集しない。
