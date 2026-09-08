更新日: 2026-09-09

## 現在地点
- recordCount: **1055**
- latestRecordAdded: **パチスロ ゼクスイグニッション**（オリンピア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-03-06_zx-ignition.md`
- chronologicalFrontier: **2017-03-06**
- frontierLatestMachine: **パチスロ ゼクスイグニッション — No.1055**
- schema: **resetBehavior v0.7**
- status: **2017-03-06_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 進捗
- 最新mainの README、mission v0.7、旧INDEX、LATEST_HANDOFF、No.1054実レコードを再取得し、1054件 / 2017-03-06群OPENを正本として開始。
- INDEXはREADME規定上の旧スナップショットのため、最新handoffと実レコードを進捗正本として使用。
- main未登録を再確認した **パチスロ ゼクスイグニッション** をNo.1055として追加。
- 性能コア＋resetBehavior v0.7を同時収集。設定変更時モードA/B再抽選と公開朝一数値を保存。
- 3/06群を再監査。導入一覧系資料ではドリスタせかんど / ビビッドレッド・オペレーション / ゼクスイグニッションの3機が2017-03-06群として一致し、追加の確実なパチスロ未登録機を現調査範囲で確認できなかったため `CLOSED_FOR_CURRENT_RESEARCH`。
- サミー「サクラ大戦～熱き血潮に～」は2017-03-06が発売発表日で、公式が5月上旬稼働予定と明記しているため3/06導入機へ誤登録しない。

## No.1055 — パチスロ ゼクスイグニッション
- manufacturer: **オリンピア**
- releaseDate canonical: **2017-03-06**
- formalModelName: **パチスロ ゼクスイグニッション／Z1**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / ART / ボーナス非搭載**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_POWER_CONTRACT_CERT_UNVERIFIED**

### performanceCore
- 機械割: **96.7 / 97.9 / 100.1 / 103.7 / 105.5 / 110.2%**。
- ART初当たり: **1/493.5 / 471.8 / 442.4 / 390.2 / 368.1 / 311.8**。
- 50枚ベース: **約46G/50枚**。
- ART純増: **約2.0枚/G**。
- ART「イグニッション・フェイズ」: **40G以上+α / ゲーム数上乗せ型**。
- 通常代表天井: モードA **999G+前兆**、モードB **500G+前兆**。別資料の600G表記は前兆込み/実消化上の定義差としてCONFLICTではなく `DEFINITION_DIFFERENCE_MODE_B_CEILING_500_PLUS_FOREWARNING_VS_600_DISPLAY` を保持。

### resetBehavior v0.7
- 設定変更: **ART間ゲーム数RESET / モードA-B RESELECT**。
- 設定変更時モードB: **設定1・2=25.0%、設定3・4=37.5%、設定5・6=50.0%**。残りはモードA。
- 設定変更専用固定短縮天井ではなく、モードB選択時に通常モード契約として浅い天井となる。
- 当時攻略マガジン引用の設定1条件では、設定変更後100Gまでの期待値 **+564.0円 / 機械割104.5%**。内部抽選率ではなく立ち回り参考値として分離保存。
- 据え置き: 天井進捗・モード・内部状態の本機固有直接比較を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON: 天井進捗・モード・内部状態とも `UNVERIFIED_AFTER_RESEARCH`。設定変更挙動から推定しない。
- 内部通常/高確の設定変更時初期振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 変更判別: モード/当選Gは推測材料だが非決定的。確定的ガックン/初期出目/液晶判別は `NONE_CONFIRMED_AFTER_RESEARCH`。

## dataQuality / conflicts
- 導入日、ART初当たり、機械割、50枚ベース、純増は複数当時解析/機種DBで一致。
- 業界記事で純増2.0枚/GのART特化型を確認。
- formalModelName `/Z1` は当時解析系資料で確認。検定番号はZ1/6S/型式/検定/オリンピア/平和/HAZUSE系等へ再探索したが直接固定できずUNVERIFIED。
- モードB天井の500G+前兆 / 600G表記は平均化しない。

## 2017-03-06群監査
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 登録済み:
  - ドリスタせかんど — No.1053。
  - パチスロ ビビッドレッド・オペレーション — No.1054。
  - パチスロ ゼクスイグニッション — No.1055。
- 導入一覧系資料で上記3機が3/06群として一致。
- 2017-03-06付サミー「サクラ大戦～熱き血潮に～」記事は発売告知であり、同記事中に5月上旬全国稼働予定と明記。3/06群へ混入禁止。

## 遡及 resetBehavior QA
- `2006-04_bomberman-victory-f.md` は既に `PARTIAL_RESEARCH_EXHAUSTED` まで処理済みだったため再処理せず確認通過。
- 次の既存レコード **`2006-04_rock-you-queen-3.md`** を再QA。
- 性能側 `status: PARTIAL` は維持し、reset QAのみ **`PARTIAL_RESEARCH_EXHAUSTED`**へ更新。
- QUEEN GAMEは最大1000G、BIG成立で終了するRTであることを再確認。
- 設定変更/据え置き/純電断時のQUEEN GAME残G・内部RT状態、本機固有変更判別、公開朝一数値は公式・業界・旧解析/DB・アーカイブ・回顧まで資料系統を変えて再探索したが直接契約を固定できず、一般論補完を行わない。
- retroQaScanConfirmedThrough: **2006-04_rock-you-queen-3.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 次カーソル: `2006-05_gold-shio-30.md`。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1055を再取得。
2. **1055件 / chronologicalFrontier 2017-03-06 / 3/06群CLOSED_FOR_CURRENT_RESEARCH** を正本として継続。
3. 次の導入境界は **2017-03-13**。先行確認済み候補は **アイムジャグラーEX AnniversaryEdition / みんなで楽シーサー / 輪るピングドラム**。main既登録を確認して未処理機からNo.1056候補として処理。
4. 3/13群もメーカー横断監査し、日付資料汚染を除外する。
5. 遡及QAは **`2006-05_gold-shio-30.md`** から継続。性能statusは維持し、reset QAのみ別管理。

## 主要出典 — 取得日 2026-09-09
### No.1055 パチスロ ゼクスイグニッション
- グリーンべると/P-WORLD: https://news.p-world.co.jp/articles/8985/greenbelt
- P-WORLD: https://www.p-world.co.jp/machine/database/8280
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/31673/comment-page-2/
- すろぱちくえすと: https://www.slopachi-quest.com/article/zxignition/
- スロットガーデン: https://xn--mckza4ard4ttb2d.com/zekusuigunissyon
- K-Navi: https://p-kn.com/slot/2717/
- すろかい archive: https://slotkaiseki.hatenablog.com/archive/category/ART

### 3/06群監査 / 次境界
- 2-9伝説 新台導入一覧: https://29den.com/newslot/
- サミー サクラ大戦発売告知: https://www.sammy.co.jp/japanese/news/2017/658.html

### 遡及QA ロックユークイーン3
- グリーンべると: https://web-greenbelt.jp/00004599/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/60/k.php
- HAZUSE旧解析: https://www.hazuse.com/i/det2/rockyouqueen/top.htm
- 5号機クロニクル: https://5goki.com/universal
- CDJournal: https://www.cdjournal.com/news/-/11102
- パチ7回顧: https://pachiseven.jp/articles/detail/14341
