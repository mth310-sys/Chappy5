更新日: 2026-09-14

## 現在地点
- recordCount: **1628**
- latestRecordAdded: **ワードオブライツⅡ — No.1628**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-02-05_word-of-lights-2.md`
- chronologicalFrontier: **2024-02-05**
- frontierLatestMachine: **ワードオブライツⅡ — No.1628**
- schema: **resetBehavior v0.7**
- status: **2024-02-05_GROUP_CLOSED_8_OF_8_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1626 `Lストライクウィッチーズ2` を確認して開始。
- INDEXは19件表示の旧版なのでREADME規定どおりLATEST_HANDOFF + main実レコードを進捗正本として採用。
- No.1627 `GⅠ優駿倶楽部黄金`、No.1628 `ワードオブライツⅡ` を性能コア + resetBehavior v0.7で追加。
- グリーンべると2024-02-05新台スケジュール、K-Navi 2024年2月カレンダー、マルっとWAVEの3系統で2/5パチスロ8機が一致。2/19はパチンコのみ。既知8機以外のPB・別型式・地域先行/段階導入・延期候補を再監査し、2024-02-05群をCLOSEDとした。

## No.1627 — GⅠ優駿倶楽部黄金
- path: `docs/real_machine_db/machines/2024-02-05_g1-yushun-club-gold.md`
- manufacturer: **コナミアミューズメント**
- formalModel: **LGⅠ優駿倶楽部黄金KD**
- inspectionCode: **3S1190**
- releaseDate: **2024-02-05**
- generation: **6.5号機 / スマスロ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- 機械割: **97.8 / 98.9 / 100.5 / 104.5 / 108.1 / 112.0%**
- GⅠボーナス: **1/312.1 / 1/312.0 / 1/311.9 / 1/311.8 / 1/311.7 / 1/311.6**
- GⅠロード: **1/599.6 / 1/599.1 / 1/596.8 / 1/595.2 / 1/590.3 / 1/586.9**
- base: **約35G/50枚**
- 純増: **GⅠボーナス約5.2枚/G / GⅠロード約2.7枚/G / 凱旋RUSH約5.2枚/G**

### No.1627 resetBehavior v0.7
- setting change: **有利区間・ゲーム数天井RESET。ボーナススルー回数/育成馬を再抽選、育成レベル/UMAメダル/液晶アイコン/グランプリポイントRESET**
- carry over: **有利区間・ゲーム数天井CARRY_OVER。全サブ状態の据え置き単独直接契約は一部UNVERIFIED**
- power OFF→ON: **天井・スルー回数・育成馬・育成レベル・UMAメダル・液晶アイコン・グランプリポイントCARRY_OVER。カフェステージ開始**
- ceilingAfterReset: **333G 0.39% / 555G 96.48% / 777G 2.34% / 999G 0.39% / 1111G 0.39%（555G以内96.87%）**
- resetBenefits: **設定変更後GⅠボーナス→GⅠロード当選率約50% / 朝一GⅠボーナスは平均200～300Gほどで期待との解析表現**
- resetDetection: **有利区間ランプ判別不可。主要解析は判別調査中。本機固有ガックンは一次/主要解析で固定できずPROVISIONAL/UNVERIFIED**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_CONFLICT_AND_PARTIAL_UNVERIFIED**

### No.1627 CONFLICT
- 後年一部攻略の「設定変更後87.5%で555G以下」と、P-WORLD/なな徹/必勝本の精密振り分け `333G 0.39% + 555G 96.48% = 96.87%` が競合。canonicalは精密値96.87%。
- K-Naviの設定1 GⅠボーナス `1/321.1` は、業界/P-WORLD/なな徹/必勝本の `1/312.1` と競合。canonical 1/312.1。
- K-Naviの設定2/3機械割ラベル逆転表示は他系統と不一致。canonicalは設定2 98.9%、設定3 100.5%。

## No.1628 — ワードオブライツⅡ
- path: `docs/real_machine_db/machines/2024-02-05_word-of-lights-2.md`
- manufacturer: **エレコ（ユニバーサルエンターテインメント）**
- formalModel: **S/ワードオブライツⅡ/WF**
- inspectionCode: **330291**
- releaseDate: **2024-02-05**
- generation: **6.5号機 / メダル機 / リアルボーナス+AT(CT) / 技術介入**
- settings: **1 / 2 / 5 / 6**
- 市場想定機械割: **98.2 / 99.9 / 102.9 / 106.1%**
- 完全攻略: **101.0 / 102.5 / 105.5 / 108.5%**
- BIG: **1/224.4 / 1/208.7 / 1/193.9 / 1/179.1**
- CT初当たり: **約1/374 / 1/361 / 1/335 / 1/322**
- base: **約37.4G/50枚**
- CT純増: **約0.5枚/G**
- BIG最大153枚 / CT初期100G+α / 通常BIG後CT突入率トータル50%以上

### No.1628 resetBehavior v0.7
- setting change: **有利区間・1200G+α天井RESET**
- carry over: **据え置きは有利区間・天井CARRY_OVER**
- power OFF→ON: **有利区間・天井CARRY_OVER**
- ceilingAfterReset: **通常同様1200G+α。短縮天井確認なし**
- ceilingBenefit: **CT300G**
- mode/state: **朝一専用モード/通常高確テーブルの公開契約を再探索後も固定できずPUBLIC_VALUE_NOT_FOUND / UNVERIFIED**
- resetBenefits: **主要な専用恩恵は確認できず、後年攻略整理では「リセット恩恵なし」**
- resetDetection: **有利区間ランプ判別不可、なな徹は挙動/判別調査中。前日+当日通常G累計1200G付近でCT300Gなら据え置き濃厚材料。ガックンはUNVERIFIED_AFTER_RESEARCH**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_SUBSTATE_AND_GACKUN**

### No.1628 CONFLICT
- 完全攻略時設定1は業界発表・HAZUSE詳細・主要解析が101.0%で一致する一方、HAZUSE概要に101.1%表記あり。canonical 101.0%、`CONFLICT_HAZUSE_SUMMARY_101_1_VS_DETAILED_101_0` を保持。

## 2024-02-05群 — CLOSED 8/8 canonical
1. スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ — No.1621 DONE
2. Lパチスロ ガールズ&パンツァー 最終章 — No.1622 DONE
3. スマスロ 冴えない彼女の育てかた — No.1623 DONE
4. Sky Love — No.1624 DONE
5. L ゴジラ対エヴァンゲリオン — No.1625 DONE
6. Lストライクウィッチーズ2 — No.1626 DONE
7. GⅠ優駿倶楽部黄金 — No.1627 DONE
8. ワードオブライツⅡ — No.1628 DONE

境界監査:
- グリーンべると/P-WORLD 2024-02-05更新は2/5パチスロ8機を列挙し、2/19導入はパチンコのみ。
- K-Navi 2024年2月カレンダーも2/5パチスロ8機、2/19パチスロなし。
- マルっとWAVEも2/5同8機、2/19はパチンコのみ。
- 以上から本線の次のパチスロ全国導入群は2024-03-04とする。

## 次回再開地点
1. 最新mainを再同期し、No.1627・No.1628と本handoffの反映を再取得確認。
2. **2024-03-04群の境界監査から開始し、先頭未処理をNo.1629として採番する。**
3. 現時点の候補は `スマスロキングパルサー / L南国育ち / キングクリエーター-30 / チバリヨ2 / パチスロ ガメラ2` の5機。グリーンべるとは3機のみ掲載だが、HAZUSE・K-Navi・ALL7等ではチバリヨ2/ガメラ2を含むため、採番前に実導入日・地域先行/段階導入・延期の有無を再照合する。
4. 参考としてHAZUSEは2024-03-09 `パチスロ ブラックミクちゃん` を別日掲載。3/4群処理後の次境界候補として保持し、3/4群へ混入させない。
5. 遡及QAは前handoff記載どおり `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。推測で固定しない。
6. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
### GⅠ優駿倶楽部黄金
- KONAMI公式: https://www.konami.com/amusement/psm/slot/g1-dclub-gold/
- 遊技日本/P-WORLD: https://news.p-world.co.jp/articles/26239/nippon
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/26287/yugitsushin
- P-WORLD: https://www.p-world.co.jp/machine/database/9964
- HAZUSE: https://hazuse.com/machine/pachislot/3S1190/
- なな徹 TOP/朝一/天井/有利区間: https://nana-press.com/kaiseki/machine/686/ / https://nana-press.com/kaiseki/machine/686/19402/ / https://nana-press.com/kaiseki/machine/686/19355/ / https://nana-press.com/kaiseki/machine/686/19357/
- 必勝本: https://p.hisshobon.jp/machine/4233/1/99534 / https://hisshobon.com/machineinfo/82679/ / https://hisshobon.com/machineinfo/82710/

