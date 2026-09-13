更新日: 2026-09-14

## 現在地点
- recordCount: **1660**
- latestRecordAdded: **Sバハマ30 — No.1660**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-07-08_s-bahama30.md`
- chronologicalFrontier: **2024-07-08**
- frontierLatestMachine: **Sバハマ30 — No.1660**
- schema: **resetBehavior v0.7**
- status: **2024-07-08_BOUNDARY_OPEN_4_OF_6_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、ミッションv0.7、旧表示の `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1659 `Lパチスロ 戦姫絶唱シンフォギア 正義の歌` を確認して開始。
- README規定どおり、旧INDEXより新しい `LATEST_HANDOFF` + main実レコードを進捗正本として採用。
- 直前handoff指定の次の未処理No.1660 `Sバハマ30` を性能コア + resetBehavior v0.7で新規登録。
- 型式 `SバハマA3-30` は遊技日本/P-WORLDの検定通過記事、検定番号 `330688` はHAZUSE + Ativoで照合。
- 2024-07-08導入はHAZUSE・1geki・複数解析で一致。業界発表は7月上旬予定と整合。
- 通常時は毎ゲーム完全確率で疑似ボーナスを抽選し、天井・CZ・規定G数モード非搭載。設定変更後専用の天井短縮/朝一モード/当選率優遇は主要資料・後年解析を再探索しても確認されず、存在しない機構を推測追加しない。
- 有利区間の設定変更/据え置き/純電断時内部契約、純電断固有状態、本機固有ガックンは検索語・資料系統変更後も固定資料を確認できずUNVERIFIED。
- 純増は業界発表・複数解析・1geki概要の約7.4枚/Gに対し、1geki後年更新のBIG/REG個別ページが約4.7枚/Gと自己競合。平均化せずCONFLICT保持。

## No.1660 — Sバハマ30
- path: `docs/real_machine_db/machines/2024-07-08_s-bahama30.md`
- manufacturer: **アムテックス製造 / 平和販売**
- formalModel: **SバハマA3-30** / inspectionCode: **330688**
- releaseDate: **2024-07-08**
- generation: **6.5号機 / メダル機 / 30Φ**
- systemType: **AT（疑似Aタイプ / 完全確率型疑似ボーナス）**
- settings: **L / 1 / 2 / 3 / 5 / 6（設定4なし）**
- payoutRate: **97.5 / 99.1 / 101.5 / 105.9 / 109.3%（設定1/2/3/5/6）**
- BIG: **1/296.5 / 1/288.7 / 1/277.7 / 1/262.1 / 1/251.1**
- REG: **1/524.3 / 1/481.9 / 1/422.8 / 1/360.1 / 1/316.6**
- combined: **1/189.4 / 1/180.5 / 1/167.6 / 1/151.7 / 1/140.0**
- base: **約35.5G〜36.5G/50枚（設定1約35.5G）**
- netIncrease: **CONFLICT 約7.4枚/G vs 約4.7枚/G。平均化しない。**
- basicPayout: **BIG平均約344枚（44Gかつ303枚超まで） / REG平均約125枚（120枚超まで）**
- coreConfidence: **INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH_WITH_NET_INCREASE_CONFLICT**

### No.1660 resetBehavior v0.7
- setting change: **天井・規定G数モードが存在しないため天井短縮/モード再抽選はNOT_APPLICABLE。朝一専用優遇はNONE_CONFIRMED_AFTER_RESEARCH。コンプリート打ち止めは設定変更で解除。**
- carry over: **天井・規定G数モードはNOT_APPLICABLE。通常時は設定に応じた完全確率抽選。據え置き時の有利区間内部契約はUNVERIFIED。**
- power OFF→ON: **比較対象となる天井/通常モードはNOT_APPLICABLE。純電断時の有利区間・内部状態契約は再探索後もUNVERIFIED。**
- game count: **天井進行用内部GはNOT_APPLICABLE。前日G数で公開当選率が変化する仕様は確認されない。**
- ceiling: **通常時天井非搭載 / 設定変更後短縮天井NOT_APPLICABLE。**
- mode/state: **天国/チャンス等の通常モードはNOT_APPLICABLE。朝一専用状態・固定振り分けはNONE_CONFIRMED_AFTER_RESEARCH。**
- advantageous section: **6.5号機ATであることは確認済みだが、本機固有の設定変更/据え置き/純電断時内部契約は直接資料を固定できずUNVERIFIED。**
- morning benefits: **天井短縮、モード優遇、CZ優遇、初当り優遇はいずれもNONE_CONFIRMED_AFTER_RESEARCH。**
- detection: **規定G数判別はNOT_APPLICABLE。有利区間ランプ/表示/開始状態による確定判別、本機固有ガックン条件・発生率は再探索後もUNVERIFIED。**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_POWER_CYCLE_ADVANTAGEOUS_SECTION_AND_GAKKUN_UNVERIFIED**

