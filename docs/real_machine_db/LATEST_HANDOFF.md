更新日: 2026-09-13

## 現在地点
- recordCount: **1578**
- latestRecordAdded: **パチスロ 戦国†恋姫 — No.1578**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-07-18_sengoku-koihime.md`
- chronologicalFrontier: **2023-07-18**
- frontierLatestMachine: **パチスロ 戦国†恋姫 — No.1578**
- schema: **resetBehavior v0.7**
- status: **2023-07-18_GROUP_CLOSED_2_OF_2_KNOWN_PROCESSED / NEXT_NO1579_BIOHAZARD_VENDETTA_2023-07-24**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1577 `S 織田信奈の野望 全国版` を確認して開始。
- INDEXは旧表示（19件）のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- 2023-07-18群の2機目として No.1578 `パチスロ 戦国†恋姫` を性能コア + resetBehavior v0.7で追加。
- ALL7 2023年7月導入一覧と複数導入資料を再監査し、7/18群のパチスロは `S 織田信奈の野望 全国版` と `パチスロ 戦国†恋姫` の2機を確認。PB・別型式・30Φ派生・地域先行・延期/段階導入の追加候補を今回固定できず、**2023-07-18群 CLOSED** とする。
- 欠損は機種名表記揺れ、正式型式 `S戦国恋姫FC`、藤商事と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / BIG比率 / ハーレムモード / ガックン / 有利区間` を組み替え、公式・業界・検定・当時解析・後年整理資料を横断。
- 独立した設定変更時内部状態振り分けと本機固有ガックンは十分な再探索後も固定できず、推測補完していない。

## No.1578 — パチスロ 戦国†恋姫
- path: `docs/real_machine_db/machines/2023-07-18_sengoku-koihime.md`
- manufacturer: **藤商事**
- formalModel: **S戦国恋姫FC**
- inspectionCode: **3S0259**
- releaseDate: **2023-07-18**
- generation/system: **6.5号機 / メダルAT / 技術介入型疑似ボーナス**
- market payoutRate: **98.5 / 99.2 / 100.5 / 103.1 / 104.9 / 106.8%**（設定1〜6）
- full攻略 payoutRate: **100.6 / 101.4 / 102.8 / 105.5 / 107.4 / 109.4%**
- BIG: **1/268.4 / 1/263.7 / 1/254.4 / 1/237.6 / 1/227.4 / 1/216.5**
- REG: **1/404.4 / 1/398.7 / 1/392.2 / 1/370.6 / 1/357.2 / 1/349.2**
- 合算: **1/161.3 / 1/158.7 / 1/154.3 / 1/144.8 / 1/138.9 / 1/133.6**
- base: **約33.3〜33.7G/50枚**
- netIncrease: **約5.0枚/G**
- basicPayout: BIG平均約350枚 / REG約100枚 / SUPER姫くり時BIG平均約450枚。
- ceiling: 通常最大 **900G+α**。到達時BIG + BIG後50%でハーレムモード。
- reset: **設定変更 = 有利区間 / 天井 / 内部モードRESET**、**据え置き・純電断 = CARRY_OVER**。
- setting-change mode distribution: **リセット94.9% / ショート2 4.3% / ロング1 0.4% / ロング2 0.4%**。
- reset mode first-bonus BIG ratio: **60%**。
- ceilingAfterReset: **固定ゲーム数短縮なし確認 / 通常900G+α**。
- resetDetection: 設定変更・純電断とも城下町ステージ開始の解析表があり見た目判別困難。本機固有ガックンは `UNVERIFIED_AFTER_RESEARCH`。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**

## 2023-07-18群 — CLOSED 2/2 known processed
1. S 織田信奈の野望 全国版 — No.1577 **DONE**
2. パチスロ 戦国†恋姫 — No.1578 **DONE**

### 群境界
- ALL7 2023年7月一覧では7/18パチスロとして上記2機を確認。
- `パチスロ 戦国†恋姫` は遊技日本、パチ7、パチビー等で **2023-07-18** 導入が一致。HAZUSEのみ2023-07-17表記があるため minority conflict としてレコード内保持。
- 次のknownパチスロ境界は **2023-07-24 `スマスロ バイオハザード:ヴェンデッタ`**。

## 次回再開地点
- **No.1579候補: スマスロ バイオハザード:ヴェンデッタ**
- canonical導入候補日: **2023-07-24**
- まず正式型式・メーカー/製造元・性能コア・resetBehavior v0.7を固定する。
- 処理後、2023-07-24群のPB・別型式・地域先行・延期/段階導入を再監査する。

## 継続CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8・6/5系の事前スケジュール表記 vs 実導入側資料の日付差。**2023-08-07境界へdefer**しCONFLICT保持。
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
### No.1578 パチスロ 戦国†恋姫
- 藤商事公式: https://www.fujimarukun.co.jp/products/machine/s_koihime/sp/
- 遊技日本/P-WORLD（型式・導入）: https://news.p-world.co.jp/articles/24227/nippon
- 遊技通信/P-WORLD（純増・獲得性能）: https://news.p-world.co.jp/articles/24284/yugitsushin
- 遊技日本/P-WORLD（検定）: https://news.p-world.co.jp/articles/23987/nippon
- 遊技日本/P-WORLD（設定別ボーナス）: https://news.p-world.co.jp/articles/24395/nippon
- パチ7（機械割・ベース）: https://pachiseven.jp/machines/6766/cutout/2
- 一撃（スペック）: https://1geki.jp/slot/s_sengokukoihime/
- HAZUSE（天井・設定変更/電源OFF→ON）: https://hazuse.com/machine/pachislot/3S0259/
- パチマガスロマガ（設定変更時モード）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/35/tj04-1.php
- パチマガスロマガ（有利区間リセット時モード）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/35/bn05.php
- パチ＆スロ必勝本（朝イチモード）: https://p.hisshobon.jp/machine/4121/1/96401
- ALL7（2023年7月導入一覧）: https://www.all7.jp/plans/index/2023/07
