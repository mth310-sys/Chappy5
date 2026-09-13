更新日: 2026-09-13

## 現在地点
- recordCount: **1568**
- latestRecordAdded: **Lパチスロベルセルク無双 — No.1568**
- latestRecordAddedPath: `docs/real_machine_db/machines/2023-06-05_l-pachislot-berserk-musou.md`
- chronologicalFrontier: **2023-06-05**
- frontierLatestMachine: **Lパチスロベルセルク無双 — No.1568**
- schema: **resetBehavior v0.7**
- status: **2023-06-05_GROUP_OPEN_3_OF_6_KNOWN_PROCESSED / NEXT_NO1569_CODE_GEASS_3_CC_KALLEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1567 `ぱちスロ にゃんこ大戦争 BIGBANG` を確認して開始。
- INDEXは旧表示（19件）のためREADME規定どおり、LATEST_HANDOFFとmain実レコードを進捗正本として採用。
- handoff指定の次未処理 `Lパチスロベルセルク無双` をNo.1568として処理し、性能コア + resetBehavior v0.7を保存。
- 欠損項目は機種名 / 正式型式 / メーカー名と、設定変更・リセット・朝一・据え置き・電源OFF ON・天井・ベヘリットモード・鉄塊連モード・穢れ・ガックン・有利区間を組み替え、公安委員会検定系、業界記事、当時解析、旧DB / 回顧資料を横断して再探索。

## No.1568 — Lパチスロベルセルク無双
- manufacturer: **EXCITE（ニューギングループ）**
- formalModel: **Lパチスロベルセルク無双EV**
- inspectionCode: **3S0001**
- releaseDate canonical: **2023-06-05**
- releaseDate conflict: Amusement Japan 2023-05-23記事に **2023-06-19予定**表記あり。複数の導入・実稼働資料が6/5で一致するため6/5をcanonical、6/19を `CONFLICT_SINGLE_INDUSTRY_ARTICLE_VS_MULTI_SOURCE_ACTUAL_OPERATION` として保持。
- generation/system: **6.5号機 / スマスロAT / ゲーム数管理型**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.5 / 104.9 / 107.9 / 110.4%**（設定1/2/4/5/6）
- AT: **1/390.3 / 1/373.8 / 1/292.5 / 1/260.9 / 1/238.4**
- baseGamesPer50: **約35.5G/50枚**
- netIncrease: **約2.5枚/G、特定高純増 / 上位側 約5.0枚/G**
- AT基本: **初回50G、2セット目以降30G以上。超転生ボーナス20G＋ベルセルクエクストラ20G以上の上位ループあり**
- normalCeiling: **999G+α → AT当選**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_INITIAL_KEGARE_DISTRIBUTION**

### resetBehavior v0.7 — No.1568
- 設定変更: **有利区間RESET / 天井RESET / 内部状態RESET・再抽選 / ベヘリットモードRESET / CZレベル再抽選 / 穢れ再抽選 / 鉄塊連モードは非鉄塊連へ**。
- 据え置き: **有利区間・天井・内部状態・ベヘリットモード・穢れCARRY_OVER**。
- 純電源OFF→ON: **天井・内部状態・鉄塊連モード・穢れCARRY_OVER**。複数解析では内部モード / 有利区間も引継ぎ。必勝本のベヘリットモード等の下位項目は「調査中」が残るため `PARTIAL_DIRECT_DISCLOSURE` として一般論で補完しない。
- 固定の設定変更専用短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。公開最大天井は999G+α。
- 設定変更時の穢れ初期ポイント: **0pt 28.77% / 30pt 6.25% / 60pt 25.00% / 90pt 39.98%**。
- **64.98%で60pt以上、39.98%で90pt**から開始する明確な朝一恩恵。
- 朝一ステージは城下町、ベヘリットポイント表示は「?」。設定変更 / 据え置きの見た目判別は困難。
- 有利区間ランプによる設定変更判別不可。
- 本機固有ガックン条件 / 発生率は十分な再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用ベヘリットモード振り分け、朝一専用AT/CZ初当り率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## 2023-06-05群 — OPEN 3/6 known
1. SLOTメイドインアビス — No.1566 **DONE**
2. ぱちスロ にゃんこ大戦争 BIGBANG — No.1567 **DONE**
3. Lパチスロベルセルク無双 — No.1568 **DONE**
4. パチスロ コードギアス 反逆のルルーシュ3 C.C.&Kallen ver. — **NEXT / No.1569候補**
5. 真天下布武 — 未処理
6. ウルトラちゃぶ台返し — 未処理

### 群監査
- 既知6機の3機目まで完了。
- ベルセルク無双は多数資料で2023-06-05導入 / 稼働開始が一致。Amusement Japanの6/19予定表記はレコード内CONFLICTとして保持し、キュー順自体は6/5群のまま継続する。
- 群CLOSED判定は6機処理後、PB・別型式・地域先行・延期 / 段階導入を再監査して行う。

## 継続CONFLICT / deferred
- `L戦国BASARAギガZE`: 5/8スケジュール掲載 vs 実導入側資料の日付差。**2023-08-07境界へdefer**しCONFLICT保持。
- `Lパチスロベルセルク無双`: 6/5複数導入・稼働資料 vs Amusement Japan 6/19予定表記。**6/5 canonical / 6/19 conflict保持**。

## resetBehavior 遡及QA
### 次の遡及QAカーソル
- `docs/real_machine_db/machines/2007-07-08_caribbean-queen.md` — **カリビアンクイーン**
- 既存性能値はやり直さず、追加一次 / 当時資料がなければ `PARTIAL_RESEARCH_EXHAUSTED` 正式化を検討。

## 今回の主要資料
### No.1568 Lパチスロベルセルク無双
- PiDEA X 東京都公安委員会検定通過（型式 / 3S0001）: https://www.pidea.jp/articles/1679881788
- グリーンべると 検定通過: https://web-greenbelt.jp/post-69770/
- Amusement Japan ニューギン直営店先行導入: https://amusement-japan.co.jp/article/detail/10003498/
- Amusement Japan ファン試打会（6/19予定表記）: https://amusement-japan.co.jp/article/detail/10003516/
- P-Summa 導入直後記事（6/5全国ホール登場）: https://psumma.jp/pachislo/58231/
- パチ＆スロ必勝本 基本スペック / 天井&設定変更: https://p.hisshobon.jp/vpage/2539/2
- なな徹 朝一 / 設定変更 / 有利区間: https://nana-press.com/kaiseki/machine/548/15200/
- なな徹 天井: https://nana-press.com/kaiseki/machine/548/15198/
- スロパチクエスト 天井 / 朝一 / 穢れ: https://www.slopachi-quest.com/article/berserkmusou-tenjou/
- スロパチクエスト 設定差: https://www.slopachi-quest.com/article/berserkmusou-settei/
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/185178/
- K-Navi: https://p-kn.com/slot/3963/
- パチマガスロマガ 穢れ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/16/tj10.php

## 保存コミット
- No.1568追加: `2f444cf687a78d58d3a0cee9853870be675e546a`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1569候補 `パチスロ コードギアス 反逆のルルーシュ3 C.C.&Kallen ver.` から継続する。その後 `真天下布武` → `ウルトラちゃぶ台返し`。各機を性能コア + resetBehavior v0.7で処理し、欠損前に表記揺れ / 型式 / メーカーと各リセット検索語を変えて再探索する。6機完了後にPB・別型式・地域先行・延期を横断しCLOSED可否を判定する。遡及QAはカリビアンクイーンから継続し、既存性能値はやり直さない。**