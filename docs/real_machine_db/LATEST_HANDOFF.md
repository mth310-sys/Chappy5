更新日: 2026-09-14

## 現在地点
- recordCount: **1687**
- latestRecordAdded: **L 犬夜叉2 — No.1687**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-12-02_l-inuyasha2.md`
- chronologicalFrontier: **2024-12-02**
- schema: **resetBehavior v0.7**
- status: **2024-12-02_BOUNDARY_OPEN_1_OF_7_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1686を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1687 `L 犬夜叉2` を追加し、性能コア + resetBehavior v0.7を収録。
- 型式 `L犬夜叉2FK`、検定番号 `4S0844`、エフ製、2024-12-02導入をHAZUSE・業界記事・複数解析で照合。
- 2024-12-02境界を再監査し、従来handoff記載の犬夜叉2 / ルパン三世だけでなく、ウルトラミラクルジャグラー、スマスロ聖戦士ダンバイン、桃太郎電鉄 ～パチスロも定番!～、沖ドキ！ゴージャス30φ / 25φも同日候補として確認。漏れ防止のため境界をOPEN 1/7とした。

## No.1687 — L 犬夜叉2
- path: `docs/real_machine_db/machines/2024-12-02_l-inuyasha2.md`
- manufacturer: **エフ（フィールズ販売）**
- formalModel: **L犬夜叉2FK**
- inspectionCode: **4S0844**
- releaseDate: **2024-12-02**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.9 / 101.7 / 106.4 / 111.3 / 114.9%**
- CZ: **約1/249 / 244 / 240 / 234 / 217 / 210**
- AT: **約1/435 / 420 / 402 / 366 / 336 / 313**
- base: **約33G/50枚（約33.3G表記あり）**
- netIncrease: **AT約1.8枚/G / 擬似ボーナス約5.0枚/G**
- basicAT: **20G+α**
- basicBonus: **青7約200枚 / 犬夜叉図柄約100枚 / 赤7系約50枚**
- normalGameCeiling: **最大666G+α**
- resetGameCeiling: **最大333G+α（151G or 333G）**
- normalCzSkipCeiling: **最大7スルー**
- resetCzSkipCeiling: **最大3スルー**
- resetCzSkipDistribution: **0回25.0 / 1回16.8 / 2回16.8 / 3回41.4%（2スルー以内58.6%）**
- resetInitialState: **通常74.6 / 高確20.3 / 超高確5.1%**
- settingChange: **天井RESET・短縮 / CZスルー再抽選・短縮 / 状態再抽選 / 月下ポイントRESET・再抽選 / 有利区間RESET**
- carryOver: **天井・内部状態・有利区間・月下ポイント引継ぎ**
- powerCycle: **天井G・CZスルー・内部状態は直接資料で引継ぎ確認。月下ポイント/有利区間の純電断のみ独立契約は直接明記を固定できず推測転記なし**
- resetDetection: **333G+α超過や3スルー超過は据え置き濃厚材料 / 有利区間ランプ判別不可 / 本機固有ガックンはUNVERIFIED_AFTER_RESEARCH**
- publicMorningNumbers: **設定変更時CZスルー天井振り分け、内部状態振り分け、設定別月下ポイント初期値を保存**
- coreStatus: **COMPLETE_CORE**
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_LIMITED_UNVERIFIED_GAKKUN_POWER_SECTION_AND_STAGE_DETAILS**

## 2024-12-02境界 — OPEN 1/7 known
1. L 犬夜叉2 — No.1687 DONE
2. Lルパン三世 大航海者の秘宝 — NEXT
3. Sウルトラミラクルジャグラー — PENDING
4. スマスロ 聖戦士ダンバイン — PENDING
5. 桃太郎電鉄 ～パチスロも定番!～ — PENDING
6. 沖ドキ！ゴージャス 30φ — PENDING / 別スペック監査
7. 沖ドキ！ゴージャス 25φ — PENDING / 別スペック監査
- しんのすけちゃんねる2024年導入一覧は上記7機/スペックを12月2日～として掲載。
- パチンコ・パチスロ.com当時カレンダーは犬夜叉2 / ルパン三世 / ウルトラミラクルジャグラーを同日掲載。
- 1gekiメーカー一覧でスマスロ聖戦士ダンバイン、HAZUSEで桃太郎電鉄の2024-12-02を個別確認。
- PB/地域先行/別型式/延期・段階導入は境界CLOSED前に再監査する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 旧INDEXが疎・進捗非正本であるため、次回以降machines実体を時系列で再列挙し、同カーソル直後の最初のresetBehavior欠損レコードを確定してから遡及更新する。
- resetBehavior欠損のみを理由に既存`COMPLETE_CORE`を降格しない。

## 次回再開地点
- 最新mainを再同期しNo.1687と本handoffを確認。
- **No.1688候補 `Lルパン三世 大航海者の秘宝`** から再開。
- 続いて同日known候補 `Sウルトラミラクルジャグラー` → `スマスロ 聖戦士ダンバイン` → `桃太郎電鉄 ～パチスロも定番!～` → `沖ドキ！ゴージャス 30φ` → `沖ドキ！ゴージャス 25φ` を処理する。
- 7候補処理後、当時新台カレンダー、メーカー別一覧、PB/地域先行/別型式/延期・段階導入を再監査して2024-12-02境界をCLOSED判定する。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## 今回の主要ソース
取得日: 2026-09-14
### L 犬夜叉2
- HAZUSE: https://hazuse.com/machine/pachislot/4S0844/
- P-WORLD業界ニュース（遊技通信）: https://news.p-world.co.jp/articles/29389/yugitsushin
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10160
- ちょんぼりすた: https://chonborista.com/slot/f/221755/
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/85376/
- パチ&スロ必勝本 狙いドコロ&ヤメ時: https://hisshobon.com/machineinfo/85394/
- パチ&スロ必勝本 AT解説: https://p.hisshobon.jp/machine/4414/1/105862
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/846/25669/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/846/25670/
- なな徹 月下ポイント: https://nana-press.com/kaiseki/machine/846/25672/
- 一撃 天井/朝一: https://1geki.jp/slot/l_inuyasya2/3/
- パチビー: https://www.pachibee.jp/machines/kouryaku/224100003
- ぱちんこキュレーション: https://pachinko-curation.com/50643/
### 2024-12-02境界監査
- しんのすけちゃんねる 2024年パチスロ導入機種一覧: https://shinnosuke-ch.com/2024%E5%B9%B4%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E5%B0%8E%E5%85%A5%E6%A9%9F%E7%A8%AE%E4%B8%80%E8%A6%A7/
- パチンコ・パチスロ.com 2024導入日カレンダー: https://pachinkopachisro.com/archives/57949784.html
- HAZUSE 桃太郎電鉄: https://hazuse.com/machine/pachislot/4S1052/
- 1geki Sammyメーカー一覧: https://1geki.jp/maker/sammy/
