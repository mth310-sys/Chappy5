更新日: 2026-09-14

## 現在地点
- recordCount: **1643**
- latestRecordAdded: **パチスロ金のかぼちゃ — No.1643**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-04-15_pachislot-kin-no-kabocha.md`
- chronologicalFrontier: **2024-04-15**
- frontierLatestMachine: **パチスロ金のかぼちゃ — No.1643**
- schema: **resetBehavior v0.7**
- status: **2024-04-15_BOUNDARY_CLOSED_1_OF_1_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1642 `スマスロ ストライク・ザ・ブラッド` を確認して開始。
- README規定どおり、INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- main正本の次未処理 No.1643 `パチスロ金のかぼちゃ` — 2024-04-15 を性能コア + resetBehavior v0.7で新規登録。
- 4/15同日候補を `2024年4月15日 / 2024-04-15 / パチスロ新台 / 導入 / 型式 / PB / 地域先行 / 段階導入` 等へ検索語を変え、業界記事・機種DB・主要解析を横断。今回固定できた同日canonicalは本機のみのため **1/1 CLOSED**。
- 次の既知境界は **2024-04-22**。前handoffで確認済みの `押忍！番長4` を先頭候補として、同日群を再監査してからNo.1644を確定する。

## No.1643 — パチスロ金のかぼちゃ
- path: `docs/real_machine_db/machines/2024-04-15_pachislot-kin-no-kabocha.md`
- manufacturer: **バルテック**
- formalModel: **SキンノカボチャAA**
- inspectionCode: **3S1654**
- releaseDate: **2024-04-15**
- generation: **6.5号機 / メダル機**
- systemType: **AT / 擬似ボーナス+ST**
- settings: **L / 1 / 2 / 3 / 5 / 6**（設定4非搭載）
- 機械割 setting1/2/3/5/6: **97.8 / 99.0 / 101.7 / 104.5 / 107.2%**
- ボーナス初当り: **1/148 / 1/145 / 1/139 / 1/133 / 1/124**
- ST初当り: **1/399 / 1/380 / 1/337 / 1/299 / 1/270**
- base: **約34.0G/50枚**
- 擬似ボーナス純増: **約3.3枚/G**
- ゴールデンBIG: **約209枚 + ST**
- BIG: **約105枚 + ST**
- REG: **約40枚 / ST抽選**
- ST「収穫祭」: **1セット10G / ST中ボーナス合算約1/15 / ストック込みループ率約80%**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1643 resetBehavior v0.7
- setting change: **ボーナス間500G天井進行RESET / REGスルー回数RESET。初回REG時のST突入期待度が優遇される解析あり。**
- carry over: **据え置きはボーナス間天井G数・REGスルー回数CARRY_OVER。その他内部状態は機種固有資料を固定できずUNVERIFIED。**
- power OFF→ON: **ボーナス間天井G数・REGスルー回数CARRY_OVER。内部状態/開始状態/表示復帰はUNVERIFIED。**
- game/ceiling: **通常時ボーナス間500Gでボーナス当選。設定変更時の短縮天井は確認されず、500G天井を0Gから再スタート。REG6回連続ST非当選後の次回ボーナスでST突入濃厚。**
- mode/state: **離散的な朝一専用モードは確認できず。内部高確状態の設定変更/据え置き/純電断別契約も再探索後UNVERIFIED。**
- advantageous section: **本機固有の設定変更/据え置き/純電断別 有利区間RESET/CARRY_OVER直接記載を固定できず、一般論から補完せずUNVERIFIED_AFTER_RESEARCH。**
- morning benefit: **初回REG時ST突入率が優遇。後年整理では約33%とするが具体値は単一二次資料のためANALYSIS_SINGLE。パチセブンは「優遇」と方向をcorroborate。**
- morning penalty: **REGスルー回数がRESETされるため、前日のスルー天井進行は設定変更で失われる。**
- reset detection: **前日履歴と天井/REGスルー挙動は推測材料。本機固有ガックン、開始ステージ差、有利区間ランプ確定判別は再探索後UNVERIFIED。**
- resetQaStatus: **COMPLETE_RESEARCHED**

### 公開朝一数値 — No.1643
- 設定変更時ボーナス間天井: **500G天井を0Gから再スタート / 短縮値なし確認**
- 設定変更時REGスルー回数: **RESET**
- 電源OFF→ON時ボーナス間天井: **CARRY_OVER**
- 電源OFF→ON時REGスルー回数: **CARRY_OVER**
- 設定変更後初回REG時ST突入期待度: **約33%（ANALYSIS_SINGLE。別資料で「優遇」の方向一致）**
- ガックン発生率: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- 朝一専用モード振り分け: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**

## conflicts / quality notes — No.1643
- 性能コア主要値の競合は今回確認なし。
- 初期攻略資料には朝一項目を「調査中」とするページがあるが、後年更新の必勝本・一撃で天井G数/REGスルー回数の設定変更RESET・純電断CARRY_OVERが明文化されたため、解析更新差として扱いCONFLICTにはしない。
- 初回REG時ST恩恵は「優遇」の方向は複数資料で一致。ただし約33%という具体値は高信頼複数照合が取れずANALYSIS_SINGLEのまま保持。
- 有利区間・内部状態・ガックン・開始状態は一般的6.5号機仕様から推測補完せず `UNVERIFIED_AFTER_RESEARCH`。

## 2024-04-15境界 — CLOSED 1/1 known canonical candidates
1. パチスロ金のかぼちゃ — No.1643 DONE

境界監査メモ:
- 遊技日本、HAZUSE、一撃、パチマガスロマガ、パチセブン等で2024-04-15導入を照合。
- `2024年4月15日 パチスロ 新台 導入`、`2024/04/15 スロット 新台`、`2024-04-15 パチスロ 導入`、メーカー/型式/PB/地域先行・段階導入の語を変えて再監査。
- 同日に別のcanonicalパチスロを今回固定できなかったため1/1 CLOSED。

## 次回再開地点
1. 最新mainを再同期し、No.1643と本handoffを再取得確認。
2. **2024-04-22群を境界監査**。前回からの既知先頭候補は `押忍！番長4`。
3. 同日機を業界新台スケジュール、メーカー/型式/PB/地域先行・段階導入まで洗い出し、No.1644のcanonical順序を確定。
4. No.1644を性能コア + resetBehavior v0.7で登録。
5. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。
6. 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1643 パチスロ金のかぼちゃ
- 遊技日本 新機種発表・型式・スペック・導入日: https://yugi-nippon.com/pachinko-new-machine/post-63629/
- HAZUSE機種DB: https://hazuse.com/hd/3s1654/
- HAZUSE基本スペック: https://hazuse.com/machine/pachislot/3S1654/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10004
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/66/kh01.php
- 一撃 機種概要: https://1geki.jp/slot/s_kinnokabocha/39/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_kinnokabocha/3/
- 一撃 ベース: https://1geki.jp/slot/s_kinnokabocha/4/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/83233/
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/83237/
- 必勝本 ベース/小役: https://hisshobon.com/machineinfo/83239/
- パチセブン 天井/朝一: https://pachiseven.jp/machines/6923/cutout/3
- パチセブン スペック: https://pachiseven.jp/machines/6923/cutout/2
- パチビー 機種/天井/設定差: https://www.pachibee.jp/machines/kouryaku/224030000
- ちょんぼりすた: https://chonborista.com/slot/baltec/207184/
- 後年リセット恩恵整理（約33%具体値は単一二次資料扱い）: https://note.com/pokoblog/n/n396ef7ee9b84
