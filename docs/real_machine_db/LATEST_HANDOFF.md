更新日: 2026-09-13

## 現在地点
- recordCount: **1591**
- latestRecordAdded: **麻雀格闘倶楽部 覚醒 — No.1591**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-09-19_mahjong-fight-club-kakusei.md`
- chronologicalFrontier: **2023-09-19**
- frontierLatestMachine: **麻雀格闘倶楽部 覚醒 — No.1591**
- schema: **resetBehavior v0.7**
- status: **2023-09-19_GROUP_OPEN_1_OF_2_CANONICAL_PROCESSED / NEXT_NO1592_CANDIDATE_L_SENGOKU_COLLECTION5_CHOGOKURAKU_LOOP / THEN_BOUNDARY_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1590 `ファミスタ回胴版!!` を確認して開始。
- INDEXは旧表示（19件）のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを進捗正本として採用。
- No.1591 `麻雀格闘倶楽部 覚醒` を性能コア + resetBehavior v0.7で追加。
- 9/19群は現時点でcanonical 2機（麻雀格闘倶楽部 覚醒 / 戦国コレクション5超極楽LOOP）としてOPEN。次機処理後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## No.1591 — 麻雀格闘倶楽部 覚醒
- path: `docs/real_machine_db/machines/2023-09-19_mahjong-fight-club-kakusei.md`
- manufacturer: **コナミアミューズメント**
- formalModel / inspectionCode: **L麻雀格闘倶楽部覚醒KM / 3S0673**
- releaseDate: **2023-09-19**
- generation/system: **6.5号機 / スマスロAT**
- payoutRate 設定1～6: **97.5 / 98.9 / 101.2 / 104.1 / 107.1 / 110.0%**
- AT: **1/246.8 / 1/236.3 / 1/223.9 / 1/208.9 / 1/172.9 / 1/141.6**
- base: **約35.4G/50枚**
- netIncrease: **約8.0枚/G**
- normal ceiling: 通常 **770G+α** / 引き戻し **390G+α** / 覚醒・裏覚醒 **160G+α** / 裏覚醒準備 **960G+α**。
- reset: 設定変更で **有利区間 / 救済発動G / モード / 内部状態RESET**。浅い天井モードが選択されやすい。
- carry: 据え置きは **有利区間 / 救済発動G / モードCARRY_OVER**。
- pure power: 電源OFF→ONは天井進行・状態CARRY_OVER資料あり。純電断単独の有利区間/モード契約は **UNVERIFIED_AFTER_RESEARCH**。
- public morning number: 設定変更後 **160G+α以内AT当選割合 約80%**。設定変更時5モード完全振り分け率は **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**。
- resetDetection: 有利区間ランプ判別不可。なな徹は変更判別「調査中」。一部二次資料のみガックン判別可能とするため **CONFLICT_UNCORROBORATED_SECONDARY**。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**
- record commit: **d4fde4f643334ee3f577f6b574271f5865a27c17**

## 2023-09-19群 — OPEN 1/2 canonical
1. 麻雀格闘倶楽部 覚醒 — No.1591 **DONE**
2. 戦国コレクション5超極楽LOOP — No.1592候補 **NEXT**

### 群境界監査メモ
- K-Navi 2023年9月カレンダーは9/19パチスロに `麻雀格闘倶楽部 覚醒` / `戦国コレクション5超極楽LOOP` / `推しスロ アイドルVer.` の3機を掲載。
- ただし `推しスロ アイドルVer.` は9/16発表時点で「秋ごろ、状況が整い次第」の設置予定とされ、実際のタツミ直営 `ミクちゃんガイア三宮店` 専用フロア導入は **2023-12-01** と業界記事で確認。よって9/19群には現時点で含めず、2023-12-01候補として後続キューへ保持する。
- 9/19群CLOSED前に他のPB/別型式/地域先行/延期・段階導入を再監査する。

## 次回再開地点
1. **No.1592候補 `戦国コレクション5超極楽LOOP`（2023-09-19）**を最優先で処理。
2. 既知候補: 型式 `L戦国コレクション5GJ`、AT **1/346.8→1/287.1**、出玉率 **97.5→110.0%**、純増約 **10枚/G**、約 **32.3G/50枚**。
3. resetBehavior既知候補: 設定変更で有利区間/天井/内部状態/モードRESET、朝一384コレ以内当選チャンス、モードC+天国約54%候補。正式検定番号、純電断契約、公開朝一数値を複数ソース照合して保存する。
4. No.1592処理後、9/19群の境界監査を行いCLOSED判定。
5. `推しスロ アイドルVer.` は2023-09-19ではなく **2023-12-01実導入候補**として保持し、12月到達時に正式型式・実導入日を再確認する。

## 今回参照した主要ソース
取得日: 2026-09-13
- コナミアミューズメント公式 発売決定: https://www.konami.com/amusement/corporate/ja/topics/20230705mfc/
- コナミアミューズメント公式 稼働開始: https://www.konami.com/amusement/corporate/ja/topics/20230919/
- 遊技日本 麻雀格闘倶楽部 覚醒: https://news.p-world.co.jp/articles/25092/nippon
- P-WORLD 麻雀格闘倶楽部 覚醒: https://www.p-world.co.jp/machine/database/9876
- HAZUSE 麻雀格闘倶楽部 覚醒: https://hazuse.com/machine/pachislot/3S0673/
- なな徹 スペック: https://nana-press.com/kaiseki/machine/604/16779/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/604/16786/
- なな徹 モード: https://nana-press.com/kaiseki/machine/604/16796/
- 一撃 総合: https://1geki.jp/slot/s_mfckakusei/
- 一撃 天井/朝一: https://1geki.jp/slot/s_mfckakusei/3/
- K-Navi 2023年9月カレンダー: https://p-kn.com/calendar/202309/
- 遊技日本 推しスロ発表: https://news.p-world.co.jp/articles/25404/nippon
- グリーンべると 推しスロ実導入: https://news.p-world.co.jp/articles/26268/greenbelt

## リレー継続ルール
- 最新mainを再取得し、README → 最新ミッション → INDEX → LATEST_HANDOFF → 直前実レコードを確認する。
- 過去チャットではなく最新mainを正とする。
- 新規機種は性能コア + resetBehavior v0.7を同時収集する。
- 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変更し、公式・業界・解析・旧DB・アーカイブを横断した後だけUNVERIFIEDとする。
- 競合値は平均化せずCONFLICTとして保持する。
- 実機完全再現用の細かな内部抽選は収集しない。
