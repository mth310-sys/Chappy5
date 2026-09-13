更新日: 2026-09-14

## 現在地点
- recordCount: **1658**
- latestRecordAdded: **L アカメが斬る！2 — No.1658**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-07-08_l-akame-ga-kiru-2.md`
- chronologicalFrontier: **2024-07-08**
- frontierLatestMachine: **L アカメが斬る！2 — No.1658**
- schema: **resetBehavior v0.7**
- status: **2024-07-08_BOUNDARY_OPEN_2_OF_6_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1657 `スマスロ真・北斗無双` を確認して開始。
- README規定どおり、旧INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- リレー1/他作業者がNo.1657まで先行していたため重複を避け、次の未処理No.1658 `L アカメが斬る！2` を性能コア + resetBehavior v0.7で新規登録。
- 型式・検定番号はHAZUSEと公安委員会検定通過を扱う業界記事、導入日はHAZUSE・必勝本・パチマガスロマガ・なな徹・業界記事で照合。
- resetBehaviorはなな徹の朝一/有利区間/内部モード、1geki、スロパチクエスト、イチカツ、必勝本を横断。
- 設定変更時A/B/C/D個別モード振り分け、エスデスポイント初期振り分け、本機固有ガックンは表記揺れ・型式・メーカー・シリーズ名と検索語変更後も固定公開値を確認できず欠損扱い。

## No.1658 — L アカメが斬る！2
- path: `docs/real_machine_db/machines/2024-07-08_l-akame-ga-kiru-2.md`
- manufacturer: **新日テクノロジー（スパイキーブランド）**
- formalModel: **Lアカメが斬る！2TN** / inspectionCode: **3S1760**
- releaseDate: **2024-07-08**
- generation: **6.5号機 / スマスロ**
- systemType: **A+AT / リアルボーナス+AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.7 / 100.4 / 105.4 / 110.2 / 114.9%**
- CZ: **1/296.3 / 1/285.0 / 1/280.4 / 1/253.7 / 1/245.3 / 1/231.9**
- AT: **1/390.0 / 1/378.3 / 1/359.0 / 1/326.5 / 1/312.8 / 1/296.8**
- base: **約33G/50枚（必勝本33.2G）**
- netIncrease: **約2.6枚/G**
- basicPayout: **赤7BIG約100枚 / 青7BIG約60枚 / AT 20G・30G・100G+α**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1658 resetBehavior v0.7
- setting change: **有利区間RESET、天井RESET、内部状態RESET、内部モード再抽選、高設定ほど上位モード開始が優遇、エスデスポイント初期抽選。**
- carry over: **据え置きは有利区間・天井・内部状態・内部モードをCARRY_OVER。**
- power OFF→ON: **天井・内部状態・内部モード・有利区間をCARRY_OVER。**
- ceiling: **通常最大970G+α。300/400/500/970Gの天井振り分けが存在。設定変更専用の最大天井短縮は確認されず最大970G+αのまま。300/400/500G選択時はモードEへ移行し約1/20でAT抽選。**
- mode: **設定変更時はA〜Dを再抽選し、高設定ほど上位モードから開始しやすい。個別振り分け率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- advantageous section: **設定変更でRESET。据え置き/純電断でCARRY_OVER。有利区間ランプ判別不可。**
- morning benefits: **高設定ほど上位モード開始優遇、エスデスポイント初期抽選で複数pt所持の可能性。**
- detection: **なな徹はリセット判別を調査中。有利区間ランプ判別不可。宵越し300/400/500G付近のゲーム数色変化等は据え置き推測材料。本機固有ガックンは再探索後もUNVERIFIED。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_GAKKUN_AND_MODE_DISTRIBUTION_UNVERIFIED**

### 公開朝一関連数値 — No.1658
- 通常/設定変更後最大天井: **970G+α**
- 天井振り分け候補: **300G / 400G / 500G / 970G**
- 300/400/500G選択時モードEのAT抽選: **約1/20**
- 設定変更時A/B/C/D個別モード振り分け: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- 設定変更時エスデスポイント初期振り分け: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**

## conflicts / quality notes
- No.1658: グリーンべると2024-07-11記事は「ベース50G」「AT純増約2.5枚」とするが、必勝本・なな徹・パチマガスロマガ・1geki・HAZUSE等はベース約33〜33.2G/50枚、純増約2.6枚/Gで一致。平均化せず `CONFLICT_GREENBELT_BASE_50G_NET_2_5_VS_MULTI_SOURCE_33G_NET_2_6` を保持し、canonicalは複数一致側。
- No.1658: 設定変更時A/B/C/Dの個別初期振り分けは「高設定ほど上位優遇」まで複数一致するが、固定率を確認できず推測しない。
- No.1658: 本機固有ガックンは機種名、型式 `Lアカメが斬る！2TN`、新日テクノロジー、スパイキーと設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンの検索語を変更し再探索後も固定できずUNVERIFIED。
- 2024-06月次件数: 5機列挙と「6機種」市場集計の差は `CONFLICT_JUNE_2024_NEW_MODEL_COUNT_5_VS_6` としてQA debt継続。未知の第6機は推測追加しない。

## 2024-07-01境界 — CANONICAL CLOSED 1/1
1. 沖ドキ！BLACK — No.1656 DONE

## 2024-07-08候補 — OPEN 2/6
1. **スマスロ真・北斗無双 — No.1657 DONE**
2. **L アカメが斬る！2 — No.1658 DONE**
3. **Lパチスロ戦姫絶唱シンフォギア 正義の歌 — 次回No.1659候補**
4. **Sバハマ30**
5. **S ご～やちゃんぷる～30φ**
6. **S ご～やちゃんぷる～25φ**

境界監査メモ:
- 1geki 2024年7月新台カレンダーの7/8パチスロ6機を前handoffで確認済み。
- 30φ/25φ派生は全機種方針に従い、正式型式・性能差・市場上の独立導入を確認してから別レコード採番する。
- PB・地域先行・別型式・延期/段階導入を継続監査する。

## 次回再開地点
1. 最新mainを再同期し、No.1658実レコードと本handoffを再取得確認。
2. **No.1659候補 `Lパチスロ戦姫絶唱シンフォギア 正義の歌`（2024-07-08）** を性能コア + resetBehavior v0.7で処理。
3. その後 `Sバハマ30 → S ご～やちゃんぷる～30φ → S ご～やちゃんぷる～25φ` を正式型式・導入日・派生差を監査しながら順に処理。
4. 6機処理後に2024-07-08境界をPB・別型式・地域先行・延期/段階導入まで再監査してCLOSED判定する。
5. 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1658 L アカメが斬る！2
- 公式特設: https://l-slot-akame2.jp/
- HAZUSE: https://hazuse.com/machine/pachislot/3S1760/
- P-WORLD / 遊技日本 検定通過: https://news.p-world.co.jp/articles/27358/nippon
- グリーンべると 導入記事: https://web-greenbelt.jp/post-84866/
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2632/2
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/shinnichitechnology_slot/02/kh01.php
- なな徹 解析TOP: https://nana-press.com/kaiseki/machine/774/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/774/22413/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/774/22414/
- なな徹 狙い目/リセット: https://nana-press.com/kaiseki/machine/774/22644/
- なな徹 CZ/内部モード: https://nana-press.com/kaiseki/machine/774/22416/
- なな徹 エスデスポイント: https://nana-press.com/kaiseki/machine/774/22420/
- 1geki 天井・朝一: https://1geki.jp/slot/l_akame2/3/
- 1geki オンライン遊技説明: https://1geki.jp/slot/l_akame2/39/
- スロパチクエスト 朝一: https://www.slopachi-quest.com/article/lakamegakill2-tenjou/
- イチカツ 設定変更: https://itikatu.jp/akame2/
- パチ&スロ必勝本 通常時/モード: https://p.hisshobon.jp/machine/4334/1/103464

### 境界監査
- 1geki 2024年7月新台カレンダー: https://1geki.jp/newmachinecalender/202407/
