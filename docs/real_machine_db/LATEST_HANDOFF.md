更新日: 2026-09-14

## 現在地点
- recordCount: **1688**
- latestRecordAdded: **Lルパン三世 大航海者の秘宝 — No.1688**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-12-02_lupin-the-third-daikoukai-sha-no-hihou.md`
- chronologicalFrontier: **2024-12-02**
- schema: **resetBehavior v0.7**
- status: **2024-12-02_BOUNDARY_OPEN_2_OF_7_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1687を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1688 `Lルパン三世 大航海者の秘宝` を追加し、性能コア + resetBehavior v0.7を収録。
- 型式 `Lルパン三世大航海者の秘宝H1`、検定番号 `4S0946`、平和、2024-12-02導入をHAZUSE・遊技通信・Amusement Japan・複数解析で照合。
- 設定変更時は有利区間/AT間天井/内部状態/山盛りポイントRESET、AT間天井700G+α固定。据え置き時は有利区間/天井/内部状態/山盛りポイントを引継ぎ。
- 純電源OFF→ONではAT間天井Gの引継ぎを直接確認。内部状態/山盛りポイント/有利区間については純電断のみを独立条件として明記する高信頼資料を固定できず、推測せずUNVERIFIED_DIRECT_POWER_CYCLE_WORDING_AFTER_RESEARCH。
- 朝一カウンターは設定変更/据え置きとも「？？？」表示で表示単独判別不可。700G+αを超えてAT天井非発動なら据え置き濃厚材料。本機固有ガックンは検索語・型式・メーカー・シリーズを変えて再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。

## No.1688 — Lルパン三世 大航海者の秘宝
- path: `docs/real_machine_db/machines/2024-12-02_lupin-the-third-daikoukai-sha-no-hihou.md`
- manufacturer: **平和**
- formalModel: **Lルパン三世大航海者の秘宝H1**
- inspectionCode: **4S0946**
- releaseDate: **2024-12-02**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.7 / 99.1 / 101.4 / 106.1 / 110.1 / 114.3%**
- singleSeven: **1/920.1 / 879.1 / 831.3 / 685.2 / 633.5 / 636.9**
- doubleSevenAT: **1/421.5 / 401.4 / 383.9 / 355.1 / 345.6 / 327.5**
- totalInitialHit: **1/289.1 / 275.6 / 262.6 / 233.9 / 223.6 / 216.3**
- base: **約31G/50枚（約31.1G表記あり）**
- netIncrease: **擬似BONUS約2.0枚/G / AT約2.7枚/G / 上位AT約4.7枚/G**
- basicBonus: **30G / AT期待度約30%**
- basicAT: **初期50～300G**
- upperAT: **初期100～300G**
- normalGameCeiling: **AT間最大1000G+α**
- resetGameCeiling: **700G+α固定**
- settingChange: **有利区間・AT間天井・内部状態・山盛りポイントRESET**
- carryOver: **有利区間・AT間天井・内部状態・山盛りポイント引継ぎ**
- powerCycle: **AT間天井G引継ぎを直接確認 / 内部状態・山盛りポイント・有利区間の純電断独立契約はUNVERIFIED**
- resetDetection: **朝一G数カウンター？？？ / 700G+α超過で据え置き濃厚材料 / ガックンUNVERIFIED**
- publicMorningNumbers: **リセット天井700G+α固定。モード/内部状態/山盛りポイント初期振り分け・ガックン率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_LIMITED_UNVERIFIED_POWER_STATE_POINT_SECTION_DETAILS_AND_GAKKUN**

## conflicts
- 開始ステージはなな徹「湖岸線」、1geki「フィアットステージ」で表記競合。双方とも変更/据え置き側で同一開始ステージ扱いのため判別契約には影響なし。
- AT初期G数は業界発表の50～100G表記と、後続解析の50～300G表記が存在。本レコードは性能レンジとして後続複数解析の50～300Gをcanonicalにし、基本帯表現差を保持。

## 2024-12-02境界 — OPEN 2/7 known
1. L 犬夜叉2 — No.1687 DONE
2. Lルパン三世 大航海者の秘宝 — No.1688 DONE
3. Sウルトラミラクルジャグラー — NEXT
4. スマスロ 聖戦士ダンバイン — PENDING
5. 桃太郎電鉄 ～パチスロも定番!～ — PENDING
6. 沖ドキ！ゴージャス 30φ — PENDING / 別スペック監査
7. 沖ドキ！ゴージャス 25φ — PENDING / 別スペック監査
- 7候補処理後、当時新台カレンダー、メーカー別一覧、PB/地域先行/別型式/延期・段階導入を再監査して2024-12-02境界をCLOSED判定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 旧INDEXが疎・進捗非正本であるため、次回以降machines実体を時系列で再列挙し、同カーソル直後の最初のresetBehavior欠損レコードを確定してから遡及更新する。
- resetBehavior欠損のみを理由に既存`COMPLETE_CORE`を降格しない。

## 次回再開地点
- 最新mainを再同期しNo.1688と本handoffを確認。
- **No.1689候補 `Sウルトラミラクルジャグラー`** から再開。
- 続いて同日known候補 `スマスロ 聖戦士ダンバイン` → `桃太郎電鉄 ～パチスロも定番!～` → `沖ドキ！ゴージャス 30φ` → `沖ドキ！ゴージャス 25φ` を処理する。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## 今回の主要ソース
取得日: 2026-09-14
### Lルパン三世 大航海者の秘宝
- HAZUSE: https://hazuse.com/machine/pachislot/4S0946/
- 遊技通信: https://www.yugitsushin.jp/news/big-chance%E3%81%AF%E3%81%84%E3%81%9F%E3%81%A0%E3%81%8F%E3%81%9C%E3%80%82%E3%80%8Cl%E3%83%AB%E3%83%91%E3%83%B3%E4%B8%89%E4%B8%96%E3%80%80%E5%A4%A7%E8%88%AA%E6%B5%B7%E8%80%85%E3%81%AE%E7%A7%98%E5%AE%9D/
- P-WORLD業界ニュース: https://news.p-world.co.jp/articles/29347/yugitsushin
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004611/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10157
- パチビー: https://www.pachibee.jp/machines/kouryaku/224100004
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/85416/
- 必勝本 天井振り分け: https://p.hisshobon.jp/machine/4415/1/106072
- 必勝本 通常時: https://hisshobon.com/machineinfo/85414/
- 必勝本 AT: https://hisshobon.com/machineinfo/85401/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/851/25845/
- なな徹 天井: https://nana-press.com/kaiseki/machine/851/25842/
- なな徹 山盛りポイント: https://nana-press.com/kaiseki/machine/851/25850/
- 一撃 天井/朝一: https://1geki.jp/slot/l_lupin_totgn/3/
- 一撃 規定G数: https://1geki.jp/slot/l_lupin_totgn/42/
- マルっとWAVE: https://marutto-w.com/industry_news/20241202
- ちょんぼりすた 天井: https://chonborista.com/slot/orinpia-slot/227544/
- 真パチスロ備忘録 リセット判別実戦例: https://sin-surobi.com/l_rupan_daikoukainohihou/33700/
