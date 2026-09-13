更新日: 2026-09-13

## 現在地点
- recordCount: **1586**
- latestRecordAdded: **L戦国乙女4 戦乱に閃く炯眼の軍師 — No.1586**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-09-04_sengoku-otome4.md`
- chronologicalFrontier: **2023-09-04**
- frontierLatestMachine: **L戦国乙女4 戦乱に閃く炯眼の軍師 — No.1586**
- schema: **resetBehavior v0.7**
- status: **2023-09-04_GROUP_OPEN_1_OF_5_KNOWN_PROCESSED / NEXT_NO1587_CANDIDATE_KIZUMONOGATARI / THEN_L009_GRANBELM_FAMISTA / GROUP_BOUNDARY_AUDIT_REQUIRED_BEFORE_CLOSE**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1585 `防空少女ラブキューレ2～極限の共鳴～` を確認して開始。
- INDEXは旧表示（19件）のままなので、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを進捗正本として採用。
- mainの最新地点は会話上のNo.1577より先行しており、2023-08-07群はNo.1580～1585の6/6でCLOSED済みだったため重複処理を回避。
- handoff指定の次候補 `L戦国乙女4 戦乱に閃く炯眼の軍師` をNo.1586として性能コア + resetBehavior v0.7で追加。
- 2023-09-04群を複数カレンダー/当時稼働資料で再監査し、canonical候補を **5機** と判断: `パチスロ傷物語 -始マリノ刻-` / `L009 RE:CYBORG` / `L戦国乙女4 戦乱に閃く炯眼の軍師` / `回胴式遊技機 グランベルム` / `ファミスタ回胴版!!`。戦国乙女4のみ処理済みのため群はOPEN 1/5。
- 欠損は機種名・正式型式・メーカーと `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / スルー天井 / モード / 巫女カウンター / ガックン / 有利区間` を組み替え、業界発表・当時解析・旧DB・後年整理資料を横断してから判定。

## No.1586 — L戦国乙女4 戦乱に閃く炯眼の軍師
- path: `docs/real_machine_db/machines/2023-09-04_sengoku-otome4.md`
- manufacturer: **オリンピアエステート製造 / 平和**
- formalModel / inspectionCode: **L戦国乙女4S3 / 3S0520**
- releaseDate: **2023-09-04**
- generation/system: **6.5号機 / スマスロAT / 擬似ボーナス経由型ゲーム数上乗せAT**
- payoutRate 設定1～6: **98.2 / 99.0 / 101.2 / 105.2 / 110.2 / 113.0%**
- ボーナス+AT直撃初当たり: **1/272.7 / 1/267.3 / 1/255.3 / 1/238.2 / 1/223.2 / 1/217.1**（設定1のみ1/272.2資料とのCONFLICT保持）
- AT初当たり: **1/429.2 / 1/417.8 / 1/393.6 / 1/361.3 / 1/334.1 / 1/319.2**
- CZ: **1/467.6 / 1/452.2 / 1/434.7 / 1/410.9 / 1/394.9 / 1/381.5**
- base: **約31.8G/50枚**
- netIncrease: **約2.5枚/G / 上位AT約5.0枚/G**
- normal ceiling: モード別 **99 / 349 / 649 / 799G+α**、通常最大799G+α。ボーナス6スルー後7回目はEPB=AT確定。
- reset: 設定変更で有利区間・ゲーム数天井・モード・内部状態RESET。ボーナススルー回数と巫女カウンターは **ランダム再セット**。
- carry: 据え置きは有利区間・ゲーム数天井・スルー回数・モード・内部状態・巫女カウンター内部値を引継ぎ。
- pure power: 天井・内部状態の引継ぎを機種固有比較資料で確認。モード/スルー回数/巫女カウンター/有利区間は複数二次資料で据え置き同等の引継ぎに整合するが、純電断単独の高信頼項目別明記は不足のためレコード内で信頼度を分離。
- reset benefit: スルー回数ランダム再セットにより、朝一は見かけ6スルー未満でもEPB天井が早期発動し得る。巫女カウンターもランダム再セット。
- reset mode distribution: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**。
- resetDetection: 設定変更/据え置きとも朝一甲斐ステージ。前日巫女カウンター残ptとの照合は推測材料だが確定不可。機種固有ガックンは **UNVERIFIED_AFTER_RESEARCH**。
- important distinction: **設定変更以外**の有利区間リセット後は `超強カワループ + 天国A以上` だが、設定変更時はこの恩恵対象外。
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS**

## conflicts / missing retained
- 初当たり設定1: **1/272.7 vs 1/272.2**。複数業界/解析の1/272.7をcanonical、1/272.2をCONFLICTとして保持。
- 一部後年資料の「設定変更時スルー回数クリア」は簡略表記と判断。高信頼解析の **ランダム再セット**をcanonicalとして、単純0クリア表記は `CONFLICT_SIMPLIFIED_RESET_DESCRIPTION`。
- 設定変更時モード振り分け率、スルー回数再セット振り分け、巫女カウンターpt再セット振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率: `UNVERIFIED_AFTER_RESEARCH`。

## 2023-09-04群 — OPEN 1/5 known
1. L戦国乙女4 戦乱に閃く炯眼の軍師 — No.1586 **DONE**
2. パチスロ傷物語 -始マリノ刻- — **NEXT / No.1587候補**
3. L009 RE:CYBORG — pending
4. 回胴式遊技機 グランベルム — pending
5. ファミスタ回胴版!! — pending

### 群境界根拠
- 一撃 2023年9月新台カレンダーは2023-09-04をスロット5機種として掲載。
- K-Navi 2023年9月導入カレンダー、2023年導入機種まとめ、当時9/4導入機の稼働記事を照合し、上記5機を同日群として採用。
- 傷物語はK-Naviの検索スニペットでは欠落して見える箇所があるが、一撃・当時稼働記事・複数2023年導入一覧で9/4導入が一致するため群へ含める。
- 群CLOSED前にPB/別型式/25Φ・30Φ派生/地域先行/延期・段階導入を再監査すること。

## 次回再開地点
1. **No.1587候補 `パチスロ傷物語 -始マリノ刻-`（2023-09-04）**を最優先で処理。
2. 続いて `L009 RE:CYBORG` → `回胴式遊技機 グランベルム` → `ファミスタ回胴版!!` を同日群として処理。
3. 5機処理後、2023-09-04群のPB/別型式/派生・地域先行・延期/段階導入を再監査しCLOSED判定。
4. その後2023-09-19群へ進む（候補: `L麻雀格闘倶楽部 覚醒`, `L戦国コレクション5 超極楽LOOP`）。

## 今回参照した主要ソース
取得日: 2026-09-13
- 遊技通信 / P-WORLD: https://news.p-world.co.jp/articles/24505/yugitsushin
- アミューズメントジャパン / P-WORLD: https://news.p-world.co.jp/articles/24516/amusement
- 遊技日本 / P-WORLD: https://news.p-world.co.jp/articles/25037/nippon
- 一撃 戦国乙女4: https://1geki.jp/slot/l_otome_keigan/
- なな徹 解析TOP: https://nana-press.com/kaiseki/machine/597/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/597/16397/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/597/17469/
- HAZUSE: https://hazuse.com/machine/pachislot/3S0520/
- Altema 朝一リセット: https://altema.jp/pachimo/lotomereset
- 一撃 2023年9月新台カレンダー: https://1geki.jp/newmachinecalender/202309/
- K-Navi 2023年9月導入カレンダー: https://p-kn.com/calendar/202309/

## リレー継続ルール
- 最新mainを再取得し、README → ミッションv0.7 → INDEX → LATEST_HANDOFF → No.1586レコードの順で確認する。
- mainがこのhandoffより進んでいた場合は必ずmain側を優先し、既処理機種を重複登録しない。
- 欠損は検索語・資料系統を変えて再探索してからUNVERIFIED判定。
- 競合値は平均せずCONFLICTを保持。
- 実機完全再現用の細かな内部抽選へ過剰に掘らず、物差し性能コア + ホール経営/朝一客AIに必要なresetBehavior粒度を維持する。