### 公開朝一関連数値 — No.1660
- 通常時天井: **非搭載**
- 設定変更後短縮天井: **NOT_APPLICABLE**
- 朝一専用モード振り分け: **NONE_CONFIRMED_AFTER_RESEARCH**
- 朝一特定G数以内当選率/期待度: **NONE_CONFIRMED_AFTER_RESEARCH**
- リセット恩恵発生率: **NONE_CONFIRMED_AFTER_RESEARCH**

## conflicts / quality notes
- No.1660: 純増は2024年業界発表・複数解析・1geki機種概要が約7.4枚/G、1geki 2025-12-09更新のBIG/REG個別ページが約4.7枚/G。`CONFLICT_NET_INCREASE_7.4_VS_4.7` として保持し平均化しない。
- No.1660: K-Naviは設定5 BIG 1/262.4、REG 1/360.4だが、業界発表・P-WORLD・なな徹・1geki等は1/262.1 / 1/360.1で一致。canonicalは多数一致値を採用しK-Navi差を注記。
- 2024-06月次件数: 5機列挙と「6機種」市場集計の差は `CONFLICT_JUNE_2024_NEW_MODEL_COUNT_5_VS_6` としてQA debt継続。未知の第6機は推測追加しない。

## 2024-07-01境界 — CANONICAL CLOSED 1/1
1. 沖ドキ！BLACK — No.1656 DONE

## 2024-07-08候補 — OPEN 4/6
1. **スマスロ真・北斗無双 — No.1657 DONE**
2. **L アカメが斬る！2 — No.1658 DONE**
3. **Lパチスロ戦姫絶唱シンフォギア 正義の歌 — No.1659 DONE**
4. **Sバハマ30 — No.1660 DONE**
5. **S ご～やちゃんぷる～30φ — 次回No.1661候補**
6. **S ご～やちゃんぷる～25φ**

境界監査メモ:
- 1geki 2024年7月新台カレンダーの7/8パチスロ6機を前handoffで確認済み。
- 30φ/25φ派生は全機種方針に従い、正式型式・性能差・市場上の独立導入を確認してから別レコード採番する。
- PB・地域先行・別型式・延期/段階導入を継続監査する。

## 次回再開地点
1. 最新mainを再同期し、No.1660実レコードと本handoffを再取得確認。
2. **No.1661候補 `S ご～やちゃんぷる～30φ`（2024-07-08）** を正式型式・メーカー・導入日・性能差まで再監査し、性能コア + resetBehavior v0.7で処理。
3. その後 `S ご～やちゃんぷる～25φ` を正式型式・導入日・25φ/30φ差を監査して処理。
4. 6機処理後に2024-07-08境界をPB・別型式・地域先行・延期/段階導入まで再監査してCLOSED判定する。
5. 欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### No.1660 Sバハマ30
- 遊技日本 / P-WORLD 検定通過: https://news.p-world.co.jp/articles/27308/nippon
- グリーンべると / P-WORLD 発表記事: https://news.p-world.co.jp/articles/27721/greenbelt
- 遊技日本 / P-WORLD 発表記事: https://news.p-world.co.jp/articles/27738/nippon
- HAZUSE: https://hazuse.com/machine/pachislot/SX0079/
- Ativo: https://ativo.jp/2024/05/13/s%E3%83%90%E3%83%8F%E3%83%9E30/
- P-WORLD: https://www.p-world.co.jp/machine/database/10053
- 1geki TOP: https://1geki.jp/slot/s_bahama30/
- 1geki 天井/朝一: https://1geki.jp/slot/s_bahama30/3/
- 1geki 小役/ベース: https://1geki.jp/slot/s_bahama30/4/
- 1geki BIG: https://1geki.jp/slot/s_bahama30/61/
- 1geki REG: https://1geki.jp/slot/s_bahama30/62/
- なな徹: https://nana-press.com/kaiseki/machine/781/21698/
- 必勝本 通常時解説: https://hisshobon.com/machineinfo/83993/
- 必勝本 ロングフリーズ: https://hisshobon.com/machineinfo/83997/
- パチマニア: https://ps-mania.jp/slot/s-bahama30/
- ちょんぼりすた: https://chonborista.com/slot/amute/213569/
- K-Navi: https://p-kn.com/slot/4153/

### 境界監査
- 1geki 2024年7月新台カレンダー: https://1geki.jp/newmachinecalender/202407/