### ワードオブライツⅡ
- ユニバーサル公式: https://www.universal-777.com/product/slot/ward_of_lights2/
- 遊技日本/P-WORLD 検定/発売: https://news.p-world.co.jp/articles/25543/nippon / https://news.p-world.co.jp/articles/26236/nippon
- P-WORLD: https://www.p-world.co.jp/machine/database/9967
- HAZUSE: https://hazuse.com/hd/sx0064/ / https://hazuse.com/machine/pachislot/SX0064/
- なな徹 朝一/スペック: https://nana-press.com/kaiseki/machine/694/19529/ / https://nana-press.com/kaiseki/machine/694/18839/
- 一撃: https://1geki.jp/slot/s_ward_of_lights2/3/
- イチカツ: https://ichikatsu.com/wardoflights2/
- 補助: https://www.nankaikoya.jp/wardoflights2-kitaichi/

### 2024-02-05群境界 / 次群候補
- グリーンべると/P-WORLD 2024-02-05新台スケジュール: https://news.p-world.co.jp/articles/26803/greenbelt
- K-Navi 2024年2月: https://p-kn.com/calendar/202402/
- マルっとWAVE 2/5～: https://marutto-w.com/industry_news/20240207
- HAZUSE 2024年3月: https://hazuse.com/new-machine/202403-2/
- K-Navi 2024年3月: https://p-kn.com/calendar/202403/
- ALL7 2024年3月: https://www.all7.jp/plans/index/2024/03

## リレー継続ルール
- 毎回、最新mainの README → ミッションv0.7 → INDEX → LATEST_HANDOFF → 直前実レコードの順で確認。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。
- 競合は平均化せずCONFLICT。
- 実機完全再現用の細かな内部抽選は収集しない。
