更新日: 2026-09-13

## 現在地点
- recordCount: **1587**
- latestRecordAdded: **パチスロ傷物語 -始マリノ刻- — No.1587**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-09-04_kizumonogatari-hajimari-no-toki.md`
- chronologicalFrontier: **2023-09-04**
- frontierLatestMachine: **パチスロ傷物語 -始マリノ刻- — No.1587**
- schema: **resetBehavior v0.7**
- status: **2023-09-04_GROUP_OPEN_2_OF_5_KNOWN_PROCESSED / NEXT_NO1588_CANDIDATE_L009_RE_CYBORG / THEN_GRANBELM_FAMISTA / GROUP_BOUNDARY_AUDIT_REQUIRED_BEFORE_CLOSE**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1586 `L戦国乙女4 戦乱に閃く炯眼の軍師` を確認して開始。
- INDEXは旧表示（19件）のままなので、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを進捗正本として採用。
- mainの最新地点が会話上のNo.1578より先行していたため重複処理を回避し、handoff指定の次候補 `パチスロ傷物語 -始マリノ刻-` をNo.1587として性能コア + resetBehavior v0.7で追加。
- 2023-09-04群は既監査済みのcanonical 5機を維持: `L戦国乙女4 戦乱に閃く炯眼の軍師` / `パチスロ傷物語 -始マリノ刻-` / `L009 RE:CYBORG` / `回胴式遊技機 グランベルム` / `ファミスタ回胴版!!`。2機処理済みのため群はOPEN 2/5。
- 欠損は機種名・正式型式・検定番号・メーカーと `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / CZ規定回数 / モード / 降臨ノ儀 / ガックン / 有利区間` を組み替え、メーカー発表転載の業界記事・公安委員会系検定資料・当時解析・旧DB・後年整理資料を横断してから判定。

## No.1587 — パチスロ傷物語 -始マリノ刻-
- path: `docs/real_machine_db/machines/2023-09-04_kizumonogatari-hajimari-no-toki.md`
- manufacturer: **ロデオ製造 / サミー**
- formalModel / inspectionCode: **S 傷物語 FS / 230305**
- releaseDate: **2023-09-04**
- generation/system: **6.5号機 / メダル機AT / 差枚数管理型直AT**
- payoutRate 設定1～6: **97.8 / 98.8 / 101.1 / 105.1 / 108.5 / 111.3%**
- AT初当たり: **1/265.3 / 1/258.1 / 1/241.9 / 1/219.1 / 1/202.5 / 1/190.6**
- base: **約32.7G/50枚**
- netIncrease: **約2.8枚/G**
- AT basic: **初期差枚100枚**。BONUSは20G or 30G。
- normal ceiling: 通常A～C **999G+α** / 天国 **100G+α** / 鬼天国 **50G+α** / リセット **400G+α**。
- reset: 設定変更で有利区間・天井・内部状態・モードRESET。設定変更後は **リセット or 天国** の2択。
- reset mode distribution（リセット/天国）: 設定1 **55.0/45.0%**、2 **52.5/47.5%**、3 **50.0/50.0%**、4 **46.7/53.3%**、5 **43.3/56.7%**、6 **40.0/60.0%**。
- reset ceiling: 天国なら100G+α、非天国でもリセットモード400G+α。通常999G+αから大幅短縮。
- CZ規定回数: リセットモードは **1回5.0% / 2回5.0% / 3回90.0%**で最大3回。天国/鬼天国は1回100%。
- reset benefit: 設定変更後初回ATの「降臨ノ儀」期待度 **約25%**。設定変更時1G目（非有利区間）でレア小役成立なら次回ATの「降臨ノ儀」 **確定**。
- carry: 据え置きは有利区間・天井・内部状態・モード引継ぎ。
- pure power: 天井・内部モード・内部状態は複数二次資料で引継ぎ一致。有利区間も据え置き同等CARRY_OVERとする整理資料あり。ただし純電源OFF→ON単独の全項目を一次資料で個別明記した契約は固定できず信頼度分離。
- resetDetection: 有利区間ランプ判別不可。朝一1G目レア小役→初回ATで降臨ノ儀非突入なら据え置き濃厚材料だが確定判別ではない。機種固有ガックンは **UNVERIFIED_AFTER_RESEARCH**。
- important distinction: AT終了後等の **設定変更以外**の有利区間リセット後に付く「狂・鬼ノ血闘ヲ終わラセルな」恩恵は設定変更時の朝一恩恵と分離。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**

## conflicts / missing retained
- 検定番号は公安委員会系/HAZUSE/ゼンリンで **230305** が一致。HAZUSE URL path `2S0305` はサイト内部識別子として扱い、検定番号には採用しない。
- 純電源OFF→ON単独時の有利区間/表示系をメーカー一次資料で項目別に明記した契約: `UNVERIFIED_PRIMARY_AFTER_RESEARCH`（二次資料では据え置き同等CARRY_OVERで整合）。
- 設定変更後の内部状態詳細振り分け率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率: `UNVERIFIED_AFTER_RESEARCH`。

## 2023-09-04群 — OPEN 2/5 known
1. L戦国乙女4 戦乱に閃く炯眼の軍師 — No.1586 **DONE**
2. パチスロ傷物語 -始マリノ刻- — No.1587 **DONE**
3. L009 RE:CYBORG — **NEXT / No.1588候補**
4. 回胴式遊技機 グランベルム — pending
5. ファミスタ回胴版!! — pending

### 群境界根拠
- 一撃 2023年9月新台カレンダーは2023-09-04をスロット5機種として掲載。
- K-Navi 2023年9月導入カレンダー、2023年導入機種まとめ、当時9/4導入機の稼働記事を照合し、上記5機を同日群として採用。
- 傷物語は遊技日本/P-WORLDの当時記事で2023-09-04導入を確認し、パチビー・HAZUSE・必勝本等でも一致。
- 群CLOSED前にPB/別型式/25Φ・30Φ派生/地域先行/延期・段階導入を再監査すること。

## 次回再開地点
1. **No.1588候補 `L009 RE:CYBORG`（2023-09-04）**を最優先で処理。
2. 続いて `回胴式遊技機 グランベルム` → `ファミスタ回胴版!!` を同日群として処理。
3. 5機処理後、2023-09-04群のPB/別型式/派生・地域先行・延期/段階導入を再監査しCLOSED判定。
4. その後2023-09-19群へ進む（候補: `L麻雀格闘倶楽部 覚醒`, `L戦国コレクション5 超極楽LOOP`）。

## 今回参照した主要ソース
取得日: 2026-09-13
- 遊技日本 / P-WORLD（発売発表）: https://news.p-world.co.jp/articles/24375/nippon
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/24433/greenbelt
- 遊技日本 / P-WORLD（導入記事）: https://news.p-world.co.jp/articles/25075/nippon
- P-BOMB 検定通過: https://p-bomb.co.jp/industry/new-machine/6371/
- ゼンリン 検定満了一覧: https://zenrin-net.com/kenteis/listsend?machinesort_id=2&order_date=2026
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9864
- なな徹 解析TOP: https://nana-press.com/kaiseki/machine/592/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/592/16602/
- なな徹 モード: https://nana-press.com/kaiseki/machine/592/16604/
- なな徹 通常時/CZ規定回数: https://nana-press.com/kaiseki/machine/592/16603/
- HAZUSE: https://hazuse.com/machine/pachislot/2S0305/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/206/tj04-2.php
- 一撃 天井/リセット: https://1geki.jp/slot/s_kizumonogatari/3/
- 一撃 降臨ノ儀期待度: https://1geki.jp/slot/s_kizumonogatari/0/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/190608/
- 電源OFF→ON比較: https://yuberu-777.com/kis_ha-tenzyou/

## リレー継続ルール
- 最新mainを再取得し、README → ミッションv0.7 → INDEX → LATEST_HANDOFF → No.1587レコードの順で確認する。
- mainがこのhandoffより進んでいた場合は必ずmain側を優先し、既処理機種を重複登録しない。
- 欠損は検索語・資料系統を変えて再探索してからUNVERIFIED判定。
- 競合値は平均せずCONFLICTを保持。
- 実機完全再現用の細かな内部抽選へ過剰に掘らず、物差し性能コア + ホール経営/朝一客AIに必要なresetBehavior粒度を維持する。
