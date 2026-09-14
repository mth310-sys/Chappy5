更新日: 2026-09-14

## 現在地点
- recordCount: **1676**
- latestRecordAdded: **スマスロ 鬼武者3 — No.1676**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-10-07_smart-slot-onimusha-3.md`
- chronologicalFrontier: **2024-10-07**
- schema: **resetBehavior v0.7**
- status: **2024-10-07_GROUP_OPEN_1_OF_AT_LEAST_4_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直近No.1675を再同期。INDEXは旧表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- handoff指定のNo.1676候補 `スマスロ 鬼武者3` を性能コア + resetBehavior v0.7で登録。
- 2025年 `スマスロ 新鬼武者3` と検索結果が混在するため、2024-10-07導入・型式 `L鬼武者3XA` に限定して照合。
- アデリオン製、型式 `L鬼武者3XA`、検定番号 `4S0403`、2024-10-07導入を遊技通信/P-WORLD、HAZUSE、必勝本、一撃、なな徹等で照合。
- 設定1〜6のボーナス初当り 1/412.9 / 1/402.3 / 1/388.4 / 1/352.2 / 1/341.8 / 1/335.2、機械割97.3 / 98.8 / 100.6 / 105.3 / 107.5 / 110.3%、約32.6G/50枚、純増約2.8 or 6.1枚/Gを複数資料で一致確認。
- SBB約711枚 / BB約318枚 / RB約104枚。通常最深天井1350G+α。
- 設定変更時は天井ゲーム数RESET、リセットモード、状態再抽選、小役ポイントRESET。有利区間もRESET。
- 据え置き時は有利区間・内部状態・天井を引継ぎ。純電源OFF→ONでは必勝本が天井ゲーム数・モード・状態・小役ポイントの引継ぎを明記。
- 設定変更後は最大700G+αへ天井短縮し、200G以内ボーナス当選期待度50%OVER。公開朝一数値として保存。
- リセットモードの詳細規定G振り分け、機種固有ガックン条件/率は検索語・資料系統変更後も固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH` / `UNVERIFIED_AFTER_RESEARCH`。
- 一撃の一部記事にリセットモードを「移行の可能性あり!?」とする表現がある一方、必勝本・なな徹等の後続解析は設定変更時リセットモードとして一致。canonicalは後続複数解析を採用し、表現差をレコード内CONFLICTとして保持。

## No.1676 — スマスロ 鬼武者3
- path: `docs/real_machine_db/machines/2024-10-07_smart-slot-onimusha-3.md`
- manufacturer: **アデリオン / ユニバーサルエンターテインメント**
- formalModel: **L鬼武者3XA**
- inspectionCode: **4S0403**
- releaseDate: **2024-10-07**
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 擬似ボーナス**
- payoutRate: **97.3 / 98.8 / 100.6 / 105.3 / 107.5 / 110.3%**
- initialHit: **1/412.9 / 1/402.3 / 1/388.4 / 1/352.2 / 1/341.8 / 1/335.2**
- base: **約32.6G/50枚**
- netIncrease: **約2.8 or 6.1枚/G**
- normalCeiling: **最大1350G+α**
- resetCeiling: **最大700G+α**
- resetMorningNumeric: **200G以内ボーナス当選期待度50%OVER**
- settingChange: **天井G RESET / リセットモード / 状態再抽選 / 小役ポイントRESET / 有利区間RESET**
- carryOver: **有利区間・内部状態・天井CARRY_OVER**
- powerCycle: **天井G・モード・状態・小役ポイントCARRY_OVER**
- detection: **700G+α超の非当選は設定変更挙動と不整合。機種固有ガックンUNVERIFIED。**

## 2024-10-07境界 — OPEN
1. スマスロ 鬼武者3 — No.1676 DONE
2. スマスロ頭文字D 2nd — candidate
3. 今日から俺は!! パチスロ編 — candidate
4. L 真・一騎当千 — candidate
- `トリプルクラウンフォーユー` は10月導入候補。具体日、25/30Φ、PB/地域先行/段階導入を次回監査。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回、main実体tree/検索からその直後の既存レコードを安全に一意確定できなかったため、誤更新防止を優先して旧レコードへの書込みは実施していない。
- `COMPLETE_CORE`性能判定は変更なし。reset QAは別管理を継続。
- 次回は最新mainのmachines実体を日付順に再列挙し、幻獣覇王T直後の未QAレコードを確定してから遡及補完する。推測でカーソルを進めない。

## 次回再開地点
- 最新mainを再同期しNo.1676と本handoffを確認。
- **No.1677候補 `スマスロ頭文字D 2nd` — 2024-10-07** を性能コア + resetBehavior v0.7で収集。
- 同日候補 `今日から俺は!! パチスロ編`、`L 真・一騎当千`、`トリプルクラウンフォーユー` の日付/型式/地域先行/PB/25・30Φ/延期・段階導入を監査し、2024-10-07境界を閉じるまで継続。
- 遡及QAは `2007-07-09_genju-haou-t.md` 直後の実体レコード確定から再開。
- 欠損は表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/小役ポイント/ガックン/有利区間等へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/28730/yugitsushin
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10104
- HAZUSE: https://hazuse.com/machine/pachislot/4S0403/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/84748/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/84737/
- 必勝本 モード: https://p.hisshobon.jp/machine/4372/1/105231
- 一撃: https://1geki.jp/slot/l_onimusya3/
- 一撃 天井/朝一: https://1geki.jp/slot/l_onimusya3/3/
- なな徹 天井: https://nana-press.com/kaiseki/machine/828/24473/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/828/24356/
- なな徹 モード: https://nana-press.com/kaiseki/machine/828/24359/
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/219380/
