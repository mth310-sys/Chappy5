更新日: 2026-09-14

## 現在地点
- recordCount: **1656**
- latestRecordAdded: **沖ドキ！BLACK — No.1656**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-07-01_okidoki-black.md`
- chronologicalFrontier: **2024-07-01**
- frontierLatestMachine: **沖ドキ！BLACK — No.1656**
- schema: **resetBehavior v0.7**
- status: **2024-07-01_BOUNDARY_CANONICAL_CLOSED_1_OF_1 / NEXT_2024-07-08_OPEN_0_OF_6**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1655 `スマスロ ストリートファイターV 挑戦者の道` を確認して開始。
- README規定どおり、旧INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- 次の未処理No.1656 `沖ドキ！BLACK` を性能コア + resetBehavior v0.7で新規登録。
- 1geki 2024年7月新台カレンダーで7/1はパチスロ1機のみのため、2024-07-01境界をCLOSED 1/1とした。
- 次の全国導入本線は2024-07-08。1gekiではパチスロ6機を列挙している。

## No.1656 — 沖ドキ！BLACK
- path: `docs/real_machine_db/machines/2024-07-01_okidoki-black.md`
- manufacturer: **ミズホ**
- formalModel: **S／沖ドキ！BLACK／EP** / inspectionCode: **4S0253**
- releaseDate: **2024-07-01**
- generation: **6.5号機 / メダル機 / 30Φ**
- systemType: **AT / 疑似ボーナス・モード管理型沖スロ**
- settings: **1 / 2 / 3 / 5 / 6**（設定4なし）
- payoutRate: **97.2 / 98.7 / 101.9 / 104.8 / 108.6%**
- bonusInitial: **1/288.7 / 1/277.9 / 1/265.8 / 1/254.1 / 1/243.1**
- BIG: **1/214.1 / 1/205.6 / 1/188.5 / 1/173.3 / 1/160.8**
- REG: **1/292.5 / 1/283.8 / 1/267.0 / 1/251.7 / 1/239.0**
- base: **約32G/50枚**
- netIncrease: **約3.5枚/G**
- basicPayout: **BIG 60G/約210枚、REG 25G/約90枚**
- coreConfidence: **OFFICIAL + ANALYSIS_HIGH / MULTI_SOURCE_MATCH**

### No.1656 resetBehavior v0.7
- setting change: **有利区間RESET、天井G RESET、モード再抽選。通常A 50.0% / 通常B 10.2% / チャンス39.8%。通常A/B選択時は25.0%で天井399Gへ短縮。チャンスは200G天井。**
- carry over: **据え置きは有利区間・天井・モードCARRY_OVER。なな徹の直接比較表で確認。**
- power OFF→ON: **天井ゲーム数・モードCARRY_OVER。必勝本の直接比較表で確認。純電断単独の有利区間契約はUNVERIFIED_AFTER_RESEARCH。**
- ceiling: **通常A/B 999G、引き戻し/チャンス200G、天国以上32G。設定変更後はチャンス39.8%、通常A/B時25%で399G短縮。**
- mode/state: **設定変更時モード再抽選、据え置き/電断はモード引継ぎ。モードとは別軸の内部状態比較はNOT_SEPARATELY_PUBLISHED_AFTER_RESEARCH。**
- advantageous section: **設定変更RESET / 据え置きCARRY_OVER / 純電断単独はUNVERIFIED。**
- detection: **なな徹はリセット判別「現在調査中」。200G/399G付近当選は推測材料だが確定判別ではない。本機固有ガックン・表示/有利区間ランプの確定判別は再探索後もUNVERIFIED。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_GAKKUN_AND_DISPLAY_DETECTION_UNVERIFIED**

### 公開朝一数値 — No.1656
- 設定変更時モード振り分け:
  - 通常A **50.0%**
  - 通常B **10.2%**
  - チャンス **39.8%**
- 通常A/B選択時399G短縮率: **25.0%**
- チャンスモード天井: **200G**
- 通常A/B基本天井: **999G**

## conflicts / quality notes
- No.1656: 設定構成は `1/2/3/5/6`。一部二次カレンダーに設定3の101.9%を「設定4」とする転記があるが、HAZUSE・1geki機種別解析は設定3で一致。canonicalは設定3。
- No.1656: 地域・店舗単位では7月上旬後半の新台入替事例があるが、公式発売月・HAZUSE・1geki・パチマガスロマガ・全国カレンダーが7/1で一致するため全国本線は2024-07-01。
- No.1656: 通常の有利区間リセット時は黒ドキ移行チャンスがあるが、なな徹は「設定変更時を除く」と明記。朝一設定変更恩恵へ混入しない。
- 2024-06月次件数: 5機列挙と「6機種」市場集計の差は `CONFLICT_JUNE_2024_NEW_MODEL_COUNT_5_VS_6` としてQA debt継続。未知の第6機は推測追加しない。

## 2024-07-01境界 — CANONICAL CLOSED 1/1
1. 沖ドキ！BLACK — No.1656 DONE

## 2024-07-08候補 — OPEN 0/6
1. **スマスロ真・北斗無双** — 次回No.1657候補
2. **L アカメが斬る！2**
3. **Lパチスロ戦姫絶唱シンフォギア 正義の歌**
4. **Sバハマ30**
5. **S ご～やちゃんぷる～30φ**
6. **S ご～やちゃんぷる～25φ**

境界監査メモ:
- 1geki 2024年7月新台カレンダーは7/8をパチスロ6機として上記6機を列挙。
- 30φ/25φ派生は全機種方針に従い、正式型式・性能差・市場上の独立導入を確認してから別レコード採番する。
- PB・地域先行・別型式・延期/段階導入を次回も再監査し、順番を確定する。

## 次回再開地点
1. 最新mainを再同期し、No.1656実レコードと本handoffを再取得確認。
2. **No.1657候補 `スマスロ真・北斗無双`（2024-07-08）** を性能コア + resetBehavior v0.7で処理。
3. その後 `L アカメが斬る！2 → Lパチスロ戦姫絶唱シンフォギア 正義の歌 → Sバハマ30 → S ご～やちゃんぷる～30φ → S ご～やちゃんぷる～25φ` を、正式型式・導入日・派生差を監査しながら順に処理。
4. 6機処理後に2024-07-08境界をPB・別型式・地域先行・延期/段階導入まで再監査してCLOSED判定する。
5. 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1656 沖ドキ！BLACK
- ユニバーサル公式: https://www.universal-777.com/product/slot/okidoki_black/
- HAZUSE: https://hazuse.com/machine/pachislot/4S0253/
- 1geki 機種トップ: https://1geki.jp/slot/s_oki_doki_black/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/21/kh01.php
- パチ＆スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4317/1/102601
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/778/22174/
- なな徹 狙い目: https://nana-press.com/kaiseki/machine/778/22647/
- 1geki 天井/朝一: https://1geki.jp/slot/s_oki_doki_black/3/
- 1geki モード: https://1geki.jp/slot/s_oki_doki_black/42/
- 1geki 規定ゲーム数短縮: https://1geki.jp/slot/s_oki_doki_black/45/

### 境界監査
- 1geki 2024年7月新台カレンダー: https://1geki.jp/newmachinecalender/202407/
