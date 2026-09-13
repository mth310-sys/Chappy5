更新日: 2026-09-13

## 現在地点
- recordCount: **1622**
- latestRecordAdded: **Lパチスロ ガールズ&パンツァー 最終章 — No.1622**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-02-05_girls-und-panzer-finale.md`
- chronologicalFrontier: **2024-02-05**
- frontierLatestMachine: **Lパチスロ ガールズ&パンツァー 最終章 — No.1622**
- schema: **resetBehavior v0.7**
- status: **2024-02-05_GROUP_OPEN_2_OF_8_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1621 `スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ` を確認して開始。
- INDEXは19件表示の旧版なのでREADME規定どおりLATEST_HANDOFF + main実レコードを進捗正本として採用。
- 前handoff指定どおりNo.1622 `Lパチスロ ガールズ&パンツァー 最終章` を性能コア + resetBehavior v0.7で追加。
- 2024-02-05群はknown 8機中2機処理済み。残り6機を同日群として継続する。

## No.1622 — Lパチスロ ガールズ&パンツァー 最終章
- path: `docs/real_machine_db/machines/2024-02-05_girls-und-panzer-finale.md`
- manufacturer: **平和**
- formalModel: **Lガールズ＆パンツァー最終章H1**
- inspectionCode: **3S1400**
- releaseDate: **2024-02-05**
- generation: **6.5号機 / スマスロ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **98.1 / 98.8 / 100.7 / 105.8 / 107.9 / 112.1%**
- CZ: **1/133.9 / 1/133.0 / 1/130.8 / 1/123.1 / 1/121.1 / 1/118.9**
- AT: **1/408.6 / 1/401.1 / 1/382.6 / 1/341.7 / 1/322.4 / 1/303.0** canonical
- AT設定2のみ必勝本基本スペック単独ページが **1/404.1** のためCONFLICT保持
- base: **約30.3G/50枚**
- 純増: **攻防パート現状維持程度 / 疑似ボーナス約4.7枚/G**
- AT: **攻防パート+疑似ボーナス平均約76%ループ**
- 上位AT: **約88%ループ**
- normal ceiling: **AT間最大1111G+α**

## No.1622 resetBehavior v0.7
- setting change: **有利区間・AT間天井・内部状態RESET。ボコポイント/CZスルー天井再抽選、初回CZ優遇**
- carry over: **有利区間・天井・内部状態・ボコポイントCARRY_OVER**
- power OFF→ON: **有利区間・天井・内部モード/状態CARRY_OVERを機種固有比較資料で確認。ボコポイント/CZスルー天井の純電断単独項目別契約はUNVERIFIED_AFTER_RESEARCH**
- ceilingAfterReset: **設定1は500G+α 65.2% / 1111G+α 34.8%。設定2〜6具体値はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- stateAfterReset: **RESET。初回ベル7回時の連続演出発展率70.3%へ優遇**
- advantageousSection: **設定変更RESET / 据え置き・純電断CARRY_OVER**
- resetBenefits: **設定1朝一500G以内AT約90%、ボコポイント75pt以上約40%、初回CZガルパンレース29.7%→50.0%（設定1→6）**
- resetDetection: **液晶開始ステージは設定変更/据え置きとも冬の通学路。500G付近ATはリセット期待度上昇材料。火山ベルカウンター開始資料あり。ただし確定判別ではない。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH**
- publicMorningNumbers: **500G短縮65.2%（設定1） / 500G以内AT約90%（設定1） / 初回ベル7回70.3% / ボコ75pt以上約40% / 初回ガルパンレース29.7〜50.0%**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_ANALYSIS_SINGLE_POWER_CYCLE_AND_UNVERIFIED_GACKUN**

## No.1622 CONFLICT / 注記
- AT設定2: 平和発表を扱う遊技日本/P-WORLD、なな徹、一撃、必勝本システム解説は `1/401.1`。必勝本基本スペック単独ページのみ `1/404.1`。多数一致かつ業界発表の `1/401.1` をcanonical、`1/404.1` をCONFLICT保持。
- ベルカウンター火山背景は設定変更後開始とする解析があり、AT終了後も火山開始資料がある。排他的ではないためCONFLICTではなく、単独のリセット確定判別には使用しない。

## 2024-02-05群 — OPEN 2/8 known canonical
1. スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ — No.1621 DONE
2. Lパチスロ ガールズ&パンツァー 最終章 — No.1622 DONE
3. スマスロ 冴えない彼女の育てかた — NEXT
4. Sky Love — PENDING
5. スマスロ ゴジラ対エヴァンゲリオン — PENDING
6. Lストライクウィッチーズ2 — PENDING
7. GⅠ優駿倶楽部黄金 — PENDING
8. ワードオブライツⅡ — PENDING

境界監査:
- 2024年2月市場資料の「2月導入新機種8機」とknown 8機の件数は整合済み。
- 群CLOSED前に各機処理後、PB・別型式・地域先行/段階導入・延期候補を再監査する。

## 次回再開地点
1. 最新mainを再同期し、No.1622と本handoffの反映を再取得確認。
2. **No.1623候補 `スマスロ 冴えない彼女の育てかた`（2024-02-05）** から性能コア + resetBehavior v0.7で処理開始。
3. その後、`Sky Love` → `スマスロ ゴジラ対エヴァンゲリオン` → `Lストライクウィッチーズ2` → `GⅠ優駿倶楽部黄金` → `ワードオブライツⅡ` の順で同日群を継続。
4. 8機処理後に2024-02-05群のPB・別型式・地域先行/段階導入・延期候補を再監査し、CLOSED判定する。
5. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。推測で固定しない。
6. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-13
### Lパチスロ ガールズ&パンツァー 最終章
- 遊技日本/P-WORLD 平和発表・型式・初当たり・AT基本性能: https://news.p-world.co.jp/articles/26215/nippon
- 遊技日本/P-WORLD 製品情報公開: https://news.p-world.co.jp/articles/26117/nippon
- HAZUSE 型式/検定番号: https://hazuse.com/machine/pachislot/3S1400/
- 一撃 基本スペック: https://1geki.jp/slot/l_girlpan_finale/
- 一撃 天井/設定変更: https://1geki.jp/slot/l_girlpan_finale/3/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/678/19214/
- なな徹 天井/朝一期待値: https://nana-press.com/kaiseki/machine/678/19212/
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2587/2
- パチ&スロ必勝本 通常時/初当たり: https://p.hisshobon.jp/vpage/2587/4
- パチ&スロ必勝本 初回CZ振り分け: https://hisshobon.com/machineinfo/82527/
- スロぱちクエスト 設定変更/電源OFF ON比較: https://www.slopachi-quest.com/article/girls-und-panzer-saishusho-tenjou/

## リレー継続ルール
- 毎回、最新mainの README → ミッションv0.7 → INDEX → LATEST_HANDOFF → 直前実レコードの順で確認。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。
- 競合は平均化せずCONFLICT。
- 実機完全再現用の細かな内部抽選は収集しない。