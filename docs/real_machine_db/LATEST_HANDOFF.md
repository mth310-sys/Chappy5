更新日: 2026-09-14

## 現在地点
- recordCount: **1689**
- latestRecordAdded: **ウルトラミラクルジャグラー — No.1689**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-12-02_ultra-miracle-juggler.md`
- chronologicalFrontier: **2024-12-02**
- schema: **resetBehavior v0.7**
- status: **2024-12-02_BOUNDARY_OPEN_3_OF_7_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1688を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1689 `ウルトラミラクルジャグラー` を追加し、性能コア + resetBehavior v0.7を収録。
- 北電子公式検定情報、HAZUSE、遊技通信/P-WORLD、パチビー、パチマガスロマガ、なな徹等で型式 `SウルトラミラクルジャグラーKT`、検定番号 `330695`、2024-12-02導入、設定別BIG/REG/合算/機械割を照合。
- 本機はノーマルタイプで天井、CZ/AT、内部モード、周期、ポイントを持たないため、設定変更/据え置き/純電源OFF→ONのゲーム数・天井・モード・状態・有利区間・朝一恩恵/不利の多くは構造上N/A。前日ハマリの性能上の持越しもなし。
- 本機固有ガックン条件/発生率、および純電源OFF→ON時の本機固有リール初動は、機種名/正式型式/北電子/ジャグラーと「ガックン・リール・朝一・設定変更・据え置き・電源OFF ON」を組み替え、公式・業界・主要解析・旧DB・後年整理まで再探索したが高信頼固定できずUNVERIFIED_AFTER_RESEARCH。
- ジャグラー一般論・店舗対策例は本機固有契約へ転記していない。

## No.1689 — ウルトラミラクルジャグラー
- path: `docs/real_machine_db/machines/2024-12-02_ultra-miracle-juggler.md`
- manufacturer: **北電子**
- formalModel: **SウルトラミラクルジャグラーKT**
- inspectionCode: **330695**
- releaseDate: **2024-12-02**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.0 / 98.1 / 99.8 / 102.1 / 104.5 / 108.1%**
- BIG: **1/267.5 / 261.1 / 256.0 / 242.7 / 233.2 / 216.3**
- REG: **1/425.6 / 402.1 / 350.5 / 322.8 / 297.9 / 277.7**
- totalBonus: **1/164.3 / 158.3 / 147.9 / 138.6 / 130.8 / 121.6**
- base: **約42.0G/50枚**
- basicPayout: **BIG約240枚 / REG約96枚**
- ceiling: **非搭載**
- settingChange: **天井/モード/周期/ポイント等の朝一蓄積対象なし。変更後設定の通常確率で1G目から抽選**
- carryOver: **性能上の持越し対象なし / 前日ゲーム数は当日の抽選率へ影響なし**
- powerCycle: **天井/モード等の持越し対象なし / 本機固有リール初動はUNVERIFIED**
- advantageousSection: **N/A（通常ノーマルタイプのため朝一有利区間契約なし）**
- resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetDetection: **ゲーム数・天井・モード等による判別要素なし / 本機固有ガックンUNVERIFIED**
- publicMorningNumbers: **N/A。ガックン率のみPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_MACHINE_SPECIFIC_GAKKUN_AND_DIRECT_POWER_CYCLE_REEL_BEHAVIOR**

## conflicts
- 公表機械割は主要複数資料で97.0～108.1%が一致。一部後年サイトの97.87～110.05%等は独自攻略条件込み計算値で定義が異なるためcanonicalへ混ぜず別定義扱い。
- 50枚ベースはパチマガスロマガ等で約42.0G/50枚。HAZUSEのベース欄空欄は競合扱いしない。

## 2024-12-02境界 — OPEN 3/7 known
1. L 犬夜叉2 — No.1687 DONE
2. Lルパン三世 大航海者の秘宝 — No.1688 DONE
3. Sウルトラミラクルジャグラー — No.1689 DONE
4. スマスロ 聖戦士ダンバイン — NEXT
5. 桃太郎電鉄 ～パチスロも定番!～ — PENDING
6. 沖ドキ！ゴージャス 30φ — PENDING / 別スペック監査
7. 沖ドキ！ゴージャス 25φ — PENDING / 別スペック監査
- 7候補処理後、当時新台カレンダー、メーカー別一覧、PB/地域先行/別型式/延期・段階導入を再監査して2024-12-02境界をCLOSED判定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 旧INDEXが疎・進捗非正本であるため、次回以降machines実体を時系列で再列挙し、同カーソル直後の最初のresetBehavior欠損レコードを確定してから遡及更新する。
- resetBehavior欠損のみを理由に既存`COMPLETE_CORE`を降格しない。

## 次回再開地点
- 最新mainを再同期しNo.1689と本handoffを確認。
- **No.1690候補 `スマスロ 聖戦士ダンバイン`** から再開。
- 続いて同日known候補 `桃太郎電鉄 ～パチスロも定番!～` → `沖ドキ！ゴージャス 30φ` → `沖ドキ！ゴージャス 25φ` を処理する。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## 今回の主要ソース
取得日: 2026-09-14
### ウルトラミラクルジャグラー
- 北電子 検定情報: https://www.kitadenshi.co.jp/slot-kentei/ultramiraclejuggler/
- 北電子 公式製品ページ: https://www.kitadenshi.co.jp/products/2024/umj/
- HAZUSE: https://hazuse.com/hd/330695-2/
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/29215
- P-WORLD / Amusement Japan: https://news.p-world.co.jp/articles/29251
- パチビー: https://www.pachibee.jp/machines/index/224100007
- パチマガスロマガFREE: https://pachimaga.com/free/mach/maker-s/kitac/064465.php
- パチマガスロマガ旧攻略ページ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/127/kh01.php
- なな徹 ボーナス確率/機械割: https://nana-press.com/kaiseki/machine/838/24962/
- 必勝本: https://p.hisshobon.jp/news/2060
- 6確 朝一・リセット整理: https://www.kaku6.jp/slot/ulmirajuggler/
- Ativo: https://ativo.jp/2024/10/21/s%E3%82%A6%E3%83%AB%E3%83%88%E3%83%A9%E3%83%9F%E3%83%A9%E3%82%AF%E3%83%AB%E3%82%B8%E3%83%A3%E3%82%B0%E3%83%A9%E3%83%BC/
