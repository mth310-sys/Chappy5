更新日: 2026-09-14

## 現在地点
- recordCount: **1686**
- latestRecordAdded: **スマート沖スロ 超華祭 — No.1686**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-11-18_smart-okislo-choukasai.md`
- chronologicalFrontier: **2024-11-18**
- schema: **resetBehavior v0.7**
- status: **2024-11-18_BOUNDARY_CLOSED_3_OF_3_CANONICAL_PROCESSED_WITH_RELEASE_DATE_CONFLICT_RETAINED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1685を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1686 `スマート沖スロ 超華祭` を追加し、性能コア + resetBehavior v0.7を収録。
- canonical導入日はパイオニア公式の2024-11-18稼働開始告知と複数機種DB/解析の一致を優先して **2024-11-18** とした。
- マルっとWAVEの2024-11-05、K-Naviの2024-11-04表記は削除せず `CONFLICT_RELEASE_DATE_2024-11-18_VS_11-05_VS_11-04` として保持。
- 2024-11-18 canonical群は3/3処理済み。PB/地域先行/別型式/延期・段階導入を再監査したうえで、この境界をCLOSEDとする。

## No.1686 — スマート沖スロ 超華祭
- path: `docs/real_machine_db/machines/2024-11-18_smart-okislo-choukasai.md`
- manufacturer: **パイオニア**
- formalModel: **L超華祭PB**
- inspectionCode: **4S0743**
- releaseDate: **2024-11-18**
- releaseDateConflict: **2024-11-18 vs 2024-11-05 vs 2024-11-04**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- payoutRate: **設定1 97.9 / 2 99.8 / 4 103.3 / 5 106.3 / 6 110.0%**
- BIG: **1/274 / 1/266 / 1/248 / 1/234 / 1/221**
- REG: **1/384 / 1/364 / 1/331 / 1/304 / 1/279**
- 合算: **1/160 / 1/153 / 1/142 / 1/132 / 1/123**
- base: **約34.0G/50枚（設定1）**
- netIncrease: **約5.6枚/G**
- BIG: **最大312枚 / 平均約309枚**
- REG: **最大107枚 / 平均約103枚**
- normalGameCeiling: **700G+α**
- resetGameCeiling: **700G+α（設定変更専用の固定短縮なし）**
- settingChange: **ゲーム数天井RESET / 内部状態RESET / 有利区間RESET扱い（明示資料は中信頼注意）**
- carryOver: **ゲーム数天井・内部状態引継ぎ / 有利区間継続扱い**
- powerCycle: **ゲーム数天井・内部状態引継ぎ / 有利区間継続扱い**
- resetBenefits: **設定変更専用の天井短縮・朝一高確・専用モード・公開当選率UPは再探索後も確認なし**
- resetDetection: **設定Lは常時下パネル点滅だが通常の変更判別とは別 / 本機固有ガックンはUNVERIFIED_AFTER_RESEARCH**
- missing: **設定変更/純電断時開始ステージ、本機固有ガックン条件/発生率、設定変更専用の公開モード振り分け・朝一当選率・恩恵率**
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_LIMITED_UNVERIFIED_STAGE_GAKKUN_AND_NO_SPECIAL_PUBLIC_RESET_NUMBERS**

## 2024-11-18境界 — CLOSED 3/3
1. Lダブルアタック2 with OZS-1000＆RAPHAEL — No.1684 DONE
2. スマスロ モンスターハンターライズ — No.1685 DONE
3. スマート沖スロ 超華祭 — No.1686 DONE / RELEASE DATE CONFLICT RETAINED
- 11/04・11/05表記の超華祭は別個体として二重計上せず、同一機の導入日競合としてNo.1686へ統合。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回、旧INDEXが疎・進捗非正本であることとmachines実体順から、幻獣覇王T直後の未QA機種を安全に一意固定できなかったため、推測で旧レコードを更新していない。
- 次回は最新mainのmachines実体を時系列で再列挙し、`2007-07-09_genju-haou-t.md`より後の最初のresetBehavior欠損レコードを確定してから遡及更新する。
- resetBehavior欠損のみを理由に既存`COMPLETE_CORE`を降格しない。

## 次回再開地点
- 最新mainを再同期しNo.1686と本handoffを確認。
- 次境界候補は **2024-12-02**。番号付与前に当時新台カレンダー、メーカー別一覧、PB/地域先行/別型式/延期・段階導入を再監査する。
- 現時点の候補は **No.1687候補 `L 犬夜叉2`**、同日候補 **`L ルパン三世 大航海者の秘宝`**。同日追加機種の有無を再監査してから順番を固定する。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。
- 遡及QAは上記カーソルから再開し、性能コアの`COMPLETE_CORE`を不用意に崩さない。

## 今回の主要ソース
取得日: 2026-09-14
### スマート沖スロ 超華祭
- パイオニア公式 Pioneer Channel 稼働開始動画: https://www.youtube.com/watch?v=aj3bvghjA30
- パイオニア公式 Pioneer Channel PV: https://www.youtube.com/watch?v=GBR1pFOw_1U
- P-WORLD: https://www.p-world.co.jp/machine/database/10102
- 一撃: https://1geki.jp/slot/l_chohanamatsuri/39/
- パチビー: https://www.pachibee.jp/machines/index/224100002
- パチセブン: https://pachiseven.jp/machines/7014/cutout/7
- ちょんぼりすた: https://chonborista.com/slot/pionia-slot/220308/
- ぱちんこキュレーション: https://pachinko-curation.com/50230/
- マルっとWAVE 検定通過: https://marutto-w.com/industry_news/20240819
- 秋田県公安委員会 公示（L超華祭PB / 第4S0743号）: https://www.police.pref.akita.lg.jp/uploads/contents/news_0000000814_00/%E5%91%8A%E7%A4%BA%EF%BC%88R6.8.27%EF%BC%89.pdf
- K-Navi（11/04表記）: https://p-kn.com/slot/4200/
- マルっとWAVE（11/05表記）: https://marutto-wave.jp/new_machine/20241105/
### 次境界確認用
- パチンコビレッジ 2024-12-02新台一覧（犬夜叉2 / ルパン三世）
- みんパチ 2024-12-02新台一覧
- ぱちんこキュレーション L犬夜叉2 2024-12-02
- DMMぱちタウン Lルパン三世 大航海者の秘宝 2024-12-02
