更新日: 2026-09-13

## 現在地点
- recordCount: **1579**
- latestRecordAdded: **スマスロ バイオハザード:ヴェンデッタ — No.1579**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-07-24_biohazard-vendetta.md`
- chronologicalFrontier: **2023-07-24**
- frontierLatestMachine: **スマスロ バイオハザード:ヴェンデッタ — No.1579**
- schema: **resetBehavior v0.7**
- status: **2023-07-24_GROUP_CLOSED_1_OF_1_KNOWN_PROCESSED / NEXT_GROUP_2023-08-07 / NEXT_NO1580_CANDIDATE_NOGIZAKA46**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1578 `パチスロ 戦国†恋姫` を確認して開始。
- INDEXは旧表示（19件）のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 2023-07-24群として No.1579 `スマスロ バイオハザード:ヴェンデッタ` を性能コア + resetBehavior v0.7で追加。
- ALL7 2023年7月導入一覧を再監査し、2023-07-24のパチスロとして本機1機を確認。PB・別型式・30Φ派生・地域先行・延期/段階導入の追加候補を今回固定できず、**2023-07-24群 CLOSED 1/1** とする。
- 欠損は機種名表記揺れ、正式型式 `L バイオハザードヴェンデッタ FK`、ロデオ/サミーと `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / モード振り分け / 内部状態 / ガックン / 有利区間` を組み替え、業界・当時解析・古いDB・後年整理資料を横断。
- 設定変更後のC/D/天国/超天国の個別振り分け率、本機固有ガックン、純電源OFF→ON時のモード/有利区間の独立明記は十分な再探索後も固定できず、推測補完していない。

## No.1579 — スマスロ バイオハザード:ヴェンデッタ
- path: `docs/real_machine_db/machines/2023-07-24_biohazard-vendetta.md`
- manufacturer: **ロデオ製造 / サミー**
- formalModel: **L バイオハザードヴェンデッタ FK**
- inspectionCode: **3S0143**
- releaseDate: **2023-07-24**
- generation/system: **6.5号機 / スマスロAT / 直AT**
- payoutRate: **97.8 / 98.8 / 101.5 / 106.0 / 108.5 / 112.0%**（設定1〜6）
- AT初当たり: **1/395.7 / 1/386.2 / 1/354.2 / 1/316.6 / 1/312.4 / 1/307.2**
- base: **約33.2G/50枚**
- netIncrease: メインAT **約2.0枚/G** / 疑似ボーナス・上位AT **約4.0枚/G**
- basicPayout: ヴェンデッタモード1セット40G+α、AT期待枚数約510枚。上位PVMはループ率約90%超・期待枚数約3600枚（設定1）。
- normal ceiling: **最大810G+α**。
- reset: **設定変更 = 有利区間 / 天井 / 内部状態 / モードRESET、モードC以上濃厚、最大610G+α**。**据え置き = CARRY_OVER**。
- pure power cycle: **天井 / 内部状態CARRY_OVERを直接確認**。純電断時モード/有利区間の独立明記は `UNVERIFIED_AFTER_RESEARCH`。
- reset benefit: 通常最深810G+α → 設定変更後最大610G+α、**200G短縮**。
- resetDetection: 有利区間ランプでは判別不可。当時解析でも変更判別は調査中。本機固有ガックンは `UNVERIFIED_AFTER_RESEARCH`。
- publicMorningNumbers: **設定変更後最大610G+α / モードC以上濃厚**。個別モード振り分け率は公開固定値未確認。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**

## 2023-07-24群 — CLOSED 1/1 known processed
1. スマスロ バイオハザード:ヴェンデッタ — No.1579 **DONE**

### 群境界
- ALL7 2023年7月一覧では7/24パチスロとして本機1機を確認。
- K-Navi、一撃、HAZUSE、当時業界/導入資料でも2023-07-24導入が一致。
- 次のknownパチスロ境界は **2023-08-07**。

## 次回再開地点
- **No.1580候補: ぱちスロ 乃木坂46**
- canonical導入候補日: **2023-08-07**
- 2023-08-07群は次回冒頭で再監査し、未処理先頭を最終確定してから処理する。
- ALL7の現時点known候補（パチスロ）:
  1. ぱちスロ 乃木坂46 — 京楽系
  2. スマスロ 戦国BASARA GIGA — エンターライズ
  3. スマスロキン肉マン～7人の悪魔超人編～ — セブンリーグ
  4. スーパービンゴネオクラシック — ベルコ
  5. スーパービンゴネオクラシック-30 — ヤーマ
  6. 防空少女ラブキューレ2～極限の共鳴～ — コナミアミューズメント
- PB・別型式・30Φ派生・地域先行・延期/段階導入を含め再監査し、漏れを確定してから順次処理する。

## 継続CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8・6/5系の事前スケジュール表記 vs 実導入側資料の日付差。**2023-08-07境界へdefer**しCONFLICT保持。次回群で正式処理対象。
- `Lパチスロベルセルク無双`: 6/5複数導入・稼働資料 vs Amusement Japan 6/19予定表記。**6/5 canonical / 6/19 conflict保持**。
- `ウルトラちゃぶ台返し`: 設定3初当り **1/231.2（ベルコ公式・なな徹） vs 1/234.2（G-net）**。平均せず保持。
- `パチスロナイツ`: 設定2ボーナス合算 **1/167.1 vs 1/167.2** の丸め差。1/167.1をcanonical。
- `パチスロ 蛇喰夢子という女`: 設定変更後650G短縮は `PROVISIONAL_PUBLIC_VALUE` を維持。有利区間約2500G天井説はcanonical不採用。
- `パチスロ からくりサーカス`: 設定変更時の通常C優遇率は公開固定値未確認。
- `S 織田信奈の野望 全国版`: 一部検定記事の製造元「朝日テクノロジー」は、発売発表・複数業界資料の「新日テクノロジー」と競合するため誤記候補として保持。設定2相当スペックを設定3とする二次資料もあり、設定1/2/4/5/6をcanonical。ベース約33G vs 約33.6Gは丸め/算出差として両方保持。
- `パチスロ 戦国†恋姫`: 導入日は複数資料の2023-07-18をcanonical。HAZUSEの2023-07-17は minority conflict として保持。

## resetBehavior 遡及QA
### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 既存性能値はやり直さず、追加一次 / 当時資料がなければ `PARTIAL_RESEARCH_EXHAUSTED` 正式化を検討。

## 今回の主要資料
### No.1579 スマスロ バイオハザード:ヴェンデッタ
- 遊技日本/P-WORLD（サミー発売発表）: https://news.p-world.co.jp/articles/24014/nippon
- 遊技日本/P-WORLD（ロデオ・型式・性能）: https://news.p-world.co.jp/articles/24077/nippon
- HAZUSE（型式/検定番号/導入/性能）: https://hazuse.com/machine/pachislot/3S0143/
- なな徹（AT/機械割/ベース）: https://nana-press.com/kaiseki/machine/572/15021/
- なな徹（朝一/設定変更）: https://nana-press.com/kaiseki/machine/572/15992/
- パチマガスロマガ（通常時モード）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/205/tj04.php
- パチ＆スロ必勝本（モード移行）: https://p.hisshobon.jp/machine/4097/1/96332
- 一撃（スペック）: https://1geki.jp/slot/l_biohazard_vendetta/
- パチスロメソッド（設定変更/電源OFF・ON）: https://slotmethod.jp/archives/17221/
- ALL7（2023年7月導入一覧）: https://www.all7.jp/plans/index/2023/07
- ALL7（2023年8月導入一覧 / 次群監査）: https://www.all7.jp/plans/index/2023/08
