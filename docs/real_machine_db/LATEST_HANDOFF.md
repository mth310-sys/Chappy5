更新日: 2026-09-13

## 現在地点
- recordCount: **1567**
- latestRecordAdded: **ぱちスロ にゃんこ大戦争 BIGBANG — No.1567**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-06-05_pachislot-nyanko-daisensou-bigbang.md`
- chronologicalFrontier: **2023-06-05**
- frontierLatestMachine: **ぱちスロ にゃんこ大戦争 BIGBANG — No.1567**
- schema: **resetBehavior v0.7**
- status: **2023-06-05_GROUP_OPEN_2_OF_6_KNOWN_PROCESSED / NEXT_NO1568_BERSERK_MUSOU**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1566 `SLOTメイドインアビス` を確認して開始。
- INDEXは旧表示のためREADME規定どおりLATEST_HANDOFFとmain実レコードを進捗正本として採用。
- mainが以前のチャット表示より先行してNo.1566まで進んでいたため、重複せずhandoff指定のNo.1567から継続。
- `ぱちスロ にゃんこ大戦争 BIGBANG` をNo.1567として処理し、性能コア + resetBehavior v0.7を保存。
- 欠損項目は機種名/正式型式/メーカー/シリーズ名と、設定変更・リセット・朝一・据え置き・電源OFF ON・天井短縮・モード・狂乱状態・ガックン・有利区間を組み替え、公式・権利元・公安委員会検定系・業界記事・複数解析・旧DB/回顧資料を横断して再探索。

## No.1567 — ぱちスロ にゃんこ大戦争 BIGBANG
- manufacturer: **オッケー．（KYORAKUブランド / 京楽産業．グループ）**
- formalModel: **Lパチスロにゃんこ大戦争MK**
- inspectionCode: **3S0209**
- releaseDate: **2023-06-05**
- generation/system: **6.5号機 / スマスロAT / ゲーム数上乗せ型**
- settings: **1 / 2 / 4 / 5 / 6（実質5段階、別途設定0あり）**
- payoutRate: **97.6 / 98.5 / 102.6 / 107.5 / 112.5%**
- AT: **1/587.0 / 1/573.5 / 1/504.4 / 1/447.6 / 1/417.6**
- CZ: **1/1142.7 / 1/1211.3 / 1/1106.5 / 1/831.1 / 1/843.0**
- baseGamesPer50: **約29.7G/50枚**
- netIncrease: **約2.7枚/G**
- AT基本: **初当り時の究極降臨ガチャ平均約150G、プレミアムBIGBANG GAME期待値2500枚over（メーカー定義：通常遊技へ戻るまでの平均差枚）**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_SHORTENED_CEILING**

### resetBehavior v0.7 — No.1567
- 設定変更: **有利区間RESET / 天井RESET / モードRESET・再抽選 / 狂乱状態等の内部状態RESET・再抽選**。
- 据え置き: **有利区間・天井・モード・内部状態CARRY_OVER**。
- 純電源OFF→ON: **天井・モード・狂乱状態CARRY_OVER**。液晶表示は初期表示へ戻る。純電断単独の「有利区間」直接記述だけは `UNVERIFIED_AFTER_RESEARCH`。
- 通常天井 **1500G+α** → 設定変更後 **1122G+α**へ短縮。
- AT終了後の一部で **222G+α**天井。
- 天井到達恩恵は **AT当選＋究極降臨ガチャ振り分け優遇**。
- 朝一液晶は設定変更/据え置きとも **ワルキューレ平原 / 1・2・3表示**で、見た目だけでは変更判別不可。
- 有利区間ランプによる設定変更/据え置き判別不可。
- 朝一1122G+αを超えて天井非発動なら据え置き濃厚材料。
- なな徹は設定変更後の朝一期待値を **100%オーバー**と公開。精密な交換率別数値ではないため定性指標として保持。
- 設定変更専用モード振り分け・狂乱状態初期振り分け・朝一AT/CZ率は再探索後 `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。

## 2023-06-05群 — OPEN 2/6 known
1. SLOTメイドインアビス — No.1566 **DONE**
2. ぱちスロ にゃんこ大戦争 BIGBANG — No.1567 **DONE**
3. Lパチスロベルセルク無双 — **NEXT / No.1568候補**
4. パチスロ コードギアス 反逆のルルーシュ3 C.C.&Kallen ver. — 未処理
5. 真天下布武 — 未処理
6. ウルトラちゃぶ台返し — 未処理

### 群監査
- 前handoffでスロパチクエスト2023導入一覧と導入直後の複数新台まとめから6機候補を確認済み。
- にゃんこ大戦争はKYORAKU公式・ポノス公式とも **2023-06-05全国導入開始**で一致。
- 群CLOSED判定は6機処理後、PB・別型式・地域先行・延期/段階導入を再監査して行う。

## 継続CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8スケジュール掲載 vs 実導入側資料の日付差。**2023-08-07境界へdefer**しCONFLICT保持。

## resetBehavior 遡及QA
### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 既存性能値はやり直さず、追加一次/当時資料がなければ `PARTIAL_RESEARCH_EXHAUSTED` 正式化を検討。

## 今回の主要資料
### No.1567 ぱちスロ にゃんこ大戦争 BIGBANG
- KYORAKU公式 全国導入開始: https://www.kyoraku.co.jp/news/detail/688
- ポノス公式: https://www.ponos.jp/news/2023/05/10nyanko-5/
- 遊技通信web 検定通過（型式/検定番号）: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%884%E6%9C%8824%E6%97%A5%EF%BC%89/
- P-WORLD/遊技日本 発売記事: https://news.p-world.co.jp/articles/24046/nippon
- ハズセ: https://hazuse.com/machine/pachislot/3S0209/
- 一撃: https://1geki.jp/slot/l_nyanko/
- 一撃 天井/朝一: https://1geki.jp/slot/l_nyanko/3/
- なな徹: https://nana-press.com/kaiseki/machine/563/
- なな徹 朝一/有利区間: https://nana-press.com/kaiseki/machine/563/15311/
- なな徹 天井: https://nana-press.com/kaiseki/machine/563/15309/
- パチ＆スロ必勝本: https://p.hisshobon.jp/vpage/2538/2
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/14/kh02-1.php
- スロパチクエスト: https://www.slopachi-quest.com/article/nyankodaisensou-settei/
- ぱちんこキュレーション: https://pachinko-curation.com/37977/

## 保存コミット
- No.1567追加: `e5c6d79f8d6a8225aef1acdda1cee3970aa3b245`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1568候補 `Lパチスロベルセルク無双` から継続する。同日2023-06-05群の残りはコードギアス3 C.C.&Kallen ver. → 真天下布武 → ウルトラちゃぶ台返し。各機を性能コア + resetBehavior v0.7で処理し、欠損前に表記揺れ/型式/メーカーと各リセット検索語を変えて再探索する。6機完了後にPB・別型式・地域先行・延期を横断しCLOSED可否を判定する。遡及QAはカリビアンクイーンから継続し、既存性能値はやり直さない。**